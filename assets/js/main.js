'use strict';

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  hamburger.addEventListener('click', () => {
    const shouldOpen = !navMenu.classList.contains('open');
    navMenu.classList.toggle('open', shouldOpen);
    hamburger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', shouldOpen);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', event => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const targetId = anchor.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Teşekkür ederiz. En kısa zamanda sizinle iletişime geçeceğiz.');
    contactForm.reset();
  });
}
