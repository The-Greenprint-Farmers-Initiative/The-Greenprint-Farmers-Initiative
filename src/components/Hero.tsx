"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Download } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const slides = [
  {
    image: "/images/COMPLETE FARM 3D AERIAL MASTER VIEW (THE HERO IMAGE).png",
    headline: "Feeding Africa.\nGrowing Prosperity.",
    sub: "72 Hubs Across 36 States",
  },
  {
    image: "/images/ENTRANCE & ADMIN ZONE 3D ARCHITECTURAL RENDER.png",
    headline: "The Future of\nAfrican Agriculture",
    sub: "$8.7 Billion. 15 Years. One Vision.",
  },
  {
    image: "/images/GREENHOUSE COMPLEX 3D ARCHITECTURAL RENDER (EXTERIOR).png",
    headline: "From Field\nto Factory to World",
    sub: "160 Hectares of Smart Crop Production",
  },
  {
    image: "/images/FACTORY CORE 3D AERIAL WITH SILOS.png",
    headline: "Farm to Port\nin 48 Hours",
    sub: "Greenprint Cold Chain Fleet",
  },
  {
    image: "/images/SOLAR POWER PLANT & ENERGY ZONE 3D ARCHITECTURAL RENDER.png",
    headline: "500 Million Trees\nfor Nigeria",
    sub: "The Green Canopy Programme",
  },
];

const stats = [
  { value: 72, suffix: "", label: "Hubs" },
  { value: 2.4, suffix: "M+", label: "Jobs", decimals: 1 },
  { value: 12, prefix: "$", suffix: "B", label: "Exports" },
  { value: 500, suffix: "M", label: "Trees" },
  { value: 8.7, prefix: "$", suffix: "B", label: "Programme", decimals: 1 },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* All background images stacked — crossfade via opacity */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <div
              className={`absolute inset-0 ${i === current ? "animate-kenburns" : ""}`}
              style={{ transform: i !== current ? "scale(1)" : undefined }}
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight whitespace-pre-line">
                {slides[current].headline}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#D4A843] italic font-playfair">
                {slides[current].sub}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#vision"
                  className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0D1B2A] transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  Explore the Vision
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-[#009639] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#007a2e] transition-all duration-300 shadow-lg shadow-green-900/30"
                >
                  <Download className="w-4 h-4" />
                  Download Business Plan
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-28 sm:bottom-24 flex gap-3 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[#D4A843] scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 animate-bounce-slow z-10">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className="bg-[#0D1B2A] py-8 border-t border-[#D4A843]/20"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-space text-3xl sm:text-4xl font-bold text-[#D4A843]">
                {stat.prefix || ""}
                {statsInView ? (
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
              <div className="text-white/60 text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
