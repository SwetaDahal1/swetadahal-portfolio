// Light / dark theme toggle (remembers the choice in the browser)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  try { var s = localStorage.getItem('theme'); if (s) root.setAttribute('data-theme', s); } catch(e){}
  btn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e){}
  });
})();
