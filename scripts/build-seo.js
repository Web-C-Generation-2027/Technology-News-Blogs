/*
  build-seo.js
  Run with:  npm run build:seo   (also runs as part of  npm run build)

  What it does, every time it runs (safe to re-run):
  1. Adds canonical, Open Graph and Twitter tags to index/news/blogs/categories/about.
  2. Marks article.html as noindex (it only forwards old ?id= links).
  3. Creates src/articles/<id>.html for every article in js/data.js, with the full text in
     the HTML so Google can read it, plus its own title, description, Open Graph tags
     and NewsArticle/BlogPosting structured data.
  4. Rewrites src/sitemap.xml with every page and every article.

  Change SITE below if the site moves to its own domain.
*/
const fs = require("fs");
const path = require("path");

const SITE = "https://newstech-six.vercel.app";
const SRC = path.join(__dirname, "..", "src");
const TODAY = new Date().toISOString().slice(0, 10);
const DEFAULT_IMAGE = "images/og-default.png";

/* ---------- load data.js ---------- */
const dataSrc = fs.readFileSync(path.join(SRC, "js", "data.js"), "utf8");
const { ARTICLES, CATEGORIES } = new Function(dataSrc + "\nreturn { ARTICLES, CATEGORIES };")();

/* ---------- helpers ---------- */
const read = (f) => fs.readFileSync(path.join(SRC, f), "utf8").replace(/\r\n/g, "\n");
const write = (f, s) => {
  fs.mkdirSync(path.dirname(path.join(SRC, f)), { recursive: true });
  fs.writeFileSync(path.join(SRC, f), s.replace(/\n/g, "\r\n"));
};
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const catName = (slug) => (CATEGORIES.find((c) => c.slug === slug) || { name: slug }).name;
const absImage = (img) => (!img ? `${SITE}/${DEFAULT_IMAGE}` : /^https?:/.test(img) ? img : `${SITE}/${encodeURI(img)}`);
const clip = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");
const cappedDate = (d) => (d > TODAY ? TODAY : d);
const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const words = (a) => a.body.map((b) => b.p || b.h || (b.list || b.ol || []).join(" ")).join(" ").split(/\s+/).filter(Boolean).length;
const readMin = (a) => Math.max(1, Math.ceil(words(a) / 150)); // keep in step with readMinutes() in js/main.js

const SEO_BLOCK = /[ \t]*<!-- seo:start -->[\s\S]*?<!-- seo:end -->\n?/;

function seoBlock({ url, title, desc, image, type, extra = "", robots = "" }) {
  const lines = [];
  if (robots) lines.push(`<meta name="robots" content="${robots}">`);
  if (url) lines.push(`<link rel="canonical" href="${esc(url)}">`);
  if (url) {
    lines.push(
      `<meta property="og:site_name" content="NewsTech">`,
      `<meta property="og:type" content="${type}">`,
      `<meta property="og:title" content="${esc(title)}">`,
      `<meta property="og:description" content="${esc(desc)}">`,
      `<meta property="og:url" content="${esc(url)}">`,
      `<meta property="og:image" content="${esc(image)}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${esc(title)}">`,
      `<meta name="twitter:description" content="${esc(desc)}">`,
      `<meta name="twitter:image" content="${esc(image)}">`,
      `<meta name="theme-color" content="#6C3FA0">`
    );
  }
  if (extra) lines.push(extra);
  return `<!-- seo:start -->\n${lines.map((l) => "  " + l).join("\n")}\n  <!-- seo:end -->\n`;
}

/* put the block straight after the meta description (removing any earlier block) */
function insertSeo(html, block) {
  html = html.replace(SEO_BLOCK, "");
  const re = /<meta\s+name="description"[^>]*>\n?/;
  if (!re.test(html)) throw new Error("meta description not found");
  return html.replace(re, (m) => (m.endsWith("\n") ? m : m + "\n") + "  " + block);
}

