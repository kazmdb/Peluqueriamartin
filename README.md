# Martin Ferreira - Sistema de Reservas

Sistema de reservas profesional con panel de administración para la peluquería Martin Ferreira.

## 🎯 Cómo funciona

### Sistema de Reservas
- **Sistema de turnos dinámico** basado en configuración de horarios
- **Configuración flexible** de horarios por día desde el panel de administración
- **Gestión de servicios** con activación/desactivación dinámica
- **Validación en tiempo real** de disponibilidad

### Panel de Administración
- **Gestión completa de reservas**: Ver, editar, crear y completar reservas
- **Configuración de horarios**: Definir horarios de atención por día
- **Gestión de servicios**: Activar/desactivar servicios dinámicamente
- **Anticipación de servicios**: Configurar tiempo mínimo de anticipación por servicio
- **Restricciones horarias**: Limitar servicios a franjas horarias específicas
- **Vista de calendario**: Visualización de todas las reservas
- **Notificaciones en tiempo real**: Actualizaciones instantáneas

### Servicios Disponibles

| Servicio | Precio | Duración |
|----------|--------|----------|
| Corte Caballero | $U 800 | 30 min |
| Corte Dama | $U 1,200 | 45 min |
| Corte Niño | $U 500 | 30 min |
| Tinte Completo | $U 2,500 | 90 min |
| Mechas | $U 3,500 | 120 min |
| Balayage | $U 4,000 | 150 min |
| Hidratación Profunda | $U 1,000 | 30 min |
| Keratina | $U 4,500 | 150 min |
| Peinado Evento | $U 2,000 | 60 min |
| Afeitado/Recorte Barba | $U 600 | 30 min |

## 🚀 Uso

### Abrir el sistema
- **Clientes**: Abre `index.html` en tu navegador
- **Administración**: Abre `admin-gestion-reservas.html` en tu navegador

### Requisitos previos
1. **Configurar Firebase**: Sigue las instrucciones en `FIREBASE_SETUP.md`
2. **Crear base de datos**: Configura Firestore en Firebase Console
3. **Actualizar configuración**: Edita `firebase-config.js` con tus credenciales

### Funcionalidades del Cliente
1. **Ver disponibilidad**: Los días muestran disponibilidad en tiempo real
2. **Seleccionar servicio**: Elige entre todos los servicios disponibles
3. **Elegir fecha y hora**: Selecciona día y horario disponible
4. **Completar reserva**: Ingresa tus datos personales
5. **Confirmación**: Recibe confirmación instantánea

### Funcionalidades del Administrador
1. **Ver todas las reservas**: Listado completo con filtros
2. **Editar reservas**: Modificar fecha, hora, servicio o cliente
3. **Crear reservas**: Agregar nuevas reservas manualmente
4. **Completar reservas**: Marcar reservas como completadas
5. **Configurar horarios**: Definir horarios de atención por día
6. **Gestionar servicios**: Activar/desactivar servicios
7. **Configurar anticipación**: Establecer tiempo mínimo de reserva por servicio
8. **Restringir horarios**: Limitar servicios a franjas horarias específicas

## 📱 Características

- ✅ **Firebase Real-time**: Sincronización instantánea
- ✅ **Panel de administración**: Gestión completa del sistema
- ✅ **Configuración dinámica**: Horarios y servicios configurables
- ✅ **Anticipación de servicios**: Tiempo mínimo de reserva por servicio
- ✅ **Restricciones horarias**: Franjas horarias específicas por servicio
- ✅ **Diseño Apple-style**: Interfaz moderna y elegante
- ✅ **Responsive**: Funciona en móviles y desktop
- ✅ **Validación inteligente**: Impide reservas inválidas
- ✅ **Notificaciones**: Feedback visual en tiempo real
- ✅ **Glassmorphism**: Efectos de vidrio esmerilado

## 🎨 Diseño

- **Estilo Apple**: Inspirado en el diseño de Apple
- **Colores**: Paleta profesional con acentos dorados
- **Tipografía**: Helvetica Neue y SF Pro
- **Animaciones**: Transiciones suaves y naturales
- **Glassmorphism**: Efectos de desenfoque y transparencia
- **Responsive**: Adaptado a todos los dispositivos

