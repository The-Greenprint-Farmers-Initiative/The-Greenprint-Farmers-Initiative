"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-8">About the Initiative</div>

          <h1 className="display text-[#F2EDE2] text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem]">
            A vision built for the
            <br />
            <span className="display-italic text-[#C9A961]">century ahead.</span>
          </h1>

          <p className="mt-10 font-serif italic text-lg sm:text-xl text-[#C9A961]">
            Born in Nigeria. Built for the African continent.
          </p>

          <div className="mt-8 max-w-2xl">
            <p className="font-serif text-xl text-[#F2EDE2]/75 leading-[1.55]">
              The Greenprint Farmers Initiative is a continental programme conceived to address the
              most consequential challenge of our time — the question of whether two and a half billion
              Africans will eat with dignity in 2050. We begin in Nigeria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
