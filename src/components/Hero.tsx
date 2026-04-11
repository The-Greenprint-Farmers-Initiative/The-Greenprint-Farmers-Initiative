"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/images/SLIDE 1 Feeding Africa. Growing Prosperity. Planting the Future.png",
    headline: "Feeding Africa.\nGrowing Prosperity.\nPlanting the Future.",
    sub: "A 15-Year Vision for Continental Food Sovereignty",
  },
  {
    image: "/images/SLIDE 2 72 Hubs. 36 States. One Vision.png",
    headline: "72 Hubs.\n36 States.\nOne Vision.",
    sub: "$8.7 Billion Agro-Industrial Programme for Nigeria",
  },
  {
    image: "/images/SLIDE 3 The Future of African Agriculture.png",
    headline: "The Future of\nAfrican Agriculture",
    sub: "Soilless Farming. 90% Less Water. 365 Days a Year.",
  },
  {
    image: "/images/SLIDE 4 From Field to Factory to World.png",
    headline: "From Field\nto Factory to World",
    sub: "Processing, Packaging, and Exporting — All in One Hub",
  },
  {
    image: "/images/SLIDE 5 Powered by Africa\u2019s Sun.png",
    headline: "Powered by\nAfrica\u2019s Sun",
    sub: "Clean Energy Driving Every Greenprint Hub",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
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
            <div className="mt-10">
              <a
                href="#problem"
                className="inline-flex items-center gap-2 border-2 border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-[#0D1B2A] px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Discover the Vision
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-28 sm:bottom-24 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#D4A843] scale-125" : "bg-white/40 hover:bg-white/70"
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

      {/* Caption */}
      <div className="absolute bottom-2 right-4 z-10 text-white/30 text-[10px] italic">
        Artist&apos;s render of planned facility
      </div>
    </section>
  );
}
