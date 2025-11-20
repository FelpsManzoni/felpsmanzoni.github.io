(function () {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;

  function openMenu() {
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    // animate out: keep .open, add .closing to trigger CSS fade-out
    nav.classList.add('closing');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');

    nav.addEventListener(
      'transitionend',
      () => {
        nav.classList.remove('open', 'closing');
        document.body.classList.remove('menu-open');
      },
      { once: true }
    );
  }

  function toggle() {
    (btn.getAttribute('aria-expanded') === 'true') ? closeMenu() : openMenu();
  }

  btn.addEventListener('click', toggle);

  // click on dark overlay closes
  nav.addEventListener('click', (e) => { if (e.target === nav) closeMenu(); });

  // ESC closes
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // If user resizes to desktop, ensure overlay is closed to avoid weird states
  const MOBILE_BP = 640;
  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BP && nav.classList.contains('open')) {
      nav.classList.remove('open', 'closing');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });
})();