const descOf = (html) => {
  const tag = (html.match(/<meta\s+name="description"[^>]*>/) || [""])[0];
  return ((tag.match(/content="([^"]*)"/) || [, ""])[1]).replace(/\s+/g, " ").trim();
};

/* ---------- 1. top-level pages ---------- */
const PAGES = [
  { file: "index.html", url: `${SITE}/`, title: "NewsTech | Clear Technology News and Blogs for Students", jsonld: true },
  { file: "news.html", url: `${SITE}/news.html` },
  { file: "blogs.html", url: `${SITE}/blogs.html` },
  { file: "categories.html", url: `${SITE}/categories.html` },
  { file: "about.html", url: `${SITE}/about.html` },
];

PAGES.forEach((p) => {
  let html = read(p.file);
  const desc = descOf(html);
  if (p.title) html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(p.title)}</title>`);
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [, "NewsTech"])[1].trim();
  const extra = p.jsonld
    ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "NewsTech", url: `${SITE}/`, description: desc, inLanguage: "en" })}</script>`
    : "";
  html = insertSeo(html, seoBlock({ url: p.url, title, desc, image: absImage(), type: "website", extra }));
  write(p.file, html);
});

/* ---------- 2. fix the broken Telegram link, noindex the old article page ---------- */
let tpl = read("article.html").replace("https://t.me/@suong_sxilwix", "https://t.me/suong_sxilwix");
write("article.html", insertSeo(tpl, seoBlock({ robots: "noindex, follow" })));
tpl = tpl.replace(SEO_BLOCK, "");

