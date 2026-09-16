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
      imageUrl: 'assets/images/agrismart.jpg',
      imageClass: 'portrait',
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
      imageUrl: 'assets/images/spotonjalgaon.png',
      liveUrl: 'https://spotonjalgaon.great-site.net/?i=1',
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

document.addEventListener('DOMContentLoaded', () => {
  ProjectsManager.init();
});
