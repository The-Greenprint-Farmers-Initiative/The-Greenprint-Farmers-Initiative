"use client";

import { motion } from "framer-motion";

const tech = [
  { title: "Smart irrigation", desc: "Sensor-driven drip and aeroponic systems delivering exactly the water each plant needs.", metric: "90% less water" },
  { title: "Solar-first energy", desc: "Photovoltaic arrays providing baseline energy, with battery storage for night operations.", metric: "100% clean energy" },
  { title: "AI agronomy", desc: "Machine-learning models optimising planting schedules, detecting disease early, and predicting yields.", metric: "Real-time intelligence" },
  { title: "Cold-chain logistics", desc: "On-site refrigeration and integrated road and rail links moving produce from harvest to market in hours.", metric: "Under 24h farm-to-shelf" },
  { title: "Regenerative practices", desc: "Cover cropping, agroforestry, and compost cycling — rebuilding soil health while producing food.", metric: "Carbon-negative" },
  { title: "Open data platform", desc: "Public dashboards tracking yields, jobs, water saved, and trees planted. Accountability built into the model.", metric: "Transparent by design" },
];

export default function HubTech() {
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
            <div className="eyebrow">The Technology</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              Built for the
              <br />
              <span className="display-italic text-[#C9A961]">twenty-first century farm.</span>
            </h2>
            <p className="mt-8 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl leading-relaxed">
              Every hub will integrate field-tested technologies that have transformed agriculture
              elsewhere — adapted to African climates, soils, and needs.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2EDE2]/8">
          {tech.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-[#0A0E13] p-10 group"
            >
              <h3 className="font-serif text-2xl text-[#F2EDE2] mb-4 leading-tight">{t.title}</h3>
              <p className="font-serif text-base text-[#F2EDE2]/60 leading-[1.65] mb-6">{t.desc}</p>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#C9A961] font-medium">
                {t.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
