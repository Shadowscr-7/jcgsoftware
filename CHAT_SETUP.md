# 🤖 Chat con IA - Guía de Configuración

## ✅ Lo que ya está hecho:

1. ✨ **Chat Widget flotante** - Botón animado en la esquina inferior derecha
2. 🎨 **Interfaz profesional** - Diseño glassmorphism con gradientes
3. 🧠 **Integración con OpenAI** - API configurada con GPT-4o-mini
4. 💬 **Contexto personalizado** - Ya incluye tu información profesional
5. ❓ **Preguntas sugeridas** - Para guiar a los visitantes
6. ⚡ **Animaciones fluidas** - Framer Motion en todo el componente

## 🚀 Cómo configurar:

### Paso 1: Obtener API Key de OpenAI

1. Ve a [platform.openai.com](https://platform.openai.com)
2. Crea una cuenta o inicia sesión
3. Ve a **API Keys** en tu dashboard
4. Crea una nueva API key
5. Copia la key (solo se muestra una vez)

### Paso 2: Configurar la API Key

Abre el archivo `.env.local` y reemplaza:

```env
OPENAI_API_KEY=tu_api_key_aqui
```

Por tu API key real:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

### Paso 3: Reiniciar el servidor

```bash
npm run dev
```

## 📝 Personalizar el contenido del chat

### Actualizar tu información

Edita `lib/data/chatContext.ts`:

```typescript
export const CV_CONTEXT = {
  personalInfo: {
    name: "Julio Gómez",
    age: 34,
    location: "Tu ciudad/país", // ⬅️ Actualiza esto
    email: "tu-email@ejemplo.com", // ⬅️ Actualiza esto
    yearsOfExperience: 14,
  },
  
  skills: {
    // Agrega o modifica tus habilidades
    frontend: ["React", "Next.js", ...],
  },
  
  // Agrega secciones de tu CV completo
  projects: [
    {
      name: "Proyecto 1",
      description: "Descripción",
      technologies: ["React", "Node.js"],
      year: 2024,
    }
  ],
  
  education: [
    {
      degree: "Tu título",
      institution: "Universidad",
      year: 2010,
    }
  ],
};
```

### Modificar el prompt del sistema

En el mismo archivo, edita `CHAT_SYSTEM_PROMPT` para agregar más detalles sobre ti:

```typescript
export const CHAT_SYSTEM_PROMPT = `Eres un asistente virtual de Julio Gómez...

PROYECTOS DESTACADOS:
- Proyecto X: [descripción]
- Proyecto Y: [descripción]

CERTIFICACIONES:
- Certificación A
- Certificación B

// ... más información
`;
```

### Cambiar preguntas sugeridas

Edita el array `SUGGESTED_QUESTIONS`:

```typescript
export const SUGGESTED_QUESTIONS = [
  "¿Tu pregunta personalizada?",
  "¿Otra pregunta?",
  // ...
];
```

## 💰 Costos de OpenAI

**GPT-4o-mini** (modelo actual):
- 📥 Input: $0.150 por 1M tokens (~$0.00015 por pregunta)
- 📤 Output: $0.600 por 1M tokens (~$0.0006 por respuesta)
- 💬 Costo aprox: **$0.001 por conversación** (muy económico)

**Alternativas:**
- GPT-3.5-turbo: Aún más barato
- GPT-4o: Más inteligente pero más caro

Para cambiar el modelo, edita `app/api/chat/route.ts`:

```typescript
model: "gpt-3.5-turbo", // Más barato
// o
model: "gpt-4o", // Más inteligente
```

## 🎯 Características del Chat

### Lo que ya funciona:

✅ Responde preguntas sobre ti
✅ Conoce tu experiencia (14 años)
✅ Sabe tus especialidades
✅ Recomienda contactarte
✅ Interfaz responsive
✅ Animaciones suaves
✅ Manejo de errores
✅ Estado de carga
✅ Scroll automático
✅ Preguntas sugeridas

### Próximas mejoras (opcional):

- 📄 Cargar CV completo en formato JSON
- 💾 Guardar conversaciones
- 📊 Analytics de preguntas frecuentes
- 🌐 Soporte multiidioma
- 🎤 Voz (text-to-speech)
- 📎 Adjuntar archivos

## 🔒 Seguridad

⚠️ **IMPORTANTE:**
- Nunca subas `.env.local` a Git
- La API key SOLO debe estar en el servidor
- El archivo ya está en `.gitignore`

## 🧪 Probar el chat

1. Abre tu portfolio en el navegador
2. Click en el botón flotante (esquina inferior derecha)
3. Prueba estas preguntas:
   - "¿Cuál es tu experiencia?"
   - "¿Qué tecnologías dominas?"
   - "¿Has trabajado con IA?"
   - "¿Cómo puedo contactarte?"

## ❌ Solución de problemas

### Error: "OpenAI API key no configurada"
- ✅ Verifica que `.env.local` existe
- ✅ Verifica que la variable se llama `OPENAI_API_KEY`
- ✅ Reinicia el servidor (`npm run dev`)

### Error: "API key inválida"
- ✅ Verifica que copiaste bien la key
- ✅ Verifica que la key está activa en OpenAI
- ✅ Verifica que tienes créditos en tu cuenta

### El chat no aparece
- ✅ Verifica que `<ChatWidget />` está en `app/page.tsx`
- ✅ Revisa la consola del navegador por errores
- ✅ Verifica que el puerto correcto está abierto

## 📚 Archivos creados

```
📁 Tu proyecto
├── 📄 .env.local                    # API key (NO subir a Git)
├── 📄 .env.example                  # Ejemplo de configuración
├── 📁 app/
│   └── 📁 api/
│       └── 📁 chat/
│           └── 📄 route.ts          # API endpoint del chat
├── 📁 components/
│   └── 📁 chat/
│       └── 📄 ChatWidget.tsx        # Componente principal del chat
└── 📁 lib/
    └── 📁 data/
        └── 📄 chatContext.ts        # Configuración y contexto
```

## 🎉 ¡Listo!

Tu portfolio ahora tiene un asistente de IA que puede responder preguntas sobre ti 24/7.

**Próximos pasos sugeridos:**
1. Configura tu API key de OpenAI
2. Personaliza el contexto con más detalles de tu CV
3. Prueba diferentes preguntas
4. Ajusta el prompt según las respuestas
5. ¡Disfruta de tu asistente personal!

---

**¿Necesitas ayuda?** Revisa la documentación de OpenAI o ajusta el prompt del sistema.
