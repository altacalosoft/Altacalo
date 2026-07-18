const translations = {
  en: {
    'meta.title': 'Altacalo-Soft | Software and IT Solutions for Modern Businesses',
    'meta.description': 'Altacalo-Soft provides software consulting, process automation, system integration, and enterprise technology solutions for modern businesses.',
    'meta.ogTitle': 'Altacalo-Soft | Software and IT Solutions',
    'meta.ogDescription': 'Custom software, automation, technology integration, and specialized support for modern businesses.',

    'nav.brandAria': 'Altacalo-Soft home',
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.software': 'Software',
    'nav.services': 'Services',
    'nav.iot': 'IoT',
    'nav.company': 'Company',
    'nav.process': 'Process',
    'nav.cases': 'Cases',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.headerButton': 'Contact Us',
    'nav.toggleOpen': 'Open navigation menu',
    'nav.toggleClose': 'Close navigation menu',

    'lang.groupAria': 'Language selector',
    'lang.switchToEnglish': 'Switch to English',
    'lang.switchToSpanish': 'Switch to Spanish',
    'lang.switchToItalian': 'Switch to Italian',

    'hero.eyebrow': 'Software & IoT solutions',
    'hero.title': 'Software and IoT Solutions for Modern Businesses',
    'hero.subtitle': 'Two ways we help you: custom software to digitalize your operations, and IoT sensor monitoring with automatic alerts.',
    'hero.exploreSolutions': 'Explore Solutions',
    'hero.exploreServices': 'Explore Services',
    'hero.requestConsultation': 'Request a Consultation',
    'hero.panelAria': 'Altacalo-Soft capability overview',
    'hero.metricLabel': 'Operational support mindset',
    'hero.integrationTitle': 'Integration',
    'hero.integrationDesc': 'Systems, data, and workflows connected.',
    'hero.automationTitle': 'Automation',
    'hero.automationDesc': 'Repeatable delivery and process control.',

    'solutions.eyebrow': 'What we do',
    'solutions.heading': 'Two solution areas, one technology partner',
    'solutions.intro': 'Altacalo-Soft helps you on two fronts. Choose the area you need — or combine both.',
    'solutions.software.title': 'Software Solutions',
    'solutions.software.desc': 'Custom software to digitalize, automate, and connect your operations.',
    'solutions.software.f1': 'Custom development & web platforms',
    'solutions.software.f2': 'Automation & system integration',
    'solutions.software.f3': 'Databases, DevOps & support',
    'solutions.software.link': 'Explore software',
    'solutions.iot.title': 'IoT Solutions',
    'solutions.iot.desc': 'Bluetooth sensors and a monitoring platform with automatic alerts.',
    'solutions.iot.f1': 'Bluetooth sensors & gateway',
    'solutions.iot.f2': 'Deployment & data storage',
    'solutions.iot.f3': 'Monitoring & automatic alerts',
    'solutions.iot.link': 'Explore IoT',

    'services.eyebrow': 'Software Solutions',
    'services.heading': 'Software services built for practical outcomes',
    'services.intro': 'Engineering, architecture, automation, and support to help you modernize operations without unnecessary complexity.',
    'services.item1.title': 'Custom Software Development',
    'services.item1.desc': 'Tailor-made web platforms, business systems, APIs, and digital tools designed around your process.',
    'services.item2.title': 'Enterprise Architecture',
    'services.item2.desc': 'Architecture planning for scalable, secure, and maintainable enterprise technology ecosystems.',
    'services.item3.title': 'Blockchain Solutions',
    'services.item3.desc': 'Consulting and implementation for traceability, smart contracts, and decentralized transaction flows.',
    'services.item4.title': 'PostgreSQL Support',
    'services.item4.desc': 'Database consulting, optimization, administration, reliability work, and production support.',
    'services.item5.title': 'Oracle Support',
    'services.item5.desc': 'Specialized help for Oracle environments, performance analysis, migrations, and maintenance planning.',
    'services.item6.title': 'DevOps',
    'services.item6.desc': 'CI/CD, infrastructure automation, monitoring, deployment strategy, and operational reliability.',
    'services.item7.title': 'Technology Outsourcing',
    'services.item7.desc': 'Dedicated technical capacity for software, infrastructure, support, and project delivery.',
    'services.item8.title': 'UX/UI Design',
    'services.item8.desc': 'Interface design for business tools, dashboards, portals, and digital service experiences.',
    'services.item9.title': 'CMS Web Development',
    'services.item9.desc': 'Maintainable content websites and CMS-driven pages for teams that need clear publishing workflows.',
    'services.item10.title': 'IoT Sensor Monitoring',
    'services.item10.desc': 'Bluetooth sensors, gateways, and our monitoring platform with data storage and automatic alerts.',

    'iot.eyebrow': 'IoT Monitoring',
    'iot.heading': 'Bluetooth sensor monitoring with automatic alerts',
    'iot.intro': 'We deploy Bluetooth sensors, connect them to a gateway, and stream the data to our own monitoring platform. You see everything in real time and get automatic alerts when something goes out of range.',
    'iot.flowAria': 'How the monitoring system works',
    'iot.flow1.title': 'Bluetooth Sensors',
    'iot.flow1.desc': 'Temperature, humidity, door and multi-sensors measure conditions on site.',
    'iot.link1': 'Bluetooth (BLE)',
    'iot.flow2.title': 'Gateway',
    'iot.flow2.desc': 'The gateway collects nearby sensors over Bluetooth and sends the data online.',
    'iot.link2': 'Cellular / Internet',
    'iot.flow3.title': 'Altacalo Platform',
    'iot.flow3.desc': 'Our platform stores the readings securely and keeps the history available.',
    'iot.link3': 'Real time',
    'iot.flow4.title': 'Monitoring & Alerts',
    'iot.flow4.desc': 'Dashboards show live data and automatic alerts warn you when a limit is crossed.',

    'iot.sensors.heading': 'Sensors and gateway we deploy',
    'iot.sensors.intro': 'We install and configure the hardware, so you only need to look at the data.',
    'iot.sensors.gatewayTag': 'Gateway',
    'iot.sensors.sensorTag': 'Sensor',
    'iot.sensors.specLink': 'View specifications',
    'iot.sensors.gateway.title': 'Outdoor Cellular Gateway',
    'iot.sensors.gateway.desc': 'Rugged outdoor gateway that gathers Bluetooth sensors and sends data over the cellular network.',
    'iot.sensors.temphum.title': 'Temperature & Humidity Sensor',
    'iot.sensors.temphum.desc': 'Continuous temperature and humidity readings for rooms, warehouses, and cold storage.',
    'iot.sensors.logger.title': 'Temperature Logger',
    'iot.sensors.logger.desc': 'Temperature logger that records history and keeps traceability of the cold chain.',
    'iot.sensors.door.title': 'Bluetooth Door Sensor',
    'iot.sensors.door.desc': 'Detects door openings and closings for access, security, and cold storage control.',
    'iot.sensors.multi.title': 'Multi-Sensor',
    'iot.sensors.multi.desc': 'Combines several measurements in one device for movement, environment, and status monitoring.',

    'iot.plans.heading': 'Monitoring on our own platform',
    'iot.plans.intro': 'Data is stored and displayed on the Altacalo platform. Choose the plan that fits your operation.',
    'iot.plans.free.name': 'Free version',
    'iot.plans.free.price': '$0',
    'iot.plans.free.tagline': 'To get started and try the platform.',
    'iot.plans.free.f1': 'Real-time data visualization',
    'iot.plans.free.f2': 'Basic monitoring dashboard',
    'iot.plans.free.f3': 'Limited data storage',
    'iot.plans.free.f4': 'No automatic alerts',
    'iot.plans.pro.badge': 'Recommended',
    'iot.plans.pro.name': 'Monthly plan',
    'iot.plans.pro.price': 'Monthly',
    'iot.plans.pro.cycle': 'subscription',
    'iot.plans.pro.tagline': 'For continuous operations that need alerts and history.',
    'iot.plans.pro.f1': 'Everything in the free version',
    'iot.plans.pro.f2': 'Expanded data storage',
    'iot.plans.pro.f3': 'Automatic alerts by email and notification',
    'iot.plans.pro.f4': 'Extended history and reports',
    'iot.plans.pro.f5': 'Priority technical support',
    'iot.plans.pro.cta': 'Request this plan',

    'iot.service.heading': 'A complete deployment and monitoring service',
    'iot.service.desc': 'We take care of the full setup: from installing the sensors to storing the data and configuring the alerts.',
    'iot.service.item1.title': 'Sensor deployment',
    'iot.service.item1.desc': 'Installation and configuration of sensors and gateway on site.',
    'iot.service.item2.title': 'Data storage',
    'iot.service.item2.desc': 'Secure storage of readings and history on our platform.',
    'iot.service.item3.title': 'Monitoring',
    'iot.service.item3.desc': 'Real-time dashboards to follow every sensor.',
    'iot.service.item4.title': 'Automatic alerts',
    'iot.service.item4.desc': 'Instant notifications when a value goes out of range.',

    'company.eyebrow': 'About Altacalo-Soft',
    'company.heading': 'Consulting for connected, scalable, and efficient technology',
    'company.desc': 'Founded in January 2026 and based in Barcelona, Spain, Altacalo-Soft brings together highly qualified professionals in software development and IoT systems, with solid experience delivering technology projects. We combine custom software with connected sensor solutions to help companies across Europe operate more efficiently, securely, and at scale.',
    'company.value1.title': 'Innovation',
    'company.value1.desc': 'Modern solutions that solve real business constraints.',
    'company.value2.title': 'Quality',
    'company.value2.desc': 'Disciplined implementation, testing, and technical review.',
    'company.value3.title': 'Scalability',
    'company.value3.desc': 'Architectures that can evolve with users, data, and operations.',
    'company.value4.title': 'Technical Support',
    'company.value4.desc': 'Specialized follow-through after launch and during growth.',

    'cta.eyebrow': 'Digital transformation',
    'cta.heading': 'Grow Your Business with Digital Solutions',
    'cta.desc': 'Digitalize processes, centralize information, and improve operational efficiency with solutions designed for your business.',
    'cta.button': 'Contact Us',

    'approach.eyebrow': 'Our Approach',
    'approach.heading': 'Three software disciplines, one delivery model',
    'approach.item1.title': 'Product Engineering',
    'approach.item1.desc': 'Agile teams, custom web platforms, APIs, and automation from discovery to delivery.',
    'approach.item2.title': 'Cloud & DevOps',
    'approach.item2.desc': 'CI/CD pipelines, infrastructure automation, monitoring, and deployment reliability.',
    'approach.item3.title': 'Data & Integration',
    'approach.item3.desc': 'Database engineering, system integration, and secure data flows across your stack.',

    'process.eyebrow': 'Work Process',
    'process.heading': 'A clear path from business need to supported solution',
    'process.step1.title': 'Discovery',
    'process.step1.desc': 'We understand goals, users, workflows, constraints, integrations, and operational priorities.',
    'process.step2.title': 'Design and Architecture',
    'process.step2.desc': 'We define the solution structure, user experience, data flows, security needs, and delivery plan.',
    'process.step3.title': 'Development and Testing',
    'process.step3.desc': 'We build iteratively, validate functionality, review quality, and test business-critical workflows.',
    'process.step4.title': 'Deployment and Support',
    'process.step4.desc': 'We release the solution, assist adoption, monitor behavior, and provide post-deployment support.',

    'cases.eyebrow': 'Success Cases',
    'cases.heading': 'Example solutions',
    'cases.intro': 'The following cases are generic example solutions for illustration only. They are not real client projects.',
    'cases.label': 'Example solution',
    'cases.case1.title': 'Internal Business Management Platform',
    'cases.case1.desc': 'A centralized platform concept for operational records, approvals, reporting, and role-based team access.',
    'cases.case2.title': 'Mobile App for Digital Services',
    'cases.case2.desc': 'A mobile service concept for customer requests, status tracking, secure user access, and digital notifications.',
    'cases.case3.title': 'Administrative Process Automation',
    'cases.case3.desc': 'An automation concept for repetitive administrative work, document routing, alerts, and internal dashboards.',

    'faq.eyebrow': 'FAQ',
    'faq.heading': 'Frequently asked questions',
    'faq.intro': 'Quick answers about how Altacalo-Soft starts, builds, and supports technology projects.',
    'faq.q1': 'How can Altacalo-Soft improve my company’s efficiency?',
    'faq.a1': 'By automating repetitive activities, integrating disconnected systems, improving data visibility, and building tools that match your real operational workflows.',
    'faq.q2': 'What type of solutions do you develop?',
    'faq.a2': 'We develop custom software, web platforms, APIs, process automation, database solutions, system integrations, embedded technology, and enterprise support models.',
    'faq.q3': 'Do you work with small companies or startups?',
    'faq.a3': 'Yes. Projects can start with a focused MVP, a technical audit, a small automation, or a phased delivery plan that grows with the business.',
    'faq.q4': 'How does a project start?',
    'faq.a4': 'A project starts with discovery: goals, current processes, users, constraints, expected outcomes, and a practical proposal for the next steps.',
    'faq.q5': 'Do you provide support after deployment?',
    'faq.a5': 'Yes. Altacalo-Soft can provide maintenance, monitoring, improvements, technical assistance, and operational support after deployment.',

    'contact.eyebrow': 'Contact',
    'contact.heading': 'Request a consultation',
    'contact.desc': 'Tell us what you want to improve, automate, integrate, or build. The form opens your email client with a prepared message.',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.formName': 'Name',
    'contact.formEmail': 'Email',
    'contact.formSubject': 'Subject',
    'contact.formMessage': 'Message',
    'contact.formSubmit': 'Send Message',
    'contact.formError': 'Please complete all fields before sending.',
    'contact.formSuccess': 'Opening your email client to send the message.',
    'contact.defaultSubject': 'Consultation request',
    'contact.bodyNamePrefix': 'Name',
    'contact.bodyMessagePrefix': 'Message',

    'footer.desc': 'Software consulting for automation, integration, and enterprise technology solutions.',
    'footer.servicesHeading': 'Services',
    'footer.emailHeading': 'Email',
    'footer.phoneHeading': 'Phone',
    'footer.locationHeading': 'Location',
    'footer.location': 'Barcelona, Spain',
    'footer.copyright': 'Altacalo-Soft. All rights reserved.'
  },
  es: {
    'meta.title': 'Altacalo-Soft | Soluciones de Software y TI para Empresas Modernas',
    'meta.description': 'Altacalo-Soft ofrece consultoría de software, automatización de procesos, integración de sistemas y soluciones tecnológicas empresariales para empresas modernas.',
    'meta.ogTitle': 'Altacalo-Soft | Soluciones de Software y TI',
    'meta.ogDescription': 'Software a la medida, automatización, integración tecnológica y soporte especializado para empresas modernas.',

    'nav.brandAria': 'Inicio de Altacalo-Soft',
    'nav.home': 'Inicio',
    'nav.solutions': 'Soluciones',
    'nav.software': 'Software',
    'nav.services': 'Servicios',
    'nav.iot': 'IoT',
    'nav.company': 'Empresa',
    'nav.process': 'Proceso',
    'nav.cases': 'Casos',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    'nav.headerButton': 'Contáctanos',
    'nav.toggleOpen': 'Abrir menú de navegación',
    'nav.toggleClose': 'Cerrar menú de navegación',

    'lang.groupAria': 'Selector de idioma',
    'lang.switchToEnglish': 'Cambiar a inglés',
    'lang.switchToSpanish': 'Cambiar a español',
    'lang.switchToItalian': 'Cambiar a italiano',

    'hero.eyebrow': 'Soluciones de Software e IoT',
    'hero.title': 'Soluciones de Software e IoT para Empresas Modernas',
    'hero.subtitle': 'Dos formas de ayudarte: software a la medida para digitalizar tus operaciones y monitoreo de sensores IoT con alertas automáticas.',
    'hero.exploreSolutions': 'Explorar Soluciones',
    'hero.exploreServices': 'Explorar Servicios',
    'hero.requestConsultation': 'Solicitar una Consultoría',
    'hero.panelAria': 'Resumen de capacidades de Altacalo-Soft',
    'hero.metricLabel': 'Mentalidad de soporte operativo continuo',
    'hero.integrationTitle': 'Integración',
    'hero.integrationDesc': 'Sistemas, datos y flujos de trabajo conectados.',
    'hero.automationTitle': 'Automatización',
    'hero.automationDesc': 'Entrega repetible y control de procesos.',

    'solutions.eyebrow': 'Qué hacemos',
    'solutions.heading': 'Dos áreas de solución, un solo socio tecnológico',
    'solutions.intro': 'Altacalo-Soft te ayuda en dos frentes. Elige el área que necesitas — o combina ambas.',
    'solutions.software.title': 'Soluciones de Software',
    'solutions.software.desc': 'Software a la medida para digitalizar, automatizar y conectar tus operaciones.',
    'solutions.software.f1': 'Desarrollo a la medida y plataformas web',
    'solutions.software.f2': 'Automatización e integración de sistemas',
    'solutions.software.f3': 'Bases de datos, DevOps y soporte',
    'solutions.software.link': 'Explorar software',
    'solutions.iot.title': 'Soluciones IoT',
    'solutions.iot.desc': 'Sensores Bluetooth y una plataforma de monitoreo con alertas automáticas.',
    'solutions.iot.f1': 'Sensores Bluetooth y gateway',
    'solutions.iot.f2': 'Despliegue y almacenamiento de datos',
    'solutions.iot.f3': 'Monitoreo y alertas automáticas',
    'solutions.iot.link': 'Explorar IoT',

    'services.eyebrow': 'Soluciones de Software',
    'services.heading': 'Servicios de software orientados a resultados prácticos',
    'services.intro': 'Ingeniería, arquitectura, automatización y soporte para ayudarte a modernizar tus operaciones sin complejidad innecesaria.',
    'services.item1.title': 'Desarrollo de Software a la Medida',
    'services.item1.desc': 'Plataformas web, sistemas de negocio, APIs y herramientas digitales diseñadas a la medida de tus procesos.',
    'services.item2.title': 'Arquitectura Empresarial',
    'services.item2.desc': 'Planificación de arquitecturas para ecosistemas tecnológicos empresariales escalables, seguros y mantenibles.',
    'services.item3.title': 'Soluciones Blockchain',
    'services.item3.desc': 'Consultoría e implementación para trazabilidad, contratos inteligentes y flujos de transacciones descentralizadas.',
    'services.item4.title': 'Soporte de PostgreSQL',
    'services.item4.desc': 'Consultoría de bases de datos, optimización, administración, confiabilidad y soporte en producción.',
    'services.item5.title': 'Soporte de Oracle',
    'services.item5.desc': 'Ayuda especializada para entornos Oracle, análisis de rendimiento, migraciones y planificación de mantenimiento.',
    'services.item6.title': 'DevOps',
    'services.item6.desc': 'CI/CD, automatización de infraestructura, monitoreo, estrategia de despliegue y confiabilidad operativa.',
    'services.item7.title': 'Outsourcing Tecnológico',
    'services.item7.desc': 'Capacidad técnica dedicada para software, infraestructura, soporte y entrega de proyectos.',
    'services.item8.title': 'Diseño UX/UI',
    'services.item8.desc': 'Diseño de interfaces para herramientas de negocio, dashboards, portales y experiencias de servicios digitales.',
    'services.item9.title': 'Desarrollo Web con CMS',
    'services.item9.desc': 'Sitios web de contenido mantenibles y páginas basadas en CMS para equipos que necesitan flujos de publicación claros.',
    'services.item10.title': 'Monitoreo de Sensores IoT',
    'services.item10.desc': 'Sensores Bluetooth, gateways y nuestra plataforma de monitoreo con almacenamiento de datos y alertas automáticas.',

    'iot.eyebrow': 'Monitoreo IoT',
    'iot.heading': 'Monitoreo de sensores Bluetooth con alertas automáticas',
    'iot.intro': 'Desplegamos sensores Bluetooth, los conectamos a un gateway y enviamos los datos a nuestra propia plataforma de monitoreo. Ves todo en tiempo real y recibes alertas automáticas cuando algo se sale de rango.',
    'iot.flowAria': 'Cómo funciona el sistema de monitoreo',
    'iot.flow1.title': 'Sensores Bluetooth',
    'iot.flow1.desc': 'Sensores de temperatura, humedad, puerta y multisensor miden las condiciones en sitio.',
    'iot.link1': 'Bluetooth (BLE)',
    'iot.flow2.title': 'Gateway',
    'iot.flow2.desc': 'El gateway recolecta los sensores cercanos por Bluetooth y envía los datos a internet.',
    'iot.link2': 'Celular / Internet',
    'iot.flow3.title': 'Plataforma Altacalo',
    'iot.flow3.desc': 'Nuestra plataforma almacena las lecturas de forma segura y mantiene el historial disponible.',
    'iot.link3': 'Tiempo real',
    'iot.flow4.title': 'Monitoreo y Alertas',
    'iot.flow4.desc': 'Los paneles muestran los datos en vivo y las alertas automáticas te avisan cuando se cruza un límite.',

    'iot.sensors.heading': 'Sensores y gateway que desplegamos',
    'iot.sensors.intro': 'Instalamos y configuramos el hardware, para que tú solo tengas que ver los datos.',
    'iot.sensors.gatewayTag': 'Gateway',
    'iot.sensors.sensorTag': 'Sensor',
    'iot.sensors.specLink': 'Ver especificaciones',
    'iot.sensors.gateway.title': 'Gateway Celular de Exterior',
    'iot.sensors.gateway.desc': 'Gateway robusto para exterior que reúne los sensores Bluetooth y envía los datos por la red celular.',
    'iot.sensors.temphum.title': 'Sensor de Temperatura y Humedad',
    'iot.sensors.temphum.desc': 'Lecturas continuas de temperatura y humedad para salas, almacenes y cámaras frigoríficas.',
    'iot.sensors.logger.title': 'Registrador de Temperatura',
    'iot.sensors.logger.desc': 'Registrador de temperatura que guarda el historial y mantiene la trazabilidad de la cadena de frío.',
    'iot.sensors.door.title': 'Sensor de Puerta Bluetooth',
    'iot.sensors.door.desc': 'Detecta aperturas y cierres de puertas para control de acceso, seguridad y cámaras de frío.',
    'iot.sensors.multi.title': 'Multisensor',
    'iot.sensors.multi.desc': 'Combina varias mediciones en un solo dispositivo para monitorear movimiento, ambiente y estado.',

    'iot.plans.heading': 'Monitoreo en nuestra propia plataforma',
    'iot.plans.intro': 'Los datos se almacenan y se muestran en la plataforma Altacalo. Elige el plan que se ajuste a tu operación.',
    'iot.plans.free.name': 'Versión gratuita',
    'iot.plans.free.price': '$0',
    'iot.plans.free.tagline': 'Para empezar y probar la plataforma.',
    'iot.plans.free.f1': 'Visualización de datos en tiempo real',
    'iot.plans.free.f2': 'Panel de monitoreo básico',
    'iot.plans.free.f3': 'Almacenamiento de datos limitado',
    'iot.plans.free.f4': 'Sin alertas automáticas',
    'iot.plans.pro.badge': 'Recomendado',
    'iot.plans.pro.name': 'Plan mensual',
    'iot.plans.pro.price': 'Mensual',
    'iot.plans.pro.cycle': 'suscripción',
    'iot.plans.pro.tagline': 'Para operaciones continuas que necesitan alertas e historial.',
    'iot.plans.pro.f1': 'Todo lo de la versión gratuita',
    'iot.plans.pro.f2': 'Almacenamiento de datos ampliado',
    'iot.plans.pro.f3': 'Alertas automáticas por correo y notificación',
    'iot.plans.pro.f4': 'Historial ampliado y reportes',
    'iot.plans.pro.f5': 'Soporte técnico prioritario',
    'iot.plans.pro.cta': 'Solicitar este plan',

    'iot.service.heading': 'Un servicio integral de despliegue y monitoreo',
    'iot.service.desc': 'Nos encargamos de todo el montaje: desde instalar los sensores hasta almacenar los datos y configurar las alertas.',
    'iot.service.item1.title': 'Despliegue de sensores',
    'iot.service.item1.desc': 'Instalación y configuración de los sensores y el gateway en sitio.',
    'iot.service.item2.title': 'Almacenamiento de datos',
    'iot.service.item2.desc': 'Almacenamiento seguro de las lecturas y el historial en nuestra plataforma.',
    'iot.service.item3.title': 'Monitoreo',
    'iot.service.item3.desc': 'Paneles en tiempo real para seguir cada sensor.',
    'iot.service.item4.title': 'Alertas automáticas',
    'iot.service.item4.desc': 'Notificaciones inmediatas cuando un valor se sale de rango.',

    'company.eyebrow': 'Sobre Altacalo-Soft',
    'company.heading': 'Consultoría para una tecnología conectada, escalable y eficiente',
    'company.desc': 'Fundada en enero de 2026 y con sede en Barcelona (España), Altacalo-Soft reúne a profesionales altamente cualificados en desarrollo de software y sistemas IoT, con sólida experiencia en proyectos tecnológicos. Combinamos software a la medida con soluciones de sensores conectados para ayudar a empresas de toda Europa a operar de forma más eficiente, segura y escalable.',
    'company.value1.title': 'Innovación',
    'company.value1.desc': 'Soluciones modernas que resuelven limitaciones reales del negocio.',
    'company.value2.title': 'Calidad',
    'company.value2.desc': 'Implementación disciplinada, pruebas y revisión técnica.',
    'company.value3.title': 'Escalabilidad',
    'company.value3.desc': 'Arquitecturas que evolucionan junto con los usuarios, los datos y las operaciones.',
    'company.value4.title': 'Soporte Técnico',
    'company.value4.desc': 'Acompañamiento especializado después del lanzamiento y durante el crecimiento.',

    'cta.eyebrow': 'Transformación digital',
    'cta.heading': 'Haz crecer tu negocio con soluciones digitales',
    'cta.desc': 'Digitaliza procesos, centraliza la información y mejora la eficiencia operativa con soluciones diseñadas para tu negocio.',
    'cta.button': 'Contáctanos',

    'approach.eyebrow': 'Nuestro Enfoque',
    'approach.heading': 'Tres disciplinas de software, un solo modelo de entrega',
    'approach.item1.title': 'Ingeniería de Producto',
    'approach.item1.desc': 'Equipos ágiles, plataformas web a la medida, APIs y automatización de principio a fin.',
    'approach.item2.title': 'Cloud y DevOps',
    'approach.item2.desc': 'Pipelines de CI/CD, automatización de infraestructura, monitoreo y confiabilidad en el despliegue.',
    'approach.item3.title': 'Datos e Integración',
    'approach.item3.desc': 'Ingeniería de bases de datos, integración de sistemas y flujos de datos seguros en todo tu stack.',

    'process.eyebrow': 'Proceso de Trabajo',
    'process.heading': 'Un camino claro desde la necesidad del negocio hasta una solución con soporte',
    'process.step1.title': 'Descubrimiento',
    'process.step1.desc': 'Entendemos objetivos, usuarios, flujos de trabajo, restricciones, integraciones y prioridades operativas.',
    'process.step2.title': 'Diseño y Arquitectura',
    'process.step2.desc': 'Definimos la estructura de la solución, la experiencia de usuario, los flujos de datos, las necesidades de seguridad y el plan de entrega.',
    'process.step3.title': 'Desarrollo y Pruebas',
    'process.step3.desc': 'Construimos de forma iterativa, validamos funcionalidad, revisamos calidad y probamos flujos críticos del negocio.',
    'process.step4.title': 'Despliegue y Soporte',
    'process.step4.desc': 'Liberamos la solución, apoyamos la adopción, monitoreamos el comportamiento y brindamos soporte posterior al despliegue.',

    'cases.eyebrow': 'Casos de Éxito',
    'cases.heading': 'Soluciones de ejemplo',
    'cases.intro': 'Los siguientes casos son ejemplos genéricos únicamente ilustrativos. No corresponden a proyectos reales de clientes.',
    'cases.label': 'Solución de ejemplo',
    'cases.case1.title': 'Plataforma Interna de Gestión Empresarial',
    'cases.case1.desc': 'Un concepto de plataforma centralizada para registros operativos, aprobaciones, reportes y acceso de equipo basado en roles.',
    'cases.case2.title': 'Aplicación Móvil para Servicios Digitales',
    'cases.case2.desc': 'Un concepto de servicio móvil para solicitudes de clientes, seguimiento de estado, acceso seguro de usuarios y notificaciones digitales.',
    'cases.case3.title': 'Automatización de Procesos Administrativos',
    'cases.case3.desc': 'Un concepto de automatización para trabajo administrativo repetitivo, enrutamiento de documentos, alertas y dashboards internos.',

    'faq.eyebrow': 'Preguntas Frecuentes',
    'faq.heading': 'Preguntas frecuentes',
    'faq.intro': 'Respuestas rápidas sobre cómo Altacalo-Soft inicia, construye y da soporte a proyectos tecnológicos.',
    'faq.q1': '¿Cómo puede Altacalo-Soft mejorar la eficiencia de mi empresa?',
    'faq.a1': 'Automatizando actividades repetitivas, integrando sistemas desconectados, mejorando la visibilidad de los datos y construyendo herramientas alineadas con tus flujos operativos reales.',
    'faq.q2': '¿Qué tipo de soluciones desarrollan?',
    'faq.a2': 'Desarrollamos software a la medida, plataformas web, APIs, automatización de procesos, soluciones de bases de datos, integraciones de sistemas, tecnología embebida y modelos de soporte empresarial.',
    'faq.q3': '¿Trabajan con pequeñas empresas o startups?',
    'faq.a3': 'Sí. Los proyectos pueden iniciar con un MVP enfocado, una auditoría técnica, una automatización pequeña o un plan de entrega por fases que crece junto con el negocio.',
    'faq.q4': '¿Cómo inicia un proyecto?',
    'faq.a4': 'Un proyecto inicia con descubrimiento: objetivos, procesos actuales, usuarios, restricciones, resultados esperados y una propuesta práctica de próximos pasos.',
    'faq.q5': '¿Brindan soporte después del despliegue?',
    'faq.a5': 'Sí. Altacalo-Soft brinda mantenimiento, monitoreo, mejoras, asistencia técnica y soporte operativo después del despliegue.',

    'contact.eyebrow': 'Contacto',
    'contact.heading': 'Solicita una consultoría',
    'contact.desc': 'Cuéntanos qué quieres mejorar, automatizar, integrar o construir. El formulario abrirá tu cliente de correo con un mensaje preparado.',
    'contact.emailLabel': 'Correo',
    'contact.phoneLabel': 'Teléfono',
    'contact.formName': 'Nombre',
    'contact.formEmail': 'Correo',
    'contact.formSubject': 'Asunto',
    'contact.formMessage': 'Mensaje',
    'contact.formSubmit': 'Enviar Mensaje',
    'contact.formError': 'Por favor completa todos los campos antes de enviar.',
    'contact.formSuccess': 'Abriendo tu cliente de correo para enviar el mensaje.',
    'contact.defaultSubject': 'Solicitud de consultoría',
    'contact.bodyNamePrefix': 'Nombre',
    'contact.bodyMessagePrefix': 'Mensaje',

    'footer.desc': 'Consultoría en software para automatización, integración y soluciones tecnológicas empresariales.',
    'footer.servicesHeading': 'Servicios',
    'footer.emailHeading': 'Correo',
    'footer.phoneHeading': 'Teléfono',
    'footer.locationHeading': 'Ubicación',
    'footer.location': 'Barcelona, España',
    'footer.copyright': 'Altacalo-Soft. Todos los derechos reservados.'
  },
  it: {
    'meta.title': 'Altacalo-Soft | Soluzioni Software e IoT per Aziende Moderne',
    'meta.description': 'Altacalo-Soft offre consulenza software, automazione dei processi, integrazione di sistemi e soluzioni tecnologiche aziendali per aziende moderne.',
    'meta.ogTitle': 'Altacalo-Soft | Soluzioni Software e IoT',
    'meta.ogDescription': 'Software su misura, automazione, integrazione tecnologica e supporto specializzato per aziende moderne.',

    'nav.brandAria': 'Home di Altacalo-Soft',
    'nav.home': 'Home',
    'nav.solutions': 'Soluzioni',
    'nav.software': 'Software',
    'nav.services': 'Servizi',
    'nav.iot': 'IoT',
    'nav.company': 'Azienda',
    'nav.process': 'Processo',
    'nav.cases': 'Casi',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contatti',
    'nav.headerButton': 'Contattaci',
    'nav.toggleOpen': 'Apri il menu di navigazione',
    'nav.toggleClose': 'Chiudi il menu di navigazione',

    'lang.groupAria': 'Selettore della lingua',
    'lang.switchToEnglish': 'Passa all\'inglese',
    'lang.switchToSpanish': 'Passa allo spagnolo',
    'lang.switchToItalian': 'Passa all\'italiano',

    'hero.eyebrow': 'Soluzioni Software e IoT',
    'hero.title': 'Soluzioni Software e IoT per Aziende Moderne',
    'hero.subtitle': 'Due modi in cui ti aiutiamo: software su misura per digitalizzare le tue operazioni e monitoraggio di sensori IoT con avvisi automatici.',
    'hero.exploreSolutions': 'Esplora le Soluzioni',
    'hero.exploreServices': 'Esplora i Servizi',
    'hero.requestConsultation': 'Richiedi una Consulenza',
    'hero.panelAria': 'Panoramica delle capacità di Altacalo-Soft',
    'hero.metricLabel': 'Mentalità di supporto operativo continuo',
    'hero.integrationTitle': 'Integrazione',
    'hero.integrationDesc': 'Sistemi, dati e flussi di lavoro connessi.',
    'hero.automationTitle': 'Automazione',
    'hero.automationDesc': 'Consegna ripetibile e controllo dei processi.',

    'solutions.eyebrow': 'Cosa facciamo',
    'solutions.heading': 'Due aree di soluzione, un unico partner tecnologico',
    'solutions.intro': 'Altacalo-Soft ti aiuta su due fronti. Scegli l\'area di cui hai bisogno — o combina entrambe.',
    'solutions.software.title': 'Soluzioni Software',
    'solutions.software.desc': 'Software su misura per digitalizzare, automatizzare e connettere le tue operazioni.',
    'solutions.software.f1': 'Sviluppo su misura e piattaforme web',
    'solutions.software.f2': 'Automazione e integrazione di sistemi',
    'solutions.software.f3': 'Database, DevOps e supporto',
    'solutions.software.link': 'Esplora il software',
    'solutions.iot.title': 'Soluzioni IoT',
    'solutions.iot.desc': 'Sensori Bluetooth e una piattaforma di monitoraggio con avvisi automatici.',
    'solutions.iot.f1': 'Sensori Bluetooth e gateway',
    'solutions.iot.f2': 'Installazione e archiviazione dei dati',
    'solutions.iot.f3': 'Monitoraggio e avvisi automatici',
    'solutions.iot.link': 'Esplora l\'IoT',

    'services.eyebrow': 'Soluzioni Software',
    'services.heading': 'Servizi software pensati per risultati concreti',
    'services.intro': 'Ingegneria, architettura, automazione e supporto per aiutarti a modernizzare le operazioni senza complessità inutile.',
    'services.item1.title': 'Sviluppo Software su Misura',
    'services.item1.desc': 'Piattaforme web, sistemi aziendali, API e strumenti digitali progettati su misura per i tuoi processi.',
    'services.item2.title': 'Architettura Aziendale',
    'services.item2.desc': 'Pianificazione dell\'architettura per ecosistemi tecnologici aziendali scalabili, sicuri e manutenibili.',
    'services.item3.title': 'Soluzioni Blockchain',
    'services.item3.desc': 'Consulenza e implementazione per tracciabilità, smart contract e flussi di transazioni decentralizzate.',
    'services.item4.title': 'Supporto PostgreSQL',
    'services.item4.desc': 'Consulenza sui database, ottimizzazione, amministrazione, affidabilità e supporto in produzione.',
    'services.item5.title': 'Supporto Oracle',
    'services.item5.desc': 'Assistenza specializzata per ambienti Oracle, analisi delle prestazioni, migrazioni e pianificazione della manutenzione.',
    'services.item6.title': 'DevOps',
    'services.item6.desc': 'CI/CD, automazione dell\'infrastruttura, monitoraggio, strategia di distribuzione e affidabilità operativa.',
    'services.item7.title': 'Outsourcing Tecnologico',
    'services.item7.desc': 'Capacità tecnica dedicata per software, infrastruttura, supporto e consegna dei progetti.',
    'services.item8.title': 'Design UX/UI',
    'services.item8.desc': 'Design di interfacce per strumenti aziendali, dashboard, portali ed esperienze di servizi digitali.',
    'services.item9.title': 'Sviluppo Web con CMS',
    'services.item9.desc': 'Siti web di contenuti manutenibili e pagine basate su CMS per team che necessitano di flussi di pubblicazione chiari.',
    'services.item10.title': 'Monitoraggio di Sensori IoT',
    'services.item10.desc': 'Sensori Bluetooth, gateway e la nostra piattaforma di monitoraggio con archiviazione dei dati e avvisi automatici.',

    'iot.eyebrow': 'Monitoraggio IoT',
    'iot.heading': 'Monitoraggio di sensori Bluetooth con avvisi automatici',
    'iot.intro': 'Installiamo sensori Bluetooth, li colleghiamo a un gateway e inviamo i dati alla nostra piattaforma di monitoraggio. Vedi tutto in tempo reale e ricevi avvisi automatici quando qualcosa esce dai limiti.',
    'iot.flowAria': 'Come funziona il sistema di monitoraggio',
    'iot.flow1.title': 'Sensori Bluetooth',
    'iot.flow1.desc': 'Sensori di temperatura, umidità, porta e multisensore misurano le condizioni in loco.',
    'iot.link1': 'Bluetooth (BLE)',
    'iot.flow2.title': 'Gateway',
    'iot.flow2.desc': 'Il gateway raccoglie i sensori vicini via Bluetooth e invia i dati online.',
    'iot.link2': 'Cellulare / Internet',
    'iot.flow3.title': 'Piattaforma Altacalo',
    'iot.flow3.desc': 'La nostra piattaforma archivia le letture in modo sicuro e mantiene lo storico disponibile.',
    'iot.link3': 'Tempo reale',
    'iot.flow4.title': 'Monitoraggio e Avvisi',
    'iot.flow4.desc': 'Le dashboard mostrano i dati in tempo reale e gli avvisi automatici ti segnalano quando viene superato un limite.',

    'iot.sensors.heading': 'Sensori e gateway che installiamo',
    'iot.sensors.intro': 'Installiamo e configuriamo l\'hardware, così devi solo guardare i dati.',
    'iot.sensors.gatewayTag': 'Gateway',
    'iot.sensors.sensorTag': 'Sensore',
    'iot.sensors.specLink': 'Vedi le specifiche',
    'iot.sensors.gateway.title': 'Gateway Cellulare da Esterno',
    'iot.sensors.gateway.desc': 'Gateway robusto da esterno che raccoglie i sensori Bluetooth e invia i dati sulla rete cellulare.',
    'iot.sensors.temphum.title': 'Sensore di Temperatura e Umidità',
    'iot.sensors.temphum.desc': 'Letture continue di temperatura e umidità per stanze, magazzini e celle frigorifere.',
    'iot.sensors.logger.title': 'Data Logger di Temperatura',
    'iot.sensors.logger.desc': 'Registratore di temperatura che memorizza lo storico e garantisce la tracciabilità della catena del freddo.',
    'iot.sensors.door.title': 'Sensore di Porta Bluetooth',
    'iot.sensors.door.desc': 'Rileva aperture e chiusure delle porte per il controllo di accessi, sicurezza e celle frigorifere.',
    'iot.sensors.multi.title': 'Multisensore',
    'iot.sensors.multi.desc': 'Combina più misurazioni in un unico dispositivo per monitorare movimento, ambiente e stato.',

    'iot.plans.heading': 'Monitoraggio sulla nostra piattaforma',
    'iot.plans.intro': 'I dati vengono archiviati e visualizzati sulla piattaforma Altacalo. Scegli il piano più adatto alla tua operatività.',
    'iot.plans.free.name': 'Versione gratuita',
    'iot.plans.free.price': '$0',
    'iot.plans.free.tagline': 'Per iniziare e provare la piattaforma.',
    'iot.plans.free.f1': 'Visualizzazione dei dati in tempo reale',
    'iot.plans.free.f2': 'Dashboard di monitoraggio di base',
    'iot.plans.free.f3': 'Archiviazione dati limitata',
    'iot.plans.free.f4': 'Nessun avviso automatico',
    'iot.plans.pro.badge': 'Consigliato',
    'iot.plans.pro.name': 'Piano mensile',
    'iot.plans.pro.price': 'Mensile',
    'iot.plans.pro.cycle': 'abbonamento',
    'iot.plans.pro.tagline': 'Per operazioni continue che richiedono avvisi e storico.',
    'iot.plans.pro.f1': 'Tutto ciò che è incluso nella versione gratuita',
    'iot.plans.pro.f2': 'Archiviazione dati ampliata',
    'iot.plans.pro.f3': 'Avvisi automatici via email e notifica',
    'iot.plans.pro.f4': 'Storico esteso e report',
    'iot.plans.pro.f5': 'Supporto tecnico prioritario',
    'iot.plans.pro.cta': 'Richiedi questo piano',

    'iot.service.heading': 'Un servizio completo di installazione e monitoraggio',
    'iot.service.desc': 'Ci occupiamo di tutta la configurazione: dall\'installazione dei sensori all\'archiviazione dei dati e alla configurazione degli avvisi.',
    'iot.service.item1.title': 'Installazione dei sensori',
    'iot.service.item1.desc': 'Installazione e configurazione dei sensori e del gateway in loco.',
    'iot.service.item2.title': 'Archiviazione dei dati',
    'iot.service.item2.desc': 'Archiviazione sicura delle letture e dello storico sulla nostra piattaforma.',
    'iot.service.item3.title': 'Monitoraggio',
    'iot.service.item3.desc': 'Dashboard in tempo reale per seguire ogni sensore.',
    'iot.service.item4.title': 'Avvisi automatici',
    'iot.service.item4.desc': 'Notifiche immediate quando un valore esce dai limiti.',

    'company.eyebrow': 'Chi è Altacalo-Soft',
    'company.heading': 'Consulenza per una tecnologia connessa, scalabile ed efficiente',
    'company.desc': 'Fondata nel gennaio 2026 e con sede a Barcellona (Spagna), Altacalo-Soft riunisce professionisti altamente qualificati nello sviluppo software e nei sistemi IoT, con solida esperienza nei progetti tecnologici. Uniamo software su misura e soluzioni di sensori connessi per aiutare le aziende di tutta Europa a operare in modo più efficiente, sicuro e scalabile.',
    'company.value1.title': 'Innovazione',
    'company.value1.desc': 'Soluzioni moderne che risolvono i vincoli reali dell\'azienda.',
    'company.value2.title': 'Qualità',
    'company.value2.desc': 'Implementazione disciplinata, test e revisione tecnica.',
    'company.value3.title': 'Scalabilità',
    'company.value3.desc': 'Architetture che evolvono insieme a utenti, dati e operazioni.',
    'company.value4.title': 'Supporto Tecnico',
    'company.value4.desc': 'Accompagnamento specializzato dopo il lancio e durante la crescita.',

    'cta.eyebrow': 'Trasformazione digitale',
    'cta.heading': 'Fai crescere la tua azienda con soluzioni digitali',
    'cta.desc': 'Digitalizza i processi, centralizza le informazioni e migliora l\'efficienza operativa con soluzioni progettate per la tua azienda.',
    'cta.button': 'Contattaci',

    'approach.eyebrow': 'Il Nostro Approccio',
    'approach.heading': 'Tre discipline software, un unico modello di consegna',
    'approach.item1.title': 'Ingegneria di Prodotto',
    'approach.item1.desc': 'Team agili, piattaforme web su misura, API e automazione dall\'analisi alla consegna.',
    'approach.item2.title': 'Cloud e DevOps',
    'approach.item2.desc': 'Pipeline CI/CD, automazione dell\'infrastruttura, monitoraggio e affidabilità nel deployment.',
    'approach.item3.title': 'Dati e Integrazione',
    'approach.item3.desc': 'Ingegneria dei database, integrazione dei sistemi e flussi di dati sicuri nel tuo stack.',

    'process.eyebrow': 'Processo di Lavoro',
    'process.heading': 'Un percorso chiaro dall\'esigenza aziendale a una soluzione supportata',
    'process.step1.title': 'Analisi',
    'process.step1.desc': 'Comprendiamo obiettivi, utenti, flussi di lavoro, vincoli, integrazioni e priorità operative.',
    'process.step2.title': 'Design e Architettura',
    'process.step2.desc': 'Definiamo la struttura della soluzione, l\'esperienza utente, i flussi di dati, le esigenze di sicurezza e il piano di consegna.',
    'process.step3.title': 'Sviluppo e Test',
    'process.step3.desc': 'Costruiamo in modo iterativo, validiamo le funzionalità, revisioniamo la qualità e testiamo i flussi critici per l\'azienda.',
    'process.step4.title': 'Distribuzione e Supporto',
    'process.step4.desc': 'Rilasciamo la soluzione, supportiamo l\'adozione, monitoriamo il comportamento e forniamo supporto post-distribuzione.',

    'cases.eyebrow': 'Casi di Successo',
    'cases.heading': 'Soluzioni di esempio',
    'cases.intro': 'I casi seguenti sono esempi generici solo a scopo illustrativo. Non corrispondono a progetti reali di clienti.',
    'cases.label': 'Soluzione di esempio',
    'cases.case1.title': 'Piattaforma Interna di Gestione Aziendale',
    'cases.case1.desc': 'Un concetto di piattaforma centralizzata per registri operativi, approvazioni, report e accesso del team basato sui ruoli.',
    'cases.case2.title': 'App Mobile per Servizi Digitali',
    'cases.case2.desc': 'Un concetto di servizio mobile per richieste dei clienti, monitoraggio dello stato, accesso sicuro degli utenti e notifiche digitali.',
    'cases.case3.title': 'Automazione dei Processi Amministrativi',
    'cases.case3.desc': 'Un concetto di automazione per il lavoro amministrativo ripetitivo, instradamento dei documenti, avvisi e dashboard interne.',

    'faq.eyebrow': 'FAQ',
    'faq.heading': 'Domande frequenti',
    'faq.intro': 'Risposte rapide su come Altacalo-Soft avvia, costruisce e supporta i progetti tecnologici.',
    'faq.q1': 'Come può Altacalo-Soft migliorare l\'efficienza della mia azienda?',
    'faq.a1': 'Automatizzando le attività ripetitive, integrando sistemi scollegati, migliorando la visibilità dei dati e creando strumenti allineati ai tuoi reali flussi operativi.',
    'faq.q2': 'Che tipo di soluzioni sviluppate?',
    'faq.a2': 'Sviluppiamo software su misura, piattaforme web, API, automazione dei processi, soluzioni di database, integrazioni di sistemi, tecnologia embedded e modelli di supporto aziendale.',
    'faq.q3': 'Lavorate con piccole aziende o startup?',
    'faq.a3': 'Sì. I progetti possono iniziare con un MVP mirato, un audit tecnico, una piccola automazione o un piano di consegna a fasi che cresce insieme all\'azienda.',
    'faq.q4': 'Come inizia un progetto?',
    'faq.a4': 'Un progetto inizia con l\'analisi: obiettivi, processi attuali, utenti, vincoli, risultati attesi e una proposta pratica per i passi successivi.',
    'faq.q5': 'Fornite supporto dopo la distribuzione?',
    'faq.a5': 'Sì. Altacalo-Soft può fornire manutenzione, monitoraggio, miglioramenti, assistenza tecnica e supporto operativo dopo la distribuzione.',

    'contact.eyebrow': 'Contatti',
    'contact.heading': 'Richiedi una consulenza',
    'contact.desc': 'Raccontaci cosa vuoi migliorare, automatizzare, integrare o costruire. Il modulo aprirà il tuo client di posta con un messaggio già pronto.',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Telefono',
    'contact.formName': 'Nome',
    'contact.formEmail': 'Email',
    'contact.formSubject': 'Oggetto',
    'contact.formMessage': 'Messaggio',
    'contact.formSubmit': 'Invia Messaggio',
    'contact.formError': 'Completa tutti i campi prima di inviare.',
    'contact.formSuccess': 'Apertura del client di posta per inviare il messaggio.',
    'contact.defaultSubject': 'Richiesta di consulenza',
    'contact.bodyNamePrefix': 'Nome',
    'contact.bodyMessagePrefix': 'Messaggio',

    'footer.desc': 'Consulenza software per automazione, integrazione e soluzioni tecnologiche aziendali.',
    'footer.servicesHeading': 'Servizi',
    'footer.emailHeading': 'Email',
    'footer.phoneHeading': 'Telefono',
    'footer.locationHeading': 'Sede',
    'footer.location': 'Barcellona, Spagna',
    'footer.copyright': 'Altacalo-Soft. Tutti i diritti riservati.'
  }
};

