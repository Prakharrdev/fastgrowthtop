"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function GoalBanner() {
  const ref = useScrollReveal();

  return (
    <section className="py-[24px] lg:py-[36px]" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="reveal flex items-center justify-center relative">
          {/* Left line */}
          <div className="hidden md:block absolute left-0 w-[calc(50%-260px)] lg:w-[calc(50%-300px)] h-[1px] bg-[#D8D4CB]/60" />

          {/* Content */}
          <div className="flex flex-col items-center text-center max-w-[560px] bg-[#F7F5F0] px-6 relative z-10">
            <h2 className="font-serif text-[22px] lg:text-[26px] text-[#18202A] leading-[1.25] mb-3">
              The goal is simple: more customers and less stress.
            </h2>
            <p className="text-[16px] text-[#77736B] leading-[1.6]">
              I handle the digital. You focus on your business.
            </p>
          </div>

          {/* Right line */}
          <div className="hidden md:block absolute right-0 w-[calc(50%-260px)] lg:w-[calc(50%-300px)] h-[1px] bg-[#D8D4CB]/60" />
        </div>
      </div>
    </section>
  );
}
