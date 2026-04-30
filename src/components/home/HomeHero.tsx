"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/SLIDE 1 Feeding Africa. Growing Prosperity. Planting the Future.png",
    headline: "Feeding Africa.\nGrowing Prosperity.",
  },
  {
    image: "/images/SLIDE 2 72 Hubs. 36 States. One Vision.png",
    headline: "72 Hubs. 36 States.\nOne vision.",
  },
  {
    image: "/images/SLIDE 3 The Future of African Agriculture.png",
    headline: "The future of\nAfrican agriculture.",
  },
  {
    image: "/images/SLIDE 4 From Field to Factory to World.png",
    headline: "From field, to factory,\nto world.",
  },
  {
    image: "/images/SLIDE 5 Powered by Africa's Sun.png",
    headline: "Powered by\nAfrica's sun.",
  },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <div className={`absolute inset-0 ${i === current ? "animate-kenburns" : ""}`}>
            <Image
              src={slide.image}
              alt={slide.headline.replace(/\n/g, " ")}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E13] via-[#0A0E13]/55 to-[#0A0E13]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E13] via-transparent to-[#0A0E13]/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="eyebrow mb-8 opacity-90">A 15-Year Vision · 2026 — 2041</div>

        <AnimatePresence mode="wait">
          <motion.h1
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[#F2EDE2] text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] max-w-5xl whitespace-pre-line"
          >
            {slides[current].headline}
          </motion.h1>
        </AnimatePresence>

        <p className="mt-10 font-serif text-lg sm:text-xl text-[#F2EDE2]/70 max-w-xl leading-relaxed">
          A $8.7 billion programme to build seventy-two integrated agro-industrial
          hubs across Nigeria&apos;s thirty-six states.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <Link
            href="/about"
            className="text-[13px] font-medium tracking-wide text-[#0A0E13] bg-[#C9A961] hover:bg-[#D4B67A] px-6 py-3 transition-colors"
          >
            Read the vision
          </Link>
          <Link
            href="/plan"
            className="link-line text-[13px] font-medium tracking-wide text-[#F2EDE2]"
          >
            See the 15-year plan →
          </Link>
        </div>

        <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-700 ${
                i === current ? "w-12 bg-[#C9A961]" : "w-6 bg-[#F2EDE2]/30 hover:bg-[#F2EDE2]/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-4 z-10 text-[#F2EDE2]/30 text-[10px] italic font-serif">
        Artist&apos;s render of planned facility
      </div>
    </section>
  );
}
