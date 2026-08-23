const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

const DLOCAL_GO_API = process.env.DLOCAL_GO_ENV === 'production'
    ? 'https://api.dlocalgo.com'
    : 'https://api-sbx.dlocalgo.com';

const API_KEY    = process.env.DLOCAL_GO_API_KEY    || '';
const SECRET_KEY = process.env.DLOCAL_GO_SECRET_KEY || '';

// Credenciales de WhatsApp — UltraMsg.
// Configurar con:
//   firebase functions:secrets:set ULTRAMSG_TOKEN
//   firebase functions:secrets:set ULTRAMSG_INSTANCE
//   firebase functions:secrets:set BUSINESS_PHONE
// NUNCA hardcodear aquí.
const ULTRAMSG_TOKEN    = process.env.ULTRAMSG_TOKEN    || '';
const ULTRAMSG_INSTANCE = process.env.ULTRAMSG_INSTANCE || '';
const BUSINESS_PHONE    = process.env.BUSINESS_PHONE    || '';

/**
 * Helper interno: envía un mensaje de texto vía UltraMsg.
 */
async function sendWhatsAppUltra(to, body) {
    const response = await axios.post(
        `https://api.ultramsg.com/${ULTRAMSG_INSTANCE}/messages/chat`,
        { token: ULTRAMSG_TOKEN, to, body }
    );
    return response.data;
}

// ─────────────────────────────────────────────────────────────────────────────

exports.createPayment = functions.https.onCall(async (data, context) => {
    try {
        const { items, customer } = data;

        if (!items || !items.length) {
            throw new functions.https.HttpsError('invalid-argument', 'No hay productos en el carrito');
        }

        if (!customer || !customer.name || !customer.phone) {
            throw new functions.https.HttpsError('invalid-argument', 'Datos del cliente incompletos');
        }

        const totalAmount = items.reduce((sum, item) => {
            const priceStr = item.price.replace(/[^0-9]/g, '');
            const price = parseInt(priceStr);
            return sum + (price * (item.quantity || 1));
        }, 0);

        const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;

        const paymentData = {
            currency: 'UYU',
            amount: totalAmount,
            country: 'UY',
            order_id: orderId,
            description: `Pedido Martin Ferreira - ${customer.name}`,
            success_url: 'https://peluqueriamartin-beefb.web.app/pago-exitoso.html',
            back_url: 'https://peluqueriamartin-beefb.web.app/',
            notification_url: 'https://us-central1-peluqueriamartin-beefb.cloudfunctions.net/paymentWebhook',
            payer: {
                name: customer.name,
                phone: customer.phone,
            },
            metadata: {
                items: JSON.stringify(items),
                customer_name: customer.name,
                customer_phone: customer.phone,
            },
        };

        const response = await axios.post(`${DLOCAL_GO_API}/v1/payments`, paymentData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}:${SECRET_KEY}`,
            },
        });

        await admin.firestore().collection('payments').doc(orderId).set({
            orderId,
            dlocalPaymentId: response.data.id,
            status: response.data.status,
            amount: totalAmount,
            currency: 'UYU',
            customer,
            items,
            redirectUrl: response.data.redirect_url,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        return {
            success: true,
            redirectUrl: response.data.redirect_url,
            paymentId: response.data.id,
            orderId,
        };
    } catch (error) {
        console.error('Error creating payment:', error.response?.data || error.message);
        throw new functions.https.HttpsError('internal', 'Error al crear el pago: ' + (error.response?.data?.message || error.message));
    }
});

exports.paymentWebhook = functions.https.onRequest(async (req, res) => {
    try {
        const payload = req.body;
        const { id, status, order_id } = payload;

        if (!id || !order_id) {
            res.status(400).send('Invalid payload');
            return;
        }

        await admin.firestore().collection('payments').doc(order_id).update({
            status,
            dlocalPaymentId: id,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        if (status === 'PAID' || status === 'COMPLETED') {
            const paymentDoc = await admin.firestore().collection('payments').doc(order_id).get();
            if (paymentDoc.exists) {
                const paymentData = paymentDoc.data();
                await admin.firestore().collection('orders').doc(order_id).set({
                    customer: paymentData.customer,
                    items: paymentData.items,
                    total: paymentData.amount,
                    paymentId: id,
                    status: 'confirmed',
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                    paidAt: admin.firestore.FieldValue.serverTimestamp(),
                });

                const itemsList = paymentData.items.map(i =>
                    `• ${i.brand} - ${i.name} x${i.quantity}`
                ).join('\n');

                const message =
                    `🛒 *NUEVO PEDIDO PAGADO - MARTIN FERREIRA*\n\n` +
                    `👤 *Cliente:* ${paymentData.customer.name}\n` +
                    `📞 *Teléfono:* ${paymentData.customer.phone}\n` +
                    `💳 *Pago:* Aprobado (ID: ${id})\n\n` +
                    `📦 *Productos:*\n${itemsList}\n\n` +
                    `💰 *Total:* $U ${paymentData.amount}`;

                try {
                    if (ULTRAMSG_TOKEN && ULTRAMSG_INSTANCE && BUSINESS_PHONE) {
                        await sendWhatsAppUltra(BUSINESS_PHONE, message);
                    } else {
                        console.warn('WhatsApp no configurado: faltan variables de entorno.');
                    }
                } catch (waError) {
                    console.error('Error sending WhatsApp notification:', waError.message);
                }
            }
        }

        res.status(200).send('OK');
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).send('Error');
    }
});

exports.getPaymentStatus = functions.https.onCall(async (data, context) => {
    try {
        const { orderId } = data;

        if (!orderId) {
            throw new functions.https.HttpsError('invalid-argument', 'orderId requerido');
        }

        const doc = await admin.firestore().collection('payments').doc(orderId).get();

        if (!doc.exists) {
            throw new functions.https.HttpsError('not-found', 'Pago no encontrado');
        }

        return {
            success: true,
            payment: doc.data(),
        };
    } catch (error) {
        console.error('Error getting payment status:', error);
        throw new functions.https.HttpsError('internal', error.message);
    }
});

/**
 * enviarWhatsAppSecuro — Cloud Function callable.
 * El cliente la llama con { numero, mensaje }.
 * El token de UltraMsg nunca sale del servidor.
 * Solo usuarios autenticados pueden invocarla.
 */
exports.enviarWhatsAppSecuro = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Debes iniciar sesión para enviar mensajes.'
        );
    }

    const { numero, mensaje } = data;

    if (!numero || !mensaje) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'numero y mensaje son obligatorios.'
        );
    }

    if (!ULTRAMSG_TOKEN || !ULTRAMSG_INSTANCE) {
        throw new functions.https.HttpsError(
            'failed-precondition',
            'WhatsApp no está configurado en el servidor. Contactá al administrador.'
        );
    }

    // Formatear número (agregar prefijo Uruguay si falta)
    let numeroFormateado = String(numero).replace(/[\s\-\(\)\+]/g, '');
    if (!numeroFormateado.startsWith('598')) {
        numeroFormateado = '598' + numeroFormateado;
    }

    try {
        const result = await sendWhatsAppUltra(numeroFormateado, mensaje);
        if (result && result.sent) {
            return { success: true, messageId: result.id };
        } else {
            throw new Error('UltraMsg devolvió sent=false');
        }
    } catch (error) {
        console.error('Error al enviar WhatsApp:', error.message);
        throw new functions.https.HttpsError('internal', 'No se pudo enviar el mensaje de WhatsApp.');
    }
});
