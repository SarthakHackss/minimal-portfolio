/* ═══════════════════════════════════════════════════════════════
   Sarthak Patil — portfolio engine
   1. Opening: the hero name zooms IN on every refresh (pure CSS),
      then sinks behind the photo on scroll
   2. Reveal-on-scroll, hero parallax, skills marquee
   (project figures are self-contained interactive iframes — figures/embed.js)
   ═══════════════════════════════════════════════════════════════ */
(() => {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1 · OPENING (every refresh) ────────────────────────────── */
  const nav = $("#nav");
  const posterName = $("#posterName");

  if (reduced) {
    nav.classList.add("show");
    posterName.classList.add("done");
  } else {
    setTimeout(() => {
      nav.classList.add("show");
      posterName.classList.add("done");   // zoom landed → scroll parallax takes over
    }, 2000);
  }

  /* ── 2 · reveals ────────────────────────────────────────────── */
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => e.isIntersecting && e.target.classList.add("in"));
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ── 3 · hero parallax: the name gradually sinks BEHIND the photo ── */
  const hero = $("#hero");
  const nameInner = posterName ? posterName.querySelector("span") : null;
  const figure = $("#posterFigure");
  let heroY = 0, lastT = performance.now();

  function tick(now) {
    requestAnimationFrame(tick);          // schedule first — the loop can never die
    try {
      if (reduced || !hero || !nameInner || !figure || !posterName.classList.contains("done")) return;
      const y = clamp(scrollY / Math.max(1, hero.offsetHeight * 0.9));
      if (Math.abs(y - heroY) > 0.001) {
        heroY = y;
        nameInner.style.transform = `scale(${1 - y * 0.14}) translateY(${y * 26}px)`;
        nameInner.style.opacity = String(1 - y * 0.55);
        figure.style.transform = `translateY(${y * -14}px)`;
      }
    } catch { /* never let the loop die */ }
  }
  requestAnimationFrame(tick);

  /* ── 4 · marquee: duplicate track for a seamless loop ───────── */
  $$(".marquee-track").forEach((t) => { t.innerHTML += t.innerHTML; });
})();
