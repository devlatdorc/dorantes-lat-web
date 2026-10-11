(function () {
  'use strict';
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-nav');
  const currentYear = document.getElementById('current-year');

  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
  if (!button || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menú');
  }

  button.addEventListener('click', function () {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('is-open', !isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
    button.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  });
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) closeMenu();
  });
})();
