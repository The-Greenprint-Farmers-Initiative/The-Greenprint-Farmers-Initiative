"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-8">Join the Conversation</div>

          <h2 className="display text-[#F2EDE2] text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.05]">
            The future of African agriculture
            <br />
            <span className="display-italic text-[#C9A961]">begins with this conversation.</span>
          </h2>

          <p className="mt-10 font-serif text-lg text-[#F2EDE2]/65 max-w-2xl mx-auto leading-relaxed">
            Whether you represent a government, a development institution, an investor group,
            or you simply care about Africa&apos;s future — we welcome your enquiry.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center">
            <Link
              href="/stay-informed"
              className="text-[13px] font-medium tracking-wide text-[#0A0E13] bg-[#C9A961] hover:bg-[#D4B67A] px-7 py-3.5 transition-colors"
            >
              Begin a conversation
            </Link>
            <Link
              href="/plan"
              className="link-line text-[13px] font-medium tracking-wide text-[#F2EDE2]"
            >
              Read the plan →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
