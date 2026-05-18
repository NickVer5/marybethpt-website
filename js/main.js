// =============================================================================
// AIPT site script
// =============================================================================

// Mobile nav toggle
(function() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
})();

// Reveal-on-scroll. Content is visible by default; we add a class to
// <html> to opt in to the hidden-until-scrolled behavior — only when
// JavaScript actually runs and IntersectionObserver is supported. This
// way the site never appears blank waiting for JS to load.
(function() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) return; // fall through: content stays visible
  document.documentElement.classList.add('js-reveal-active');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => observer.observe(el));
})();

// Contact form — Formspree submission
// Replace YOUR_FORMSPREE_ID with the form ID from formspree.io after signup
(function() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const originalText = button ? button.textContent : '';
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.style.display = 'none';
        const success = document.querySelector('.form-success');
        if (success) success.classList.add('show');
      } else {
        if (button) { button.disabled = false; button.textContent = originalText; }
        alert('Something went wrong. Please call or email directly.');
      }
    } catch (err) {
      if (button) { button.disabled = false; button.textContent = originalText; }
      alert('Something went wrong. Please call or email directly.');
    }
  });
})();

