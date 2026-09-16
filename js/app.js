/**
 * Core Application Controller // Ayush Thakur Portfolio
 * Lifecycle, Scroll Spy, Desktop RGB Cursor, SVG Path Replay, Toast Notifications
 */

(function () {
  'use strict';

  // --- Header Scroll Effect ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      if (window.SoundEngine) window.SoundEngine.click();
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('reveal-visible'));
  }

  // --- Desktop RGB Cursor Follower ---
  const cursorFollower = document.querySelector('.rgb-cursor');
  if (cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      // Smooth spring delay
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      cursorFollower.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Expand cursor on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-category-card, .dossier-card');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hovering');
      });
      target.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hovering');
      });
    });
  }

  // --- Path Drawing Name Interaction (Replay / Glimmer) ---
  const pathHeroContainer = document.querySelector('.path-drawing-container');
  if (pathHeroContainer) {
    pathHeroContainer.addEventListener('click', () => {
      const texts = pathHeroContainer.querySelectorAll('text, path');
      texts.forEach((el) => {
        el.style.animation = 'none';
        void el.offsetWidth; // Trigger reflow
        el.style.animation = 'drawStroke 3.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, fillAfterDraw 3.8s ease forwards';
      });
      if (window.SoundEngine) {
        window.SoundEngine.action();
      }
    });
  }

  // --- Toast Notification System ---
  window.showToast = function (message, duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderColor = 'var(--rgb-magenta)';
    toast.innerHTML = `
      <span style="color: var(--rgb-cyan);">✔</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    if (window.SoundEngine) {
      window.SoundEngine.action();
    }

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  };

  // --- Contact Transmission Form ---
  const contactForm = document.getElementById('transmission-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const msgInput = document.getElementById('form-msg');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const msg = msgInput?.value.trim() || '';

      if (!name || !email || !msg) {
        window.showToast('Please fill in all transmission fields.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>TRANSMITTING PACKET...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>TRANSMIT PACKET</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          `;
        }

        contactForm.reset();
        window.showToast('Transmission logged! Redirecting to mail client.');

        // Format mailto
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(
          `Portfolio Contact from ${name}`
        )}&body=${encodeURIComponent(`Sender: ${name}\nContact: ${email}\n\nMessage:\n${msg}`)}`;
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  // --- Keyboard Shortcut for Terminal (Backquote `) ---
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const term = document.getElementById('terminal');
      const termInput = document.getElementById('term-cmd-input');
      if (term) {
        term.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => termInput?.focus(), 400);
      }
    }
  });
})();
