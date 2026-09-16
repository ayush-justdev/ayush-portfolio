/**
 * Sound FX Synthesizer // Ayush Thakur Portfolio
 * Uses Web Audio API for lightweight, futuristic audio micro-feedback.
 * Zero external audio assets required.
 */

const SoundEngine = (function () {
  'use strict';

  let audioCtx = null;
  let isSoundEnabled = false;

  function initAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function toggleSound() {
    initAudioContext();
    isSoundEnabled = !isSoundEnabled;
    try {
      localStorage.setItem('ayush_sfx_enabled', isSoundEnabled ? '1' : '0');
    } catch (e) {
      // Storage unavailable fallback
    }
    updateSoundUI();
    if (isSoundEnabled) {
      playChirp(600, 0.08, 'sine', 0.15);
    }
    return isSoundEnabled;
  }

  function updateSoundUI() {
    const btn = document.getElementById('sfx-toggle');
    if (!btn) return;
    const textSpan = btn.querySelector('.sfx-status');
    if (isSoundEnabled) {
      btn.classList.add('active');
      if (textSpan) textSpan.textContent = 'ON';
    } else {
      btn.classList.remove('active');
      if (textSpan) textSpan.textContent = 'OFF';
    }
  }

  // Load user preference
  function loadPreference() {
    try {
      const saved = localStorage.getItem('ayush_sfx_enabled');
      if (saved === '1') {
        // Will be resumed on first user click
        isSoundEnabled = true;
      }
    } catch (e) {}
    updateSoundUI();
  }

  function playChirp(freq = 800, duration = 0.05, type = 'sine', gainVal = 0.05) {
    if (!isSoundEnabled || !audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  function playHover() {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.03);
    } catch (e) {}
  }

  function playAction() {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(440, now);
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.04);
      osc2.frequency.exponentialRampToValueAtTime(1320, now + 0.12);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc1.stop(now + 0.08);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.14);
    } catch (e) {}
  }

  function playTerminalKey() {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const freq = 450 + Math.random() * 200;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.025);
    } catch (e) {}
  }

  return {
    init: initAudioContext,
    toggle: toggleSound,
    loadPreference: loadPreference,
    hover: playHover,
    click: () => playChirp(720, 0.04, 'sine', 0.04),
    action: playAction,
    key: playTerminalKey,
    isEnabled: () => isSoundEnabled
  };
})();

// Attach sound to interactive buttons
document.addEventListener('DOMContentLoaded', () => {
  SoundEngine.loadPreference();

  const sfxBtn = document.getElementById('sfx-toggle');
  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      SoundEngine.toggle();
    });
  }

  // Bind subtle hover/click sounds to interactive elements
  document.querySelectorAll('button, a, .hud-btn, .skill-badge').forEach((el) => {
    el.addEventListener('mouseenter', () => SoundEngine.hover());
    el.addEventListener('click', () => SoundEngine.click());
  });
});
