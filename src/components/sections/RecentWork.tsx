"use client";

import { useState, useRef, useEffect } from "react";
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
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);

  const activeProject: ProjectItem = projectsData[activeIndex];
  const totalProjects = projectsData.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  };

  // Scroll active thumbnail into center view
  useEffect(() => {
    if (thumbnailsContainerRef.current) {
      const activeEl = thumbnailsContainerRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

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
    <section
      id="work"
      ref={ref}
      className="relative min-h-screen xl:h-screen xl:max-h-[1050px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 bg-[#F3E9DC] overflow-hidden"
    >
      <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col flex-grow justify-between">
        {/* ========================================================
            MAIN SHOWCASE: HEADER + INTERACTIVE PROJECT + DEVICES
           ======================================================== */}
        <div className="flex flex-col justify-center flex-grow py-2">
          {/* Header Row */}
          <div className="relative mb-6 sm:mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="reveal reveal-delay-1 font-serif text-[34px] sm:text-[46px] lg:text-[54px] xl:text-[60px] leading-[1.02] text-[#5E3023] mb-3 tracking-tight">
                Websites <br className="hidden sm:inline" />
                Built for <span className="italic">What's Next.</span>
              </h2>
              <p className="reveal reveal-delay-2 text-sm sm:text-base text-[#895737] leading-[1.55] max-w-lg">
                Every business has a different story. We design, develop, and host
                websites that bring those stories to life — and turn visitors into
                customers.
              </p>
            </div>

            {/* Handwritten Annotation with Sketched Curved Arrow */}
            <div className="hidden lg:flex items-center gap-3 text-[#895737] select-none pointer-events-none pb-2 pr-6">
              <span className="font-serif italic text-base lg:text-lg text-[#895737]/90 tracking-wide rotate-[-3deg]">
                Designed to deliver real results.
              </span>
              <svg
                width="46"
                height="38"
                viewBox="0 0 46 38"
                fill="none"
                className="text-[#C08552] stroke-current rotate-[6deg]"
              >
                <path
                  d="M4 8 C 16 4, 32 12, 38 28"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeDasharray="2 0"
                />
                <path
                  d="M30 26 L 38 28 L 40 20"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Project Details Grid (Left Details + Right Devices) */}
          <div className="reveal reveal-delay-3 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Dynamic Animated Active Project Information */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              {/* Counter & Arrow Controls */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs sm:text-sm font-mono tracking-widest text-[#895737] font-semibold">
                  {activeProject.number} / 0{totalProjects}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-[#DAB49D] flex items-center justify-center text-[#5E3023] hover:bg-[#DAB49D]/40 active:scale-90 transition-all cursor-pointer shadow-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-[#5E3023] text-[#F3E9DC] flex items-center justify-center hover:bg-[#482319] active:scale-90 transition-all cursor-pointer shadow-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Animated Text Container on Project Switch */}
              <div key={activeProject.id} className="animate-content-slide">
                {/* Project Title */}
                <h3 className="font-serif text-[28px] sm:text-[36px] xl:text-[42px] text-[#5E3023] font-normal leading-[1.08] mb-1.5 tracking-tight">
                  {activeProject.name}
                </h3>

                {/* Category & Location Tag */}
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#895737]/80 uppercase mb-3">
                  {activeProject.categoryTag}
                </div>

                {/* Narrative Description */}
                <p className="text-[14px] sm:text-[15px] text-[#895737] leading-[1.6] mb-5 max-w-md">
                  {activeProject.description}
                </p>

                {/* Outlined Service Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.services.map((service) => {
                    const IconComponent = getServiceIcon(service);
                    return (
                      <div
                        key={service}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#DAB49D] bg-[#FAF6F0]/75 text-[#895737] text-[11px] sm:text-[12px] font-medium shadow-[0_1px_2px_rgba(94,48,35,0.04)]"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-[#C08552]" />
                        <span>{service}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-4">
                  {activeProject.liveUrl && activeProject.liveUrl.startsWith("http") ? (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#5E3023] text-[#F3E9DC] text-xs sm:text-sm font-medium shadow-md hover:bg-[#482319] hover:shadow-lg active:scale-95 transition-all"
                    >
                      <span>View Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#5E3023] text-[#F3E9DC] text-xs sm:text-sm font-medium shadow-md hover:bg-[#482319] hover:shadow-lg active:scale-95 transition-all group"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  )}

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#5E3023] hover:text-[#C08552] transition-colors cursor-pointer py-2"
                  >
                    <span>Next Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Device Mockups (Laptop + Phone + Slate Rock Base) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
              <DeviceMockup project={activeProject} />
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM: HORIZONTAL THUMBNAIL CAROUSEL STRIP
           ======================================================== */}
        <div className="reveal reveal-delay-4 pt-3 pb-1 border-t border-[#DAB49D]/40">
          <div
            ref={thumbnailsContainerRef}
            className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto py-1 no-scrollbar scroll-smooth"
          >
            {projectsData.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-[105px] sm:w-[130px] md:w-[145px] aspect-[16/10] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 text-left ${
                    isActive
                      ? "ring-2 ring-[#5E3023] ring-offset-2 ring-offset-[#F3E9DC] shadow-md scale-105 opacity-100 z-10"
                      : "opacity-60 hover:opacity-100 hover:scale-102 border border-[#DAB49D]/80"
                  }`}
                  aria-label={`Select ${project.name}`}
                >
                  <Image
                    src={project.thumbnailImage}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                  {/* Subtle Dark Vignette with Name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-1.5 flex items-end">
                    <span className="text-[10px] sm:text-[11px] font-medium text-white line-clamp-1">
                      {project.name}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Final Special Card: "Your Business Could Be Next" */}
            <a
              href="#contact"
              className="group flex-shrink-0 w-[105px] sm:w-[130px] md:w-[145px] aspect-[16/10] rounded-lg border-2 border-dashed border-[#C08552]/75 bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] p-2 flex flex-col items-center justify-center text-center transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-102"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C08552]/15 group-hover:bg-[#C08552]/25 flex items-center justify-center text-[#C08552] mb-1 transition-colors">
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-serif text-[#5E3023] font-medium group-hover:text-[#C08552] leading-tight transition-colors">
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
