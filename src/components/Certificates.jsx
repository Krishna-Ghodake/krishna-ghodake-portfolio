import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certs" className="py-24 bg-[#07090e] relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-[#00D4FF] border border-[#00D4FF]/30 font-mono-code text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="font-section-script text-4xl sm:text-5xl md:text-6xl text-white py-1">
            Certifications &amp;{" "}
            <motion.span
              initial={{ color: "#ffffff" }}
              whileInView={{ color: "#00D4FF" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-section-script"
            >
              Badges
            </motion.span>
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.url || "#"}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="bg-slate-900/90 rounded-3xl border-2 border-white/15 p-6 flex flex-col justify-between space-y-4 shadow-xl backdrop-blur-md hover:border-[#00D4FF] transition-all group block cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold text-[#00D4FF] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {cert.issuer}
                  </span>
                  <span className="font-mono-code text-[10px] text-slate-400 group-hover:text-[#00D4FF] flex items-center gap-1 transition-colors">
                    <span>VERIFY</span>
                    <ExternalLink className="w-3 h-3 text-[#00D4FF]" />
                  </span>
                </div>

                <h3 className="font-display text-lg text-white group-hover:text-[#00D4FF] transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/10 font-mono-code text-[10px] text-slate-400 truncate flex items-center justify-between">
                <span>ID: {cert.id}</span>
                <span className="text-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity font-bold">Open Credential ↗</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
