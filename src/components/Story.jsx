import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Rocket, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Award,
  X,
  ExternalLink,
  FileCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Kinetic Scramble / Decipher Text Animation Component
const CIPHER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$&*@%!?';

function ScrambleText({ text, duration = 1100, className = '' }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!text) return;
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);
    const length = text.length;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealedLength = Math.floor(progress * length);

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ' || char === '—' || char === '–' || char === '&' || char === '/' || char === '•') return char;
          if (index < revealedLength) return text[index];
          return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}

export default function Story({ onModalStateChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Corizo Certificate Modal State
  const [showCorizoCertificates, setShowCorizoCertificates] = useState(false);
  const [activeCertTab, setActiveCertTab] = useState('training'); // 'training' | 'internship'

  const handleToggleModal = (open) => {
    setShowCorizoCertificates(open);
    onModalStateChange?.(open);
  };

  const chapters = PORTFOLIO_DATA.storyChapters || [];
  const totalPages = chapters.length;

  const handleFlipPage = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
      setIsFlipping(false);
    }, 400);
  };

  const currentChapter = chapters[currentPage] || chapters[0];

  return (
    <section id="story" className="relative bg-[#faf8f3] text-[#07090e] border-t-2 border-b-2 border-black overflow-hidden py-20 sm:py-24">
      
      {/* Background Guidelines, Ambient Lighting & Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Atmospheric Soft Ambient Lighting Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#facc15]/15 rounded-full blur-3xl" />

        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="40" y="240" fontSize="150" fontFamily="Archivo Black, sans-serif" fontWeight="900" fill="#07090e" opacity="0.08">
            BEHIND THE CRAFT
          </text>
          <text x="500" y="730" fontSize="120" fontFamily="Caveat, cursive" fontWeight="700" fill="#00D4FF" opacity="0.35">
            ✦ Krishna's Notebook Journal ✦
          </text>
          
          <line x1="80" y1="0" x2="80" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="1120" y1="0" x2="1120" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="0" y1="180" x2="1200" y2="180" stroke="#07090e" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="780" x2="1200" y2="780" stroke="#07090e" strokeWidth="1" strokeDasharray="4 4" />

          {/* Technical Compass & Geometric Sketch Marks */}
          <g transform="translate(1020, 110) scale(0.7)" stroke="#07090e" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="20" />
            <line x1="50" y1="0" x2="50" y2="100" />
            <line x1="0" y1="50" x2="100" y2="50" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 space-y-10 relative z-10">
        
        {/* Top Telemetry Header (Aligned Cleanly on Left to Match Hero Section) */}
        <div className="space-y-3 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07090e] text-white border border-black text-xs font-mono-code shadow-md">
            <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-bold flex items-center justify-center text-[10px]">
              02
            </span>
            <span className="font-bold tracking-wider uppercase">ABOUT ME // THE STORY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#07090e] tracking-tight uppercase leading-tight py-1">
            BEHIND THE{" "}
            <motion.span
              initial={{ color: "#07090e" }}
              whileInView={{ color: "#00D4FF" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CRAFT
            </motion.span>
          </h2>

          <p className="font-creative-cursive text-xl sm:text-2xl text-[#07090e]/95 max-w-3xl leading-relaxed font-bold pt-1 text-left">
            "Explore all 5 chapters detailing my journey from Nashik, academic milestones in B.Sc. Computer Science, industry &amp; freelance experience, technical stack, and future product vision."
          </p>
        </div>

        {/* 5 CHAPTER TABS CONTROL BAR */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 max-w-4xl border-b-2 border-black/15 pb-4">
          {chapters.map((chap, idx) => {
            const isActive = idx === currentPage;
            return (
              <button
                key={chap.id}
                onClick={() => setCurrentPage(idx)}
                className={`px-4 py-2 rounded-xl font-mono-code text-xs font-bold transition-all border-2 border-black cursor-pointer flex items-center gap-2 ${
                  isActive 
                    ? 'bg-black text-white shadow-[4px_4px_0px_#00D4FF] scale-105' 
                    : 'bg-white text-slate-800 hover:bg-amber-100 hover:text-black shadow-[2px_2px_0px_#000]'
                }`}
              >
                <span>CH {chap.chapterNumber}</span>
                <span className="hidden sm:inline">• {chap.id.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN NOTEBOOK FLIPBOOK CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Notebook Page Stack Background Effects */}
          <div className="absolute inset-0 bg-[#facc15] rounded-3xl transform rotate-2 border-4 border-black translate-y-3 translate-x-3 pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-1 border-4 border-black translate-y-1.5 translate-x-1.5 pointer-events-none opacity-30" />

          {/* MAIN FLIPPABLE SHEET WITH VERTICAL SLIDE & WORD SCRAMBLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              onClick={handleFlipPage}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -35, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl bg-white rounded-3xl border-4 border-black p-7 sm:p-11 shadow-[12px_12px_0px_#07090e] relative z-10 min-h-[520px] flex flex-col justify-between cursor-pointer group"
            >
              {/* Push Pin Graphic */}
              <div className="w-5 h-5 rounded-full bg-[#ff2a85] border-2 border-black shadow-lg absolute -top-3 left-1/2 -translate-x-1/2 z-30" />

              {/* Tape Strip Accent */}
              <div className="tape-strip opacity-80" />

              {/* Top Page Chapter Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-black/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-extrabold text-[#00D4FF] bg-[#07090e] px-3.5 py-1 rounded-full uppercase tracking-wider">
                    CHAPTER 0{currentPage + 1} OF 05
                  </span>
                  <span className="font-mono-code text-xs font-bold text-slate-500 hidden sm:inline-block">
                    {currentChapter.subtitle}
                  </span>
                </div>

                <span className="font-handwritten text-base sm:text-lg font-bold text-slate-500 group-hover:text-black transition-colors">
                  click paper to flip page
                </span>
              </div>

              {/* DYNAMIC CHAPTER CONTENT WITH KINETIC TEXT CIPHER */}
              <div className="py-6 space-y-6 flex-1">
                
                {/* CHAPTER 01 / Personal Story */}
                {currentPage === 0 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-slate-500 uppercase">CHAPTER 01 / Personal Story</span>
                        <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#07090e] border border-[#38bdf8] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#00D4FF]" />
                          Nashik, India
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-4xl text-[#07090e]">
                        <ScrambleText text={currentChapter.title} key={`t0-${currentPage}`} duration={1100} />
                      </h3>
                    </div>

                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="font-serif-body text-base sm:text-lg text-slate-800 leading-relaxed font-medium"
                    >
                      I come from Nashik, India, where my journey began with a simple curiosity about computers and technology. I was always fascinated by how technology works behind the screen and how a few lines of code could bring an idea to life.
                    </motion.p>

                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="font-serif-body text-sm sm:text-base text-slate-700 leading-relaxed"
                    >
                      That curiosity pushed me to start exploring programming, web development, and design. Soon, I realized I didn't just want to use technology—I wanted to build with it. Every project became an opportunity to experiment, learn something new, and turn imagination into something real.
                    </motion.p>

                    <blockquote className="p-4 rounded-2xl bg-amber-100/90 border-l-4 border-[#facc15] text-slate-900 font-serif-body text-base italic font-semibold shadow-sm">
                      "{currentChapter.quote}"
                    </blockquote>
                  </div>
                )}

                {/* CHAPTER 02 / Academics */}
                {currentPage === 1 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-slate-500 uppercase">CHAPTER 02 / Academics</span>
                        <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#facc15] text-black border border-black flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5" />
                          2024 – 2027
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-4xl text-[#07090e]">
                        <ScrambleText text={currentChapter.title} key={`t1-${currentPage}`} duration={1100} />
                      </h3>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border-2 border-black space-y-2 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-2">
                        <div>
                          <h4 className="font-display text-lg sm:text-xl text-black">
                            {currentChapter.degree}
                          </h4>
                          <span className="font-mono-code text-xs font-semibold text-slate-600">
                            Status: {currentChapter.status}
                          </span>
                        </div>
                        <span className="font-mono-code text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                          {currentChapter.sgpa}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-sans font-bold text-slate-800 pt-1">
                        {currentChapter.college}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono-code text-xs font-bold uppercase text-slate-600 block">Key Areas Studied:</span>
                      <p className="font-mono-code text-xs font-bold text-slate-900 bg-black/5 p-3 rounded-xl border border-black/15">
                        {currentChapter.keyAreas?.join(" • ")}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono-code text-xs font-bold uppercase text-slate-600 block">Learning Beyond the Classroom:</span>
                      <div className="flex flex-wrap gap-2">
                        {currentChapter.learningBeyond?.map((item, idx) => (
                          <span key={idx} className="font-mono-code text-xs font-bold px-3 py-1 rounded-lg bg-black text-white border border-black flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-[#00D4FF]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CHAPTER 03 / Work & Projects (WITH CORIZO CERTIFICATE BUTTON) */}
                {currentPage === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-slate-500 uppercase">CHAPTER 03 / Work &amp; Projects</span>
                        <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#00D4FF] text-black border border-black flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          2025 – Present
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#07090e]">
                        <ScrambleText text={currentChapter.title} key={`t2-${currentPage}`} duration={1100} />
                      </h3>
                    </div>

                    <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-1">
                      
                      {/* Exp 1: Corizo Data Science Intern (WITH VIEW CERTIFICATES BUTTON) */}
                      <div className="p-4 rounded-2xl bg-amber-50 border-2 border-black space-y-2 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-1">
                          <h4 className="font-display text-base text-black font-bold">
                            1. Data Science Intern — Corizo Edutech
                          </h4>
                          <span className="font-mono-code text-[11px] font-bold text-slate-700">3 Months Duration</span>
                        </div>
                        
                        <p className="text-xs font-serif-body text-slate-800 font-medium">
                          Focused on learning and applying core concepts such as Python, NumPy, Pandas, Statistics, Probability, Data Visualization, Linear Regression, Logistic Regression, and K-Nearest Neighbors.
                        </p>
                        
                        <p className="text-xs font-serif-body text-slate-700 bg-white/80 p-2 rounded-lg border border-black/10">
                          Worked on the NHANES Body Measurements Analysis Capstone Project in Google Colab, performing statistical analysis, calculating BMI &amp; body ratios, standardizing data, and generating visual correlations with Matplotlib and Seaborn.
                        </p>

                        {/* VIEW CERTIFICATE BUTTON */}
                        <div className="pt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleModal(true);
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black font-mono-code text-xs font-bold transition-all border-2 border-black shadow-[3px_3px_0px_#000] cursor-pointer"
                            title="Click to view Corizo Internship & Training Certificates"
                          >
                            <Award className="w-3.5 h-3.5 text-[#facc15]" />
                            <span>VIEW CERTIFICATE</span>
                          </button>
                        </div>
                      </div>

                      {/* Exp 2 */}
                      <div className="p-4 rounded-2xl bg-sky-50 border-2 border-black space-y-1.5 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-black/10 pb-1">
                          <h4 className="font-display text-base text-black font-bold">
                            2. Freelance Web Developer &amp; UI/UX Designer — Znole
                          </h4>
                          <span className="font-mono-code text-[11px] font-bold text-slate-700">2026 — Present</span>
                        </div>
                        <p className="text-xs font-serif-body text-slate-800 font-medium">
                          Partnering with clients to design and develop modern, responsive, and interactive digital experiences. Combining full-stack web development with Figma UI/UX prototyping to transform business requirements into performant websites.
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {["Modern Responsive Layouts", "Figma Interactive Prototypes", "Full-Stack Integration", "Modern Vercel/Netlify Workflows"].map((bullet, idx) => (
                            <span key={idx} className="font-mono-code text-[10px] font-bold px-2 py-0.5 rounded bg-black/10 text-black">
                              • {bullet}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Exp 3 */}
                      <div className="p-4 rounded-2xl bg-pink-50 border-2 border-black space-y-1 shadow-sm">
                        <h4 className="font-display text-base text-black border-b border-black/10 pb-1 font-bold">
                          3. Full-Stack Web Development Projects
                        </h4>
                        <p className="text-xs font-serif-body text-slate-800 font-medium">
                          Designing and developing creative web apps including Cosmoverse (3D Celestial Canvas), Cybersisterhood (Digital Safety Platform), and Aurelia Skyline Dining (High Altitude Gastronomy).
                        </p>
                      </div>

                    </div>
                  </div>
                )}

                {/* CHAPTER 04 / Technical Capabilities */}
                {currentPage === 3 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-slate-500 uppercase">CHAPTER 04 / Skills &amp; Stack</span>
                        <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ff2a85] text-white border border-black flex items-center gap-1">
                          <Cpu className="w-3.5 h-3.5" />
                          Toolkits
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-4xl text-[#07090e]">
                        <ScrambleText text={currentChapter.title} key={`t3-${currentPage}`} duration={1100} />
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[330px] overflow-y-auto pr-1">
                      {(currentChapter.categories || currentChapter.toolkits || []).map((cat, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border-2 border-black space-y-1 text-left shadow-xs">
                          <span className="font-mono-code text-xs font-extrabold text-[#00D4FF] bg-black px-2 py-0.5 rounded uppercase">
                            0{idx + 1}. {cat.name}
                          </span>
                          <p className="text-xs font-serif-body text-slate-800 font-bold pt-1 leading-snug">
                            {cat.items || cat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CHAPTER 05 / Future Product Vision */}
                {currentPage === 4 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-code text-xs font-bold text-slate-500 uppercase">CHAPTER 05 / Future Vision</span>
                        <span className="font-mono-code text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#facc15] text-black border border-black flex items-center gap-1">
                          <Rocket className="w-3.5 h-3.5" />
                          2026+
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-4xl text-[#07090e]">
                        <ScrambleText text={currentChapter.title} key={`t4-${currentPage}`} duration={1100} />
                      </h3>
                    </div>

                    <p className="font-serif-body text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                      {currentChapter.content}
                    </p>

                    <div className="p-5 rounded-2xl bg-[#00D4FF]/10 border-2 border-black space-y-2 shadow-sm text-left">
                      <h4 className="font-mono-code text-xs font-extrabold text-black uppercase tracking-wider">
                        Core Principles Moving Forward:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono-code text-xs font-bold text-slate-900">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>Delightful Motion &amp; UX</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>Scalable Clean Code</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>Real User Utility</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                          <span>Distinct Visual Identity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Pagination Footer */}
              <div className="flex items-center justify-between border-t-2 border-black/15 pt-4">
                <span className="font-mono-code text-xs font-bold text-slate-600">
                  PAGE 0{currentPage + 1} OF 05
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
                    }}
                    className="px-3 py-1.5 rounded-lg bg-black text-white hover:bg-[#00D4FF] hover:text-black font-mono-code text-xs font-bold transition-all border border-black shadow-xs cursor-pointer"
                  >
                    PREV
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#00D4FF] text-black hover:bg-black hover:text-white font-mono-code text-xs font-bold transition-all border border-black shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    <span>NEXT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* CORIZO DATA SCIENCE CERTIFICATES MODAL OVERLAY */}
      <AnimatePresence>
        {showCorizoCertificates && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 sm:p-6 select-none overflow-y-auto transform-gpu"
            onClick={() => handleToggleModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-[#fcfaf4] rounded-3xl border-4 border-black p-5 sm:p-7 shadow-[16px_16px_0px_#000] relative space-y-4 text-left text-black my-auto transform-gpu"
            >
              {/* Top Modal Header */}
              <div className="flex items-center justify-between border-b-2 border-black/15 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-[10px] font-black uppercase text-black bg-[#facc15] px-3 py-0.5 rounded-full border border-black shadow-xs flex items-center gap-1">
                      <Award className="w-3 h-3 text-black" />
                      <span>CORIZO EDUTECH</span>
                    </span>
                    <a
                      href={activeCertTab === 'training' ? "https://credentials.corizo.in/credential/a641323c-9d2a-4e06-8caa-3179b23cdf15" : "https://credentials.corizo.in/credential/11dfcb59-9d88-4e87-9406-45ace6304138?view=recipient"}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code text-[10px] font-bold text-slate-600 hover:text-[#00D4FF] uppercase flex items-center gap-1 underline transition-colors"
                      title="Click to verify credential on Corizo portal"
                    >
                      <span>ID: {activeCertTab === 'training' ? 'CRZ153975' : 'CRZ058253'}</span>
                      <ExternalLink className="w-3 h-3 text-[#00D4FF]" />
                    </a>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-black font-extrabold uppercase tracking-tight">
                    DATA SCIENCE CERTIFICATIONS
                  </h3>
                </div>

                <button
                  onClick={() => handleToggleModal(false)}
                  className="w-9 h-9 rounded-full bg-black text-white hover:bg-red-600 flex items-center justify-center transition-colors border-2 border-black shadow-md cursor-pointer"
                  title="Close Certificate Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Tabs (Training vs Internship) */}
              <div className="flex items-center gap-2 border-b-2 border-black/10 pb-3">
                <button
                  onClick={() => setActiveCertTab('training')}
                  className={`px-4 py-2 rounded-xl font-mono-code text-xs font-black uppercase transition-all border-2 border-black cursor-pointer flex items-center gap-1.5 ${
                    activeCertTab === 'training'
                      ? 'bg-[#ff2a85] text-white shadow-[3px_3px_0px_#000]'
                      : 'bg-white text-slate-800 hover:bg-amber-100 shadow-xs'
                  }`}
                >
                  <FileCheck className="w-4 h-4" />
                  <span>1. CERTIFICATE OF TRAINING</span>
                </button>

                <button
                  onClick={() => setActiveCertTab('internship')}
                  className={`px-4 py-2 rounded-xl font-mono-code text-xs font-black uppercase transition-all border-2 border-black cursor-pointer flex items-center gap-1.5 ${
                    activeCertTab === 'internship'
                      ? 'bg-[#00D4FF] text-black shadow-[3px_3px_0px_#000]'
                      : 'bg-white text-slate-800 hover:bg-sky-100 shadow-xs'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>2. CERTIFICATE OF INTERNSHIP</span>
                </button>
              </div>

              {/* Certificate Display Screen */}
              <div className="bg-white border-2 border-black rounded-2xl p-2.5 shadow-inner relative overflow-hidden">
                {activeCertTab === 'training' ? (
                  <div className="space-y-2">
                    <a
                      href="https://credentials.corizo.in/credential/a641323c-9d2a-4e06-8caa-3179b23cdf15"
                      target="_blank"
                      rel="noreferrer"
                      className="block group cursor-pointer"
                      title="Click to view/verify training certificate details on Corizo portal"
                    >
                      <img 
                        src="/corizo-training-certificate.png" 
                        alt="Corizo Certificate of Training — Krishna Ghodake" 
                        className="w-full h-auto rounded-xl border border-black/20 shadow-md object-contain max-h-[500px] mx-auto group-hover:scale-[1.005] transition-transform"
                      />
                    </a>
                    <div className="flex items-center justify-between pt-1 px-1 font-mono-code text-xs font-bold text-slate-700">
                      <span>✦ CERTIFICATE OF TRAINING // DATA SCIENCE</span>
                      <a 
                        href="https://credentials.corizo.in/credential/a641323c-9d2a-4e06-8caa-3179b23cdf15" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-black hover:text-[#00D4FF] flex items-center gap-1 underline font-bold"
                      >
                        <span>OPEN OFFICIAL PORTAL</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#00D4FF]" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <a
                      href="https://credentials.corizo.in/credential/11dfcb59-9d88-4e87-9406-45ace6304138?view=recipient"
                      target="_blank"
                      rel="noreferrer"
                      className="block group cursor-pointer"
                      title="Click to view/verify internship certificate details on Corizo portal"
                    >
                      <img 
                        src="/corizo-internship-certificate.png" 
                        alt="Corizo Certificate of Internship — Krishna Ghodake" 
                        className="w-full h-auto rounded-xl border border-black/20 shadow-md object-contain max-h-[500px] mx-auto group-hover:scale-[1.005] transition-transform"
                      />
                    </a>
                    <div className="flex items-center justify-between pt-1 px-1 font-mono-code text-xs font-bold text-slate-700">
                      <span>✦ CERTIFICATE OF INTERNSHIP // DATA SCIENCE</span>
                      <a 
                        href="https://credentials.corizo.in/credential/11dfcb59-9d88-4e87-9406-45ace6304138?view=recipient" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-black hover:text-[#00D4FF] flex items-center gap-1 underline font-bold"
                      >
                        <span>OPEN OFFICIAL PORTAL</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#00D4FF]" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Info Bar */}
              <div className="border-t-2 border-black/15 pt-2 font-mono-code text-xs font-bold text-slate-700 text-left">
                <span>KRISHNA GHODAKE // CORIZO EDUTECH · DATA SCIENCE</span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
