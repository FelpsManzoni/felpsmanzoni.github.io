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

(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-toggle-icon');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  if (!toggle) return;

  function currentTheme() {
    return root.getAttribute('data-theme') || 'light';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    if (icon) {
      icon.textContent = theme === 'dark' ? '☾' : '☀';
    }

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    toggle.setAttribute('title', `Switch to ${nextTheme} mode`);
  }

  function applyPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      return;
    }

    setTheme(media.matches ? 'dark' : 'light');
  }

  applyPreferredTheme();

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });

  media.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
      setTheme(media.matches ? 'dark' : 'light');
    }
  });
})();
