/* Nivela — utilidades compartidas: tema, idioma, toast.
   Cada página define window.I18N = { es: {...}, en: {...} } antes de cargar esto. */

(function () {
  // ---------- tema ----------
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("nivela-theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  window.toggleTheme = function () {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("nivela-theme", theme); } catch (e) {}
    updateToggleLabels();
  };

  // ---------- idioma ----------
  var savedLang = null;
  try { savedLang = localStorage.getItem("nivela-lang"); } catch (e) {}
  window.LANG = savedLang === "en" ? "en" : "es";

  function applyI18n() {
    if (!window.I18N) return;
    var dict = window.I18N[window.LANG] || {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
    });
    document.documentElement.lang = window.LANG;
  }
  window.applyI18n = applyI18n;

  window.toggleLang = function () {
    window.LANG = window.LANG === "es" ? "en" : "es";
    try { localStorage.setItem("nivela-lang", window.LANG); } catch (e) {}
    applyI18n();
    updateToggleLabels();
    if (typeof window.onLangChange === "function") window.onLangChange();
  };

  function updateToggleLabels() {
    document.querySelectorAll("[data-tgl-theme]").forEach(function (b) {
      b.textContent = theme === "dark" ? (window.LANG === "es" ? "Claro" : "Light") : (window.LANG === "es" ? "Oscuro" : "Dark");
    });
    document.querySelectorAll("[data-tgl-lang]").forEach(function (b) {
      b.textContent = window.LANG === "es" ? "EN" : "ES";
    });
  }
  window.updateToggleLabels = updateToggleLabels;

  // ---------- toast ----------
  window.toast = function (msg) {
    var t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 2400);
  };

  // ---------- reveal on scroll (solo landing) ----------
  function initReveal() {
    if (!document.querySelector(".hero")) return; // solo la landing
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    var els = document.querySelectorAll(".step,.inc,.plan,.pain,.faq details,.feed-item,.panelmock,.strip-in > div");
    if (!els.length) return;
    els.forEach(function (e) { e.classList.add("reveal"); });
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e, i) {
      e.style.transitionDelay = (Math.min(i, 6) * 0.05) + "s";
      io.observe(e);
    });
  }

  // ---------- init ----------
  document.addEventListener("DOMContentLoaded", function () {
    applyI18n();
    updateToggleLabels();
    initReveal();
  });
})();
