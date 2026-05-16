"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "I",
    title: "Sovereignty before charity",
    desc: "Africa will not be aided into food security. It must be built into food security — by African capital, African labour, African coordination.",
  },
  {
    num: "II",
    title: "Industry, not subsistence",
    desc: "The unit of intervention is not the smallholder farm. It is the integrated agro-industrial hub. Scale and processing turn agriculture into prosperity.",
  },
  {
    num: "III",
    title: "Land that heals as it produces",
    desc: "Every hub is paired with reforestation, regenerative practice, and solar power. The programme will not extract from the continent it serves.",
  },
  {
    num: "IV",
    title: "Dignified work",
    desc: "2.4 million jobs envisioned, in places where young people are choosing migration over the soil. The work must be worth choosing.",
  },
  {
    num: "V",
    title: "Aligned with Africa&apos;s frameworks",
    desc: "The programme is built to advance African Union Commission Simulation, the AfCFTA, the Malabo Declaration, and the United Nations Sustainable Development Goals.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <div className="eyebrow mb-6">Principles</div>
          <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem]">
            Five commitments
            <br />
            <span className="display-italic text-[#C9A961]">that hold the work.</span>
          </h2>
        </motion.div>

        <div className="space-y-px">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-[#F2EDE2]/8 last:border-b"
            >
              <div className="md:col-span-2">
                <div className="font-serif italic text-[#C9A961] text-3xl">{p.num}</div>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-[#F2EDE2] leading-tight">{p.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="font-serif text-[17px] text-[#F2EDE2]/65 leading-[1.6]"
                   dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
