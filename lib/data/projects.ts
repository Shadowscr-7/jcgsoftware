import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Virtago",
    description: "Plataforma E-commerce B2B completa",
    longDescription: "Diseño y desarrollo completo de plataforma E-commerce B2B desde cero. Incluye arquitectura de base de datos, frontend, backend e infraestructura cloud en AWS. Backoffice de gestión con React y Genexus, integrando APIs eficientemente. Plataforma escalable para múltiples clientes con stack JavaScript moderno.",
    category: "web",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "DynamoDB", "AWS Lambda", "S3", "Genexus"],
    image: "/proyectimages/virtago.png",
    demoUrl: "https://virtago.shop",
    featured: true,
    impact: "Plataforma B2B escalable con infraestructura completa en AWS",
    year: 2025,
  },
  {
    id: "2",
    title: "Contact House",
    description: "Plataforma web para inmobiliaria",
    longDescription: "Sitio web completo para inmobiliaria Contact House con catálogo de propiedades, sistema de búsqueda avanzada, formularios de contacto y galería de imágenes. Diseño profesional y responsivo que facilita la navegación y búsqueda de propiedades. Integración con sistemas de gestión inmobiliaria y formularios de contacto directo.",
    category: "web",
    tags: ["React", "Next.js", "MongoDB", "Contact Forms", "Real Estate"],
    image: "/proyectimages/contact.png",
    demoUrl: "https://www.contacthouse.com.uy/",
    featured: true,
    impact: "Portal inmobiliario profesional con gestión completa de propiedades",
    year: 2025,
  },
  {
    id: "3",
    title: "Glow Hair",
    description: "E-commerce para productos capilares",
    longDescription: "Plataforma E-commerce especializada en productos capilares con diseño moderno y atractivo. Integración con Mercado Pago para pagos online y opción de pago en persona. Sistema de gestión de inventario, carrito de compras optimizado y experiencia de usuario fluida. Enfocado en la venta de productos de cuidado y tratamiento capilar.",
    category: "web",
    tags: ["Next.js", "React", "Mercado Pago", "MongoDB", "Vercel"],
    image: "/proyectimages/glowhair.png",
    demoUrl: "https://glowhair.vercel.app/",
    featured: true,
    impact: "E-commerce completo con múltiples métodos de pago",
    year: 2025,
  },
  {
    id: "4",
    title: "Trading Simple",
    description: "Landing page de bots y automatizaciones para trading",
    longDescription: "Landing page profesional para bots de trading y automatizaciones desarrollados para plataformas como Ninja Trader. Presenta los servicios de automatización de estrategias de trading, backtesting, y optimización de operaciones. Diseño moderno y convincente para captar clientes interesados en automatizar sus estrategias de trading.",
    category: "automation",
    tags: ["Next.js", "React", "Trading Bots", "Automation", "Ninja Trader"],
    image: "/proyectimages/trading.png",
    demoUrl: "https://tradingsimple.vercel.app/",
    featured: true,
    impact: "Automatización de estrategias de trading para múltiples plataformas",
    year: 2024,
  },
  {
    id: "5",
    title: "Wasneakers",
    description: "E-commerce de vestimenta deportiva con customización de sneakers",
    longDescription: "Plataforma E-commerce dedicada a la venta de vestimenta deportiva con sistema único de personalización de sneakers. Los usuarios pueden elegir el color de cada tela y customizar sus zapatillas a gusto. Integración completa con Stripe para procesamiento de pagos seguro. Interfaz moderna y responsiva para una experiencia de compra fluida.",
    category: "web",
    tags: ["Next.js", "React", "Stripe", "MongoDB", "Vercel", "Customization"],
    image: "/proyectimages/wasnakers.png",
    demoUrl: "https://wa-nine-coral.vercel.app/",
    featured: true,
    impact: "Sistema de personalización único en el mercado local",
    year: 2023,
  },
  {
    id: "6",
    title: "Riogas Delivery",
    description: "Aplicación móvil para trackeo de pedidos en tiempo real",
    longDescription: "Aplicación móvil desarrollada con Flutter para tracking de pedidos y vehículos en tiempo real. Permite a los clientes de Riogas seguir el estado de sus pedidos, ubicación de los móviles de entrega, y recibir notificaciones actualizadas. Sistema integrado con backend para gestión de rutas y optimización de entregas.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Google Maps", "Real-time Tracking", "Push Notifications"],
    image: "/proyectimages/placeholder.png",
    featured: true,
    impact: "Mejora en la experiencia del cliente con seguimiento en tiempo real",
    year: 2025,
  },
  {
    id: "7",
    title: "Meta Ads Campaign Manager",
    description: "Herramienta profesional para gestión de campañas publicitarias",
    longDescription: "Plataforma avanzada para gestionar campañas en Meta Ads a escala. Incluye automatización de reglas, A/B testing, reportes personalizados y optimización con IA.",
    category: "marketing",
    tags: ["React", "Meta Business API", "Python", "PostgreSQL", "ML"],
    image: "/proyectimages/placeholder.png",
    featured: true,
    impact: "ROI promedio de 400% en campañas gestionadas",
    year: 2024,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByYear = (year: number) => {
  return projects.filter((project) => project.year === year);
};
