/**
 * Interactive Background Engine // Ayush Thakur Portfolio
 * Aesthetic: Captivating, Decent & Clean Cybernetic HUD Field
 * Features:
 *  - Interactive Mouse Spotlight Grid (reveals high-tech coordinates & micro-crosshairs near cursor)
 *  - Organic Twinkling Micro-Nodes with Glowing Halos
 *  - Magnetic Cursor Constellation Threads
 */

(function () {
  'use strict';

  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let dataBeams = [];
  let ripples = [];
  let mouse = { x: null, y: null, radius: 160 };
  let animationFrameId;
  let isTabActive = true;

  const config = {
    particleCount: window.innerWidth < 768 ? 26 : 52,
    maxDistance: 115,
    mouseConnectDist: 145,
    baseColor: '0, 229, 255',
    violetColor: '139, 92, 246',
    magentaColor: '217, 70, 239',
    nodeSpeed: 0.22,
    gridStep: 110
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * config.nodeSpeed;
      this.vy = (Math.random() - 0.5) * config.nodeSpeed;
      this.baseRadius = Math.random() * 1.0 + 0.7;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.02;

      const rand = Math.random();
      if (rand > 0.7) {
        this.color = config.violetColor;
      } else if (rand > 0.45) {
        this.color = config.baseColor;
      } else {
        this.color = config.magentaColor;
      }
      this.baseAlpha = Math.random() * 0.3 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.phase += this.pulseSpeed;

      // Wrap smoothly around bounds
      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;

      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;

      // Gentle interactive mouse deflection
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          this.x -= directionX * force * 1.4;
          this.y -= directionY * force * 1.4;
        }
      }
    }

    draw() {
      const sinVal = Math.sin(this.phase);
      const pulseFactor = sinVal * 0.25 + 0.85;
      const radius = this.baseRadius * pulseFactor;
      const alpha = this.baseAlpha * pulseFactor;

      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.55)`;
      ctx.fill();

      // Micro diamond glint at peak pulse for select prominent particles
      if (sinVal > 0.88 && this.baseRadius > 1.25) {
        const glintArm = 3;
        ctx.strokeStyle = `rgba(255, 255, 255, ${(sinVal - 0.88) * 3.5})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(this.x - glintArm, this.y);
        ctx.lineTo(this.x + glintArm, this.y);
        ctx.moveTo(this.x, this.y - glintArm);
        ctx.lineTo(this.x, this.y + glintArm);
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  // Subtle Laser Data Beam moving along grid horizontal lines
  class DataBeam {
    constructor() {
      this.reset();
      this.active = false;
    }

    reset() {
      this.x = -160;
      this.y = Math.floor(Math.random() * (height / config.gridStep)) * config.gridStep;
      this.speed = 4 + Math.random() * 3.5;
      this.length = 80 + Math.random() * 70;
      this.color = Math.random() > 0.5 ? config.baseColor : config.violetColor;
      this.alpha = 0.3;
    }

    update() {
      if (!this.active) {
        // Controlled rare probability (every ~4-6 seconds)
        if (Math.random() < 0.0035) {
          this.reset();
          this.active = true;
        }
        return;
      }

      this.x += this.speed;
      if (this.x - this.length > width) {
        this.active = false;
      }
    }

    draw() {
      if (!this.active) return;

      ctx.save();
      const grad = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
      grad.addColorStop(0, `rgba(${this.color}, 0)`);
      grad.addColorStop(0.75, `rgba(${this.color}, ${this.alpha})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${this.alpha * 1.4})`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.beginPath();
      ctx.moveTo(this.x - this.length, this.y);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
      ctx.restore();
    }
  }

  // Interactive Radar Ripple upon user interaction
  class Ripple {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 2;
      this.maxRadius = 110;
      this.speed = 2.4;
      this.alpha = 0.4;
      this.color = config.baseColor;
    }

    update() {
      this.radius += this.speed;
      this.alpha = 0.4 * (1 - this.radius / this.maxRadius);
    }

    draw() {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    config.particleCount = width < 768 ? 26 : 52;
    initParticles();
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }
    dataBeams = [new DataBeam(), new DataBeam()];
  }

  // Draw delicate connection threads between nearby nodes & cursor
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      // Particle to Particle links
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.maxDistance) {
          const alpha = (1 - dist / config.maxDistance) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${config.baseColor}, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Particle to Mouse magnetic glow thread
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = mouse.x - p1.x;
        const mdy = mouse.y - p1.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < config.mouseConnectDist) {
          const mAlpha = (1 - mdist / config.mouseConnectDist) * 0.22;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${p1.color}, ${mAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // Interactive Spotlight Grid (Illuminates subtly around cursor)
  function drawInteractiveGrid() {
    const step = config.gridStep;
    const hasMouse = mouse.x !== null && mouse.y !== null;
    const spotlightRadius = 240;

    // Background base subtle lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Dynamic Mouse Spotlight on Grid Intersections
    if (hasMouse) {
      const startX = Math.max(0, Math.floor((mouse.x - spotlightRadius) / step) * step);
      const endX = Math.min(width, Math.ceil((mouse.x + spotlightRadius) / step) * step);
      const startY = Math.max(0, Math.floor((mouse.y - spotlightRadius) / step) * step);
      const endY = Math.min(height, Math.ceil((mouse.y + spotlightRadius) / step) * step);

      for (let gx = startX; gx <= endX; gx += step) {
        for (let gy = startY; gy <= endY; gy += step) {
          const dist = Math.hypot(mouse.x - gx, mouse.y - gy);
          if (dist < spotlightRadius) {
            const intensity = (1 - dist / spotlightRadius);
            const alpha = intensity * 0.35;

            // Draw micro crosshair (+) at grid intersection
            ctx.strokeStyle = `rgba(${config.baseColor}, ${alpha})`;
            ctx.lineWidth = 1;
            const arm = 4;
            ctx.beginPath();
            ctx.moveTo(gx - arm, gy);
            ctx.lineTo(gx + arm, gy);
            ctx.moveTo(gx, gy - arm);
            ctx.lineTo(gx, gy + arm);
            ctx.stroke();

            // Tiny center core dot
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
            ctx.fillRect(gx - 0.5, gy - 0.5, 1, 1);
          }
        }
      }
    }
  }

  function render() {
    if (!isTabActive) return;

    ctx.clearRect(0, 0, width, height);

    drawInteractiveGrid();

    // Subtle Cyber Data Beams
    for (let i = 0; i < dataBeams.length; i++) {
      dataBeams[i].update();
      dataBeams[i].draw();
    }

    // Click Radar Ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      ripples[i].update();
      ripples[i].draw();
      if (ripples[i].alpha <= 0) {
        ripples.splice(i, 1);
      }
    }

    drawConnections();

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Listeners
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const glow = document.querySelector('.cursor-glow');
    if (glow) {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('click', (e) => {
    if (ripples.length < 5) {
      ripples.push(new Ripple(e.clientX, e.clientY));
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isTabActive = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isTabActive = true;
      render();
    }
  });

  resize();
  render();
})();
