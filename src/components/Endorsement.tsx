"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const alignments = [
  {
    abbr: "AU",
    name: "African Union",
    description: "Agenda 2063 — The Africa We Want",
  },
  {
    abbr: "CAADP",
    name: "CAADP",
    description: "Comprehensive Africa Agriculture Development Programme",
  },
  {
    abbr: "AfCFTA",
    name: "AfCFTA",
    description: "African Continental Free Trade Area",
  },
  {
    abbr: "Malabo",
    name: "Malabo Declaration",
    description: "Commitment to accelerated agricultural growth",
  },
  {
    abbr: "SDGs",
    name: "UN SDGs",
    description: "Goals 1, 2, 8, 9, 13, 15",
  },
];

export default function Endorsement() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-[#0D3B0F] to-[#0D1B2A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A843] text-sm font-bold tracking-[0.3em] uppercase">
            Strategic Alignment
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Aligned with Africa&apos;s Frameworks
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            The Greenprint Farmers Initiative is designed to directly advance the
            continent&apos;s most important development agendas.
          </p>
        </motion.div>

        {/* Framework badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {alignments.map((item, i) => (
            <motion.div
              key={item.abbr}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-40 hover:border-[#D4A843]/30 transition-all duration-500"
            >
              <div className="font-space text-2xl font-bold text-[#D4A843] mb-2">
                {item.abbr}
              </div>
              <div className="text-white/80 text-xs font-semibold mb-1">{item.name}</div>
              <div className="text-white/30 text-[10px] leading-tight">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-[#D4A843] text-6xl font-playfair leading-none mb-4">&ldquo;</div>
          <blockquote className="font-playfair text-xl sm:text-2xl text-white/90 leading-relaxed italic">
            Nigeria has the land, the labour, the climate, and the commodities.
            What it needs is a bold, structured, and investable framework to
            unlock its agro-industrial potential. The Greenprint Farmers Initiative
            aims to be that framework.
          </blockquote>
          <div className="mt-8">
            <div className="font-bold text-white">The Ambassador</div>
            <div className="text-sm text-white/40">
              Founder, The Greenprint Farmers Initiative
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
