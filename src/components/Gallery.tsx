"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/COMPLETE FARM 3D AERIAL MASTER VIEW (THE HERO IMAGE).png", alt: "Complete Farm 3D Aerial Master View" },
  { src: "/images/ENTRANCE & ADMIN ZONE 3D ARCHITECTURAL RENDER.png", alt: "Entrance & Admin Zone" },
  { src: "/images/FACTORY CORE 3D AERIAL WITH SILOS.png", alt: "Factory Core with Grain Silos" },
  { src: "/images/GREENHOUSE COMPLEX 3D ARCHITECTURAL RENDER (EXTERIOR).png", alt: "Greenhouse Complex Exterior" },
  { src: "/images/SOLAR POWER PLANT & ENERGY ZONE 3D ARCHITECTURAL RENDER.png", alt: "Solar Power Plant & Energy Zone" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + images.length) % images.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % images.length : null));

  return (
    <section id="gallery" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            Visualising the Future
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mt-4">
            Architectural Renders
          </h2>
          <p className="mt-4 text-gray-500 text-sm italic">
            All images are artist&apos;s renders of planned facilities — not photographs of existing structures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                  <span className="block text-white/50 text-[10px] italic mt-1">Artist&apos;s render</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-50" aria-label="Close">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 sm:left-8 text-white/70 hover:text-white z-50" aria-label="Previous">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 sm:right-8 text-white/70 hover:text-white z-50" aria-label="Next">
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                sizes="100vw"
              />
              <p className="text-white text-center mt-4 font-medium">{images[lightbox].alt}</p>
              <p className="text-white/40 text-center text-xs italic">Artist&apos;s render of planned facility</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