/* ---------- 3. pre-built article pages ---------- */
function prerender(a) {
  // Mirrors the markup built in js/article.js (which re-renders the same thing in the browser).
  const isBlog = a.type === "blog";
  const section = isBlog ? ["Blogs", "../blogs.html"] : ["News", "../news.html"];
  const crumb = "text-sm text-muted";
  const sep = `before:mr-2.5 before:ml-2.5 before:text-purple-300 before:content-['/']`;
  const body = a.body
    .map((b) =>
      b.h ? `<h2>${esc(b.h)}</h2>` : b.p ? `<p>${esc(b.p)}</p>`
      : b.list ? `<ul>${b.list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
      : b.ol ? `<ol>${b.ol.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>` : "")
    .join("");
  let source = "";
  if (a.source && a.source.name) {
    const link = a.source.url
      ? `<a class="font-medium text-purple hover:text-purple-800" href="${esc(a.source.url)}" target="_blank" rel="noopener noreferrer">${esc(a.source.name)}</a>`
      : `<span class="font-medium text-ink">${esc(a.source.name)}</span>`;
    source = `<aside class="mt-8 max-w-[640px] rounded-2xl border border-purple-100 bg-white px-[22px] py-4 text-sm text-muted" aria-label="Source">Source: ${link}. This is a short summary written by NewsTech in our own words. Read the original report for full details.</aside>`;
  }
  const hero = a.image
    ? `<img src="../${esc(encodeURI(a.image))}" alt="${esc(a.title)}">`
    : "";
  return (
    `<nav class="mb-7" aria-label="Breadcrumb"><ol class="flex flex-wrap gap-x-0 gap-y-1 ${crumb}">` +
    `<li><a class="hover:text-purple" href="../index.html">Home</a></li>` +
    `<li class="${sep}"><a class="hover:text-purple" href="${section[1]}">${section[0]}</a></li>` +
    `<li class="${sep}"><a class="hover:text-purple" href="../categories.html?cat=${esc(a.category)}">${esc(catName(a.category))}</a></li></ol></nav>` +
    `<header class="mb-7 grid justify-items-start gap-4"><div><span class="inline-block rounded-full bg-purple-300 px-3 py-[5px] font-body text-sm font-medium text-purple-900">${esc(catName(a.category))}</span></div>` +
    `<h1 class="font-head text-[32px] font-bold leading-[1.2] text-ink min-[641px]:text-[40px]">${esc(a.title)}</h1>` +
    `<p class="max-w-[64ch] text-base text-muted">${esc(a.excerpt)}</p>` +
    `<div class="flex flex-wrap gap-x-[18px] gap-y-0.5 text-sm leading-[1.6] text-muted"><span>By ${esc(a.author)}</span><span>${esc(fmtDate(a.date))}</span><span>${readMin(a)} min read</span></div></header>` +
    `<div class="mb-9 aspect-video overflow-hidden rounded-2xl bg-navy [&>img]:block [&>img]:h-full [&>img]:w-full [&>img]:object-cover">${hero}</div>` +
    `<div class="prose prose-slate max-w-[640px] prose-headings:font-head prose-headings:text-ink prose-h2:mb-2 prose-h2:mt-8 prose-h2:text-2xl prose-p:text-ink prose-a:text-purple prose-li:marker:text-purple" id="article-body">${body}</div>` +
    source +
    `<footer class="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-purple-100 pt-6"><ul class="flex flex-wrap gap-2" aria-label="Tags">${a.tags.map((t) => `<li class="rounded-full border border-purple-300 bg-white px-3 py-1 text-sm text-purple-800">${esc(t)}</li>`).join("")}</ul></footer>`
  );
}

function jsonLd(a, url) {
  const ld = {
    "@context": "https://schema.org",
    "@type": a.type === "blog" ? "BlogPosting" : "NewsArticle",
    headline: clip(a.title, 110),
    description: a.excerpt,
    image: [absImage(a.image)],
    datePublished: cappedDate(a.date),
    author: { "@type": "Organization", name: a.author },
    publisher: { "@type": "Organization", name: "NewsTech", url: `${SITE}/` },
    mainEntityOfPage: url,
    articleSection: catName(a.category),
    keywords: a.tags.join(", "),
    inLanguage: "en",
  };
  if (a.source && a.source.name) {
    ld.isBasedOn = { "@type": "CreativeWork", name: a.source.name };
    if (a.source.url) ld.isBasedOn.url = a.source.url;
  }
  return `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>`;
}

fs.mkdirSync(path.join(SRC, "articles"), { recursive: true });
const wanted = new Set(ARTICLES.map((a) => a.id + ".html"));
fs.readdirSync(path.join(SRC, "articles")).forEach((f) => {
  if (f.endsWith(".html") && !wanted.has(f)) fs.unlinkSync(path.join(SRC, "articles", f)); // article removed from data.js
});

ARTICLES.forEach((a) => {
  const url = `${SITE}/articles/${a.id}.html`;
  const desc = clip(a.excerpt, 155);
  let html = tpl;
  const pageTitle = a.title.length + 11 <= 65 ? `${a.title} | NewsTech` : a.title; // keep the <title> short enough for search results
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(pageTitle)}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(desc)}$2`);
  html = html.replace(/<html lang="en"([^>]*)>/, `<html lang="en"$1 data-base="../">`);
  html = html.replace(/(<article[^>]*id="article-root")([^>]*>)[\s\S]*?(<\/article>)/, `$1 data-id="${esc(a.id)}"$2${prerender(a)}$3`);
  // every relative href/src now has to climb out of /articles/
  html = html.replace(/(\s(?:href|src))="(?!(?:https?:|mailto:|tel:|#|\/|\.\.\/))([^"]*)"/g, '$1="../$2"');
  html = insertSeo(html, seoBlock({ url, title: a.title, desc, image: absImage(a.image), type: "article", extra: jsonLd(a, url) }));
  write(`articles/${a.id}.html`, html);
});

/* ---------- 4. sitemap ---------- */
const urls = PAGES.map((p) => `  <url><loc>${p.url}</loc></url>`).concat(
  ARTICLES.slice().sort((x, y) => y.date.localeCompare(x.date)).map((a) => `  <url><loc>${SITE}/articles/${a.id}.html</loc><lastmod>${cappedDate(a.date)}</lastmod></url>`)
);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);

console.log(`SEO build done: ${PAGES.length} pages tagged, ${ARTICLES.length} article pages written, sitemap has ${urls.length} URLs.`);
