import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProcessSection from "@/components/ProcessSection";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ProjectCarousel />
        <ProcessSection />
        <MetricsSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
