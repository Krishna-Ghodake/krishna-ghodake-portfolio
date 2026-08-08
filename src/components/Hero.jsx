import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles, Activity, PenTool } from 'lucide-react';

export default function Hero({ preloaderComplete = true }) {
  // Live IST Nashik Clock state
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Nashik IST time
  const istTimeStr = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Calculate clock hand rotation angles
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-0 overflow-hidden min-h-[92vh] flex flex-col justify-between hero-sketchpad-bg">
      
      {/* Enhanced Creative Ambient Background Artwork & Technical Blueprint Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft Glowing Ambient Light Blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#00D4FF]/12 blur-3xl" />
        <div className="absolute top-1/3 right-12 w-96 h-96 rounded-full bg-[#facc15]/15 blur-3xl" />

        <svg className="w-full h-full opacity-25" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="0" x2="100" y2="800" stroke="#07090e" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#07090e" strokeWidth="1" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#07090e" strokeWidth="1" />
          <line x1="0" y1="650" x2="1200" y2="650" stroke="#07090e" strokeWidth="1.5" strokeDasharray="8 8" />

          {/* Crosshair + SVG Marks */}
          <path d="M 120 120 L 140 120 M 130 110 L 130 130" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 1020 140 L 1040 140 M 1030 130 L 1030 150" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 550 520 L 570 520 M 560 510 L 560 530" stroke="#ff2a85" strokeWidth="2.5" strokeLinecap="round" />

          {/* Star Accent SVG Marks */}
          <path d="M150 120 L160 140 L180 140 L165 152 L170 172 L150 160 L130 172 L135 152 L120 140 L140 140 Z" fill="#00D4FF" opacity="0.6" />
          <path d="M920 100 L928 115 L945 115 L932 125 L936 140 L920 130 L904 140 L908 125 L895 115 L912 115 Z" fill="#facc15" opacity="0.8" />
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 flex-1 flex items-center py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* LEFT COLUMN: Bold Headline & Dashed Quote Card */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07090e] text-white border-2 border-black text-xs font-mono-code shadow-[3px_3px_0px_#00D4FF]"
            >
              <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-extrabold flex items-center justify-center text-[10px]">
                01
              </span>
              <span className="font-extrabold tracking-wider uppercase">DISCOVERY STARTS HERE</span>
            </motion.div>

            {/* Main Display Headline Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pt-2 space-y-3"
            >
              {/* Clean Greeting: Hello, I am (ON ONE LINE) */}
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="font-handwritten text-3xl sm:text-4xl font-bold text-[#00D4FF] rotate-[-2deg]">
                  Hello,
                </span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#07090e] tracking-tight">
                  I am
                </span>
              </div>

              {/* Giant Display Headline: KRISHNA GHODAKE with Shattered 3D Kinetic Assembly & Smoky Blue Aura */}
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.2rem] xl:text-[5.8rem] font-black leading-[0.94] tracking-tight uppercase relative group">
                {/* Smoky Blue Energy Aura Glow (Behind Name) */}
                <motion.div
                  animate={{
                    opacity: [0.35, 0.75, 0.35],
                    scale: [0.96, 1.04, 0.96]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-3 bg-[#00D4FF]/25 blur-2xl rounded-3xl pointer-events-none group-hover:bg-[#00D4FF]/55 group-hover:blur-3xl transition-all duration-500"
                />

                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex flex-wrap items-center gap-x-2 relative text-[#00D4FF] bg-[#00D4FF]/12 border-3 border-[#00D4FF] rounded-2xl px-3 sm:px-5 py-1.5 shadow-[6px_6px_0px_#07090e] cursor-pointer"
                >
                  {/* Word 1: KRISHNA (Letter by Letter Shattered Assembly) */}
                  <span className="inline-flex">
                    {"KRISHNA".split("").map((char, i) => (
                      <motion.span
                        key={`k-${i}`}
                        initial={{
                          opacity: 0,
                          x: (i % 2 === 0 ? -120 : 120) * (Math.sin(i + 1) + 1),
                          y: (i % 3 === 0 ? -90 : 90) * (Math.cos(i + 1) + 1),
                          rotate: i * 28 - 35,
                          scale: 0.3
                        }}
                        animate={preloaderComplete ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 210,
                          damping: 15,
                          delay: 0.15 + i * 0.045
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>

                  {/* Word 2: GHODAKE (Letter by Letter Shattered Assembly) */}
                  <span className="inline-flex">
                    {"GHODAKE".split("").map((char, i) => (
                      <motion.span
                        key={`g-${i}`}
                        initial={{
                          opacity: 0,
                          x: (i % 2 === 0 ? 130 : -130) * (Math.cos(i + 2) + 1),
                          y: (i % 3 === 0 ? 100 : -100) * (Math.sin(i + 2) + 1),
                          rotate: i * -24 + 40,
                          scale: 0.3
                        }}
                        animate={preloaderComplete ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 210,
                          damping: 15,
                          delay: 0.45 + i * 0.045
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.div>
              </h1>
            </motion.div>

            {/* Dashed Engineering Blueprint Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white/95 border-2 border-dashed border-[#07090e] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#07090e] max-w-xl group"
            >
              {/* Tape Strips for Vintage Depth */}
              <div className="absolute -top-3 left-6 w-16 h-5 bg-[#facc15]/60 border border-black/30 transform -rotate-3 rounded-xs pointer-events-none" />
              <div className="absolute -bottom-3 right-8 w-16 h-5 bg-[#00D4FF]/60 border border-black/30 transform rotate-2 rounded-xs pointer-events-none" />

              <p className="font-creative-cursive text-lg sm:text-xl text-[#07090e] leading-relaxed font-extrabold italic">
                "{PORTFOLIO_DATA.personal.tagline}"
              </p>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#work"
                whileHover={{ y: -6, scale: 1.05, boxShadow: "8px 8px 0px #00D4FF" }}
                whileTap={{ scale: 0.96 }}
                className="btn-yellow-3d shadow-[4px_4px_0px_#000000]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#story"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-2xl bg-white text-[#07090e] font-mono-code text-xs font-black border-2 border-black shadow-[4px_4px_0px_#07090e] hover:bg-[#00D4FF] hover:text-black transition-all flex items-center gap-2 cursor-pointer text-decoration-none"
              >
                <span>READ MY STORY 📖</span>
              </motion.a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Draggable Neo-Brutalist Module Workspace */}
          <div className="lg:col-span-5 relative min-h-[480px] lg:min-h-[500px] w-full pt-0 sm:pt-2">

            {/* Top Obsidian Dark Live Status Card (Shifted Further Right) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.04, rotate: 1, cursor: 'grab' }}
              whileDrag={{ scale: 1.08, zIndex: 50, cursor: 'grabbing' }}
              initial={{ opacity: 0, y: -20, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ delay: 0.3 }}
              className="bg-[#07090e] text-white w-60 sm:w-68 border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[6px_6px_0px_#00D4FF] absolute top-0 right-0 sm:-right-4 lg:-right-10 z-30 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-mono-code text-[11px] font-black uppercase text-[#00D4FF] tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
                  LIVE STATUS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="font-display text-xs sm:text-sm text-white pt-2 leading-snug font-bold">
                Crafting responsive web apps &amp; interactive systems with React, Next.js &amp; Three.js ⚡
              </p>
            </motion.div>

            {/* Middle Main Yellow Post-It Card (Shifted Further Right) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.05, rotate: -2, cursor: 'grab' }}
              whileDrag={{ scale: 1.08, zIndex: 50, cursor: 'grabbing' }}
              initial={{ opacity: 0, y: 10, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 0.4 }}
              className="sticky-note bg-[#facc15] text-[#07090e] w-64 sm:w-72 min-h-[190px] sm:min-h-[210px] border-3 border-black rounded-2xl p-4 sm:p-5 shadow-[8px_8px_0px_#07090e] absolute top-16 sm:top-20 left-2 lg:-left-2 z-20 cursor-grab active:cursor-grabbing flex flex-col justify-between"
            >
              <div className="tape-strip" />
              <div className="space-y-1.5 pt-1">
                <span className="font-mono-code text-[10px] uppercase font-black tracking-wider text-black bg-white/60 px-2 py-0.5 rounded-md inline-block">
                  EXPERIENCE
                </span>
                <h3 className="font-display text-base sm:text-lg text-[#07090e] uppercase font-black leading-tight">
                  FULL-STACK DIGITAL EXPERIENCES &amp; UI/UX SYSTEMS
                </h3>
              </div>

              {/* Pin Badge */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-handwritten text-xs sm:text-sm font-bold text-black italic">
                  Nashik, Maharashtra, India
                </span>
                <div className="w-5 h-5 rounded-full bg-black text-[#facc15] flex items-center justify-center font-black text-xs">
                  ✦
                </div>
              </div>
            </motion.div>

            {/* Creative Sketchbook Card (Shifted Further Right) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.05, rotate: -1, cursor: 'grab' }}
              whileDrag={{ scale: 1.08, zIndex: 50, cursor: 'grabbing' }}
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-[#fefce8] text-[#07090e] border-3 border-black rounded-2xl p-4 sm:p-5 shadow-[6px_6px_0px_#07090e] absolute top-[13.5rem] sm:top-[14.5rem] right-0 sm:-right-10 lg:-right-24 z-30 cursor-grab active:cursor-grabbing w-60 sm:w-68 relative overflow-hidden"
            >
              {/* Metal Spiral Binder Rings at top */}
              <div className="flex items-center justify-between px-3 -mt-6 mb-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-3 h-4 rounded-sm bg-gradient-to-b from-slate-700 via-slate-900 to-slate-800 border border-black shadow-xs" />
                ))}
              </div>

              {/* Header Label */}
              <div className="flex items-center justify-between border-b border-blue-200/80 pb-2">
                <span className="font-mono-code text-[10px] uppercase font-black tracking-wider text-slate-700 flex items-center gap-1">
                  ✍️ CREATIVE SKETCHBOOK
                </span>
                <span className="font-mono-code text-[9px] bg-[#07090e] text-[#00D4FF] px-2 py-0.5 rounded-md font-bold">
                  VERIFIED
                </span>
              </div>

              {/* Ruled Notebook Paper Content Area */}
              <div className="pt-2.5 space-y-2 relative min-h-[90px]">
                {/* Horizontal Ruled Paper Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                  <div className="border-b border-blue-300 w-full" />
                  <div className="border-b border-blue-300 w-full" />
                  <div className="border-b border-blue-300 w-full" />
                </div>

                {/* Clean Handwritten Signature */}
                <div className="relative z-10">
                  <div className="font-handwritten text-2xl sm:text-3xl font-bold text-[#07090e] leading-none">
                    Krishna Ghodake
                  </div>
                </div>

                {/* Handwritten Creative Checklist */}
                <div className="font-mono-code text-[10.5px] font-bold text-slate-800 space-y-1 pt-1.5 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00D4FF] font-black">✓</span>
                    <span>Building Performant Web Apps</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#facc15] font-black">✓</span>
                    <span>Crafting Pixel-Perfect UI/UX</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-black">✓</span>
                    <span>3D Canvases &amp; Interactions</span>
                  </div>
                </div>

                {/* Mini Code Snippet Pill */}
                <div className="pt-1 relative z-10">
                  <div className="bg-[#07090e] text-[#00D4FF] font-mono-code text-[10px] font-black px-2.5 py-1 rounded-lg border border-black shadow-xs inline-block">
                    const vision = "Performant + Memorable";
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Badge */}
              <div className="mt-3 pt-2 border-t border-blue-200/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#facc15] text-black border border-black rounded-full font-mono-code text-[9px] font-black">
                  ⚡ CREATIVE MINDSET
                </span>
                <span className="font-mono-code text-[9px] font-extrabold text-slate-600">
                  NASHIK, INDIA
                </span>
              </div>
            </motion.div>

            {/* Handwritten Cursive Drag Annotation Badge with Pointer Arrow (Positioned to the left of cards for 100% clean clearance) */}
            <div className="absolute bottom-1 -left-12 lg:-left-28 z-40 flex items-center gap-1.5 pointer-events-none">
              <svg className="w-8 h-8 text-[#00D4FF] transform rotate-45 -mr-1" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 46 16 Q 26 28 8 13 M 8 13 L 16 8 M 8 13 L 14 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="bg-[#07090e] px-3.5 py-1.5 rounded-full border border-[#00D4FF] shadow-xl rotate-[-3deg]">
                <span className="font-handwritten text-sm sm:text-base font-bold text-[#00D4FF]">
                  drag &amp; stretch me around
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Full-Width Solid Black Continuous Marquee Ticker Bar */}
      <div className="relative w-full z-20 mt-10">
        <div className="ticker-black-container shadow-2xl">
          <div className="ticker-black-track">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  FULL-STACK DEVELOPER
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  UI/UX DESIGNER
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  CREATIVE TECHNOLOGIST
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  NEXT.JS 16 &amp; REACT 19
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  3D CANVASES &amp; SHADERS
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
