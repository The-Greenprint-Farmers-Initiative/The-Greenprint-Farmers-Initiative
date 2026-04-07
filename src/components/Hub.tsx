"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const cards = [
  {
    title: "Open Crop Fields",
    size: "160 ha",
    description:
      "5 fields, 42 plots: grain, vegetables, root crops, legumes, cash crops",
    image: "/images/image_16_Rice_Paddy_Field_Section_4_Open_Crops___Grain.png",
  },
  {
    title: "Greenhouse & Soilless Farming",
    size: "30 ha",
    description:
      "Hydroponics, aeroponics, aquaponics — 90% less water, 3-10x yield",
    image: "/images/image_06_Greenhouse_Complex_Exterior_Section_2_Greenhouse.png",
  },
  {
    title: "Livestock Section",
    size: "40 ha",
    description:
      "50,000 poultry, 200 cattle, 50,000 catfish, feed mill, vet clinic",
    image: "/images/image_11_Poultry_Farm_Section_3_Livestock.png",
  },
  {
    title: "Factory Core",
    size: "40 ha",
    description:
      "Processing, cold storage, packaging, solar power, 6 grain silos",
    image: "/images/image_25_Processing_Factory_Interior_Section_Factory_Core.png",
  },
  {
    title: "Tree Planting Belt",
    size: "200 ha",
    description:
      "Fruit, timber, nitrogen alleys, desert barriers, beekeeping",
    image: "/images/image_22_Timber_Plantation_Section_5_Tree_Planting_T2.png",
  },
  {
    title: "Export Corridor",
    size: "30 ha",
    description:
      "Container yard, customs, 50 refrigerated trucks, weighbridge",
    image: "/images/image_05_Export_Corridor_Trucks_Section_6_Flow_Diagram.png",
  },
];

export default function Hub() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="hub" className="py-24 bg-[#0D1B2A] relative overflow-hidden" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Inside the Hub
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            A 500-Hectare Integrated
            <br />
            <span className="text-[#D4A843]">Agro-Industrial Complex</span>
          </h2>
        </motion.div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/20" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold text-xl">{card.title}</h3>
                  <span className="bg-[#009639] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {card.size}
                  </span>
                </div>
                <p className="text-white/0 group-hover:text-white/90 text-sm leading-relaxed transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
