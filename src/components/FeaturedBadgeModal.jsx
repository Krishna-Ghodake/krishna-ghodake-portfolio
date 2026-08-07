import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, X, Sparkles, Download, CheckCircle2 } from 'lucide-react';

export default function FeaturedBadgeModal({ isOpen, onClose }) {
  const [badgeTilt, setBadgeTilt] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = (e.clientY - cy) / (rect.height / 2);
    const ry = (e.clientX - cx) / (rect.width / 2);
    setBadgeTilt({ x: -rx * 18, y: ry * 18 });
  };

  const handleMouseLeave = () => {
    setBadgeTilt({ x: 0, y: 0 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="art-card max-w-lg w-full p-8 text-center space-y-6 relative border-4 border-amber-400 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--bg-main)] border-2 border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] hover:border-amber-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-2 pt-2">
          <span className="font-handwritten text-3xl font-bold text-amber-300">
            Congratulations! 🎉
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-[var(--text-main)]">
            WALL OF PORTFOLIOS FEATURED
          </h3>
          <p className="font-code text-xs text-[var(--text-sub)]">
            Verified Featured Student Portfolio 2026
          </p>
        </div>

        {/* 3D Interactive Silver Badge */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="py-4 flex justify-center cursor-pointer perspective-1000"
        >
          <div
            style={{
              transform: `rotateX(${badgeTilt.x}deg) rotateY(${badgeTilt.y}deg) scale(1.08)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="w-48 h-60 rounded-3xl bg-gradient-to-b from-slate-100 via-slate-300 to-slate-700 p-[3px] shadow-2xl group border-2 border-amber-300/60"
          >
            <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-[22px] p-5 flex flex-col items-center justify-between border border-white/20">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-inner">
                <Award className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="font-display text-2xl text-white tracking-widest block">
                  SILVER
                </span>
                <span className="font-code text-[11px] text-amber-300 font-bold uppercase tracking-widest block">
                  VERIFIED BADGE
                </span>
              </div>

              <div className="w-full pt-2 border-t border-white/10 flex items-center justify-center gap-1.5 font-code text-[10px] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WallofPortfolios 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-sub)] leading-relaxed px-4 font-sans">
          <strong className="text-[var(--text-main)]">Only 30% of portfolios make it to the Wall</strong> — and yours is verified with rich scroll animations, motion graphics, and interactive CS components!
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="btn-primary w-full justify-center text-base"
          >
            <Download className="w-5 h-5" />
            <span>Download Onboarding Kit</span>
          </button>
        </div>

      </div>
    </div>
  );
}
