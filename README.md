# Nivela — MVP 1.0

> Plataforma de capacitación en IA **personalizada por rol**: un mentor de IA que enseña a cada persona a **usar** las herramientas exactas para su trabajo, con práctica real, insignias y certificados. B2B (PYMES y banca) y B2C (profesionales).

Sitio web estático (sin build) que sirve como **prototipo de validación (PMV 1.0)** para las entrevistas del proyecto de Emprendimiento (USFQ). Modo claro/oscuro, bilingüe ES/EN, y un **demo interactivo** "rol → plan de tu mentor".

> El nombre de la plataforma es **Nivela** (centralizado en la constante `BRAND` de `public/js/i18n.js`).

---

## Estructura

```
emprendimiento/
├── public/                 # Lo que Firebase Hosting publica
│   ├── index.html
│   ├── css/styles.css
│   ├── js/
│   │   ├── i18n.js         # Textos ES/EN + datos del demo (roles → módulos)
│   │   └── app.js          # Tema, idioma, demo, gamificación, dashboard
│   └── assets/
├── docs/
│   ├── PROJECT_CONTEXT.md  # Contexto completo del proyecto (leer primero)
│   └── MVP_1.0_SPEC.md     # Alcance y decisiones de este MVP
├── firebase.json           # Config de Hosting (public/)
├── .firebaserc             # Alias del proyecto Firebase (editar)
├── .gitignore              # Excluye private/ y secretos
└── private/                # NO se sube (PAT, notas). Ignorado por git.
```

## Probar localmente

No requiere instalación. Cualquiera de estas opciones:

```bash
# Opción A — Python
cd public && python -m http.server 5173
# abrir http://localhost:5173

# Opción B — Firebase CLI (emulador de hosting)
firebase serve --only hosting
```

## Desplegar en Firebase

```bash
npm install -g firebase-tools     # una sola vez
firebase login
firebase use --add                # selecciona tu proyecto (actualiza .firebaserc)
firebase deploy --only hosting
```

## Personalización rápida

- **Nombre de marca:** cambiar la constante `BRAND` en `public/js/i18n.js` (y el texto del logo en `index.html`).
- **Roles / contenido del demo:** editar el arreglo `ROLES` en `public/js/i18n.js`.
- **Idiomas:** los textos viven en `I18N.es` / `I18N.en`. Añadir `ru` es replicar el bloque.
- **Colores:** variables CSS en `:root` y `[data-theme="dark"]` en `public/css/styles.css`.

## Seguridad

El folder `private/` (con el PAT de GitHub) está en `.gitignore` y **no debe subirse**. Si alguna vez se commiteó un token, hay que **revocarlo y generar uno nuevo**.
