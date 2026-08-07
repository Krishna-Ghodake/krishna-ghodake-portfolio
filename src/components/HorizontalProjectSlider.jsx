import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, X, CheckCircle2, Eye, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HorizontalProjectSlider({ onModalStateChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0);

  const projects = PORTFOLIO_DATA.projects || [];
  const activeProject = projects[activeIndex] || projects[0];

  const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setCurrentScreenIdx(0);
    onModalStateChange?.(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    onModalStateChange?.(false);
  };

  // Close modal when pressing ESC key on Windows or Mac
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // High-resolution fallback images if local screenshots are not loaded
  const getFallbackImage = (project, screenIndex = 0) => {
    if (project.id === 'cosmoverse') {
      return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';
    }
    if (project.id === 'cybersisterhood') {
      return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80';
    }
    if (project.id === 'aurelia-dining') {
      return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
    }
    if (project.id === 'gearlink') {
      return 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80';
    }
    return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';
  };

  const isFigmaDesign = selectedProject?.id === 'student-growth-tracker';

  return (
    <section id="work" className="relative bg-[#faf8f3] text-[#07090e] border-t-2 border-b-2 border-black overflow-hidden py-20 sm:py-24">
      
      {/* Animated Mechanical Drafting & Engineering Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <svg className="w-full h-full opacity-15" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated Rotating Gear Vector 1 */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 180px" }}
          >
            <circle cx="150" cy="180" r="90" stroke="#07090e" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="150" cy="180" r="50" stroke="#00D4FF" strokeWidth="2" />
            <path d="M150 70 L150 290 M40 180 L260 180 M72 102 L228 258 M72 258 L228 102" stroke="#07090e" strokeWidth="1.5" />
          </motion.g>

          {/* Animated Rotating Gear Vector 2 */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "1050px 720px" }}
          >
            <circle cx="1050" cy="720" r="110" stroke="#07090e" strokeWidth="2" strokeDasharray="10 10" />
            <circle cx="1050" cy="720" r="60" stroke="#ff2a85" strokeWidth="2" />
            <path d="M1050 590 L1050 850 M920 720 L1180 720 M958 628 L1142 812 M958 812 L1142 628" stroke="#07090e" strokeWidth="1.5" />
          </motion.g>

          {/* Technical Watermark */}
          <text x="50%" y="300" textAnchor="middle" fontSize="140" fontFamily="Archivo Black, sans-serif" fontWeight="900" fill="#07090e" opacity="0.08">
            MECHANICAL SKETCHING
          </text>
          
          {/* Blueprint Grid Lines & Dimension Rules */}
          <line x1="60" y1="0" x2="60" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="1140" y1="0" x2="1140" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="0" y1="160" x2="1200" y2="160" stroke="#07090e" strokeWidth="1" />
          <line x1="0" y1="760" x2="1200" y2="760" stroke="#07090e" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 space-y-10 relative z-10">
        
        {/* Section Telemetry Header & Cute Notepad Element */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          {/* Left Title & Telemetry */}
          <div className="space-y-3 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07090e] text-white border border-black text-xs font-mono-code shadow-md">
              <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-bold flex items-center justify-center text-[10px]">
                03
              </span>
              <span className="font-bold tracking-wider uppercase">THE CURATED SHOWCASE // WORK INDEX</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#07090e] tracking-tight uppercase leading-tight py-1">
              WORKS{" "}
              <motion.span
                initial={{ color: "#07090e" }}
                whileInView={{ color: "#00D4FF" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SHOWCASE
              </motion.span>
            </h2>

            <p className="font-creative-cursive text-xl sm:text-2xl text-[#07090e]/95 max-w-2xl leading-relaxed font-bold pt-1 text-left">
              "A handpicked collection of applications, engineering tooling, and interactive projects showcasing my passion for design and performant code."
            </p>
          </div>

          {/* Right: Cute Notepad & Writing Pen Element */}
          <motion.div
            initial={{ opacity: 0, rotate: 3, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="sticky-note bg-[#fffdf0] text-black rounded-2xl border-3 border-black p-4.5 shadow-[8px_8px_0px_#07090e] max-w-xs relative hidden sm:block cursor-pointer self-start lg:self-center"
          >
            <div className="tape-strip opacity-90" />
            <div className="flex items-center gap-2 border-b-2 border-dashed border-black/25 pb-2 mb-2">
              <span className="text-xl">✒️</span>
              <span className="font-mono-code text-[11px] font-extrabold uppercase text-slate-900 tracking-wider">
                CREATIVE WORKSPACE LOG
              </span>
            </div>
            <p className="font-handwritten text-sm sm:text-base text-slate-900 font-bold leading-snug">
              ✦ Click any project card to view full case study &amp; launch live demo!
            </p>
            <div className="mt-2.5 font-mono-code text-[10px] font-bold text-slate-700 bg-amber-200/60 px-2 py-0.5 rounded border border-black/20 text-center">
              interactive prototypes &amp; 3D canvases ⚡
            </div>
          </motion.div>

        </div>

        {/* FULL-WIDTH CENTERED 3D ORBIT FAN CAROUSEL CONTAINER */}
        <div className="w-full flex flex-col items-center space-y-10 pt-4">
          
          {/* 3D CAROUSEL PERSPECTIVE TRACK (SPREAD ACROSS WHOLE SCREEN) */}
          <div className="w-full relative min-h-[420px] sm:min-h-[480px] flex items-center justify-center [perspective:1400px] overflow-visible py-4">
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {projects.map((project, idx) => {
                // Determine 3D carousel fan positioning for all 5 cards
                let offset = idx - activeIndex;
                if (offset < -2) offset += projects.length;
                if (offset > 2) offset -= projects.length;

                const isActive = offset === 0;

                let rotateY = 0;
                let translateX = 0;
                let scale = 0.72;
                let zIndex = 10;
                let opacity = 0.5;

                if (offset === 0) {
                  // Center Active Card
                  rotateY = 0;
                  translateX = 0;
                  scale = 1.02;
                  zIndex = 40;
                  opacity = 1;
                } else if (offset === -1) {
                  // Inner Left Card
                  rotateY = -22;
                  translateX = -250;
                  scale = 0.86;
                  zIndex = 30;
                  opacity = 0.85;
                } else if (offset === 1) {
                  // Inner Right Card
                  rotateY = 22;
                  translateX = 250;
                  scale = 0.86;
                  zIndex = 30;
                  opacity = 0.85;
                } else if (offset === -2) {
                  // Outer Left Card
                  rotateY = -35;
                  translateX = -460;
                  scale = 0.72;
                  zIndex = 20;
                  opacity = 0.6;
                } else if (offset === 2) {
                  // Outer Right Card
                  rotateY = 35;
                  translateX = 460;
                  scale = 0.72;
                  zIndex = 20;
                  opacity = 0.6;
                }

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => {
                      if (isActive) {
                        handleOpenModal(project);
                      } else {
                        setActiveIndex(idx);
                      }
                    }}
                    animate={{
                      rotateY,
                      x: translateX,
                      scale,
                      opacity,
                      zIndex
                    }}
                    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`absolute w-[280px] sm:w-[400px] md:w-[450px] rounded-3xl border-4 border-black p-5 sm:p-6 cursor-pointer select-none shadow-[12px_12px_0px_#07090e] transition-colors ${
                      isActive
                        ? 'bg-amber-100/95 border-black ring-4 ring-[#00D4FF]/50 shadow-[0_0_40px_rgba(250,204,21,0.55)]'
                        : 'bg-white/95 border-black/80 hover:border-black'
                    }`}
                  >
                    {/* Project Card Image Preview */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border-2 border-black mb-4 group">
                      <img
                        src={project.image || project.screens?.[0]}
                        onError={(e) => {
                          e.target.src = getFallbackImage(project, 0);
                        }}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#07090e] text-white px-3 py-1 rounded-full border border-black text-[11px] font-mono-code font-bold">
                        <span className="text-[#00D4FF]">PROJECT {project.projectNumber || `0${idx + 1}`}</span>
                        <span className="text-slate-400">•</span>
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Card Content Info */}
                    <div className="space-y-2 text-left">
                      <h3 className="font-display text-xl sm:text-2xl text-black uppercase tracking-tight line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="font-serif-body text-xs sm:text-sm text-slate-800 line-clamp-2 font-medium">
                        {project.subtitle}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono-code text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white border border-black"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="font-mono-code text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/10 text-black border border-black/20">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* INTERACTIVE CAROUSEL EXPLORATION CALLOUT PROMPT */}
          <div className="flex items-center justify-center gap-4 z-20 pt-2">
            <div className="font-handwritten text-lg sm:text-xl font-bold text-black bg-[#00D4FF]/25 px-5 py-2 rounded-full border border-black shadow-md flex items-center gap-2">
              <span>✦ Click any project card directly to launch case study</span>
              <span>↗</span>
            </div>
          </div>

        </div>

      </div>

      {/* FULL PROJECT SHOWCASE MODAL DRAWER */}
      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-lg cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="bg-white text-[#07090e] border-4 border-black rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-[16px_16px_0px_#00D4FF] relative max-h-[90vh] overflow-y-auto space-y-6 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black text-white hover:bg-[#ff2a85] flex items-center justify-center transition-colors cursor-pointer border-2 border-black z-20 shadow-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Top Telemetry Header */}
              <div className="space-y-3 border-b-2 border-black/15 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-code text-xs font-bold px-3.5 py-1 rounded-full bg-black text-[#00D4FF]">
                      PROJECT {selectedProject.projectNumber || '01'}
                    </span>
                    <span className="font-mono-code text-xs font-bold px-3.5 py-1 rounded-full bg-[#facc15] text-black border border-black">
                      {selectedProject.category}
                    </span>
                    <span className="font-mono-code text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-1 rounded-full border border-black/20">
                      Role: {selectedProject.role}
                    </span>
                  </div>

                  {/* Cursive Slide Down Prompt Callout with Curved Downward Arrow */}
                  <div className="inline-flex items-center gap-2 font-handwritten text-base sm:text-lg font-bold text-[#00D4FF] bg-[#07090e] px-4 py-1.5 rounded-full border-2 border-black shadow-[4px_4px_0px_#000] rotate-[-1deg]">
                    <span>scroll more down to explore full case study</span>
                    <svg className="w-5 h-5 text-[#00D4FF] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-5xl text-black uppercase tracking-tight pt-1">
                  {selectedProject.title}
                </h3>

                <p className="font-serif-body text-base sm:text-lg text-slate-800 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* MEDIA SHOWCASE CONTAINER */}
              {isFigmaDesign ? (
                /* 11 MOBILE SCREENS SLIDING CAROUSEL SHOWCASE FOR FIGMA DESIGN */
                <div className="space-y-4 bg-slate-100 p-6 rounded-3xl border-3 border-black">
                  <div className="flex items-center justify-between border-b-2 border-black/15 pb-3">
                    <span className="font-mono-code text-xs font-bold text-black uppercase bg-[#facc15] px-3 py-1 rounded-full border border-black">
                      📱 MOBILE DESIGN SYSTEM // SCREEN {currentScreenIdx + 1} OF 11
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentScreenIdx((prev) => (prev > 0 ? prev - 1 : 10))}
                        className="w-10 h-10 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black border-2 border-black flex items-center justify-center cursor-pointer transition-all shadow-[2px_2px_0px_#000]"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => setCurrentScreenIdx((prev) => (prev < 10 ? prev + 1 : 0))}
                        className="w-10 h-10 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black border-2 border-black flex items-center justify-center cursor-pointer transition-all shadow-[2px_2px_0px_#000]"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Active Mobile Screen Display Frame */}
                  <div className="relative aspect-[9/18.5] max-w-xs mx-auto rounded-3xl overflow-hidden bg-white border-4 border-black shadow-[8px_8px_0px_#07090e] p-2">
                    <img
                      src={`/projects/studentgrowth-${currentScreenIdx + 1}.png`}
                      onError={(e) => {
                        e.target.src = getFallbackImage(selectedProject, currentScreenIdx);
                      }}
                      alt={`Student Growth Tracker Screen ${currentScreenIdx + 1}`}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>

                  {/* 11 Screen Thumbnails Horizontal Selector Ribbon */}
                  <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-2">
                    {Array.from({ length: 11 }).map((_, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => setCurrentScreenIdx(sIdx)}
                        className={`relative w-14 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all ${
                          currentScreenIdx === sIdx
                            ? 'border-[#00D4FF] ring-2 ring-black scale-105 bg-black'
                            : 'border-black/30 opacity-60 hover:opacity-100 bg-white'
                        }`}
                      >
                        <img
                          src={`/projects/studentgrowth-${sIdx + 1}.png`}
                          onError={(e) => {
                            e.target.src = getFallbackImage(selectedProject, sIdx);
                          }}
                          alt={`thumb ${sIdx + 1}`}
                          className="w-full h-full object-contain p-0.5"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* SINGLE PRIMARY THUMBNAIL SCREENSHOT FOR WEB APPLICATIONS */
                <div className="space-y-2">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border-3 border-black shadow-xl cursor-pointer"
                  >
                    <img
                      src={selectedProject.image || selectedProject.screens?.[0]}
                      onError={(e) => {
                        e.target.src = getFallbackImage(selectedProject, 0);
                      }}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark Subtle Bottom Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Subtle Downward Click Indicator Badge at Bottom Right */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#07090e] text-[#00D4FF] px-4 py-2 rounded-full border border-[#00D4FF]/40 text-xs font-mono-code font-bold shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#00D4FF] group-hover:text-black">
                      <span>click to open live site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              )}

              {/* KEY FEATURES & RESULT METRIC */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Left: Key Features */}
                <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border-2 border-black">
                  <h4 className="font-display text-lg text-black uppercase border-b border-black/15 pb-2">
                    KEY FEATURES &amp; ARCHITECTURE
                  </h4>
                  <ul className="space-y-2 font-serif-body text-xs sm:text-sm text-slate-800 font-medium">
                    {selectedProject.keyFeatures?.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Impact Metric & Tech Stack */}
                <div className="space-y-4">
                  {/* Metric Box */}
                  <div className="p-4.5 rounded-2xl bg-[#07090e] text-white border-2 border-black space-y-1.5 shadow-md">
                    <span className="font-mono-code text-xs font-bold text-[#00D4FF] uppercase flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      IMPACT METRIC / RESULT
                    </span>
                    <p className="font-serif-body text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {selectedProject.metric}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="p-4.5 rounded-2xl bg-amber-50 border-2 border-black space-y-2">
                    <span className="font-mono-code text-xs font-extrabold text-slate-900 uppercase block">
                      ENGINEERING TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono-code text-xs font-bold px-3 py-1 rounded-lg bg-black text-white border border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* MODAL FOOTER ACTION LINKS (HIDDEN FOR FIGMA DESIGN PROJECT AS REQUESTED) */}
              {!isFigmaDesign && (
                <div className="pt-4 border-t-2 border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-xs font-bold text-black hover:text-[#00D4FF] flex items-center gap-2 text-decoration-none"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW GITHUB REPOSITORY ↗</span>
                  </a>

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-yellow-3d text-sm px-6 py-2.5 text-decoration-none shadow-[4px_4px_0px_#000000]"
                  >
                    <span>EXPLORE LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
