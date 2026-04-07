"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NigeriaMap from "./NigeriaMap";

export default function Vision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="vision" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4A843] rounded-full" />
            <div className="pl-8">
              <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
                Our Mission
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4 leading-tight">
                Africa&apos;s Most Comprehensive Agro-Industrial Programme
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                The Greenprint Initiative is a 15-year programme to build food
                factories, soilless farming greenhouses, livestock farms, and tree
                plantations across every state in Nigeria. We grow food, process it,
                package it, and export it — while planting 500 million trees to
                protect the land.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Designed to transform Nigeria from a net food importer into a
                continental food powerhouse, the programme creates over 2.4 million
                direct jobs and generates $12 billion in annual export revenue —
                all while combating desertification and climate change through the
                largest tree-planting initiative in African history.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Aligned with the African Union&apos;s Agenda 2063 and the AfCFTA, The
                Greenprint Initiative is more than an agricultural programme — it is
                a blueprint for continental food sovereignty.
              </p>
            </div>
          </motion.div>

          {/* Right: Nigeria Map SVG */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <NigeriaMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
