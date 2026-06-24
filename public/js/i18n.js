/* =========================================================================
   Nivela — i18n + demo data  (Solución 1.1)
   Brand name is centralized here. To rename the platform, change BRAND.
   Positioning: a role-based AI mentor that builds durable judgment (criterio)
   to think and work with AI — not a catalog of tools.
   ========================================================================= */

const BRAND = "Nivela";

/* ---- Static UI strings -------------------------------------------------- */
const I18N = {
  es: {
    "meta.title": `${BRAND} — Aprende a pensar y trabajar con IA`,
    "meta.desc": "Mentor de IA por rol que construye el criterio que no caduca: qué modelo elegir, cómo formular, iterar y verificar. Aplicado a tu trabajo real, con insignias y certificados.",

    "nav.how": "Cómo funciona",
    "nav.why": "Por qué Nivela",
    "nav.demo": "Pruébalo",
    "nav.teams": "Para equipos",
    "nav.who": "Para quién",
    "nav.cta": "Empezar",

    "badge.validation": "Concepto en validación",

    "hero.kicker": "Mentor de IA por rol",
    "hero.title.a": "Aprende a ",
    "hero.title.b": "usar",
    "hero.title.c": " la IA que de verdad sirve para tu trabajo.",
    "hero.sub": `${BRAND} es tu mentor por rol: construye el criterio que no caduca —qué modelo elegir, cómo formular, iterar y verificar— para llegar al resultado que tu trabajo necesita, de forma eficiente. Las herramientas cambian; tu forma de trabajar perdura.`,
    "hero.cta1": "Ver mi ruta",
    "hero.cta2": "Cómo funciona",
    "hero.note": "Elige tu rol abajo y mira tu ruta en segundos.",
    "hero.card.line": "Tu ruta empieza por el criterio, no por la herramienta.",

    "problem.kicker": "El problema",
    "problem.title": "Todos hablan de la IA. Casi nadie sabe usarla en su trabajo.",
    "problem.body": "Las personas tienen las herramientas, pero no la forma de aplicarlas con criterio a su trabajo. Lo que se enseña hoy caduca en meses, no está estandarizado y se aprende por exploración autoguiada, lo que lleva al abandono o al uso ineficiente. A eso se suma la barrera económica que frena el acceso a los modelos más capaces.",
    "problem.p1.t": "Las herramientas caducan",
    "problem.p1.b": "Lo que aprendes de prompts y apps puntuales se desactualiza en meses.",
    "problem.p2.t": "Sin criterio no hay resultados",
    "problem.p2.b": "El acceso no basta: sin saber formular, verificar e interpretar, la herramienta no rinde.",
    "problem.p3.t": "Aprender solo lleva al abandono",
    "problem.p3.b": "La autoexploración por prueba y error abruma y termina en abandono.",

    "how.kicker": "Cómo funciona",
    "how.title": "Tu mentor de IA en tres pasos.",
    "how.s1.n": "01",
    "how.s1.t": "Diagnostica tu área, rol y nivel",
    "how.s1.b": "Antes de enseñar, Nivela ubica tu rol y tu punto de partida, para no repetir lo básico y empezar donde aportas valor.",
    "how.s2.n": "02",
    "how.s2.t": "Aprende a pensar y aplica",
    "how.s2.b": "Primero los fundamentos de criterio, agnósticos a la herramienta. Luego milestones prácticos con las herramientas vigentes, sobre tu trabajo real.",
    "how.s3.n": "03",
    "how.s3.t": "Demuestra competencia",
    "how.s3.b": "Ganas insignias y certificados que evidencian lo que sabes aplicar, no rachas de motivación.",

    "diff.kicker": "Por qué Nivela",
    "diff.title": "Lo que aprendes no caduca con las herramientas.",
    "diff.c1.t": "Criterio que no caduca",
    "diff.c1.b": "El núcleo son fundamentos transferibles: elegir el modelo, formular, iterar, verificar e interpretar. Las herramientas son el vehículo, no el contenido.",
    "diff.c2.t": "Contenido vivo",
    "diff.c2.b": "Las herramientas y prácticas se actualizan con el avance de la industria, para que nunca aprendas algo ya obsoleto.",
    "diff.c3.t": "Kit a tu presupuesto",
    "diff.c3.b": "Nivela propone un kit de herramientas accesibles para tu día a día, dentro de un presupuesto alcanzable.",
    "diff.c4.t": "Todo en un lugar",
    "diff.c4.b": "Aprendes y practicas sin saltar a pestañas externas: la búsqueda con IA está integrada en un solo lugar.",

    "demo.kicker": "Pruébalo",
    "demo.title": "Elige tu rol y mira la ruta de tu mentor.",
    "demo.sub": "Cada ruta empieza por el criterio (lo que no caduca) y avanza a la práctica con herramientas vigentes.",
    "demo.pick": "Selecciona tu rol",
    "demo.points": "Puntos",
    "demo.badges": "Insignias",
    "demo.reset": "Reiniciar",
    "demo.empty": "Selecciona un rol para ver tu ruta personalizada.",
    "demo.planFor": "Ruta para",
    "demo.kindCriterio": "Criterio",
    "demo.kindAplicacion": "Aplicación",
    "demo.agnostic": "Agnóstico a la herramienta",
    "demo.seeLesson": "Ver lección de ejemplo",
    "demo.hideLesson": "Ocultar lección",
    "demo.mentor": "Tu mentor",
    "demo.tryPrompt": "Ejemplo para practicar",
    "demo.copy": "Copiar",
    "demo.copied": "Copiado",
    "demo.tip": "Verifica",
    "demo.complete": "Completar y ganar insignia",
    "demo.completed": "Completado",
    "demo.toast": "¡Insignia ganada! +50 puntos",

    "teams.kicker": "Para equipos",
    "teams.title": "El líder ve la adopción. Cada persona, su progreso.",
    "teams.body": "Las organizaciones capacitan por rol y estandarizan el uso de IA. Los líderes siguen la adopción real y las áreas a mejorar de su equipo, respetando la confidencialidad de cada persona.",
    "teams.f1": "Adopción y estándares de uso por rol",
    "teams.f2": "Fortalezas y áreas a mejorar del equipo",
    "teams.f3": "Certificados de competencia aplicada, verificables",
    "teams.dash.title": "Vista de equipo",
    "teams.dash.sample": "Datos de ejemplo",
    "teams.dash.adoption": "Adopción del equipo",
    "teams.dash.active": "Activos esta semana",
    "teams.dash.certs": "Certificados emitidos",
    "teams.dash.member": "Persona",
    "teams.dash.role": "Área",
    "teams.dash.progress": "Avance",
    "teams.dash.strong": "Fortalezas",
    "teams.dash.improve": "A mejorar",

    "who.kicker": "Para quién",
    "who.title": "Para quien necesita resultados, no teoría suelta.",
    "who.pyme.t": "Personas (B2C)",
    "who.pyme.b": "Sube tu nivel por tu cuenta. Aprende el criterio y las herramientas que de verdad usarás en tu rol, sin perder tiempo en lo básico.",
    "who.bank.t": "Organizaciones (B2B)",
    "who.bank.b": "Capacita a tu equipo y estandariza el uso de IA por rol. Observa la adopción y las áreas a mejorar, respetando la confidencialidad de cada persona.",
    "who.person.t": "Cualquier rol y sector",
    "who.person.b": "La personalización es por rol y nivel, no por industria. Validamos en educación y el método aplica a cualquier área.",

    "cta.title": "Mira la ruta de tu rol ahora.",
    "cta.body": "Elige tu área y descubre qué criterio y qué herramientas podrías estar dominando esta semana.",
    "cta.btn": "Ver mi ruta",

    "footer.tagline": "Aprende a pensar y trabajar con IA.",
    "footer.note": "Prototipo de validación — Solución 1.1.",
    "footer.rights": "Proyecto académico — Emprendimiento, USFQ.",

    "theme.toggle": "Cambiar tema",
    "lang.toggle": "English"
  },

  en: {
    "meta.title": `${BRAND} — Learn to think and work with AI`,
    "meta.desc": "A role-based AI mentor that builds durable judgment: which model to choose, how to prompt, iterate and verify. Applied to your real work, with badges and certificates.",

    "nav.how": "How it works",
    "nav.why": "Why Nivela",
    "nav.demo": "Try it",
    "nav.teams": "For teams",
    "nav.who": "Who it is for",
    "nav.cta": "Get started",

    "badge.validation": "Concept in validation",

    "hero.kicker": "Role-based AI mentor",
    "hero.title.a": "Learn to ",
    "hero.title.b": "use",
    "hero.title.c": " the AI that actually helps your work.",
    "hero.sub": `${BRAND} is your role-based mentor: it builds the judgment that does not expire —which model to choose, how to prompt, iterate and verify— to reach the result your work needs, efficiently. Tools change; your way of working lasts.`,
    "hero.cta1": "See my path",
    "hero.cta2": "How it works",
    "hero.note": "Pick your role below and see your path in seconds.",
    "hero.card.line": "Your path starts with judgment, not the tool.",

    "problem.kicker": "The problem",
    "problem.title": "Everyone talks about AI. Almost no one knows how to use it at work.",
    "problem.body": "People have the tools, but not a way to apply them with judgment to their work. What is taught today expires in months, is not standardized, and is learned through self-guided exploration that leads to drop-off or inefficient use. On top of that, cost is a barrier to the most capable models.",
    "problem.p1.t": "Tools expire",
    "problem.p1.b": "What you learn from specific prompts and apps goes out of date in months.",
    "problem.p2.t": "No judgment, no results",
    "problem.p2.b": "Access is not enough: without knowing how to prompt, verify and interpret, the tool underdelivers.",
    "problem.p3.t": "Learning alone leads to drop-off",
    "problem.p3.b": "Trial-and-error self-exploration overwhelms and ends in abandonment.",

    "how.kicker": "How it works",
    "how.title": "Your AI mentor in three steps.",
    "how.s1.n": "01",
    "how.s1.t": "Diagnose your area, role and level",
    "how.s1.b": "Before teaching, Nivela locates your role and starting point, so it skips the basics and starts where you add value.",
    "how.s2.n": "02",
    "how.s2.t": "Learn to think and apply",
    "how.s2.b": "First the fundamentals of judgment, tool-agnostic. Then practical milestones with current tools, on your real work.",
    "how.s3.n": "03",
    "how.s3.t": "Prove competence",
    "how.s3.b": "Earn badges and certificates that show what you can apply, not motivation streaks.",

    "diff.kicker": "Why Nivela",
    "diff.title": "What you learn does not expire with the tools.",
    "diff.c1.t": "Judgment that lasts",
    "diff.c1.b": "The core is transferable fundamentals: choosing the model, prompting, iterating, verifying and interpreting. Tools are the vehicle, not the content.",
    "diff.c2.t": "Living content",
    "diff.c2.b": "Tools and practices update as the industry moves, so you never learn something already obsolete.",
    "diff.c3.t": "A kit for your budget",
    "diff.c3.b": "Nivela proposes a kit of accessible tools for your day to day, within a reachable budget.",
    "diff.c4.t": "All in one place",
    "diff.c4.b": "Learn and practice without jumping to external tabs: AI search is integrated in one place.",

    "demo.kicker": "Try it",
    "demo.title": "Pick your role and see your mentor's path.",
    "demo.sub": "Each path starts with judgment (what does not expire) and moves to practice with current tools.",
    "demo.pick": "Select your role",
    "demo.points": "Points",
    "demo.badges": "Badges",
    "demo.reset": "Reset",
    "demo.empty": "Select a role to see your personalized path.",
    "demo.planFor": "Path for",
    "demo.kindCriterio": "Judgment",
    "demo.kindAplicacion": "Applied",
    "demo.agnostic": "Tool-agnostic",
    "demo.seeLesson": "See sample lesson",
    "demo.hideLesson": "Hide lesson",
    "demo.mentor": "Your mentor",
    "demo.tryPrompt": "Example to practice",
    "demo.copy": "Copy",
    "demo.copied": "Copied",
    "demo.tip": "Verify",
    "demo.complete": "Complete and earn badge",
    "demo.completed": "Completed",
    "demo.toast": "Badge earned! +50 points",

    "teams.kicker": "For teams",
    "teams.title": "Leaders see adoption. Each person sees their progress.",
    "teams.body": "Organizations train by role and standardize AI use. Leaders track real adoption and the team's areas to improve, respecting each person's confidentiality.",
    "teams.f1": "Adoption and usage standards by role",
    "teams.f2": "Team strengths and areas to improve",
    "teams.f3": "Verifiable certificates of applied competence",
    "teams.dash.title": "Team view",
    "teams.dash.sample": "Sample data",
    "teams.dash.adoption": "Team adoption",
    "teams.dash.active": "Active this week",
    "teams.dash.certs": "Certificates issued",
    "teams.dash.member": "Person",
    "teams.dash.role": "Area",
    "teams.dash.progress": "Progress",
    "teams.dash.strong": "Strengths",
    "teams.dash.improve": "To improve",

    "who.kicker": "Who it is for",
    "who.title": "For people who need results, not loose theory.",
    "who.pyme.t": "Individuals (B2C)",
    "who.pyme.b": "Level up on your own. Learn the judgment and the tools you will actually use in your role, without wasting time on the basics.",
    "who.bank.t": "Organizations (B2B)",
    "who.bank.b": "Train your team and standardize AI use by role. See adoption and areas to improve, respecting each person's confidentiality.",
    "who.person.t": "Any role and sector",
    "who.person.b": "Personalization is by role and level, not by industry. We validated in education and the method applies to any area.",

    "cta.title": "See your role's path now.",
    "cta.body": "Pick your area and discover what judgment and which tools you could be mastering this week.",
    "cta.btn": "See my path",

    "footer.tagline": "Learn to think and work with AI.",
    "footer.note": "Validation prototype — Solution 1.1.",
    "footer.rights": "Academic project — Entrepreneurship, USFQ.",

    "theme.toggle": "Toggle theme",
    "lang.toggle": "Español"
  }
};

