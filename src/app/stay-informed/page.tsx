import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StayHero from "@/components/stay/StayHero";
import StayPartners from "@/components/stay/StayPartners";
import StayForm from "@/components/stay/StayForm";

export const metadata = {
  title: "Stay Informed — The Greenprint Farmers Initiative",
  description: "Connect with the Greenprint Farmers Initiative.",
};

export default function StayInformedPage() {
  return (
    <main>
      <Navbar />
      <StayHero />
      <StayPartners />
      <StayForm />
      <Footer />
    </main>
  );
}
