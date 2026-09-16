// Cookiez — small site behaviors. No build step, no dependencies.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu after tapping a link (mobile)
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year, so nobody has to remember to update it
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