## 📂 Estructura del proyecto

```
.
├── index.html                      # Página principal para clientes
├── calendario.html                 # Sistema de reservas
├── admin-gestion-reservas.html     # Panel de administración
├── firebase-config.js              # Configuración de Firebase
├── assets/                         # Recursos estáticos
│   └── hero.mp4                    # Video para efecto scroll (opcional)
├── CLAUDE.md                       # Instrucciones para Claude Code
├── FIREBASE_SETUP.md               # Guía de configuración de Firebase
├── INSTRUCCIONES.md                # Instrucciones adicionales
└── README.md                       # Este archivo
```

## 🔧 Configuración

### Firebase
1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita Firestore Database
3. Crea las colecciones necesarias:
   - `reservas` - Para almacenar las reservas
   - `config` - Para configuración del sistema
4. Copia tus credenciales en `firebase-config.js`

### Horarios de Atención
Configura los horarios desde el panel de administración:
- Ve a la sección "Configuración"
- Selecciona "Horarios"
- Define horarios por día (inicio y fin)
- Activa/desactiva días según necesidad

### Servicios
Gestiona los servicios desde el panel de administración:
- Ve a la sección "Configuración"
- Selecciona "Servicios"
- Activa/desactiva servicios según disponibilidad
- Configura anticipación mínima por servicio
- Establece restricciones horarias si es necesario

### Anticipación de Servicios
Configura el tiempo mínimo de anticipación requerido para reservar servicios específicos:
- Ve a la sección "Servicios" en el panel de administración
- Para cada servicio, establece las horas de anticipación requeridas
- Ejemplo: Masajes relajantes requieren 12 horas de anticipación
- Ejemplo: Cortes de cabello no requieren anticipación (0 horas)
- El sistema validará automáticamente esta restricción al crear reservas

## 💡 Consejos de uso

### Para Clientes
1. **Verifica disponibilidad**: El sistema muestra horarios disponibles en tiempo real
2. **Selecciona servicio**: Elige el servicio que necesitas
3. **Completa datos**: Ingresa información correcta para contacto
4. **Confirma reserva**: Verifica todos los datos antes de confirmar

### Para Administradores
1. **Monitorea reservas**: Revisa regularmente las nuevas reservas
2. **Configura horarios**: Mantén los horarios actualizados
3. **Gestiona servicios**: Activa/desactiva según disponibilidad
4. **Completa reservas**: Marca las reservas como completadas

## 🔄 Mantenimiento

### Backup de datos
Firebase realiza backups automáticos. Para exportar datos:
1. Ve a Firebase Console
2. Selecciona tu proyecto
3. Ve a Firestore Database
4. Usa "Export Data" para descargar

### Resetear el sistema
Para borrar todas las reservas:
1. Ve a Firebase Console
2. Selecciona Firestore Database
3. Borra la colección `reservas`
4. Borra la colección `config`

## 📞 Soporte

Para preguntas o sugerencias, contacta a Martin Ferreira.

## 🚨 Solución de problemas

### Firebase no conecta
- Verifica que `firebase-config.js` tenga las credenciales correctas
- Revisa que Firestore esté habilitado en Firebase Console
- Verifica las reglas de seguridad de Firestore

### Reservas no se guardan
- Revisa la consola del navegador para errores
- Verifica la conexión a internet
- Confirma que las credenciales de Firebase son correctas

### Horarios no se actualizan
- Verifica que el listener de Firebase esté funcionando
- Revisa la consola para errores de sincronización
- Confirma que la configuración se guardó correctamente

### Anticipación de servicios no funciona
- Verifica que la configuración de anticipación se haya guardado
- Confirma que el campo de anticipación tenga un valor numérico válido
- Revisa que la fecha y hora de la reserva sean correctas
- Verifica que el cálculo de diferencia horaria sea correcto

---

**Versión**: 4.0 - Sistema con Firebase, Panel de Administración y Anticipación de Servicios  
**Fecha**: Mayo 2026  
**Tecnologías**: HTML, CSS, JavaScript, Firebase Firestore