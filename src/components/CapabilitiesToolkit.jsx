import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Wrench, 
  Layers, 
  Cpu, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  X, 
  ExternalLink, 
  Github, 
  Maximize2, 
  Minimize2, 
  Code2, 
  Terminal, 
  Workflow, 
  CheckCircle2, 
  Zap, 
  Database, 
  Cloud, 
  Palette, 
  PenTool, 
  Search, 
  Rocket, 
  Newspaper,
  BookOpen,
  MousePointerClick
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CapabilitiesToolkit() {
  const [selectedCap, setSelectedCap] = useState(null);
  const [activeStackCluster, setActiveStackCluster] = useState(null);
  
  // Default newspaper state: FALSE = rolled initial state, TRUE = unrolled full edition
  const [isNewspaperUnrolled, setIsNewspaperUnrolled] = useState(false);

  // 3D Parallax Tilt Effect state for newspaper
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHoveringNewspaper, setIsHoveringNewspaper] = useState(false);
  const newspaperRef = useRef(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCap(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseMove = (e) => {
    if (!newspaperRef.current) return;
    const rect = newspaperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6; // max 6 deg tilt
    const rY = ((x - centerX) / centerX) * 6;  // max 6 deg tilt

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHoveringNewspaper(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleOpenModal = (cap) => {
    setSelectedCap(cap);
  };

  // Safe fallback data
  const capabilities = PORTFOLIO_DATA.capabilities || [];
  const toolkit = PORTFOLIO_DATA.toolkit || {};

  // 05 Toolkits (Consolidated Clusters)
  const toolkits05 = [
    {
      number: '01',
      id: 'frontend',
      title: 'Frontend & UI',
      icon: Code2,
      techs: toolkit.frontend || ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Three.js / WebGL"]
    },
    {
      number: '02',
      id: 'backend',
      title: 'Backend & APIs',
      icon: Terminal,
      techs: toolkit.backend || ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "WebSockets"]
    },
    {
      number: '03',
      id: 'database',
      title: 'Databases & Storage',
      icon: Database,
      techs: toolkit.database || ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis", "Firebase"]
    },
    {
      number: '04',
      id: 'design',
      title: 'Design & Prototyping',
      icon: Palette,
      techs: toolkit.design || ["Figma", "UI/UX Design", "Wireframing", "Design Systems", "Prototyping"]
    },
    {
      number: '05',
      id: 'tools',
      title: 'DevOps & Tooling',
      icon: Wrench,
      techs: [...(toolkit.tools || ["VS Code", "Git", "GitHub", "Postman", "Docker", "Vite"]), ...(toolkit.cloud || ["Vercel Edge", "Netlify Cloud", "AWS Services"])]
    }
  ];

  // Creative Workflow Process Steps: IDEA -> DESIGN -> BUILD -> TEST -> SHIP
  const processSteps = [
    { num: '01', title: 'DISCOVER', label: 'IDEA', icon: Search, desc: 'Analyze requirements, map user flows & research deeply.', color: '#00D4FF' },
    { num: '02', title: 'DESIGN', label: 'DESIGN', icon: PenTool, desc: 'Figma wireframes, design tokens & UI prototypes.', color: '#ff2a85' },
    { num: '03', title: 'ENGINEER', label: 'BUILD', icon: Cpu, desc: 'Clean, type-safe full-stack code & component architecture.', color: '#facc15' },
    { num: '04', title: 'VERIFY', label: 'TEST', icon: Zap, desc: 'Performance profiling, responsive QA & API validation.', color: '#10b981' },
    { num: '05', title: 'DEPLOY', label: 'SHIP', icon: Rocket, desc: 'Continuous integration, cloud deployment & optimization.', color: '#a855f7' }
  ];

  return (
    <section 
      id="workbench" 
      className="py-24 bg-[#faf8f3] text-[#07090e] relative border-t-2 border-b-2 border-black overflow-hidden selection:bg-[#00D4FF] selection:text-black"
    >
      {/* Hand-Drawn Blueprint Sketch Artwork Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 900" fill="none">
          <line x1="60" y1="0" x2="60" y2="900" stroke="#07090e" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="1140" y1="0" x2="1140" y2="900" stroke="#07090e" strokeWidth="1" strokeDasharray="6 6" strokeOpacity="0.4" />
          <line x1="0" y1="120" x2="1200" y2="120" stroke="#07090e" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="780" x2="1200" y2="780" stroke="#07090e" strokeWidth="1" strokeDasharray="4 4" />
          
          <text x="75" y="140" fill="#07090e" fontSize="11" fontFamily="monospace" fontWeight="bold">DIM: 1200px × AUTO // SCALE 1:1</text>
          <text x="960" y="800" fill="#07090e" fontSize="11" fontFamily="monospace" fontWeight="bold">WORKBENCH_SYS_2026</text>

          <g transform="translate(1030, 140) scale(0.65)" stroke="#07090e" strokeWidth="1.5" strokeDasharray="3 3">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="18" />
            <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          </g>

          <g transform="translate(80, 680) scale(0.7)" stroke="#07090e" strokeWidth="1.5" opacity="0.7">
            <rect x="0" y="0" width="220" height="120" rx="8" strokeDasharray="4 4" />
            <circle cx="15" cy="15" r="4" fill="#07090e" />
            <circle cx="30" cy="15" r="4" fill="#07090e" />
            <circle cx="45" cy="15" r="4" fill="#07090e" />
            <line x1="0" y1="30" x2="220" y2="30" />
            <line x1="15" y1="50" x2="120" y2="50" strokeDasharray="2 2" />
            <line x1="15" y1="70" x2="180" y2="70" strokeDasharray="2 2" />
            <rect x="15" y="85" width="50" height="20" rx="4" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8 max-w-7xl space-y-12 relative z-10">
        
        {/* SECTION HEADER BADGE & TITLE */}
        <div className="space-y-3 text-left border-b-2 border-black/15 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-code text-xs font-black uppercase text-black bg-[#facc15] px-4 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000]">
              05 TOOLKITS &amp; CAPABILITIES
            </span>
          </div>

          <div className="space-y-1 max-w-4xl pt-1">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#07090e] tracking-tight uppercase leading-tight">
              WORKBENCH
            </h2>
            <p className="font-serif-body text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
              A creative workspace where I experiment, design, develop, and build production digital products.
            </p>
          </div>
        </div>
        {/* MAIN INTERACTIVE NEWSPAPER WORKBENCH SECTION */}
        <div 
          ref={newspaperRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringNewspaper(true)}
          onMouseLeave={handleMouseLeave}
          className="space-y-6 relative"
        >
          {/* Newspaper Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-black/20 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs font-black uppercase text-black bg-[#bae6fd] px-3.5 py-1.5 rounded-full border border-black shadow-sm flex items-center gap-1.5">
                <Newspaper className="w-4 h-4 text-black" />
                <span>THE WORKBENCH GAZETTE</span>
              </span>
            </div>

            {/* Fold / Unroll State Badge */}
            <div className="font-mono-code text-[11px] font-black uppercase text-black bg-[#facc15] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{isNewspaperUnrolled ? "UNROLLED EDITION" : "3D ROLLED MAGAZINE"}</span>
            </div>
          </div>

          {/* PHYSICAL 3D UNROLLING NEWSPAPER / MAGAZINE CONTAINER */}
          <AnimatePresence mode="wait">
            {isNewspaperUnrolled ? (
              <motion.div
                key="unrolled-newspaper"
                initial={{ rotateX: -45, scaleY: 0.2, opacity: 0, transformOrigin: "top center" }}
                animate={{ rotateX: 0, scaleY: 1, opacity: 1, transformOrigin: "top center" }}
                exit={{ rotateX: -45, scaleY: 0.2, opacity: 0, transformOrigin: "top center" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  transformStyle: "preserve-3d",
                  rotateX: isHoveringNewspaper ? rotateX : 0,
                  rotateY: isHoveringNewspaper ? rotateY : 0,
                }}
                className="bg-[#f6f2e8] text-black border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[14px_14px_0px_#07090e] relative space-y-8 overflow-hidden min-h-[600px] text-left transition-shadow duration-300"
              >
                {/* Folded Paper Corner Overlay */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20">
                  <div className="w-0 h-0 border-t-[45px] border-t-[#e2dac8] border-l-[45px] border-l-transparent shadow-md transform rotate-90" />
                </div>

                {/* Newsprint Grain Texture */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20 z-0 select-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.06) 0%, transparent 80%)"
                  }}
                />

                {/* Newspaper Masthead Banner */}
                <div className="border-b-4 border-black pb-5 relative z-10 space-y-3">
                  <div className="flex flex-col sm:flex-row items-center justify-between font-mono-code text-[11px] font-black text-slate-800 uppercase tracking-widest border-b-2 border-black/30 pb-2 gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                      THE WORKBENCH GAZETTE — EST. 2026
                    </span>
                    <span>VOL. 2026 // ISSUE 05</span>
                    <button
                      onClick={() => setIsNewspaperUnrolled(false)}
                      className="px-3 py-1 rounded-full bg-black text-white hover:bg-[#00D4FF] hover:text-black transition-colors font-mono-code text-[10px] font-bold border border-black cursor-pointer shadow-xs flex items-center gap-1"
                    >
                      <span>ROLL UP MAGAZINE</span>
                      <X className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="text-center pt-2 space-y-1">
                    <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none drop-shadow-xs">
                      THE WORKBENCH GAZETTE
                    </h3>
                    <div className="font-serif-body text-sm sm:text-base font-extrabold italic text-slate-800 pt-1">
                      "Where ideas are sketched, designed, engineered, tested, and turned into digital products."
                    </div>
                  </div>
                </div>

                {/* TOOLKITS EDITORIAL NEWSPAPER COLUMNS */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <h4 className="font-display text-base font-extrabold text-[#00D4FF] bg-black px-4 py-1.5 rounded-lg border border-black shadow-sm uppercase tracking-widest">
                      TOOLKITS
                    </h4>
                    <span className="font-handwritten text-sm font-bold text-slate-700">
                      Curated Technologies ✦
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {toolkits05.map((cluster) => {
                      const IconComp = cluster.icon;
                      const isHovered = activeStackCluster === cluster.id;

                      return (
                        <motion.div
                          key={cluster.id}
                          onMouseEnter={() => setActiveStackCluster(cluster.id)}
                          onMouseLeave={() => setActiveStackCluster(null)}
                          whileHover={{ scale: 1.02, y: -3 }}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-3 relative bg-white shadow-[4px_4px_0px_#000] ${
                            isHovered ? 'border-black ring-2 ring-[#00D4FF]' : 'border-black'
                          }`}
                        >
                          {/* Column Title Header */}
                          <div className="flex items-center justify-between border-b-2 border-black pb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center border border-black">
                                <IconComp className="w-4 h-4 text-[#00D4FF]" />
                              </div>
                              <div>
                                <span className="font-mono-code text-[10px] font-black text-slate-600 block leading-tight">
                                  TOOLKIT {cluster.number}
                                </span>
                                <h5 className="font-mono-code text-xs font-black text-black uppercase tracking-wider leading-tight">
                                  {cluster.title}
                                </h5>
                              </div>
                            </div>
                          </div>

                          {/* Tech Badges List */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {cluster.techs.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="font-mono-code text-[11px] font-extrabold px-2.5 py-1 rounded-md bg-slate-100 text-black border border-black shadow-xs hover:bg-[#00D4FF] hover:text-black transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* CAPABILITIES SECTION INSIDE NEWSPAPER */}
                <div className="space-y-4 relative z-10 pt-4 border-t-2 border-black/30">
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <h4 className="font-display text-base font-extrabold text-[#facc15] bg-black px-4 py-1.5 rounded-lg border border-black shadow-sm uppercase tracking-widest">
                      CAPABILITIES
                    </h4>
                    <span className="font-handwritten text-sm font-bold text-slate-700">
                      Click any capability to inspect deliverables ✦
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {capabilities.map((cap) => (
                      <motion.div
                        key={cap.id}
                        whileHover={{ x: 3, scale: 1.01 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(cap);
                        }}
                        style={{ backgroundColor: cap.bgColor }}
                        className="rounded-2xl border-2 border-black p-4 shadow-[4px_4px_0px_#07090e] cursor-pointer transition-all flex items-center justify-between gap-3 group relative"
                      >
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-9 h-9 rounded-xl bg-black text-white font-mono-code font-bold text-xs flex items-center justify-center flex-shrink-0 border border-black shadow-sm group-hover:bg-[#00D4FF] group-hover:text-black transition-colors">
                            {cap.number}
                          </div>
                          <div>
                            <h5 className="font-display text-base text-black uppercase tracking-tight leading-snug group-hover:text-black transition-colors">
                              {cap.title}
                            </h5>
                            <p className="font-serif-body text-[11px] text-slate-800 line-clamp-1 font-semibold pt-0.5">
                              {cap.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-black text-white group-hover:bg-[#00D4FF] group-hover:text-black flex items-center justify-center flex-shrink-0 transition-colors border border-black shadow-sm">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Vintage Newspaper Press Verification Stamp */}
                <div className="border-t-4 border-black pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-code text-xs font-bold text-slate-800 relative z-10">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-900" />
                    <span>VERIFIED PRODUCTION WORKBENCH // KRISHNA GHODAKE</span>
                  </div>

                  <button
                    onClick={() => setIsNewspaperUnrolled(false)}
                    className="px-4 py-1.5 bg-[#facc15] text-black hover:bg-black hover:text-white transition-colors border-2 border-black rounded-full text-[11px] font-extrabold uppercase shadow-xs cursor-pointer"
                  >
                    ✦ ROLL UP MAGAZINE 🗞️
                  </button>
                </div>

              </motion.div>
            ) : (
              /* REALISTIC 3D CYLINDRICAL ROLLED MAGAZINE (ENHANCED 3D ROLLED STATE) */
              <motion.div
                key="rolled-newspaper"
                initial={{ rotateX: 35, opacity: 0, scale: 0.9 }}
                animate={{ rotateX: 0, opacity: 1, scale: 1 }}
                exit={{ rotateX: -45, scaleY: 0.2, opacity: 0, transformOrigin: "top center" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsNewspaperUnrolled(true)}
                whileHover={{ scale: 1.03, y: -6 }}
                className="bg-gradient-to-b from-[#e5dac6] via-[#fdfbf6] to-[#cfbf9f] border-4 border-black rounded-[60px] p-6 sm:p-9 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45),10px_10px_0px_#07090e] cursor-pointer flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-left group min-h-[150px]"
                title="Click to physically unroll The Workbench Gazette magazine!"
              >
                {/* 3D Cylindrical Surface Highlights & Shading Layers */}
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/50 via-black/25 to-transparent pointer-events-none z-10" />
                
                {/* 3D Horizontal Cylinder Crease Lines */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 border-y border-black/10 pointer-events-none z-10" />

                {/* Left End-Cap 3D Spiral Paper Roll Ellipse */}
                <div className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-14 h-28 rounded-full border-4 border-black bg-[#e2d3bb] items-center justify-center pointer-events-none shadow-[inset_0_0_12px_rgba(0,0,0,0.4)] z-20">
                  <svg className="w-12 h-20 text-black" viewBox="0 0 40 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    {/* Spiral Coiled Layers of Rolled Paper */}
                    <ellipse cx="20" cy="35" rx="16" ry="30" stroke="#000" strokeWidth="3" fill="#dfcfb5" />
                    <ellipse cx="20" cy="35" rx="11" ry="21" stroke="#000" strokeWidth="2" fill="#c9b79c" />
                    <ellipse cx="20" cy="35" rx="6" ry="12" stroke="#000" strokeWidth="2" fill="#07090e" />
                    <path d="M 20 5 C 32 15, 32 55, 20 65" strokeDasharray="3 2" />
                  </svg>
                </div>

                {/* Right End-Cap 3D Spiral Paper Roll Ellipse */}
                <div className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-14 h-28 rounded-full border-4 border-black bg-[#e2d3bb] items-center justify-center pointer-events-none shadow-[inset_0_0_12px_rgba(0,0,0,0.4)] z-20">
                  <svg className="w-12 h-20 text-black" viewBox="0 0 40 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    {/* Spiral Coiled Layers of Rolled Paper */}
                    <ellipse cx="20" cy="35" rx="16" ry="30" stroke="#000" strokeWidth="3" fill="#dfcfb5" />
                    <ellipse cx="20" cy="35" rx="11" ry="21" stroke="#000" strokeWidth="2" fill="#c9b79c" />
                    <ellipse cx="20" cy="35" rx="6" ry="12" stroke="#000" strokeWidth="2" fill="#07090e" />
                    <path d="M 20 5 C 32 15, 32 55, 20 65" strokeDasharray="3 2" />
                  </svg>
                </div>

                {/* Newspaper Header Info */}
                <div className="flex flex-col sm:flex-row items-center gap-6 relative z-30 sm:ml-16">
                  <div className="w-16 h-16 rounded-2xl bg-black text-[#00D4FF] flex items-center justify-center border-2 border-black shadow-lg flex-shrink-0 group-hover:rotate-12 transition-transform">
                    <Newspaper className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono-code text-[11px] font-black uppercase text-black bg-[#facc15] px-3.5 py-0.5 rounded-full border border-black shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-black" />
                        3D ROLLED EDITION
                      </span>
                      <span className="font-mono-code text-[10px] bg-black text-white px-2.5 py-0.5 rounded-full font-bold border border-black">
                        VOL. 2026
                      </span>
                    </div>

                    <h4 className="font-display text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight">
                      THE WORKBENCH GAZETTE
                    </h4>

                    <p className="font-serif-body text-xs sm:text-sm text-slate-800 font-extrabold italic">
                      "3D Rolled Magazine • Toolkits &amp; Engineering Stack"
                    </p>
                  </div>
                </div>

                {/* Unroll Action Button */}
                <div className="px-5 py-3 rounded-2xl bg-black text-white font-mono-code text-xs font-black flex items-center gap-2 group-hover:bg-[#00D4FF] group-hover:text-black transition-all border-2 border-black flex-shrink-0 shadow-[4px_4px_0px_#000] relative z-30 sm:mr-16 cursor-pointer">
                  <span>UNROLL GAZETTE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STICKY NOTES: WORKBENCH TOOLKITS & CAPABILITIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Yellow Sticky Note */}
            <motion.div 
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="bg-[#fef08a] border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] relative space-y-3 text-left"
            >
              <div className="tape-strip" />
              <span className="font-mono-code text-xs font-black text-black bg-white px-3 py-1 rounded-full border border-black inline-block uppercase">
                05 TOOLKITS
              </span>
              <h4 className="font-display text-2xl text-black uppercase tracking-tight">
                DEVELOPMENT STACK &amp; INFRASTRUCTURE
              </h4>
              <p className="font-serif-body text-sm text-slate-800 font-semibold leading-relaxed">
                Full-stack web applications, component architecture, databases, cloud serverless APIs, and modern developer tooling.
              </p>
            </motion.div>

            {/* Blue Sticky Note */}
            <motion.div 
              whileHover={{ rotate: 1, scale: 1.02 }}
              className="bg-[#bae6fd] border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_#000000] relative space-y-3 text-left"
            >
              <div className="tape-strip" />
              <span className="font-mono-code text-xs font-black text-black bg-white px-3 py-1 rounded-full border border-black inline-block uppercase">
                CAPABILITIES
              </span>
              <h4 className="font-display text-2xl text-black uppercase tracking-tight">
                DIGITAL PRODUCTS &amp; CREATIVE CODE
              </h4>
              <p className="font-serif-body text-sm text-slate-800 font-semibold leading-relaxed">
                Interactive web experiences, 3D WebGL canvases, design systems, API integrations, and user interface engineering.
              </p>
            </motion.div>

          </div>

        </div>

      </div>



      {/* INTERACTIVE STICKY NOTE MODAL */}
      <AnimatePresence>
        {selectedCap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setSelectedCap(null)}
          >
            <motion.div
              initial={{ scale: 0.85, rotate: -4, y: 30 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0.85, rotate: 4, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: selectedCap.bgColor }}
              className="w-full max-w-2xl rounded-3xl border-4 border-black p-6 sm:p-10 shadow-[16px_16px_0px_#07090e] relative text-left space-y-6 text-black"
            >
              <div className="tape-strip" />

              <button
                onClick={() => setSelectedCap(null)}
                className="w-10 h-10 rounded-full bg-black text-white hover:bg-red-600 flex items-center justify-center absolute top-6 right-6 transition-colors border-2 border-black shadow-md cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b-2 border-black pb-4 pr-12">
                <div className="flex items-center gap-2">
                  <span className="font-mono-code text-xs font-black bg-black text-white px-3 py-1 rounded-full uppercase">
                    CAPABILITY {selectedCap.number}
                  </span>
                  <span className="font-mono-code text-xs font-bold text-slate-800">
                    STATUS: ACTIVE
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-black uppercase tracking-tight">
                  {selectedCap.title}
                </h3>

                <p className="font-serif-body text-base sm:text-lg font-bold italic text-slate-900">
                  "{selectedCap.tagline}"
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono-code text-xs font-black uppercase text-slate-700 tracking-wider">
                  Deliverables &amp; Technical Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCap.details?.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/80 border-2 border-black font-serif-body text-xs font-bold text-slate-900 flex items-center gap-2.5 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t-2 border-black pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 font-mono-code text-xs font-extrabold text-slate-800">
                <button
                  onClick={() => setSelectedCap(null)}
                  className="px-5 py-2 rounded-xl bg-black text-white hover:bg-[#00D4FF] hover:text-black transition-all border-2 border-black shadow-xs uppercase cursor-pointer"
                >
                  GOT IT →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
