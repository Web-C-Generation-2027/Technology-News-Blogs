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
    var count = ARTICLES.filter(function (a) { return a.category === c.slug; }).length;
    var active = current && current.slug === c.slug;
    return '<li data-reveal><a class="cat-tile cat-tile-large' + (active ? " is-active" : "") + '" href="categories.html?cat=' + c.slug + '#category-results"' +
      (active ? ' aria-current="true"' : "") + ">" +
      '<span class="cat-icon">' + icon(c.slug) + "</span>" +
      '<span class="cat-text"><span class="cat-name">' + esc(c.name) + "</span>" +
      '<span class="cat-desc">' + esc(c.description) + "</span>" +
      '<span class="cat-count">' + count + (count === 1 ? " article" : " articles") + "</span></span></a></li>";
  }).join("");

  if (!current) {
    out.innerHTML = '<p class="hint">Choose a category to see its news and blog posts.</p>';
    return;
  }

  var list = ARTICLES.filter(function (a) { return a.category === current.slug; }).sort(byNewest);
  document.title = current.name + " | Technology News & Blogs";
  out.innerHTML = '<h2>' + esc(current.name) + "</h2>" +
    '<p class="section-intro">' + esc(current.description) + "</p>" +
    '<div class="news-list">' + list.map(function (a) { return newsRow(a, true); }).join("") + "</div>";
})();
