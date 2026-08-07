import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  SendHorizontal,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  User,
  PenTool,
  CheckCircle2,
  Clock,
  ArrowUp,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const cardRef = useRef(null);

  // Live India Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // PHYSICAL ENVELOPE STEP STATE MACHINE:
  // 'CLOSED' -> 'OPENING' -> 'EMERGING' -> 'OPEN' -> 'SUBMITTING' -> 'SUCCESS' -> 'RETURNING' -> 'CLOSING' -> 'CLOSED'
  const [envelopeStep, setEnvelopeStep] = useState('CLOSED');
  const [formData, setFormData] = useState({ user_name: '', user_email: '', user_message: '' });

  // Auto-scroll screen to frame the full contact card in viewport when opened
  useEffect(() => {
    if ((envelopeStep === 'EMERGING' || envelopeStep === 'OPEN') && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, [envelopeStep]);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Trigger realistic sequential envelope unsealing & card emergence (CLICK ANYWHERE ON ENVELOPE)
  const handleEnvelopeClick = (e) => {
    if (e) e.stopPropagation();

    // Prevent conflicting interactions during transition steps
    if (envelopeStep === 'OPENING' || envelopeStep === 'EMERGING' || envelopeStep === 'SUBMITTING' || envelopeStep === 'RETURNING' || envelopeStep === 'CLOSING') {
      return;
    }

    if (envelopeStep === 'CLOSED') {
      // Step 1: Flap Opens
      setEnvelopeStep('OPENING');

      // Step 2: Card Emerges after flap is open
      setTimeout(() => {
        setEnvelopeStep('EMERGING');
      }, 450);

      // Step 3: Card Fully Settled & Interactive
      setTimeout(() => {
        setEnvelopeStep('OPEN');
      }, 1050);

    } else if (envelopeStep === 'OPEN' || envelopeStep === 'SUCCESS') {
      // Step 1: Card Returns Inside Pocket
      setEnvelopeStep('RETURNING');

      // Step 2: Flap Closes down after card is deep inside
      setTimeout(() => {
        setEnvelopeStep('CLOSING');
      }, 650);

      // Step 3: Completely Closed & Sealed
      setTimeout(() => {
        setEnvelopeStep('CLOSED');
      }, 1100);
    }
  };

  // Form Submit -> Success -> Card Returns -> Flap Closes -> Closed
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.user_message) return;

    // 1. Show Green Success Tick Banner immediately on card
    setEnvelopeStep('SUCCESS');

    // 2. Fast timing: Card returns inside envelope pocket within ~0.75s
    setTimeout(() => {
      setEnvelopeStep('RETURNING');

      setTimeout(() => {
        setEnvelopeStep('CLOSING');

        setTimeout(() => {
          setEnvelopeStep('CLOSED');
          setFormData({ user_name: '', user_email: '', user_message: '' });
        }, 350);
      }, 400);
    }, 750);
  };

  const isFlapOpen = envelopeStep === 'OPENING' || envelopeStep === 'EMERGING' || envelopeStep === 'OPEN' || envelopeStep === 'SUBMITTING' || envelopeStep === 'SUCCESS' || envelopeStep === 'RETURNING';
  const isCardEmerging = envelopeStep === 'EMERGING' || envelopeStep === 'OPEN' || envelopeStep === 'SUBMITTING' || envelopeStep === 'SUCCESS';
  const isCardInteractive = envelopeStep === 'OPEN';

  return (
    <section
      id="contact"
      className="pb-20 pt-0 bg-[#f7f5ef] text-[#07090e] relative overflow-hidden selection:bg-[#00D4FF] selection:text-black font-sans"
    >
      {/* SINGLE UNIFIED CONTINUOUS ROTATING MARQUEE TICKER BAR ON SECTION DIVIDER */}
      <div className="w-full relative z-20">
        <div className="ticker-black-container shadow-2xl border-t-2 border-b-2 border-black">
          <div className="ticker-black-track">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  WORKBENCH &amp; 05 TOOLKITS
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  LET'S CONNECT
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  DESIGN × CODE × AUTOMATE
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-widest uppercase">
                  BUILD SOMETHING EXCEPTIONAL
                </span>
                <span className="text-[#00D4FF] text-lg">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* STUDIO DESK CANVAS CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pt-8">

        {/* DESK BACKGROUND PROPS OVERLAY */}
        <div className="hidden xl:block absolute -top-4 -left-12 pointer-events-none opacity-15 z-0">
          <svg className="w-48 h-64 text-black" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M 40 180 C 40 80, 160 80, 160 180" strokeWidth="8" strokeLinecap="round" />
            <rect x="20" y="160" width="35" height="70" rx="10" fill="#000" />
            <rect x="145" y="160" width="35" height="70" rx="10" fill="#000" />
          </svg>
        </div>

        <div className="hidden xl:block absolute -top-6 -right-10 pointer-events-none opacity-20 z-0">
          <svg className="w-44 h-44 text-emerald-800" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 50 10 C 20 40, 20 80, 50 90 C 80 80, 80 40, 50 10 Z" />
            <path d="M 30 30 C 5 50, 20 85, 50 90 C 60 60, 50 30, 30 30 Z" opacity="0.7" />
          </svg>
        </div>

        {/* SECTION HEADER & TITLE */}
        <div className="text-center space-y-3 max-w-3xl mx-auto relative z-10 mb-8">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono-code text-xs font-black uppercase text-black bg-[#facc15] px-4 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000]">
              • LET'S CONNECT •
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight leading-none">
            LET'S BUILD
            <span className="block font-creative-cursive capitalize text-3xl sm:text-4xl md:text-5xl font-extrabold text-black relative inline-block mt-1">
              <span className="relative z-10">Something Exceptional.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3.5 bg-[#facc15] -z-10 transform -rotate-1 rounded-sm opacity-90" />
            </span>
          </h2>

          <p className="font-serif-body text-sm sm:text-base text-slate-800 font-extrabold max-w-xl mx-auto leading-relaxed pt-1">
            Have an idea, a problem worth solving, or simply want to create something different? Let's turn it into something{' '}
            <span className="bg-[#fef08a] px-1.5 py-0.5 rounded border border-black/40 font-bold">people remember.</span>
          </p>
        </div>

        {/* SIDE-BY-SIDE GRID LAYOUT: NOTEBOOK DESK (LEFT 50%) + INTERACTIVE POP-UP ENVELOPE (RIGHT 50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 mb-16">

          {/* LEFT PANEL (LG 6 COLS): SLEEK THIN BORDER LEATHER SPIRAL NOTEBOOK DESK */}
          <div className="lg:col-span-6 relative">

            {/* THIN ELEGANT LEATHER BINDING CONTAINER */}
            <div className="bg-[#4a3425] border-3 border-black rounded-[28px] p-2 sm:p-2.5 shadow-[12px_12px_0px_#07090e] relative">

              {/* INNER SPIRAL NOTEBOOK SHEET */}
              <div className="bg-[#fcfaf4] text-black border-2 border-black rounded-[22px] p-5 sm:p-6 relative min-h-[560px] space-y-6 text-left overflow-hidden">

                {/* Header Title & Bookmark Ribbons */}
                <div className="flex items-center justify-between border-b-2 border-black/15 pb-4">
                  <div className="space-y-1">
                    <h3 className="font-creative-cursive text-3xl text-black font-extrabold tracking-tight transform -rotate-1">
                      Let's Connect!
                    </h3>
                    <p className="font-mono-code text-[10px] font-black text-slate-600 uppercase">
                      COLLABORATION &amp; NETWORKS
                    </p>
                  </div>

                  {/* Bookmark Ribbon Tabs */}
                  <div className="flex items-center gap-1">
                    <span className="font-mono-code text-[9px] font-black uppercase text-black bg-[#facc15] px-2 py-0.5 rounded border border-black shadow-xs">
                      CONNECT
                    </span>
                    <span className="font-mono-code text-[9px] font-black uppercase text-black bg-[#bae6fd] px-2 py-0.5 rounded border border-black shadow-xs">
                      IDEAS
                    </span>
                    <span className="font-mono-code text-[9px] font-black uppercase text-black bg-[#a7f3d0] px-2 py-0.5 rounded border border-black shadow-xs">
                      IMPACT
                    </span>
                  </div>
                </div>

                {/* Handwritten Checklist */}
                <div className="grid grid-cols-2 gap-2.5 font-creative-cursive text-base sm:text-lg text-slate-900 font-extrabold border-b-2 border-black/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-black bg-[#fef08a] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span>Discuss Ideas</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-black bg-[#bae6fd] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span>Build Projects</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-black bg-[#fbcfe8] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span>Share Opportunities</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-black bg-[#a7f3d0] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span>Solve Real Problems</span>
                  </div>
                </div>

                {/* 4 SOCIAL CARDS PINNED / TAPED TO NOTEBOOK PAGE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                  {/* LINKEDIN CARD */}
                  <motion.a
                    href={PORTFOLIO_DATA.personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04, rotate: -2, y: -3 }}
                    className="bg-white rounded-2xl border-2 border-black p-3.5 shadow-[4px_4px_0px_#000] text-left relative space-y-1.5 text-decoration-none group cursor-pointer block"
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-[#0284c7] border border-black shadow-md absolute -top-1.5 left-1/2 -translate-x-1/2 z-20" />
                    <div className="w-8 h-8 rounded-xl bg-[#0077b5] text-white flex items-center justify-center border border-black shadow-xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-code text-xs font-black text-black uppercase group-hover:text-[#0077b5] transition-colors flex items-center gap-1">
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="font-serif-body text-[10px] font-bold text-slate-600 leading-tight pt-0.5">
                        Let's connect professionally →
                      </p>
                    </div>
                  </motion.a>

                  {/* GITHUB CARD */}
                  <motion.a
                    href={PORTFOLIO_DATA.personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04, rotate: 2, y: -3 }}
                    className="bg-white rounded-2xl border-2 border-black p-3.5 shadow-[4px_4px_0px_#000] text-left relative space-y-1.5 text-decoration-none group cursor-pointer block"
                  >
                    <div className="w-10 h-3.5 bg-amber-200/80 border border-black/30 absolute -top-1.5 left-1/2 -translate-x-1/2 transform rotate-6 z-20" />
                    <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center border border-black shadow-xs">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-code text-xs font-black text-black uppercase group-hover:text-[#00D4FF] transition-colors flex items-center gap-1">
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="font-serif-body text-[10px] font-bold text-slate-600 leading-tight pt-0.5">
                        Explore the things I build →
                      </p>
                    </div>
                  </motion.a>

                  {/* EMAIL CARD */}
                  <motion.div
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.04, rotate: -1, y: -3 }}
                    className="bg-[#fef08a] rounded-2xl border-2 border-black p-3.5 shadow-[4px_4px_0px_#000] text-left relative space-y-1.5 cursor-pointer group block"
                    title="Click to copy email address"
                  >
                    <div className="w-10 h-3.5 bg-white/80 border border-black/30 absolute -top-1.5 left-1/2 -translate-x-1/2 transform -rotate-3 z-20" />
                    <div className="w-8 h-8 rounded-xl bg-black text-[#facc15] flex items-center justify-center border border-black shadow-xs">
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-mono-code text-xs font-black text-black uppercase group-hover:text-amber-800 transition-colors flex items-center gap-1">
                        <span>{copied ? 'COPIED!' : 'Email'}</span>
                        <Copy className="w-3 h-3" />
                      </h4>
                      <p className="font-serif-body text-[10px] font-bold text-slate-800 leading-tight pt-0.5">
                        {copied ? 'Email copied!' : 'Start a conversation →'}
                      </p>
                    </div>
                  </motion.div>

                  {/* INSTAGRAM CARD */}
                  <motion.a
                    href={PORTFOLIO_DATA.personal.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.04, rotate: 3, y: -3 }}
                    className="bg-white rounded-2xl border-2 border-black p-3.5 shadow-[4px_4px_0px_#000] text-left relative space-y-1.5 text-decoration-none group cursor-pointer block"
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-red-600 border border-black shadow-md absolute -top-1.5 left-1/2 -translate-x-1/2 z-20" />
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center border border-black shadow-xs">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-mono-code text-xs font-black text-black uppercase group-hover:text-rose-600 transition-colors flex items-center gap-1">
                        <span>Instagram</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="font-serif-body text-[10px] font-bold text-slate-600 leading-tight pt-0.5">
                        See the world behind work →
                      </p>
                    </div>
                  </motion.a>

                </div>

                {/* SMOOTH & SLOW ANIMATED ROCKET LAUNCH EFFECT */}
                <div className="pt-4 flex items-center justify-between border-t border-black/15">
                  <div className="relative flex items-center gap-3">
                    <motion.div
                      initial={{ x: 0, y: 0, scale: 1 }}
                      whileInView={{
                        x: [0, 80, 220, 550],
                        y: [0, -60, -200, -550],
                        scale: [1, 1.2, 1.25, 0.4],
                        opacity: [1, 1, 0.95, 0]
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
                      className="cursor-pointer pointer-events-auto"
                      title="Rocket Launch Effect 🚀"
                    >
                      <svg className="w-14 h-14 text-black transform rotate-45 drop-shadow-md" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M 50 15 C 65 35, 65 65, 50 85 C 35 65, 35 35, 50 15 Z" fill="#ffffff" />
                        <circle cx="50" cy="40" r="8" fill="#00D4FF" stroke="#000" strokeWidth="2" />
                        <path d="M 35 65 L 20 80 L 38 75 Z" fill="#facc15" stroke="#000" />
                        <path d="M 65 65 L 80 80 L 62 75 Z" fill="#facc15" stroke="#000" />
                        <path d="M 45 85 Q 50 98 55 85" stroke="#ff2a85" strokeWidth="4" fill="none" />
                      </svg>
                    </motion.div>
                    <span className="font-handwritten text-base sm:text-lg font-black text-black italic">
                      Rocket Launching Off Page 🚀
                    </span>
                  </div>

                  <span className="font-creative-cursive text-sm sm:text-base font-extrabold text-black italic hidden sm:inline">
                    Dream. Design. Develop. Repeat. ✦
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL (LG 6 COLS): UNCLIPPED SPACIOUS DESK CANVAS FOR PHYSICAL ENVELOPE & EMERGING CARD */}
          <div className="lg:col-span-6 relative pt-48 min-h-[640px] overflow-visible">

            {/* MAIN KRAFT ENVELOPE BASE WRAPPER (CLICK ANYWHERE ON ENVELOPE TO TOGGLE) */}
            <div
              onClick={handleEnvelopeClick}
              className="bg-[#c29b68] border-4 border-black rounded-[32px] shadow-[16px_16px_0px_#07090e] relative text-left cursor-pointer group h-[380px] select-none flex flex-col justify-end overflow-visible pointer-events-auto"
            >

              {/* ENVELOPE REAR WALL (LAYER 1: Z-0) */}
              <div className="absolute inset-0 bg-[#b8915e] z-0 rounded-[28px] pointer-events-auto" />

              {/* AIR-MAIL STRIPE HEADER (LAYER 1.5: Z-5, VISIBLE WHEN FLAP OPENS) */}
              <div
                className={`absolute top-0 left-0 right-0 h-4 pointer-events-none z-5 transition-opacity duration-300 ${isFlapOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg, #dc2626 0, #dc2626 15px, #ffffff 15px, #ffffff 25px, #2563eb 25px, #2563eb 40px, #ffffff 40px, #ffffff 50px)"
                }}
              />

              {/* CONTACT CARD (LAYER 2: STARTS TUCKED 100% INSIDE Z-10, SLIDES UP TO Z-50 IN FRONT WHEN EMERGED) */}
              <div ref={cardRef} className="px-4 sm:px-6 relative w-full bottom-0">
                <motion.div
                  initial={false}
                  animate={{
                    y: isCardEmerging ? -360 : 0, // Tucked 100% inside when closed (y: 0), slides UP 360px onto desk canvas when emerging!
                    scale: isCardEmerging ? 1 : 0.9,
                    zIndex: isCardEmerging ? 50 : 10
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#fffefb] text-black border-3 border-black rounded-3xl p-5 sm:p-6 shadow-[12px_12px_0px_#000] relative space-y-3.5 text-left"
                >
                  {/* Card Header Title */}
                  <div className="border-b-2 border-black/15 pb-2.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-code text-[11px] font-black uppercase text-black bg-[#facc15] px-3 py-0.5 rounded-full border border-black shadow-xs flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-black" />
                        <span>DROP A NOTE</span>
                      </span>
                      <span className="font-mono-code text-[10px] font-bold text-slate-500">
                        {isCardEmerging ? 'CARD EXTENDED ✦ READY TO TYPE' : 'TUCKED DEEP IN POCKET'}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl text-black font-extrabold uppercase tracking-tight pt-1">
                      GET IN TOUCH
                    </h3>
                    <p className="font-serif-body text-xs font-extrabold text-slate-700">
                      Have a project, idea, or inquiry? Send a direct message below.
                    </p>
                  </div>

                  {/* FORM INPUTS */}
                  {envelopeStep === 'SUCCESS' ? (
                    <div className="py-6 px-4 rounded-2xl bg-emerald-100 border-2 border-emerald-600 text-emerald-950 text-center space-y-2 shadow-inner">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md border-2 border-black">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-display text-lg font-black uppercase text-emerald-900 tracking-tight">
                        Message Sent Successfully!
                      </h4>
                      <p className="font-serif-body text-xs font-bold text-slate-800">
                        Your note is sealed inside the envelope &amp; dispatched to Krishna.
                      </p>
                    </div>
                  ) : (
                    <form
                      name="contact"
                      autoComplete="off"
                      onSubmit={handleFormSubmit}
                      className="space-y-3 relative z-10"
                    >

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                          <input
                            type="text"
                            name="user_name"
                            required
                            disabled={!isCardInteractive}
                            autoComplete="new-password"
                            autoCorrect="off"
                            spellCheck="false"
                            data-lpignore="true"
                            data-1p-ignore="true"
                            value={formData.user_name}
                            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                            placeholder="Your Name"
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border-2 border-black text-xs text-black placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#00D4FF] outline-none font-sans font-semibold transition-all shadow-xs disabled:opacity-50"
                          />
                        </div>

                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                          <input
                            type="email"
                            name="user_email"
                            required
                            disabled={!isCardInteractive}
                            autoComplete="new-password"
                            autoCorrect="off"
                            spellCheck="false"
                            data-lpignore="true"
                            data-1p-ignore="true"
                            value={formData.user_email}
                            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                            placeholder="Your Email"
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border-2 border-black text-xs text-black placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#00D4FF] outline-none font-sans font-semibold transition-all shadow-xs disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <PenTool className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                        <textarea
                          rows={3.5}
                          name="user_message"
                          required
                          disabled={!isCardInteractive}
                          autoComplete="new-password"
                          autoCorrect="off"
                          spellCheck="false"
                          data-lpignore="true"
                          data-1p-ignore="true"
                          value={formData.user_message}
                          onChange={(e) => setFormData({ ...formData, user_message: e.target.value })}
                          placeholder="Your Message"
                          className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border-2 border-black text-xs text-black placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#00D4FF] outline-none resize-none font-sans font-semibold transition-all shadow-xs disabled:opacity-50"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-1">
                        <motion.button
                          type="submit"
                          disabled={!isCardInteractive}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          className="w-full sm:w-auto py-2.5 px-7 rounded-full bg-black text-[#fffefb] border-2 border-black font-mono-code font-black text-xs uppercase tracking-widest hover:bg-[#00D4FF] hover:text-black transition-all shadow-[4px_4px_0px_#000000] cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          <span>SEND MESSAGE</span>
                          <SendHorizontal className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </form>
                  )}

                </motion.div>
              </div>

              {/* FRONT KRAFT POCKET WITH V-NOTCH (LAYER 3: Z-20 HIDES CARD WHEN INSIDE) */}
              <div
                onClick={handleEnvelopeClick}
                className="absolute inset-x-0 bottom-0 h-[250px] z-20 pointer-events-auto cursor-pointer rounded-b-[28px] overflow-hidden flex flex-col justify-end"
              >
                <svg className="w-full h-full drop-shadow-lg absolute inset-0" viewBox="0 0 500 250" preserveAspectRatio="none">
                  <polygon points="0,0 250,135 500,0 500,250 0,250" fill="#a47a4a" stroke="#000000" strokeWidth="4" />
                </svg>
              </div>

              {/* TOP TRIANGULAR FOLD FLAP (LAYER 4: Z-30 WHEN CLOSED, Z-2 WHEN OPEN - CURVED TOP CORNERS MATCHING ENVELOPE) */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: isFlapOpen ? 180 : 0,
                  zIndex: isFlapOpen ? 2 : 30
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top center", perspective: "1000px" }}
                onClick={handleEnvelopeClick}
                className="absolute top-0 left-0 right-0 h-[220px] pointer-events-auto cursor-pointer drop-shadow-md flex flex-col items-center justify-start pt-14 z-30"
              >
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 220" preserveAspectRatio="none">
                  <path
                    d="M 28,0 Q 10,0 4,20 L 250,215 L 496,20 Q 490,0 472,0 Z"
                    fill="#b08856"
                    stroke="#000000"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>

                {/* VINTAGE HANDWRITTEN / PRINTED STAMP DIRECTLY ON TOP FLAP FACE */}
                <div className={`relative z-40 text-center space-y-0.5 opacity-90 select-none transition-opacity duration-300 ${isFlapOpen ? 'opacity-0' : 'opacity-100'
                  }`}>
                  <p className="font-creative-cursive text-xl font-extrabold text-amber-950 transform -rotate-2">
                    ✦ A Note For You ✦
                  </p>
                  <p className="font-mono-code text-[10px] font-black uppercase text-amber-900 tracking-widest">
                    OPEN TO WRITE A MESSAGE
                  </p>
                </div>
              </motion.div>

              {/* REALISTIC RED / BURGUNDY WAX SEAL STAMP WITH KG MONOGRAM (LAYER 5: Z-40 / Z-60) */}
              <motion.div
                animate={{
                  scale: envelopeStep === 'SUCCESS' ? [1.35, 1] : isFlapOpen ? 0.9 : 1,
                  rotate: isFlapOpen ? -15 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto cursor-pointer select-none"
                onClick={handleEnvelopeClick}
                title={envelopeStep === 'SUCCESS' ? 'Envelope Sealed! Click to re-open' : 'KG Wax Seal Stamp — Click to open envelope'}
              >
                {/* BURGUNDY MELTED WAX SEAL WITH GOLD MONOGRAM */}
                <div className={`w-14 h-14 rounded-full border-3 border-black shadow-[4px_6px_12px_rgba(0,0,0,0.5)] flex items-center justify-center text-center font-mono-code relative hover:scale-110 transition-transform ${envelopeStep === 'SUCCESS'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#7a0016] text-[#fef08a]'
                  }`}>
                  {/* Irregular Melted Wax Outer Rim */}
                  <div className="absolute inset-0 rounded-full border-2 border-red-950/40 pointer-events-none" />
                  <div className="w-10 h-10 rounded-full border-2 border-amber-300/40 flex items-center justify-center bg-gradient-to-b from-[#8f001c] to-[#600010] shadow-inner">
                    <span className="font-mono-code text-xs font-black tracking-widest drop-shadow-sm">
                      {envelopeStep === 'SUCCESS' ? '✓' : 'KG'}
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* SIGNATURE & CREATIVE FOOTER */}
        <div className="relative z-10 text-center pt-8 space-y-1">
          <div className="inline-flex items-center gap-3 font-creative-cursive text-3xl sm:text-4xl md:text-5xl text-black font-extrabold">
            <span>— Krishna Ghodake</span>
          </div>

          <p className="font-mono-code text-xs font-black text-slate-800 uppercase tracking-widest pt-0.5">
            FULL-STACK DEVELOPER • UI/UX DESIGNER
          </p>
          <p className="font-handwritten text-sm font-bold text-slate-700 pt-0.5">
            DESIGNED + DEVELOPED WITH CURIOSITY
          </p>
        </div>

        {/* CREATIVE GRAND FOOTER SECTION */}
        <footer className="pt-10 pb-6 border-t-2 border-black mt-10 space-y-6 text-left relative z-10">

          {/* Footer Upper Telemetry Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-[#fffdf0] p-6 rounded-3xl border-3 border-black shadow-[6px_6px_0px_#07090e]">

            {/* Live India Clock & Timezone Badge */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono-code text-[11px] font-extrabold text-black uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>LOCAL TIME // NASHIK, INDIA</span>
              </div>
              <div className="font-mono-code text-xl font-black text-black flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-[#00D4FF]" />
                <span>{currentTime || '10:30:00 AM'} (IST)</span>
              </div>
              <div className="text-[10px] font-mono-code font-bold text-slate-600">
                GMT+5:30 • OPEN FOR FREELANCE &amp; ROLES
              </div>
            </div>

            {/* Creative Signoff Quote / System Status */}
            <div className="text-center space-y-1 border-y md:border-y-0 md:border-x border-black/15 py-3 md:py-0 md:px-4">
              <div className="inline-flex items-center gap-1.5 font-mono-code text-[11px] font-extrabold text-slate-800 uppercase bg-[#00D4FF]/20 px-3 py-1 rounded-full border border-[#00D4FF]">
                <Zap className="w-3.5 h-3.5 text-black" />
                <span>SYSTEM STATUS: 100% OPERATIONAL</span>
              </div>
              <p className="font-creative-cursive text-lg font-extrabold text-black pt-1">
                "Building digital products that people remember."
              </p>
            </div>

            {/* Back To Top Rocket Button */}
            <div className="flex justify-start md:justify-end">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-2xl bg-black text-white hover:bg-[#00D4FF] hover:text-black transition-all border-2 border-black font-mono-code text-xs font-black flex items-center gap-2 shadow-[4px_4px_0px_#000] cursor-pointer group"
                title="Scroll smooth back to top"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-4 h-4 text-[#00D4FF] group-hover:text-black transition-colors" />
              </motion.button>
            </div>

          </div>

          {/* Bottom Copyright & Signature */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs font-bold text-slate-700 pt-2">
            <p>© 2026 KRISHNA GHODAKE. ALL RIGHTS RESERVED.</p>
            <p className="font-creative-cursive text-base font-extrabold text-black flex items-center gap-1.5">
              <span>See you in the next project...</span>
              <SendHorizontal className="w-4 h-4 text-black transform -rotate-12" />
            </p>
          </div>

        </footer>

      </div>
    </section>
  );
}
