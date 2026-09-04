"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Code2,
  Server,
  Headphones,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Plus,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DeviceMockup } from "@/components/ui/DeviceMockup";
import { projectsData, ProjectItem } from "@/data/projects";

export function RecentWork() {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject: ProjectItem = projectsData[activeIndex];
  const totalProjects = projectsData.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  const getServiceIcon = (service: string) => {
    const s = service.toLowerCase();
    if (s.includes("design") || s.includes("layout")) return Monitor;
    if (s.includes("dev") || s.includes("gallery") || s.includes("funnel")) return Code2;
    if (s.includes("host")) return Server;
    if (s.includes("support")) return Headphones;
    if (s.includes("lead") || s.includes("seo") || s.includes("catalog")) return Sparkles;
    return ShieldCheck;
  };

  return (
    <section id="work" className="section-padding overflow-hidden" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Top Eyebrow / Tagline Row */}
        <div className="reveal flex items-center justify-between border-b border-[#DAB49D]/40 pb-5 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#895737] font-semibold">
              Our Work
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#DAB49D]" />
          </div>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] text-[#895737]/75">
            We Build &nbsp;/&nbsp; We Host &nbsp;/&nbsp; You Grow
          </span>
        </div>

        {/* Header Row */}
        <div className="relative mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="reveal reveal-delay-1 font-serif text-[38px] sm:text-[54px] lg:text-[68px] leading-[1.02] text-[#5E3023] mb-5 tracking-tight">
              Websites <br />
              Built for <span className="italic">What's Next.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-base sm:text-lg text-[#895737] leading-[1.65]">
              Every business has a different story. We design, develop, and host
              websites that bring those stories to life — and turn visitors into
              customers.
            </p>
          </div>

          {/* Handwritten Annotation with Curved Arrow */}
          <div className="hidden lg:flex items-center gap-2.5 text-[#895737] absolute top-2 right-12 select-none pointer-events-none">
            <span className="font-serif italic text-lg text-[#895737] tracking-wide rotate-[-3deg]">
              Designed to deliver real results.
            </span>
            <svg
              width="48"
              height="40"
              viewBox="0 0 48 40"
              fill="none"
              className="text-[#C08552] stroke-current rotate-[8deg]"
            >
              <path
                d="M6 10 C 18 6, 34 14, 40 30"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="2 0"
              />
              <path
                d="M32 28 L 40 30 L 42 22"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Main Showcase Grid: Left Details + Right Device Mockup */}
        <div className="reveal reveal-delay-3 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14 lg:mb-18">
          {/* Left Column: Active Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            {/* Project Index Counter + Navigation Arrows */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#895737] font-medium">
                {activeProject.number} / 0{totalProjects}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-[#DAB49D] flex items-center justify-center text-[#5E3023] hover:bg-[#DAB49D]/40 transition-all cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-[#5E3023] text-[#F3E9DC] flex items-center justify-center hover:bg-[#482319] transition-all cursor-pointer shadow-sm"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Name */}
            <h3 className="font-serif text-[32px] sm:text-[40px] text-[#5E3023] font-normal leading-[1.12] mb-2 tracking-tight">
              {activeProject.name}
            </h3>

            {/* Category / Location Tag */}
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#895737]/80 uppercase mb-4">
              {activeProject.categoryTag}
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-[#895737] leading-[1.65] mb-6">
              {activeProject.description}
            </p>

            {/* Service / Feature Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProject.services.map((service) => {
                const IconComponent = getServiceIcon(service);
                return (
                  <div
                    key={service}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DAB49D] bg-[#FAF6F0]/70 text-[#895737] text-[12px] font-medium shadow-[0_1px_2px_rgba(94,48,35,0.04)]"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#C08552]" />
                    <span>{service}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-1">
              {activeProject.liveUrl && activeProject.liveUrl.startsWith("http") ? (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5E3023] text-[#F3E9DC] text-sm font-medium shadow-md hover:bg-[#482319] hover:shadow-lg transition-all"
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5E3023] text-[#F3E9DC] text-sm font-medium shadow-md hover:bg-[#482319] hover:shadow-lg transition-all group"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 text-sm font-medium text-[#5E3023] hover:text-[#C08552] transition-colors cursor-pointer py-2 px-2"
              >
                <span>Next Project</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Device Mockup Showcase */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <DeviceMockup project={activeProject} />
          </div>
        </div>

        {/* Bottom Project Thumbnail Strip */}
        <div className="reveal reveal-delay-4 pt-6 border-t border-[#DAB49D]/40">
          <div className="flex items-center gap-3.5 overflow-x-auto pb-4 pt-2 no-scrollbar">
            {projectsData.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-[140px] sm:w-[168px] aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 text-left ${
                    isActive
                      ? "ring-2 ring-[#5E3023] shadow-lg scale-102 opacity-100"
                      : "opacity-60 hover:opacity-90 hover:scale-101 border border-[#DAB49D]/70"
                  }`}
                  aria-label={`Select ${project.name}`}
                >
                  <Image
                    src={project.thumbnailImage}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="170px"
                  />
                  {/* Subtle gradient vignette with title label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2 flex items-end">
                    <span className="text-[11px] font-medium text-white line-clamp-1">
                      {project.name}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Special Final Card: "Your Business Could Be Next" */}
            <a
              href="#contact"
              className="group flex-shrink-0 w-[140px] sm:w-[168px] aspect-[16/10] rounded-xl border-2 border-dashed border-[#C08552]/70 bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] p-3 flex flex-col items-center justify-center text-center transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <div className="w-7 h-7 rounded-full bg-[#C08552]/15 group-hover:bg-[#C08552]/25 flex items-center justify-center text-[#C08552] mb-1.5 transition-colors">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-serif text-[#5E3023] font-medium group-hover:text-[#C08552] leading-tight transition-colors">
                Your Business
                <br />
                Could Be Next
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
