"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const impacts = [
  {
    before: "50%",
    after: "10%",
    arrow: true,
    label: "Post-harvest loss",
  },
  {
    before: "$4.7B",
    after: "$0",
    arrow: true,
    label: "Import replacement",
  },
  {
    value: 2.4,
    suffix: "M+",
    decimals: 1,
    label: "Jobs created",
  },
  {
    value: 500,
    suffix: "M",
    label: "Trees planted",
  },
  {
    prefix: "$",
    value: 12,
    suffix: "B",
    label: "Annual exports",
  },
];

export default function ImpactNumbers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="impact"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D3B0F 0%, #009639 100%)",
      }}
      ref={ref}
    >
      {/* Floating leaves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10%`,
              animation: `float-leaf ${8 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            🌿
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-white/60 text-sm font-bold tracking-[0.3em] uppercase">
            Measurable Impact
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mt-3">
            Numbers That Change a Continent
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A843]">
                {item.arrow ? (
                  <span>
                    <span className="text-white/50 text-2xl line-through">
                      {item.before}
                    </span>
                    <br />
                    {item.after}
                  </span>
                ) : (
                  <>
                    {item.prefix || ""}
                    {inView ? (
                      <CountUp
                        end={item.value!}
                        duration={2.5}
                        decimals={item.decimals || 0}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                    {item.suffix || ""}
                  </>
                )}
              </div>
              <div className="text-white/70 text-sm mt-3 uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
