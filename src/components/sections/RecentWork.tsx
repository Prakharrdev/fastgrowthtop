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
    <section id="work" className="section-padding" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">
          <div>

            <h2 className="reveal reveal-delay-1 text-section-heading mb-5">
              Here's what I've been<br />working on.
            </h2>
            <p className="reveal reveal-delay-2 text-body-large max-w-lg">
              Every project is different because every business is different. Here are a few recent examples.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="reveal hidden lg:flex items-center gap-3">
            <button onClick={prev} disabled={!canGoPrev} className="carousel-arrow" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} disabled={!canGoNext} className="carousel-arrow" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal carousel-container" ref={containerRef} {...handlers}>
          <div
            className="carousel-track"
            style={{ transform: `translateX(${translateX}%)`, gap: "24px" }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-shrink-0"
                style={{ width: `calc(${cardWidthPercent}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
              >
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="img-hover-zoom relative w-full aspect-[16/10] rounded-[var(--radius-lg)] mb-6 bg-[#F0EDE6]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover rounded-[var(--radius-lg)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Category */}
                  <span className="text-[11px] font-semibold text-[#9A968E] uppercase tracking-[0.12em] mb-3 block">
                    {project.category}
                  </span>

                  {/* Name — serif */}
                  <h3 className="font-serif text-[26px] text-[#18202A] mb-2 leading-[1.15]">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#77736B] leading-[1.6] mb-5">
                    {project.description}
                  </p>

                  {/* Link */}
                  <span className="link-arrow text-[13px]">
                    View Project
                    <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination + Mobile arrows */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`carousel-dot ${i === currentPage ? "active" : ""}`}
                  aria-label={`Go to group ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex lg:hidden items-center gap-3">
              <button onClick={prev} disabled={!canGoPrev} className="carousel-arrow" aria-label="Previous">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} disabled={!canGoNext} className="carousel-arrow" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
