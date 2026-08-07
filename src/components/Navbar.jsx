import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import HangingLanyardCard from './HangingLanyardCard';

export default function Navbar({ isModalOpen = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  const navLinks = [
    { id: 'hero', name: 'DISCOVER', href: '#hero' },
    { id: 'story', name: 'STORY', href: '#story' },
    { id: 'work', name: 'WORKS', href: '#work' },
    { id: 'lab', name: 'LAB', href: '#lab' },
    { id: 'workbench', name: 'WORKBENCH', href: '#workbench' },
    { id: 'contact', name: 'CONNECT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Force DISCOVER ('hero') when near the top of page
      if (scrollY < 140) {
        setActiveSection('hero');
        return;
      }

      // Detect which section is currently active near upper-middle viewport (35% threshold)
      const viewportCenter = window.innerHeight * 0.35;
      let currentActive = 'hero';

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom > 80) {
            currentActive = link.id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id, href) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-5 left-0 right-0 z-40 px-4 sm:px-8 transition-transform duration-500 ${
      isModalOpen ? '-translate-y-36 pointer-events-none' : 'translate-y-0'
    }`}>
      <div className="max-w-6xl mx-auto bg-white/95 text-black rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] px-5 py-2.5 flex items-center justify-between backdrop-blur-md relative">
        
        {/* Left Monogram KG Logo & Name with Hanging Lanyard Card */}
        <div className="flex items-center gap-3 relative">
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-display text-lg font-bold shadow-md group-hover:scale-105 transition-transform">
              <span className="text-[#FFFFFF]">K</span>
              <span className="text-[#00D4FF]">G</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm tracking-tight text-black group-hover:text-[#00D4FF] transition-colors">
                {PORTFOLIO_DATA.personal.nameFirst} {PORTFOLIO_DATA.personal.nameLast}
              </span>
              <span className="font-mono-code text-[9px] uppercase tracking-wider text-slate-600 font-bold">
                FULL-STACK &amp; UI/UX
              </span>
            </div>
          </a>

          {/* Small "Hire Me" Hanging Lanyard Card & Handwritten Callout hanging right after the name */}
          <div className="hidden sm:flex items-center gap-1 absolute top-[100%] -mt-1 left-[175px] md:left-[200px] z-50 pointer-events-auto">
            <HangingLanyardCard />
            
            {/* Handwritten Cursive Callout Badge with Hand-Drawn Arrow */}
            <div className="hidden md:flex items-center gap-1.5 mt-7 ml-0.5 select-none pointer-events-none">
              {/* Hand-Drawn Left-Pointing Curved Arrow SVG */}
              <svg className="w-8 h-6 text-[#00D4FF] -mr-1 transform -rotate-6" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 46 16 Q 26 28 8 13 M 8 13 L 16 8 M 8 13 L 14 20" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>

              <div className="bg-[#07090e] px-2.5 py-1 rounded-full border border-[#00D4FF]/40 shadow-md rotate-[-2deg]">
                <span className="font-handwritten text-xs font-bold text-[#00D4FF] whitespace-nowrap">
                  drag &amp; stretch me around
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links with 180° Flip-Jump Yellow Highlight Pill Animation */}
        <nav className="hidden lg:flex items-center gap-1.5 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`relative font-mono-code text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-colors cursor-pointer text-decoration-none border-none outline-none ${
                  isActive ? 'text-black font-extrabold' : 'text-slate-700 hover:text-black'
                }`}
              >
                {/* 180° Flip & Jump Yellow Active Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    initial={{ rotateY: 0, y: 0 }}
                    animate={{ rotateY: [0, 180, 360], y: [-6, 0] }}
                    transition={{
                      layout: { type: 'spring', stiffness: 450, damping: 28 },
                      rotateY: { duration: 0.45, ease: "easeOut" },
                      y: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="absolute inset-0 bg-[#facc15] rounded-full border border-black shadow-sm -z-10"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}

          {/* ULTRA-CREATIVE 3D "BRICK PULL-OUT & FALLING DEBRIS" RESUME BUTTON */}
          <div className="relative ml-3">
            <motion.a
              href={PORTFOLIO_DATA.personal.socials.resume}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              whileHover={{ 
                scale: 1.12, 
                rotate: -2, 
                y: -5,
                boxShadow: "8px 8px 0px #00D4FF" 
              }}
              whileTap={{ scale: 0.94 }}
              className="font-mono-code text-xs font-black px-4 py-2 rounded-xl bg-[#07090e] text-[#facc15] hover:text-[#00D4FF] border-2 border-black shadow-[4px_4px_0px_#00D4FF] hover:shadow-[6px_6px_0px_#00D4FF] transition-all text-decoration-none flex items-center gap-2 relative overflow-visible group cursor-pointer"
            >
              {/* Hollow Masonry Brick Socket Slot Outline (Visible behind when brick pulls out) */}
              <div className="absolute inset-0 rounded-xl bg-black/10 border-2 border-dashed border-slate-400 -z-10 pointer-events-none" />

              <FileText className="w-4 h-4 text-[#00D4FF] group-hover:rotate-12 transition-transform" />
              <span className="tracking-wider uppercase font-black relative z-10">RESUME</span>
              <Sparkles className="w-3.5 h-3.5 text-[#facc15] group-hover:rotate-180 transition-transform duration-500 relative z-10" />
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform relative z-10" />

              {/* PHYSICS BRICK FALLING DEBRIS CHIPS (FALL DOWN WHEN BRICK POP-OUT HOVERED) */}
              <AnimatePresence>
                {isResumeHovered && (
                  <>
                    {/* Chip 1 */}
                    <motion.div
                      key="debris-1"
                      initial={{ y: 0, x: -10, rotate: 0, opacity: 1 }}
                      animate={{ y: [0, 50, 95], x: [-10, -25, -40], rotate: [0, 90, 220], opacity: [1, 0.8, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75, ease: "easeIn" }}
                      className="absolute -bottom-2 left-2 w-3 h-3 bg-[#facc15] border border-black rounded-sm pointer-events-none z-30 shadow-xs"
                    />

                    {/* Chip 2 */}
                    <motion.div
                      key="debris-2"
                      initial={{ y: 0, x: 20, rotate: 0, opacity: 1 }}
                      animate={{ y: [0, 60, 110], x: [20, 35, 50], rotate: [0, -120, -300], opacity: [1, 0.8, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.05, ease: "easeIn" }}
                      className="absolute -bottom-2 right-4 w-2.5 h-2.5 bg-[#00D4FF] border border-black rounded-xs pointer-events-none z-30 shadow-xs"
                    />

                    {/* Chip 3 */}
                    <motion.div
                      key="debris-3"
                      initial={{ y: 0, x: 5, rotate: 0, opacity: 1 }}
                      animate={{ y: [0, 70, 130], x: [5, 10, 15], rotate: [0, 180, 360], opacity: [1, 0.9, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.85, delay: 0.1, ease: "easeIn" }}
                      className="absolute -bottom-3 left-1/2 w-3.5 h-2 bg-[#07090e] border border-[#00D4FF] rounded-xs pointer-events-none z-30 shadow-xs"
                    />
                  </>
                )}
              </AnimatePresence>
            </motion.a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white text-black rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000000] p-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setMobileOpen(false);
                handleNavClick(link.id, link.href);
              }}
              className={`block w-full text-left font-mono-code text-sm font-bold py-1 ${
                activeSection === link.id ? 'text-[#00D4FF] font-extrabold' : 'text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.socials.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#facc15] text-black font-mono-code text-xs font-black border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-black" />
              <span>VIEW RESUME ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
