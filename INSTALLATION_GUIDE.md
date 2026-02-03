# 📦 GUÍA DE INSTALACIÓN EN NUEVA PC

## 🎯 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### 1. Node.js (versión 18 o superior)
- **Descargar:** https://nodejs.org/
- **Verificar instalación:** Abre terminal y ejecuta:
  ```bash
  node --version
  ```
  Debe mostrar: `v18.x.x` o superior

### 2. Editor de Código
- **Visual Studio Code** (recomendado): https://code.visualstudio.com/
- Alternativamente: Sublime, Atom, WebStorm, etc.

---

## 📋 PASOS DE INSTALACIÓN

### Paso 1: Extraer el Proyecto

1. Copiar el archivo ZIP a tu nueva PC
2. Hacer click derecho → "Extraer todo..."
3. Elegir ubicación (ejemplo: `C:\Proyectos\portfolio`)
4. Extraer

### Paso 2: Instalar Dependencias

Abrir terminal en la carpeta del proyecto:

**Windows (PowerShell):**
```powershell
cd C:\Proyectos\portfolio
npm install
```

**Esto instalará automáticamente:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- OpenAI SDK
- Shadcn/ui
- Y todas las demás dependencias (ver package.json)

⏱️ **Tiempo estimado:** 2-5 minutos (depende de tu conexión)

### Paso 3: Configurar Variables de Entorno

1. Abrir el archivo `.env.local` (si no existe, copiar de `.env.example`)
2. Agregar tu OpenAI API Key:

```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
NEXT_PUBLIC_CHAT_ENABLED=true
```

**¿Dónde obtener la API Key?**
- https://platform.openai.com/api-keys
- Crear cuenta si no tienes
- Generar nueva key
- Copiar y pegar en `.env.local`

### Paso 4: Ejecutar el Proyecto

```bash
npm run dev
```

El proyecto se abrirá en: **http://localhost:3000**

---

## ✅ VERIFICAR QUE TODO FUNCIONA

### Checklist:

- [ ] El sitio carga sin errores
- [ ] El navbar se ve correctamente con el logo
- [ ] Las secciones se desplazan suavemente
- [ ] Las animaciones funcionan
- [ ] El chat aparece en la esquina inferior derecha
- [ ] El chat responde cuando escribes (requiere API key configurada)

---

## 🔧 COMANDOS ÚTILES

```bash
# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ver producción localmente
npm start

# Limpiar caché (si hay problemas)
rm -rf .next
npm run dev
```

---

## 📂 ESTRUCTURA DEL PROYECTO

```
📁 portfolio/
├── 📁 app/                      # Rutas de Next.js
│   ├── 📁 api/                  # APIs (chat, notify)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globales
│
├── 📁 components/               # Componentes React
│   ├── 📁 animations/           # Componentes de animación
│   ├── 📁 chat/                 # Chat con IA
│   ├── 📁 sections/             # Secciones del portfolio
│   ├── 📁 shared/               # Navbar, Footer
│   └── 📁 ui/                   # Componentes UI (shadcn)
│
├── 📁 lib/                      # Utilidades y datos
│   ├── 📁 data/                 # Datos del portfolio
│   ├── constants.ts             # Constantes
│   └── utils.ts                 # Funciones helper
│
├── 📁 hooks/                    # Custom React Hooks
├── 📁 types/                    # Definiciones TypeScript
├── 📁 public/                   # Archivos estáticos (imágenes, logo)
│
├── 📄 package.json              # Dependencias del proyecto
├── 📄 .env.local                # Variables de entorno (API keys)
├── 📄 tsconfig.json             # Configuración TypeScript
├── 📄 tailwind.config.ts        # Configuración Tailwind
└── 📄 next.config.ts            # Configuración Next.js
```

---

## ⚙️ PERSONALIZACIÓN

### Cambiar tu información:

1. **Datos personales:** `lib/data/chatContext.ts`
2. **Experiencia:** `lib/data/experience.ts`
3. **Habilidades:** `lib/data/skills.ts`
4. **Proyectos:** `lib/data/projects.ts`
5. **Servicios:** `lib/data/services.ts`
6. **Foto de perfil:** Reemplazar `public/profile.jpg`
7. **Logo:** Reemplazar `public/logo.png`

Ver: `CUSTOMIZATION_GUIDE.md` para más detalles

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot find module 'X'"
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Error: "Port 3000 is already in use"
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error relacionado con OpenAI
- ✅ Verificar que `.env.local` existe
- ✅ Verificar que `OPENAI_API_KEY` está configurada
- ✅ Reiniciar el servidor

### El chat no responde
- ✅ Abrir consola del navegador (F12)
- ✅ Ver si hay errores
- ✅ Verificar API key válida
- ✅ Verificar conexión a internet

### Errores de compilación TypeScript
```bash
# Limpiar caché
rm -rf .next
npm run dev
```

---

## 🚀 DEPLOYMENT (PRODUCCIÓN)

### Opción 1: Vercel (Gratis, recomendado)

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Instalar Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Configurar variables de entorno en dashboard de Vercel

### Opción 2: Netlify

1. Crear cuenta en [netlify.com](https://netlify.com)
2. Instalar Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Opción 3: Hosting Tradicional

1. Compilar:
   ```bash
   npm run build
   ```
2. Subir carpeta `.next` y archivos necesarios al servidor
3. Configurar Node.js en el servidor
4. Ejecutar: `npm start`

---

## 📞 SOPORTE

### Documentación incluida:

- 📄 `README.md` - Información general
- 📄 `PROJECT_PLAN.md` - Plan completo del proyecto
- 📄 `CUSTOMIZATION_GUIDE.md` - Cómo personalizar
- 📄 `CHAT_SETUP.md` - Configurar chat con IA
- 📄 `CHAT_ADVANCED_GUIDE.md` - Guía avanzada del chat
- 📄 `NOTIFICATIONS_SETUP.md` - Configurar notificaciones

### Recursos externos:

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- OpenAI: https://platform.openai.com/docs

---

## ✨ FEATURES DEL PROYECTO

✅ Portfolio completo con 7 secciones  
✅ Chat con IA para cotizaciones  
✅ Sistema de agendamiento  
✅ Tema oscuro profesional  
✅ Animaciones con Framer Motion  
✅ Completamente responsive  
✅ Optimizado para SEO  
✅ TypeScript + Next.js 15  
✅ Tailwind CSS 4  

---

## 🎉 ¡LISTO!

Tu portfolio está funcionando. Ahora puedes:

1. ✏️ Personalizar tu información
2. 🎨 Ajustar colores y diseño
3. 📸 Cambiar fotos
4. 🤖 Configurar el chat con IA
5. 🚀 Deployear a producción

**¡Éxito con tu nuevo portfolio! 🚀**
