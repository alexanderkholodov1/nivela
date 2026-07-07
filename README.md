# Nivela · MVP 2.0

Sitio de producto + demo navegable de la plataforma. Dos páginas:

- `public/index.html`: landing que vende el servicio (propuesta, método, precios, FAQ).
- `public/app.html`: la plataforma en modo demo, con tres cuentas de un clic desde el login:
  - **Camila Ríos** (B2C): ruta con ramas, lección con mentor integrado, diccionario personal
    con práctica, kit por presupuesto, novedades del área y certificado verificable.
  - **Fernando Salas** (B2B, U. E. Andina): panel de adopción por rol, estándar de uso,
    rutas institucionales y certificados emitidos.
  - **Equipo Nivela** (admin): métricas, economía por suscriptor, curaduría de herramientas,
    instituciones y salud del sistema.

Compartido: `public/assets/nivela.css` (sistema de diseño) y `public/assets/nivela.js`
(tema claro/oscuro e idioma ES/EN, persistentes).

Los datos de las cuentas demo son sintéticos y viven en `app.html`; no hay backend.
El registro real y F