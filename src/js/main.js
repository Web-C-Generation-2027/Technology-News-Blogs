/*
  main.js
  Shared by every page: helpers, icons, cover artwork, card templates
  (built with Tailwind utility classes), the mobile menu and footer year.
  Needs data.js to be loaded first, and Tailwind (via CDN) loaded in <head>.
*/

/* ---------- Helpers ---------- */

function esc(value) {
  return String(value).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric"
  });
}

function articleWords(a) {
  var text = a.body.map(function (b) {
    return b.p || b.h || (b.list || b.ol || []).join(" ");
  }).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

function readMinutes(a) {
  return Math.max(1, Math.ceil(articleWords(a) / 150));
}

function categoryOf(slug) {
  return CATEGORIES.find(function (c) { return c.slug === slug; }) || { slug: slug, name: slug, description: "" };
}

function byNewest(a, b) {
  return b.date.localeCompare(a.date);
}

function articleUrl(a) {
  return "article.html?id=" + encodeURIComponent(a.id);
}

/* ---------- Icons ----------
   Every icon renders at 16x16 by default. Where a bigger icon is needed
   (category tiles, feature tiles, the search box, back-to-top) the wrapper
   span overrides the size with an arbitrary child-selector utility, e.g.
   "[&>svg]:w-6 [&>svg]:h-6", so this helper can stay a single shared function. */

const ICON_PATHS = {
  ai: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  gadgets: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  software: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  security: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  gaming: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5M4.5 12.5h5M16 11.5h.01M18.5 13.5h.01"/>',
  science: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>',
  students: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',
  news: '<path d="M4 4h13a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2z"/><path d="M19 8h2v10a1 1 0 0 1-1 1"/><path d="M8 8h7M8 12h7M8 16h4"/>',
  blogs: '<path d="M3 21l4.2-1 11-11-3.2-3.2-11 11z"/><path d="M13.8 6.8l3.2 3.2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  article: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4"/><path d="M9 12h6M9 16h6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5z"/>',
  devices: '<rect x="2" y="4" width="15" height="11" rx="1.5"/><path d="M2 18h15"/><rect x="18" y="9" width="4" height="9" rx="1"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  up: '<path d="M12 19V5M5 12l7-7 7 7"/>'
};

function icon(name) {
  return '<svg class="w-4 h-4 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    (ICON_PATHS[name] || "") + "</svg>";
}

/* ---------- Generated cover artwork ----------
   Each article gets its own illustration, drawn from the article id so it
   is always the same for the same article. Replace with real photos any time. */

function xmur3(str) {
  var h = 1779033703 ^ str.length;
  for (var i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function coverSVG(a) {
  var rnd = mulberry32(xmur3(a.id)());
  var P = ["#6C3FA0", "#8E63BD", "#B99ADD", "#3C1E5E"];
  var C = "#4CC9F0";
  var pick = function (arr) { return arr[Math.floor(rnd() * arr.length)]; };
  var s = '<rect width="640" height="360" fill="#171A2B"/>' +
    '<circle cx="' + Math.round(120 + rnd() * 400) + '" cy="' + Math.round(60 + rnd() * 240) +
    '" r="' + Math.round(140 + rnd() * 80) + '" fill="#3C1E5E" opacity=".7"/>';
  var i, x, y;

  switch (a.category) {
    case "ai": {
      var pts = [];
      for (i = 0; i < 10; i++) pts.push([Math.round(50 + rnd() * 540), Math.round(40 + rnd() * 280)]);
      pts.forEach(function (p, idx) {
        pts.map(function (q, j) { return [j, Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2)]; })
          .filter(function (d) { return d[0] !== idx; })
          .sort(function (m, n) { return m[1] - n[1]; })
          .slice(0, 2)
          .forEach(function (d) {
            s += '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + pts[d[0]][0] + '" y2="' + pts[d[0]][1] +
              '" stroke="' + C + '" stroke-opacity=".55" stroke-width="2"/>';
          });
      });
      pts.forEach(function (p) {
        s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (6 + Math.round(rnd() * 7)) +
          '" fill="' + pick(P.slice(1, 3)) + '" stroke="#fff" stroke-opacity=".8" stroke-width="2"/>';
      });
      break;
    }
    case "gadgets": {
      x = Math.round(70 + rnd() * 80);
      s += '<rect x="' + x + '" y="70" width="120" height="220" rx="20" fill="#24113A" stroke="' + C + '" stroke-width="3"/>' +
        '<rect x="' + (x + 12) + '" y="86" width="96" height="150" rx="8" fill="#6C3FA0"/>' +
        '<rect x="' + (x + 190) + '" y="110" width="220" height="140" rx="12" fill="#24113A" stroke="#B99ADD" stroke-width="3"/>' +
        '<rect x="' + (x + 205) + '" y="126" width="190" height="108" rx="6" fill="#8E63BD" opacity=".8"/>' +
        '<rect x="' + (x + 160) + '" y="256" width="280" height="14" rx="7" fill="#8E63BD"/>';
      break;
    }
    case "software": {
      for (i = 0; i < 9; i++) {
        s += '<rect x="' + (70 + (i % 3) * 28) + '" y="' + (50 + i * 30) + '" width="' + (80 + Math.round(rnd() * 260)) +
          '" height="14" rx="7" fill="' + pick(["#8E63BD", "#B99ADD", C, "#ffffff"]) +
          '" opacity="' + (0.55 + rnd() * 0.4).toFixed(2) + '"/>';
      }
      break;
    }
    case "security": {
      x = Math.round(-80 + rnd() * 160);
      s += '<g transform="translate(' + x + ' 0)">';
      [150, 110, 70].forEach(function (r, k) {
        s += '<circle cx="320" cy="180" r="' + r + '" fill="none" stroke="' + (k === 2 ? C : "#8E63BD") +
          '" stroke-width="3" opacity="' + (0.9 - k * 0.2).toFixed(1) + '"/>';
      });
      s += '<path d="M320 120l46 18v36c0 30-20 50-46 58-26-8-46-28-46-58v-36z" fill="#6C3FA0" stroke="#fff" stroke-width="3"/>' +
        '<path d="M300 178l14 14 28-30" fill="none" stroke="' + C + '" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></g>';
      break;
    }
    case "gaming": {
      var r, c;
      for (r = 0; r < 9; r++) {
        for (c = 0; c < 16; c++) {
          if (rnd() < 0.38) {
            s += '<rect x="' + (c * 40 + 4) + '" y="' + (r * 40 + 4) + '" width="32" height="32" rx="6" fill="' +
              pick(P.concat([C])) + '" opacity="' + (0.4 + rnd() * 0.6).toFixed(2) + '"/>';
          }
        }
      }
      break;
    }
    case "science": {
      for (i = 0; i < 26; i++) {
        s += '<circle cx="' + Math.round(rnd() * 640) + '" cy="' + Math.round(rnd() * 360) + '" r="' +
          (1 + rnd() * 2).toFixed(1) + '" fill="#fff" opacity="' + (0.4 + rnd() * 0.5).toFixed(2) + '"/>';
      }
      s += '<circle cx="320" cy="180" r="46" fill="#6C3FA0"/>';
      [-25, 20, 65].forEach(function (angle, k) {
        s += '<ellipse cx="320" cy="180" rx="' + (170 + k * 30) + '" ry="' + (60 + k * 22) + '" transform="rotate(' +
          angle + ' 320 180)" fill="none" stroke="' + (k === 1 ? C : "#B99ADD") + '" stroke-opacity=".7" stroke-width="2"/>';
      });
      break;
    }
    case "students": {
      var shades = ["#6C3FA0", "#8E63BD", "#B99ADD", "#3C1E5E"];
      y = 270;
      for (i = 0; i < 5; i++) {
        var w = 200 + Math.round(rnd() * 160);
        x = Math.round(60 + rnd() * 160);
        s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="6" fill="' + shades[i % 4] +
          '" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>' +
          '<rect x="' + (x + 16) + '" y="' + (y + 12) + '" width="' + Math.round(w * 0.3) + '" height="6" rx="3" fill="' + C + '"/>';
        y -= 42;
      }
      break;
    }
  }

  return '<svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' + s + "</svg>";
}

/* ---------- Card templates (Tailwind utility classes) ----------
   Every reveal-able element shares the same "hidden" baseline
   (opacity-0 translate-y-6) so the scroll-reveal script below can turn
   them all visible the same way, whatever page rendered them. */

var REVEAL_HIDDEN = "opacity-0 translate-y-6";
var STRETCH_LINK = 'after:content-[\'\'] after:absolute after:inset-0';
var TITLE_LINK = 'text-ink no-underline ' + STRETCH_LINK +
  ' group-hover:underline group-hover:decoration-cyan group-hover:decoration-2 group-hover:underline-offset-4';
var BTN_BASE = "inline-flex items-center justify-center rounded-[10px] border-2 border-transparent px-[22px] py-3 font-body text-base font-medium no-underline cursor-pointer transition-all duration-200 active:translate-y-0";
var BTN_PRIMARY = BTN_BASE + " bg-purple text-white hover:-translate-y-0.5 hover:bg-purple-800 hover:shadow-[0_12px_22px_rgba(108,63,160,0.32)]";
var BTN_OUTLINE_DARK = BTN_BASE + " border-purple text-purple bg-transparent hover:-translate-y-0.5 hover:bg-purple-100";
var EMPTY_STATE = "grid justify-items-center gap-3 rounded-2xl border border-dashed border-purple-500 bg-white px-6 py-10 text-center";

function metaHTML(a) {
  return '<div class="flex flex-wrap gap-x-[18px] gap-y-0.5 text-sm leading-[1.6] text-muted">' +
    '<span class="inline-flex items-center gap-1.5">' + icon("user") + "By " + esc(a.author) + "</span>" +
    '<span class="inline-flex items-center gap-1.5">' + esc(formatDate(a.date)) + "</span>" +
    '<span class="inline-flex items-center gap-1.5">' + icon("clock") + readMinutes(a) + " min read</span>" +
    "</div>";
}

function pillHTML(a, showType) {
  var html = '<span class="inline-block rounded-full bg-purple-300 px-3 py-[5px] font-body text-sm font-medium text-purple-900">' +
    esc(categoryOf(a.category).name) + "</span>";
  if (showType) {
    html += ' <span class="inline-block rounded-full border border-purple-500 px-[11px] py-1 font-body text-sm text-purple-800">' +
      (a.type === "blog" ? "Blog" : "News") + "</span>";
  }
  return html;
}

/* Vertical card: cover on top. Used for blogs, related articles and the featured story. */
function articleCard(a, extraClass) {
  return '<article class="group relative flex flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white transition-all duration-500 ease-out ' + REVEAL_HIDDEN +
    ' hover:border-cyan hover:-translate-y-1.5 hover:shadow-[0_20px_36px_rgba(23,26,43,0.12)] [transition-delay:calc(var(--i,0)*70ms)] ' + (extraClass || "") + '" data-reveal>' +
    '<div class="aspect-video overflow-hidden rounded-t-[15px] bg-navy [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:scale-[1.07]">' + coverSVG(a) + "</div>" +
    '<div class="flex flex-1 flex-col items-start gap-3 px-[22px] pb-[22px] pt-5">' +
    "<div>" + pillHTML(a) + "</div>" +
    '<h3 class="font-head text-2xl font-semibold leading-[1.4]"><a class="' + TITLE_LINK + '" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    '<p class="text-muted">' + esc(a.excerpt) + "</p>" +
    metaHTML(a) +
    "</div></article>";
}

/* Horizontal row: cover on the left. Used for news lists. */
function newsRow(a, showType) {
  return '<article class="group relative grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-purple-100 bg-white transition-all duration-500 ease-out ' + REVEAL_HIDDEN +
    ' hover:border-cyan hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(23,26,43,0.1)] [transition-delay:calc(var(--i,0)*70ms)] min-[641px]:grid-cols-[240px_minmax(0,1fr)] min-[641px]:gap-6" data-reveal>' +
    '<div class="aspect-video overflow-hidden rounded-t-2xl bg-navy [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:transition-transform [&>svg]:duration-500 group-hover:[&>svg]:scale-[1.07] min-[641px]:aspect-auto min-[641px]:min-h-[160px] min-[641px]:rounded-l-2xl min-[641px]:rounded-tr-none">' + coverSVG(a) + "</div>" +
    '<div class="flex flex-col items-start gap-2.5 p-5 pt-4 min-[641px]:pl-0 min-[641px]:pt-5">' +
    "<div>" + pillHTML(a, showType) + "</div>" +
    '<h3 class="font-head text-2xl font-semibold leading-[1.4]"><a class="' + TITLE_LINK + '" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    '<p class="text-muted">' + esc(a.excerpt) + "</p>" +
    metaHTML(a) +
    "</div></article>";
}

/* Short text-only row. Used for the side list on the home page. */
function compactRow(a) {
  return '<li class="group relative -ml-[19px] grid gap-0.5 border-b border-l-[3px] border-l-transparent border-purple-100 py-4 pl-4 transition-all duration-500 ' + REVEAL_HIDDEN +
    ' last:border-b-0 hover:border-l-cyan [transition-delay:calc(var(--i,0)*70ms)]" data-reveal>' +
    '<span class="text-sm text-muted">' + esc(categoryOf(a.category).name) + "</span>" +
    '<h3 class="text-lg leading-[1.4]"><a class="' + TITLE_LINK + '" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    '<span class="text-sm text-muted">' + esc(formatDate(a.date)) + "</span></li>";
}

/* Category tile: used on the home page and the categories page. */
function catTile(c, opts) {
  opts = opts || {};
  var count = ARTICLES.filter(function (a) { return a.category === c.slug; }).length;
  var large = opts.large;
  var active = opts.active;
  var href = "categories.html?cat=" + c.slug + (large ? "#category-results" : "");
  return '<li data-reveal class="' + REVEAL_HIDDEN + ' transition-all duration-500 [transition-delay:calc(var(--i,0)*70ms)]">' +
    '<a class="group flex h-full items-center gap-3.5 rounded-2xl border bg-white px-[18px] py-4 text-ink no-underline transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_14px_26px_rgba(23,26,43,0.1)] ' +
    (active ? "border-purple ring-1 ring-inset ring-purple " : "border-purple-100 ") +
    (large ? "items-start p-5 " : "") + '" href="' + href + '"' + (active ? ' aria-current="true"' : "") + ">" +
    '<span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan transition-transform duration-300 group-hover:-rotate-[8deg] group-hover:scale-[1.08] group-hover:bg-purple [&>svg]:w-[22px] [&>svg]:h-[22px]">' + icon(c.slug) + "</span>" +
    '<span class="grid gap-0.5">' +
    '<span class="font-head text-lg font-semibold leading-[1.4] text-purple">' + esc(c.name) + "</span>" +
    (large ? '<span class="text-sm text-muted">' + esc(c.description) + "</span>" : "") +
    '<span class="text-sm text-muted">' + count + (count === 1 ? " article" : " articles") + "</span>" +
    "</span></a></li>";
}

/* ---------- Shared behaviour ---------- */

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(nav.classList.contains("hidden"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !nav.classList.contains("hidden")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

/* Simple email check used by the newsletter and contact forms. */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/* ---------- Count-up numbers (used by the home page stats strip) ---------- */
function animateCount(el) {
  var target = parseFloat(el.getAttribute("data-count-to"));
  if (isNaN(target)) return;
  var duration = 1100, start = null;
  function step(ts) {
    if (start === null) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------- Scroll reveal ----------
   Elements marked [data-reveal] start with the Tailwind classes
   "opacity-0 translate-y-6" and swap to "opacity-100 translate-y-0" the
   first time they enter the viewport. New elements injected later (cards,
   rows, category tiles rendered by each page's script) are picked up
   automatically via MutationObserver. */
function revealElement(el) {
  el.classList.remove("opacity-0", "translate-y-6");
  el.classList.add("opacity-100", "translate-y-0");
  el.querySelectorAll("[data-count-to]").forEach(animateCount);
}

(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supportsIO = "IntersectionObserver" in window;

  if (reduceMotion || !supportsIO) {
    document.querySelectorAll("[data-reveal]").forEach(revealElement);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      revealElement(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  var seen = 0;
  function observeNew(root) {
    (root || document).querySelectorAll("[data-reveal]:not([data-observed])").forEach(function (el) {
      el.setAttribute("data-observed", "");
      el.style.setProperty("--i", seen % 6);
      seen++;
      io.observe(el);
    });
  }

  observeNew(document);

  if ("MutationObserver" in window) {
    new MutationObserver(function () { observeNew(document); })
      .observe(document.body, { childList: true, subtree: true });
  }
})();

/* ---------- Back to top ---------- */
(function () {
  var btn = document.getElementById("to-top");
  if (!btn) return;
  var show = function () {
    btn.classList.remove("opacity-0", "translate-y-3", "pointer-events-none");
    btn.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  };
  var hide = function () {
    btn.classList.add("opacity-0", "translate-y-3", "pointer-events-none");
    btn.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
  };
  window.addEventListener("scroll", function () {
    if (window.scrollY > 480) show(); else hide();
  }, { passive: true });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
