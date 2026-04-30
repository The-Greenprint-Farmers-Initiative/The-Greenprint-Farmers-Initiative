"use client";

import { motion } from "framer-motion";

const frameworks = [
  { name: "African Union", sub: "Agenda 2063 — The Africa We Want" },
  { name: "CAADP", sub: "Comprehensive Africa Agriculture Development Programme" },
  { name: "AfCFTA", sub: "African Continental Free Trade Area" },
  { name: "Malabo Declaration", sub: "Accelerated agricultural growth and transformation" },
  { name: "UN SDGs", sub: "Goals 1, 2, 8, 9, 13, 15" },
];

export default function PlanAlignment() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Aligned with Africa</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Built on the
              <br />
              <span className="display-italic text-[#C9A961]">continent&apos;s own frameworks.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-px bg-[#F2EDE2]/8">
          {frameworks.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-[#0A0E13] py-8 px-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-1 text-[#C9A961] font-serif italic text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <div className="font-serif text-2xl text-[#F2EDE2] leading-tight">{f.name}</div>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-[#F2EDE2]/55 text-base leading-relaxed">{f.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
