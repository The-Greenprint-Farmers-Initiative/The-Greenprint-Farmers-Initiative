"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 72, suffix: "", label: "Integrated hubs", desc: "Two per state" },
  { value: 36, suffix: "+1", label: "States and FCT", desc: "Nationwide footprint" },
  { value: 500, suffix: " ha", label: "Per hub", desc: "Self-sustaining ecosystems" },
  { value: 2.4, suffix: "M+", label: "Jobs envisioned", desc: "Direct and indirect" },
  { value: 500, suffix: "M", label: "Trees to plant", desc: "Reforestation pledge" },
  { value: 8.7, suffix: "B", label: "USD programme", desc: "15-year investment" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  const formatted = value < 10 ? display.toFixed(1) : Math.floor(display).toString();

  return (
    <span ref={ref} className="display text-[#F2EDE2] text-6xl sm:text-7xl">
      {formatted}
      {suffix}
    </span>
  );
}

export default function HomeStats() {
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
            <div className="eyebrow">By the Numbers</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] max-w-3xl">
              The scale of <span className="display-italic text-[#C9A961]">what comes next.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F2EDE2]/8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0C1F17] p-10"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <div className="mt-6 text-[#F2EDE2] font-medium text-sm">{s.label}</div>
              <div className="text-[#F2EDE2]/50 text-sm font-serif mt-1">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
