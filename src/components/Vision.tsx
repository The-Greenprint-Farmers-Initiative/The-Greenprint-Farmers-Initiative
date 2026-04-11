"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sprout, TreePine, Users } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: Sprout,
    title: "Food Sovereignty",
    description:
      "Nigeria will grow, process, package, and export its own food — replacing $4.7 billion in imports with locally produced alternatives and feeding a continent.",
    image: "/images/GREENHOUSE COMPLEX 3D ARCHITECTURAL RENDER (EXTERIOR).png",
  },
  {
    icon: TreePine,
    title: "Climate Resilience",
    description:
      "500 million trees will be planted across Nigeria — creating green belts, combating desertification, and restoring degraded land for future generations.",
    image: "/images/SOLAR POWER PLANT & ENERGY ZONE 3D ARCHITECTURAL RENDER.png",
  },
  {
    icon: Users,
    title: "Youth Prosperity",
    description:
      "Over 2.4 million direct jobs will be created — from farm technicians and greenhouse operators to logistics drivers and export managers — transforming rural economies.",
    image: "/images/ENTRANCE & ADMIN ZONE 3D ARCHITECTURAL RENDER.png",
  },
];

export default function Vision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="vision" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Our Vision
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4 leading-tight">
            Three Pillars of
            <br />
            <span className="text-[#009639]">Continental Transformation</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            The Greenprint Farmers Initiative envisions an Africa where no nation depends
            on imported food, where the land is protected for future generations, and where
            agriculture drives prosperity for millions of young Africans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-[#009639] text-white p-2.5 rounded-xl shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-2 right-3 text-white/40 text-[9px] italic">
                    Artist&apos;s render of planned facility
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#0D1B2A] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
