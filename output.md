firebase-config.js:16 Firebase inicializado correctamente
firebase-config.js:25 Firestore inicializado correctamente
firebase-config.js:936 ✅ Funciones de WhatsApp cargadas y disponibles globalmente
calendario.html:2564 🚀 Inicializando calendario...
calendario.html:1548 🔄 Cargando turnosData de Firebase...
firebase-config.js:185 📥 Obteniendo turnosData de Firebase...
firebase-config.js:189 Doc exists: true
firebase-config.js:193 Datos crudos: {
  "data": {
    "2026-05-12": {
      "0": {
        "used": 1
      },
      "1": {
        "used": 1
      }
    }
  },
  "updatedAt": {
    "seconds": 1778554328,
    "nanoseconds": 476000000
  }
}
firebase-config.js:196 turnosData extraído: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:1557 ✅ turnosData cargado de Firebase: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
firebase-config.js:309 Configuración de reservas por turno obtenida: 1
calendario.html:1568 ✅ Configuración de reservas por turno cargada: 1
calendario.html:2568 ✅ turnosData inicializado
calendario.html:2501 Cargando configuración de turnos de Firebase...
calendario.html:2505 Configuración de turnos cargada: {reservasPorTurno: 1, duracionTurno: 30, anticipacionReserva: 0}
calendario.html:2506 Total turnos por día calculado: 20
calendario.html:2507 Plazo de días para reservar: 15
calendario.html:2577 ✅ Configuración de turnos cargada
calendario.html:2520 Cargando configuración de horarios de Firebase...
calendario.html:2523 Horarios cargados de Firebase: {martes: {…}, sabado: {…}, viernes: {…}, jueves: {…}, lunes: {…}, …}
calendario.html:2551 businessHours actualizado: {0: null, 1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}}
calendario.html:2581 ✅ Configuración de horarios cargada
calendario.html:1719 Configuración de servicios cargada: {uñas-semipermanentes: {…}, masajes-relajantes-caballero: {…}, corte-nino: {…}, masajes-relajantes: {…}, corte-caballero: {…}}
calendario.html:1720 Configuración de anticipación: (5) [{…}, {…}, {…}, {…}, {…}]
calendario.html:2585 ✅ Configuración de servicios cargada
calendario.html:2011 Días cerrados cargados: []
calendario.html:2589 ✅ Días cerrados cargados
calendario.html:2592 🔧 Iniciando listeners en tiempo real...
calendario.html:1585 Iniciando escucha de turnosData en tiempo real...
calendario.html:1586 Verificando Firebase inicializado: true
calendario.html:1587 Verificando Firestore inicializado: true
calendario.html:1588 db object: Ag {_delegate: Xd, _persistenceProvider: Dg, INTERNAL: {…}, _appCompat: Oe}
calendario.html:1600 ✅ Firebase y Firestore están inicializados correctamente
firebase-config.js:239 🔧 escucharTurnosDataFirebase - Iniciando configuración...
firebase-config.js:240 🔧 db está disponible: true
firebase-config.js:241 🔧 db object: Ag {_delegate: Xd, _persistenceProvider: Dg, INTERNAL: {…}, _appCompat: Oe}
firebase-config.js:248 🔧 Configurando listener para turnosData...
firebase-config.js:249 🔧 Colección: config, Documento: turnosData
calendario.html:1655 ✅ Escucha de turnosData iniciada correctamente
calendario.html:1656 Función unsubscribe guardada en window.turnosDataUnsubscribe
calendario.html:2599 ✅ Listeners en tiempo real iniciados
calendario.html:2603 ✅ Categorías renderizadas
calendario.html:1679 Configuración de reservas por turno actualizada: 1
calendario.html:1875 Configuración de servicios actualizada: {uñas-semipermanentes: {…}, masajes-relajantes-caballero: {…}, corte-nino: {…}, corte-caballero: {…}, masajes-relajantes: {…}}
calendario.html:1881 Actualizando configuración de servicios
calendario.html:1911 Configuración de turnos actualizada: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1}
calendario.html:1917 Actualizando configuración de turnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1}
calendario.html:1918 Nuevo total de turnos por día: 20
calendario.html:1919 Nuevo plazo de días para reservar: 15
calendario.html:1949 Configuración de horarios actualizada: {viernes: {…}, martes: {…}, sabado: {…}, jueves: {…}, lunes: {…}, …}
calendario.html:2027 Días cerrados actualizados: []
firebase-config.js:253 📡 Snapshot recibido de turnosData
firebase-config.js:254 Doc exists: true
firebase-config.js:258 Datos crudos del snapshot: {
  "updatedAt": {
    "seconds": 1778554328,
    "nanoseconds": 476000000
  },
  "data": {
    "2026-05-12": {
      "0": {
        "used": 1
      },
      "1": {
        "used": 1
      }
    }
  }
}
firebase-config.js:261 turnosData extraído: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
firebase-config.js:263 📡 Llamando al callback con los datos...
calendario.html:1603 === ACTUALIZACIÓN DE TURNOSDATA ===
calendario.html:1604 Datos recibidos de Firebase: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:1605 turnosData actual: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:1610 Comparación de datos:
calendario.html:1611 oldData length: 46
calendario.html:1612 newData length: 46
calendario.html:1613 ¿Son diferentes? false
calendario.html:1649 ℹ️ No hay cambios en turnosData
firebase-config.js:265 📡 Callback ejecutado correctamente
calendario.html:3054 🔄 Renderizando días...
calendario.html:3062 turnosData actual antes de generar días: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2368 🔄 Generando días...
 generateDays - turnosNeeded: 1 maxDays: 15
 generateDays - specificDates: [] hasSpecificDates: false
 generateDays - turnosData actual: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 Generando días normalmente (sin restricciones de fecha específica)
 Procesando día: 2026-05-11 dayOfWeek: 1
 Horarios para día 1 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-11 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-11 parsed date: Mon May 11 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 10:00 slotDateTime: Mon May 11 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 0 (10:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 10:30 slotDateTime: Mon May 11 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 1 (10:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 11:00 slotDateTime: Mon May 11 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 2 (11:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 11:30 slotDateTime: Mon May 11 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 3 (11:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 12:00 slotDateTime: Mon May 11 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 4 (12:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 12:30 slotDateTime: Mon May 11 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 5 (12:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 13:00 slotDateTime: Mon May 11 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 6 (13:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 13:30 slotDateTime: Mon May 11 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 7 (13:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 14:00 slotDateTime: Mon May 11 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 8 (14:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 14:30 slotDateTime: Mon May 11 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 9 (14:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 15:00 slotDateTime: Mon May 11 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 10 (15:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 15:30 slotDateTime: Mon May 11 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 11 (15:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 16:00 slotDateTime: Mon May 11 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 12 (16:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 16:30 slotDateTime: Mon May 11 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 13 (16:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 17:00 slotDateTime: Mon May 11 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 14 (17:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 17:30 slotDateTime: Mon May 11 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 15 (17:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 18:00 slotDateTime: Mon May 11 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 16 (18:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 18:30 slotDateTime: Mon May 11 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 17 (18:30) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 19:00 slotDateTime: Mon May 11 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 18 (19:00) is in past, skipping
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 19:30 slotDateTime: Mon May 11 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 hasEnoughTurnosForServices - slot 19 (19:30) is in past, skipping
 ❌ hasEnoughTurnosForServices - no hay suficientes turnos consecutivos
 Agregando día: 2026-05-11 hasEnoughTurnos: false
 Procesando día: 2026-05-12 dayOfWeek: 2
 Horarios para día 2 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-12 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=0, reservasPorTurno=1
 ❌ Slot 0 no disponible (available < 1)
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=false
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 1 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 hasEnoughConsecutiveTurnos - checking slot 1 (10:30): available=0, reservasPorTurno=1
 ❌ Slot 1 no disponible (available < 1)
 hasEnoughTurnosForServices - checking slot 1 (10:30): hasEnough=false
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 2 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 2 (11:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 2 (11:00): hasEnough=true
 ✅ Slot 2 (11:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-12 hasEnoughTurnos: true
 Procesando día: 2026-05-13 dayOfWeek: 3
 Horarios para día 3 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-13 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-13 parsed date: Wed May 13 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 10:00 slotDateTime: Wed May 13 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-13 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-13 parsed date: Wed May 13 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 10:00 slotDateTime: Wed May 13 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-13 hasEnoughTurnos: true
 Procesando día: 2026-05-14 dayOfWeek: 4
 Horarios para día 4 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-14 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-14 parsed date: Thu May 14 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 10:00 slotDateTime: Thu May 14 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-14 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-14 parsed date: Thu May 14 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 10:00 slotDateTime: Thu May 14 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-14 hasEnoughTurnos: true
 Procesando día: 2026-05-15 dayOfWeek: 5
 Horarios para día 5 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-15 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-15 parsed date: Fri May 15 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 10:00 slotDateTime: Fri May 15 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-15 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-15 parsed date: Fri May 15 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 10:00 slotDateTime: Fri May 15 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-15 hasEnoughTurnos: true
 Procesando día: 2026-05-16 dayOfWeek: 6
 Horarios para día 6 : {start: '10:00', end: '17:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-16 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-16 parsed date: Sat May 16 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 10:00 slotDateTime: Sat May 16 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-16 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-16 parsed date: Sat May 16 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 10:00 slotDateTime: Sat May 16 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-16 hasEnoughTurnos: true
 Procesando día: 2026-05-17 dayOfWeek: 0
 Saltando domingo
 Procesando día: 2026-05-18 dayOfWeek: 1
 Horarios para día 1 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-18 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-18 parsed date: Mon May 18 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 10:00 slotDateTime: Mon May 18 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-18 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-18 parsed date: Mon May 18 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 10:00 slotDateTime: Mon May 18 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-18 hasEnoughTurnos: true
 Procesando día: 2026-05-19 dayOfWeek: 2
 Horarios para día 2 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-19 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-19 parsed date: Tue May 19 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 10:00 slotDateTime: Tue May 19 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-19 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-19 parsed date: Tue May 19 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 10:00 slotDateTime: Tue May 19 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-19 hasEnoughTurnos: true
 Procesando día: 2026-05-20 dayOfWeek: 3
 Horarios para día 3 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-20 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-20 parsed date: Wed May 20 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 10:00 slotDateTime: Wed May 20 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-20 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-20 parsed date: Wed May 20 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 10:00 slotDateTime: Wed May 20 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-20 hasEnoughTurnos: true
 Procesando día: 2026-05-21 dayOfWeek: 4
 Horarios para día 4 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-21 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-21 parsed date: Thu May 21 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 10:00 slotDateTime: Thu May 21 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-21 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-21 parsed date: Thu May 21 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 10:00 slotDateTime: Thu May 21 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-21 hasEnoughTurnos: true
 Procesando día: 2026-05-22 dayOfWeek: 5
 Horarios para día 5 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-22 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-22 parsed date: Fri May 22 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 10:00 slotDateTime: Fri May 22 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-22 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-22 parsed date: Fri May 22 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 10:00 slotDateTime: Fri May 22 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-22 hasEnoughTurnos: true
 Procesando día: 2026-05-23 dayOfWeek: 6
 Horarios para día 6 : {start: '10:00', end: '17:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-23 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-23 parsed date: Sat May 23 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 10:00 slotDateTime: Sat May 23 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-23 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-23 parsed date: Sat May 23 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 10:00 slotDateTime: Sat May 23 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-23 hasEnoughTurnos: true
 Procesando día: 2026-05-24 dayOfWeek: 0
 Saltando domingo
 Procesando día: 2026-05-25 dayOfWeek: 1
 Horarios para día 1 : {start: '10:00', end: '20:00'}
 🔍 hasEnoughTurnosForServices - dateKey: 2026-05-25 turnosNeeded: 1
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 hasEnoughTurnosForServices - dateKey: 2026-05-25 parsed date: Mon May 25 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 10:00 slotDateTime: Mon May 25 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-25 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-25 parsed date: Mon May 25 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 10:00 slotDateTime: Mon May 25 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughTurnosForServices - checking slot 0 (10:00): hasEnough=true
 ✅ Slot 0 (10:00) tiene suficientes turnos consecutivos
 Agregando día: 2026-05-25 hasEnoughTurnos: true
 Días generados: 13
 Días generados: 13
 Calculando disponibilidad para 13 días...
 📊 Calculando turnos disponibles para 2026-05-11
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-11 parsed date: Mon May 11 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 10:00 slotDateTime: Mon May 11 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 0 (10:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 10:30 slotDateTime: Mon May 11 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 1 (10:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 11:00 slotDateTime: Mon May 11 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 2 (11:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 11:30 slotDateTime: Mon May 11 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 3 (11:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 12:00 slotDateTime: Mon May 11 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 4 (12:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 12:30 slotDateTime: Mon May 11 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 5 (12:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 13:00 slotDateTime: Mon May 11 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 6 (13:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 13:30 slotDateTime: Mon May 11 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 7 (13:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 14:00 slotDateTime: Mon May 11 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 8 (14:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 14:30 slotDateTime: Mon May 11 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 9 (14:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 15:00 slotDateTime: Mon May 11 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 10 (15:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 15:30 slotDateTime: Mon May 11 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 11 (15:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 16:00 slotDateTime: Mon May 11 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 12 (16:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 16:30 slotDateTime: Mon May 11 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 13 (16:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 17:00 slotDateTime: Mon May 11 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 14 (17:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 17:30 slotDateTime: Mon May 11 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 15 (17:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 18:00 slotDateTime: Mon May 11 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 16 (18:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 18:30 slotDateTime: Mon May 11 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 17 (18:30): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 19:00 slotDateTime: Mon May 11 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 18 (19:00): en el pasado, no se cuenta
 isTimeSlotInPast - dateKey: 2026-05-11 slotTime: 19:30 slotDateTime: Mon May 11 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 Slot está en el pasado
 Slot 19 (19:30): en el pasado, no se cuenta
 Total turnos disponibles para 2026-05-11: 0
 📊 Calculando turnos disponibles para 2026-05-12
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 📊 Calculando turnos disponibles para 2026-05-13
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-13 parsed date: Wed May 13 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 10:00 slotDateTime: Wed May 13 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-14
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-14 parsed date: Thu May 14 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 10:00 slotDateTime: Thu May 14 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-15
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-15 parsed date: Fri May 15 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 10:00 slotDateTime: Fri May 15 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-16
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-16 parsed date: Sat May 16 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 10:00 slotDateTime: Sat May 16 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-18
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-18 parsed date: Mon May 18 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 10:00 slotDateTime: Mon May 18 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-19
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-19 parsed date: Tue May 19 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 10:00 slotDateTime: Tue May 19 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-20
 generateTimeSlotsForDay - dayOfWeek: 3 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-20 parsed date: Wed May 20 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 3 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 10:00 slotDateTime: Wed May 20 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-21
 generateTimeSlotsForDay - dayOfWeek: 4 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-21 parsed date: Thu May 21 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 4 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 10:00 slotDateTime: Thu May 21 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-22
 generateTimeSlotsForDay - dayOfWeek: 5 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-22 parsed date: Fri May 22 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 5 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 10:00 slotDateTime: Fri May 22 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-23
 generateTimeSlotsForDay - dayOfWeek: 6 hours: {start: '10:00', end: '17:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-23 parsed date: Sat May 23 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 6 slots.length: 14
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 10:00 slotDateTime: Sat May 23 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 📊 Calculando turnos disponibles para 2026-05-25
 generateTimeSlotsForDay - dayOfWeek: 1 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-25 parsed date: Mon May 25 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 1 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 10:00 slotDateTime: Mon May 25 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Día 2026-05-11: 0/20 turnos disponibles (0.0%)
 Slot 0 (10:00): 0 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 10:30 slotDateTime: Wed May 13 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 10:30 slotDateTime: Thu May 14 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 10:30 slotDateTime: Fri May 15 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 10:30 slotDateTime: Sat May 16 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 10:30 slotDateTime: Mon May 18 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 10:30 slotDateTime: Tue May 19 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 10:30 slotDateTime: Wed May 20 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 10:30 slotDateTime: Thu May 21 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 10:30 slotDateTime: Fri May 22 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 10:30 slotDateTime: Sat May 23 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 0 (10:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 10:30 slotDateTime: Mon May 25 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 0 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 11:00 slotDateTime: Wed May 13 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 11:00 slotDateTime: Thu May 14 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 11:00 slotDateTime: Fri May 15 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 11:00 slotDateTime: Sat May 16 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 11:00 slotDateTime: Mon May 18 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 11:00 slotDateTime: Tue May 19 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 11:00 slotDateTime: Wed May 20 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 11:00 slotDateTime: Thu May 21 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 11:00 slotDateTime: Fri May 22 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 11:00 slotDateTime: Sat May 23 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 1 (10:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 11:00 slotDateTime: Mon May 25 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:30 slotDateTime: Tue May 12 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 11:30 slotDateTime: Wed May 13 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 11:30 slotDateTime: Thu May 14 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 11:30 slotDateTime: Fri May 15 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 11:30 slotDateTime: Sat May 16 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 11:30 slotDateTime: Mon May 18 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 11:30 slotDateTime: Tue May 19 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 11:30 slotDateTime: Wed May 20 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 11:30 slotDateTime: Thu May 21 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 11:30 slotDateTime: Fri May 22 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 11:30 slotDateTime: Sat May 23 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 11:30 slotDateTime: Mon May 25 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:00 slotDateTime: Tue May 12 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 12:00 slotDateTime: Wed May 13 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 12:00 slotDateTime: Thu May 14 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 12:00 slotDateTime: Fri May 15 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 12:00 slotDateTime: Sat May 16 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 12:00 slotDateTime: Mon May 18 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 12:00 slotDateTime: Tue May 19 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 12:00 slotDateTime: Wed May 20 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 12:00 slotDateTime: Thu May 21 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 12:00 slotDateTime: Fri May 22 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 12:00 slotDateTime: Sat May 23 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 12:00 slotDateTime: Mon May 25 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:30 slotDateTime: Tue May 12 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 12:30 slotDateTime: Wed May 13 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 12:30 slotDateTime: Thu May 14 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 12:30 slotDateTime: Fri May 15 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 12:30 slotDateTime: Sat May 16 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 12:30 slotDateTime: Mon May 18 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 12:30 slotDateTime: Tue May 19 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 12:30 slotDateTime: Wed May 20 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 12:30 slotDateTime: Thu May 21 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 12:30 slotDateTime: Fri May 22 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 12:30 slotDateTime: Sat May 23 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 12:30 slotDateTime: Mon May 25 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:00 slotDateTime: Tue May 12 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 13:00 slotDateTime: Wed May 13 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 13:00 slotDateTime: Thu May 14 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 13:00 slotDateTime: Fri May 15 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 13:00 slotDateTime: Sat May 16 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 13:00 slotDateTime: Mon May 18 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 13:00 slotDateTime: Tue May 19 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 13:00 slotDateTime: Wed May 20 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 13:00 slotDateTime: Thu May 21 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 13:00 slotDateTime: Fri May 22 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 13:00 slotDateTime: Sat May 23 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 13:00 slotDateTime: Mon May 25 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:30 slotDateTime: Tue May 12 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 13:30 slotDateTime: Wed May 13 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 13:30 slotDateTime: Thu May 14 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 13:30 slotDateTime: Fri May 15 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 13:30 slotDateTime: Sat May 16 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 13:30 slotDateTime: Mon May 18 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 13:30 slotDateTime: Tue May 19 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 13:30 slotDateTime: Wed May 20 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 13:30 slotDateTime: Thu May 21 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 13:30 slotDateTime: Fri May 22 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 13:30 slotDateTime: Sat May 23 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 13:30 slotDateTime: Mon May 25 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:00 slotDateTime: Tue May 12 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 14:00 slotDateTime: Wed May 13 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 14:00 slotDateTime: Thu May 14 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 14:00 slotDateTime: Fri May 15 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 14:00 slotDateTime: Sat May 16 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 14:00 slotDateTime: Mon May 18 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 14:00 slotDateTime: Tue May 19 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 14:00 slotDateTime: Wed May 20 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 14:00 slotDateTime: Thu May 21 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 14:00 slotDateTime: Fri May 22 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 14:00 slotDateTime: Sat May 23 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 8 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 7 (13:30): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 14:00 slotDateTime: Mon May 25 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 8 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:30 slotDateTime: Tue May 12 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 14:30 slotDateTime: Wed May 13 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 14:30 slotDateTime: Thu May 14 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 14:30 slotDateTime: Fri May 15 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 14:30 slotDateTime: Sat May 16 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 14:30 slotDateTime: Mon May 18 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 14:30 slotDateTime: Tue May 19 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 8 (14:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 14:30 slotDateTime: Wed May 20 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 9 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
 Slot 8 (14:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 14:30 slotDateTime: Thu May 21 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 8 (14:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 14:30 slotDateTime: Fri May 22 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 8 (14:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 14:30 slotDateTime: Sat May 23 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 8 (14:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 14:30 slotDateTime: Mon May 25 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:00 slotDateTime: Tue May 12 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 15:00 slotDateTime: Wed May 13 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 15:00 slotDateTime: Thu May 14 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 15:00 slotDateTime: Fri May 15 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 15:00 slotDateTime: Sat May 16 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 15:00 slotDateTime: Mon May 18 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 15:00 slotDateTime: Tue May 19 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 15:00 slotDateTime: Wed May 20 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 15:00 slotDateTime: Thu May 21 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 15:00 slotDateTime: Fri May 22 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 15:00 slotDateTime: Sat May 23 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 15:00 slotDateTime: Mon May 25 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:30 slotDateTime: Tue May 12 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 15:30 slotDateTime: Wed May 13 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 15:30 slotDateTime: Thu May 14 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 15:30 slotDateTime: Fri May 15 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 15:30 slotDateTime: Sat May 16 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 15:30 slotDateTime: Mon May 18 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 15:30 slotDateTime: Tue May 19 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 15:30 slotDateTime: Wed May 20 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 15:30 slotDateTime: Thu May 21 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 15:30 slotDateTime: Fri May 22 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 15:30 slotDateTime: Sat May 23 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 15:30 slotDateTime: Mon May 25 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:00 slotDateTime: Tue May 12 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 16:00 slotDateTime: Wed May 13 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 16:00 slotDateTime: Thu May 14 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 16:00 slotDateTime: Fri May 15 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 16:00 slotDateTime: Sat May 16 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 16:00 slotDateTime: Mon May 18 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 16:00 slotDateTime: Tue May 19 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 16:00 slotDateTime: Wed May 20 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 16:00 slotDateTime: Thu May 21 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 16:00 slotDateTime: Fri May 22 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 16:00 slotDateTime: Sat May 23 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 16:00 slotDateTime: Mon May 25 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:30 slotDateTime: Tue May 12 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 16:30 slotDateTime: Wed May 13 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 16:30 slotDateTime: Thu May 14 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 16:30 slotDateTime: Fri May 15 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-16 slotTime: 16:30 slotDateTime: Sat May 16 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-16 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 16:30 slotDateTime: Mon May 18 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 16:30 slotDateTime: Tue May 19 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 16:30 slotDateTime: Wed May 20 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 16:30 slotDateTime: Thu May 21 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 16:30 slotDateTime: Fri May 22 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-23 slotTime: 16:30 slotDateTime: Sat May 23 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-23 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 16:30 slotDateTime: Mon May 25 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:00 slotDateTime: Tue May 12 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 17:00 slotDateTime: Wed May 13 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 17:00 slotDateTime: Thu May 14 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 17:00 slotDateTime: Fri May 15 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 Total turnos disponibles para 2026-05-16: 14
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 17:00 slotDateTime: Mon May 18 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 17:00 slotDateTime: Tue May 19 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 17:00 slotDateTime: Wed May 20 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 17:00 slotDateTime: Thu May 21 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 17:00 slotDateTime: Fri May 22 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 Total turnos disponibles para 2026-05-23: 14
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 17:00 slotDateTime: Mon May 25 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:30 slotDateTime: Tue May 12 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 17:30 slotDateTime: Wed May 13 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 17:30 slotDateTime: Thu May 14 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 17:30 slotDateTime: Fri May 15 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Día 2026-05-16: 14/20 turnos disponibles (70.0%)
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 17:30 slotDateTime: Mon May 18 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 17:30 slotDateTime: Tue May 19 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 17:30 slotDateTime: Wed May 20 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 17:30 slotDateTime: Thu May 21 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 17:30 slotDateTime: Fri May 22 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Día 2026-05-23: 14/20 turnos disponibles (70.0%)
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 17:30 slotDateTime: Mon May 25 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:00 slotDateTime: Tue May 12 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 18:00 slotDateTime: Wed May 13 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 18:00 slotDateTime: Thu May 14 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 18:00 slotDateTime: Fri May 15 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 18:00 slotDateTime: Mon May 18 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 18:00 slotDateTime: Tue May 19 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 18:00 slotDateTime: Wed May 20 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 18:00 slotDateTime: Thu May 21 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 18:00 slotDateTime: Fri May 22 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 18:00 slotDateTime: Mon May 25 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:30 slotDateTime: Tue May 12 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 18:30 slotDateTime: Wed May 13 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 18:30 slotDateTime: Thu May 14 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 18:30 slotDateTime: Fri May 15 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 18:30 slotDateTime: Mon May 18 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 18:30 slotDateTime: Tue May 19 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 18:30 slotDateTime: Wed May 20 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 18:30 slotDateTime: Thu May 21 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 18:30 slotDateTime: Fri May 22 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 18:30 slotDateTime: Mon May 25 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:00 slotDateTime: Tue May 12 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 19:00 slotDateTime: Wed May 13 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 19:00 slotDateTime: Thu May 14 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 19:00 slotDateTime: Fri May 15 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 19:00 slotDateTime: Mon May 18 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 19:00 slotDateTime: Tue May 19 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 19:00 slotDateTime: Wed May 20 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 19:00 slotDateTime: Thu May 21 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 19:00 slotDateTime: Fri May 22 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 19:00 slotDateTime: Mon May 25 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 18 (19:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:30 slotDateTime: Tue May 12 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 19 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 18 (19:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-13 slotTime: 19:30 slotDateTime: Wed May 13 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-13 slotId: 19 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 18 (19:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-14 slotTime: 19:30 slotDateTime: Thu May 14 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-14 slotId: 19 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: undefined
 No hay datos para este slot, devolviendo 1
 Slot 18 (19:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-15 slotTime: 19:30 slotDateTime: Fri May 15 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-15 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-18 slotTime: 19:30 slotDateTime: Mon May 18 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-18 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-19 slotTime: 19:30 slotDateTime: Tue May 19 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-19 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-20 slotTime: 19:30 slotDateTime: Wed May 20 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-20 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-21 slotTime: 19:30 slotDateTime: Thu May 21 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-21 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-22 slotTime: 19:30 slotDateTime: Fri May 22 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-22 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 18 (19:00): 1 turnos disponibles
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-25 slotTime: 19:30 slotDateTime: Mon May 25 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:41 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-25 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: undefined
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-12: 18
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-13: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-14: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-15: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-18: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-19: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-20: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-21: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-22: 20
calendario.html:2282 Slot 19 (19:30): 1 turnos disponibles
calendario.html:2288 Total turnos disponibles para 2026-05-25: 20
calendario.html:3108 Día 2026-05-12: 18/20 turnos disponibles (90.0%)
calendario.html:3108 Día 2026-05-13: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-14: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-15: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-18: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-19: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-20: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-21: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-22: 20/20 turnos disponibles (100.0%)
calendario.html:3108 Día 2026-05-25: 20/20 turnos disponibles (100.0%)
calendario.html:3224 🔄 Mostrando turnos para 2026-05-12
calendario.html:3225 🔄 showTimeSlots - turnosData actual: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:3226 🔄 showTimeSlots - reservasPorTurno: 1
 turnosData actual antes de calcular disponibilidad: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 📊 Calculando turnos disponibles para 2026-05-12
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 getTotalTurnosDisponibles - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 Slot 0 (10:00): 0 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 Slot 1 (10:30): 0 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 2 (11:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:30 slotDateTime: Tue May 12 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 3 (11:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:00 slotDateTime: Tue May 12 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 4 (12:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:30 slotDateTime: Tue May 12 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 5 (12:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:00 slotDateTime: Tue May 12 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 6 (13:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:30 slotDateTime: Tue May 12 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 7 (13:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:00 slotDateTime: Tue May 12 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 8 (14:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:30 slotDateTime: Tue May 12 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 9 (14:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:00 slotDateTime: Tue May 12 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 10 (15:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:30 slotDateTime: Tue May 12 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 11 (15:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:00 slotDateTime: Tue May 12 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 12 (16:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:30 slotDateTime: Tue May 12 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 13 (16:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:00 slotDateTime: Tue May 12 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 14 (17:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:30 slotDateTime: Tue May 12 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 15 (17:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:00 slotDateTime: Tue May 12 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 16 (18:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:30 slotDateTime: Tue May 12 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 17 (18:30): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:00 slotDateTime: Tue May 12 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 18 (19:00): 1 turnos disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:30 slotDateTime: Tue May 12 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 19 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 Slot 19 (19:30): 1 turnos disponibles
 Total turnos disponibles para 2026-05-12: 18
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 📊 Resumen para 2026-05-12:
 - Total disponibles: 18
 - Máximo turnos: 20
 - Turnos necesarios: 1
 - Reservas por turno: 1
 - Último slot disponible: 20
 - Total slots: 20
 🔍 Verificando disponibilidad de cada slot...
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 0 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 1 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 2 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 3 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:30 slotDateTime: Tue May 12 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 4 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:00 slotDateTime: Tue May 12 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 5 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:30 slotDateTime: Tue May 12 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 6 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:00 slotDateTime: Tue May 12 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 7 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:30 slotDateTime: Tue May 12 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 8 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:00 slotDateTime: Tue May 12 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 9 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:30 slotDateTime: Tue May 12 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 10 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:00 slotDateTime: Tue May 12 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 11 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:30 slotDateTime: Tue May 12 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 12 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:00 slotDateTime: Tue May 12 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 12 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 13 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:30 slotDateTime: Tue May 12 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 13 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 14 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:00 slotDateTime: Tue May 12 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 14 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 15 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:30 slotDateTime: Tue May 12 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 15 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 16 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:00 slotDateTime: Tue May 12 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 16 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 17 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:30 slotDateTime: Tue May 12 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 17 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 18 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:00 slotDateTime: Tue May 12 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 18 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 🔍 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 startSlotId: 19 turnosNeeded: 1 reservasPorTurno: 1
 generateTimeSlotsForDay - dayOfWeek: 2 hours: {start: '10:00', end: '20:00'}
 hasEnoughConsecutiveTurnos - dateKey: 2026-05-12 parsed date: Tue May 12 2026 00:00:00 GMT-0300 (hora estándar de Uruguay) dayOfWeek: 2 slots.length: 20
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:30 slotDateTime: Tue May 12 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 19 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 hasEnoughConsecutiveTurnos - checking slot 0 (10:00): available=0, reservasPorTurno=1
 ❌ Slot 0 no disponible (available < 1)
 hasEnoughConsecutiveTurnos - checking slot 1 (10:30): available=0, reservasPorTurno=1
 ❌ Slot 1 no disponible (available < 1)
 hasEnoughConsecutiveTurnos - checking slot 2 (11:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 3 (11:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 4 (12:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 5 (12:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 6 (13:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 7 (13:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 8 (14:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 9 (14:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 10 (15:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 11 (15:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 12 (16:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 13 (16:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 14 (17:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 15 (17:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 16 (18:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 17 (18:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 18 (19:00): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 hasEnoughConsecutiveTurnos - checking slot 19 (19:30): available=1, reservasPorTurno=1
 ✅ Todos los slots consecutivos están disponibles
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:00 slotDateTime: Tue May 12 2026 10:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 0 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 10:30 slotDateTime: Tue May 12 2026 10:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 1 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 getTurnosDisponibles - slotData: {
  "used": 1
}
 Slot data - used: 1 calculated available: 0
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:00 slotDateTime: Tue May 12 2026 11:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 2 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 11:30 slotDateTime: Tue May 12 2026 11:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 3 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:00 slotDateTime: Tue May 12 2026 12:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 4 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 12:30 slotDateTime: Tue May 12 2026 12:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 5 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:00 slotDateTime: Tue May 12 2026 13:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 6 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 13:30 slotDateTime: Tue May 12 2026 13:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 7 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:00 slotDateTime: Tue May 12 2026 14:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 8 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 14:30 slotDateTime: Tue May 12 2026 14:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 9 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:00 slotDateTime: Tue May 12 2026 15:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 10 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
 turnosData[dateKey]: {0: {…}, 1: {…}}
 No hay datos para este slot, devolviendo 1
 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 15:30 slotDateTime: Tue May 12 2026 15:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
 isTimeSlotInPast - anticipacionGeneral: 0
 isTimeSlotInPast - maxAnticipacionServicios: 0
 isTimeSlotInPast - anticipacionHoras (max): 0
 Slot está disponible
 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 11 reservasPorTurno: 1
 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:00 slotDateTime: Tue May 12 2026 16:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 12 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 16:30 slotDateTime: Tue May 12 2026 16:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 13 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:00 slotDateTime: Tue May 12 2026 17:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 14 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 17:30 slotDateTime: Tue May 12 2026 17:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 15 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:00 slotDateTime: Tue May 12 2026 18:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 16 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 18:30 slotDateTime: Tue May 12 2026 18:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 17 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:00 slotDateTime: Tue May 12 2026 19:00:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 18 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3178 isTimeSlotInPast - dateKey: 2026-05-12 slotTime: 19:30 slotDateTime: Tue May 12 2026 19:30:00 GMT-0300 (hora estándar de Uruguay) now: Mon May 11 2026 23:52:42 GMT-0300 (hora estándar de Uruguay)
calendario.html:3179 isTimeSlotInPast - configTurnos: {anticipacionReserva: 0, duracionTurno: 30, reservasPorTurno: 1} anticipacionReserva: 0
calendario.html:3189 isTimeSlotInPast - anticipacionGeneral: 0
calendario.html:3202 isTimeSlotInPast - maxAnticipacionServicios: 0
calendario.html:3206 isTimeSlotInPast - anticipacionHoras (max): 0
calendario.html:3218 Slot está disponible
calendario.html:2130 getTurnosDisponibles - dateKey: 2026-05-12 slotId: 19 reservasPorTurno: 1
calendario.html:2131 getTurnosDisponibles - turnosData completo: {
  "2026-05-12": {
    "0": {
      "used": 1
    },
    "1": {
      "used": 1
    }
  }
}
calendario.html:2134 turnosData[dateKey]: {0: {…}, 1: {…}}
calendario.html:2137 No hay datos para este slot, devolviendo 1
calendario.html:3276 Slot 0 (10:00): available=0, isAvailable=false, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 1 (10:30): available=0, isAvailable=false, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 2 (11:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 3 (11:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 4 (12:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 5 (12:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 6 (13:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 7 (13:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 8 (14:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 9 (14:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 10 (15:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 11 (15:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 12 (16:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 13 (16:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 14 (17:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 15 (17:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 16 (18:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 17 (18:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 18 (19:00): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
calendario.html:3276 Slot 19 (19:30): available=1, isAvailable=true, isPastLastAvailable=false, isInPast=false
