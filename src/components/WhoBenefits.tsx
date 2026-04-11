"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Landmark, Flag, Globe2 } from "lucide-react";

const beneficiaries = [
  {
    icon: Landmark,
    title: "For the African Union",
    items: [
      "Delivers on Agenda 2063 Goal 5: modern agriculture for prosperity",
      "Demonstrates a replicable model for continental food security",
      "Supports CAADP and Malabo Declaration commitments",
      "Creates a flagship project for AU institutional credibility",
    ],
  },
  {
    icon: Flag,
    title: "For Nigeria",
    items: [
      "Replaces $4.7 billion in annual food imports",
      "Creates 2.4 million jobs — primarily for youth and women",
      "Generates $12 billion in annual export revenue",
      "Plants 500 million trees to combat desertification",
    ],
  },
  {
    icon: Globe2,
    title: "For the World",
    items: [
      "Strengthens global food supply chain resilience",
      "Advances climate action through massive reforestation",
      "Reduces migration pressure by creating rural prosperity",
      "Opens new markets for international trade and investment",
    ],
  },
];

export default function WhoBenefits() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="benefits" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Impact
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4 leading-tight">
            Who Benefits — And Why It Matters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficiaries.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#009639]/20 hover:shadow-lg transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#E8F5E9] rounded-2xl mb-6">
                  <Icon className="w-7 h-7 text-[#009639]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0D1B2A] mb-6">
                  {b.title}
                </h3>
                <ul className="space-y-4">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
