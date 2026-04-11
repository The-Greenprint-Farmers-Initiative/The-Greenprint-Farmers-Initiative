"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import Roadmap from "@/components/Roadmap";
import WhoBenefits from "@/components/WhoBenefits";
import Endorsement from "@/components/Endorsement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheProblem />
      <Vision />
      <Mission />
      <Roadmap />
      <WhoBenefits />
      <Endorsement />
      <Contact />
      <Footer />
    </main>
  );
}
