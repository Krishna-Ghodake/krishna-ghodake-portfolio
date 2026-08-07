import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Code2, Database, Layers, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section id="skills" className="py-20 bg-[var(--bg-secondary)]/50 relative border-y border-[var(--border-color)]">
      <div className="container space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 font-mono text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Skills & <span className="gradient-text">CS Competencies</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            Grounded in core Computer Science principles with expertise across modern full-stack development tools and machine learning frameworks.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-6 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'languages'
                  ? 'bg-[var(--gradient-btn)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Languages & Runtime
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-6 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'frameworks'
                  ? 'bg-[var(--gradient-btn)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Frameworks & Tools
            </button>
            <button
              onClick={() => setActiveTab('csConcepts')}
              className={`px-6 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'csConcepts'
                  ? 'bg-[var(--gradient-btn)] text-white shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              CS Core Fundamentals
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab !== 'csConcepts' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.skills[activeTab].map((skill, idx) => (
                <div key={idx} className="glass-card p-5 space-y-3 hover:border-[var(--accent-cyan)] transition-colors">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <span className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-[var(--accent-cyan)] font-semibold">{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="h-2.5 w-full rounded-full bg-[var(--bg-primary)] overflow-hidden border border-[var(--border-color)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skills.csConcepts.map((concept, idx) => (
                <div key={idx} className="glass-card p-5 flex items-center gap-4 hover:border-[var(--accent-emerald)] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-base text-[var(--text-primary)]">
                    {concept}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
