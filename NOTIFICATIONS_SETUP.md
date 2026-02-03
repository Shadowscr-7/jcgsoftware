# 🚀 Configuración de Notificaciones y Email

## 📧 Sistema de Notificaciones

Cuando un cliente deja una consulta o solicita cotización, puedes recibir notificaciones de varias formas:

### Opción 1: Email (Recomendado para empezar)

#### Usando Resend (Gratis hasta 3,000 emails/mes)

1. Crear cuenta en [resend.com](https://resend.com)
2. Obtener API key
3. Instalar:
```bash
npm install resend
```

4. Agregar a `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
NOTIFICATION_EMAIL=tu-email@ejemplo.com
```

5. Actualizar `app/api/notify/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to: process.env.NOTIFICATION_EMAIL!,
  subject: `Nueva ${type} de ${name || email}`,
  html: `
    <h2>Nueva Consulta desde Portfolio</h2>
    <p><strong>Tipo:</strong> ${type}</p>
    <p><strong>Nombre:</strong> ${name || "No proporcionado"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `,
});
```

#### Alternativas de Email:
- **SendGrid**: Gratis hasta 100 emails/día
- **Mailgun**: Gratis 5,000 emails/mes
- **Postmark**: $15/mes, muy confiable

---

### Opción 2: Telegram (Instantáneo y Gratis)

1. Crear bot en Telegram con [@BotFather](https://t.me/botfather)
2. Obtener tu Chat ID: [@userinfobot](https://t.me/userinfobot)
3. Agregar a `.env.local`:
```env
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
TELEGRAM_CHAT_ID=123456789
```

4. Instalar:
```bash
npm install node-telegram-bot-api
```

5. Código en `app/api/notify/route.ts`:
```typescript
const response = await fetch(
  `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `
🔔 Nueva ${type}

👤 ${name || 'Anónimo'}
📧 ${email}

💬 Mensaje:
${message}
      `,
      parse_mode: 'HTML',
    }),
  }
);
```

---

### Opción 3: Slack (Si usas Slack para trabajo)

1. Crear Slack App: [api.slack.com/apps](https://api.slack.com/apps)
2. Activar Incoming Webhooks
3. Copiar Webhook URL
4. Agregar a `.env.local`:
```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXX
```

5. Código:
```typescript
await fetch(process.env.SLACK_WEBHOOK_URL!, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: `Nueva ${type} de ${name || email}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Nueva ${type}*\n*Email:* ${email}\n*Mensaje:* ${message}`,
        },
      },
    ],
  }),
});
```

---

### Opción 4: WhatsApp Business (Requiere cuenta business)

Usar API de WhatsApp Business o servicios como:
- Twilio
- MessageBird
- Vonage

---

### Opción 5: Base de Datos (Para guardar historial)

Si quieres guardar todas las consultas:

#### Con Supabase (Gratis):

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Crear tabla `consultations`:
```sql
CREATE TABLE consultations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. Instalar:
```bash
npm install @supabase/supabase-js
```

4. Agregar a `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxx
```

5. Código:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

await supabase.from('consultations').insert({
  name,
  email,
  message,
  type,
});
```

---

## 📊 Dashboard de Consultas (Opcional - Avanzado)

Puedes crear una página privada para ver todas las consultas:

```typescript
// app/admin/consultations/page.tsx

export default async function ConsultationsPage() {
  const { data: consultations } = await supabase
    .from('consultations')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1>Consultas Recibidas</h1>
      {consultations?.map(c => (
        <div key={c.id}>
          <p>{c.email} - {c.type}</p>
          <p>{c.message}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🎯 Recomendación para Julio

**Setup Inicial (5 minutos):**
1. ✅ Telegram Bot - Notificaciones instantáneas GRATIS
2. ✅ Resend - Emails profesionales GRATIS (3K/mes)

**Más Adelante:**
3. Supabase - Guardar historial de consultas
4. CRM integration - Si usas HubSpot, Pipedrive, etc.

---

## 🔐 Seguridad

⚠️ **IMPORTANTE:**
- Todas las API keys en `.env.local`
- Nunca expongas tokens en el frontend
- Valida emails antes de enviar
- Rate limiting para prevenir spam

---

## ✅ Checklist de Configuración

- [ ] Elegir método de notificación (Telegram/Email)
- [ ] Obtener API keys necesarias
- [ ] Agregar a `.env.local`
- [ ] Descomentar código en `app/api/notify/route.ts`
- [ ] Probar enviando una consulta de prueba
- [ ] Verificar que recibes la notificación
- [ ] (Opcional) Configurar base de datos

---

¿Necesitas ayuda configurando alguna opción? ¡Avísame!
