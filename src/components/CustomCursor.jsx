import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-1.5"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 40,
        mass: 0.1
      }}
    >
      {/* Real Krishna Ghodake Avatar Portrait (Compact fixed size w-6 h-6, NO scaling up on hover) */}
      <div className="w-6 h-6 rounded-full border border-black shadow-md overflow-hidden bg-black flex-shrink-0">
        <img
          src="/krishna_avatar.jpg"
          alt="Krishna Ghodake"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Callout Badge (Compact text text-[10px], fixed size, no expansion) */}
      <div className="bg-[#07090e]/90 text-[#00D4FF] px-2 py-0.5 rounded-full border border-white/20 shadow-md font-handwritten text-[10px] font-bold tracking-tight whitespace-nowrap">
        Krishna CS
      </div>
    </motion.div>
  );
}
