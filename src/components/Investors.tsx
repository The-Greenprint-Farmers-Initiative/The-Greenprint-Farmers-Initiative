"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { CheckCircle, Download, Calendar } from "lucide-react";

const revenueData = [
  { month: "M1", revenue: 0.8 },
  { month: "M2", revenue: 1.5 },
  { month: "M3", revenue: 2.5 },
  { month: "M4", revenue: 3.2 },
  { month: "M5", revenue: 3.5 },
  { month: "M6", revenue: 4.5 },
  { month: "M7", revenue: 4.0 },
  { month: "M8", revenue: 4.0 },
  { month: "M9", revenue: 4.0 },
  { month: "M10", revenue: 4.5 },
  { month: "M11", revenue: 4.5 },
  { month: "M12", revenue: 4.5 },
];

const metrics = [
  "Year 1 Revenue: $34-48M",
  "Breakeven: Month 18-24",
  "5-Year IRR: 22-28%",
  "MOIC: 2.2-3.5x",
  "First Distribution: Q3 Year 1",
  "Exit: Year 5 (IPO/Trade Sale)",
];

export default function Investors() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="investors" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Investment Opportunity
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4">
            Revenue from Month 3.
            <br />
            <span className="text-[#009639]">Cash-Flow Positive by Month 6.</span>
          </h2>
          <p className="mt-4 font-space text-lg text-[#0D1B2A]/70">
            Phase 1A: $65 Million | 3 Hubs | 22-28% Projected IRR
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Chart - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
          >
            <h3 className="font-space font-semibold text-[#0D1B2A] mb-1">
              Monthly Revenue Ramp-Up (Phase 1A)
            </h3>
            <p className="text-sm text-gray-500 mb-6">$ Millions per month</p>
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}M`}
                  />
                  <Tooltip
                    formatter={(value) => [`$${value}M`, "Revenue"]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    }}
                  />
                  <ReferenceLine
                    y={3}
                    stroke="#ef4444"
                    strokeDasharray="8 4"
                    strokeWidth={2}
                    label={{
                      value: "Operating Cost $3M",
                      position: "right",
                      fill: "#ef4444",
                      fontSize: 11,
                    }}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="#009639"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Metrics - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h3 className="font-space font-semibold text-[#0D1B2A] mb-6">
              Key Investor Metrics
            </h3>
            <div className="space-y-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4A843] mt-0.5 flex-shrink-0" />
                  <span className="text-[#0D1B2A] font-medium">{metric}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#D4A843] hover:bg-[#c4983a] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download Investor Memo
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#009639] hover:bg-[#007a2e] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Request Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
