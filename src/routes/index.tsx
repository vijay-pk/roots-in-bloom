import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ResultsSection from "@/components/ResultsSection";
import FAQ from "@/components/FAQ";
import ShopCTA from "@/components/ShopCTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <Ingredients />
      <Benefits />
      <ResultsSection />
      <Testimonials />
      <FAQ />
      <ShopCTA />
      <Footer />
    </main>
  );
}
