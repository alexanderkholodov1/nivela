/* =========================================================================
   Nivela — app logic
   ========================================================================= */
(function () {
  "use strict";

  const LS = { theme: "nivela.theme", lang: "nivela.lang", done: "nivela.done" };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let lang = localStorage.getItem(LS.lang) || "es";
  let done = new Set(JSON.parse(localStorage.getItem(LS.done) || "[]"));
  let activeRole = null;

  /* ---- Theme ------------------------------------------------------------ */
  function initTheme() {
    const saved = localStorage.getItem(LS.theme);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"));
    $("#themeBtn").addEventListener("click", () => {
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(LS.theme, t);
  }

  /* ---- i18n ------------------------------------------------------------- */
  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.es[key]) || key; }

  function applyI18n() {
    document.documentElement.setAttribute("lang", lang);
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-title]").forEach((el) => { el.setAttribute("title", t(el.getAttribute("data-i18n-title"))); });
    const desc = $('meta[name="description"]'); if (desc) desc.setAttribute("content", t("meta.desc"));
    document.title = t("meta.title");
    $("#langBtn").textContent = t("lang.toggle");
  }

  function initLang() {
    applyI18n();
    $("#langBtn").addEventListener("click", () => {
      lang = lang === "es" ? "en" : "es";
      localStorage.setItem(LS.lang, lang);
      applyI18n();
      renderChips();
      if (activeRole) renderPlan(activeRole);
      else $("#planArea").innerHTML = `<p class="plan-empty">${t("demo.empty")}</p>`;
      populateDash(true);
    });
  }

  /* ---- Icons helper ----------------------------------------------------- */
  function svgIcon(name, cls) {
    return `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  }
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

  /* ---- Role chips ------------------------------------------------------- */
  function renderChips() {
    const wrap = $("#roleChips");
    wrap.innerHTML = "";
    ROLES.forEach((role) => {
      const b = document.createElement("button");
      b.className = "chip" + (activeRole && activeRole.id === role.id ? " active" : "");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", activeRole && activeRole.id === role.id ? "true" : "false");
      const tag = role.area ? role.area[lang] : "";
      b.innerHTML = svgIcon(role.icon) + `<span>${role.label[lang]}</span><span class="chip-tag">${tag}</span>`;
      b.addEventListener("click", () => { activeRole = role; renderChips(); renderPlan(role); });
      wrap.appendChild(b);
    });
  }

  /* ---- Plan rendering --------------------------------------------------- */
  function renderPlan(role) {
    const area = $("#planArea");
    let html = `
      <div class="plan-head">
        <span class="ph-ic">${svgIcon(role.icon)}</span>
        <h3>${t("demo.planFor")} ${role.label[lang]}</h3>
      </div>
      <div class="plan-mentor">
        <span class="pm-av">N</span>
        <p><span class="pm-name">${t("demo.mentor")}</span>${role.mentor[lang]}</p>
      </div>
      <div class="modules">`;

    role.modules.forEach((m, i) => {
      const key = role.id + ":" + i;
      const isDone = done.has(key);
      const isCriterio = m.kind === "criterio";
      const kindTag = isCriterio
        ? `<span class="mod-kind criterio">${t("demo.kindCriterio")}</span><span class="mod-tool">${t("demo.agnostic")}</span>`
        : `<span class="mod-kind aplicacion">${t("demo.kindAplicacion")}</span><span class="mod-tool">${m.tool}</span>`;
      html += `
        <article class="module${isDone ? " done" : ""}${isCriterio ? " is-criterio" : ""}" data-key="${key}">
          <div class="mod-top">
            <span class="mod-num">${String(i + 1).padStart(2, "0")}</span>
            <div class="mod-main">
              <div class="mod-tags">${kindTag}</div>
              <div class="mod-title">${m.title[lang]}</div>
              <p class="mod-outcome">${m.outcome[lang]}</p>
              ${m.sample ? `<button class="lesson-toggle" type="button">${t("demo.seeLesson")}</button>${lessonHtml(m.sample)}` : ""}
              <div>
                <button class="primary-btn sm complete-btn" type="button"${isDone ? " disabled" : ""}>
                  ${isDone ? t("demo.completed") : t("demo.complete")}
                </button>
              </div>
            </div>
            <span class="mod-badge">${CHECK}</span>
          </div>
        </article>`;
    });

    html += `</div>`;
    area.innerHTML = html;
    wirePlan(area, role);
  }

  function lessonHtml(s) {
    return `
      <div class="lesson">
        <p class="lesson-mentor">${s.intro[lang]}</p>
        <span class="lesson-label">${t("demo.tryPrompt")}</span>
        <div class="prompt-box"><button class="copy-btn" type="button">${t("demo.copy")}</button><span class="prompt-text">${escapeHtml(s.prompt[lang])}</span></div>
        <p class="lesson-tip"><b>${t("demo.tip")} · </b>${s.tip[lang]}</p>
      </div>`;
  }

  function wirePlan(area, role) {
    $$(".lesson-toggle", area).forEach((btn) => {
      btn.addEventListener("click", () => {
        const lesson = btn.parentElement.querySelector(".lesson");
        const open = lesson.classList.toggle("open");
        btn.classList.toggle("open", open);
        btn.textContent = open ? t("demo.hideLesson") : t("demo.seeLesson");
        // re-append lesson after toggle text replaced it? No: toggle is separate node. Safe.
      });
    });
    $$(".copy-btn", area).forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.parentElement.querySelector(".prompt-text").textContent;
        copyText(text).then(() => {
          btn.textContent = t("demo.copied");
          setTimeout(() => (btn.textContent = t("demo.copy")), 1400);
        });
      });
    });
    $$(".complete-btn", area).forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".module");
        const key = card.getAttribute("data-key");
        if (done.has(key)) return;
        done.add(key);
        localStorage.setItem(LS.done, JSON.stringify(Array.from(done)));
        card.classList.add("done");
        btn.disabled = true;
        btn.textContent = t("demo.completed");
        updateStats();
        toast(t("demo.toast"));
      });
    });
  }

  /* ---- Stats ------------------------------------------------------------ */
  function updateStats() {
    $("#badgeValue").textContent = done.size;
    $("#ptsValue").textContent = done.size * 50;
  }

  function resetDemo() {
    done = new Set();
    localStorage.setItem(LS.done, "[]");
    updateStats();
    if (activeRole) renderPlan(activeRole);
  }

  /* ---- Toast ------------------------------------------------------------ */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---- Clipboard / escape ---------------------------------------------- */
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ---- Team dashboard --------------------------------------------------- */
  let dashAnimated = false;
  function populateDash(textOnly) {
    const rows = $("#dashRows");
    rows.innerHTML = "";
    TEAM_SAMPLE.members.forEach((mb) => {
      const row = document.createElement("div");
      row.className = "dash-row";
      row.innerHTML = `<span class="dash-name">${mb.name}</span>
        <span class="dash-rolelbl">${mb.role[lang]}</span>
        <span class="dash-prog"><span style="width:${dashAnimated ? mb.progress + "%" : "0"}" data-w="${mb.progress}"></span></span>`;
      rows.appendChild(row);
    });
    const skStrong = $("#skStrong"), skImprove = $("#skImprove");
    if (skStrong) skStrong.innerHTML = TEAM_SAMPLE.strong[lang].map((s) => `<span class="sk-chip up">${s}</span>`).join("");
    if (skImprove) skImprove.innerHTML = TEAM_SAMPLE.improve[lang].map((s) => `<span class="sk-chip down">${s}</span>`).join("");
    if (!textOnly && !dashAnimated) {
      $("#kAdopt").textContent = "0%";
      $("#kActive").textContent = "0";
      $("#kCerts").textContent = "0";
    } else {
      $("#kAdopt").textContent = TEAM_SAMPLE.adoption + "%";
      $("#kActive").textContent = TEAM_SAMPLE.active;
      $("#kCerts").textContent = TEAM_SAMPLE.certs;
      $("#adoptRing").style.setProperty("--p", (TEAM_SAMPLE.adoption / 100 * 360) + "deg");
    }
  }
  function animateDash() {
    if (dashAnimated) return;
    dashAnimated = true;
    animateNum($("#kAdopt"), 0, TEAM_SAMPLE.adoption, 900, "%");
    animateNum($("#kActive"), 0, TEAM_SAMPLE.active, 900, "");
    animateNum($("#kCerts"), 0, TEAM_SAMPLE.certs, 900, "");
    $("#adoptRing").style.setProperty("--p", (TEAM_SAMPLE.adoption / 100 * 360) + "deg");
    requestAnimationFrame(() => {
      $$("#dashRows .dash-prog span").forEach((b) => { b.style.width = b.getAttribute("data-w") + "%"; });
    });
  }
  function animateNum(el, from, to, dur, suffix) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = to + suffix; return; }
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Scroll reveal ---------------------------------------------------- */
  function initReveal() {
    const targets = $$(".section-title, .lead, .mini-card, .step, .who-card, .demo-shell, .teams-copy, .dash, .cta-inner");
    targets.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) { targets.forEach((el) => el.classList.add("in")); animateDash(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          if (e.target.classList.contains("dash")) animateDash();
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach((el) => io.observe(el));
  }

  /* ---- Init ------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    renderChips();
    populateDash(false);
    updateStats();
    $("#resetBtn").addEventListener("click", resetDemo);
    initReveal();
  });
})();