/* ---- Line icons (inline SVG, inherit currentColor) ---------------------- */
const ICONS = {
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l9 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15 8a4 4 0 0 1 0 8"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 0 0 1.4 0l5-5"/><path d="m3 11 4-4 4 4 2-2 4 4"/><path d="m13 9 3 3"/>',
  book: '<path d="M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 0-2 2z"/><path d="M21 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 1 2 2z"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M7.5 15h9"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',
  calculator: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8" y2="11"/><line x1="12" y1="11" x2="12" y2="11"/><line x1="16" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="12" y1="15" x2="12" y2="15"/><line x1="16" y1="15" x2="16" y2="18"/>'
};

/* ---- Roles → personalized paths ---------------------------------------- */
/* Each role: id, icon, area (short tag), label, mentor (intro line), modules[].
   Module kind: "criterio" (tool-agnostic fundamentals) or "aplicacion" (with a tool).
   The first (criterio) module of each role carries a sample lesson.          */
const ROLES = [
  {
    id: "docente", icon: "book",
    area: { es: "Educación", en: "Education" },
    label: { es: "Docente", en: "Teacher" },
    mentor: {
      es: "Empecemos por lo que no cambia: cómo pedir, iterar y verificar. Después lo aplicamos a tus clases con las herramientas de hoy.",
      en: "Let us start with what does not change: how to ask, iterate and verify. Then we apply it to your classes with today's tools."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Pensar antes de pedir: formular, iterar y verificar", en: "Think before asking: prompt, iterate and verify" },
        outcome: { es: "El criterio base que sirve con cualquier herramienta, hoy y dentro de un año.", en: "The core judgment that works with any tool, today and a year from now." },
        sample: {
          intro: {
            es: "Un buen resultado no nace de un prompt mágico, sino de un método: das contexto y objetivo, revisas lo que devuelve, lo corriges y vuelves a iterar. Y nunca entregas sin verificar: la IA puede sonar segura y estar equivocada. Esto vale con ChatGPT, Claude o el que venga después.",
            en: "A good result does not come from a magic prompt, but from a method: you give context and goal, review what comes back, correct it and iterate again. And you never ship without verifying: AI can sound confident and be wrong. This holds with ChatGPT, Claude or whatever comes next."
          },
          prompt: {
            es: "Eres mi asistente docente. Tema de clase: [tema]. Nivel del grupo: [describe]. Objetivo de aprendizaje: [meta]. Propón una explicación y una actividad, y señala qué partes debo verificar antes de usarla con mis estudiantes.",
            en: "You are my teaching assistant. Class topic: [topic]. Group level: [describe]. Learning goal: [goal]. Propose an explanation and an activity, and point out which parts I should verify before using it with my students."
          },
          tip: { es: "Pídele siempre que marque lo que podría estar equivocado. Verificar es parte del trabajo, no un paso opcional.", en: "Always ask it to flag what could be wrong. Verifying is part of the work, not an optional step." }
        }
      },
      { kind: "aplicacion", tool: "Claude / ChatGPT", title: { es: "Diseña clases y material adaptado a tu grupo", en: "Design classes and material for your group" }, outcome: { es: "De la planificación al material listo, ajustado al nivel de tus estudiantes.", en: "From planning to ready material, tuned to your students' level." } },
      { kind: "aplicacion", tool: "NotebookLM", title: { es: "Convierte tus textos en guías y preguntas", en: "Turn your texts into guides and questions" }, outcome: { es: "Sube tus lecturas y genera resúmenes y preguntas de estudio confiables.", en: "Upload your readings and generate reliable summaries and study questions." } }
    ]
  },
  {
    id: "investigador", icon: "flask",
    area: { es: "Investigación", en: "Research" },
    label: { es: "Investigador/a", en: "Researcher" },
    mentor: {
      es: "En investigación la IA acelera, pero el criterio es tuyo. Empecemos por verificar fuentes y evitar la falsa sensación de competencia.",
      en: "In research, AI speeds things up, but the judgment is yours. Let us start with verifying sources and avoiding a false sense of competence."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Criterio para investigar: verificar y no caer en la 'ilusión de competencia'", en: "Research judgment: verify and avoid the 'illusion of competence'" },
        outcome: { es: "Usar la IA como apoyo al análisis sin delegar el juicio ni la rigurosidad.", en: "Use AI to support analysis without delegating judgment or rigor." },
        sample: {
          intro: {
            es: "La IA puede presentar fuentes dudosas como hechos: es el efecto 'teléfono dañado'. El criterio es tratar cada salida como un borrador a contrastar contra fuentes reales, no como una verdad. La IA organiza y redacta; el análisis crítico sigue siendo del equipo investigador.",
            en: "AI can present dubious sources as facts: the 'broken telephone' effect. The judgment is to treat each output as a draft to check against real sources, not as truth. AI organizes and drafts; the critical analysis stays with the research team."
          },
          prompt: {
            es: "Ayúdame a organizar la literatura sobre [tema]. Resume los enfoques principales y, para cada afirmación, indica qué tan establecida está y qué debería verificar yo en la fuente original. No inventes referencias.",
            en: "Help me organize the literature on [topic]. Summarize the main approaches and, for each claim, indicate how established it is and what I should verify in the original source. Do not invent references."
          },
          tip: { es: "Nunca cites lo que no abriste. Si una referencia no existe o no la verificaste, no va.", en: "Never cite what you did not open. If a reference does not exist or you did not verify it, it does not go in." }
        }
      },
      { kind: "aplicacion", tool: "Claude / ChatGPT", title: { es: "Búsqueda bibliográfica y organización de ideas", en: "Literature search and idea organization" }, outcome: { es: "Mapea el estado del arte y estructura tus borradores más rápido.", en: "Map the state of the art and structure your drafts faster." } },
      { kind: "aplicacion", tool: "Herramientas de análisis", title: { es: "Apoyo en análisis de datos", en: "Support in data analysis" }, outcome: { es: "Acelera la exploración de datos manteniendo el criterio propio sobre los resultados.", en: "Speed up data exploration while keeping your own judgment over the results." } }
    ]
  },
  {
    id: "gestion", icon: "briefcase",
    area: { es: "Gestión", en: "Management" },
    label: { es: "Gestión académica", en: "Academic management" },
    mentor: {
      es: "Tu ganancia está en decidir bien y quitar lo repetitivo. Empecemos por elegir la herramienta correcta para cada tarea.",
      en: "Your win is deciding well and removing the repetitive work. Let us start by choosing the right tool for each task."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Elegir la herramienta correcta para cada tarea", en: "Choose the right tool for each task" },
        outcome: { es: "Saber cuándo usar IA, cuál y para qué, antes de automatizar nada.", en: "Know when to use AI, which one and for what, before automating anything." },
        sample: {
          intro: {
            es: "No hay una IA universal. La clave es emparejar la tarea con la herramienta: redactar y resumir es distinto de calcular o conectar sistemas. El criterio es definir primero el resultado que quieres y recién entonces elegir la herramienta, no al revés.",
            en: "There is no universal AI. The key is matching the task to the tool: writing and summarizing is different from calculating or connecting systems. The judgment is to first define the result you want and only then choose the tool, not the other way around."
          },
          prompt: {
            es: "Tengo esta tarea recurrente: [descríbela]. Pregúntame lo que necesites y recomiéndame qué tipo de herramienta de IA encaja mejor, por qué, y qué debería cuidar al usarla.",
            en: "I have this recurring task: [describe it]. Ask me what you need and recommend which type of AI tool fits best, why, and what I should be careful about when using it."
          },
          tip: { es: "Si no puedes explicar qué resultado esperas, ninguna herramienta te lo dará. Define el resultado primero.", en: "If you cannot explain what result you expect, no tool will give it to you. Define the result first." }
        }
      },
      { kind: "aplicacion", tool: "Sheets / Excel con IA", title: { es: "Reportes y seguimiento sin pelear con fórmulas", en: "Reports and tracking without fighting formulas" }, outcome: { es: "Describe lo que necesitas y obtén la fórmula o el resumen, con explicación.", en: "Describe what you need and get the formula or summary, with an explanation." } },
      { kind: "aplicacion", tool: "NotebookLM", title: { es: "Tus reglamentos y procesos, como asistente", en: "Your policies and processes, as an assistant" }, outcome: { es: "Convierte normativa y procesos en algo que responde al instante.", en: "Turn policies and processes into something that answers instantly." } }
    ]
  },
  {
    id: "marketing", icon: "megaphone",
    area: { es: "Marketing", en: "Marketing" },
    label: { es: "Marketing", en: "Marketing" },
    mentor: {
      es: "La IA gana tiempo en lo creativo, pero el resultado depende de cómo le hablas. Empecemos por el criterio para que suene a tu marca.",
      en: "AI saves time on the creative work, but the result depends on how you talk to it. Let us start with the judgment to make it sound like your brand."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Del 'dame ideas' a resultados con tu voz", en: "From 'give me ideas' to results in your voice" },
        outcome: { es: "Saber dar contexto, ejemplos y criterios para que deje de ser genérico.", en: "Know how to give context, examples and criteria so it stops being generic." },
        sample: {
          intro: {
            es: "El error común es pedir 'ideas' en abstracto. Un buen encargo lleva tres cosas: a quién hablas, qué quieres lograr y con qué tono. Si además pegas un ejemplo tuyo y revisas lo que devuelve, deja de sonar a robot. Esto vale con cualquier modelo: el criterio es tuyo, la herramienta cambia.",
            en: "The common mistake is asking for 'ideas' in the abstract. A good brief carries three things: who you speak to, what you want to achieve and in what tone. If you also paste an example of yours and review what it returns, it stops sounding robotic. This holds with any model: the judgment is yours, the tool changes."
          },
          prompt: {
            es: "Eres mi estratega de contenido. Marca: [nombre]. Audiencia: [describe]. Objetivo: [meta]. Tono: [cercano/formal]. Aquí va un texto mío de referencia: [pega]. Propón 5 publicaciones que suenen a esa voz.",
            en: "You are my content strategist. Brand: [name]. Audience: [describe]. Goal: [goal]. Tone: [casual/formal]. Here is a reference text of mine: [paste]. Propose 5 posts that sound like that voice."
          },
          tip: { es: "Revisa siempre antes de publicar: un dato inventado o un tono que no es el tuyo cuesta más que el tiempo que ahorraste.", en: "Always review before posting: a made-up fact or an off-brand tone costs more than the time you saved." }
        }
      },
      { kind: "aplicacion", tool: "Claude / ChatGPT", title: { es: "Del brief a un mes de contenido", en: "From brief to a month of content" }, outcome: { es: "Genera calendarios, copys y campañas en minutos, con tu tono.", en: "Generate calendars, copy and campaigns in minutes, in your voice." } },
      { kind: "aplicacion", tool: "Canva IA / Gemini", title: { es: "Piezas visuales coherentes con tu marca", en: "Visual assets consistent with your brand" }, outcome: { es: "Crea gráficas a partir de una idea en texto, sin diseñador.", en: "Create graphics from a text idea, without a designer." } }
    ]
  },
  {
    id: "ventas", icon: "handshake",
    area: { es: "Ventas", en: "Sales" },
    label: { es: "Ventas / Comercial", en: "Sales" },
    mentor: {
      es: "La IA te libera el tiempo administrativo, pero el trato es tuyo. Empecemos por cuándo confiar y cuándo verificar lo que propone.",
      en: "AI frees your admin time, but the relationship is yours. Let us start with when to trust and when to verify what it proposes."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Cuándo confiar y cuándo verificar lo que la IA propone", en: "When to trust and when to verify what AI proposes" },
        outcome: { es: "Usar la IA para preparar, sin enviar nada sin tu revisión.", en: "Use AI to prepare, without sending anything without your review." },
        sample: {
          intro: {
            es: "La IA escribe contigo, no por ti. Sirve para un primer borrador en segundos, pero los datos del cliente, los precios y los compromisos los confirmas tú. El criterio es simple: la IA propone, tú decides y verificas antes de enviar.",
            en: "AI writes with you, not for you. It is useful for a first draft in seconds, but client data, prices and commitments are confirmed by you. The judgment is simple: AI proposes, you decide and verify before sending."
          },
          prompt: {
            es: "Eres mi asistente de ventas. Cliente: [nombre, sector]. Última conversación: [resume]. Objetivo: [agendar/cerrar]. Escribe un seguimiento breve y cálido con una sola llamada a la acción, y marca qué datos debo confirmar antes de enviarlo.",
            en: "You are my sales assistant. Client: [name, sector]. Last conversation: [summary]. Goal: [book/close]. Write a short, warm follow-up with a single call to action, and flag which data I should confirm before sending."
          },
          tip: { es: "Nunca dejes que la IA invente un precio o un compromiso. Eso siempre lo confirmas tú.", en: "Never let AI invent a price or a commitment. You always confirm that yourself." }
        }
      },
      { kind: "aplicacion", tool: "Claude / ChatGPT", title: { es: "Propuestas y seguimientos personalizados", en: "Personalized proposals and follow-ups" }, outcome: { es: "Correos que suenan a ti, adaptados a cada cliente, en segundos.", en: "Emails that sound like you, tailored to each client, in seconds." } },
      { kind: "aplicacion", tool: "IA de resumen / CRM", title: { es: "Resume reuniones y prioriza a quién contactar", en: "Summarize meetings and prioritize who to contact" }, outcome: { es: "Convierte notas largas en próximos pasos y leads priorizados.", en: "Turn long notes into next steps and prioritized leads." } }
    ]
  },
  {
    id: "datos", icon: "chart",
    area: { es: "Datos", en: "Data" },
    label: { es: "Analista de datos", en: "Data analyst" },
    mentor: {
      es: "La IA acelera el análisis, pero tu criterio decide. Empecemos por validar resultados antes de confiar en ellos.",
      en: "AI speeds up analysis, but your judgment decides. Let us start with validating results before trusting them."
    },
    modules: [
      {
        kind: "criterio",
        title: { es: "Validar resultados: la IA acelera, tu criterio decide", en: "Validate results: AI speeds up, your judgment decides" },
        outcome: { es: "Saber revisar y cuestionar lo que la IA produce antes de usarlo.", en: "Know how to review and question what AI produces before using it." },
        sample: {
          intro: {
            es: "La IA puede generar un análisis convincente y estar mal: una columna mal interpretada, un supuesto oculto. El criterio es revisar la lógica, no solo el resultado: ¿de dónde sale ese número?, ¿el supuesto tiene sentido? La IA propone el camino; tú lo auditas.",
            en: "AI can generate a convincing analysis and be wrong: a misread column, a hidden assumption. The judgment is to review the logic, not just the result: where does that number come from, does the assumption make sense? AI proposes the path; you audit it."
          },
          prompt: {
            es: "Tengo datos con [columnas]. Sugiere qué indicadores debería revisar y explica el razonamiento de cada uno. Indica qué supuestos estás haciendo para que yo los valide. No saques conclusiones por mí.",
            en: "I have data with [columns]. Suggest which indicators I should review and explain the reasoning for each. State the assumptions you are making so I can validate them. Do not draw conclusions for me."
          },
          tip: { es: "Pídele siempre que explicite sus supuestos. Un análisis sin supuestos visibles no es auditable.", en: "Always ask it to make its assumptions explicit. An analysis with hidden assumptions is not auditable." }
        }
      },
      { kind: "aplicacion", tool: "Copilot / Claude + datos", title: { es: "Explora y limpia datos más rápido", en: "Explore and clean data faster" }, outcome: { es: "Llega antes al análisis con apoyo en la preparación de los datos.", en: "Reach the analysis sooner with support in preparing the data." } },
      { kind: "aplicacion", tool: "ChatGPT / Claude", title: { es: "Explica hallazgos en lenguaje claro", en: "Explain findings in plain language" }, outcome: { es: "Convierte resultados técnicos en algo que cualquier área entiende.", en: "Turn technical results into something any area understands." } }
    ]
  }
];

/* Sample data for the team dashboard (clearly illustrative). */
const TEAM_SAMPLE = {
  adoption: 78, active: 23, certs: 14,
  members: [
    { name: "Ana M.", role: { es: "Docencia", en: "Teaching" }, progress: 92 },
    { name: "Luis R.", role: { es: "Investigación", en: "Research" }, progress: 67 },
    { name: "Sofía C.", role: { es: "Gestión", en: "Management" }, progress: 81 },
    { name: "Diego P.", role: { es: "Datos", en: "Data" }, progress: 45 },
    { name: "Vale T.", role: { es: "Marketing", en: "Marketing" }, progress: 73 }
  ],
  strong: { es: ["Redacción con criterio", "Búsqueda y síntesis"], en: ["Judgment in writing", "Search and synthesis"] },
  improve: { es: ["Verificación de fuentes", "Análisis de datos"], en: ["Source verification", "Data analysis"] }
};
