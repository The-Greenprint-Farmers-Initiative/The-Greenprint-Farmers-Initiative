"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Farm",
  "Greenhouse",
  "Livestock",
  "Factory",
  "Trees",
  "Community",
];

const images = [
  { src: "/images/image_01_Master_Hub_Aerial_View_Cover_Executive_Summary.png", alt: "Master Hub Aerial View", category: "Farm" },
  { src: "/images/image_02_Hub_Entrance__Welcome_Gate_Section_1_Overview.png", alt: "Hub Entrance Welcome Gate", category: "Farm" },
  { src: "/images/image_03_Panoramic_Crop_Fields_Section_4_Open_Crop_Fields.png", alt: "Panoramic Crop Fields", category: "Farm" },
  { src: "/images/image_05_Export_Corridor_Trucks_Section_6_Flow_Diagram.png", alt: "Export Corridor Trucks", category: "Factory" },
  { src: "/images/image_06_Greenhouse_Complex_Exterior_Section_2_Greenhouse.png", alt: "Greenhouse Complex Exterior", category: "Greenhouse" },
  { src: "/images/image_07_Greenhouse_Interior_Section_2_Greenhouse.png", alt: "Greenhouse Interior", category: "Greenhouse" },
  { src: "/images/image_11_Poultry_Farm_Section_3_Livestock.png", alt: "Poultry Farm", category: "Livestock" },
  { src: "/images/image_13_Cattle_Ranch_Section_3_Livestock.png", alt: "Cattle Ranch", category: "Livestock" },
  { src: "/images/image_16_Rice_Paddy_Field_Section_4_Open_Crops___Grain.png", alt: "Rice Paddy Field", category: "Farm" },
  { src: "/images/image_22_Timber_Plantation_Section_5_Tree_Planting_T2.png", alt: "Timber Plantation", category: "Trees" },
  { src: "/images/image_25_Processing_Factory_Interior_Section_Factory_Core.png", alt: "Processing Factory Interior", category: "Factory" },
  { src: "/images/NFT_Hydroponic_Lettuce___Leafy_Greens.png", alt: "NFT Hydroponic Lettuce", category: "Greenhouse" },
  { src: "/images/Aeroponic_Potato_Seed_Multiplication.png", alt: "Aeroponic Potato Seed Multiplication", category: "Greenhouse" },
  { src: "/images/Aquaponics_System_Fish_and_Plants_Together.png", alt: "Aquaponics System", category: "Greenhouse" },
  { src: "/images/Community_Tree_Planting_Event__improved_version_.png", alt: "Community Tree Planting Event", category: "Community" },
  { src: "/images/Women_s_Processing_Cooperative.png", alt: "Women's Processing Cooperative", category: "Community" },
  { src: "/images/Youth_AgTech_Incubator.png", alt: "Youth AgTech Incubator", category: "Community" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((l) => (l !== null ? (l - 1 + filtered.length) % filtered.length : null));
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % filtered.length : null));

  return (
    <section id="gallery" className="py-24 bg-[#0D1B2A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#009639] text-sm font-bold tracking-[0.3em] uppercase">
            See It. Believe It.
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Every Element Visualised
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-[#009639] text-white shadow-lg shadow-green-900/30"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                sizes="100vw"
              />
              <p className="text-white text-center mt-4 font-medium">
                {filtered[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
