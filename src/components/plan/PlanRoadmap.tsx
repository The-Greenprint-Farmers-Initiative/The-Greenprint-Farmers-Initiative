"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase I",
    years: "2026 — 2031",
    title: "Foundation",
    details: [
      "Twelve pilot hubs across geo-political zones",
      "Establish the headquarters in FCT",
      "Train the first 50,000 farmers and operators",
      "Plant 50 million trees",
      "Prove the model — open the playbook",
    ],
  },
  {
    phase: "Phase II",
    years: "2031 — 2036",
    title: "Scale",
    details: [
      "Complete all 72 hubs across Nigeria",
      "Activate AfCFTA export corridors",
      "Open continental research and exchange",
      "1.2 million jobs operational",
      "200 million additional trees planted",
    ],
  },
  {
    phase: "Phase III",
    years: "2036 — 2041",
    title: "Continental impact",
    details: [
      "Replicate the model in partner AU states",
      "Africa as a net food exporter",
      "500 million trees achieved",
      "2.4 million dignified jobs in Nigeria alone",
      "A new agricultural century for the continent",
    ],
  },
];

export default function PlanRoadmap() {
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
            <div className="eyebrow">The Roadmap</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Three phases.
              <br />
              <span className="display-italic text-[#C9A961]">Fifteen years.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-px bg-[#F2EDE2]/8">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[#0A0E13] p-10 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium mb-4">
                  {p.phase} · {p.years}
                </div>
                <h3 className="display text-[#F2EDE2] text-4xl sm:text-5xl leading-[1.05]">
                  {p.title}
                </h3>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 lg:pt-3">
                {p.details.map((d, di) => (
                  <div key={di} className="flex items-start gap-4 font-serif text-[16px] text-[#F2EDE2]/70 leading-[1.55]">
                    <span className="text-[#C9A961] text-xs mt-2">●</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
