# Instrucciones para configurar Firebase

## Paso 1: Crear un proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto"
3. Ingresa el nombre de tu proyecto (ej: "PeluqueriaMartin")
4. Sigue los pasos de configuración
5. Haz clic en "Crear proyecto"

## Paso 2: Crear una base de datos Firestore

1. En tu proyecto de Firebase, ve a "Firestore Database" en el menú izquierdo
2. Haz clic en "Crear base de datos"
3. Selecciona "Iniciar en modo de prueba" (para desarrollo)
4. Selecciona una ubicación (recomendado: "southamerica-east1" para Uruguay)
5. Haz clic en "Habilitar"

## Paso 3: Obtener las credenciales de Firebase

1. En tu proyecto, ve a "Configuración del proyecto" (icono de engranaje)
2. Ve a la pestaña "General"
3. Desplázate hacia abajo hasta "Tus apps"
4. Haz clic en el icono `</>` (Web)
5. Registra tu app con un nombre (ej: "Peluqueria Web")
6. Copia el objeto `firebaseConfig` que se te muestra

## Paso 4: Configurar el archivo firebase-config.js

1. Abre el archivo `firebase-config.js` en tu proyecto
2. Reemplaza los valores de ejemplo con tus credenciales reales:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY_REAL",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO_REAL",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID_REAL",
    appId: "TU_APP_ID_REAL"
};
```

## Paso 5: Configurar las reglas de seguridad de Firestore

1. En Firebase Console, ve a "Firestore Database"
2. Ve a la pestaña "Reglas"
3. Reemplaza las reglas existentes con:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**Nota:** Estas reglas permiten acceso público. Para producción, deberías implementar autenticación.

## Paso 6: Subir los archivos a GitHub

1. Sube todos los archivos modificados a tu repositorio de GitHub
2. Los archivos nuevos son:
   - `firebase-config.js`
   - `calendario.html` (modificado)
   - `admin-gestion-reservas.html` (modificado)

## Paso 7: Probar el sistema

1. Accede a tu web: `https://kazmdb.github.io/Peluqueriamartin/`
2. Haz una reserva desde tu PC
3. Haz otra reserva desde tu celular
4. Ve al panel administrativo: `https://kazmdb.github.io/Peluqueriamartin/admin-gestion-reservas.html`
5. Verifica que ambas reservas aparezcan

## Solución de problemas

### Error: "FirebaseError: Missing or insufficient permissions"

- Ve a Firestore Database → Reglas
- Asegúrate de que las reglas permitan lectura y escritura

### Error: "FirebaseError: Project ID does not exist"

- Verifica que el `projectId` en `firebase-config.js` sea correcto
- Asegúrate de que el proyecto exista en Firebase Console

### Las reservas no se sincronizan

- Verifica que `firebase-config.js` esté cargado correctamente
- Abre la consola del navegador (F12) y busca errores de Firebase
- Asegúrate de que Firestore esté habilitado en tu proyecto

## Ventajas de usar Firebase

✅ **Sincronización en tiempo real**: Las reservas se actualizan automáticamente en todos los dispositivos
✅ **Base de datos en la nube**: No dependes de localStorage
✅ **Escalabilidad**: Funciona con cualquier número de usuarios
✅ **Gratis**: El plan gratuito de Firebase es suficiente para este proyecto
✅ **Fácil de implementar**: No necesitas configurar un servidor propio

## Costos

El plan gratuito de Firebase incluye:
- 50,000 lecturas de documentos por día
- 20,000 escrituras de documentos por día
- 1 GB de almacenamiento

Esto es más que suficiente para una peluquería con reservas diarias.