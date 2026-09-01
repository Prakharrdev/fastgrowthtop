import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolutionsHero } from "@/components/sections/SolutionsHero";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { GoalBanner } from "@/components/sections/GoalBanner";
import { SiteAudit } from "@/components/sections/SiteAudit";
import { RecentWork } from "@/components/sections/RecentWork";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0]">
      <Header />
      <main className="flex-grow">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — The Problem */}
        <Problem />

        {/* 03 — The Solution */}
        <div id="solutions">
          <SolutionsHero />
          <SolutionsGrid />
          <GoalBanner />
          <SiteAudit />
        </div>

        {/* 04 — Recent Work */}
        <RecentWork />

        {/* 05 — About / Traverse City */}
        <About />

        {/* 06 — Google Reviews */}
        <Reviews />

        {/* 07 — Contact */}
        <Contact />
      </main>

      {/* 08 — Footer */}
      <Footer />
    </div>
  );
}
