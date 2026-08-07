import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import HorizontalProjectSlider from './components/HorizontalProjectSlider';
import LabResearch from './components/LabResearch';
import CapabilitiesToolkit from './components/CapabilitiesToolkit';
import Contact from './components/Contact';
import FeaturedBadgeModal from './components/FeaturedBadgeModal';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import CinematicPreloader from './components/CinematicPreloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] relative selection:bg-[#00D4FF] selection:text-black">
      {/* 2026 Cinematic Preloader & Entrance Animation */}
      <AnimatePresence mode="wait">
        {loading && (
          <CinematicPreloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Top Viewport Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Custom Cursor Avatar */}
      <CustomCursor />

      {/* Navigation Bar (Slides up when modal is active) */}
      <Navbar isModalOpen={isModalOpen} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero preloaderComplete={!loading} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <Story onModalStateChange={(open) => setIsModalOpen(open)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <HorizontalProjectSlider onModalStateChange={(open) => setIsModalOpen(open)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <LabResearch onModalStateChange={(open) => setIsModalOpen(open)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <CapabilitiesToolkit onModalStateChange={(open) => setIsModalOpen(open)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Featured Badge Award Modal */}
      <FeaturedBadgeModal
        isOpen={isBadgeModalOpen}
        onClose={() => setIsBadgeModalOpen(false)}
      />
    </div>
  );
}
