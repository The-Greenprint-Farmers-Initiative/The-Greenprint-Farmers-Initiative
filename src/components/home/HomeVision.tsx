"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "I",
    image: "/images/SLIDE 3 The Future of African Agriculture.png",
    title: "Food sovereignty",
    desc: "Soilless greenhouses, year-round production, and 90 percent less water. A continental food supply chain that begins and ends in Africa.",
  },
  {
    num: "II",
    image: "/images/SLIDE 5 Powered by Africa's Sun.png",
    title: "Climate resilience",
    desc: "Five hundred million trees planted alongside seventy-two solar-powered hubs. Productive land use that heals as it produces.",
  },
  {
    num: "III",
    image: "/images/SLIDE 4 From Field to Factory to World.png",
    title: "Youth prosperity",
    desc: "2.4 million dignified jobs across the country. Training, ownership, and pathways for the generation that will inherit this work.",
  },
];

export default function HomeVision() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">The Vision</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Three pillars.
              <br />
              <span className="display-italic text-[#C9A961]">One continent transformed.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] mb-7 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13]/40 to-transparent" />
              </div>

              <div className="font-serif italic text-[#C9A961] text-2xl mb-3">{p.num}.</div>
              <h3 className="font-serif text-2xl text-[#F2EDE2] mb-4 leading-tight">{p.title}</h3>
              <p className="font-serif text-base text-[#F2EDE2]/65 leading-[1.65]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
