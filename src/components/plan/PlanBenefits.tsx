"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    title: "For the African Union",
    points: [
      "A flagship deliverable for Agenda 2063",
      "A scalable model for sister states",
      "Continental food sovereignty within reach",
      "AfCFTA trade lanes activated",
    ],
  },
  {
    title: "For Nigeria",
    points: [
      "2.4 million dignified jobs",
      "$8.7 billion in catalytic investment",
      "An end to dependency on food imports",
      "Youth retention in rural economies",
    ],
  },
  {
    title: "For the world",
    points: [
      "Five hundred million trees against the climate crisis",
      "A new model for productive land use",
      "Stable, affordable food supply chains",
      "Africa rising — by African design",
    ],
  },
];

export default function PlanBenefits() {
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
            <div className="eyebrow">Who Benefits</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              A win that scales
              <br />
              <span className="display-italic text-[#C9A961]">in three directions.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F2EDE2]/8">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-[#0A0E13] p-10"
            >
              <h3 className="font-serif text-2xl text-[#F2EDE2] mb-8 leading-tight">{a.title}</h3>
              <ul className="space-y-4">
                {a.points.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-4 font-serif text-[16px] text-[#F2EDE2]/65 leading-[1.55]">
                    <span className="text-[#C9A961] text-xs mt-1.5">●</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
