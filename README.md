# Nivela · MVP 1.2 (Pivoteo 2)

Landing autocontenido. Todo (HTML, CSS, JS, i18n, demo por rol) está en `public/index.html`.
No hay archivos sueltos ni rutas relativas que se puedan romper.

## Qué incluye
- Modo claro / oscuro (persistente)
- Español / Inglés (persistente)
- Reencuadre con datos de validación (Pivoteo 2): banda de evidencia, problema replanteado, método pensar/aplicar/verificar
- Demo interactivo por rol con lección de muestra, verificación y antes/después
- Camino dual B2C y B2B, panel de adopción, precio y certificación verificable

## Desplegar en Firebase Hosting
1. Pon tu ID de proyecto en `.firebaserc` (reemplaza `TU_PROYECTO_FIREBASE`).
2. `firebase deploy --only hosting`

## Ver local
`cd public && python3 -m http.server 8000` y abre http://localhost:8000

## Editar contenido
Los textos viven en el objeto `I18N` (es / en) y los roles del demo en `ROLES` (es / en), ambos al final de `public/index.html`.
