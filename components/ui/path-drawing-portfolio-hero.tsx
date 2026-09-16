"use client";

import React from "react";
import { motion } from "motion/react";

interface PathDrawingPortfolioHeroProps {
  name?: string;
  eyebrow?: string;
  tagline?: string;
  onViewProjects?: () => void;
  githubUrl?: string;
  linkedinUrl?: string;
}

/**
 * PathDrawingPortfolioHero
 * Standalone React + Motion component rendering a responsive SVG path-drawn name
 * with a continuous glowing RGB spectrum stroke:
 * Cyan (#00F5FF) -> Blue (#3B82F6) -> Violet (#8B5CF6) -> Magenta (#D946EF) -> Pink (#FF4ECD)
 */
export function PathDrawingPortfolioHero({
  name = "AYUSH THAKUR",
  eyebrow = "CS & AI • DEVELOPER",
  tagline = "Computer Science & AI student building software, Android applications, and ideas into reality.",
  onViewProjects,
  githubUrl = "https://github.com/ayush-justdev",
  linkedinUrl = "https://www.linkedin.com/in/ayush-thakur-vit/",
}: PathDrawingPortfolioHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-24 bg-[#050507] text-white overflow-hidden selection:bg-[#00F5FF] selection:text-black">
      {/* Ambient background RGB light blooms */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00F5FF]/10 to-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-8 hover:border-[#00F5FF]/40 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]" />
          <span>{eyebrow}</span>
        </motion.div>

        {/* Path-Drawn Name Centerpiece */}
        <div className="relative w-full max-w-4xl py-2 select-none">
          {/* Soft ambient center glow */}
          <div className="absolute inset-0 bg-radial from-[#00F5FF]/15 via-[#8B5CF6]/10 to-transparent blur-2xl pointer-events-none" />

          <svg
            viewBox="0 0 1000 200"
            className="w-full h-auto max-h-[220px] overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="react-rgb-name-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="25%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="75%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#FF4ECD" />
              </linearGradient>
              <filter id="react-path-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="rgba(255, 255, 255, 0.04)"
              stroke="url(#react-rgb-name-grad)"
              strokeWidth="2.6"
              filter="url(#react-path-glow)"
              className="font-extrabold tracking-wider"
              style={{
                fontFamily: "'Outfit', 'Space Grotesk', sans-serif",
                fontSize: "82px",
                letterSpacing: "0.06em",
              }}
              initial={{ strokeDasharray: 2400, strokeDashoffset: 2400, fillOpacity: 0 }}
              animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
              transition={{
                duration: 3.2,
                ease: [0.16, 1, 0.3, 1],
                fillOpacity: { delay: 1.5, duration: 1.5 },
              }}
            >
              {name}
            </motion.text>
          </svg>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-xl text-white/65 max-w-2xl mt-6 mb-10 font-normal leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={onViewProjects}
            className="relative px-7 py-3 rounded-md bg-[#08080d] text-white font-mono text-sm font-semibold tracking-wider border border-transparent shadow-[0_0_25px_rgba(0,245,255,0.25)] hover:shadow-[0_0_35px_rgba(0,245,255,0.45)] hover:-translate-y-0.5 transition-all group overflow-hidden"
          >
            <span className="absolute inset-[-1px] rounded-md bg-gradient-to-r from-[#00F5FF] via-[#8B5CF6] to-[#FF4ECD] -z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="flex items-center gap-2">
              VIEW PROJECTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white font-mono text-sm font-medium tracking-wider border border-white/10 hover:border-[#8B5CF6]/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            GITHUB
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white font-mono text-sm font-medium tracking-wider border border-white/10 hover:border-[#3B82F6]/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            LINKEDIN
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-2 font-mono text-xs text-white/40 tracking-widest"
        >
          <span>↓ SCROLL</span>
          <div className="w-[2px] h-10 bg-gradient-to-b from-[#00F5FF] via-[#8B5CF6] to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

export default PathDrawingPortfolioHero;
