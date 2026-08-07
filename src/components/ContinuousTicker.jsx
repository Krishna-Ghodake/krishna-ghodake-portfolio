import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, Terminal, Cpu, Code, Zap, Flame, Globe, Star } from 'lucide-react';

export default function ContinuousTicker({ reverse = false, items = PORTFOLIO_DATA.tickerItems }) {
  const quadrupledItems = [...items, ...items, ...items, ...items];
  const icons = [Sparkles, Terminal, Cpu, Code, Zap, Flame, Globe, Star];

  return (
    <div className="relative py-4 my-8 overflow-hidden border-y-2 border-[var(--border-color)] bg-[var(--ticker-bg)] shadow-md">
      <div className="ticker-wrapper">
        <div className={`ticker-track ${reverse ? 'ticker-track-reverse' : ''}`}>
          {quadrupledItems.map((item, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div key={index} className="flex items-center gap-4 px-4">
                <span className="w-8 h-8 rounded-xl bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] border border-[var(--accent-pink)]/40 flex items-center justify-center shadow-inner">
                  <IconComp className="w-4 h-4" />
                </span>
                <span className="font-display text-lg sm:text-xl tracking-wider text-[var(--text-main)]">
                  {item}
                </span>
                <span className="font-handwritten text-xl text-[var(--accent-yellow)] px-2">★</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10" />
    </div>
  );
}
