"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutOrigin() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 border-t border-[#F2EDE2]/8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-6">Origin</div>
          <h2 className="display text-[#F2EDE2] text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05]">
            Why now.
            <br />
            <span className="display-italic text-[#C9A961]">Why this.</span>
          </h2>
          <div className="mt-10 lg:hidden relative aspect-[4/5]">
            <Image
              src="/images/COMPLETE FARM 3D AERIAL MASTER VIEW (THE HERO IMAGE).png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-7"
        >
          <p className="font-serif text-[19px] text-[#F2EDE2]/75 leading-[1.65]">
            By 2050, Africa will be home to one in four people on the planet. The continent will need
            to feed 2.5 billion mouths — yet today it imports food at a scale that drains its capital and
            erodes its sovereignty. Nigeria alone spends $4.7 billion every year on food it could grow itself.
          </p>

          <p className="font-serif text-[19px] text-[#F2EDE2]/75 leading-[1.65]">
            The Greenprint Farmers Initiative was conceived in answer to this. Not as a charity. Not as
            an aid programme. But as a structured, investable, coordinated industrial answer to the
            largest food-systems challenge of the 21st century.
          </p>

          <p className="font-serif text-[19px] text-[#F2EDE2]/75 leading-[1.65]">
            We begin in Nigeria. The first phase will construct seventy-two integrated agro-industrial
            hubs across the country&apos;s thirty-six states and the Federal Capital Territory — each one a
            five-hundred-hectare ecosystem combining open-field cultivation, soilless greenhouses,
            processing factories, tree plantations, and solar power. Nigeria is the proof country.
          </p>

          <p className="font-serif text-[19px] text-[#F2EDE2]/75 leading-[1.65]">
            From there, the model is built to travel. Every hub, every protocol, every training module
            is designed to be redeployed in any partner state across the continent where the conditions
            repeat. Nigeria leads. Africa follows. The horizon is continental.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
