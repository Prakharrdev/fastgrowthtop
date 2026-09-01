"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCarousel } from "@/hooks/useCarousel";
import { useEffect, useState } from "react";

const projects = [
  {
    image: "/images/project_resort.jpg",
    category: "Website Design & Development",
    name: "TJ Waterfront",
    description:
      "A modern, high-converting website for a premium waterfront business in Northern Michigan.",
  },
  {
    image: "/images/project_architecture.jpg",
    category: "Web Design & Local SEO",
    name: "Precision Fabrication",
    description:
      "A new website and local SEO strategy designed to improve visibility and lead flow.",
  },
  {
    image: "/images/project_medspa.jpg",
    category: "Website & Conversion",
    name: "True North Med Spa",
    description:
      "A redesigned digital experience focused on making it easier for visitors to book.",
  },
];

export function RecentWork() {
  const ref = useScrollReveal();
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    currentIndex,
    currentPage,
    totalPages,
    canGoPrev,
    canGoNext,
    next,
    prev,
    goToPage,
    containerRef,
    handlers,
  } = useCarousel({
    totalItems: projects.length,
    itemsPerView,
    gap: 24,
  });

  const cardWidthPercent = 100 / itemsPerView;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section id="work" className="section-padding bg-white" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="reveal mb-4">
              <span className="label-eyebrow">RECENT WORK</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-section-heading mb-4">
              Here's what I've been<br />working on<span className="text-[#1261F5]">.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-body-large max-w-xl">
              Every project is different because every business is different. Here are a few recent examples of the work I've done for businesses like yours.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="reveal hidden lg:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className="carousel-arrow"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canGoNext}
              className="carousel-arrow"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="reveal carousel-container"
          ref={containerRef}
          {...handlers}
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(${translateX}%)`,
              gap: "24px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-shrink-0"
                style={{ width: `calc(${cardWidthPercent}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
              >
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="img-hover-zoom relative w-full aspect-[16/10] rounded-lg mb-5 bg-[#F3F7FF]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Category */}
                  <span className="text-[13px] font-semibold text-[#1261F5] uppercase tracking-[0.06em] mb-2 block">
                    {project.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-[22px] font-bold text-[#0D1F3C] mb-2 tracking-tight">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#344563] leading-[1.6] mb-4">
                    {project.description}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#1261F5] group-hover:gap-3 transition-all">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`carousel-dot ${i === currentPage ? "active" : ""}`}
                aria-label={`Go to slide group ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile arrows */}
        {totalPages > 1 && (
          <div className="flex lg:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className="carousel-arrow"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canGoNext}
              className="carousel-arrow"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
