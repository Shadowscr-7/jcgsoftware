# 📝 Guía de Personalización del Portfolio

Esta guía te ayudará a personalizar el portfolio con tu información.

---

## 🎨 1. Colores y Tema

### Archivo: `app/globals.css`

Puedes cambiar los colores principales editando las variables CSS:

```css
.dark {
  --primary: oklch(0.75 0.15 195);  /* #00D9FF - Cyan */
  --secondary: oklch(0.45 0.25 285); /* #7B2FF7 - Purple */
  --accent: oklch(0.62 0.25 350);    /* #FF3366 - Pink */
}
```

---

## 📄 2. Información Personal

### Archivo: `lib/constants.ts`

Actualiza tu información básica:

```typescript
export const SITE_CONFIG = {
  name: "TU NOMBRE COMPLETO",
  title: "Portfolio - Tu Título Profesional",
  description: "Tu descripción profesional",
  url: "https://tudominio.com",
  links: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    email: "mailto:tu-email@ejemplo.com",
  },
};
```

---

## 🖼️ 3. Imágenes

### Foto de Perfil
- **Ubicación**: `public/profile.jpg`
- **Recomendación**: 500x500px mínimo, formato JPG o PNG
- **Actualiza**: Componente Hero en `components/sections/Hero.tsx`

### CV/Resume PDF
- **Ubicación**: `public/resume.pdf`
- **Enlace**: Ya configurado en el Hero Section

### Screenshots de Proyectos
- **Ubicación**: `public/projects/`
- **Formato**: PNG o JPG optimizado
- **Nombres sugeridos**: 
  - `proyecto-1.jpg`
  - `proyecto-2.jpg`
  - etc.

---

## 💼 4. Experiencia Laboral

### Crear archivo: `lib/data/experience.ts`

```typescript
import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Nombre de la Empresa",
    position: "Tu Cargo",
    period: "Enero 2020 - Presente",
    location: "Ciudad, País",
    description: "Descripción breve de tu rol",
    achievements: [
      "Logro destacado 1",
      "Logro destacado 2",
      "Logro destacado 3",
    ],
    technologies: ["React", "Node.js", "TypeScript", "etc."],
    current: true,
  },
  {
    id: "2",
    company: "Empresa Anterior",
    position: "Cargo Anterior",
    period: "Enero 2018 - Diciembre 2019",
    location: "Ciudad, País",
    description: "Descripción del rol",
    achievements: [
      "Logro 1",
      "Logro 2",
    ],
    technologies: ["Vue", "Python", "etc."],
  },
  // Agregar más experiencias...
];
```

---

## 🛠️ 5. Habilidades

### Crear archivo: `lib/data/skills.ts`

```typescript
import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 95, yearsOfExperience: 8 },
  { name: "Next.js", category: "frontend", level: 90, yearsOfExperience: 5 },
  { name: "TypeScript", category: "frontend", level: 90, yearsOfExperience: 6 },
  { name: "Vue.js", category: "frontend", level: 85, yearsOfExperience: 4 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 90, yearsOfExperience: 7 },
  { name: "Python", category: "backend", level: 85, yearsOfExperience: 6 },
  { name: "Java", category: "backend", level: 80, yearsOfExperience: 5 },
  
  // Mobile
  { name: "React Native", category: "mobile", level: 85, yearsOfExperience: 5 },
  { name: "Flutter", category: "mobile", level: 75, yearsOfExperience: 3 },
  
  // Database
  { name: "PostgreSQL", category: "database", level: 85, yearsOfExperience: 7 },
  { name: "MongoDB", category: "database", level: 80, yearsOfExperience: 6 },
  
  // AI
  { name: "TensorFlow", category: "ai", level: 75, yearsOfExperience: 3 },
  { name: "OpenAI API", category: "ai", level: 85, yearsOfExperience: 2 },
  
  // Agregar más habilidades...
];
```

---

## 📂 6. Proyectos

### Crear archivo: `lib/data/projects.ts`

```typescript
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Nombre del Proyecto",
    description: "Descripción corta del proyecto",
    longDescription: "Descripción detallada...",
    category: "web", // 'web' | 'mobile' | 'ai' | 'automation' | 'marketing'
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/proyecto-1.jpg",
    images: ["/projects/proyecto-1-1.jpg", "/projects/proyecto-1-2.jpg"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/tu-usuario/proyecto",
    featured: true,
    impact: "Aumentó las ventas en 40%",
    year: 2024,
  },
  {
    id: "2",
    title: "Otro Proyecto",
    description: "Descripción...",
    category: "mobile",
    tags: ["React Native", "Firebase"],
    image: "/projects/proyecto-2.jpg",
    featured: true,
    year: 2023,
  },
  // Agregar más proyectos...
];
```

