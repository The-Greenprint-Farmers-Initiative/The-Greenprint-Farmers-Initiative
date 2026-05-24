import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyEvents from "@/components/journey/JourneyEvents";

export const metadata = {
  title: "The Journey — The Greenprint Farmers Initiative",
  description:
    "Documented moments from the Greenprint Farmers Initiative's continental campaign across Africa.",
};

export default function JourneyPage() {
  return (
    <main>
      <Navbar />
      <JourneyHero />
      <JourneyEvents />
      <Footer />
    </main>
  );
}
