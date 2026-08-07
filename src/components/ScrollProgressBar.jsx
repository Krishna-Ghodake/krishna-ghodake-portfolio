import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 origin-left z-50 shadow-md"
    />
  );
}
