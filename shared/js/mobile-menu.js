document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburgerBtn');
  var drawer = document.getElementById('mobileMenuDrawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    var open = drawer.classList.toggle('open');
    btn.classList.toggle('active', open);
  });

  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('open');
      btn.classList.remove('active');
    });
  });
});
