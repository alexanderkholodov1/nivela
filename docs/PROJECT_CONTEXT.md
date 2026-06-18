# PROJECT_CONTEXT — Nivela (Emprendimiento, USFQ)

> Documento de contexto para cualquier instancia de Claude/Opus que retome el proyecto.
> Léelo completo antes de proponer cambios. Resume el origen, el estado actual y hacia dónde va.

---

## 1. Qué es esto

Proyecto para la materia **Emprendimiento (verano presencial, USFQ)**. El equipo (Group 6) trabaja
en validar un emprendimiento por etapas (metodología tipo problema → validación → pivoteos).
Este repositorio contiene el **PMV digital 1.0**: un sitio web que se muestra a entrevistados
para recibir retroalimentación y, con sus hallazgos, evolucionar la solución de **1.0 → 1.1**.

**La idea de producto:** una plataforma donde empleados e individuos **aprenden a usar** las
herramientas de IA correctas **para su rol específico**, guiados por una IA que actúa como mentor/asesor
de su área. No es un catálogo de cursos ni un "Duolingo de herramientas": el énfasis está en
**enseñar a aplicar** (no solo mostrar), con gamificación ligera (puntos, insignias, certificados)
y un panel para que los líderes vean la adopción real de su equipo.

Modelos: **B2B** (empresas que capacitan por rol) y **B2C** (profesionales que se actualizan).

---

## 2. De dónde viene (evolución del problema)

- **Problema original:** rigidez de los profesionales para adaptarse a los cambios (IA).
- **Validación previa (deber anterior):** 5 entrevistas (3 líderes, 2 con el dolor). Hallazgos clave:
  - Los cursos pagados "solo muestran qué herramientas existen", se repiten y no enseñan uso ético ni eficaz.
  - No hay estándar ni norma institucional de uso de IA.
  - Resistencia al cambio; es difícil enseñar de forma masiva.
  - La IA complementa, no reemplaza; falta conectar academia con producción.
- **Nuevo problema (planteado):** *Falta de adopción de herramientas de IA en la industria del Ecuador,
  resistencia al cambio por desconocimiento y falta de estandarización, frente al rol creciente de la IA.*

Esos hallazgos previos son la razón de que el producto NO sea "mostrar herramientas", sino
**enseñar a usarlas por rol, con criterio y estándares**.

---

## 3. Etapa actual: Pivoteo 1 (este entregable)

Se deben hacer **5 entrevistas NUEVAS** (3 líderes + 2 con el dolor; distintas a las anteriores) en las que
se presenta el problema y la **Solución 1.0** (este PMV) para recibir feedback con preguntas poderosas.
Luego se documenta el aprendizaje con el formato:
*"Nosotros creíamos que… / Sin embargo, después del Pivoteo 1 aprendimos que… / Solución 1.1 …"*,
más el PMV digital que explica la solución (este sitio es esa pieza).

**Decisión de industria:** enfoque en **PYMES** (prioridad 1) y **Banca/servicios financieros** (prioridad 2).
El demo cubre roles de ambos grupos para servir a las dos pistas de entrevista.

> Nota estratégica: la Solución 1.0 se mantiene deliberadamente simple (mentor por rol + gamificación)
> para que el pivote a 1.1 nazca de la voz de los entrevistados. Direcciones probables del 1.1 a vigilar:
> obsolescencia del contenido (las herramientas cambian rápido → la IA debe mantener el contenido al día),
> "otro curso más" (diferenciarse con práctica real y estándares), quién paga / quién decide la compra (B2B),
> y gobernanza/uso responsable (especialmente en banca).

---

## 4. Qué construye este MVP (alcance)

Sitio estático de una sola página con secciones: Hero → Problema → Cómo funciona →
**Demo interactivo** → Para equipos (dashboard) → Para quién → CTA → Footer.

La pieza central es el **demo "rol → plan de tu mentor"**: el visitante elige su rol y ve un plan
personalizado de 3 módulos (herramienta exacta + resultado), con una **lección de ejemplo** que enseña
a usar la herramienta (explicación del mentor + prompt para probar + tip), y gana **puntos e insignias**
al completar. Incluye un **panel de equipo** con datos de ejemplo (adopción, certificados, avance por persona).

Detalle de alcance y decisiones técnicas: ver `MVP_1.0_SPEC.md`.

---

## 5. Stack y por qué

- **HTML/CSS/JS vanilla, sin build.** Razón: despliegue inmediato en Firebase Hosting, cero fricción,
  fácil de entender y editar, y suficiente para un PMV de validación.
- **Firebase Hosting** para el despliegue (lo hace el equipo).
- Tipografías vía Google Fonts: Bricolage Grotesque (display), Plus Jakarta Sans (body), JetBrains Mono (datos).
- Sin frameworks, sin dependencias de runtime.

Requisitos de producto respetados: **modo claro/oscuro siempre**, **multiidioma** (ES/EN; RU es ampliable),
todo funcional sin botones rotos.

---

## 6. Marca / naming

**Nivela** es el nombre definitivo de la plataforma (centralizado en `BRAND` dentro de `i18n.js`).
Se eligió por: coinable/ownable, raíz en español de *nivelar/nivel* (progreso), no suena a "IA", y tiene
efecto memorable tipo Duolingo. Candidatos descartados en la decisión: Destra, Habilea, Forjia, Aptia, Pericia.
Pendiente operativo: verificar y registrar marca (IEPI/Ecuador y bases internacionales) y asegurar el dominio.

---

## 7. Preferencias del usuario (Alexander) relevantes al proyecto

- Conciso pero completo; sin relleno. No salirse de las instrucciones; si hay algo mejor, proponerlo y preguntar antes.
- **Cero tolerancia a datos inventados** en piezas formales. En el sitio público no se ponen estadísticas no verificadas;
  el copy es cualitativo y honesto (el ribbon "concepto en validación" deja claro que es un PMV).
- Web siempre con claro/oscuro y multiidioma; todo coherente y funcional.
- Código: variables/identificadores y comentarios en inglés (estándar de industria); contenido del producto en ES/EN.
- Edits dirigidos, no reescrituras completas.

---

## 8. Próximos pasos

1. Elegir nombre final de marca y registrarlo.
2. Alinear el **guion de entrevistas** (3 líderes / 2 dolor) con preguntas poderosas que provoquen el pivote 1.1.
3. Conseguir 5 entrevistados nuevos (red de TCS, USFQ, IEEE, LinkedIn, bola de nieve).
4. Tras las entrevistas: documentar "creíamos/aprendimos", definir **Solución 1.1** y ajustar el sitio si hace falta.
5. Armar el PDF final del entregable según la rúbrica.

## 9. Seguridad

`private/` contiene el PAT de GitHub y notas; está en `.gitignore` y **no debe subirse**.
Si un token llegó a commitearse en un repo público, **revocarlo y regenerarlo**.
