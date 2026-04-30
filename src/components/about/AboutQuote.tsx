"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutQuote() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-serif text-[#C9A961] text-7xl leading-none mb-6">&ldquo;</div>
          <blockquote className="display-italic text-[#F2EDE2] text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] leading-[1.25]">
            Nigeria has the land, the labour, the climate, and the commodities.
            What it needs is a bold, structured, and investable framework to
            unlock its agro-industrial potential. The Greenprint Farmers Initiative
            aims to be that framework.
          </blockquote>

          <div className="mt-12 flex flex-col items-center gap-1">
            <div className="text-sm font-medium text-[#F2EDE2] tracking-wide">Founders</div>
            <div className="text-xs text-[#F2EDE2]/45 uppercase tracking-[0.2em]">
              The Greenprint Farmers Initiative
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/stay-informed"
              className="link-line text-sm font-medium text-[#C9A961] tracking-wide"
            >
              Begin a conversation →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
