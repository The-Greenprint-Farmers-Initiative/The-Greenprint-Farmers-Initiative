"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, TrendingUp, Globe } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    years: "2026 — 2031",
    title: "Foundation",
    color: "#009639",
    items: [
      "Establish first 6 pilot hubs across 3 geopolitical zones",
      "Build inaugural greenhouse complexes and processing factories",
      "Plant first 50 million trees across designated green belts",
      "Create 200,000+ direct jobs in pilot states",
      "Demonstrate viability to attract Phase 2 investment",
    ],
  },
  {
    icon: TrendingUp,
    phase: "Phase 2",
    years: "2031 — 2036",
    title: "Scale",
    color: "#D4A843",
    items: [
      "Expand to 36 hubs covering all 6 geopolitical zones",
      "Achieve domestic food self-sufficiency in key crops",
      "Plant 250 million additional trees",
      "Create 1.2 million+ cumulative jobs",
      "Begin significant export operations via cold chain corridors",
    ],
  },
  {
    icon: Globe,
    phase: "Phase 3",
    years: "2036 — 2041",
    title: "Continental Impact",
    color: "#5dc004",
    items: [
      "Complete all 72 hubs across 36 states + FCT",
      "Reach 500 million trees planted nationwide",
      "Achieve $12 billion annual export target",
      "Create 2.4 million+ total jobs",
      "Replicate the model across AfCFTA partner nations",
    ],
  },
];

export default function Roadmap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="roadmap" className="py-24 bg-[#0D1B2A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-bold tracking-[0.3em] uppercase">
            The Roadmap
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            15 Years. Three Phases.
            <br />
            <span className="text-[#D4A843]">One Transformed Nation.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[#009639] via-[#D4A843] to-[#5dc004]" />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
              >
                {/* Phase circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 relative z-10"
                  style={{ backgroundColor: phase.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: phase.color }}>
                  {phase.phase}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-white/40 text-sm font-space mb-6">
                  {phase.years}
                </p>

                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: phase.color }} />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
