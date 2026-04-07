"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const institutions = [
  { name: "African Union", abbr: "AU" },
  { name: "AfCFTA", abbr: "AfCFTA" },
  { name: "Agenda 2063", abbr: "2063" },
  { name: "CAADP", abbr: "CAADP" },
];

export default function Endorsement() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Strategic Alignment
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4">
            Backed by Africa&apos;s Institutions
          </h2>
        </motion.div>

        {/* Institution logos/badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-[#D4A843]/20 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#D4A843]/50 hover:-translate-y-1">
                <span className="font-space text-xl font-bold text-[#0D1B2A]">
                  {inst.abbr}
                </span>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {inst.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 relative"
        >
          <Quote className="absolute top-6 left-6 w-10 h-10 text-[#D4A843]/20" />
          <blockquote className="font-playfair text-xl sm:text-2xl text-[#0D1B2A] leading-relaxed italic text-center relative z-10">
            &ldquo;Nigeria has the land, the labour, the climate, and the
            commodities. What it needs is a bold, structured, and investable
            framework to unlock its agro-industrial potential. The Greenprint
            Initiative is that framework.&rdquo;
          </blockquote>
          <div className="mt-8 text-center">
            <div className="w-16 h-16 bg-[#E8F5E9] rounded-full mx-auto flex items-center justify-center mb-3">
              <span className="font-playfair text-2xl font-bold text-[#009639]">
                A
              </span>
            </div>
            <div className="font-bold text-[#0D1B2A]">The Ambassador</div>
            <div className="text-sm text-gray-500">
              Founder, The Greenprint Initiative
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
