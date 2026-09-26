/*
  article.js
  Loads one article into article.html using the ?id= value in the address,
  shows related articles, and drives the reading progress bar and share button.
*/
(function () {
  var root = document.getElementById("article-root");
  var id = new URLSearchParams(location.search).get("id");
  var a = ARTICLES.find(function (x) { return x.id === id; });

  if (!a) {
    document.title = "Article not found | Technology News & Blogs";
    root.innerHTML = '<div class="empty"><h1 class="empty-title">Article not found</h1>' +
      "<p>The article you are looking for does not exist or has moved. Browse the latest stories instead.</p>" +
      '<div class="hero-actions"><a class="btn btn-primary" href="news.html">Go to news</a>' +
      '<a class="btn btn-outline-dark" href="blogs.html">Go to blogs</a></div></div>';
    return;
  }

  var isBlog = a.type === "blog";
  var section = isBlog ? { label: "Blogs", url: "blogs.html" } : { label: "News", url: "news.html" };

  document.title = a.title + " | Technology News & Blogs";
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", a.excerpt);

  var current = document.querySelector('[data-nav="' + (isBlog ? "blogs" : "news") + '"]');
  if (current) current.setAttribute("aria-current", "page");

  var body = a.body.map(function (b) {
    if (b.h) return "<h2>" + esc(b.h) + "</h2>";
    if (b.p) return "<p>" + esc(b.p) + "</p>";
    if (b.list) return "<ul>" + b.list.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    if (b.ol) return "<ol>" + b.ol.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ol>";
    return "";
  }).join("");

  root.innerHTML =
    '<nav class="breadcrumb" aria-label="Breadcrumb"><ol>' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="' + section.url + '">' + section.label + "</a></li>" +
    '<li><a href="categories.html?cat=' + a.category + '">' + esc(categoryOf(a.category).name) + "</a></li>" +
    "</ol></nav>" +
    '<header class="article-head">' +
    "<div>" + pillHTML(a, false) + "</div>" +
    "<h1>" + esc(a.title) + "</h1>" +
    '<p class="article-lead">' + esc(a.excerpt) + "</p>" +
    metaHTML(a) +
    "</header>" +
    '<div class="cover cover-article">' + coverSVG(a) + "</div>" +
    '<div class="article-body" id="article-body">' + body + "</div>" +
    '<footer class="article-foot">' +
    '<ul class="tags" aria-label="Tags">' + a.tags.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" +
    '<div class="share"><button type="button" class="btn btn-outline-dark" id="copy-link">Copy link</button>' +
    '<span id="copy-status" class="share-status" role="status"></span></div>' +
    "</footer>";

  /* Related articles: same category first, then the same type, newest first */
  var related = ARTICLES.filter(function (x) { return x.id !== a.id; })
    .sort(function (x, y) {
      var sx = (x.category === a.category ? 2 : 0) + (x.type === a.type ? 1 : 0);
      var sy = (y.category === a.category ? 2 : 0) + (y.type === a.type ? 1 : 0);
      return sy - sx || byNewest(x, y);
    }).slice(0, 3);
  document.getElementById("related-grid").innerHTML = related.map(function (r) { return articleCard(r); }).join("");
  document.getElementById("related").hidden = false;

  /* Copy link */
  var status = document.getElementById("copy-status");
  function legacyCopy(text) {
    var t = document.createElement("textarea");
    t.value = text;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    document.body.removeChild(t);
    return ok;
  }
  document.getElementById("copy-link").addEventListener("click", function () {
    var url = location.href;
    var done = function (ok) { status.textContent = ok ? "Link copied" : "Copy the address from your browser bar"; };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { done(true); }, function () { done(legacyCopy(url)); });
    } else {
      done(legacyCopy(url));
    }
  });

  /* Reading progress */
  var bar = document.querySelector("#progress span");
  var target = document.getElementById("article-body");
  var ticking = false;
  function update() {
    var rect = target.getBoundingClientRect();
    var total = rect.height - window.innerHeight * 0.6;
    var done = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - rect.top) / Math.max(total, 1)));
    bar.style.transform = "scaleX(" + done.toFixed(3) + ")";
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
