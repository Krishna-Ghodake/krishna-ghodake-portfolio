import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Compass, ChevronRight, ChevronLeft } from 'lucide-react';

export default function SideNavWheel() {
  const [isOpen, setIsOpen] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { name: 'DISCOVER', href: '#hero', icon: '01' },
    { name: 'WORKS', href: '#projects', icon: '02' },
    { name: 'DEFINE', href: '#skills', icon: '03' },
    { name: 'TERMINAL', href: '#terminal', icon: '04' },
    { name: 'TIMELINE', href: '#timeline', icon: '05' },
    { name: 'DISCUSS', href: '#contact', icon: '06' },
  ];

  const angleStep = 360 / sections.length;

  const handleSelectOption = (index, href) => {
    setActiveIndex(index);
    // Rotate wheel so selected option points outwards
    const targetRotation = -index * angleStep;
    setRotation(targetRotation);

    // Smooth scroll to target section
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRotateWheel = (direction) => {
    const nextIndex = (activeIndex + direction + sections.length) % sections.length;
    handleSelectOption(nextIndex, sections[nextIndex].href);
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex items-center select-none">
      
      {/* Expand / Collapse Edge Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-0 -top-12 z-50 px-2.5 py-1 rounded-r-xl bg-black border-2 border-l-0 border-white/20 text-[#facc15] font-mono-code text-[10px] font-bold flex items-center gap-1 shadow-2xl hover:bg-slate-900 cursor-pointer"
        title="Toggle Side Option Wheel Nav"
      >
        <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
        <span>{isOpen ? 'HIDE WHEEL' : 'WHEEL NAV'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative -left-36 sm:-left-44 w-72 h-72 sm:w-88 sm:h-88 rounded-full border-4 border-white/20 bg-[#07090e]/95 backdrop-blur-xl shadow-2xl flex items-center justify-center p-3"
          >
            {/* Outer Circular Track */}
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full rounded-full relative border-2 border-dashed border-white/20 flex items-center justify-center"
            >
              {sections.map((sec, i) => {
                const angle = i * angleStep;
                const rad = (angle * Math.PI) / 180;
                // Position options around circle edge
                const radius = 120; // px
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                const isActive = activeIndex === i;

                return (
                  <button
                    key={sec.name}
                    onClick={() => handleSelectOption(i, sec.href)}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`
                    }}
                    className={`absolute px-3 py-1 rounded-full font-mono-code text-[11px] font-bold shadow-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap border ${
                      isActive
                        ? 'bg-[#facc15] text-black border-white scale-110 shadow-[0_0_15px_#facc15]'
                        : 'bg-black/80 text-white border-white/20 hover:border-[#38bdf8] hover:text-[#38bdf8]'
                    }`}
                  >
                    <span className="text-[9px] opacity-75 font-mono">{sec.icon}.</span>
                    <span>{sec.name}</span>
                  </button>
                );
              })}
            </motion.div>

            {/* Inner Center Hub Controls */}
            <div className="absolute right-3 sm:right-6 flex flex-col items-center gap-2 z-30">
              <button
                onClick={() => handleRotateWheel(-1)}
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/20 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                title="Rotate Option Wheel Up"
              >
                <ChevronLeft className="w-4 h-4 rotate-90" />
              </button>

              <div className="text-center font-mono-code text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-black/80 px-2 py-1 rounded-md border border-white/10">
                {sections[activeIndex].name}
              </div>

              <button
                onClick={() => handleRotateWheel(1)}
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/20 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                title="Rotate Option Wheel Down"
              >
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
