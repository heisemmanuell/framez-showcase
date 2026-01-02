import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import TechStack from "@/components/landing/TechStack";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
