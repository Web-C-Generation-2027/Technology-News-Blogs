/*
  listing.js
  Powers news.html and blogs.html: search, category filter, sorting and
  "Show more". The page type comes from the data-type attribute on <main>.
*/
(function () {
  var main = document.querySelector("[data-type]");
  var type = main.dataset.type;                 // "news" or "blog"
  var PAGE_SIZE = 6;

  var items = ARTICLES.filter(function (a) { return a.type === type; });
  var results = document.getElementById("results");
  var count = document.getElementById("result-count");
  var chips = document.getElementById("chips");
  var search = document.getElementById("search");
  var sort = document.getElementById("sort");
  var more = document.getElementById("show-more");

  var params = new URLSearchParams(location.search);
  var state = {
    q: params.get("q") || "",
    cat: "all",
    sort: "newest",
    shown: PAGE_SIZE
  };
  var requested = params.get("cat");
  if (CATEGORIES.some(function (c) { return c.slug === requested; })) state.cat = requested;

  search.value = state.q;

  /* Filter chips: only categories that have at least one article on this page */
  var slugs = CATEGORIES.filter(function (c) {
    return items.some(function (a) { return a.category === c.slug; });
  });
  chips.innerHTML = [{ slug: "all", name: "All" }].concat(slugs).map(function (c) {
    return '<button type="button" class="chip cursor-pointer rounded-full border border-purple-500 bg-white px-4 py-2 font-body text-sm font-medium text-ink transition-colors duration-200 hover:border-cyan hover:text-purple aria-pressed:border-purple aria-pressed:bg-purple aria-pressed:text-white" data-cat="' + c.slug + '" aria-pressed="false">' + esc(c.name) + "</button>";
  }).join("");

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var list = items.filter(function (a) {
      var inCat = state.cat === "all" || a.category === state.cat;
      var hay = (a.title + " " + a.excerpt + " " + a.tags.join(" ") + " " + categoryOf(a.category).name).toLowerCase();
      return inCat && (!q || hay.indexOf(q) !== -1);
    });
    if (state.sort === "oldest") list.sort(function (a, b) { return byNewest(b, a); });
    else if (state.sort === "short") list.sort(function (a, b) { return readMinutes(a) - readMinutes(b) || byNewest(a, b); });
    else list.sort(byNewest);
    return list;
  }

  function render(focusIndex) {
    var list = filtered();
    var visible = list.slice(0, state.shown);
    var label = type === "blog" ? "blog post" : "news article";

    chips.querySelectorAll(".chip").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.cat === state.cat));
    });

    if (!list.length) {
      results.innerHTML = '<div class="grid justify-items-center gap-3 rounded-2xl border border-dashed border-purple-500 bg-white px-6 py-10 text-center">' +
        '<h2 class="text-2xl leading-[1.4]">No results</h2>' +
        '<p class="max-w-[46ch] text-muted">Nothing matches your search. Try a different keyword or clear the filters.</p>' +
        '<button type="button" class="' + BTN_PRIMARY + '" id="clear">Clear filters</button></div>';
      document.getElementById("clear").addEventListener("click", function () {
        state.q = ""; state.cat = "all"; search.value = ""; state.shown = PAGE_SIZE;
        render();
      });
    } else {
      results.innerHTML = visible.map(function (a) {
        return type === "blog" ? articleCard(a) : newsRow(a);
      }).join("");
    }

    var text = list.length + " " + label + (list.length === 1 ? "" : "s");
    if (state.cat !== "all") text += " in " + categoryOf(state.cat).name;
    if (state.q.trim()) text += " matching \u201C" + state.q.trim() + "\u201D";
    count.textContent = text;

    more.hidden = list.length <= state.shown;

    if (typeof focusIndex === "number" && results.children[focusIndex]) {
      var link = results.children[focusIndex].querySelector("a");
      if (link) link.focus();
    }

    try {
      var qs = new URLSearchParams();
      if (state.q.trim()) qs.set("q", state.q.trim());
      if (state.cat !== "all") qs.set("cat", state.cat);
      history.replaceState(null, "", location.pathname + (qs.toString() ? "?" + qs : ""));
    } catch (err) { /* some browsers block this on local files; safe to ignore */ }
  }

  var timer;
  search.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      state.q = search.value;
      state.shown = PAGE_SIZE;
      render();
    }, 200);
  });

  sort.addEventListener("change", function () {
    state.sort = sort.value;
    state.shown = PAGE_SIZE;
    render();
  });

  chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.cat = btn.dataset.cat;
    state.shown = PAGE_SIZE;
    render();
  });

  more.addEventListener("click", function () {
    var previous = results.children.length;
    state.shown += PAGE_SIZE;
    render(previous);
  });

  render();
})();
