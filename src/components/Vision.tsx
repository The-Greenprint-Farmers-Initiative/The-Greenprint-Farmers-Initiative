"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
            <div className="relative w-full max-w-lg">
              {/* Simplified Nigeria outline with hub dots */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Nigeria outline - simplified */}
                <path
                  d="M180 80 L220 60 L280 55 L330 65 L370 80 L400 100 L420 130 L430 170 L425 210 L410 250 L390 280 L370 310 L350 340 L330 360 L300 380 L270 400 L240 410 L210 400 L180 380 L155 350 L140 320 L130 280 L125 240 L130 200 L140 160 L155 120 Z"
                  fill="#E8F5E9"
                  stroke="#009639"
                  strokeWidth="2"
                />
                {/* Hub dots - 36 states + FCT */}
                {[
                  [270, 110], [300, 100], [240, 95], [310, 130], [250, 130],
                  [200, 120], [350, 120], [370, 150], [330, 160], [290, 160],
                  [250, 160], [210, 155], [170, 150], [380, 190], [340, 200],
                  [300, 200], [260, 195], [220, 190], [175, 185], [360, 230],
                  [320, 240], [280, 235], [240, 230], [200, 225], [160, 230],
                  [340, 270], [300, 270], [260, 265], [220, 260], [170, 265],
                  [320, 310], [280, 305], [240, 300], [300, 340], [260, 340],
                  [230, 360], [270, 375],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r="8"
                      fill="#009639"
                      opacity="0.15"
                    >
                      <animate
                        attributeName="r"
                        values="8;14;8"
                        dur={`${2 + (i % 3) * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx={cx} cy={cy} r="4" fill="#009639" />
                  </g>
                ))}
                {/* FCT marker (Abuja - center) */}
                <circle cx="280" cy="235" r="7" fill="#D4A843" stroke="#D4A843" strokeWidth="2" />
                <text x="295" y="240" fill="#0D1B2A" fontSize="12" fontWeight="bold">
                  FCT
                </text>
              </svg>
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-[#009639]" />
                  <span className="text-gray-600">Greenprint Hub</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#D4A843]" />
                  <span className="text-gray-600">FCT Headquarters</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">72 Hubs across 36 States + FCT</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
