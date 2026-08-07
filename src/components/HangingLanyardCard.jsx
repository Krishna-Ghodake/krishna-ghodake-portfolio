import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HangingLanyardCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ropeRestHeight = 28; // Visible rope length (~0.5cm visual height)

  // Dynamic SVG quadratic curve path bound 1:1 to x and y motion values
  const pathD = useTransform([x, y], ([latestX, latestY]) => {
    const endX = latestX;
    const endY = ropeRestHeight + latestY;
    const controlX = latestX * 0.35;
    const controlY = Math.max(5, endY * 0.5);
    return `M 0 0 Q ${controlX} ${controlY} ${endX} ${endY}`;
  });

  const handleCardClick = (e) => {
    // Only trigger navigation if not significantly dragged
    if (Math.abs(x.get()) < 12 && Math.abs(y.get()) < 12) {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center select-none z-50">
      
      {/* 1. Top Suspended Anchor Hook (Fixed onto Navbar bottom edge) */}
      <div className="w-6 h-2 bg-black rounded-b-md flex items-center justify-center relative z-30 shadow-md border border-t-0 border-black">
        <div className="w-2.5 h-0.5 bg-[#00D4FF] rounded-full" />
      </div>

      {/* 2. SVG Elastic Rubber Lanyard Rope (Anchored at 0,0, dynamically connected to card clip) */}
      <svg 
        className="absolute top-1.5 left-1/2 overflow-visible pointer-events-none z-20"
        style={{ width: 1, height: 1 }}
      >
        <defs>
          <linearGradient id="lanyardStrapGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07090e" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>

        {/* Outer Drop Shadow Rope Path */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#000000"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Main Gradient Rubber Rope Body Path */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lanyardStrapGradNav)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Inner Woven Fabric Texture Line Path */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>

      {/* 3. Draggable Badge Card (Unhindered 360° Dragging Anywhere On Screen + Rubber Recoil) */}
      <motion.div
        drag
        dragConstraints={false}
        dragSnapToOrigin={true}
        dragElastic={0.8}
        dragTransition={{ bounceStiffness: 380, bounceDamping: 18 }}
        style={{ x, y, marginTop: `${ropeRestHeight}px` }}
        animate={{ 
          rotate: [-4, 4, -4],
        }}
        transition={{ 
          rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.08, cursor: 'grab' }}
        whileTap={{ scale: 0.95, cursor: 'grabbing' }}
        onClick={handleCardClick}
        className="relative z-30 flex flex-col items-center cursor-grab active:cursor-grabbing"
      >
        {/* Metallic Silver Grommet & Clip Ring (Directly attached to top of badge) */}
        <div className="flex flex-col items-center -mb-1 relative z-20">
          <div className="w-3.5 h-3.5 rounded-full border border-black bg-slate-300 shadow-sm flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>
          <div className="w-2.5 h-2 bg-slate-400 border border-black rounded-xs -mt-0.5" />
        </div>

        {/* Small "HIRE ME" Card Badge */}
        <div className="bg-[#07090e] text-white border-2 border-black rounded-xl px-3 py-1.5 shadow-[3px_3px_0px_#00D4FF] flex items-center gap-2 transition-all hover:shadow-[4px_4px_0px_#facc15] hover:border-[#00D4FF] group">
          {/* Glowing Green Online Status Pill */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          {/* Button Text */}
          <span className="font-mono-code text-[11px] font-black tracking-wider uppercase text-white group-hover:text-[#00D4FF] transition-colors">
            HIRE ME
          </span>

          <ArrowUpRight className="w-3.5 h-3.5 text-[#00D4FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </motion.div>

    </div>
  );
}




