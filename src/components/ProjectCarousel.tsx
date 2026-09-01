"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "01",
      title: "North Coast Architecture Studio",
      category: "Websites · SEO · Brand Identity",
      description:
        "Complete digital overhaul for a premier Lake Michigan timber and glass architecture practice. Integrated high-resolution project portfolio and automated project lead funnel.",
      metric: "+185% Inquiries",
      image: "/images/project_architecture.jpg",
      location: "Charlevoix & Traverse City",
    },
    {
      id: "02",
      title: "Grand Traverse Lodge & Club",
      category: "Lead Generation · Web Design",
      description:
        "Boutique resort and lodge digital platform featuring real-time room inquiry integration, dining reservations, and cinematic regional photography.",
      metric: "3.4× Direct Bookings",
      image: "/images/project_resort.jpg",
      location: "Traverse City, MI",
    },
    {
      id: "03",
      title: "Peninsula Artisan Cherry Co.",
      category: "E-Commerce · Automation · Local SEO",
      description:
        "Direct-to-consumer digital shop with automated subscription management, local retail store locator, and targeted regional SEO campaigns.",
      metric: "+62% Online Sales",
      image: "/images/hero_waterfront.jpg",
      location: "Old Mission Peninsula",
    },
    {
      id: "04",
      title: "Lakeside Dental & Specialty Clinic",
      category: "Web Design · Lead Capture · Workflow",
      description:
        "Patient-focused website design with automated appointment scheduling, pre-visit digital forms, and Google Business Profile optimization.",
      metric: "14 hrs Saved/Week",
      image: "/images/about_portrait.jpg",
      location: "Traverse City, MI",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section id="work" className="py-24 md:py-36 bg-[#FFFDF9] border-b border-[#D8D4CB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label & Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="label-uppercase text-[#18202A]">03 — SELECTED WORK</span>
            <div className="w-12 h-[1px] bg-[#D8D4CB]" />
          </div>

          {/* Pagination & Arrow Controls */}
          <div className="flex items-center gap-6">
            <span className="font-serif-display text-lg text-[#18202A] tracking-wider">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full border border-[#D8D4CB] bg-[#F7F5F0] hover:bg-[#18202A] hover:text-[#FFFDF9] hover:border-[#18202A] flex items-center justify-center transition-all duration-250 text-[#18202A]"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-12 h-12 rounded-full border border-[#D8D4CB] bg-[#F7F5F0] hover:bg-[#18202A] hover:text-[#FFFDF9] hover:border-[#18202A] flex items-center justify-center transition-all duration-250 text-[#18202A]"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Project Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Project Image Container (7 Cols Desktop, Clean 16:10 Rectangle) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden border border-[#D8D4CB] shadow-card-custom group bg-[#F7F5F0]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-5 left-5 bg-[#18202A]/90 backdrop-blur-sm text-[#FFFDF9] text-[13px] font-medium px-4 py-1.5 rounded-full border border-white/10">
                {activeProject.location}
              </div>
            </div>
          </div>

          {/* Project Details Container (5 Cols Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#D8D4CB] text-[12px] font-semibold text-[#C99A3A] tracking-wider uppercase mb-4 w-fit">
              {activeProject.category}
            </div>

            <h3 className="text-project-heading text-[#18202A] mb-4">
              {activeProject.title}
            </h3>

            <p className="text-body-regular text-[#77736B] mb-8">
              {activeProject.description}
            </p>

            {/* Defensible Metric Highlight */}
            <div className="p-5 rounded-[12px] bg-[#F7F5F0] border border-[#D8D4CB] mb-8 flex items-center justify-between max-w-sm">
              <span className="text-[13px] font-semibold uppercase text-[#77736B] tracking-wider">
                Key Result
              </span>
              <span className="font-serif-display text-2xl text-[#18202A]">
                {activeProject.metric}
              </span>
            </div>

            {/* Case Study Link */}
            <Link
              href="#contact"
              className="btn-hover-arrow inline-flex items-center gap-2 text-[16px] font-medium text-[#18202A] hover:text-[#C99A3A] transition-colors w-fit"
            >
              <span>Request Case Study & Walkthrough</span>
              <ExternalLink className="arrow-icon w-4 h-4 text-[#C99A3A]" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
