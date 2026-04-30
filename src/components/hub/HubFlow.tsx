"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stages = [
  { num: "I", title: "Cultivation", desc: "Open-field crops, greenhouse vegetables, livestock, and tree plantations grown side-by-side." },
  { num: "II", title: "Harvest", desc: "Coordinated picking schedules, on-site quality checks, and immediate cold transfer." },
  { num: "III", title: "Processing", desc: "On-hub factories handle washing, sorting, drying, milling, and packaging — value added before export." },
  { num: "IV", title: "Distribution", desc: "Cold-chain trucks move finished goods to regional markets, ports, and AfCFTA trade routes." },
  { num: "V", title: "Reinvestment", desc: "Profits re-circulate into community training, hub expansion, and the planting of more trees." },
];

export default function HubFlow() {
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
            <div className="eyebrow">The Flow</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              From soil to <span className="display-italic text-[#C9A961]">global markets.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-px bg-[#F2EDE2]/8">
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0A0E13] py-10 px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            >
              <div className="md:col-span-2">
                <div className="font-serif italic text-[#C9A961] text-3xl">{s.num}</div>
              </div>
              <div className="md:col-span-3">
                <div className="font-serif text-2xl text-[#F2EDE2] leading-tight">{s.title}</div>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-[17px] text-[#F2EDE2]/65 leading-[1.6]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href="/plan"
            className="link-line text-sm font-medium tracking-wide text-[#C9A961]"
          >
            See where seventy-two of these will rise →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
