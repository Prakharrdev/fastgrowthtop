"use client";

import { ArrowDown, Phone, Eye, DollarSign, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    number: "01",
    icon: Phone,
    title: "Your website isn't getting calls.",
    description:
      "People visit, but don't take the next step. Your website might be confusing, slow, or simply not built to convert.",
  },
  {
    number: "02",
    icon: Eye,
    title: "You're hard to find online.",
    description:
      "When people search for what you offer, your competitors show up before you do.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "You're spending money without knowing what works.",
    description:
      "Ads, SEO, social media — you're investing, but don't have a clear picture of what's actually bringing in customers.",
  },
  {
    number: "04",
    icon: Clock,
    title: "You're doing everything manually.",
    description:
      "Following up with leads, sending emails, managing tasks — it's slowing you down and taking time you don't have.",
  },
];

export function Problem() {
  const ref = useScrollReveal();

  return (
    <section id="problem" className="section-padding bg-[#FBFCFF]" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="reveal mb-4">
          <span className="label-eyebrow">THE PROBLEM</span>
        </div>

        {/* Heading */}
        <div className="reveal reveal-delay-1 mb-6">
          <h2 className="text-section-heading">
            Something<br />
            isn't working<span className="text-[#1261F5]">.</span>
          </h2>
        </div>

        {/* Supporting copy */}
        <p className="reveal reveal-delay-2 text-body-large max-w-2xl mb-16">
          You know your business is great. But your website, marketing, or systems might be holding you back. Here are some common roadblocks I help solve.
        </p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-5 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.number}
                className={`reveal reveal-delay-${index + 1} bg-white border border-[#E2E7F0] rounded-lg p-7 lg:p-8 card-hover`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#F1F5FF] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#1261F5]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[13px] font-bold text-[#1261F5] block mb-2">
                      {problem.number}
                    </span>
                    <h3 className="text-[20px] font-bold text-[#0D1F3C] mb-3 tracking-tight leading-tight">
                      {problem.title}
                    </h3>
                    <p className="text-[15px] text-[#344563] leading-[1.65]">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition */}
        <div className="reveal flex flex-col items-center text-center">
          <p className="text-[20px] font-bold text-[#0D1F3C] mb-2">
            That's where I come in.
          </p>
          <ArrowDown className="w-5 h-5 text-[#1261F5] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
