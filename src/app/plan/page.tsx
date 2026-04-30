import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanHero from "@/components/plan/PlanHero";
import PlanMap from "@/components/plan/PlanMap";
import PlanRoadmap from "@/components/plan/PlanRoadmap";
import PlanAlignment from "@/components/plan/PlanAlignment";
import PlanBenefits from "@/components/plan/PlanBenefits";

export const metadata = {
  title: "The Plan — The Greenprint Farmers Initiative",
  description: "72 hubs across 36 states + FCT. A 15-year three-phase rollout aligned with AU Agenda 2063.",
};

export default function PlanPage() {
  return (
    <main>
      <Navbar />
      <PlanHero />
      <PlanMap />
      <PlanRoadmap />
      <PlanAlignment />
      <PlanBenefits />
      <Footer />
    </main>
  );
}
