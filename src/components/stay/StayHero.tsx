"use client";

import { motion } from "framer-motion";

export default function StayHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="eyebrow mb-8">Stay Informed</div>

          <h1 className="display text-[#F2EDE2] text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem]">
            Join the conversation
            <br />
            <span className="display-italic text-[#C9A961]">that will shape Africa.</span>
          </h1>

          <div className="mt-12 max-w-2xl">
            <p className="font-serif text-xl text-[#F2EDE2]/75 leading-[1.55]">
              Whether you represent a government, a development institution, an investor group,
              or you simply believe in Africa&apos;s agricultural future — we welcome your enquiry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
