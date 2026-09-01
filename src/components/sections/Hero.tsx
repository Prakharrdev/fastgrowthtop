"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="pt-[140px] pb-[80px] lg:pt-[160px] lg:pb-[96px] bg-white" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">

        {/* Eyebrow */}
        <div className="reveal mb-10 lg:mb-14">
          <span className="label-eyebrow flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1261F5] inline-block" />
            BASED IN TRAVERSE CITY, MICHIGAN
          </span>
        </div>

        {/* Main Grid: Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Headline + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="reveal text-hero mb-6 lg:mb-8">
              Your website<br />
              should be bringing<br />
              you business<span className="text-[#1261F5]">.</span>
            </h1>

            <p className="reveal reveal-delay-1 text-body-large max-w-[540px] mb-10">
              If it isn't, I can help. I build websites, improve your visibility, generate more leads, and automate the busywork so you can focus on running your business.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-start gap-4 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-8 py-4 rounded-lg text-[16px] font-semibold transition-all group"
              >
                Tell Me About Your Business
                <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-[#E2E7F0] hover:border-[#1261F5] text-[#0D1F3C] hover:text-[#1261F5] px-8 py-4 rounded-lg text-[16px] font-semibold transition-all"
              >
                See My Work
              </a>
            </div>

            {/* Value Indicators */}
            <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-[540px]">
              {[
                { title: "More Leads", desc: "Better quality inquiries" },
                { title: "More Visibility", desc: "Get found by the right people" },
                { title: "Less Busywork", desc: "Automations that save time every week" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#0D1F3C] mb-1">{item.title}</span>
                  <span className="text-[14px] text-[#68758C] leading-[1.5]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/images/hero_waterfront.jpg"
                alt="Traverse City waterfront — where Schrader.co is based"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="text-[13px] text-[#68758C] mt-3">
              Traverse City, Michigan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
