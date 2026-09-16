/**
 * Interactive Developer Terminal // Ayush Thakur Portfolio
 * Emulates a cybernetic developer shell (ayush_shell v2.1.0)
 */

(function () {
  'use strict';

  const termInput = document.getElementById('term-cmd-input');
  const termOutput = document.getElementById('term-output-area');
  const termBody = document.getElementById('term-scroll-body');
  if (!termInput || !termOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const terminalResponses = {
    help: `
AVAILABLE COMMANDS // AYUSH_SHELL v2.1.0:
  • about       : Display developer identity & background
  • skills      : List verified technical competencies
  • projects    : Review featured builds (AgriSmart, SpotOnJalgaon, Smart AgriTech)
  • education   : View academic achievements (VIT Pune, GP Jalgaon 83.18%, 150th rank)
  • contact     : Transmit verified social channels (GitHub, LinkedIn, Instagram)
  • status      : Current system coordinates & operational telemetry
  • matrix      : Execute cyber visual stream
  • clear       : Clear terminal window
  • date        : Print current timestamp & local time
`,

    about: `
IDENTITY // AYUSH THAKUR:
  • Role         : Computer Science & AI Student + Developer
  • Institute    : Vishwakarma Institute of Technology (VIT), Pune
  • Focus Areas  : Software Development, Android, AI, Web Architecture, APIs
  • Philosophy   : Practical builder turning ideas into real software.
`,

    skills: `
VERIFIED TECHNICAL ARSENAL:
  [Programming]       : C, C++, Java, Python
  [Web Engineering]   : HTML, CSS, JavaScript, PHP
  [Development]       : Android Studio, Android Development, API Integration
  [Computer Science]  : OOP, Data Structures & Algorithms, Problem Solving
  [Tools]             : Git, GitHub, Turbo C++
`,

    projects: `
FEATURED BUILDS:
  01. AgriSmart [Android Application]
      - Stack: Java, Android Studio, Weather & Mandi APIs
      - Purpose: Agriculture-focused assistant for weather telemetry, crop recommendations & disease detection.
  
  02. SpotOnJalgaon [PHP Web Application]
      - Stack: PHP, HTML, CSS, JavaScript, Database
      - Purpose: Hyperlocal venue discovery & booking platform (Turfs, Marriage halls, Libraries, Gaming zones). Capstone at Softanic.
      - Live Project: https://spotonjalgaon.great-site.net/?i=1

  03. Smart AgriTech Dashboard [Web Application]
      - Stack: HTML, CSS, JavaScript, AngularJS, OpenWeatherMap & data.gov.in APIs
      - Purpose: Agronomic telemetry, yield prediction, fertilizer calculation & task management.
`,

    education: `
ACADEMIC TRAJECTORY:
  [CURRENT - PRIMARY]
  • Degree      : B.Tech in Computer Science & Artificial Intelligence
  • Institute   : Vishwakarma Institute of Technology (VIT), Pune
  
  [FOUNDATIONAL DIPLOMA]
  • Qualification: Diploma in CO @ Govt. Polytechnic, Jalgaon (2023–2026)
  • Institute   : Govt. Polytechnic, Jalgaon
  • Aggregate   : 83.18%
  • Distinction : 150th rank in category across Maharashtra
`,

    contact: `
VERIFIED TRANSMISSION CHANNELS:
  • GitHub      : https://github.com/ayush-justdev
  • LinkedIn    : https://www.linkedin.com/in/ayush-thakur-vit/
  • Instagram   : https://www.instagram.com/ayush._.yoru/
  • Location    : Pune, Maharashtra, India
`,

    status: `
SYSTEM TELEMETRY:
  • Status      : OPERATIONAL [100% ONLINE]
  • Coordinates : 18.5204° N, 73.8567° E [Pune, India]
  • Anchor      : VIT Pune // CS & AI
  • Availability: Open to Internships & High-Impact Software Initiatives
`
  };

  function executeCommand(cmd) {
    const rawCmd = cmd.trim();
    const cleanCmd = rawCmd.toLowerCase();

    if (!cleanCmd) return;

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    const userLine = document.createElement('div');
    userLine.innerHTML = `<span style="color: var(--rgb-cyan);">ayush@vit-pune:~$</span> <span style="color: #fff;">${escapeHtml(rawCmd)}</span>`;
    termOutput.appendChild(userLine);

    if (window.SoundEngine) {
      window.SoundEngine.action();
    }

    if (cleanCmd === 'clear') {
      termOutput.innerHTML = '';
      return;
    }

    if (cleanCmd === 'date') {
      const d = new Date();
      printOutput(`CURRENT SYSTEM TIME: ${d.toLocaleString()}`);
      return;
    }

    if (cleanCmd === 'matrix') {
      runMatrixEffect();
      return;
    }

    if (terminalResponses[cleanCmd]) {
      printOutput(terminalResponses[cleanCmd]);
    } else {
      printOutput(`Command not recognized: '${cleanCmd}'. Type 'help' to view valid commands.`);
    }

    if (termBody) {
      termBody.scrollTop = termBody.scrollHeight;
    }
  }

  function printOutput(text) {
    const outDiv = document.createElement('div');
    outDiv.className = 'term-output';
    outDiv.style.color = 'var(--text-secondary)';
    outDiv.textContent = text;
    termOutput.appendChild(outDiv);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function runMatrixEffect() {
    const matrixDiv = document.createElement('div');
    matrixDiv.style.color = 'var(--rgb-cyan)';
    matrixDiv.style.fontFamily = 'var(--font-mono)';
    matrixDiv.style.fontSize = '0.8rem';
    matrixDiv.style.margin = '0.5rem 0';
    termOutput.appendChild(matrixDiv);

    let count = 0;
    const interval = setInterval(() => {
      let line = '';
      const chars = '0123456789ABCDEF01010101XYZ';
      for (let i = 0; i < 48; i++) {
        line += chars[Math.floor(Math.random() * chars.length)];
      }
      matrixDiv.textContent = line;
      count++;
      if (termBody) termBody.scrollTop = termBody.scrollHeight;

      if (count > 16) {
        clearInterval(interval);
        matrixDiv.textContent = '>> SPECTRUM STREAM COMPLETED // AYUSH_SHELL STABLE.';
      }
    }, 60);
  }

  termInput.addEventListener('keydown', (e) => {
    if (window.SoundEngine) {
      window.SoundEngine.key();
    }

    if (e.key === 'Enter') {
      const val = termInput.value;
      termInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        termInput.value = commandHistory[historyIndex] || '';
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        termInput.value = commandHistory[historyIndex] || '';
      } else {
        historyIndex = commandHistory.length;
        termInput.value = '';
      }
      e.preventDefault();
    }
  });

  document.querySelectorAll('[data-cmd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        termInput.value = cmd;
        executeCommand(cmd);
        termInput.focus();
      }
    });
  });

  printOutput(`>> AYUSH_SHELL v2.1.0 INITIALIZED.\n>> Environment: VIT Pune [CS & AI]\n>> Type 'help' or click hint badges to inspect.`);
})();
