"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Hub from "@/components/Hub";
import SoillessFarming from "@/components/SoillessFarming";
import ImpactNumbers from "@/components/ImpactNumbers";
import Endorsement from "@/components/Endorsement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic imports for heavier components (client-side only)
const Investors = dynamic(() => import("@/components/Investors"), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#009639] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-[#0D1B2A] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#D4A843] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Hub />
      <SoillessFarming />
      <ImpactNumbers />
      <Investors />
      <Gallery />
      <Endorsement />
      <Contact />
      <Footer />
    </main>
  );
}
