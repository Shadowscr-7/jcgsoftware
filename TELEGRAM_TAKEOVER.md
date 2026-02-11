# 🎛️ Cómo Usar el Sistema de Control Manual

## ✅ Sistema Implementado

Ahora puedes responder directamente desde Telegram a los clientes en tu portfolio. Los mensajes aparecerán en tiempo real en el chat web.

## 📝 Guía Rápida

### 1. Recibirás una Notificación Cuando Alguien Inicie Chat

```
🆕 Nueva conversación iniciada
📋 ID: sess_1234...
⏰ 11 Feb 2026, 14:30

[🎛️ Tomar Control] [📊 Ver Historial]
```

### 2. Tomar Control de la Conversación

1. **Presiona el botón "🎛️ Tomar Control"**
2. Recibirás confirmación:
   ```
   🎛️ Control tomado
   
   Ahora puedes responder directamente. La IA está pausada.
   
   📝 Envía tus mensajes y se mostrarán en el chat.
   
   Usa /release para devolver el control a la IA
   ```

3. **El cliente verá en su pantalla:**
   - Header cambia de "Chat con IA" a "Julio Gómez"
   - Indicador: "🟢 Conectado"
   - Mensaje: "Un momento, nuestro equipo se está conectando contigo..."

### 3. Responder al Cliente

Simplemente **escribe tu mensaje en Telegram** como si fuera un chat normal:

```
Hola! Soy Julio. Vi que estás interesado en un e-commerce...
```

El cliente verá:
- **Indicador de escritura:** "Julio está escribiendo..."
- **Tu mensaje aparecerá** en el chat web en tiempo real (2 segundos máximo)
- **Confirmación en Telegram:** "✅ Mensaje enviado al cliente"

### 4. Continuar la Conversación

- Los mensajes del cliente te llegarán en tiempo real a Telegram
- Tus respuestas aparecerán instantáneamente en el chat web
- Puedes escribir múltiples mensajes seguidos

### 5. Devolver el Control a la IA

Cuando termines, escribe en Telegram:
```
/release
```

Recibirás:
```
✅ Control devuelto a la IA
📋 Sesión: sess_1234...
```

La IA volverá a responder automáticamente.

## 🎯 Experiencia del Cliente

### Antes de Tomar Control
```
Cliente: Hola, necesito un e-commerce
🤖 IA: ¡Hola! Encantado de ayudarte. Cuéntame...
```

### Cuando Tomas Control
El header del chat cambia:
```
┌─────────────────────────┐
│ 🟢 Julio Gómez          │
│    Conectado            │
└─────────────────────────┘
```

Y ven:
```
Cliente: Hola, necesito un e-commerce
🤖 IA: ¡Hola! Encantado de ayudarte...

[Julio está escribiendo...]

👨‍💼 Julio: Hola! Soy Julio. Vi que estás interesado en un e-commerce...
```

### Indicadores Visuales

- **Punto verde** → Hablando con IA
- **Punto cyan** → Hablando con humano
- **"Julio está escribiendo..."** → Ves cuando el humano escribe

## 💡 Tips y Mejores Prácticas

### ✅ DO (Hacer)
- Responde rápido cuando tomas control (el cliente lo ve en tiempo real)
- Usa `/release` cuando termines para que la IA siga atendiendo
- Puedes tomar control de múltiples conversaciones (última que tomes es la activa)

### ❌ DON'T (No Hacer)
- No escribas mensajes muy largos en Telegram (Telegram tiene límite de caracteres)
- No dejes sesiones activas sin usar `/release`
- No uses el bot de Telegram para otros chats mientras tienes control

## 🔧 Comandos de Telegram

| Comando | Descripción |
|---------|-------------|
| *Ninguno* | Mensaje normal se envía al cliente |
| `/release` | Devolver control a la IA |
| Botón "Tomar Control" | Tomar control de una conversación |
| Botón "Ver Historial" | Ver conversación completa |

## 🐛 Troubleshooting

### Los mensajes no llegan al cliente
- ✅ Verifica que presionaste "Tomar Control"
- ✅ Confirma que recibiste "Control tomado"
- ✅ Espera ~2 segundos (polling cada 2 segundos)

### No puedo tomar control
- La sesión puede haber expirado
- El cliente cerró el chat
- Intenta refrescar la página web

### Múltiples sesiones activas
- Solo puedes responder a la última sesión que tomaste control
- Usa `/release` y toma control de otra si es necesario

## 📊 Sistema Técnico

### Polling (Actualización automática)
- El cliente hace polling cada **2 segundos**
- Detecta nuevos mensajes automáticamente
- Sin necesidad de refresh manual

### Flujo de Mensajes
```
Tu Telegram → Webhook → Sesión → Polling → Cliente Web
```

### Estados de Sesión
- **Normal**: IA responde automáticamente
- **Control Humano**: Tus mensajes van directo al cliente
- **Expirada**: Sesión cerrada (no aparece en notificaciones)

---

## 🚀 Todo Funciona!

Ahora tienes control total sobre las conversaciones. Puedes:
- ✅ Ver conversaciones en tiempo real
- ✅ Intervenir cuando lo necesites  
- ✅ El cliente ve tus mensajes instantáneamente
- ✅ Indicadores visuales profesionales
- ✅ Devolver control a la IA cuando quieras

**¡El sistema está listo para usar!** 🎉
