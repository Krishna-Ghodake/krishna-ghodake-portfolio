import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services({ onModalStateChange }) {
  const [selectedCap, setSelectedCap] = useState(null);
  const [isPeeling, setIsPeeling] = useState(false);

  const handleOpenModal = (cap) => {
    setSelectedCap(cap);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseModal = () => {
    setIsPeeling(true);
    setTimeout(() => {
      setSelectedCap(null);
      setIsPeeling(false);
      if (onModalStateChange) onModalStateChange(false);
    }, 450);
  };

  return (
    <section id="services" className="py-24 bg-[#efe5cd] text-[#07090e] relative border-t-2 border-b-2 border-black overflow-hidden">
      
      {/* Background Beach Sand Kraft Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/20 text-xs font-mono-code shadow-md text-white">
            <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-bold flex items-center justify-center text-[10px]">
              05
            </span>
            <span className="font-bold tracking-wider uppercase">CAPABILITIES // 6 STICKY NOTES</span>
          </div>

          <h2 className="font-section-script text-4xl sm:text-5xl md:text-6xl text-[#07090e] tracking-tight py-1">
            <motion.span
              initial={{ color: "#07090e" }}
              whileInView={{ color: "#00D4FF" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-section-script"
            >
              Capabilities
            </motion.span>
          </h2>

          <p className="text-[#07090e]/85 font-serif-body text-lg sm:text-xl max-w-2xl font-medium">
            Click "READ NOTE →" on any sticky note below to inspect deliverables, architecture, and case studies.
          </p>
        </div>

        {/* 2-Column Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO_DATA.capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              whileHover={{ y: -8, rotate: -0.5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ backgroundColor: cap.bgColor }}
              className="rounded-3xl border-2 border-black p-7 sm:p-8 space-y-6 shadow-[6px_6px_0px_#000000] relative flex flex-col justify-between group"
            >
              {/* Push Pin Graphic */}
              <div className="w-4 h-4 rounded-full bg-red-600 border border-black shadow-inner absolute top-4 left-1/2 -translate-x-1/2 z-10" />

              <div className="space-y-4 pt-2">
                {/* Category & Read Time Bar */}
                <div className="flex items-center justify-between font-mono-code text-[11px] font-bold text-black/70 border-b border-black/15 pb-3 uppercase tracking-wider">
                  <span>{cap.category}</span>
                  <span className="bg-black/10 px-2.5 py-0.5 rounded-full">{cap.readTime}</span>
                </div>

                {/* Main Title */}
                <h3 className="font-display text-2xl sm:text-3xl text-black leading-snug tracking-tight">
                  {cap.title}
                </h3>

                {/* Subtitle Tagline */}
                <p className="font-serif-body text-base text-slate-900 leading-relaxed italic">
                  "{cap.tagline}"
                </p>

                {/* Tech Hashtags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cap.hashtags.map((tag, idx) => (
                    <span key={idx} className="font-mono-code text-xs font-bold px-2.5 py-1 rounded-md bg-black/10 text-black border border-black/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-black/15 flex items-center justify-between">
                <span className="font-mono-code text-xs font-bold text-black/60">CAPABILITY {cap.number}</span>
                <button
                  onClick={() => handleOpenModal(cap)}
                  className="font-mono-code text-xs font-extrabold px-4 py-2 rounded-xl bg-black text-white group-hover:bg-[#00D4FF] group-hover:text-black transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>READ NOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Inspection Popup with Real Corner Peel-Off Animation */}
      <AnimatePresence>
        {selectedCap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, rotate: -2 }}
              animate={isPeeling ? { rotate: -18, y: -250, opacity: 0, scale: 0.85 } : { scale: 1, y: 0, rotate: 0, opacity: 1 }}
              exit={{ rotate: -18, y: -250, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: selectedCap.bgColor }}
              className="w-full max-w-2xl rounded-3xl border-4 border-black p-6 sm:p-10 text-black space-y-6 shadow-[16px_16px_0px_#000000] relative max-h-[92vh] overflow-y-auto group/modal"
            >
              {/* Push Pin Graphic */}
              <div className="w-5 h-5 rounded-full bg-red-600 border border-black shadow-inner absolute top-5 left-1/2 -translate-x-1/2" />

              {/* REAL CORNER PEEL FOLD (Top Right Peel Trigger) */}
              <motion.button
                onClick={handleCloseModal}
                whileHover={{ scale: 1.15, rotate: -8 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-0 right-0 w-16 h-16 cursor-pointer z-30 group/peel focus:outline-none"
                title="Peel corner to close note"
              >
                {/* Dog-ear fold triangle shadow */}
                <div className="w-0 h-0 border-t-[50px] border-t-black border-l-[50px] border-l-transparent absolute top-0 right-0 opacity-90 group-hover/peel:border-t-red-600 transition-colors drop-shadow-xl" />
                <div className="w-0 h-0 border-b-[42px] border-b-[#fef08a] border-r-[42px] border-r-transparent absolute top-0 right-0 transform rotate-180 shadow-md group-hover/peel:scale-110 transition-transform" />
                <span className="font-mono-code text-[9px] font-black text-white absolute top-2.5 right-2 group-hover/peel:text-white">
                  PEEL
                </span>
              </motion.button>

              {/* Modal Content */}
              <div className="space-y-6 pt-4">
                <div className="space-y-1">
                  <span className="font-mono-code text-xs font-bold tracking-widest text-slate-800 uppercase">
                    CAPABILITY {selectedCap.number} // {selectedCap.category}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-black">
                    {selectedCap.title}
                  </h3>
                  <p className="font-serif-body text-lg italic font-semibold text-slate-900">
                    "{selectedCap.tagline}"
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-2 bg-black/5 p-4 rounded-2xl border border-black/10">
                  <h4 className="font-mono-code text-xs font-bold uppercase text-black">Core Responsibilities</h4>
                  <p className="text-sm font-sans leading-relaxed font-medium">{selectedCap.responsibilities}</p>
                </div>

                {/* Technical Execution */}
                <div className="space-y-2 bg-black/5 p-4 rounded-2xl border border-black/10">
                  <h4 className="font-mono-code text-xs font-bold uppercase text-black">Technical Execution</h4>
                  <p className="text-sm font-sans leading-relaxed font-medium">{selectedCap.technicalExecution}</p>
                </div>

                {/* Deliverables & Artifacts List */}
                <div className="space-y-3">
                  <h4 className="font-mono-code text-xs font-bold uppercase text-black">Deliverables &amp; Artifacts</h4>
                  <ul className="space-y-2">
                    {selectedCap.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-semibold font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proven Impact / Case Study */}
                <div className="p-4 rounded-2xl bg-black text-white space-y-1">
                  <span className="font-mono-code text-[11px] font-bold text-[#00D4FF] uppercase tracking-wider block">
                    Proven Impact / Case Study
                  </span>
                  <p className="text-sm font-serif-body text-slate-200">{selectedCap.caseStudy}</p>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-black/15">
                  {selectedCap.hashtags.map((tag, idx) => (
                    <span key={idx} className="font-mono-code text-xs font-bold px-3 py-1 rounded-md bg-black/10 text-black border border-black/15">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kinetic Marquee Bridge */}
      <div className="relative mt-16 w-full overflow-hidden bg-[#00D4FF] text-black py-3.5 border-t-2 border-b-2 border-black">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex items-center whitespace-nowrap font-display text-xl sm:text-2xl font-black uppercase tracking-widest"
        >
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span>3-TIER DESKTOP SOFTWARE</span>
              <span className="mx-4 text-black">×</span>
              <span>NEXT.JS 16 &amp; REACT 19</span>
              <span className="mx-4 text-black">×</span>
              <span>GAMIFIED UI/UX RESEARCH</span>
              <span className="mx-4 text-black">×</span>
              <span>60 FPS CANVAS ANIMATION</span>
              <span className="mx-4 text-black">×</span>
              <span>REST API BACKEND</span>
              <span className="mx-4 text-black">×</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
