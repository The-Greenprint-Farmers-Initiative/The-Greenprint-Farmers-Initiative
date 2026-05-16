"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HubHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/COMPLETE FARM 3D AERIAL MASTER VIEW (THE HERO IMAGE).png"
          alt="Greenprint Hub aerial view"
          fill
          className="object-cover animate-kenburns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1F17] via-[#0C1F17]/55 to-[#0C1F17]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F17] via-transparent to-[#0C1F17]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-8">Inside The Hub</div>

          <h1 className="display text-[#F2EDE2] text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] max-w-5xl">
            Five hundred hectares.
            <br />
            <span className="display-italic text-[#C9A961]">One ecosystem.</span>
          </h1>

          <p className="mt-10 font-serif text-lg sm:text-xl text-[#F2EDE2]/70 max-w-2xl leading-relaxed">
            Each Greenprint Hub will be a self-sustaining agro-industrial complex —
            combining open-field crops, soilless greenhouses, processing factories,
            tree plantations, and solar power into a single integrated organism.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-2 right-4 z-10 text-[#F2EDE2]/30 text-[10px] italic font-serif">
        Artist&apos;s render of planned facility
      </div>
    </section>
  );
}
