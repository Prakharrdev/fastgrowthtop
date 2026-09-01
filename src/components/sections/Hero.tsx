"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="pt-[104px] pb-[48px] lg:pt-[124px] lg:pb-[64px]" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Eyebrow */}
        <div className="reveal mb-6 lg:mb-8">
          <span className="label-eyebrow">Based in Traverse City, Michigan</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-start">

          {/* Headline Area */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="reveal text-hero mb-6 lg:mb-8">
              Your website<br />
              should be bringing<br />
              you <span className="ochre-underline reveal">business</span>.
            </h1>

            <p className="reveal reveal-delay-1 text-body-large max-w-[480px] mb-8 lg:mb-10">
              If it isn't, I can help. I build websites, improve your visibility, generate more leads, and automate the busywork so you can focus on running your business.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-start gap-4 mb-10 lg:mb-14">
              <a href="#contact" className="btn-primary">
                Tell Me About Your Business
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
              <a href="#work" className="btn-secondary">
                See My Work
              </a>
            </div>

            {/* Value Indicators */}
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-10 sm:gap-14 w-full">
              {[
                { title: "More Leads", desc: "Better quality inquiries" },
                { title: "More Visibility", desc: "Get found by the right people" },
                { title: "Less Busywork", desc: "Automations that save time" },
              ].map((item, i) => (
                <div key={item.title} className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#18202A] mb-1 tracking-[0.01em]">
                    {item.title}
                  </span>
                  <span className="text-[13px] text-[#77736B] leading-[1.5]">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/hero_waterfront.jpg"
                alt="Traverse City waterfront — where Schrader.co is based"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="mt-4">
              <p className="text-[12px] text-[#9A968E] tracking-[0.04em]">
                Traverse City, Michigan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
