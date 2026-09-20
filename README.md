# Nivela

**AI judgment that doesn't expire.** Nivela is a mentor that knows your job: it diagnoses your role, builds your learning route, teaches the AI tools your real tasks need, and certifies competence that can be verified by whoever receives the certificate.

| | |
|---|---|
| Live product | **https://nivela-ec.web.app** |
| Interactive demo | **https://nivela-ec.web.app/app.html** (three one-click accounts, no signup) |
| Status | Deployed MVP. Demo data is synthetic, no backend yet (see [Scope](#scope-what-is-real-and-what-is-a-demo)) |
| Built for | Entrepreneurship course, Universidad San Francisco de Quito, 2026 |

---

## The problem, as the data corrected it

The project started from the hypothesis that Ecuador's industry was failing to adopt AI. Ten interviews and five surveys (290+ responses) said otherwise: adoption is already here, and it is unguided.

| Finding | Figure |
|---|---|
| Already use AI at work or study | 90% |
| Learned on their own, by trial and error | around 9 of every 10 |
| Say only half of what they learned last year is still valid | 61% |
| Get stuck applying, judging or choosing tools | 74% |
| Verify what the AI returns | 46% |
| Use AI in their organization with no guidance at all | 58% |
| Work in an organization with a defined AI standard | 6% |

Source: our own validation study (10 interviews and 5 behavioral surveys, Ecuador, 2026). Market sizing uses INEC ENEMDU December 2025 (8.6M economically active people) and SENESCYT (around 1M higher education students); the initial market is the 3.2M in adequate employment plus university students, roughly 4M people.

What follows from that: the gap is not access to AI. It is method, judgment and a shared standard for using it on real work.

## The method: La Ruta Nivela

| Step | What happens |
|---|---|
| **Diagnose** | You tell the mentor what you do, what you know and what you don't need. You get a tool kit that fits your budget and a full route with branches (stay on the surface or go deep). |
| **Think** | Fundamentals that don't expire: which model fits which task, how to frame and iterate, what to adopt and what to discard. |
| **Apply** | Every stretch ends in a real task from your own job, solved: your reconciliation, your lesson plan, your report. |
| **Verify** | Contrast, spot errors, correct with your own judgment. The certificate is tied to verified competence, not attendance. |

## Inside the product

Open the [demo](https://nivela-ec.web.app/app.html) and pick an account. Each one is a different side of the business.

| Account | Segment | What to look at |
|---|---|---|
| **Camila Ríos** | B2C, independent accountant | Branching route, lesson with the mentor window always open, personal dictionary with practice quiz, budget-aware tool kit, weekly news for her field, verifiable certificate with a public code |
| **Fernando Salas** | B2B, academic coordinator at a school | Adoption panel by role, usage standard (approved tools, limits, sensitive data), institutional routes, issued certificates |
| **Nivela team** | Admin | Metrics, per-subscriber economics, tool curation, institutions, system health |

The pieces that carry the value proposition: the mentor lives inside the lesson instead of in a separate chat; every term you ask about becomes an entry in your personal dictionary that you later practice; the tool kit recommends free tools when free tools are enough; and the certificate carries a public verification code showing which branch you completed and which deliverables back it.

## How the product got here

Three MVPs, one per validation stage. Each change came from contact with users, not from preference.

| Version | What it was | What the evidence said | What changed |
|---|---|---|---|
| **1.0** | A "Duolingo of AI tools": role based catalog with light gamification | Interviewees rejected it: "tools expire in months", "another shallow course" | Tools alone are not the product |
| **1.1** | Teach judgment and fundamentals, not just tools | Surveys: people finish training when it applies directly to their job (45%), not because of gamification | The unit of learning became the user's own task |
| **1.2 / current** | A mentor per role that works on your real tasks, with branching routes and verifiable certificates | Two layers hold together: 66% keep using the tool they discovered well, while half of what they learn expires within a year | Ship both layers: the tools of your role and the fundamentals that survive them |

Competitive read that shaped the positioning: global catalogs (Coursera, Udemy, DataCamp) leave you choosing alone; regional platforms (Platzi by subscription, UBITS by corporate seat) sell a catalog by profile, not your real work; local offerings are $200 to $400 cohorts on a fixed schedule that expire with the next generation of tools. The market is proven. The empty space is personalization plus continuous updating plus a certificate tied to competence.

## Product principles

Three decisions that are in the product, not in a policy document.

- **Privacy by design.** The organization panel shows progress by role and never an individual's activity. Lessons teach how to anonymize sensitive data before sending it to a model, which matters when the users are teachers and clinicians.
- **Honest kits.** If you don't need to pay for another tool, Nivela says so. Recommendations stay inside the budget the user declares, free tools included.
- **Certificates that are demonstrated, not sold.** Each certificate carries a public verification code and the deliverables that back it.

## Business model

| Plan | Price | Includes |
|---|---|---|
| Free | $0 | Role diagnosis, personalized tool kit, full route visible, first lesson with one real task solved |
| Individual | $10 / month | Full route with deep dive branches, unlimited mentor, personal dictionary with practice, weekly field news, verifiable certificates |
| Organizations | $6 to $9 / seat / month, billed annually | Everything in Individual, institutional routes and usage standard, adoption panel by role, institution backed certificates |

Unit economics (estimates from the business model canvas, not audited): variable cost of $2 to $4 per user against an $8 to $12 subscription, which puts gross margin at 60% to 75%. The MVP in this repository was built and deployed by one person on a $20 per month AI subscription, with no payroll to finance.

## Scope: what is real and what is a demo

Stated plainly, because a portfolio piece that overstates itself is worth less than one that doesn't.

**Real and working:** both pages, the complete design system, light and dark themes and ES/EN language, all persisted; the full navigation of the three demo accounts; the mentor conversation with scripted and free input paths; the personal dictionary with a working practice quiz; branch selection that rewrites the route; the public certificate verification modal; continuous deployment on every merge to `main`.

**Demo, by design:** account data is synthetic and lives inside `app.html`. There is no backend, no real signup, no authentication, no payments, and no certificate is actually issued. The mentor answers from a script, not from a model API.

**Next:** real signup and Firestore persistence, the mentor running on frontier model APIs with routing to cheaper models, a public certificate registry behind the verification code, and a pilot with one educational institution.

## Tech

Vanilla HTML, CSS and JavaScript. No build step, no framework, no runtime dependencies. The reason is deliberate: the product had to be deployable and editable in minutes during weekly validation cycles, and nothing in the MVP justified a toolchain.

```
public/
  index.html        Landing: value proposition, method, pricing, FAQ
  app.html          The platform in demo mode, three accounts, all views
  assets/
    nivela.css      Design system: tokens, light/dark themes, components
    nivela.js       Theme and language switching, persisted in localStorage
docs/               Project context and MVP scope
firebase.json       Firebase Hosting config
```

Fonts come from Google Fonts (Poppins, Inter, IBM Plex Mono). Themes respect `prefers-color-scheme` and animations respect `prefers-reduced-motion`.

**Deployment.** Merging to `main` deploys to production at nivela-ec.web.app through GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`, using `FirebaseExtended/action-hosting-deploy` with the `nivela-ec` project). There is no manual deploy step and no local Firebase CLI needed.

**Run it locally.**

```bash
cd public && python3 -m http.server 8000
```

Then open http://localhost:8000.

**Edit the content.** Landing copy is the Spanish text in `index.html` plus the `I18N.en` dictionary at the end of that file. The app's copy and demo data live in the `T`, `MENTOR_SCRIPT` and `QUIZ` objects and the `view*` functions inside `app.html`, always in both languages.

## Team

Validated by a five person team for the Entrepreneurship course at Universidad San Francisco de Quito: David Argoti, Alexander Kholodov, Andre Oñate, Victoria Sánchez, Abby Yépez. Each member ran interviews and designed one of the five surveys. The platform in this repository was designed, built and deployed by Alexander Kholodov.
