import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function CinematicPreloader({ onComplete }) {
  const [count, setCount] = useState(0);

  const nameString = "KRISHNA GHODAKE";
  const nameLetters = Array.from(nameString);

  // Dynamic Telemetry Status Steps
  const getStatusText = (progress) => {
    if (progress < 25) return "01: INITIALIZING SYSTEM CORE & RENDER ENGINE";
    if (progress < 55) return "02: LOADING CREATIVE ASSETS & UI COMPONENTS";
    if (progress < 85) return "03: COMPILING WORKSPACE DATA & INTERACTION LOGIC";
    return "04: SYSTEM READY // LAUNCHING PORTFOLIO";
  };

  // Define unique multi-directional start vectors for each letter
  const getLetterStartPos = (index) => {
    const directions = [
      { x: -350, y: -150, rotate: -45 }, // Left Top
      { x: 350, y: -150, rotate: 45 },   // Right Top
      { x: -300, y: 180, rotate: -30 },  // Left Bottom
      { x: 300, y: 180, rotate: 30 },    // Right Bottom
      { x: 0, y: -300, rotate: 60 },     // Straight Top
      { x: 0, y: 250, rotate: -60 },     // Straight Bottom
    ];
    return directions[index % directions.length];
  };

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = 'hidden';

    // 3.4 second hold duration (0% to 100%)
    const duration = 3400; // ms
    const intervalTime = 25; // ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = '';
            onComplete();
          }, 350);
          return 100;
        }
        return Math.min(100, Math.round(prev + increment));
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97, y: -25, filter: "blur(8px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] bg-[#faf8f3] text-[#07090e] select-none flex flex-col items-center justify-between overflow-hidden px-6 py-8"
    >
      {/* Blueprint Grid Lines & Subtle Ambient Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Cool Ambient Soft Glow */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#00D4FF]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff2a85]/10 rounded-full blur-3xl" />

        {/* Blueprint Grid Lines & Dimension Marks */}
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 900" fill="none">
          <line x1="100" y1="0" x2="100" y2="900" stroke="#07090e" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="1100" y1="0" x2="1100" y2="900" stroke="#07090e" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="0" y1="180" x2="1200" y2="180" stroke="#07090e" strokeWidth="1" />
          <line x1="0" y1="720" x2="1200" y2="720" stroke="#07090e" strokeWidth="1" />
        </svg>
      </div>

      {/* TOP STATUS BAR TELEMETRY */}
      <div className="w-full max-w-5xl flex items-center justify-between font-mono-code text-xs font-bold text-slate-700 relative z-10 border-b border-black/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-ping" />
          <span className="text-black font-extrabold uppercase">SYSTEM // BOOT SEQUENCE</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-black bg-[#facc15] px-3 py-0.5 rounded-full border border-black text-[11px] font-extrabold shadow-xs">
          <Sparkles className="w-3 h-3 text-black" />
          <span>KRISHNA GHODAKE • 2026</span>
        </div>
        <div>
          <span>EST. 2026 // NASHIK, INDIA</span>
        </div>
      </div>

      {/* CENTER MAIN SKETCHBOOK CANVAS CONTAINER */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-6 flex flex-col items-center justify-center my-auto">
        
        {/* MULTI-DIRECTIONAL FLYING LETTERS SIGNATURE ASSEMBLY */}
        <div className="relative w-full flex flex-col items-center justify-center pt-2 pb-2 space-y-3">
          
          {/* Multi-Directional Letters Container */}
          <div className="flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-2.5">
            {nameLetters.map((char, index) => {
              const startPos = getLetterStartPos(index);
              return (
                <motion.span
                  key={index}
                  initial={{
                    x: startPos.x,
                    y: startPos.y,
                    opacity: 0,
                    scale: 0.3,
                    rotate: startPos.rotate
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.07,
                    ease: [0.175, 0.885, 0.32, 1.275] // Elastic spring snap
                  }}
                  className={`font-handwritten text-4xl sm:text-6xl md:text-7xl font-bold text-[#07090e] inline-block ${
                    char === " " ? "w-4 sm:w-6" : ""
                  }`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </div>

          {/* Underline Stroke Vector Animation */}
          <svg className="w-64 sm:w-96 h-5 mx-auto" viewBox="0 0 350 20" fill="none">
            <motion.path
              d="M 10,12 Q 175,2 340,12"
              stroke="#07090e"
              strokeWidth="4.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 1.3, ease: "easeInOut" }}
            />
          </svg>

          {/* Subtitle Credentials Slide Up */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="pt-1"
          >
            <p className="font-mono-code text-xs sm:text-sm font-black text-slate-800 uppercase tracking-widest bg-black/5 px-4 py-1 rounded-full border border-black/15 inline-block">
              FULL-STACK DEVELOPER &amp; UI/UX DESIGNER
            </p>
          </motion.div>

          {/* Telemetry Status Bar Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="font-mono-code text-[11px] font-bold text-slate-700 pt-1 tracking-wider uppercase flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>{getStatusText(count)}</span>
          </motion.div>

          {/* Post-It Percentage Counter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="pt-4 flex items-center justify-center"
          >
            <div className="sticky-note bg-[#fffdf0] text-black px-7 py-3 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#07090e] flex items-center gap-4 relative">
              <div className="tape-strip opacity-80" />
              <span className="font-mono-code text-xs font-extrabold uppercase tracking-wider text-slate-800">
                LOADING WORKSPACE
              </span>
              <span className="font-handwritten text-3xl sm:text-4xl font-extrabold text-[#07090e]">
                {count}%
              </span>
            </div>
          </motion.div>

          {/* High-Tech Glowing Cyan Progress Bar */}
          <div className="w-72 sm:w-80 h-3.5 bg-slate-200 rounded-full overflow-hidden border-2 border-black mt-3 shadow-inner relative">
            <motion.div
              className="h-full bg-gradient-to-r from-black via-[#00D4FF] to-black rounded-full"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between font-mono-code text-[11px] font-bold text-slate-600 border-t border-black/15 pt-3 gap-2 relative z-10">
        <span>© 2026 KRISHNA GHODAKE // ALL RIGHTS RESERVED</span>
        <span className="font-handwritten text-sm text-black font-extrabold">
          "Building products that people remember" ✦
        </span>
      </div>

    </motion.div>
  );
}