---

## 🎓 7. Educación

### Crear archivo: `lib/data/education.ts`

```typescript
import { Education } from "@/types";

export const education: Education[] = [
  {
    id: "1",
    institution: "Universidad/Instituto",
    degree: "Título Obtenido",
    field: "Campo de Estudio",
    period: "2010 - 2014",
    description: "Descripción opcional",
  },
  // Agregar más educación...
];
```

---

## 🏆 8. Certificaciones

### Crear archivo: `lib/data/certifications.ts`

```typescript
import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Nombre de la Certificación",
    issuer: "Organización Emisora",
    date: "Enero 2024",
    credentialUrl: "https://credential-url.com",
  },
  // Agregar más certificaciones...
];
```

---

## 🤝 9. Servicios

### Crear archivo: `lib/data/services.ts`

```typescript
import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Desarrollo Full Stack",
    description: "Desarrollo completo de aplicaciones web modernas",
    icon: "Code2", // Nombre del icono de Lucide
    features: [
      "Arquitectura escalable",
      "APIs RESTful",
      "Bases de datos optimizadas",
      "Deployment en cloud",
    ],
  },
  {
    id: "2",
    title: "Desarrollo Mobile",
    description: "Apps nativas e híbridas para iOS y Android",
    icon: "Smartphone",
    features: [
      "React Native / Flutter",
      "UI/UX optimizado",
      "Push notifications",
      "App Store deployment",
    ],
  },
  {
    id: "3",
    title: "Inteligencia Artificial",
    description: "Implementación de soluciones IA",
    icon: "Brain",
    features: [
      "Integración OpenAI",
      "Chatbots inteligentes",
      "Análisis de datos",
      "Machine Learning",
    ],
  },
  // Agregar más servicios...
];
```

---

## 📧 10. Formulario de Contacto

### Configurar Email (opcional)

Si quieres que el formulario envíe emails reales:

1. Crear cuenta en [Resend](https://resend.com/) o [SendGrid](https://sendgrid.com/)
2. Obtener API Key
3. Crear archivo `.env.local`:

```env
RESEND_API_KEY=tu_api_key_aqui
```

4. El API route ya estará listo en `app/api/contact/route.ts`

---

## 🔗 11. Redes Sociales

### Archivo: `components/sections/Hero.tsx`

Actualizar los links de las redes sociales:

```tsx
<a href="https://github.com/TU-USUARIO" target="_blank">
  <Github className="w-5 h-5" />
</a>
<a href="https://linkedin.com/in/TU-USUARIO" target="_blank">
  <Linkedin className="w-5 h-5" />
</a>
<a href="mailto:TU-EMAIL@ejemplo.com">
  <Mail className="w-5 h-5" />
</a>
```

---

## 🎯 12. SEO y Metadata

### Archivo: `app/layout.tsx`

Actualizar la metadata:

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre - Portfolio",
  description: "Tu descripción profesional",
  keywords: ["tus", "palabras", "clave"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre - Portfolio",
    description: "Tu descripción",
    type: "website",
    url: "https://tudominio.com",
    images: ["/og-image.jpg"],
  },
};
```

---

## 🚀 Checklist Rápido

- [ ] Actualizar `lib/constants.ts` con tu info
- [ ] Cambiar colors en `app/globals.css` (opcional)
- [ ] Agregar tu foto en `public/profile.jpg`
- [ ] Crear `lib/data/experience.ts`
- [ ] Crear `lib/data/skills.ts`
- [ ] Crear `lib/data/projects.ts`
- [ ] Agregar screenshots en `public/projects/`
- [ ] Actualizar links de redes sociales
- [ ] Agregar CV en `public/resume.pdf`
- [ ] Actualizar metadata SEO

---

## 💡 Consejos

1. **Optimiza las imágenes**: Usa herramientas como [TinyPNG](https://tinypng.com/)
2. **Sé específico**: Incluye métricas y resultados en tus logros
3. **Mantén actualizado**: Agrega nuevos proyectos regularmente
4. **Testing**: Prueba en diferentes dispositivos y navegadores
5. **Analytics**: Agrega Google Analytics para ver el tráfico

---

**¿Necesitas ayuda?** Consulta el `PROJECT_PLAN.md` para más detalles.
