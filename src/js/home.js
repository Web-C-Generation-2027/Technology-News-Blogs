/*
  home.js
  Builds the home page: headline feed in the hero, latest news,
  category tiles, latest blogs, the stats strip and the newsletter form.
*/
(function () {
  var news = ARTICLES.filter(function (a) { return a.type === "news"; }).sort(byNewest);
  var blogs = ARTICLES.filter(function (a) { return a.type === "blog"; }).sort(byNewest);

  /* Hero: latest headlines */
  var feed = document.getElementById("hero-feed");
  feed.innerHTML = news.slice(0, 4).map(function (a, i) {
    return '<li class="border-t border-white/[0.12] first:border-t-0 opacity-0 [animation:feed-in_.5s_ease_both] [animation-delay:calc(' + i + '*90ms_+_150ms)]" style="animation-fill-mode:both">' +
      '<a class="group grid gap-0.5 px-6 py-3.5 text-white no-underline transition-colors hover:bg-cyan/10" href="' + articleUrl(a) + '">' +
      '<span class="text-sm text-cyan">' + esc(categoryOf(a.category).name) + "</span>" +
      '<span class="font-head text-base font-semibold group-hover:text-cyan">' + esc(a.title) + "</span>" +
      '<span class="text-sm text-purple-300">' + esc(formatDate(a.date)) + "</span></a></li>";
  }).join("");

  /* Latest news: one featured story plus a short list */
  var featured = news.find(function (a) { return a.featured; }) || news[0];
  document.getElementById("featured-news").innerHTML = articleCard(featured, "h-full");
  document.getElementById("news-list").innerHTML = news
    .filter(function (a) { return a !== featured; })
    .slice(0, 4)
    .map(compactRow).join("");

  /* Categories */
  document.getElementById("category-grid").innerHTML = CATEGORIES.map(function (c) {
    return catTile(c);
  }).join("");

  /* Blogs */
  document.getElementById("blog-grid").innerHTML = blogs.slice(0, 3).map(function (a) {
    return articleCard(a);
  }).join("");

  /* Stats strip: real counts from data.js, animated in main.js when scrolled into view */
  var statMap = {
    "stat-articles": ARTICLES.length,
    "stat-categories": CATEGORIES.length,
    "stat-news": news.length,
    "stat-blogs": blogs.length
  };
  Object.keys(statMap).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("data-count-to", statMap[id]);
  });

  /* Newsletter (demo: connect to your email service to send real emails) */
  var form = document.getElementById("newsletter-form");
  var input = document.getElementById("newsletter-email");
  var status = document.getElementById("newsletter-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isValidEmail(input.value)) {
      input.setAttribute("aria-invalid", "true");
      status.className = "mt-3 text-sm text-err";
      status.textContent = "Enter a valid email address, for example name@example.com.";
      input.focus();
      return;
    }
    input.removeAttribute("aria-invalid");
    status.className = "mt-3 text-sm font-medium text-purple-900";
    status.textContent = "Thanks for subscribing. Your first digest arrives this Friday.";
    form.reset();
  });
})();
