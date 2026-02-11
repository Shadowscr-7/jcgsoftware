# 📱 Guía de Configuración de Telegram

## ✅ Sistema Implementado

Se ha implementado un sistema híbrido de notificaciones de Telegram que te permite:

1. **Recibir notificaciones** cuando alguien inicia una conversación
2. **Ver mensajes en tiempo real** (usuario y IA)
3. **Capturar información clave** (email, presupuesto)
4. **Tomar control manual** y responder tú mismo
5. **Recibir resumen completo** al finalizar la conversación

## 🚀 Pasos para Configurar

### Paso 1: Crear tu Bot de Telegram

1. Abre Telegram y busca **@BotFather**
2. Envía el comando: `/newbot`
3. Sigue las instrucciones:
   - Nombre del bot: `Portfolio Assistant`
   - Usuario del bot: `tu_portfolio_bot` (debe terminar en `bot`)
4. **Guarda el token** que te da (ejemplo: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Paso 2: Obtener tu Chat ID

1. Inicia una conversación con tu bot recién creado
2. Envía cualquier mensaje (ejemplo: `/start`)
3. Abre este link en tu navegador (reemplaza `TU_BOT_TOKEN`):
   ```
   https://api.telegram.org/botTU_BOT_TOKEN/getUpdates
   ```
4. Busca en la respuesta: `"chat":{"id":123456789}`
5. **Guarda ese número** (tu Chat ID)

### Paso 3: Configurar Variables de Entorno

Crea o edita el archivo `.env.local` en la raíz del proyecto:

```env
# OpenAI (ya lo tienes)
OPENAI_API_KEY=tu_openai_key_aqui

# Telegram (agregar estas dos líneas)
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

### Paso 4: Configurar el Webhook (Después de Desplegar)

Una vez que tu sitio esté desplegado en producción:

1. Abre este link en tu navegador (reemplaza los valores):
   ```
   https://api.telegram.org/botTU_BOT_TOKEN/setWebhook?url=https://tu-dominio.com/api/telegram
   ```

2. Deberías ver:
   ```json
   {"ok":true,"result":true,"description":"Webhook was set"}
   ```

## 🎮 Cómo Usar el Sistema

### Durante una Conversación

Cuando alguien inicia una conversación, recibirás en Telegram:

```
🆕 Nueva conversación iniciada
📋 ID: sess_1234...
⏰ 11 Feb 2026, 14:30

[Botones: Tomar Control | Ver Historial]
```

Los mensajes llegarán en tiempo real:
```
👤 Usuario: Necesito un e-commerce
🤖 IA: Perfecto, puedo ayudarte...
```

Cuando se capture información importante:
```
📧 Email capturado: cliente@ejemplo.com
💰 Presupuesto mencionado: $8000

[Botón: Tomar Control]
```

### Tomar Control Manual

1. Presiona el botón **"🎛️ Tomar Control"**
2. El bot confirmará: *"Control tomado. Ahora puedes responder..."*
3. El usuario verá: *"Un momento, conectando con el equipo..."*
4. **Responde directamente en Telegram** y tus mensajes aparecerán en el chat
5. Para devolver el control a la IA, envía: `/release`

### Al Finalizar

Recibirás un resumen completo:
```
✅ Conversación finalizada

📋 ID: sess_1234...
⏱️ Duración: 15 min
💬 Mensajes: 24
🤖 IA: 18 | 👤 Humano: 6

📊 Análisis:
• Email: cliente@ejemplo.com
• Tipo de proyecto: E-commerce
• Presupuesto: $8000-$10000
• Urgencia: Alta 🔴

[Botón: Ver Conversación Completa]
```

## 🧪 Probar en Desarrollo (Local)

Para probar en tu máquina local, necesitas exponer tu servidor con **ngrok**:

1. Instala ngrok: https://ngrok.com/download
2. Ejecuta tu servidor: `npm run dev`
3. En otra terminal: `ngrok http 3000`
4. Copia la URL de ngrok (ejemplo: `https://abc123.ngrok.io`)
5. Configura el webhook:
   ```
   https://api.telegram.org/botTU_BOT_TOKEN/setWebhook?url=https://abc123.ngrok.io/api/telegram
   ```

## 🔧 Troubleshooting

### No recibo notificaciones
- Verifica que las variables de entorno estén configuradas
- Revisa que el webhook esté configurado correctamente
- Comprueba los logs en la consola

### Los botones no funcionan
- Asegúrate de que el webhook esté apuntando a `/api/telegram`
- Verifica que no haya errores en la consola del servidor

### "Session not found"
- Las sesiones expiran después de un tiempo de inactividad
- Este mensaje es normal si el usuario cerró el chat hace tiempo

## 📝 Notas Importantes

- ⚠️ Las notificaciones son **opcionales**. Si no configuras Telegram, el chat funcionará normalmente sin notificaciones
- 💾 En producción, considera usar **Redis** o una base de datos para las sesiones (actualmente se usan en memoria)
- 🔒 Nunca compartas tu `TELEGRAM_BOT_TOKEN` públicamente
- 🚀 El sistema funciona con Next.js desplegado en Vercel, Netlify, etc.

## 🎯 Próximos Pasos Opcionales

1. **Base de datos para conversaciones**: Guardar historial completo
2. **Responder desde Telegram**: Implementar WebSocket o polling
3. **Panel de administración**: Ver todas las conversaciones activas
4. **Análisis con IA**: Clasificar automáticamente leads por prioridad

---

¿Necesitas ayuda con la configuración? Los pasos 1-3 los puedes hacer ahora mismo!
