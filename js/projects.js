/**
 * Projects Engine & Modal Inspector // Ayush Thakur Portfolio
 * Detailed technical breakdown for:
 * 01 - AgriSmart (Android / Java)
 * 02 - SpotOnJalgaon (PHP / Softanic Internship Capstone)
 * 03 - Smart AgriTech Dashboard (HTML / CSS / JS / AngularJS / APIs)
 */

const ProjectsManager = (function () {
  'use strict';

  const projectsData = {
    agrismart: {
      id: '01',
      title: 'AgriSmart',
      subtitle: 'Smart Agriculture Assistant & Decision Support Mobile Application',
      type: 'Android Application',
      stack: ['Java', 'Android Studio', 'APIs', 'OOP', 'Mobile Development'],
      badge: 'Diploma Project',
      origin: 'Developed as part of diploma engineering project work (Diploma in CO @ Govt. Polytechnic, Jalgaon).',
      imageUrl: 'assets/images/agrismart_dashboard.jpg',
      imageClass: 'portrait',
      screenshots: [
        { url: 'assets/images/agrismart_dashboard.jpg', label: '01 // Dashboard & Advisory (Dark)', tab: 'Dark UI' },
        { url: 'assets/images/agrismart_light.jpg', label: '02 // Dashboard & Advisory (Light)', tab: 'Light UI' },
        { url: 'assets/images/agrismart_dark.jpg', label: '03 // Agro-Telemetry & Advisory', tab: 'Telemetry' },
        { url: 'assets/images/agrismart_crop_recommend.jpg', label: '04 // Crop Prediction Engine', tab: 'Crop Predict' },
        { url: 'assets/images/agrismart_diagnosis.jpg', label: '05 // Vision AI Disease Scanner', tab: 'Diagnosis' },
        { url: 'assets/images/agrismart_farming_tips.jpg', label: '06 // Agronomic Best Practices', tab: 'Farming Tips' }
      ],
      overview:
        'AgriSmart is an agriculture-oriented mobile application built to provide farmers with practical tools, live agro-climatic intelligence, and vital market data directly on Android devices, designed for resilience and intuitive field usage.',
      modules: [
        {
          title: 'Agro-Weather Telemetry',
          desc: 'Integrates meteorological endpoints to provide localized precipitation forecasts, humidity thresholds, and temperature indices crucial for harvest and sowing operations.'
        },
        {
          title: 'Crop Recommendation Logic',
          desc: 'Advisory evaluation mapping seasonal patterns and soil conditions to recommend suitable crop varieties for optimized yield.'
        },
        {
          title: 'APMC Mandi Price Monitoring',
          desc: 'Monitors regional commodity rates across agricultural markets, empowering farmers with transparent price discovery.'
        },
        {
          title: 'Crop Disease Detection (Early Concept)',
          desc: 'Visual diagnosis workflow concept for identifying common crop ailments and providing targeted treatment guidelines.'
        },
        {
          title: 'Farmer-Centric Utility Suite',
          desc: 'High-contrast typography, offline caching of critical data, and lightweight execution tailored for varied mobile hardware.'
        }
      ],
      architecture: [
        'Client: Native Android UI engineered in Java within Android Studio',
        'Networking: Asynchronous HTTP client threads managing external API communication',
        'Data: Local caching layer for resilient performance in low-connectivity areas'
      ],
      githubUrl: 'https://github.com/ayush-justdev',
      status: 'Functional Prototype // Diploma Project'
    },

    spotonjalgaon: {
      id: '02',
      title: 'SpotOnJalgaon',
      subtitle: 'Hyperlocal Venue Discovery & Reservation Management Platform',
      type: 'PHP Web Application',
      stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Database', 'Web Architecture'],
      badge: 'Softanic Internship Capstone',
      origin: 'Capstone and final project engineered during diploma internship at Softanic (Diploma in CO @ Govt. Polytechnic, Jalgaon).',
      imageUrl: 'assets/images/spoton_hero.png',
      liveUrl: 'https://spotonjalgaon.great-site.net/?i=1',
      screenshots: [
        { url: 'assets/images/spoton_hero.png', label: '01 // Hero & Discovery Interface', tab: 'Hero / Search' },
        { url: 'assets/images/spoton_library_search.png', label: '02 // Library & Category Filters', tab: 'Study Libraries' },
        { url: 'assets/images/spoton_grid.png', label: '03 // Venue Catalog Grid', tab: 'Catalog Grid' },
        { url: 'assets/images/spoton_listing.png', label: '04 // Listing & Booking Details', tab: 'Detail / Booking' }
      ],
      overview:
        'SpotOnJalgaon is a full-featured venue discovery and booking management web application built for Jalgaon city. It connects citizens with local facilities while providing venue owners and administrators with end-to-end management tools.',
      modules: [
        {
          title: 'Multicategory Venue Discovery',
          desc: 'Exploration catalog covering sports turfs, marriage banquet halls, study libraries, and gaming zones with real-time location details.'
        },
        {
          title: 'Booking Request Workflow',
          desc: 'End-to-end reservation system allowing customers to check time-slot availability and submit booking requests with instant status feedback.'
        },
        {
          title: 'Owner Portal & Venue Management',
          desc: 'Dedicated owner authentication, venue profile customization, slot scheduling, and reservation approval/rejection controls.'
        },
        {
          title: 'Admin Dashboard & Earnings Tracking',
          desc: 'Centralized administrative console with revenue analytics, booking frequency tracking, and platform moderation tools.'
        }
      ],
      architecture: [
        'Presentation: Semantic HTML5, CSS layout, client-side JavaScript filtering and form validation',
        'Backend Engine: Modular PHP request handling, session management, and role-based access control',
        'Data Tier: Relational database schema with relational tables for users, venues, bookings, and slots'
      ],
      githubUrl: 'https://github.com/ayush-justdev',
      status: 'Internship Capstone // Softanic'
    },

    smartagritech: {
      id: '03',
      title: 'Smart AgriTech Dashboard',
      subtitle: 'Real-Time Agronomic Telemetry, Yield Prediction & Farm Operations Suite',
      type: 'Web Application',
      stack: ['HTML', 'CSS', 'JavaScript', 'AngularJS', 'OpenWeatherMap API', 'data.gov.in API'],
      badge: 'Agronomic Web Suite',
      origin: 'Built to empower agricultural stakeholders with open government data and real-time weather APIs.',
      screenshots: [
        { label: '01 // Live API Ingestion & Telemetry Stream', tab: 'API Stream' },
        { label: '02 // Algorithmic Yield & Soil Chemistry Model', tab: 'Algorithm Core' },
        { label: '03 // End-to-End System Pipeline Topology', tab: 'Architecture' }
      ],
      overview:
        'A comprehensive agronomic web dashboard that aggregates open government data feeds and meteorological APIs to provide actionable farm management intelligence, yield estimation, and advisory tools.',
      modules: [
        {
          title: 'Live Weather Telemetry Dashboard',
          desc: 'Pulls dynamic metrics via OpenWeatherMap API, detailing rainfall probability, solar radiation, humidity, and wind velocity.'
        },
        {
          title: 'Open Data Market Integration',
          desc: 'Interfaces with data.gov.in APIs to fetch verified regional commodity rates and historical market price fluctuations.'
        },
        {
          title: 'Crop Advisory & Yield Calculator',
          desc: 'Algorithmic calculations estimating expected crop yield based on farm acreage, soil classification, and seasonal inputs.'
        },
        {
          title: 'Fertilizer Calculation & Task Manager',
          desc: 'Chemical and organic fertilizer requirement estimator coupled with an interactive task management board for farming cycles.'
        },
        {
          title: 'Adaptive Interface Mode',
          desc: 'Supports high-contrast dark and light display modes optimized for indoor study and direct outdoor sunlight readability.'
        }
      ],
      architecture: [
        'Frontend Architecture: Structured AngularJS client-side controllers and data two-way bindings',
        'API Integration: Asynchronous REST fetch handlers for OpenWeatherMap and data.gov.in endpoints',
        'State Management: Local storage persistence for user configuration, selected crops, and theme preferences'
      ],
      githubUrl: 'https://github.com/ayush-justdev',
      status: 'Completed Web Application'
    }
  };

  const modalOverlay = document.getElementById('project-modal');
  const modalContainer = document.getElementById('modal-content-area');

  function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project || !modalOverlay || !modalContainer) return;

    if (window.SoundEngine) {
      window.SoundEngine.action();
    }

    const tagsHtml = project.stack
      .map(
        (t) => `<span class="p-tech-tag" style="border-color: rgba(139, 92, 246, 0.35); color: var(--rgb-cyan);">${t}</span>`
      )
      .join('');

    const modulesHtml = project.modules
      .map(
        (m) => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.1rem;">
          <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: var(--rgb-cyan); font-size: 0.8rem;">▶</span> ${m.title}
          </h4>
          <p style="color: var(--text-secondary); font-size: 0.925rem; line-height: 1.65;">${m.desc}</p>
        </div>`
      )
      .join('');

    const archHtml = project.architecture
      .map(
        (a) => `
        <li style="font-family: var(--font-mono); font-size: 0.825rem; color: var(--text-secondary); display: flex; align-items: baseline; gap: 0.5rem;">
          <span style="color: var(--rgb-magenta);">//</span> ${a}
        </li>`
      )
      .join('');

    const imgHtml = project.imageUrl
      ? `
        <div class="modal-project-img-container">
          <img src="${project.imageUrl}" alt="${project.title} Preview" class="modal-project-img ${project.imageClass || ''}" />
        </div>`
      : '';

    const liveBtnHtml = project.liveUrl
      ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-rgb-primary" style="padding: 0.6rem 1.25rem; font-size: 0.8rem;">
          <span>Live Project ↗</span>
        </a>`
      : '';

    modalContainer.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="project-tag-type">${project.type}</span>
          <h2 style="font-family: var(--font-heading); font-size: 1.75rem; margin-top: 0.4rem; color: #fff;">
            ${project.title} <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;">// ARCHITECTURE</span>
          </h2>
        </div>
        <button class="modal-close-btn" id="modal-close" aria-label="Close modal">✕</button>
      </div>
      <div class="modal-body">
        ${imgHtml}
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${tagsHtml}</div>
        
        <div>
          <h3 style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--rgb-cyan); margin-bottom: 0.5rem;">
            // Project Context & Purpose
          </h3>
          <p style="color: var(--text-primary); font-size: 1.05rem; line-height: 1.7;">${project.overview}</p>
          <p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.5rem; font-style: italic;">
            ${project.origin}
          </p>
        </div>

        <div>
          <h3 style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--rgb-blue); margin-bottom: 0.75rem;">
            // Core Modules & Functional Capabilities
          </h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
            ${modulesHtml}
          </div>
        </div>

        <div style="background: rgba(13, 13, 20, 0.95); border: 1px dashed rgba(139, 92, 246, 0.35); border-radius: 8px; padding: 1.25rem;">
          <h3 style="font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--rgb-violet); margin-bottom: 0.75rem;">
            // Technical Pipeline & Architecture
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            ${archHtml}
          </ul>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
            STATUS: <span style="color: var(--rgb-cyan);">${project.status}</span>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${liveBtnHtml}
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="${project.liveUrl ? 'btn-rgb-secondary' : 'btn-rgb-primary'}" style="padding: 0.6rem 1.25rem; font-size: 0.8rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (window.SoundEngine) {
      window.SoundEngine.click();
    }
  }

  function init() {
    document.querySelectorAll('[data-inspect-project]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-inspect-project');
        openProjectModal(projectId);
      });
    });

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });
  }

  return {
    init: init,
    open: openProjectModal,
    close: closeModal
  };
})();

