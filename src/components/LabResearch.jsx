import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ExternalLink, Sparkles, BookOpen, ChevronLeft, ChevronRight, X, ShieldCheck, Award, Download, ArrowUpRight } from 'lucide-react';

export default function LabResearch({ onModalStateChange }) {
  const [activeResearchIdx, setActiveResearchIdx] = useState(0);
  const [selectedResearchModal, setSelectedResearchModal] = useState(null);
  const [certificateModalImg, setCertificateModalImg] = useState(null);

  const researchList = PORTFOLIO_DATA.labResearch || [];
  const currentResearch = researchList[activeResearchIdx] || researchList[0];

  const handleOpenModal = (item) => {
    setSelectedResearchModal(item);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseModal = () => {
    setSelectedResearchModal(null);
    if (onModalStateChange && !certificateModalImg) onModalStateChange(false);
  };

  const handleOpenCertificate = (imgUrl) => {
    setCertificateModalImg(imgUrl);
    if (onModalStateChange) onModalStateChange(true);
  };

  const handleCloseCertificate = () => {
    setCertificateModalImg(null);
    if (onModalStateChange && !selectedResearchModal) onModalStateChange(false);
  };

  // Keyboard Escape listener to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (certificateModalImg) {
          handleCloseCertificate();
        } else if (selectedResearchModal) {
          handleCloseModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedResearchModal, certificateModalImg]);

  return (
    <section id="lab" className="py-24 bg-[#faf8f3] text-[#07090e] relative border-t-2 border-b-2 border-black overflow-hidden">
      
      {/* Blueprint Line Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 900" fill="none">
          <line x1="80" y1="0" x2="80" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="1120" y1="0" x2="1120" y2="900" stroke="#07090e" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="0" y1="180" x2="1200" y2="180" stroke="#07090e" strokeWidth="1" />
          <line x1="0" y1="780" x2="1200" y2="780" stroke="#07090e" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-12 space-y-12 relative z-10">
        
        {/* Section Telemetry Header */}
        <div className="space-y-3 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07090e] text-white border border-black text-xs font-mono-code shadow-md">
            <span className="w-5 h-5 rounded-full bg-[#00D4FF] text-black font-bold flex items-center justify-center text-[10px]">
              04
            </span>
            <span className="font-bold tracking-wider uppercase">LAB // RESEARCH &amp; CASE STUDIES</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#07090e] tracking-tight uppercase leading-tight py-1">
            RESEARCH INSIGHTS &amp;{" "}
            <motion.span
              initial={{ color: "#07090e" }}
              whileInView={{ color: "#00D4FF" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CASE STUDIES
            </motion.span>
          </h2>

          <p className="font-creative-cursive text-xl sm:text-2xl text-[#07090e]/95 max-w-3xl leading-relaxed font-bold pt-1 text-left">
            "Peer-reviewed research papers, user experience case studies, and engineering prototypes exploring gamification, automation, and social digital safety."
          </p>
        </div>

        {/* TOP LAYOUT: 3 FOCUS AREA CARDS (LEFT) + SPIRAL RING NOTEBOOK BINDER (RIGHT / CENTER) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CORE RESEARCH FOCUS AREAS */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2 text-left">
              <h3 className="font-display text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight">
                EXPLORING. EXPERIMENTING. <span className="text-[#00D4FF] bg-[#07090e] px-2 py-0.5 rounded-lg">CREATING IMPACT.</span>
              </h3>
              <p className="font-serif-body text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                A collection of <span className="text-[#ff2a85] font-bold">research papers</span> and real-world <span className="text-[#00D4FF] font-bold">case studies</span> where I analyzed problems, tested ideas, and built meaningful solutions.
              </p>
            </div>

            {/* 3 Core Research Focus Area Cards */}
            <div className="grid grid-cols-1 gap-3.5 pt-2 text-left">
              
              {/* Focus 1 */}
              <div className="p-4 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#07090e] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 border-2 border-black flex items-center justify-center text-xl font-bold text-pink-600 flex-shrink-0">
                  🎓
                </div>
                <div>
                  <div className="font-mono-code text-sm font-black text-black">Higher Education &amp; Gamification</div>
                  <div className="text-[11px] text-slate-700 font-medium leading-tight">Behavioral design, XP mechanics &amp; ERP engagement</div>
                </div>
              </div>

              {/* Focus 2 */}
              <div className="p-4 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#07090e] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-black flex items-center justify-center text-xl font-bold text-amber-600 flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="font-mono-code text-sm font-black text-black">Desktop &amp; Database Engineering</div>
                  <div className="text-[11px] text-slate-700 font-medium leading-tight">Python Tkinter GUI, MySQL RDBMS &amp; 3-Tier architecture</div>
                </div>
              </div>

              {/* Focus 3 */}
              <div className="p-4 rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#07090e] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 border-2 border-black flex items-center justify-center text-xl font-bold text-cyan-600 flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <div className="font-mono-code text-sm font-black text-black">Cyber Safety &amp; Social Impact</div>
                  <div className="text-[11px] text-slate-700 font-medium leading-tight">POSH Act compliance, digital safety &amp; helpline resources</div>
                </div>
              </div>

            </div>
          </div>

          {/* CENTER/RIGHT: SPIRAL RING NOTEBOOK BINDER */}
          <div className="lg:col-span-8 relative" style={{ perspective: "1800px" }}>
            
            {/* Top Tape Badge */}
            <div className="absolute -top-4 left-12 z-30 bg-[#ff2a85] text-white font-mono-code text-xs font-black uppercase px-4 py-1 rounded-md border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-2deg]">
              FEATURED RESEARCH
            </div>

            {/* FULL SPIRAL BINDER SHEET ANIMATION CONTAINER (AnimatePresence for whole sheet 3D page flip) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeResearchIdx}
                initial={{ 
                  rotateY: 95, 
                  rotateZ: 3, 
                  skewY: -2,
                  x: 40,
                  opacity: 0, 
                  scale: 0.95
                }}
                animate={{ 
                  rotateY: 0, 
                  rotateZ: 0, 
                  skewY: 0,
                  x: 0,
                  opacity: 1, 
                  scale: 1 
                }}
                exit={{ 
                  rotateY: -105, 
                  rotateZ: -4, 
                  skewY: 3,
                  x: -50,
                  opacity: 0, 
                  scale: 0.92
                }}
                transition={{ 
                  duration: 0.65, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d"
                }}
                className="bg-[#fffdf0] text-black border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[12px_12px_0px_#07090e] relative space-y-4 overflow-hidden min-h-[520px]"
              >
                
                {/* Binder Rings on Left Margin */}
                <div className="absolute -left-4 top-8 bottom-8 flex flex-col justify-between z-40 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-8 h-4 bg-slate-900 border-2 border-black rounded-full shadow-md" />
                  ))}
                </div>

                {/* Left Paper Fold Crease Shadow overlay */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-20"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.03) 60%, transparent 100%)"
                  }}
                />

                {/* Binder Frame Top Controls */}
                <div className="flex items-center justify-between border-b-2 border-black/15 pb-3 pl-4 relative z-30">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-[11px] font-extrabold text-slate-800 uppercase bg-amber-200/80 px-3 py-1 rounded-full border border-black/30 shadow-xs">
                      NOTEBOOK PAGE 0{activeResearchIdx + 1} / 0{researchList.length}
                    </span>
                  </div>

                  {/* Next / Previous Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveResearchIdx((prev) => (prev > 0 ? prev - 1 : researchList.length - 1))}
                      className="w-9 h-9 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black border-2 border-black flex items-center justify-center cursor-pointer transition-all shadow-[2px_2px_0px_#000]"
                      title="Previous Notebook Page"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveResearchIdx((prev) => (prev < researchList.length - 1 ? prev + 1 : 0))}
                      className="w-9 h-9 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black border-2 border-black flex items-center justify-center cursor-pointer transition-all shadow-[2px_2px_0px_#000]"
                      title="Next Notebook Page"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Page Category Header Badge */}
                <div className="flex items-center justify-between border-b border-black/10 pb-2 pl-4">
                  <span className="font-mono-code text-xs font-bold text-[#00D4FF] bg-[#07090e] px-3.5 py-1 rounded-full border border-black uppercase shadow-sm">
                    {currentResearch.category}
                  </span>
                  <span className="font-mono-code text-[10px] font-bold text-slate-500 uppercase">
                    RESEARCH SHEET // 0{activeResearchIdx + 1}
                  </span>
                </div>

                {/* Binder Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pl-3">
                  
                  {/* Left Text Summary */}
                  <div className="md:col-span-7 lg:col-span-8 space-y-3.5 text-left pr-1">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-black leading-tight uppercase font-extrabold tracking-tight">
                      {currentResearch.title}
                    </h3>

                    <p className="font-serif-body text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {currentResearch.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentResearch.tags?.map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono-code text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white border border-black">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DYNAMIC SPECIFIC ACTION BUTTONS PER RESEARCH ITEM (SIDE-BY-SIDE + PRESENTATION BELOW) */}
                    <div className="pt-3 space-y-2.5">
                      
                      {/* Item 01 Specific Action Buttons */}
                      {currentResearch.id === 'gamification-erp-casestudy' && (
                        <>
                          {/* Row 1: Side-by-Side Inspect & Certificate Buttons */}
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(currentResearch)}
                              className="px-3 py-2 rounded-xl bg-[#facc15] text-black hover:bg-black hover:text-white font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                            >
                              <span>INSPECT CASE STUDY</span>
                            </button>

                            {currentResearch.certificateImg && (
                              <button
                                onClick={() => handleOpenCertificate(currentResearch.certificateImg)}
                                className="px-3 py-2 rounded-xl bg-[#ff2a85] text-white hover:bg-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                              >
                                <span>SRPS CERTIFICATE</span>
                                <Award className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Row 2: View Presentation PDF Below */}
                          {currentResearch.pdfUrl && (
                            <div>
                              <a
                                href={currentResearch.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black shadow-[2.5px_2.5px_0px_#00D4FF]"
                              >
                                <span>VIEW PRESENTATION PDF</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </>
                      )}

                      {/* Item 02 Specific Action Buttons */}
                      {currentResearch.id === 'jms-paper-2024' && (
                        <>
                          {/* Row 1: Side-by-Side Inspect & Certificate Buttons */}
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(currentResearch)}
                              className="px-3 py-2 rounded-xl bg-[#facc15] text-black hover:bg-black hover:text-white font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                            >
                              <span>INSPECT CASE STUDY</span>
                            </button>

                            {currentResearch.certificatePdfUrl && (
                              <a
                                href={currentResearch.certificatePdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 rounded-xl bg-[#ff2a85] text-white hover:bg-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000]"
                              >
                                <span>ICAC CERTIFICATE</span>
                                <Award className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                          {/* Row 2: Read Research Paper Below */}
                          {currentResearch.pdfUrl && (
                            <div>
                              <a
                                href={currentResearch.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black shadow-[2.5px_2.5px_0px_#00D4FF]"
                              >
                                <span>READ RESEARCH PAPER</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </>
                      )}

                      {/* Item 03 Specific Action Buttons */}
                      {currentResearch.id === 'cybersisterhood-casestudy' && (
                        <>
                          {/* Row 1: Side-by-Side Inspect & Certificate Buttons */}
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(currentResearch)}
                              className="px-3 py-2 rounded-xl bg-[#facc15] text-black hover:bg-black hover:text-white font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                            >
                              <span>INSPECT CASE STUDY</span>
                            </button>

                            {currentResearch.certificateImg && (
                              <button
                                onClick={() => handleOpenCertificate(currentResearch.certificateImg)}
                                className="px-3 py-2 rounded-xl bg-[#ff2a85] text-white hover:bg-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                              >
                                <span>SRPS CERTIFICATE</span>
                                <Award className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Row 2: Explore Live Platform Below */}
                          {currentResearch.demoUrl && (
                            <div>
                              <a
                                href={currentResearch.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black shadow-[2.5px_2.5px_0px_#00D4FF]"
                              >
                                <span>EXPLORE LIVE PLATFORM</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </>
                      )}

                      {/* Item 04 Specific Action Buttons */}
                      {currentResearch.id === 'avr-iot-workshop-2025' && (
                        <>
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(currentResearch)}
                              className="px-3 py-2 rounded-xl bg-[#facc15] text-black hover:bg-black hover:text-white font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                            >
                              <span>INSPECT WORKSHOP</span>
                            </button>

                            {currentResearch.certificateImg && (
                              <button
                                onClick={() => handleOpenCertificate(currentResearch.certificateImg)}
                                className="px-3.5 py-2 rounded-xl bg-[#00D4FF] text-black hover:bg-black hover:text-white font-mono-code text-[11px] sm:text-xs font-bold transition-all border-2 border-black flex items-center gap-1.5 shadow-[2.5px_2.5px_0px_#000] cursor-pointer"
                              >
                                <span>VIEW CERTIFICATE ↗</span>
                                <Award className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </>
                      )}

                    </div>
                  </div>

                  {/* Right Specific Architecture & System Diagram Box (self-start prevents empty vertical stretching) */}
                  <div className="md:col-span-5 lg:col-span-4 self-start bg-white border-2 border-black rounded-2xl p-4 space-y-3 shadow-inner text-left">
                    
                    {/* Item 01 Specific Diagram */}
                    {currentResearch.id === 'gamification-erp-casestudy' && (
                      <>
                        <div className="flex items-center justify-between border-b border-black/15 pb-2">
                          <span className="font-mono-code text-[10px] font-bold text-slate-600 uppercase">GAMIFICATION FRAMEWORK</span>
                          <span className="text-xs">🎮</span>
                        </div>

                        <div className="space-y-2 font-mono-code text-[11px] text-slate-800">
                          <div className="p-2 rounded bg-amber-50 border border-black/20 text-center font-bold">
                            XP &amp; Level Progression
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-cyan-50 border border-black/20 text-center font-bold">
                            Duolingo Streaks &amp; Badges
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-emerald-50 border border-black/20 text-center font-bold text-emerald-800">
                            Student Engagement: +45%
                          </div>
                        </div>

                        <div className="text-[10px] font-handwritten text-slate-600 text-center font-bold pt-1">
                          Research Presentation · 29 Slides PDF
                        </div>
                      </>
                    )}

                    {/* Item 02 Specific Diagram */}
                    {currentResearch.id === 'jms-paper-2024' && (
                      <>
                        <div className="flex items-center justify-between border-b border-black/15 pb-2">
                          <span className="font-mono-code text-[10px] font-bold text-slate-600 uppercase">3-TIER ARCHITECTURE</span>
                          <span className="text-xs">🖥️</span>
                        </div>

                        <div className="space-y-2 font-mono-code text-[11px] text-slate-800">
                          <div className="p-2 rounded bg-blue-50 border border-black/20 text-center font-bold">
                            Presentation: Python Tkinter
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-[#00D4FF]/20 border border-black/20 text-center font-bold">
                            Logic Layer: Python Rules
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-purple-50 border border-black/20 text-center font-bold">
                            Data Layer: MySQL RDBMS
                          </div>
                        </div>

                        <div className="text-[10px] font-handwritten text-slate-600 text-center font-bold pt-1">
                          ICAC–2024 Published Paper &amp; Certificate
                        </div>
                      </>
                    )}

                    {/* Item 03 Specific Diagram */}
                    {currentResearch.id === 'cybersisterhood-casestudy' && (
                      <>
                        <div className="flex items-center justify-between border-b border-black/15 pb-2">
                          <span className="font-mono-code text-[10px] font-bold text-slate-600 uppercase">CYBER SAFETY MODULE</span>
                          <span className="text-xs">🛡️</span>
                        </div>

                        <div className="space-y-2 font-mono-code text-[11px] text-slate-800">
                          <div className="p-2 rounded bg-rose-50 border border-black/20 text-center font-bold">
                            POSH Act Protections
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-amber-50 border border-black/20 text-center font-bold">
                            Phishing &amp; Stalking Defense
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-emerald-50 border border-black/20 text-center font-bold">
                            Helpline: cybercrime.gov.in
                          </div>
                        </div>

                        <div className="text-[10px] font-handwritten text-slate-600 text-center font-bold pt-1">
                          Live Ecosystem · Social Impact
                        </div>
                      </>
                    )}

                    {/* Item 04 Specific Diagram */}
                    {currentResearch.id === 'avr-iot-workshop-2025' && (
                      <>
                        <div className="flex items-center justify-between border-b border-black/15 pb-2">
                          <span className="font-mono-code text-[10px] font-bold text-slate-600 uppercase">HARDWARE–SOFTWARE ARCHITECTURE</span>
                          <span className="text-xs">📟</span>
                        </div>

                        <div className="space-y-2 font-mono-code text-[11px] text-slate-800">
                          <div className="p-2 rounded bg-cyan-50 border border-black/20 text-center font-bold">
                            AVR Microcontroller Core
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-amber-50 border border-black/20 text-center font-bold">
                            Electronic Sensors &amp; Modules
                          </div>
                          <div className="text-center text-xs">↓</div>
                          <div className="p-2 rounded bg-emerald-50 border border-black/20 text-center font-bold text-emerald-900">
                            IoT Telemetry &amp; Physical Computing
                          </div>
                        </div>

                        <div className="text-[10px] font-handwritten text-slate-600 text-center font-bold pt-1">
                          Cognifront 12-Hour Workshop Certificate
                        </div>
                      </>
                    )}

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* FULL RESEARCH CASE STUDY MODAL DRAWER */}
      <AnimatePresence>
        {selectedResearchModal && (
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
              className="bg-white text-[#07090e] border-4 border-black rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-[16px_16px_0px_#00D4FF] relative max-h-[90vh] overflow-y-auto space-y-6 cursor-default text-left"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black text-white hover:bg-[#ff2a85] flex items-center justify-center transition-colors cursor-pointer border-2 border-black z-20 shadow-md"
                title="Close modal (Press ESC)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Top Telemetry Header */}
              <div className="space-y-3 border-b-2 border-black/15 pb-5">
                
                {/* Category Badge, Date, and Continuous Blinking Scroll Prompt Arrow */}
                <div className="flex flex-wrap items-center justify-between gap-3 pr-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-code text-xs font-bold px-3.5 py-1 rounded-full bg-[#facc15] text-black border border-black shadow-sm">
                      {selectedResearchModal.category || 'RESEARCH'}
                    </span>
                    <span className="font-mono-code text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-1 rounded-full border border-black/20">
                      {selectedResearchModal.date}
                    </span>
                  </div>

                  {/* Continuous Blinking Scroll-Down Prompt Arrow */}
                  <div className="inline-flex items-center gap-2 font-handwritten text-sm sm:text-base font-bold text-[#00D4FF] bg-[#07090e] px-4 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
                    <span>
                      {selectedResearchModal.id === 'jms-paper-2024'
                        ? 'scroll more down to inspect research paper'
                        : 'scroll more down to inspect case study'}
                    </span>
                    <svg className="w-4 h-4 text-[#00D4FF] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-black uppercase tracking-tight pt-1">
                  {selectedResearchModal.title}
                </h3>

                <p className="font-serif-body text-base text-slate-800 font-semibold">
                  {selectedResearchModal.subtitle}
                </p>

                {selectedResearchModal.recognition && (
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-400 px-3.5 py-1 rounded-full font-mono-code text-xs font-bold">
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>{selectedResearchModal.recognition}</span>
                  </div>
                )}
              </div>

              {/* RESEARCH DETAILS & MODULES */}
              <div className="space-y-6">
                
                {/* Summary / Abstract Box */}
                <div className="p-5 rounded-2xl bg-amber-50 border-2 border-black space-y-2">
                  <h4 className="font-mono-code text-xs font-extrabold text-slate-900 uppercase">
                    RESEARCH SUMMARY &amp; OBJECTIVE
                  </h4>
                  <p className="font-serif-body text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {selectedResearchModal.summary || selectedResearchModal.context}
                  </p>
                </div>

                {/* Problem & Central Motivation (if available) */}
                {selectedResearchModal.problem && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4.5 rounded-2xl bg-rose-50 border-2 border-black space-y-1.5">
                      <span className="font-mono-code text-xs font-extrabold text-rose-900 uppercase block">
                        PROBLEM STATEMENT
                      </span>
                      <p className="font-serif-body text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {selectedResearchModal.problem}
                      </p>
                    </div>

                    <div className="p-4.5 rounded-2xl bg-cyan-50 border-2 border-black space-y-1.5">
                      <span className="font-mono-code text-xs font-extrabold text-cyan-900 uppercase block">
                        CENTRAL MOTIVATION
                      </span>
                      <p className="font-serif-body text-xs sm:text-sm text-slate-800 leading-relaxed font-medium italic">
                        "{selectedResearchModal.centralQuestion}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Feature Modules Breakdown */}
                {selectedResearchModal.featureModules && (
                  <div className="space-y-3">
                    <h4 className="font-display text-lg text-black uppercase border-b border-black/15 pb-2">
                      FEATURE MODULES &amp; SYSTEM ARCHITECTURE
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedResearchModal.featureModules.map((mod, mIdx) => (
                        <div key={mIdx} className="p-4 rounded-xl bg-slate-50 border border-black/20 space-y-1 shadow-sm">
                          <span className="font-mono-code text-xs font-bold text-[#00D4FF] bg-[#07090e] px-2.5 py-0.5 rounded inline-block">
                            {mod.name}
                          </span>
                          <p className="text-xs font-serif-body text-slate-800 font-medium leading-relaxed pt-1">
                            {mod.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Findings / Recognition */}
                {selectedResearchModal.keyFindings && (
                  <div className="p-5 rounded-2xl bg-[#07090e] text-white border-2 border-black space-y-2 shadow-md">
                    <span className="font-mono-code text-xs font-bold text-[#00D4FF] uppercase flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      KEY RESEARCH FINDINGS &amp; IMPACT
                    </span>
                    <ul className="space-y-1.5 font-serif-body text-xs sm:text-sm text-slate-200 font-medium">
                      {selectedResearchModal.keyFindings.map((find, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-[#00D4FF] font-bold">✦</span>
                          <span>{find}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Role Box (Team removed as requested) */}
                <div className="p-4 rounded-xl bg-slate-100 border border-black/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code font-bold text-slate-800">
                  <div>Role: {selectedResearchModal.role}</div>
                  {selectedResearchModal.authors && <div>Authors: {selectedResearchModal.authors}</div>}
                </div>

              </div>

              {/* MODAL ACTION BUTTONS */}
              <div className="pt-4 border-t-2 border-black/15 flex flex-wrap items-center gap-3">
                {selectedResearchModal.pdfUrl && (
                  <a
                    href={selectedResearchModal.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-yellow-3d text-xs px-5 py-2.5 shadow-[4px_4px_0px_#000]"
                  >
                    <span>VIEW FULL DOCUMENT PDF</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {/* Item 01 SRPS Certificate Button in Modal */}
                {selectedResearchModal.certificateImg && (
                  <button
                    onClick={() => handleOpenCertificate(selectedResearchModal.certificateImg)}
                    className="px-5 py-2.5 rounded-xl bg-[#ff2a85] text-white hover:bg-black font-mono-code text-xs font-bold transition-all border-2 border-black flex items-center gap-1.5 shadow-[4px_4px_0px_#000] cursor-pointer"
                  >
                    <span>SRPS CERTIFICATE</span>
                    <Award className="w-4 h-4" />
                  </button>
                )}

                {selectedResearchModal.certificatePdfUrl && (
                  <a
                    href={selectedResearchModal.certificatePdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#ff2a85] text-white hover:bg-black font-mono-code text-xs font-bold transition-all border-2 border-black flex items-center gap-1.5 shadow-[4px_4px_0px_#000]"
                  >
                    <span>ICAC CERTIFICATE</span>
                    <Award className="w-4 h-4" />
                  </a>
                )}

                {selectedResearchModal.demoUrl && (
                  <a
                    href={selectedResearchModal.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-yellow-3d text-xs px-5 py-2.5 shadow-[4px_4px_0px_#000]"
                  >
                    <span>EXPLORE LIVE PLATFORM</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {selectedResearchModal.githubUrl && (
                  <a
                    href={selectedResearchModal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-code text-xs font-bold text-black hover:text-[#00D4FF] flex items-center gap-1.5"
                  >
                    <span>GITHUB REPOSITORY ↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FULL-SCREEN HIGH-RES CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {certificateModalImg && (
          <div
            onClick={handleCloseCertificate}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl border-4 border-black p-4 sm:p-6 shadow-[16px_16px_0px_#00D4FF] space-y-4 text-center cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseCertificate}
                className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-black text-white hover:bg-[#ff2a85] flex items-center justify-center border-2 border-white shadow-xl cursor-pointer z-30"
                title="Close Certificate (Press ESC)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b-2 border-black/15 pb-3">
                <span className="font-mono-code text-xs font-extrabold text-black bg-[#facc15] px-3.5 py-1 rounded-full border border-black uppercase">
                  CERTIFICATE // SRPS 2024-25
                </span>
                <span className="font-mono-code text-xs font-bold text-slate-700">
                  Ashoka Education Foundation · ACBCS Nashik
                </span>
              </div>

              {/* High-Res Certificate Image */}
              <div className="rounded-2xl border-2 border-black overflow-hidden bg-slate-50 shadow-inner">
                <img
                  src={certificateModalImg}
                  alt="Student Research Project Scheme Certificate - Rethinking College Apps"
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-1 font-mono-code text-xs font-bold">
                <span className="text-slate-800">
                  Rethinking College Apps: Gamification in College ERP System
                </span>
                <a
                  href={certificateModalImg}
                  download="rethinking-college-apps-certificate.png"
                  className="px-4 py-2 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black transition-colors flex items-center gap-1.5 border border-black"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD CERTIFICATE</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

