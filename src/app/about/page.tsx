import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutOrigin from "@/components/about/AboutOrigin";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutQuote from "@/components/about/AboutQuote";

export const metadata = {
  title: "About — The Greenprint Farmers Initiative",
  description:
    "The story behind The Greenprint Farmers Initiative — a 15-year vision to transform Africa's food systems.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutOrigin />
      <AboutPrinciples />
      <AboutQuote />
      <Footer />
    </main>
  );
}
