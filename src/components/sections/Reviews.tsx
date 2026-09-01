"use client";

import { Star, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCarousel } from "@/hooks/useCarousel";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    business: "Local Boutique",
    rating: 5,
    text: "Working with Schrader completely transformed our online presence. Our website finally brings in real leads and our phone actually rings now. Couldn't be happier.",
  },
  {
    name: "James T.",
    business: "Construction Company",
    rating: 5,
    text: "Straightforward, no jargon, just results. They redesigned our website and set up automations that save us hours every week. Highly recommend.",
  },
  {
    name: "Emily R.",
    business: "Health & Wellness",
    rating: 5,
    text: "Finally a web person who actually listens. The new site is beautiful, loads fast, and we've seen a noticeable increase in bookings since launch.",
  },
  {
    name: "Mike D.",
    business: "Real Estate",
    rating: 5,
    text: "I was spending money on ads with no idea what was working. They built us a system where we can actually see our ROI. Game changer.",
  },
  {
    name: "Lisa K.",
    business: "Restaurant Group",
    rating: 5,
    text: "Professional, responsive, and truly cares about results. Our Google visibility has improved dramatically since we started working together.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#E2E7F0]"}`}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function Reviews() {
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
    totalItems: reviews.length,
    itemsPerView,
    gap: 24,
  });

  const cardWidthPercent = 100 / itemsPerView;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <section id="reviews" className="section-padding bg-white" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="reveal mb-4">
              <span className="label-eyebrow">GOOGLE REVIEWS</span>
            </div>
            <h2 className="reveal reveal-delay-1 text-section-heading mb-4">
              What my clients say<span className="text-[#1261F5]">.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-body-large max-w-lg">
              Real feedback from real businesses.
              I'm proud of the results we've achieved together.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="reveal flex items-center gap-4 bg-white border border-[#E2E7F0] rounded-xl px-6 py-4 shadow-card-subtle">
            <GoogleLogo />
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[22px] font-bold text-[#0D1F3C]">5.0</span>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <span className="text-[13px] text-[#68758C]">Based on Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div
          className="reveal carousel-container mb-10"
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
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `calc(${cardWidthPercent}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)` }}
              >
                <div className="bg-white border border-[#E2E7F0] rounded-lg p-7 h-full flex flex-col card-hover">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-[16px] font-bold text-[#0D1F3C]">
                        {review.name}
                      </h4>
                      <span className="text-[13px] text-[#68758C]">{review.business}</span>
                    </div>
                    <GoogleLogo />
                  </div>

                  {/* Stars */}
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Review text */}
                  <p className="text-[15px] text-[#344563] leading-[1.65] flex-grow mb-5">
                    "{review.text}"
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1261F5] hover:gap-2.5 transition-all mt-auto"
                  >
                    View on Google
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`carousel-dot ${i === currentPage ? "active" : ""}`}
                aria-label={`Go to review group ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className="carousel-arrow"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canGoNext}
              className="carousel-arrow"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="reveal mt-20 bg-[#F3F7FF] rounded-xl py-10 px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <p className="text-[20px] font-bold text-[#0D1F3C]">
            Ready to get results like these?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all group"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