const LANG_STORAGE_KEY = 'altacalosoft-lang';

const detectInitialLang = () => {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'en' || stored === 'es' || stored === 'it') return stored;
  const browser = (navigator.language || '').toLowerCase();
  if (browser.startsWith('es')) return 'es';
  if (browser.startsWith('it')) return 'it';
  return 'en';
};

let currentLang = detectInitialLang();

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const navLinks = document.querySelectorAll('.primary-nav a');
const year = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const langButtons = document.querySelectorAll('.lang-btn');

const applyLanguage = (lang) => {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.title = dict['meta.title'];

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', dict['meta.description']);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', dict['meta.ogTitle']);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', dict['meta.ogDescription']);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    const localeMap = { es: 'es_ES', it: 'it_IT', en: 'en_US' };
    ogLocale.setAttribute('content', localeMap[lang] || 'en_US');
  }

  langButtons.forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
  });

  if (navToggle) {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', isOpen ? dict['nav.toggleClose'] : dict['nav.toggleOpen']);
  }

  localStorage.setItem(LANG_STORAGE_KEY, lang);
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang !== currentLang) applyLanguage(lang);
  });
});

applyLanguage(currentLang);

const closeNavigation = () => {
  if (!navToggle || !nav) return;

  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', translations[currentLang]['nav.toggleOpen']);
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    const dict = translations[currentLang];

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? dict['nav.toggleOpen'] : dict['nav.toggleClose']);
    nav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const sections = [...document.querySelectorAll('main section[id]')];

if ('IntersectionObserver' in window && sections.length > 0) {
  const activeNavObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => activeNavObserver.observe(section));
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const dict = translations[currentLang];
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || dict['contact.defaultSubject']).trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      if (formStatus) {
        formStatus.textContent = dict['contact.formError'];
      }
      return;
    }

    const body = [
      `${dict['contact.bodyNamePrefix']}: ${name}`,
      `Email: ${email}`,
      '',
      `${dict['contact.bodyMessagePrefix']}:`,
      message
    ].join('\n');

    const mailto = `mailto:altacalosoft@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (formStatus) {
      formStatus.textContent = dict['contact.formSuccess'];
    }

    window.location.href = mailto;
  });
}
