import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    // 0% to 100% counter over 2.4 seconds (2400ms / 50 steps = 48ms per step)
    const stepDuration = 2400 / 50;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShaking(true);
          setTimeout(() => {
            onComplete();
          }, 900); // 0.9s curtain exit
          return 100;
        }
        return prev + 2;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed inset-0 z-[100] bg-[#07090e] text-white flex flex-col justify-between p-8 sm:p-12 font-mono-code select-none ${
        shaking ? 'animate-bounce' : ''
      }`}
    >
      {/* Top Telemetry */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-ping" />
          <span className="font-bold text-white uppercase tracking-wider">
            KRISHNA GHODAKE • NASHIK, INDIA // 60 FPS
          </span>
        </div>
        <span className="text-[#00D4FF] font-bold">PORTFOLIO v2026</span>
      </div>

      {/* Center Counter */}
      <div className="my-auto space-y-6 max-w-2xl mx-auto w-full text-center">
        <div className="font-display text-7xl sm:text-9xl text-white tracking-tighter">
          {progress}<span className="text-[#00D4FF] text-5xl sm:text-7xl">%</span>
        </div>

        <div className="text-xs sm:text-sm font-bold text-[#00D4FF] tracking-widest uppercase">
          &gt; INITIALIZING PORTFOLIO ECOSYSTEM...
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-900 border border-white/15 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-white via-[#00D4FF] to-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-widest pt-4 border-t border-white/10">
        <span>SPPU ACBCS B.SC COMPUTER SCIENCE</span>
        <span>STANDBY FOR REDIRECTION</span>
      </div>
    </motion.div>
  );
}
