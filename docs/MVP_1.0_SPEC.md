# MVP_1.0_SPEC — Alcance y decisiones

> Qué hace este PMV, qué es real y qué es muestra, y qué se dejó fuera a propósito.

## Objetivo del MVP
Pieza para **enseñar la solución en las entrevistas** y provocar feedback. No es el producto final:
es un prototipo navegable que comunica la propuesta en menos de un minuto y deja que el entrevistado
la critique. La interactividad existe para que el entrevistado "sienta" el producto, no para funcionar de verdad.

## Secciones (orden)
1. **Hero** — propuesta de valor + tarjeta-mentor ilustrativa. Tesis: "aprende a *usar* la IA de tu rol".
2. **Problema** — copy cualitativo y honesto (sin estadísticas inventadas).
3. **Cómo funciona** — 3 pasos reales: diagnostica tu rol → aprende haciendo → demuestra (insignias/certificado).
4. **Demo interactivo** — pieza central (ver abajo).
5. **Para equipos** — panel del líder con métricas de adopción (datos de ejemplo, etiquetado como tal).
6. **Para quién** — PYMES, banca, profesionales independientes.
7. **CTA** + **Footer** (el footer aclara que es PMV 1.0; el nombre de la plataforma es Nivela).

## Demo interactivo "rol → plan de tu mentor"
- 8 roles: 6 de PYMES (marketing, ventas, operaciones, finanzas, soporte, RR.HH.) + 2 de banca (riesgo/crédito, asesor).
- Al elegir un rol: línea del mentor + 3 módulos. Cada módulo = **herramienta exacta** + resultado concreto.
- El módulo 1 de cada rol trae una **lección de ejemplo**: explicación del mentor + **prompt para probar** (copiable) + tip.
  Esto materializa el "enseñar a usar", no solo listar.
- **Gamificación ligera:** completar un módulo da **+50 puntos** y una **insignia**; contadores arriba; botón Reiniciar.
  El progreso se guarda en `localStorage` para que persista durante la demo.

## Qué es real vs. muestra
- **Real/funcional:** tema claro/oscuro, idioma ES/EN, navegación, demo de roles, lecciones de ejemplo,
  puntos/insignias, copiar prompt, animaciones de revelado.
- **Muestra (no conectado a backend):** el panel de equipo usa `TEAM_SAMPLE` (datos de ejemplo, etiquetados).
  Los "certificados" se mencionan como concepto; no se emiten archivos.

## i18n y tema
- Diccionarios en `I18N.es` / `I18N.en` (`public/js/i18n.js`); cada texto del HTML usa `data-i18n`.
- Añadir **ruso** = duplicar el bloque `en` como `ru` y sumar el botón. El demo (roles) también tiene campos por idioma.
- Tema y idioma se recuerdan vía `localStorage`. Respeta `prefers-color-scheme` y `prefers-reduced-motion`.

## Fuera de alcance (a propósito)
- Login, backend, base de datos, emisión real de certificados, pagos.
- Contenido exhaustivo de cursos (solo 1 lección de ejemplo por rol).
- Estadísticas de mercado en el sitio público (se evita afirmar cifras no verificadas).

## Por qué simple
La Solución 1.0 se mantiene mínima para que el **Pivoteo 1** nazca de las entrevistas. Si los entrevistados
piden más profundidad, gobernanza, contenido vivo, o cuestionan el modelo de pago, eso alimenta la Solución 1.1.
