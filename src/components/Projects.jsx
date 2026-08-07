import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, ExternalLink, Sparkles, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI / WebGL', 'Systems / CS', 'Computer Science', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Lab Works
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Innovative <span className="gradient-text">Projects & Systems</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl text-base">
              Full-stack software, deep learning AI studio, high-performance distributed systems, and 3D computer science simulators.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[var(--bg-card)] p-1.5 rounded-2xl border border-[var(--border-color)]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-xl transition-all cursor-pointer ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card group overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-85" />

                    <span className="absolute top-4 left-4 badge-pill shadow-lg backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors" />
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Prompt */}
                <div className="px-6 py-4 border-t border-[var(--border-color)]/60 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Inspect Architecture</span>
                  <span className="text-[var(--accent-cyan)] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Demo →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative border-2 border-[var(--border-color-glow)] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-magenta)] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4">
                <span className="badge-pill">{selectedProject.category}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">
                  {selectedProject.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-mono rounded-lg bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[var(--border-color)]">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
