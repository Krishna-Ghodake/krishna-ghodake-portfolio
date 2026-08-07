import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Wrench, Code2, Server, Database, PenTool } from 'lucide-react';

export default function Toolkit() {
  const groups = [
    { name: 'Frontend', items: PORTFOLIO_DATA.toolkit.frontend, icon: Code2, color: '#00D4FF' },
    { name: 'Backend & Cloud', items: PORTFOLIO_DATA.toolkit.backend, icon: Server, color: '#ff2a85' },
    { name: 'Databases', items: PORTFOLIO_DATA.toolkit.databases, icon: Database, color: '#facc15' },
    { name: 'Design & Tools', items: PORTFOLIO_DATA.toolkit.tools, icon: PenTool, color: '#10b981' }
  ];

  return (
    <section id="toolkit" className="py-24 bg-[#0a0d14] relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-[#00D4FF] border border-[#00D4FF]/30 font-mono-code text-xs font-bold">
            <Wrench className="w-3.5 h-3.5" />
            Toolkit &amp; Tech Stack
          </div>
          <h2 className="font-section-script text-4xl sm:text-5xl md:text-6xl text-white py-1">
            Engineering{" "}
            <motion.span
              initial={{ color: "#ffffff" }}
              whileInView={{ color: "#00D4FF" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-section-script"
            >
              Toolkit
            </motion.span>
          </h2>
        </div>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-slate-900/90 rounded-3xl border-2 border-white/15 p-6 space-y-4 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 text-white">
                    <IconComp className="w-4.5 h-4.5" style={{ color: group.color }} />
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {group.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-code text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 text-slate-200 border border-white/15 hover:border-[#00D4FF] transition-colors"
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
    </section>
  );
}
