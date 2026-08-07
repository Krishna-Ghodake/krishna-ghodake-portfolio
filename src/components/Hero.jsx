import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function Hero({ preloaderComplete = true }) {
  // Motion variants for letter reveal
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  const nameLetters = "KRISHNA".split("");

  return (
    <section id="hero" className="relative pt-32 pb-0 overflow-hidden min-h-[95vh] flex flex-col justify-between hero-sketchpad-bg">
      
      {/* Decorative Vector Line Accents & Crosshatch X Marks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <svg className="w-full h-full opacity-15" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="0" x2="100" y2="800" stroke="#07090e" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#07090e" strokeWidth="1" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#07090e" strokeWidth="1" />
          <line x1="0" y1="650" x2="1200" y2="650" stroke="#07090e" strokeWidth="1.5" strokeDasharray="8 8" />

          <path d="M150 150 L170 170 M170 150 L150 170" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
          <path d="M850 120 L870 140 M870 120 L850 140" stroke="#07090e" strokeWidth="2" strokeLinecap="round" />
          <path d="M600 500 L620 520 M620 500 L600 520" stroke="#ff2a85" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 flex-1 flex items-center py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            
            {/* Top Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07090e] text-white border border-black text-xs font-mono-code shadow-md"
            >
              <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-bold flex items-center justify-center text-[10px]">
                01
              </span>
              <span className="font-bold tracking-wider uppercase">DISCOVERY STARTS HERE</span>
            </motion.div>

            {/* Headline Block */}
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate={preloaderComplete ? "visible" : "hidden"}
              className="relative pt-6 space-y-1"
            >
              {/* Cursive Callout 1 (Hello, I'm) */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-handwritten text-4xl sm:text-5xl font-bold text-[#00D4FF] absolute -top-4 sm:-top-5 left-0 z-10 drop-shadow-sm"
              >
                Hello, I'm
              </motion.span>

              {/* Giant Name Display with Letter-by-Letter Kinetic Reveal */}
              <div className="flex items-center overflow-hidden pt-3">
                {nameLetters.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    variants={letterVariants}
                    className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold text-[#07090e] leading-[0.95] tracking-tighter"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Second line G. in Cyan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[6rem] xl:text-[7rem] font-extrabold text-[#00D4FF] leading-[0.9] -mt-2 drop-shadow-md"
              >
                G.
              </motion.div>

              {/* Hand-Drawn Wavy Line SVG */}
              <svg className="w-64 sm:w-80 h-4 text-[#00D4FF] mt-2" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12C45 4 85 18 125 10C165 2 205 16 245 8C265 4 285 10 295 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Sub-headline Paragraph in Creative Cursive Font */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-creative-cursive text-xl sm:text-2xl text-[#07090e]/95 max-w-xl leading-relaxed pt-1 font-bold text-left"
            >
              "{PORTFOLIO_DATA.personal.tagline}"
            </motion.p>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 relative"
            >
              <motion.a
                href="#work"
                whileHover={{ y: -8, scale: 1.05, boxShadow: "8px 8px 0px #00D4FF" }}
                whileTap={{ scale: 0.96 }}
                className="btn-yellow-3d shadow-[4px_4px_0px_#000000]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Handwritten Cursive Callout 2 */}
              <span className="font-handwritten text-xl font-bold text-[#07090e] sm:ml-4 sm:inline-block rotate-[-2deg] bg-[#00D4FF]/20 px-3 py-1 rounded-full border border-[#00D4FF]">
                interactive 3D &amp; WebGL ⚡
              </span>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center gap-2 text-[11px] font-mono-code text-slate-700 uppercase tracking-widest font-bold">
              <span className="w-px h-6 bg-slate-700" />
              <span>SCROLL TO INVESTIGATE</span>
            </div>

          </div>

          {/* Right Column — Draggable Sticky Notes Workspace & Hanging Lanyard Badge */}
          <div className="lg:col-span-5 relative min-h-[620px] w-full pt-2">

            {/* Handwritten Cursive Callout 3 (Top Right) */}
            <div className="absolute -top-3 right-0 z-40 bg-[#07090e] px-3.5 py-1 rounded-full border border-[#00D4FF]/30 shadow-xl rotate-[2deg]">
              <span className="font-handwritten text-base sm:text-lg font-bold text-[#00D4FF]">
                designed &amp; coded with precision ✦
              </span>
            </div>

            {/* Note 1: Yellow Post-It (Crisp Dark Obsidian Headlines & Text) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.06, rotate: -2, cursor: 'grab' }}
              whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50, cursor: 'grabbing', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              initial={{ opacity: 0, rotate: -6, y: -20 }}
              animate={{ opacity: 1, rotate: -4, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky-note bg-[#facc15] text-[#07090e] w-52 sm:w-56 min-h-[190px] absolute top-0 left-0 sm:left-2 lg:-left-2 z-10 border-2 border-black shadow-2xl p-5 cursor-grab active:cursor-grabbing flex flex-col justify-between"
            >
              <div className="tape-strip" />
              <div className="space-y-1.5">
                <span className="font-mono-code text-[10px] uppercase font-black text-[#07090e] tracking-wider block pt-1">
                  CURRENTLY
                </span>
                <h3 className="font-display text-xs sm:text-sm text-[#07090e] leading-tight uppercase font-black">
                  BUILDING CREATIVE DIGITAL EXPERIENCES
                </h3>
                <p className="font-handwritten text-sm sm:text-base text-[#07090e] font-extrabold leading-tight pt-1">
                  Crafting responsive web apps &amp; Next.js 16 features.
                </p>
              </div>
              <div className="inline-block mt-3 bg-black px-2.5 py-1 rounded-md border border-black font-handwritten text-xs sm:text-sm text-[#facc15] font-bold self-start">
                + Next.js 16 &amp; React 19
              </div>
            </motion.div>

            {/* Note 2: Sky Blue Post-It (Crisp Dark Obsidian Headlines & Text) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.06, rotate: 3, cursor: 'grab' }}
              whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50, cursor: 'grabbing', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              initial={{ opacity: 0, rotate: 5, y: 20 }}
              animate={{ opacity: 1, rotate: 4, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky-note bg-[#38bdf8] text-[#07090e] w-56 sm:w-60 min-h-[250px] absolute top-12 right-0 sm:right-1 lg:-right-4 z-20 border-2 border-black shadow-2xl p-5 cursor-grab active:cursor-grabbing flex flex-col justify-between"
            >
              <div className="tape-strip" />
              <div className="space-y-2">
                <span className="font-mono-code text-[10px] uppercase font-black text-[#07090e] tracking-wider block">
                  EXPERIENCE
                </span>
                <h3 className="font-display text-xs sm:text-sm text-[#07090e] leading-snug uppercase font-black">
                  FULL-STACK DEVELOPMENT &amp; UI/UX SYSTEMS
                </h3>
                <p className="font-handwritten text-sm sm:text-base text-[#07090e] font-extrabold leading-tight pt-1">
                  Architecting scalable web apps &amp; interactive prototypes.
                </p>
              </div>
              <div className="inline-block mt-3 bg-black px-2.5 py-1 rounded-md border border-black font-handwritten text-xs sm:text-sm text-[#00D4FF] font-bold self-start">
                + TypeScript &amp; Tailwind
              </div>
            </motion.div>

            {/* Note 3: Vibrant Orange Post-It (Bottom Center - Clean Plain White Text) */}
            <motion.div
              drag
              dragSnapToOrigin={false}
              dragElastic={0.15}
              whileHover={{ scale: 1.06, rotate: -1, cursor: 'grab' }}
              whileDrag={{ scale: 1.12, rotate: 0, zIndex: 50, cursor: 'grabbing', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              initial={{ opacity: 0, rotate: -3, y: 40 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ delay: 0.5 }}
              className="sticky-note bg-[#f97316] text-white w-56 sm:w-64 min-h-[210px] absolute top-[19.5rem] sm:top-[18.5rem] left-4 sm:left-12 lg:left-6 z-30 border-2 border-white shadow-2xl p-5 cursor-grab active:cursor-grabbing flex flex-col justify-between"
            >
              <div className="tape-strip" />
              <div className="space-y-1.5">
                <span className="font-mono-code text-[10px] uppercase font-bold text-white tracking-wider block">
                  FOCUS
                </span>
                <h3 className="font-display text-xs sm:text-sm text-white leading-snug uppercase font-extrabold">
                  CODE, DESIGN &amp; INTERACTION
                </h3>
                <p className="font-handwritten text-sm sm:text-base text-white font-bold leading-tight pt-1">
                  Building interactive 3D scenes, UI systems &amp; animations.
                </p>
              </div>
              <div className="inline-block mt-3 bg-black/50 px-2.5 py-1 rounded-md border border-white/40 font-handwritten text-xs sm:text-sm text-[#facc15] font-bold self-start">
                + 3D Canvases &amp; Figma Pro
              </div>
            </motion.div>

            {/* Handwritten Cursive Callout 4 */}
            <div className="absolute bottom-0 right-2 z-40 bg-[#07090e] px-3.5 py-1.5 rounded-full border border-white/20 shadow-2xl rotate-[-3deg]">
              <span className="font-handwritten text-base sm:text-lg font-bold text-[#00D4FF]">
                you can move these around ↗
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Full-Width Solid Black Continuous Marquee Ticker Bar */}
      <div className="relative mt-12 w-full z-20">
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
