/*
  main.js
  Shared by every page: helpers, icons, cover artwork, card templates,
  the mobile menu and the footer year. Needs data.js to be loaded first.
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

/* ---------- Icons ---------- */

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
  devices: '<rect x="2" y="4" width="15" height="11" rx="1.5"/><path d="M2 18h15"/><rect x="18" y="9" width="4" height="9" rx="1"/>'
};

function icon(name) {
  return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
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

/* ---------- Card templates ---------- */

function metaHTML(a) {
  return '<div class="meta">' +
    '<span class="meta-item">' + icon("user") + "By " + esc(a.author) + "</span>" +
    '<span class="meta-item">' + esc(formatDate(a.date)) + "</span>" +
    '<span class="meta-item">' + icon("clock") + readMinutes(a) + " min read</span>" +
    "</div>";
}

function pillHTML(a, showType) {
  var html = '<span class="pill">' + esc(categoryOf(a.category).name) + "</span>";
  if (showType) {
    html += ' <span class="pill pill-outline">' + (a.type === "blog" ? "Blog" : "News") + "</span>";
  }
  return html;
}

/* Vertical card: cover on top. Used for blogs, related articles and the featured story. */
function articleCard(a, extraClass) {
  return '<article class="card ' + (extraClass || "") + '" data-reveal>' +
    '<div class="cover">' + coverSVG(a) + "</div>" +
    '<div class="card-body">' +
    "<div>" + pillHTML(a) + "</div>" +
    '<h3><a class="stretched" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    "<p>" + esc(a.excerpt) + "</p>" +
    metaHTML(a) +
    "</div></article>";
}

/* Horizontal row: cover on the left. Used for news lists. */
function newsRow(a, showType) {
  return '<article class="row" data-reveal>' +
    '<div class="cover">' + coverSVG(a) + "</div>" +
    '<div class="row-body">' +
    "<div>" + pillHTML(a, showType) + "</div>" +
    '<h3><a class="stretched" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    "<p>" + esc(a.excerpt) + "</p>" +
    metaHTML(a) +
    "</div></article>";
}

/* Short text-only row. Used for the side list on the home page. */
function compactRow(a) {
  return '<li class="compact" data-reveal>' +
    '<span class="compact-cat">' + esc(categoryOf(a.category).name) + "</span>" +
    '<h3 class="compact-title"><a class="stretched" href="' + articleUrl(a) + '">' + esc(a.title) + "</a></h3>" +
    '<span class="compact-date">' + esc(formatDate(a.date)) + "</span></li>";
}

/* ---------- Shared behaviour ---------- */

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
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
   Elements marked [data-reveal] fade and slide into place the first time
   they enter the viewport. New elements injected later (cards, rows,
   category tiles rendered by each page's script) are picked up automatically. */
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supportsIO = "IntersectionObserver" in window;

  if (reduceMotion || !supportsIO) {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-visible");
      el.querySelectorAll("[data-count-to]").forEach(animateCount);
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      entry.target.querySelectorAll("[data-count-to]").forEach(animateCount);
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
  window.addEventListener("scroll", function () {
    btn.classList.toggle("is-visible", window.scrollY > 480);
  }, { passive: true });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
