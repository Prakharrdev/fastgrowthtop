"use client";

import Image from "next/image";
import { Handshake, MapPin, Target, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    icon: Handshake,
    title: "Direct partnership",
    desc: "You'll work with me, not passed around.",
  },
  {
    icon: MapPin,
    title: "Local perspective",
    desc: "I understand the Northern Michigan market.",
  },
  {
    icon: Target,
    title: "Results that matter",
    desc: "Strategies and systems built around your goals.",
  },
  {
    icon: Clock,
    title: "Long-term focus",
    desc: "I'm here to build something that lasts.",
  },
];

const stats = [
  { value: "25+", label: "Projects Completed" },
  { value: "10+", label: "Years of Experience" },
  { value: "100%", label: "Direct Communication" },
  { value: "Local → Global", label: "Serving Clients Anywhere" },
];

export function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-[#FBFCFF]" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="reveal mb-4">
              <span className="label-eyebrow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1261F5] inline-block" />
                BASED IN TRAVERSE CITY, MICHIGAN
              </span>
            </div>

            <h2 className="reveal reveal-delay-1 text-section-heading mb-6">
              Local roots<span className="text-[#1261F5]">.</span><br />
              Focused on results<span className="text-[#1261F5]">.</span>
            </h2>

            <div className="reveal reveal-delay-2 mb-12">
              <p className="text-body-large mb-4">
                I'm based in Traverse City, Michigan, and I work with businesses across Northern Michigan and beyond.
              </p>
              <p className="text-body-large">
                No big agency. No layers of account managers. Just direct communication and real results.
              </p>
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}
                  >
                    <div className="w-10 h-10 bg-[#F1F5FF] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#1261F5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#0D1F3C] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#344563] leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-6 xl:col-span-5 reveal reveal-delay-2">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/about_portrait.jpg"
                alt="Traverse City, Michigan — where Schrader.co is based"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="text-[13px] text-[#68758C] mt-3 italic">
              Traverse City, Michigan — Where I'm based and inspired every day.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="reveal mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 border border-[#E2E7F0] rounded-lg overflow-hidden bg-white">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 px-6 text-center ${
                i < stats.length - 1 ? "lg:border-r border-[#E2E7F0]" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-[#E2E7F0]" : ""}`}
            >
              <span className="text-[28px] lg:text-[32px] font-bold text-[#0D1F3C] block mb-1 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[14px] text-[#68758C] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
