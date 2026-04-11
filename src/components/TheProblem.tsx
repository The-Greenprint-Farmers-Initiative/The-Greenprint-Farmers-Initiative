"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { AlertTriangle, TrendingDown, DollarSign, Wheat } from "lucide-react";

const crisisStats = [
  {
    icon: AlertTriangle,
    value: 2.5,
    suffix: "B",
    label: "Africa's projected population by 2050",
    description:
      "The continent will need to more than double its food production to feed its growing population.",
  },
  {
    icon: TrendingDown,
    value: 60,
    suffix: "%",
    label: "Of Africa's arable land lies unused",
    description:
      "Nigeria alone has 84 million hectares of farmable land — yet imports most of its food.",
  },
  {
    icon: DollarSign,
    prefix: "$",
    value: 4.7,
    suffix: "B",
    decimals: 1,
    label: "Spent annually on food imports by Nigeria",
    description:
      "Billions leave the continent every year for food that could be grown at home.",
  },
  {
    icon: Wheat,
    value: 50,
    suffix: "%",
    label: "Of harvested food is lost post-harvest",
    description:
      "Without cold chains, processing, and storage, half of what farmers grow never reaches a plate.",
  },
];

export default function TheProblem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="problem" className="py-24 bg-[#0D1B2A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-red-400 text-sm font-bold tracking-[0.3em] uppercase">
            The Crisis
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Africa Cannot Feed Itself.
            <br />
            <span className="text-[#D4A843]">Yet.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            The numbers tell a story of urgent need — and extraordinary opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {crisisStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#D4A843]/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="font-space text-4xl font-bold text-[#D4A843] mb-2">
                  {stat.prefix || ""}
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div className="text-white font-semibold text-sm mb-3">
                  {stat.label}
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
