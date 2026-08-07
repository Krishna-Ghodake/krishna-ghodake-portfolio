import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[var(--bg-card)]/40 border-t-2 border-[var(--border-color)] relative">
      <div className="container mx-auto px-6 max-w-4xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="font-handwritten text-3xl font-bold text-[var(--accent-pink)]">
            My Journey & Milestones 🚀
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-main)]">
            EXPERIENCE & <span className="pop-text-gradient">EDUCATION</span>
          </h2>
          <p className="text-[var(--text-sub)] text-base">
            Academic pathway at Stanford, software engineering internships, and hacker club leadership.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative pl-6 md:pl-8 border-l-4 border-[var(--accent-pink)] space-y-10">
          {PORTFOLIO_DATA.timeline.map((item, idx) => {
            const IconComponent = item.type === 'experience' ? Briefcase : item.type === 'education' ? GraduationCap : Award;
            return (
              <div key={idx} className="relative group">
                
                {/* Milestone Node */}
                <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-10 h-10 rounded-2xl bg-[var(--bg-main)] border-2 border-[var(--accent-pink)] flex items-center justify-center text-[var(--accent-pink)] shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Card Container */}
                <div className="art-card p-6 md:p-8 space-y-3 hover:border-[var(--accent-cyan)] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="cartoon-sticker">
                      <Calendar className="w-4 h-4 text-amber-300" />
                      {item.period}
                    </span>
                    <span className="font-code text-xs font-bold text-[var(--accent-purple)] uppercase tracking-wider">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-[var(--text-main)]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-sub)] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
