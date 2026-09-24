// Fill the footer "Last updated" month from the repo's latest push date.
// Falls back to the month written in the HTML if the GitHub API is unavailable.
(function () {
  var KEY = 'last-updated';
  var API = 'https://api.github.com/repos/johanobandoc/johanobandoc.github.io';

  function render(iso) {
    var text = new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    document.querySelectorAll('.last-updated').forEach(function (el) {
      el.textContent = text;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    try {
      var cached = sessionStorage.getItem(KEY);
      if (cached) return render(cached);
    } catch (e) {}
    fetch(API)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (repo) {
        if (!repo || !repo.pushed_at) return;
        try { sessionStorage.setItem(KEY, repo.pushed_at); } catch (e) {}
        render(repo.pushed_at);
      })
      .catch(function () {});
  });
})();
