const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const navLinks = document.querySelectorAll('.primary-nav a');
const year = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

const closeNavigation = () => {
  if (!navToggle || !nav) return;

  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    nav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('nav-open', !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const sections = [...document.querySelectorAll('main section[id]')];

if ('IntersectionObserver' in window && sections.length > 0) {
  const activeNavObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => activeNavObserver.observe(section));
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'Consultation request').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      if (formStatus) {
        formStatus.textContent = 'Please complete all fields before sending.';
      }
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailto = `mailto:altacalosoft@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (formStatus) {
      formStatus.textContent = 'Opening your email client to send the message.';
    }

    window.location.href = mailto;
  });
}
