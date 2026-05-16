"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    title: "Governments and AU agencies",
    desc: "Pan-African institutions, ministries of agriculture, and development banks aligned with African Union Commission Simulation.",
  },
  {
    title: "Investors and development finance",
    desc: "DFIs, sovereign wealth funds, climate funds, and impact investors interested in catalytic capital.",
  },
  {
    title: "Research and academia",
    desc: "Universities, agricultural research centres, and think tanks contributing to the model.",
  },
  {
    title: "Citizens and advocates",
    desc: "Anyone who believes in food sovereignty for Africa and wants to follow the journey.",
  },
];

export default function StayPartners() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Who We Welcome</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] max-w-3xl">
              Four ways to <span className="display-italic text-[#C9A961]">connect.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-px bg-[#F2EDE2]/8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0A0E13] py-8 px-2 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <div className="md:col-span-1 text-[#C9A961] font-serif italic text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <div className="font-serif text-2xl text-[#F2EDE2] leading-tight">{t.title}</div>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-[#F2EDE2]/60 text-base leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
