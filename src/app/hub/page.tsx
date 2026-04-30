import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HubHero from "@/components/hub/HubHero";
import HubAnatomy from "@/components/hub/HubAnatomy";
import HubTech from "@/components/hub/HubTech";
import HubFlow from "@/components/hub/HubFlow";

export const metadata = {
  title: "The Hub — The Greenprint Farmers Initiative",
  description: "Inside a single Greenprint Hub: 500 hectares of integrated agricultural production.",
};

export default function HubPage() {
  return (
    <main>
      <Navbar />
      <HubHero />
      <HubAnatomy />
      <HubTech />
      <HubFlow />
      <Footer />
    </main>
  );
}
