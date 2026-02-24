/* ══════════════════════════════════
   Power Financial — Main JS
   Mobile nav, FAQ accordion, Schedule accordion
══════════════════════════════════ */

(function () {
  'use strict';

  /* ─── MOBILE NAV TOGGLE ─── */
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMobile.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ─── STICKY NAV SCROLL ─── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ─── FAQ ACCORDION ─── */
  document.querySelectorAll('.faq-q').forEach(function (question) {
    question.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const toggle = this.querySelector('.faq-toggle');
      const isOpen = item.classList.contains('open');

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('open');
        var t = el.querySelector('.faq-toggle');
        if (t) t.textContent = '+';
      });

      // Open clicked item (if it wasn't already open)
      if (!isOpen) {
        item.classList.add('open');
        if (toggle) toggle.textContent = '−';
      }
    });
  });

  /* ─── SCHEDULE DAY ACCORDION (The Cookout) ─── */
  document.querySelectorAll('.schedule-day-header').forEach(function (header) {
    header.addEventListener('click', function () {
      const day = this.closest('.schedule-day');
      const toggle = this.querySelector('.schedule-toggle');
      const isOpen = day.classList.contains('open');

      // Close all schedule days
      document.querySelectorAll('.schedule-day').forEach(function (el) {
        el.classList.remove('open');
        var t = el.querySelector('.schedule-toggle');
        if (t) t.textContent = '+';
      });

      // Open clicked day (if it wasn't already open)
      if (!isOpen) {
        day.classList.add('open');
        if (toggle) toggle.textContent = '−';
      }
    });
  });

  /* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
