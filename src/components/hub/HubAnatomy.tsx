"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const zones = [
  {
    num: "01",
    title: "The greenhouse complex",
    eyebrow: "Soilless Farming",
    desc: "Climate-controlled hydroponic and aeroponic greenhouses producing tomatoes, peppers, leafy greens and herbs year-round — using ninety per cent less water than traditional cultivation.",
    image: "/images/GREENHOUSE COMPLEX 3D ARCHITECTURAL RENDER (EXTERIOR).png",
  },
  {
    num: "02",
    title: "The factory core",
    eyebrow: "Field-to-Factory",
    desc: "On-site processing, packaging, and cold storage. Crops harvested in the morning are processed by midday and ready to ship — eliminating the post-harvest losses that plague African agriculture.",
    image: "/images/FACTORY CORE 3D AERIAL WITH SILOS.png",
  },
  {
    num: "03",
    title: "The solar power plant",
    eyebrow: "Clean Energy",
    desc: "Each hub will run on Africa's most abundant resource — sunlight. Solar arrays will power greenhouses, factories, and irrigation, with surplus feeding into the national grid.",
    image: "/images/SOLAR POWER PLANT & ENERGY ZONE 3D ARCHITECTURAL RENDER.png",
  },
  {
    num: "04",
    title: "Entrance and admin",
    eyebrow: "People & Knowledge",
    desc: "Training centres, research labs, agricultural extension offices, and community spaces. Each hub will be a campus as much as a farm — where the next generation of African agriculturalists is formed.",
    image: "/images/ENTRANCE & ADMIN ZONE 3D ARCHITECTURAL RENDER.png",
  },
];

export default function HubAnatomy() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Anatomy of a Hub</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Four zones.
              <br />
              <span className="display-italic text-[#C9A961]">One self-sustaining whole.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-32">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden">
                <Image
                  src={zone.image}
                  alt={zone.title}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="lg:col-span-5 lg:pt-8">
                <div className="font-serif italic text-[#F2EDE2]/30 text-2xl mb-4">{zone.num}</div>
                <div className="eyebrow mb-4">{zone.eyebrow}</div>
                <h3 className="display text-[#F2EDE2] text-[2rem] sm:text-[2.5rem] mb-6 leading-[1.1]">
                  {zone.title}
                </h3>
                <p className="font-serif text-[17px] text-[#F2EDE2]/65 leading-[1.65]">
                  {zone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
