"use client";

import { motion } from "framer-motion";
import NigeriaMap from "../NigeriaMap";

export default function PlanMap() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">The Footprint</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Two hubs in <span className="display-italic text-[#C9A961]">every state.</span>
            </h2>
            <p className="mt-8 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl leading-relaxed">
              No region left behind — from the arid north to the fertile south, from coastal zones
              to the middle belt. The Federal Capital Territory will host the headquarters and coordination centre.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#11261C] p-6 sm:p-12 border border-[#F2EDE2]/8"
        >
          <NigeriaMap />
        </motion.div>
      </div>
    </section>
  );
}