/**
 * Project Showcase Controller & Isolated 3D Screenshot Carousel Engine
 * 1. Outer Navigation: Switch between projects (01 AgriSmart, 02 SpotOnJalgaon, 03 Smart AgriTech)
 * 2. Inner 3D Carousel: Manages floating screenshot stack (prev/active/next) strictly confined to right column
 */
const ProjectShowcaseController = (function () {
  'use strict';

  let currentProjectIndex = 0;
  const screenshotCarousels = [];

  const PROJECT_TITLES = [
    { title: 'AGRISMART', color: 'var(--rgb-cyan)' },
    { title: 'SPOTONJALGAON', color: '#10b981' },
    { title: 'SMART AGRITECH', color: 'var(--rgb-magenta)' }
  ];

  /**
   * Class managing an isolated 3D screenshot carousel for a single project
   */
  class ScreenshotCarousel {
    constructor(container) {
      this.container = container;
      this.stage = container.querySelector('.screenshot-carousel-stage');
      this.cards = Array.from(container.querySelectorAll('.shot-3d-card'));
      this.tabs = Array.from(container.querySelectorAll('.shot-tab-btn'));
      this.prevBtn = container.querySelector('.shot-step-prev');
      this.nextBtn = container.querySelector('.shot-step-next');
      this.labelEl = container.querySelector('.screenshot-label-text');
      this.currentIndex = 0;
      this.totalCards = this.cards.length;
      this.cleanupTimer = null;
      this.isDragging = false;
      this.startX = 0;
      this.currentX = 0;

      if (!this.stage || this.totalCards === 0) return;

      this.bindEvents();
      this.updateState();
    }

    updateState(direction = 'next', outgoingIndex = -1) {
      if (this.cleanupTimer) {
        clearTimeout(this.cleanupTimer);
      }

      const total = this.totalCards;

      this.cards.forEach((card, idx) => {
        card.classList.remove(
          'active',
          'prev',
          'next',
          'hidden',
          'shot-in-from-right',
          'shot-in-from-left',
          'shot-out-to-left',
          'shot-out-to-right'
        );

        const offset = (idx - this.currentIndex + total) % total;

        if (offset === 0) {
          card.classList.add('active');
          if (direction === 'next' && outgoingIndex !== -1 && outgoingIndex !== this.currentIndex) {
            card.classList.add('shot-in-from-right');
          } else if (direction === 'prev' && outgoingIndex !== -1 && outgoingIndex !== this.currentIndex) {
            card.classList.add('shot-in-from-left');
          }
        } else if (offset === 1) {
          card.classList.add('next');
          if (direction === 'prev' && idx === outgoingIndex) {
            card.classList.add('shot-out-to-right');
          }
        } else if (offset === total - 1) {
          card.classList.add('prev');
          if (direction === 'next' && idx === outgoingIndex) {
            card.classList.add('shot-out-to-left');
          }
        } else {
          card.classList.add('hidden');
        }
      });

      // Cleanup directional animation classes after spring completes
      this.cleanupTimer = setTimeout(() => {
        this.cards.forEach((card) => {
          card.classList.remove(
            'shot-in-from-right',
            'shot-in-from-left',
            'shot-out-to-left',
            'shot-out-to-right'
          );
        });
      }, 550);

      // Update Active View Label
      const activeCard = this.cards[this.currentIndex];
      if (activeCard && this.labelEl) {
        const label = activeCard.getAttribute('data-label');
        if (label) {
          this.labelEl.innerHTML = label;
        }
      }

      // Update Tabs Strip
      this.tabs.forEach((tab, idx) => {
        if (idx === this.currentIndex) {
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        } else {
          tab.classList.remove('active');
          tab.setAttribute('aria-selected', 'false');
        }
      });
    }

    goTo(targetIndex, direction = 'next') {
      if (this.totalCards <= 1) return;

      if (targetIndex >= this.totalCards) targetIndex = 0;
      if (targetIndex < 0) targetIndex = this.totalCards - 1;
      if (targetIndex === this.currentIndex) return;

      const outgoing = this.currentIndex;
      this.currentIndex = targetIndex;

      this.updateState(direction, outgoing);

      if (window.SoundEngine) {
        window.SoundEngine.click();
      }
    }

    bindEvents() {
      // Step Buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.goTo(this.currentIndex - 1, 'prev');
        });
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.goTo(this.currentIndex + 1, 'next');
        });
      }

      // Tab Buttons
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          if (index !== this.currentIndex) {
            this.goTo(index, index > this.currentIndex ? 'next' : 'prev');
          }
        });
      });

      // Direct Clicking on 3D Floating Cards (Prev / Next)
      this.cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          // If clicking an external link inside the browser mockup bar, let it work
          if (e.target.closest('a, button, input')) return;

          if (card.classList.contains('next')) {
            e.preventDefault();
            this.goTo(this.currentIndex + 1, 'next');
          } else if (card.classList.contains('prev')) {
            e.preventDefault();
            this.goTo(this.currentIndex - 1, 'prev');
          } else if (card.classList.contains('active')) {
            // Clicking active mockup advances to next view
            this.goTo(this.currentIndex + 1, 'next');
          }
        });
      });

      // Pointer & Touch Swipe on Stage
      this.initSwipe();
    }

    initSwipe() {
      const stage = this.stage;
      if (!stage) return;

      const onStart = (e) => {
        this.isDragging = true;
        this.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        this.currentX = this.startX;
      };

      const onMove = (e) => {
        if (!this.isDragging) return;
        this.currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      };

      const onEnd = () => {
        if (!this.isDragging) return;
        this.isDragging = false;
        const deltaX = this.currentX - this.startX;
        const threshold = 40;

        if (deltaX < -threshold) {
          this.goTo(this.currentIndex + 1, 'next');
        } else if (deltaX > threshold) {
          this.goTo(this.currentIndex - 1, 'prev');
        }
      };

      stage.addEventListener('mousedown', onStart);
      stage.addEventListener('touchstart', onStart, { passive: true });
      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onMove, { passive: true });
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchend', onEnd);
    }
  }

  /**
   * Switch active project card (01 AgriSmart, 02 SpotOnJalgaon, 03 Smart AgriTech)
   */
  function switchProject(targetIndex) {
    const cards = document.querySelectorAll('.project-showcase-card');
    const totalProjects = cards.length;
    if (totalProjects === 0) return;

    if (targetIndex >= totalProjects) targetIndex = 0;
    if (targetIndex < 0) targetIndex = totalProjects - 1;
    if (targetIndex === currentProjectIndex && cards[targetIndex].classList.contains('active')) return;

    currentProjectIndex = targetIndex;

    // Update Project Cards Display
    cards.forEach((card, idx) => {
      if (idx === currentProjectIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update HUD Counter
    const counterEl = document.getElementById('project-current-num');
    if (counterEl) {
      counterEl.textContent = `0${currentProjectIndex + 1}`;
    }

    // Update Project Indicator Title & Dot
    const titleEl = document.getElementById('project-active-title');
    const dotEl = document.getElementById('project-indicator-dot');
    const meta = PROJECT_TITLES[currentProjectIndex] || PROJECT_TITLES[0];

    if (titleEl) {
      titleEl.textContent = meta.title;
    }
    if (dotEl) {
      dotEl.style.background = meta.color;
    }

    // Update Bottom Thumbnail Pills
    const thumbPills = document.querySelectorAll('.project-thumb-pill');
    thumbPills.forEach((pill, idx) => {
      if (idx === currentProjectIndex) {
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      }
    });

    if (window.SoundEngine) {
      window.SoundEngine.click();
    }
  }

  function init() {
    // 1. Initialize Inner Screenshot Carousels for each project
    const cards = document.querySelectorAll('.project-showcase-card');
    cards.forEach((card) => {
      screenshotCarousels.push(new ScreenshotCarousel(card));
    });

    // 2. Bind Outer Project Switcher Navigation Buttons
    const prevBtn = document.getElementById('project-prev-btn');
    const nextBtn = document.getElementById('project-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchProject(currentProjectIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchProject(currentProjectIndex + 1);
      });
    }

    // 3. Bind Bottom Quick Switcher Pills
    const thumbPills = document.querySelectorAll('.project-thumb-pill');
    thumbPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const target = parseInt(pill.getAttribute('data-project-target'), 10);
        if (!isNaN(target)) {
          switchProject(target);
        }
      });
    });

    // 4. Keyboard Arrow Navigation (when in projects section viewport)
    window.addEventListener('keydown', (e) => {
      const carouselEl = document.getElementById('projects');
      if (!carouselEl) return;
      const rect = carouselEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        if (e.key === 'ArrowRight') {
          if (e.shiftKey) {
            switchProject(currentProjectIndex + 1);
          } else {
            const activeCarousel = screenshotCarousels[currentProjectIndex];
            if (activeCarousel) {
              activeCarousel.goTo(activeCarousel.currentIndex + 1, 'next');
            }
          }
        } else if (e.key === 'ArrowLeft') {
          if (e.shiftKey) {
            switchProject(currentProjectIndex - 1);
          } else {
            const activeCarousel = screenshotCarousels[currentProjectIndex];
            if (activeCarousel) {
              activeCarousel.goTo(activeCarousel.currentIndex - 1, 'prev');
            }
          }
        }
      }
    });
  }

  return {
    init: init,
    switchProject: switchProject,
    getCarousels: () => screenshotCarousels
  };
})();

// Provide BBCarousel alias for backward compatibility
const BBCarousel = ProjectShowcaseController;
window.ProjectShowcaseController = ProjectShowcaseController;
window.BBCarousel = BBCarousel;

document.addEventListener('DOMContentLoaded', () => {
  ProjectsManager.init();
  ProjectShowcaseController.init();
});
