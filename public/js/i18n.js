/* =========================================================================
   Nivela — i18n + demo data
   Brand name is centralized here. To rename the platform, change BRAND.
   ========================================================================= */

const BRAND = "Nivela";

/* ---- Static UI strings -------------------------------------------------- */
const I18N = {
  es: {
    "meta.title": `${BRAND} — Aprende a usar la IA que sirve para tu rol`,
    "meta.desc": "Mentor de IA personalizado por rol. Aprende a usar las herramientas correctas para tu trabajo, con práctica real, insignias y certificados.",

    "nav.how": "Cómo funciona",
    "nav.demo": "Pruébalo",
    "nav.teams": "Para equipos",
    "nav.who": "Para quién",
    "nav.cta": "Empezar",

    "badge.validation": "Concepto en validación",

    "hero.kicker": "Mentor de IA por rol",
    "hero.title.a": "Aprende a ",
    "hero.title.b": "usar",
    "hero.title.c": " la IA que de verdad sirve para tu trabajo.",
    "hero.sub": `${BRAND} elige las herramientas exactas para tu rol y te enseña a usarlas paso a paso, como un mentor que conoce tu área. No es otro catálogo de cursos: es práctica real con resultados.`,
    "hero.cta1": "Probar mi plan",
    "hero.cta2": "Cómo funciona",
    "hero.note": "Elige tu rol abajo y mira tu plan en segundos.",

    "problem.kicker": "El problema",
    "problem.title": "Todos hablan de IA. Casi nadie sabe usarla en su trabajo.",
    "problem.body": "Las personas tienen acceso a las herramientas, pero no a la forma correcta de aplicarlas a su rol. Los cursos genéricos solo muestran qué existe, se repiten entre sí y no enseñan a usarlas con criterio. El resultado: resistencia al cambio, tiempo perdido y un potencial enorme sin aprovechar.",
    "problem.p1.t": "Demasiadas herramientas",
    "problem.p1.b": "Salen nuevas cada semana. Nadie sabe cuáles importan para su trabajo.",
    "problem.p2.t": "Cursos que no enseñan",
    "problem.p2.b": "Listan herramientas, pero no muestran cómo aplicarlas a tu tarea real.",
    "problem.p3.t": "Sin acompañamiento",
    "problem.p3.b": "Aprender solo genera fricción, errores y abandono.",

    "how.kicker": "Cómo funciona",
    "how.title": "Tu mentor de IA, en tres pasos.",
    "how.s1.n": "01",
    "how.s1.t": "Diagnostica tu rol",
    "how.s1.b": "Cuéntanos a qué te dedicas. El mentor identifica las tareas donde la IA te dará más ventaja.",
    "how.s2.n": "02",
    "how.s2.t": "Aprende haciendo",
    "how.s2.b": "Lecciones cortas con la herramienta exacta para tu tarea. El mentor te explica, te da ejemplos y practicas en el momento.",
    "how.s3.n": "03",
    "how.s3.t": "Demuestra lo aprendido",
    "how.s3.b": "Ganas puntos e insignias por cada habilidad, y obtienes un certificado que comprueba lo que ya sabes aplicar.",

    "demo.kicker": "Pruébalo",
    "demo.title": "Elige tu rol y mira el plan de tu mentor.",
    "demo.sub": "Esto es una muestra del producto. Cada rol recibe herramientas y lecciones distintas.",
    "demo.pick": "Selecciona tu rol",
    "demo.points": "Puntos",
    "demo.badges": "Insignias",
    "demo.reset": "Reiniciar",
    "demo.empty": "Selecciona un rol para ver tu plan personalizado.",
    "demo.planFor": "Plan para",
    "demo.module": "Módulo",
    "demo.tool": "Herramienta",
    "demo.seeLesson": "Ver lección de ejemplo",
    "demo.hideLesson": "Ocultar lección",
    "demo.mentor": "Tu mentor",
    "demo.tryPrompt": "Prompt para probar",
    "demo.copy": "Copiar",
    "demo.copied": "Copiado",
    "demo.tip": "Tip",
    "demo.complete": "Completar y ganar insignia",
    "demo.completed": "Completado",
    "demo.toast": "¡Insignia ganada! +50 puntos",
    "demo.locked": "Disponible en la versión completa",

    "teams.kicker": "Para equipos",
    "teams.title": "El jefe ve el avance. El equipo ve su progreso.",
    "teams.body": "Cada empresa define qué roles capacitar y con qué herramientas. Los líderes siguen la adopción real con estadísticas por persona y por área, no solo cursos terminados.",
    "teams.f1": "Adopción por área y por persona",
    "teams.f2": "Estándares de uso definidos por la empresa",
    "teams.f3": "Certificados verificables por habilidad",
    "teams.dash.title": "Vista de equipo",
    "teams.dash.sample": "Datos de ejemplo",
    "teams.dash.adoption": "Adopción del equipo",
    "teams.dash.active": "Activos esta semana",
    "teams.dash.certs": "Certificados emitidos",
    "teams.dash.byrole": "Avance por área",
    "teams.dash.member": "Persona",
    "teams.dash.role": "Área",
    "teams.dash.progress": "Avance",

    "who.kicker": "Para quién",
    "who.title": "Hecho para quien necesita resultados, no teoría.",
    "who.pyme.t": "PYMES y empresas",
    "who.pyme.b": "Capacita a cada equipo en las herramientas de su rol. Marketing, ventas, administración, finanzas y más, con estándares claros y avance medible.",
    "who.bank.t": "Banca y servicios financieros",
    "who.bank.b": "Adopción con gobernanza: roles específicos, uso responsable y trazable, y capacitación alineada a la normativa y a los procesos del negocio.",
    "who.person.t": "Profesionales independientes",
    "who.person.b": "Actualízate por tu cuenta. Aprende exactamente las herramientas que te dan ventaja en tu profesión, sin perder tiempo en lo que no usarás.",

    "cta.title": "Mira el plan de tu rol ahora.",
    "cta.body": "Selecciona tu área y descubre qué podrías estar haciendo con IA esta misma semana.",
    "cta.btn": "Probar mi plan",

    "footer.tagline": "Aprende a usar la IA que sirve para tu rol.",
    "footer.note": "Prototipo de validación — MVP 1.0.",
    "footer.rights": "Proyecto académico — Emprendimiento, USFQ.",

    "theme.toggle": "Cambiar tema",
    "lang.toggle": "English"
  },

  en: {
    "meta.title": `${BRAND} — Learn to use the AI that fits your role`,
    "meta.desc": "A role-specific AI mentor. Learn to use the right tools for your job, with real practice, badges and certificates.",

    "nav.how": "How it works",
    "nav.demo": "Try it",
    "nav.teams": "For teams",
    "nav.who": "Who it is for",
    "nav.cta": "Get started",

    "badge.validation": "Concept in validation",

    "hero.kicker": "Role-based AI mentor",
    "hero.title.a": "Learn to ",
    "hero.title.b": "use",
    "hero.title.c": " the AI that actually helps your job.",
    "hero.sub": `${BRAND} picks the exact tools for your role and teaches you to use them step by step, like a mentor who knows your field. Not another course catalog: real practice with real outcomes.`,
    "hero.cta1": "See my plan",
    "hero.cta2": "How it works",
    "hero.note": "Pick your role below and see your plan in seconds.",

    "problem.kicker": "The problem",
    "problem.title": "Everyone talks about AI. Almost no one knows how to use it at work.",
    "problem.body": "People have access to the tools, but not to the right way to apply them to their role. Generic courses only show what exists, repeat each other, and never teach how to use them well. The result: resistance to change, wasted time, and huge untapped potential.",
    "problem.p1.t": "Too many tools",
    "problem.p1.b": "New ones appear every week. No one knows which matter for their job.",
    "problem.p2.t": "Courses that do not teach",
    "problem.p2.b": "They list tools but never show how to apply them to your real task.",
    "problem.p3.t": "No guidance",
    "problem.p3.b": "Learning alone leads to friction, mistakes and drop-off.",

    "how.kicker": "How it works",
    "how.title": "Your AI mentor, in three steps.",
    "how.s1.n": "01",
    "how.s1.t": "Diagnose your role",
    "how.s1.b": "Tell us what you do. The mentor finds the tasks where AI gives you the biggest edge.",
    "how.s2.n": "02",
    "how.s2.t": "Learn by doing",
    "how.s2.b": "Short lessons with the exact tool for your task. The mentor explains, gives examples, and you practice right away.",
    "how.s3.n": "03",
    "how.s3.t": "Prove what you learned",
    "how.s3.b": "Earn points and badges for each skill, and get a certificate that proves what you can actually do.",

    "demo.kicker": "Try it",
    "demo.title": "Pick your role and see your mentor's plan.",
    "demo.sub": "This is a product preview. Each role gets different tools and lessons.",
    "demo.pick": "Select your role",
    "demo.points": "Points",
    "demo.badges": "Badges",
    "demo.reset": "Reset",
    "demo.empty": "Select a role to see your personalized plan.",
    "demo.planFor": "Plan for",
    "demo.module": "Module",
    "demo.tool": "Tool",
    "demo.seeLesson": "See sample lesson",
    "demo.hideLesson": "Hide lesson",
    "demo.mentor": "Your mentor",
    "demo.tryPrompt": "Prompt to try",
    "demo.copy": "Copy",
    "demo.copied": "Copied",
    "demo.tip": "Tip",
    "demo.complete": "Complete and earn badge",
    "demo.completed": "Completed",
    "demo.toast": "Badge earned! +50 points",
    "demo.locked": "Available in the full version",

    "teams.kicker": "For teams",
    "teams.title": "The manager sees adoption. The team sees progress.",
    "teams.body": "Each company defines which roles to train and with which tools. Leaders track real adoption with stats per person and per area, not just finished courses.",
    "teams.f1": "Adoption by area and by person",
    "teams.f2": "Usage standards defined by the company",
    "teams.f3": "Verifiable certificates per skill",
    "teams.dash.title": "Team view",
    "teams.dash.sample": "Sample data",
    "teams.dash.adoption": "Team adoption",
    "teams.dash.active": "Active this week",
    "teams.dash.certs": "Certificates issued",
    "teams.dash.byrole": "Progress by area",
    "teams.dash.member": "Person",
    "teams.dash.role": "Area",
    "teams.dash.progress": "Progress",

    "who.kicker": "Who it is for",
    "who.title": "Built for people who need results, not theory.",
    "who.pyme.t": "SMEs and companies",
    "who.pyme.b": "Train each team on the tools for their role. Marketing, sales, operations, finance and more, with clear standards and measurable progress.",
    "who.bank.t": "Banking and financial services",
    "who.bank.b": "Adoption with governance: specific roles, responsible and traceable use, and training aligned to regulation and business processes.",
    "who.person.t": "Independent professionals",
    "who.person.b": "Upskill on your own. Learn exactly the tools that give you an edge in your profession, without wasting time on what you will not use.",

    "cta.title": "See your role's plan now.",
    "cta.body": "Pick your area and discover what you could be doing with AI this week.",
    "cta.btn": "See my plan",

    "footer.tagline": "Learn to use the AI that fits your role.",
    "footer.note": "Validation prototype — MVP 1.0.",
    "footer.rights": "Academic project — Entrepreneurship, USFQ.",

    "theme.toggle": "Toggle theme",
    "lang.toggle": "Español"
  }
};

