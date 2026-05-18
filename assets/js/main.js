document.addEventListener('DOMContentLoaded', () => {
  const header   = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const overlay  = document.getElementById('nav-overlay');
  const pageTop  = document.getElementById('page-top');

  // Header scroll + page-top visibility
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    header?.classList.toggle('scrolled', scrolled);
    pageTop?.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    const active = hamburger.classList.toggle('active');
    overlay?.classList.toggle('active', active);
    document.body.style.overflow = active ? 'hidden' : '';
  });

  // Close overlay on nav link click
  overlay?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Page top
  pageTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Menu tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
});
