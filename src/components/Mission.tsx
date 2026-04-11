"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NigeriaMap from "./NigeriaMap";
import CountUp from "react-countup";

const stats = [
  { value: 72, suffix: "", label: "Planned Hubs" },
  { value: 36, suffix: "+1", label: "States + FCT" },
  { value: 500, suffix: " ha", label: "Per Hub" },
  { value: 2.4, suffix: "M+", label: "Jobs Envisioned", decimals: 1 },
];

export default function Mission() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="mission" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pl-8">
              {/* Gold accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4A843] rounded-full" />
              <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
                Our Mission
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4 leading-tight">
                72 Integrated Hubs Across Every State in Nigeria
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Each planned Greenprint Hub will be a 500-hectare integrated agro-industrial
                complex — combining open crop fields, soilless farming greenhouses, livestock
                operations, food processing factories, tree plantations, and solar power — all
                designed to operate as a self-sustaining food production ecosystem.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                The programme aims to place two hubs in every state and the FCT, ensuring
                that no region is left behind — from the arid north to the fertile south,
                from coastal zones to the middle belt.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pl-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="font-space text-2xl font-bold text-[#009639]">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        decimals={stat.decimals || 0}
                      />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Nigeria Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <NigeriaMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
