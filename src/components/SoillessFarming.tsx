"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Droplets, Wind, Fish } from "lucide-react";
import CountUp from "react-countup";

const methods = [
  {
    title: "Hydroponics",
    icon: Droplets,
    image: "/images/NFT_Hydroponic_Lettuce___Leafy_Greens.png",
    description:
      "Plants grow in nutrient water. Dutch Bucket, NFT channels, Deep Water Culture.",
    stat: "5,000",
    statLabel: "Dutch Buckets per greenhouse",
    statNum: 5000,
  },
  {
    title: "Aeroponics",
    icon: Wind,
    image: "/images/Aeroponic_Potato_Seed_Multiplication.png",
    description:
      "Roots suspended in air, misted with nutrients. 50-100 potato mini-tubers per plant vs. 5-8 in soil.",
    stat: "100",
    statLabel: "Mini-tubers per plant",
    statNum: 100,
  },
  {
    title: "Aquaponics",
    icon: Fish,
    image: "/images/Aquaponics_System_Fish_and_Plants_Together.png",
    description:
      "Fish + plants in zero-waste loop. Catfish feed the lettuce. Lettuce cleans the water.",
    stat: "Zero",
    statLabel: "Waste produced",
    statNum: 0,
  },
];

export default function SoillessFarming() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="soilless" className="py-24 bg-[#E8F5E9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Modern Technology
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4">
            The Future is Soilless
          </h2>
          <p className="mt-4 text-xl text-[#0D1B2A]/70 font-space font-medium">
            90% Less Water. 3-10x More Yield. 365 Days a Year.
          </p>
        </motion.div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={method.image}
                    alt={method.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 bg-[#009639] text-white p-2.5 rounded-xl shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#0D1B2A]">
                    {method.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                    {method.description}
                  </p>

                  {/* Animated stat */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="font-space text-2xl font-bold text-[#009639]">
                      {method.statNum > 0 && inView ? (
                        <CountUp
                          end={method.statNum}
                          duration={2}
                          separator=","
                        />
                      ) : (
                        method.stat
                      )}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {method.statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
