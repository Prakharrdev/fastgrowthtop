"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectExperienceModal } from "@/components/sections/ProjectExperienceModal";

export function RecentWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);

  const totalProjects = projectsData.length;
  const activeProject: ProjectItem = projectsData[activeIndex];
  const previousProject: ProjectItem | null =
    prevIndex !== null ? projectsData[prevIndex] : null;

  // DOM & State Refs
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prevProjectIndexRef = useRef(0);
  const isInternalScrollRef = useRef(false);

  // ==========================================================
  // 1. GSAP ScrollTrigger Sticky Scrubbing Engine
  // ==========================================================
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;

        // Intro visible during initial 7% of scroll
        setShowIntro(p < 0.07);

        // Map progress (from 0.07 to 1) across the total projects
        const adjustedProgress = Math.max(0, (p - 0.06) / 0.94);
        const calculatedIndex = Math.min(
          Math.floor(adjustedProgress * totalProjects),
          totalProjects - 1
        );

        setActiveIndex((prev) => {
          if (prev !== calculatedIndex) {
            return calculatedIndex;
          }
          return prev;
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [totalProjects]);

  // ==========================================================
  // 2. Cinematic Crossfade on Project Change (docs/project.md Sec 09 & 11)
  // ==========================================================
  useEffect(() => {
    if (activeIndex !== prevProjectIndexRef.current) {
      setPrevIndex(prevProjectIndexRef.current);
      prevProjectIndexRef.current = activeIndex;

      const timer = setTimeout(() => {
        setPrevIndex(null);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  // ==========================================================
  // 3. Scroll to Project (Lenis & Window Smooth Scroll)
  // ==========================================================
  const scrollToProject = useCallback(
    (targetIndex: number) => {
      const container = containerRef.current;
      if (!container) return;

      isInternalScrollRef.current = true;
      const rect = container.getBoundingClientRect();
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const containerTop = currentScrollY + rect.top;
      const totalScrollableDistance = container.offsetHeight - window.innerHeight;

      // Project segment mapping accounting for the 6% intro buffer
      const projectProgress = 0.06 + ((targetIndex + 0.5) / totalProjects) * 0.94;
      const targetY = containerTop + projectProgress * totalScrollableDistance;

      const lenis = (
        window as unknown as {
          __lenis?: { scrollTo: (target: number, options?: object) => void };
        }
      ).__lenis;

      if (lenis) {
        lenis.scrollTo(targetY, {
          duration: 1.0,
          onComplete: () => {
            isInternalScrollRef.current = false;
          },
        });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
        setTimeout(() => {
          isInternalScrollRef.current = false;
        }, 800);
      }
    },
    [totalProjects]
  );

  const handlePrev = useCallback(() => {
    const targetIdx = activeIndex === 0 ? totalProjects - 1 : activeIndex - 1;
    scrollToProject(targetIdx);
  }, [activeIndex, totalProjects, scrollToProject]);

  const handleNext = useCallback(() => {
    const targetIdx = activeIndex === totalProjects - 1 ? 0 : activeIndex + 1;
    scrollToProject(targetIdx);
  }, [activeIndex, totalProjects, scrollToProject]);

  // ==========================================================
  // 4. Keyboard Navigation (ArrowLeft / ArrowRight)
  // ==========================================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const stickyEl = stickyRef.current;
      if (!stickyEl) return;

      const rect = stickyEl.getBoundingClientRect();
      const inView = rect.top >= -50 && rect.bottom <= window.innerHeight + 50;
      if (!inView) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${(totalProjects + 1.2) * 100}vh` }}
      aria-label="Selected Projects Showcase"
    >
      {/* ==========================================================
          STICKY FULL-SCREEN VIEWPORT WRAPPER (100vw × 100svh)
          Pins full screen while user scrolls through the showcase
         ========================================================== */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-[100svh] w-full select-none overflow-hidden bg-[#0B1118] text-[#F2EEE6]"
      >
        {/* ========================================================
            BACKGROUND CINEMATIC PHOTOGRAPHY CANVAS
            Full-bleed edge-to-edge project imagery with settle animation
           ======================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Previous Project Visual (Smooth Filmic Exit) */}
          {previousProject && (
            <div className="absolute inset-0 z-0 animate-cinematic-exit pointer-events-none">
              <Image
                src={previousProject.heroImage}
                alt={previousProject.name}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          )}

          {/* Active Project Visual (Smooth Filmic Entry with Camera-Settle) */}
          <div
            key={`hero-${activeProject.id}`}
            className="absolute inset-0 z-10 animate-cinematic-settle"
          >
            <Image
              src={activeProject.heroImage}
              alt={`${activeProject.name} Hero Photography`}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.015]"
              sizes="100vw"
            />
          </div>

          {/* Dual Lighting & Dark Gradient Vignettes for Flawless Readability */}
          {/* Left-side dark gradient to frame typography */}
          <div
            className="absolute inset-0 z-20 pointer-events-none w-full md:w-[70%] lg:w-[58%] bg-gradient-to-r from-[#0B1118]/92 via-[#0B1118]/65 to-transparent"
            aria-hidden="true"
          />
          {/* Top subtle vignette */}
          <div
            className="absolute top-0 left-0 right-0 h-36 z-20 pointer-events-none bg-gradient-to-b from-[#0B1118]/70 via-[#0B1118]/25 to-transparent"
            aria-hidden="true"
          />
          {/* Bottom subtle vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-44 z-20 pointer-events-none bg-gradient-to-t from-[#0B1118]/85 via-[#0B1118]/35 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* ========================================================
            SECTION INTRO OVERLAY (docs/project.md Section 04 & 05)
            Reveals on initial section entry then smoothly dissolves
           ======================================================== */}
        <div
          className={`absolute inset-0 z-40 flex flex-col justify-center px-8 sm:px-14 lg:px-20 bg-[#0B1118]/85 backdrop-blur-[2px] transition-all duration-700 pointer-events-none ${
            showIntro
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
          aria-hidden={!showIntro}
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E99A22] uppercase block mb-4">
              04 / SELECTED WORK
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.06] tracking-tight">
              Websites built to make
              <br />
              good businesses look
              <br />
              <span className="italic text-[#E99A22]">exceptional.</span>
            </h2>
            <div className="mt-8 flex items-center gap-3 text-white/50 text-xs font-mono tracking-[0.2em] uppercase">
              <span>SCROLL DOWN TO EXPLORE</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            FOREGROUND UI LAYER (Matching Mockup Composition)
           ======================================================== */}
        <div className="relative z-30 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-14 pointer-events-none">
          {/* ======================================================
              TOP ROW: Project Counter (04 / 06)
             ====================================================== */}
          <div className="flex items-center justify-between w-full">
            <div
              key={`counter-${activeProject.id}`}
              className="flex items-center gap-1.5 font-mono text-xs sm:text-sm tracking-wider animate-number-roll"
            >
              <span className="text-[#E99A22] font-semibold">
                {activeProject.number}
              </span>
              <span className="text-white/45">/ 0{totalProjects}</span>
            </div>
          </div>

          {/* ======================================================
              MIDDLE: Editorial Typography Stack (Left-Aligned)
             ====================================================== */}
          <div className="w-full max-w-xl lg:max-w-2xl my-auto py-6">
            {/* Project Title (Grand Serif with Line Balance) */}
            <div className="overflow-hidden">
              <h3
                key={`title-${activeProject.id}`}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.04] animate-text-clip"
              >
                {activeProject.name}
              </h3>
            </div>

            {/* Location / Industry Category Tag */}
            <div className="overflow-hidden">
              <p
                key={`loc-${activeProject.id}`}
                className="font-sans text-[11px] sm:text-xs md:text-[13px] font-medium tracking-[0.25em] text-white/75 uppercase mt-3 sm:mt-4 mb-4 sm:mb-6 animate-text-clip"
              >
                {activeProject.locationFormatted || activeProject.location}
              </p>
            </div>

            {/* Strategic Transformation Description */}
            <div className="overflow-hidden">
              <p
                key={`desc-${activeProject.id}`}
                className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-md sm:max-w-lg mb-6 sm:mb-8 font-light animate-text-clip"
              >
                {activeProject.description}
              </p>
            </div>

            {/* CTA Button: VIEW PROJECT → (docs/project.md Sec 17 & 27: Case Study & Full Website Modal) */}
            <div className="pointer-events-auto inline-block">
              <button
                type="button"
                onClick={() => {
                  setSelectedProjectForModal(activeProject);
                  setIsModalOpen(true);
                }}
                className="group inline-flex items-center gap-2.5 text-[#E99A22] hover:text-[#FFA94D] tracking-[0.2em] text-xs sm:text-sm font-semibold uppercase transition-colors cursor-pointer bg-transparent border-0 p-0"
                aria-label={`Experience full website view for ${activeProject.name}`}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  VIEW PROJECT
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* ======================================================
              BOTTOM ROW: Ethos Statement (Left)
             ====================================================== */}
          <div className="flex items-center justify-between w-full">
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-white/45 uppercase select-none">
              REAL BUSINESSES. REMARKABLE RESULTS.
            </span>
          </div>
        </div>

        {/* ========================================================
            RIGHT-SIDE VERTICAL SCROLL INDICATOR
            SCROLL header, vertical progress spine, and 6 connected nodes
           ======================================================== */}
        <div
          className="absolute right-5 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-auto select-none"
          aria-label="Project slider navigation"
        >
          {/* "SCROLL" Header Label */}
          <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-white/55 uppercase mb-3 sm:mb-4">
            SCROLL
          </span>

          {/* Vertical Connecting Track Line */}
          <div className="relative w-px h-48 sm:h-56 bg-white/20 flex flex-col justify-between items-center py-1">
            {projectsData.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => scrollToProject(idx)}
                  className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-125" : "scale-100 hover:scale-125"
                  }`}
                  aria-label={`Jump to project 0${idx + 1}: ${project.name}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  {/* Outer glowing halo on active */}
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E99A22] ring-4 ring-[#E99A22]/30 shadow-[0_0_12px_rgba(233,154,34,0.7)] transition-all duration-300" />
                  ) : (
                    <span className="w-2 h-2 rounded-full border border-white/45 bg-[#0B1118]/80 group-hover:border-white group-hover:bg-white/40 transition-all duration-200" />
                  )}

                  {/* Tooltip on hover */}
                  <span className="absolute right-6 px-2 py-1 rounded bg-[#0B1118]/90 text-white font-mono text-[10px] tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 hidden sm:block">
                    {project.number} · {project.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            BOTTOM-RIGHT MINIMAL NAVIGATION ARROWS (←   →)
           ======================================================== */}
        <div className="absolute right-6 sm:right-10 lg:right-14 bottom-6 sm:bottom-10 z-30 flex items-center gap-5 sm:gap-6 pointer-events-auto select-none">
          <button
            onClick={handlePrev}
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/10"
            aria-label="Previous Project"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/10"
            aria-label="Next Project"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========================================================
          FULL-SCREEN INTERACTIVE WEBSITE VIEWER MODAL (docs/project.md Sec 27)
          Allows prospective clients to scroll and experience the complete website
         ======================================================== */}
      <ProjectExperienceModal
        project={selectedProjectForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
