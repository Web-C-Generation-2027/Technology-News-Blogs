/*
  categories.js
  Shows every category as a tile. When the address has ?cat=slug, the
  articles in that category are listed underneath.
*/
(function () {
  var grid = document.getElementById("category-tiles");
  var out = document.getElementById("category-results");
  var selected = new URLSearchParams(location.search).get("cat");
  var current = CATEGORIES.find(function (c) { return c.slug === selected; });

  grid.innerHTML = CATEGORIES.map(function (c) {
    var active = current && current.slug === c.slug;
    return catTile(c, { large: true, active: active });
  }).join("");

  if (!current) {
    out.innerHTML = '<p class="py-2 text-muted">Choose a category to see its news and blog posts.</p>';
    return;
  }

  var list = ARTICLES.filter(function (a) { return a.category === current.slug; }).sort(byNewest);
  document.title = current.name + " | Technology News & Blogs";
  out.innerHTML = '<h2 class="mb-1 font-head text-[32px] font-semibold leading-[1.3] text-purple">' + esc(current.name) + "</h2>" +
    '<p class="mt-1.5 text-muted">' + esc(current.description) + "</p>" +
    '<div class="mt-7 grid gap-5">' + list.map(function (a) { return newsRow(a, true); }).join("") + "</div>";
})();
