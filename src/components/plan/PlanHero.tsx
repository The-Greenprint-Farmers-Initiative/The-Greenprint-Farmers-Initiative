"use client";

import { motion } from "framer-motion";

export default function PlanHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-8">The 15-Year Plan · 2026 — 2041</div>

          <h1 className="display text-[#F2EDE2] text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem]">
            A continent-scale plan,
            <br />
            <span className="display-italic text-[#C9A961]">delivered state by state.</span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="font-serif text-xl text-[#F2EDE2]/75 leading-[1.55]">
              Seventy-two integrated hubs. Thirty-six states and the FCT. Three phases.
              One coordinated rollout — anchored in Nigeria, designed for the African continent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