/* ---- Line icons (inline SVG, inherit currentColor) ---------------------- */
const ICONS = {
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l9 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15 8a4 4 0 0 1 0 8"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 0 0 1.4 0l5-5"/><path d="m3 11 4-4 4 4 2-2 4 4"/><path d="m13 9 3 3"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L16 1H8l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 3 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L8 21h8l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z"/>',
  calculator: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8" y2="11"/><line x1="12" y1="11" x2="12" y2="11"/><line x1="16" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="12" y1="15" x2="12" y2="15"/><line x1="16" y1="15" x2="16" y2="18"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2Z"/><path d="M20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2Z"/><path d="M17 17a4 4 0 0 1-4 3h-1"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M18 14a6 6 0 0 1 3 5"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/>'
};

/* ---- Roles → personalized plans ---------------------------------------- */
/* Each role: id, icon, label, mentor (intro line), modules[].
   Module: tool, title, outcome, and (module 1 only) a sample lesson.        */
const ROLES = [
  {
    id: "marketing", icon: "megaphone", group: "pyme",
    label: { es: "Marketing y Redes", en: "Marketing & Social" },
    mentor: {
      es: "Para tu rol, la IA gana tiempo en lo creativo y repetitivo. Empecemos por convertir la hoja en blanco en contenido listo.",
      en: "For your role, AI saves time on the creative and repetitive work. Let us start by turning the blank page into ready content."
    },
    modules: [
      {
        tool: "ChatGPT / Claude",
        title: { es: "Del brief a un mes de contenido", en: "From brief to a month of content" },
        outcome: { es: "Genera calendarios, copys y campañas en minutos, con tu tono de marca.", en: "Generate calendars, copy and campaigns in minutes, in your brand voice." },
        sample: {
          intro: {
            es: "El error común es pedir 'dame ideas'. Un buen prompt incluye tres cosas: a quién le hablas, qué quieres lograr y con qué tono. Así el modelo deja de dar respuestas genéricas y empieza a sonar como tu marca.",
            en: "The common mistake is asking 'give me ideas'. A good prompt has three things: who you speak to, what you want to achieve, and in what tone. That is how the model stops being generic and starts sounding like your brand."
          },
          prompt: {
            es: "Eres mi estratega de contenido. Marca: [nombre]. Audiencia: [describe]. Objetivo del mes: [meta]. Tono: [cercano/formal]. Dame un calendario de 8 publicaciones con título, gancho y formato (reel, carrusel, post).",
            en: "You are my content strategist. Brand: [name]. Audience: [describe]. Goal this month: [goal]. Tone: [casual/formal]. Give me a calendar of 8 posts with title, hook and format (reel, carousel, post)."
          },
          tip: { es: "Pega un post anterior tuyo y pide que 'imite ese estilo'. La IA copia tu voz mejor que cualquier instrucción.", en: "Paste a previous post of yours and ask it to 'match that style'. AI copies your voice better than any instruction." }
        }
      },
      { tool: "Canva IA / Gemini", title: { es: "Diseña piezas sin diseñador", en: "Design assets without a designer" }, outcome: { es: "Crea gráficas coherentes con tu marca a partir de una idea en texto.", en: "Create on-brand graphics from a single text idea." } },
      { tool: "Analítica con IA", title: { es: "Lee tus números y decide", en: "Read your numbers and decide" }, outcome: { es: "Convierte métricas confusas en recomendaciones claras de qué publicar más.", en: "Turn confusing metrics into clear recommendations on what to post more." } }
    ]
  },
  {
    id: "ventas", icon: "handshake", group: "pyme",
    label: { es: "Ventas", en: "Sales" },
    mentor: {
      es: "En ventas, la IA no reemplaza tu trato: te libera el tiempo administrativo para vender más. Arranquemos por el seguimiento.",
      en: "In sales, AI does not replace your relationships: it frees admin time so you sell more. Let us start with follow-ups."
    },
    modules: [
      {
        tool: "ChatGPT / Claude",
        title: { es: "Propuestas y seguimientos personalizados", en: "Personalized proposals and follow-ups" },
        outcome: { es: "Escribe correos que suenan a ti, adaptados a cada cliente, en segundos.", en: "Write emails that sound like you, tailored to each client, in seconds." },
        sample: {
          intro: {
            es: "El secreto no es que la IA escriba por ti, sino que escriba contigo. Dale el contexto del cliente y tu objetivo; tú das el toque final. Pasas de 20 minutos por correo a 2.",
            en: "The secret is not letting AI write for you, but writing with you. Give it the client context and your goal; you add the final touch. You go from 20 minutes per email to 2."
          },
          prompt: {
            es: "Eres mi asistente de ventas. Cliente: [nombre, sector]. Última conversación: [resume]. Objetivo: [agendar reunión/cerrar]. Escribe un correo de seguimiento breve, cálido y con una sola llamada a la acción.",
            en: "You are my sales assistant. Client: [name, sector]. Last conversation: [summary]. Goal: [book meeting/close]. Write a short, warm follow-up email with a single call to action."
          },
          tip: { es: "Pide siempre 'una sola llamada a la acción'. Los correos con varias peticiones convierten menos.", en: "Always ask for 'a single call to action'. Emails with multiple asks convert worse." }
        }
      },
      { tool: "CRM con IA", title: { es: "Prioriza a quién llamar hoy", en: "Prioritize who to call today" }, outcome: { es: "Resume reuniones y te dice qué leads tienen más probabilidad de cerrar.", en: "Summarize meetings and surface the leads most likely to close." } },
      { tool: "Roleplay de voz IA", title: { es: "Practica objeciones antes de la llamada", en: "Practice objections before the call" }, outcome: { es: "Ensaya con un cliente simulado y llega seguro a la reunión real.", en: "Rehearse with a simulated client and arrive confident to the real meeting." } }
    ]
  },
  {
    id: "ops", icon: "gear", group: "pyme",
    label: { es: "Administración y Operaciones", en: "Operations & Admin" },
    mentor: {
      es: "Tu mayor ganancia está en eliminar lo repetitivo. Veamos cómo automatizar reportes y conectar tus herramientas.",
      en: "Your biggest win is removing the repetitive work. Let us automate reports and connect your tools."
    },
    modules: [
      {
        tool: "Excel / Sheets con IA",
        title: { es: "Reportes y fórmulas sin saber fórmulas", en: "Reports and formulas without knowing formulas" },
        outcome: { es: "Describe lo que necesitas en español y obtén la fórmula o el resumen listo.", en: "Describe what you need in plain words and get the formula or summary ready." },
        sample: {
          intro: {
            es: "Ya no memorizas BUSCARV ni tablas dinámicas. Describes el resultado que quieres y la IA arma la fórmula. Tu trabajo cambia de 'pelear con Excel' a 'decidir con los datos'.",
            en: "You no longer memorize VLOOKUP or pivot tables. You describe the result you want and AI builds the formula. Your job shifts from 'fighting Excel' to 'deciding with the data'."
          },
          prompt: {
            es: "Tengo una tabla con columnas [Fecha, Cliente, Monto, Estado]. Dame la fórmula para sumar solo los montos con estado 'Pagado' del mes actual, y explícame cada parte en una línea.",
            en: "I have a table with columns [Date, Client, Amount, Status]. Give me the formula to sum only the amounts with status 'Paid' for the current month, and explain each part in one line."
          },
          tip: { es: "Pide siempre que 'explique la fórmula en una línea'. Así aprendes mientras resuelves.", en: "Always ask it to 'explain the formula in one line'. You learn while you solve." }
        }
      },
      { tool: "n8n / Zapier IA", title: { es: "Conecta tus apps y elimina tareas", en: "Connect your apps and remove tasks" }, outcome: { es: "Automatiza pasos manuales entre correo, hojas y mensajería sin programar.", en: "Automate manual steps across email, sheets and messaging without coding." } },
      { tool: "NotebookLM", title: { es: "Tus manuales, convertidos en asistente", en: "Your manuals, turned into an assistant" }, outcome: { es: "Sube políticas y procesos y pregúntales como a un experto interno.", en: "Upload policies and processes and ask them like an internal expert." } }
    ]
  },
  {
    id: "finanzas", icon: "calculator", group: "pyme",
    label: { es: "Contabilidad y Finanzas", en: "Accounting & Finance" },
    mentor: {
      es: "La IA te quita lo tedioso y te deja el criterio. Empecemos por clasificar y conciliar más rápido.",
      en: "AI removes the tedious part and leaves you the judgment. Let us speed up classifying and reconciling."
    },
    modules: [
      {
        tool: "Excel / Sheets con IA",
        title: { es: "Clasifica gastos y concilia más rápido", en: "Classify expenses and reconcile faster" },
        outcome: { es: "Ordena movimientos y detecta diferencias en minutos, no en horas.", en: "Sort transactions and spot differences in minutes, not hours." },
        sample: {
          intro: {
            es: "La conciliación manual es donde más tiempo se pierde. La IA agrupa, etiqueta y marca lo que no cuadra; tú revisas solo las excepciones. El control sigue siendo tuyo, el trabajo pesado no.",
            en: "Manual reconciliation is where most time is lost. AI groups, labels and flags what does not match; you only review the exceptions. The control stays yours, the heavy lifting does not."
          },
          prompt: {
            es: "Tengo una lista de gastos con [Descripción, Monto]. Clasifícalos en categorías contables estándar y marca los que parezcan duplicados o atípicos. Devuélvelo como tabla.",
            en: "I have an expense list with [Description, Amount]. Classify them into standard accounting categories and flag any that look duplicated or unusual. Return it as a table."
          },
          tip: { es: "Nunca pegues datos sensibles reales en herramientas públicas. Usa ejemplos o versiones anonimizadas.", en: "Never paste real sensitive data into public tools. Use examples or anonymized versions." }
        }
      },
      { tool: "ChatGPT / Claude", title: { es: "Explica informes en lenguaje claro", en: "Explain reports in plain language" }, outcome: { es: "Convierte estados financieros en resúmenes que cualquiera entiende.", en: "Turn financial statements into summaries anyone understands." } },
      { tool: "Document AI", title: { es: "Extrae datos de facturas solo", en: "Extract invoice data automatically" }, outcome: { es: "Pasa de digitar comprobantes a revisarlos ya cargados.", en: "Go from typing receipts to reviewing them already captured." } }
    ]
  },
  {
    id: "soporte", icon: "headset", group: "pyme",
    label: { es: "Atención al Cliente", en: "Customer Support" },
    mentor: {
      es: "La IA te ayuda a responder mejor y más rápido, sin perder el trato humano. Veamos cómo.",
      en: "AI helps you answer better and faster, without losing the human touch. Let us see how."
    },
    modules: [
      {
        tool: "Asistente con IA",
        title: { es: "Respuestas rápidas y consistentes", en: "Fast, consistent answers" },
        outcome: { es: "Resuelve consultas frecuentes con calidad y el tono de tu empresa.", en: "Resolve frequent questions with quality and your company's tone." },
        sample: {
          intro: {
            es: "El mejor uso no es responder por ti, sino darte un borrador en segundos que tú ajustas. El cliente recibe respuestas más rápidas y tú dejas de escribir lo mismo cien veces.",
            en: "The best use is not answering for you, but giving you a draft in seconds that you adjust. The client gets faster replies and you stop writing the same thing a hundred times."
          },
          prompt: {
            es: "Eres mi asistente de soporte. Cliente escribe: [mensaje]. Tono: amable y resolutivo. Redacta una respuesta clara, ofrece la solución y cierra preguntando si necesita algo más.",
            en: "You are my support assistant. Client writes: [message]. Tone: friendly and solution-oriented. Write a clear reply, offer the solution and close by asking if they need anything else."
          },
          tip: { es: "Guarda tus mejores respuestas como ejemplos. Mientras más le des, más se parece a tu mejor agente.", en: "Save your best replies as examples. The more you give it, the more it sounds like your best agent." }
        }
      },
      { tool: "IA de resumen", title: { es: "Resume tickets y detecta urgencias", en: "Summarize tickets and detect urgency" }, outcome: { es: "Identifica clientes molestos o casos críticos antes de que escalen.", en: "Spot upset clients or critical cases before they escalate." } },
      { tool: "Plantillas IA", title: { es: "Estandariza respuestas del equipo", en: "Standardize team replies" }, outcome: { es: "Crea una base de respuestas para que todos respondan igual de bien.", en: "Build a reply base so everyone answers equally well." } }
    ]
  },
  {
    id: "rrhh", icon: "people", group: "pyme",
    label: { es: "Recursos Humanos", en: "Human Resources" },
    mentor: {
      es: "En RR.HH. la IA acelera lo operativo para que te enfoques en las personas. Empecemos por selección.",
      en: "In HR, AI speeds up the operational work so you focus on people. Let us start with recruiting."
    },
    modules: [
      {
        tool: "ChatGPT / Claude",
        title: { es: "Filtra CVs y redacta vacantes", en: "Screen CVs and write job posts" },
        outcome: { es: "Resume candidatos y publica vacantes atractivas en minutos.", en: "Summarize candidates and post attractive openings in minutes." },
        sample: {
          intro: {
            es: "La IA no decide a quién contratar: te prepara el terreno. Resume 50 hojas de vida según tus criterios y te entrega una lista corta. La decisión, y el criterio, siguen siendo humanos.",
            en: "AI does not decide who to hire: it sets the ground. It summarizes 50 resumes against your criteria and hands you a shortlist. The decision, and the judgment, stay human."
          },
          prompt: {
            es: "Eres mi asistente de selección. Vacante: [puesto]. Requisitos clave: [lista]. Te paso un CV: [texto]. Resúmelo en 4 líneas e indica qué requisitos cumple y cuáles no.",
            en: "You are my recruiting assistant. Role: [position]. Key requirements: [list]. Here is a CV: [text]. Summarize it in 4 lines and indicate which requirements it meets and which it does not."
          },
          tip: { es: "Define tus criterios antes de pedir el resumen. Sin criterios claros, la IA inventa los suyos.", en: "Define your criteria before asking for the summary. Without clear criteria, AI invents its own." }
        }
      },
      { tool: "IA de entrevistas", title: { es: "Guiones y evaluación con criterio", en: "Interview guides and structured scoring" }, outcome: { es: "Genera preguntas por competencia y compara candidatos de forma justa.", en: "Generate competency questions and compare candidates fairly." } },
      { tool: "NotebookLM", title: { es: "Tu manual del empleado, interactivo", en: "Your employee handbook, interactive" }, outcome: { es: "Convierte políticas internas en un asistente que responde al equipo.", en: "Turn internal policies into an assistant that answers the team." } }
    ]
  },
  {
    id: "riesgo", icon: "chart", group: "bank",
    label: { es: "Analista de Riesgo / Crédito", en: "Risk / Credit Analyst" },
    mentor: {
      es: "En banca, la IA acelera el análisis sin reemplazar tu juicio ni la trazabilidad. Empecemos por los datos.",
      en: "In banking, AI speeds up analysis without replacing your judgment or traceability. Let us start with the data."
    },
    modules: [
      {
        tool: "Copilot / Claude + datos",
        title: { es: "Acelera el análisis de datos", en: "Speed up data analysis" },
        outcome: { es: "Explora carteras y prepara insumos de scoring más rápido, con control humano.", en: "Explore portfolios and prepare scoring inputs faster, with human control." },
        sample: {
          intro: {
            es: "En riesgo, la regla de oro es trazabilidad: la IA propone, tú validas y documentas. Úsala para llegar antes al análisis, nunca para aprobar sin revisión. La responsabilidad sigue siendo del analista.",
            en: "In risk, the golden rule is traceability: AI proposes, you validate and document. Use it to reach the analysis sooner, never to approve without review. Accountability stays with the analyst."
          },
          prompt: {
            es: "Eres mi copiloto de análisis. Tengo datos de cartera con [columnas]. Sugiere 5 indicadores de riesgo que debería revisar y explica por qué cada uno importa. No tomes decisiones; solo propón el análisis.",
            en: "You are my analysis copilot. I have portfolio data with [columns]. Suggest 5 risk indicators I should review and explain why each matters. Do not make decisions; only propose the analysis."
          },
          tip: { es: "Trabaja siempre con datos anonimizados o sintéticos. La confidencialidad del cliente no es negociable.", en: "Always work with anonymized or synthetic data. Client confidentiality is non-negotiable." }
        }
      },
      { tool: "Claude / ChatGPT", title: { es: "Resume expedientes y normativa", en: "Summarize files and regulation" }, outcome: { es: "Convierte documentos extensos en puntos clave verificables en minutos.", en: "Turn long documents into verifiable key points in minutes." } },
      { tool: "Document AI", title: { es: "Extrae y valida datos del cliente", en: "Extract and validate client data" }, outcome: { es: "Captura datos de documentos y marca inconsistencias para tu revisión.", en: "Capture data from documents and flag inconsistencies for your review." } }
    ]
  },
  {
    id: "asesor", icon: "briefcase", group: "bank",
    label: { es: "Asesor / Ejecutivo de Cuenta", en: "Account Advisor" },
    mentor: {
      es: "La IA te prepara para cada cliente y te deja la conversación a ti. Empecemos por la preparación.",
      en: "AI prepares you for each client and leaves the conversation to you. Let us start with preparation."
    },
    modules: [
      {
        tool: "Claude / ChatGPT",
        title: { es: "Prepara reuniones y explica productos", en: "Prepare meetings and explain products" },
        outcome: { es: "Llega a cada reunión con el contexto listo y explicaciones en lenguaje simple.", en: "Arrive at each meeting with context ready and plain-language explanations." },
        sample: {
          intro: {
            es: "Tu ventaja es la confianza del cliente. La IA te da, en minutos, un resumen del producto y posibles preguntas, para que tú dediques tu energía a la relación, no a la preparación.",
            en: "Your edge is client trust. AI gives you, in minutes, a product summary and likely questions, so you spend your energy on the relationship, not the prep."
          },
          prompt: {
            es: "Eres mi asistente. Voy a presentar [producto financiero] a un cliente que es [perfil]. Explícame el producto en lenguaje simple y dame 5 preguntas que probablemente hará y cómo responderlas.",
            en: "You are my assistant. I will present [financial product] to a client who is [profile]. Explain the product in plain language and give me 5 questions they will likely ask and how to answer them."
          },
          tip: { es: "Pide ejemplos con cifras redondas y comparaciones cotidianas. Eso hace que el cliente entienda al instante.", en: "Ask for examples with round numbers and everyday comparisons. That makes the client understand instantly." }
        }
      },
      { tool: "IA de resumen", title: { es: "Resume el historial antes de contactar", en: "Summarize history before each contact" }, outcome: { es: "Llega informado a cada llamada sin leer todo el expediente.", en: "Arrive informed to each call without reading the whole file." } },
      { tool: "Roleplay IA", title: { es: "Practica la venta consultiva", en: "Practice consultative selling" }, outcome: { es: "Ensaya el manejo de objeciones con un cliente simulado.", en: "Rehearse objection handling with a simulated client." } }
    ]
  }
];

/* Sample data for the team dashboard (clearly illustrative). */
const TEAM_SAMPLE = {
  adoption: 78, active: 23, certs: 14,
  members: [
    { name: "Ana M.", role: { es: "Marketing", en: "Marketing" }, progress: 92 },
    { name: "Luis R.", role: { es: "Ventas", en: "Sales" }, progress: 67 },
    { name: "Sofía C.", role: { es: "Finanzas", en: "Finance" }, progress: 81 },
    { name: "Diego P.", role: { es: "Operaciones", en: "Operations" }, progress: 45 },
    { name: "Vale T.", role: { es: "Soporte", en: "Support" }, progress: 73 }
  ]
};
