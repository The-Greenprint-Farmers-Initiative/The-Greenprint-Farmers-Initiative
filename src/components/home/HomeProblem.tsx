"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2.5B", label: "Africans by 2050", desc: "Demanding food, jobs, futures." },
  { value: "60%", label: "Of the world's uncultivated arable land", desc: "Sits on the African continent." },
  { value: "$4.7B", label: "Nigeria's annual food import bill", desc: "Capital flowing out, dependency growing." },
  { value: "50%", label: "Of harvest, lost", desc: "Half of what is grown never reaches a plate." },
];

export default function HomeProblem() {
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
            <div className="eyebrow">The Reality</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Africa is not running out of land.
              <br />
              <span className="display-italic text-[#C9A961]">It is running out of time.</span>
            </h2>
            <p className="mt-8 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl leading-relaxed">
              Without a structured, investable response, Africa will face a food crisis no
              aid programme can absorb. The Greenprint Farmers Initiative is built to be that response.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F2EDE2]/8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0C1F17] p-10"
            >
              <div className="display text-[#F2EDE2] text-5xl sm:text-6xl mb-6">{s.value}</div>
              <div className="text-[#F2EDE2] font-medium text-sm leading-snug mb-2">{s.label}</div>
              <div className="text-[#F2EDE2]/50 text-sm leading-relaxed font-serif">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
