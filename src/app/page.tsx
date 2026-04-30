import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeProblem from "@/components/home/HomeProblem";
import HomeVision from "@/components/home/HomeVision";
import HomeStats from "@/components/home/HomeStats";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <HomeProblem />
      <HomeVision />
      <HomeStats />
      <HomeCTA />
      <Footer />
    </main>
  );
}
