import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const wheelOptions = [
    {
      id: 1,
      title: "Full-Stack Web",
      category: "Architecture",
      color: "#ff2a85",
      icon: "⚡",
      description: "Building responsive, modern single-page applications with React, Next.js, WebSockets, and scalable backend REST/gRPC microservices.",
      highlights: ["React & Next.js 14", "Real-Time Telemetry", "Sub-100ms Latency"]
    },
    {
      id: 2,
      title: "AI & Neural Nets",
      category: "Intelligence",
      color: "#38bdf8",
      icon: "🤖",
      description: "Training deep learning models in PyTorch, deploying TensorFlow.js in-browser GPU pipelines, and building generative AI tools.",
      highlights: ["PyTorch & CUDA", "WebGPU Neural Style", "LLM Fine-Tuning"]
    },
    {
      id: 3,
      title: "WebGL 3D Shaders",
      category: "Creative Coding",
      color: "#a855f7",
      icon: "🔮",
      description: "Crafting immersive 3D graphics, particle systems, interactive GLSL fragment shaders, and WebGL physics simulations.",
      highlights: ["Three.js / WebGL2", "GLSL Shaders", "60 FPS Canvas"]
    },
    {
      id: 4,
      title: "Algorithms & DSA",
      category: "CS Core",
      color: "#facc15",
      icon: "⚙️",
      description: "Solving complex graph traversal, dynamic programming, tree balancing, and high-throughput lock-free data structure design.",
      highlights: ["180+ LeetCode Solved", "C++ / Rust Memory", "O(1) Dynamic Lookup"]
    },
    {
      id: 5,
      title: "UI/UX Interaction",
      category: "Motion Design",
      color: "#10b981",
      icon: "🎨",
      description: "Designing tactile micro-interactions, spring physics, accessible UI components, and award-winning layout aesthetics.",
      highlights: ["Framer Motion Physics", "Glassmorphism UI", "Accessibility Standards"]
    },
    {
      id: 6,
      title: "Cloud & Distributed",
      category: "Infrastructure",
      color: "#f97316",
      icon: "🌐",
      description: "Architecting Dockerized microservices, Redis caching clusters, CI/CD automated testing, and zero-downtime cloud deployments.",
      highlights: ["Docker & Kubernetes", "gRPC Streaming", "99.9% Uptime SLA"]
    }
  ];

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);

    // Random rotations (between 4 to 8 full spins + random offset)
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalNewRotation = rotation + 360 * 5 + extraDegrees;

    setRotation(totalNewRotation);

    setTimeout(() => {
      setSpinning(false);
      // Calculate which segment landed on indicator (top 0 deg)
      const actualDegree = (totalNewRotation % 360);
      const segmentSize = 360 / wheelOptions.length;
      // Calculate index (indicator is at top/270deg offset)
      const index = Math.floor(((360 - actualDegree + 30) % 360) / segmentSize) % wheelOptions.length;
      setSelectedOption(wheelOptions[index]);
    }, 4000);
  };

  return (
    <section className="py-24 bg-[#0a0d14] relative overflow-hidden border-t-2 border-[var(--border-color)]">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="font-handwritten text-3xl font-bold text-[#facc15]">
            Spin the wheel to explore my workflows! 🎯
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white">
            INTERACTIVE <span className="text-[#38bdf8]">OPTION WHEEL</span>
          </h2>
          <p className="text-slate-400 text-base font-serif-body">
            Click "SPIN WHEEL" below to randomly select a Computer Science engineering specialization and inspect case notes.
          </p>
        </div>

        {/* Wheel & Details Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Wheel Graphic Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            {/* Top Pointer Needle Indicator */}
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-[#ff2a85] z-30 drop-shadow-lg -mb-4" />

            {/* Circular Wheel Box */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-white/20 p-2 bg-slate-900 shadow-2xl overflow-hidden">
              <motion.div
                animate={{ rotate: rotation }}
                transition={{ duration: 4, ease: [0.15, 0.85, 0.35, 1] }}
                className="w-full h-full rounded-full relative overflow-hidden border-2 border-white/10"
              >
                {/* SVG Segments */}
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {wheelOptions.map((opt, i) => {
                    const angle = 360 / wheelOptions.length;
                    const startAngle = i * angle;
                    const endAngle = (i + 1) * angle;

                    const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                    const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                    const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                    const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                    const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;

                    return (
                      <g key={opt.id}>
                        <path d={pathData} fill={opt.color} opacity="0.85" stroke="#000" strokeWidth="0.8" />
                      </g>
                    );
                  })}
                </svg>

                {/* Segment Labels Overlay */}
                {wheelOptions.map((opt, i) => {
                  const angle = (360 / wheelOptions.length) * i + (360 / wheelOptions.length) / 2;
                  return (
                    <div
                      key={opt.id}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{
                        transform: `rotate(${angle}deg)`
                      }}
                    >
                      <span className="font-mono-code text-xs font-bold text-black bg-white/90 px-2 py-0.5 rounded-full shadow-md translate-x-24">
                        {opt.icon} {opt.title}
                      </span>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center Spin Button */}
              <button
                onClick={handleSpin}
                disabled={spinning}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-black border-4 border-[#facc15] text-[#facc15] font-display text-sm font-bold flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-2xl cursor-pointer z-30 disabled:opacity-75"
              >
                <RotateCw className={`w-5 h-5 mb-0.5 ${spinning ? 'animate-spin' : ''}`} />
                <span>{spinning ? 'SPINNING' : 'SPIN'}</span>
              </button>
            </div>

          </div>

          {/* Details Display Column */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              {selectedOption ? (
                <motion.div
                  key={selectedOption.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900/90 rounded-3xl border-2 border-white/15 p-8 space-y-6 shadow-2xl backdrop-blur-md"
                  style={{ borderColor: selectedOption.color }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-[#facc15]">
                      {selectedOption.category}
                    </span>
                    <span className="text-3xl">{selectedOption.icon}</span>
                  </div>

                  <h3 className="font-display text-3xl text-white">
                    {selectedOption.title}
                  </h3>

                  <p className="text-slate-300 text-base font-serif-body leading-relaxed">
                    {selectedOption.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="font-mono-code text-xs uppercase tracking-wider text-slate-400 font-bold block">
                      Key Technical Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedOption.highlights.map((item, idx) => (
                        <span key={idx} className="font-mono-code text-xs font-semibold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/15 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-slate-900/50 rounded-3xl border-2 border-dashed border-white/15 p-8 text-center space-y-4">
                  <Sparkles className="w-10 h-10 text-[#facc15] mx-auto animate-bounce" />
                  <h3 className="font-display text-2xl text-white">READY TO SPIN?</h3>
                  <p className="text-slate-400 text-sm font-serif-body max-w-sm mx-auto">
                    Click the center "SPIN" button on the wheel to select a specialized computer science domain and uncover implementation details!
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
