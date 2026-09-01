"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  const testimonials = [
    {
      id: "01",
      quote:
        "Schrader completely changed how our business shows up online. We went from losing inquiries to bigger competitors to receiving qualified, high-value leads directly through our website every single week.",
      author: "David Miller",
      role: "Principal Architect",
      company: "North Coast Architecture",
      location: "Traverse City, MI",
    },
    {
      id: "02",
      quote:
        "Working with an independent local studio made all the difference. Schrader understood our brand essence immediately and automated our booking workflow so seamlessly that we saved 15+ hours of front-desk work a week.",
      author: "Sarah Jenkins",
      role: "Managing Director",
      company: "Grand Traverse Lodge",
      location: "Leelanau Peninsula, MI",
    },
    {
      id: "03",
      quote:
        "The SEO results speak for themselves. Within three months of our new website going live, we were ranking #1 in Traverse City for our core services. Highly recommend to any serious business owner.",
      author: "Marcus Thorne",
      role: "Founder & CEO",
      company: "Thorne Specialty Contracting",
      location: "Traverse City, MI",
    },
    {
      id: "04",
      quote:
        "Quietly impressive, incredibly responsive, and hyper-focused on real business metrics. There is zero fluff—just exceptional design, crisp execution, and reliable automations.",
      author: "Elena Rostova",
      role: "Owner",
      company: "Peninsula Artisans",
      location: "Old Mission, MI",
    },
  ];

  const handleNext = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeQuoteIndex];

  return (
    <section id="reviews" className="py-24 md:py-36 bg-[#FFFDF9] border-b border-[#D8D4CB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="label-uppercase text-[#18202A]">06 — REVIEWS & TRUST</span>
            <div className="w-12 h-[1px] bg-[#D8D4CB]" />
          </div>

          {/* Slider Index & Controls */}
          <div className="flex items-center gap-6">
            <span className="font-serif-display text-lg text-[#18202A] tracking-wider">
              {String(activeQuoteIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full border border-[#D8D4CB] bg-[#F7F5F0] hover:bg-[#18202A] hover:text-[#FFFDF9] hover:border-[#18202A] flex items-center justify-center transition-all duration-250 text-[#18202A]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-11 h-11 rounded-full border border-[#D8D4CB] bg-[#F7F5F0] hover:bg-[#18202A] hover:text-[#FFFDF9] hover:border-[#18202A] flex items-center justify-center transition-all duration-250 text-[#18202A]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dominant Editorial Single-Quote Container */}
        <div className="max-w-5xl bg-[#F7F5F0] border border-[#D8D4CB] rounded-[24px] p-8 sm:p-14 md:p-20 shadow-card-custom relative overflow-hidden">
          
          {/* Subtle Quote Icon Background Accent */}
          <Quote className="absolute -top-4 -left-4 w-36 h-36 text-[#D8D4CB]/30 pointer-events-none" />

          <div className="relative z-10">
            
            {/* The Quote Statement */}
            <blockquote className="font-serif-display text-[26px] sm:text-[34px] md:text-[42px] text-[#18202A] leading-[1.25] tracking-tight mb-12">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author & Client Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-[#D8D4CB]">
              <div>
                <h4 className="font-semibold text-lg text-[#18202A] mb-0.5">
                  {current.author}
                </h4>
                <p className="text-[14px] text-[#77736B] font-medium">
                  {current.role} — <span className="text-[#18202A]">{current.company}</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF9] border border-[#D8D4CB] text-[12px] font-semibold text-[#C99A3A]">
                <span>{current.location}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
