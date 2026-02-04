// Sistema de traducciones para el portfolio

export const translations = {
  es: {
    // Navbar
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      experience: "Experiencia",
      skills: "Habilidades",
      portfolio: "Portfolio",
      services: "Servicios",
      contact: "Contacto",
    },
    
    // Hero
    hero: {
      role: "Full Stack Developer",
      description: "34 años • 14+ años transformando ideas en realidad digital",
      badge1: "Web & Mobile",
      badge2: "IA & Automatización",
      badge3: "Marketing Digital",
      cta1: "Ver Proyectos",
      cta2: "Contáctame",
      cta3: "Descargar CV",
    },
    
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Un apasionado por la tecnología con 14+ años de experiencia",
      description1: "Soy desarrollador Full Stack uruguayo con más de 14 años de experiencia en desarrollo de software. Mi trayectoria abarca desde aplicaciones web y móviles hasta soluciones de inteligencia artificial y automatización.",
      description2: "He trabajado con empresas de diversos sectores, siempre enfocado en crear soluciones escalables, eficientes y de alta calidad que generen valor real para los usuarios y las empresas.",
      description3: "Mi enfoque es combinar las mejores prácticas de desarrollo con tecnologías de vanguardia para entregar proyectos que superen las expectativas.",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        clients: "Clientes Satisfechos",
        technologies: "Tecnologías Dominadas",
      }
    },
    
    // Experience
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
      present: "Actualidad",
      positions: {
        "1": {
          company: "Riogas",
          position: "Desarrollador Full Stack",
          period: "Octubre 2025 - Actualidad",
          location: "Uruguay",
          description: "Diseño y desarrollo de aplicaciones empresariales para modernizar sistemas internos y optimizar procesos de gestión de clientes.",
          achievements: [
            "Diseñé y desarrollé aplicativos para modernizar sistemas legacy de la empresa",
            "Implementé soluciones con inteligencia artificial para automatización de procesos",
            "Desarrollé aplicación mobile de tracking de pedidos con Flutter para clientes",
            "Integré frameworks modernos como Next.js para aplicaciones web de alta performance",
          ],
        },
        "2": {
          company: "Virtago",
          position: "Arquitecto y Desarrollador Full Stack",
          period: "Mayo 2024 - Octubre 2025",
          location: "Uruguay",
          description: "Diseño y desarrollo completo de plataforma E-commerce B2B desde cero, incluyendo arquitectura de base de datos, frontend, backend e infraestructura cloud.",
          achievements: [
            "Diseñé e implementé arquitectura completa de E-commerce B2B desde cero",
            "Desarrollé backoffice de gestión con React y Genexus, integrando APIs eficientemente",
            "Implementé infraestructura completa en AWS (Lambda, API Gateway, Route 53, Amplify, S3, Elastic)",
            "Creé plataforma escalable para clientes utilizando stack JavaScript moderno (React, Node.js)",
            "Gestioné múltiples bases de datos (MongoDB, DynamoDB) según necesidades del proyecto",
          ],
        },
        "3": {
          company: "Doit",
          position: "Desarrollador Genexus Sr & Full Stack",
          period: "Noviembre 2023 - Mayo 2024",
          location: "Uruguay",
          description: "Desarrollo de soluciones empresariales personalizadas utilizando múltiples tecnologías y gestión de implementaciones en AWS.",
          achievements: [
            "Creé soluciones de software a medida con múltiples tecnologías (Genexus, React, Angular)",
            "Desarrollé sistema frontend con React/Node.js consumiendo servicios REST en Java",
            "Implementé y monitorié aplicaciones en infraestructura AWS",
            "Desarrollé componentes externos utilizando C# para integraciones complejas",
            "Gestioné bases de datos PostgreSQL y MSSQL con queries y transact-sql optimizados",
          ],
        },
        "4": {
          company: "Action Point",
          position: "Desarrollador Genexus Sr & Angular",
          period: "Septiembre 2022 - Noviembre 2023",
          location: "Uruguay",
          description: "Desarrollo, documentación e implementación de soluciones empresariales con diversas tecnologías y bases de datos.",
          achievements: [
            "Desarrollé soluciones de software empresarial con múltiples tecnologías",
            "Implementé aplicaciones en clientes con documentación técnica completa",
            "Gestioné bases de datos Oracle con queries y transact-sql complejos",
            "Desarrollé componentes externos con C# y Java para integraciones avanzadas",
            "Implementé soluciones backend con Node.js para servicios escalables",
          ],
        },
        "5": {
          company: "IdRetail",
          position: "Líder Técnico & Desarrollador Full Stack Sr",
          period: "Julio 2019 - Septiembre 2022",
          location: "Uruguay",
          description: "Liderazgo del área de desarrollo, gestión de equipo técnico e investigación de nuevas tecnologías para innovación empresarial.",
          achievements: [
            "Lideré y gestioné el área completa de desarrollo de la empresa",
            "Implementé soluciones de software a medida con múltiples tecnologías",
            "Investigué e integré nuevas tecnologías para innovación continua",
            "Desarrollé aplicaciones con Genexus Sr y Angular de alta complejidad",
            "Utilicé herramientas de gestión de equipos para optimizar flujo de trabajo",
          ],
        },
        "6": {
          company: "IBM",
          position: "Analista Programador / Desarrollador Genexus Sr",
          period: "Marzo 2017 - Julio 2019",
          location: "Uruguay",
          description: "Desarrollo, documentación e implementación de migración de sistemas para Administración Nacional de Puertos (ANP).",
          achievements: [
            "Participé en equipo de migración del sistema ANP a tecnologías modernas",
            "Realicé tareas de desarrollo, documentación e implementación en cliente",
            "Implementé soluciones con Genexus para modernización de sistemas legacy",
            "Colaboré en proyecto crítico de infraestructura nacional portuaria",
          ],
        },
        "7": {
          company: "Chic Parisien S.A.",
          position: "Analista Programador / Desarrollador Genexus Sr",
          period: "Agosto 2015 - Agosto 2016",
          location: "Uruguay",
          description: "Desarrollo de nuevas funcionalidades, aplicaciones móviles y sistemas web/desktop para gestión empresarial.",
          achievements: [
            "Desarrollé primera aplicación móvil de la empresa para revisión de productos y stock",
            "Implementé nuevas funcionalidades en Genexus y otros lenguajes",
            "Creé aplicaciones web y Windows con C# para gestión interna",
            "Analicé y mejoré sistemas existentes para mayor eficiencia operativa",
          ],
        },
        "8": {
          company: "De Larrobla & Asociados",
          position: "Desarrollador Genexus",
          period: "Noviembre 2011 - Agosto 2015",
          location: "Uruguay",
          description: "Desarrollo de soluciones de Internet Banking para core bancario Bantotal, implementación y soporte en clientes internacionales.",
          achievements: [
            "Desarrollé soluciones de Internet Banking para core bancario Bantotal",
            "Implementé y brindé soporte para Banco HSBC y Banco Lloyds",
            "Desarrollé servicios web utilizando Genexus para integraciones bancarias",
            "Proporcioné mantenimiento continuo y soporte técnico a clientes bancarios",
          ],
        },
      }
    },
    
    // Skills
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas que domino",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        database: "Bases de Datos",
        devops: "DevOps & Tools",
        ai: "IA & ML",
        marketing: "Marketing Digital",
        other: "Otros",
      }
    },
    
    // Portfolio
    portfolio: {
      title: "Portfolio",
      subtitle: "Proyectos destacados que he desarrollado",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      categories: {
        all: "Todos",
        web: "Aplicaciones Web",
        mobile: "Aplicaciones Mobile",
        ai: "Inteligencia Artificial",
        automation: "Automatización",
        marketing: "Marketing & Publicidad",
      },
      projects: {
        "1": {
          title: "Virtago",
          description: "Plataforma E-commerce B2B completa",
          longDescription: "Diseño y desarrollo completo de plataforma E-commerce B2B desde cero. Incluye arquitectura de base de datos, frontend, backend e infraestructura cloud en AWS. Backoffice de gestión con React y Genexus, integrando APIs eficientemente. Plataforma escalable para múltiples clientes con stack JavaScript moderno.",
          impact: "Plataforma B2B escalable con infraestructura completa en AWS",
        },
        "2": {
          title: "Riogas Delivery",
          description: "Aplicación móvil para trackeo de pedidos en tiempo real",
          longDescription: "Aplicación móvil desarrollada con Flutter para tracking de pedidos y vehículos en tiempo real. Permite a los clientes de Riogas seguir el estado de sus pedidos, ubicación de los móviles de entrega, y recibir notificaciones actualizadas. Sistema integrado con backend para gestión de rutas y optimización de entregas.",
          impact: "Mejora en la experiencia del cliente con seguimiento en tiempo real",
        },
        "3": {
          title: "Wasneakers",
          description: "E-commerce de vestimenta deportiva con customización de sneakers",
          longDescription: "Plataforma E-commerce dedicada a la venta de vestimenta deportiva con sistema único de personalización de sneakers. Los usuarios pueden elegir el color de cada tela y customizar sus zapatillas a gusto. Integración completa con Stripe para procesamiento de pagos seguro. Interfaz moderna y responsiva para una experiencia de compra fluida.",
          impact: "Sistema de personalización único en el mercado local",
        },
        "4": {
          title: "Glow Hair",
          description: "E-commerce para productos capilares",
          longDescription: "Plataforma E-commerce especializada en productos capilares con diseño moderno y atractivo. Integración con Mercado Pago para pagos online y opción de pago en persona. Sistema de gestión de inventario, carrito de compras optimizado y experiencia de usuario fluida. Enfocado en la venta de productos de cuidado y tratamiento capilar.",
          impact: "E-commerce completo con múltiples métodos de pago",
        },
        "5": {
          title: "Contact House",
          description: "Plataforma web para inmobiliaria",
          longDescription: "Sitio web completo para inmobiliaria Contact House con catálogo de propiedades, sistema de búsqueda avanzada, formularios de contacto y galería de imágenes. Diseño profesional y responsivo que facilita la navegación y búsqueda de propiedades. Integración con sistemas de gestión inmobiliaria y formularios de contacto directo.",
          impact: "Portal inmobiliario profesional con gestión completa de propiedades",
        },
        "6": {
          title: "Trading Simple",
          description: "Landing page de bots y automatizaciones para trading",
          longDescription: "Landing page profesional para bots de trading y automatizaciones desarrollados para plataformas como Ninja Trader. Presenta los servicios de automatización de estrategias de trading, backtesting, y optimización de operaciones. Diseño moderno y convincente para captar clientes interesados en automatizar sus estrategias de trading.",
          impact: "Automatización de estrategias de trading para múltiples plataformas",
        },
        "7": {
          title: "Meta Ads Campaign Manager",
          description: "Herramienta profesional para gestión de campañas publicitarias",
          longDescription: "Plataforma avanzada para gestionar campañas en Meta Ads a escala. Incluye automatización de reglas, A/B testing, reportes personalizados y optimización con IA.",
          impact: "ROI promedio de 400% en campañas gestionadas",
        },
      }
    },
    
    // Services
    services: {
      title: "Servicios",
      subtitle: "Soluciones profesionales para tu negocio",
      service1: {
        title: "Desarrollo Full Stack",
        description: "Frontend y Backend con las últimas tecnologías. Creo aplicaciones web modernas, escalables y de alto rendimiento, desde el concepto hasta el despliegue en producción, utilizando las mejores prácticas de la industria.",
        features: [
          "Arquitectura escalable y mantenible con microservicios",
          "APIs RESTful y GraphQL con autenticación segura",
          "Bases de datos relacionales y NoSQL optimizadas",
          "Integración con servicios cloud (AWS, Azure, GCP)",
          "Testing automatizado (Unit, Integration, E2E)",
          "Deployment continuo con CI/CD (Docker, Kubernetes)",
          "React, Next.js, Node.js, TypeScript, Python",
          "Optimización de performance y SEO",
        ],
      },
      service2: {
        title: "Desarrollo Mobile",
        description: "Aplicaciones nativas e híbridas iOS/Android. Desarrollo apps móviles de alto rendimiento con experiencia de usuario excepcional, desde startups hasta empresas consolidadas, con código compartido y mantenimiento eficiente.",
        features: [
          "React Native y Flutter para desarrollo cross-platform",
          "Apps nativas iOS (Swift) y Android (Kotlin)",
          "UI/UX nativo optimizado para cada plataforma",
          "Push notifications y mensajería en tiempo real",
          "Integración con APIs REST y GraphQL",
          "Geolocalización y mapas interactivos",
          "Pagos in-app (Apple Pay, Google Pay, Stripe)",
          "App Store y Google Play deployment completo",
          "Mantenimiento continuo y actualizaciones OTA",
        ],
      },
      service3: {
        title: "Inteligencia Artificial",
        description: "Implementación y desarrollo de soluciones IA. Integro modelos de lenguaje avanzados y machine learning para automatizar procesos, analizar datos y crear experiencias inteligentes que impulsan tu negocio al siguiente nivel.",
        features: [
          "Integración OpenAI (GPT-4, GPT-o1), Claude, Gemini",
          "Chatbots inteligentes con contexto personalizado",
          "Análisis de datos con Machine Learning (Python, TensorFlow)",
          "Procesamiento de lenguaje natural (NLP) avanzado",
          "Automatización inteligente de tareas repetitivas",
          "Modelos personalizados fine-tuned para tu negocio",
          "RAG (Retrieval-Augmented Generation) para bases de conocimiento",
          "Agentes IA autónomos para automatización compleja",
          "Análisis predictivo y recomendaciones personalizadas",
        ],
      },
      service4: {
        title: "Automatización",
        description: "Agentes y procesos automatizados. Desarrollo sistemas inteligentes que trabajan 24/7 automatizando tareas repetitivas, integrando sistemas legacy y optimizando flujos de trabajo para aumentar productividad y reducir costos.",
        features: [
          "Bots de automatización para tareas empresariales",
          "Web scraping inteligente con manejo de JavaScript dinámico",
          "Procesamiento automático de documentos y datos",
          "Integración de sistemas empresariales (ERP, CRM, etc.)",
          "Workflows personalizados con reglas de negocio complejas",
          "Automatización de email marketing y follow-ups",
          "RPA (Robotic Process Automation) para procesos legacy",
          "Monitoreo en tiempo real y reporting automatizado",
          "Sincronización entre múltiples plataformas",
        ],
      },
      service5: {
        title: "Marketing Digital",
        description: "Meta Ads y estrategias publicitarias. Gestión profesional de campañas con ROI comprobado. Creo, optimizo y escalo campañas publicitarias en Meta, Google y otras plataformas con enfoque data-driven y resultados medibles.",
        features: [
          "Meta Ads (Facebook/Instagram) - Gestión profesional certificada",
          "Google Ads optimization (Search, Display, Shopping)",
          "Creación de embudos de conversión de alto rendimiento",
          "Análisis y reporting detallado con Google Analytics 4",
          "A/B testing avanzado para maximizar conversiones",
          "Estrategia de segmentación de audiencias y remarketing",
          "Pixel tracking y eventos personalizados",
          "ROI tracking y optimización basada en datos",
          "Copywriting persuasivo y diseño de creatividades",
        ],
      },
      service6: {
        title: "Soporte Técnico",
        description: "Consultoría y armado de infraestructura. Asesoramiento experto en arquitectura de software, migración a cloud, optimización de sistemas y mejores prácticas. Auditorías técnicas y mentoría para equipos de desarrollo.",
        features: [
          "Auditoría completa de código y arquitectura",
          "Diseño de arquitectura de sistemas escalables",
          "Migración a cloud (AWS, Azure, Google Cloud)",
          "Optimización de performance y reducción de costos",
          "Code review y documentación técnica",
          "Implementación de DevOps y CI/CD pipelines",
          "Seguridad y mejores prácticas (OWASP, GDPR)",
          "Mentoría y capacitación para equipos de desarrollo",
          "Soporte 24/7 y mantenimiento continuo",
        ],
      },
    },
    
    // Services Extra Content
    servicesExtra: {
      experienceYears: "14+ años de experiencia",
      whyWorkWithMe: {
        title: "¿Por qué trabajar",
        titleHighlight: "conmigo?",
        reasons: {
          speed: {
            emoji: "⚡",
            title: "Entrega Rápida",
            description: "Metodología ágil para resultados rápidos",
          },
          quality: {
            emoji: "🎯",
            title: "Calidad Premium",
            description: "Código limpio y best practices",
          },
          communication: {
            emoji: "💬",
            title: "Comunicación Clara",
            description: "Updates constantes y transparencia",
          },
          support: {
            emoji: "🚀",
            title: "Soporte Continuo",
            description: "Mantenimiento y actualizaciones",
          },
        },
      },
      process: {
        title: "Mi",
        titleHighlight: "Proceso",
        titleSuffix: "de Trabajo",
        phases: [
          {
            step: "01",
            title: "Descubrimiento",
            description: "Entendemos tus necesidades y objetivos",
          },
          {
            step: "02",
            title: "Planificación",
            description: "Diseñamos la solución y arquitectura",
          },
          {
            step: "03",
            title: "Desarrollo",
            description: "Construimos con las mejores prácticas",
          },
          {
            step: "04",
            title: "Entrega",
            description: "Deploy, testing y documentación completa",
          },
        ],
      },
      cta: {
        question: "¿Listo para llevar tu proyecto al siguiente nivel?",
        button: "Hablemos de tu Proyecto",
      },
    },
    
    // Contact
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      infoTitle: "Información de Contacto",
      phone: "Teléfono",
      location: "Ubicación",
      availability: "Disponibilidad",
      availabilityText: "Actualmente disponible para nuevos proyectos y colaboraciones. Tiempo de respuesta promedio: 24 horas.",
      formTitle: "Envíame un Mensaje",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿En qué puedo ayudarte?",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
      },
      info: {
        location: "Ubicación",
        locationValue: "Uruguay 🇺🇾",
        email: "Email",
        availability: "Disponibilidad",
        availabilityValue: "Abierto a nuevos proyectos",
        response: "Tiempo de Respuesta",
        responseValue: "< 2 horas",
      },
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Por favor, intenta nuevamente.",
    },
    
    // Footer
    footer: {
      brand: "<DEV/>",
      description: "Desarrollador Full Stack con 14+ años de experiencia creando soluciones digitales innovadoras.",
      navigation: "Navegación",
      services: "Servicios",
      servicesLinks: {
        web: "Desarrollo Web",
        mobile: "Desarrollo Mobile",
        ai: "Inteligencia Artificial",
        automation: "Automatización",
        marketing: "Marketing Digital",
        consulting: "Consultoría",
      },
      contact: "Contacto",
      availability: "Disponible para proyectos",
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      using: "usando las últimas tecnologías.",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
    },
    
    // Chat Widget
    chat: {
      title: "💬 Chat con IA",
      subtitle: "Pregúntame lo que quieras",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      thinking: "Pensando...",
      error: "Error al enviar mensaje",
    }
  },
  
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
    },
    
    // Hero
    hero: {
      role: "Full Stack Developer",
      description: "34 years old • 14+ years turning ideas into digital reality",
      badge1: "Web & Mobile",
      badge2: "AI & Automation",
      badge3: "Digital Marketing",
      cta1: "View Projects",
      cta2: "Contact Me",
      cta3: "Download CV",
    },
    
    // About
    about: {
      title: "About Me",
      subtitle: "A technology enthusiast with 14+ years of experience",
      description1: "I'm a Uruguayan Full Stack developer with over 14 years of experience in software development. My career spans from web and mobile applications to artificial intelligence and automation solutions.",
      description2: "I've worked with companies from various sectors, always focused on creating scalable, efficient, and high-quality solutions that generate real value for users and businesses.",
      description3: "My approach is to combine best development practices with cutting-edge technologies to deliver projects that exceed expectations.",
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        clients: "Satisfied Clients",
        technologies: "Mastered Technologies",
      }
    },
    
    // Experience
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      present: "Present",
      positions: {
        "1": {
          company: "Riogas",
          position: "Full Stack Developer",
          period: "October 2025 - Present",
          location: "Uruguay",
          description: "Design and development of enterprise applications to modernize internal systems and optimize customer management processes.",
          achievements: [
            "Designed and developed applications to modernize company's legacy systems",
            "Implemented artificial intelligence solutions for process automation",
            "Developed mobile order tracking application with Flutter for clients",
            "Integrated modern frameworks like Next.js for high-performance web applications",
          ],
        },
        "2": {
          company: "Virtago",
          position: "Architect and Full Stack Developer",
          period: "May 2024 - October 2025",
          location: "Uruguay",
          description: "Complete design and development of B2B E-commerce platform from scratch, including database architecture, frontend, backend and cloud infrastructure.",
          achievements: [
            "Designed and implemented complete B2B E-commerce architecture from scratch",
            "Developed management backoffice with React and Genexus, efficiently integrating APIs",
            "Implemented complete infrastructure on AWS (Lambda, API Gateway, Route 53, Amplify, S3, Elastic)",
            "Created scalable platform for clients using modern JavaScript stack (React, Node.js)",
            "Managed multiple databases (MongoDB, DynamoDB) according to project needs",
          ],
        },
        "3": {
          company: "Doit",
          position: "Senior Genexus & Full Stack Developer",
          period: "November 2023 - May 2024",
          location: "Uruguay",
          description: "Development of custom enterprise solutions using multiple technologies and management of AWS implementations.",
          achievements: [
            "Created custom software solutions with multiple technologies (Genexus, React, Angular)",
            "Developed frontend system with React/Node.js consuming REST services in Java",
            "Implemented and monitored applications on AWS infrastructure",
            "Developed external components using C# for complex integrations",
            "Managed PostgreSQL and MSSQL databases with optimized queries and transact-sql",
          ],
        },
        "4": {
          company: "Action Point",
          position: "Senior Genexus & Angular Developer",
          period: "September 2022 - November 2023",
          location: "Uruguay",
          description: "Development, documentation and implementation of enterprise solutions with various technologies and databases.",
          achievements: [
            "Developed enterprise software solutions with multiple technologies",
            "Implemented applications in clients with complete technical documentation",
            "Managed Oracle databases with complex queries and transact-sql",
            "Developed external components with C# and Java for advanced integrations",
            "Implemented backend solutions with Node.js for scalable services",
          ],
        },
        "5": {
          company: "IdRetail",
          position: "Technical Leader & Senior Full Stack Developer",
          period: "July 2019 - September 2022",
          location: "Uruguay",
          description: "Leadership of the development area, technical team management and research of new technologies for business innovation.",
          achievements: [
            "Led and managed the complete development area of the company",
            "Implemented custom software solutions with multiple technologies",
            "Researched and integrated new technologies for continuous innovation",
            "Developed high complexity applications with Sr Genexus and Angular",
            "Used team management tools to optimize workflow",
          ],
        },
        "6": {
          company: "IBM",
          position: "Programmer Analyst / Senior Genexus Developer",
          period: "March 2017 - July 2019",
          location: "Uruguay",
          description: "Development, documentation and implementation of system migration for National Port Administration (ANP).",
          achievements: [
            "Participated in ANP system migration team to modern technologies",
            "Performed development, documentation and implementation tasks at client site",
            "Implemented solutions with Genexus for legacy system modernization",
            "Collaborated on critical national port infrastructure project",
          ],
        },
        "7": {
          company: "Chic Parisien S.A.",
          position: "Programmer Analyst / Senior Genexus Developer",
          period: "August 2015 - August 2016",
          location: "Uruguay",
          description: "Development of new features, mobile applications and web/desktop systems for business management.",
          achievements: [
            "Developed company's first mobile application for product and stock review",
            "Implemented new features in Genexus and other languages",
            "Created web and Windows applications with C# for internal management",
            "Analyzed and improved existing systems for greater operational efficiency",
          ],
        },
        "8": {
          company: "De Larrobla & Asociados",
          position: "Genexus Developer",
          period: "November 2011 - August 2015",
          location: "Uruguay",
          description: "Development of Internet Banking solutions for Bantotal banking core, implementation and support in international clients.",
          achievements: [
            "Developed Internet Banking solutions for Bantotal banking core",
            "Implemented and provided support for HSBC Bank and Lloyds Bank",
            "Developed web services using Genexus for banking integrations",
            "Provided continuous maintenance and technical support to banking clients",
          ],
        },
      }
    },
    
    // Skills
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I master",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        database: "Databases",
        devops: "DevOps & Tools",
        ai: "AI & ML",
        marketing: "Digital Marketing",
        other: "Others",
      }
    },
    
    // Portfolio
    portfolio: {
      title: "Portfolio",
      subtitle: "Featured projects I've developed",
      viewProject: "View Project",
      viewCode: "View Code",
      categories: {
        all: "All",
        web: "Web Applications",
        mobile: "Mobile Applications",
        ai: "Artificial Intelligence",
        automation: "Automation",
        marketing: "Marketing & Advertising",
      },
      projects: {
        "1": {
          title: "Virtago",
          description: "Complete B2B E-commerce Platform",
          longDescription: "Complete design and development of B2B E-commerce platform from scratch. Includes database architecture, frontend, backend and cloud infrastructure on AWS. Management backoffice with React and Genexus, efficiently integrating APIs. Scalable platform for multiple clients with modern JavaScript stack.",
          impact: "Scalable B2B platform with complete AWS infrastructure",
        },
        "2": {
          title: "Riogas Delivery",
          description: "Mobile app for real-time order tracking",
          longDescription: "Mobile application developed with Flutter for real-time order and vehicle tracking. Allows Riogas customers to track their order status, delivery vehicle location, and receive updated notifications. System integrated with backend for route management and delivery optimization.",
          impact: "Improved customer experience with real-time tracking",
        },
        "3": {
          title: "Wasneakers",
          description: "Sportswear e-commerce with sneaker customization",
          longDescription: "E-commerce platform dedicated to sportswear sales with unique sneaker personalization system. Users can choose the color of each fabric and customize their shoes as desired. Complete integration with Stripe for secure payment processing. Modern and responsive interface for a fluid shopping experience.",
          impact: "Unique customization system in local market",
        },
        "4": {
          title: "Glow Hair",
          description: "E-commerce for hair products",
          longDescription: "E-commerce platform specialized in hair products with modern and attractive design. Integration with Mercado Pago for online payments and in-person payment option. Inventory management system, optimized shopping cart and fluid user experience. Focused on selling hair care and treatment products.",
          impact: "Complete e-commerce with multiple payment methods",
        },
        "5": {
          title: "Contact House",
          description: "Real estate web platform",
          longDescription: "Complete website for Contact House real estate with property catalog, advanced search system, contact forms and image gallery. Professional and responsive design that facilitates navigation and property search. Integration with real estate management systems and direct contact forms.",
          impact: "Professional real estate portal with complete property management",
        },
        "6": {
          title: "Trading Simple",
          description: "Landing page for trading bots and automation",
          longDescription: "Professional landing page for trading bots and automation developed for platforms like Ninja Trader. Presents trading strategy automation services, backtesting, and operation optimization. Modern and convincing design to attract clients interested in automating their trading strategies.",
          impact: "Trading strategy automation for multiple platforms",
        },
        "7": {
          title: "Meta Ads Campaign Manager",
          description: "Professional tool for advertising campaign management",
          longDescription: "Advanced platform to manage Meta Ads campaigns at scale. Includes rule automation, A/B testing, custom reports and AI optimization.",
          impact: "Average ROI of 400% on managed campaigns",
        },
      }
    },
    
    // Services
    services: {
      title: "Services",
      subtitle: "Professional solutions for your business",
      service1: {
        title: "Full Stack Development",
        description: "Frontend and Backend with the latest technologies. I create modern, scalable and high-performance web applications, from concept to production deployment, using industry best practices.",
        features: [
          "Scalable and maintainable architecture with microservices",
          "RESTful and GraphQL APIs with secure authentication",
          "Optimized relational and NoSQL databases",
          "Integration with cloud services (AWS, Azure, GCP)",
          "Automated testing (Unit, Integration, E2E)",
          "Continuous deployment with CI/CD (Docker, Kubernetes)",
          "React, Next.js, Node.js, TypeScript, Python",
          "Performance optimization and SEO",
        ],
      },
      service2: {
        title: "Mobile Development",
        description: "Native and hybrid iOS/Android applications. I develop high-performance mobile apps with exceptional user experience, from startups to established companies, with shared code and efficient maintenance.",
        features: [
          "React Native and Flutter for cross-platform development",
          "Native iOS (Swift) and Android (Kotlin) apps",
          "Native UI/UX optimized for each platform",
          "Push notifications and real-time messaging",
          "Integration with REST and GraphQL APIs",
          "Geolocation and interactive maps",
          "In-app payments (Apple Pay, Google Pay, Stripe)",
          "Complete App Store and Google Play deployment",
          "Continuous maintenance and OTA updates",
        ],
      },
      service3: {
        title: "Artificial Intelligence",
        description: "Implementation and development of AI solutions. I integrate advanced language models and machine learning to automate processes, analyze data and create intelligent experiences that drive your business to the next level.",
        features: [
          "OpenAI integration (GPT-4, GPT-o1), Claude, Gemini",
          "Intelligent chatbots with personalized context",
          "Data analysis with Machine Learning (Python, TensorFlow)",
          "Advanced natural language processing (NLP)",
          "Intelligent automation of repetitive tasks",
          "Custom models fine-tuned for your business",
          "RAG (Retrieval-Augmented Generation) for knowledge bases",
          "Autonomous AI agents for complex automation",
          "Predictive analysis and personalized recommendations",
        ],
      },
      service4: {
        title: "Automation",
        description: "Agents and automated processes. I develop intelligent systems that work 24/7 automating repetitive tasks, integrating legacy systems and optimizing workflows to increase productivity and reduce costs.",
        features: [
          "Automation bots for business tasks",
          "Intelligent web scraping with dynamic JavaScript handling",
          "Automatic document and data processing",
          "Integration of enterprise systems (ERP, CRM, etc.)",
          "Custom workflows with complex business rules",
          "Email marketing and follow-ups automation",
          "RPA (Robotic Process Automation) for legacy processes",
          "Real-time monitoring and automated reporting",
          "Synchronization between multiple platforms",
        ],
      },
      service5: {
        title: "Digital Marketing",
        description: "Meta Ads and advertising strategies. Professional campaign management with proven ROI. I create, optimize and scale advertising campaigns on Meta, Google and other platforms with a data-driven approach and measurable results.",
        features: [
          "Meta Ads (Facebook/Instagram) - Certified professional management",
          "Google Ads optimization (Search, Display, Shopping)",
          "High-performance conversion funnel creation",
          "Detailed analysis and reporting with Google Analytics 4",
          "Advanced A/B testing to maximize conversions",
          "Audience segmentation and remarketing strategy",
          "Pixel tracking and custom events",
          "ROI tracking and data-driven optimization",
          "Persuasive copywriting and creative design",
        ],
      },
      service6: {
        title: "Technical Support",
        description: "Consulting and infrastructure setup. Expert advice on software architecture, cloud migration, system optimization and best practices. Technical audits and mentoring for development teams.",
        features: [
          "Complete code and architecture audit",
          "Scalable system architecture design",
          "Cloud migration (AWS, Azure, Google Cloud)",
          "Performance optimization and cost reduction",
          "Code review and technical documentation",
          "DevOps and CI/CD pipelines implementation",
          "Security and best practices (OWASP, GDPR)",
          "Mentoring and training for development teams",
          "24/7 support and continuous maintenance",
        ],
      },
    },
    
    // Services Extra Content
    servicesExtra: {
      experienceYears: "14+ years of experience",
      whyWorkWithMe: {
        title: "Why work",
        titleHighlight: "with me?",
        reasons: {
          speed: {
            emoji: "⚡",
            title: "Fast Delivery",
            description: "Agile methodology for quick results",
          },
          quality: {
            emoji: "🎯",
            title: "Premium Quality",
            description: "Clean code and best practices",
          },
          communication: {
            emoji: "💬",
            title: "Clear Communication",
            description: "Constant updates and transparency",
          },
          support: {
            emoji: "🚀",
            title: "Continuous Support",
            description: "Maintenance and updates",
          },
        },
      },
      process: {
        title: "My Work",
        titleHighlight: "Process",
        titleSuffix: "",
        phases: [
          {
            step: "01",
            title: "Discovery",
            description: "We understand your needs and objectives",
          },
          {
            step: "02",
            title: "Planning",
            description: "We design the solution and architecture",
          },
          {
            step: "03",
            title: "Development",
            description: "We build with best practices",
          },
          {
            step: "04",
            title: "Delivery",
            description: "Deploy, testing and complete documentation",
          },
        ],
      },
      cta: {
        question: "Ready to take your project to the next level?",
        button: "Let's Talk About Your Project",
      },
    },
    
    // Contact
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      infoTitle: "Contact Information",
      phone: "Phone",
      location: "Location",
      availability: "Availability",
      availabilityText: "Currently available for new projects and collaborations. Average response time: 24 hours.",
      formTitle: "Send Me a Message",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "How can I help you?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
      },
      info: {
        location: "Location",
        locationValue: "Uruguay 🇺🇾",
        email: "Email",
        availability: "Availability",
        availabilityValue: "Open to new projects",
        response: "Response Time",
        responseValue: "< 2 hours",
      },
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },
    
    // Footer
    footer: {
      brand: "<DEV/>",
      description: "Full Stack Developer with 14+ years of experience creating innovative digital solutions.",
      navigation: "Navigation",
      services: "Services",
      servicesLinks: {
        web: "Web Development",
        mobile: "Mobile Development",
        ai: "Artificial Intelligence",
        automation: "Automation",
        marketing: "Digital Marketing",
        consulting: "Consulting",
      },
      contact: "Contact",
      availability: "Available for projects",
      rights: "All rights reserved.",
      madeWith: "Made with",
      using: "using the latest technologies.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
    },
    
    // Chat Widget
    chat: {
      title: "💬 AI Chat",
      subtitle: "Ask me anything",
      placeholder: "Type your message...",
      send: "Send",
      thinking: "Thinking...",
      error: "Error sending message",
    }
  }
};

// Helper function to get nested translations
export function getTranslation(lang: "es" | "en", path: string): any {
  const keys = path.split(".");
  let value: any = translations[lang];
  
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return path; // Return the path if translation not found
    }
  }
  
  return value;
}
