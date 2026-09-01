"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { title: "Direct partnership", desc: "You'll work with me, not passed around." },
  { title: "Local perspective", desc: "I understand the Northern Michigan market." },
  { title: "Results that matter", desc: "Strategies and systems built around your goals." },
  { title: "Long-term focus", desc: "I'm here to build something that lasts." },
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
    <section id="about" className="section-padding bg-[#F0EDE6]/40" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="reveal mb-5">
              <span className="label-eyebrow">Based in Traverse City, Michigan</span>
            </div>

            <h2 className="reveal reveal-delay-1 text-section-heading mb-8">
              Local roots.<br />
              Focused on results.
            </h2>

            <div className="reveal reveal-delay-2 mb-14">
              <p className="text-body-large mb-4">
                I'm based in Traverse City, Michigan, and I work with businesses across Northern Michigan and beyond.
              </p>
              <p className="text-body-large">
                No big agency. No layers of account managers. Just direct communication and real results.
              </p>
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger-children">
              {values.map((item) => (
                <div key={item.title} className="reveal flex flex-col">
                  <h4 className="text-[15px] font-semibold text-[#18202A] mb-1.5 tracking-[0.01em]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#77736B] leading-[1.55]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 xl:col-span-5 reveal reveal-delay-2">
            <div className="relative w-full aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/about_portrait.jpg"
                alt="Traverse City, Michigan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="mt-4">
              <p className="text-[12px] text-[#9A968E] tracking-[0.04em] italic">
                Traverse City, Michigan — Where I'm based and inspired every day.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="reveal mt-20 grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#D8D4CB]/40 rounded-[var(--radius-lg)] overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#FFFDF9] py-8 px-6 text-center">
              <span className="font-serif text-[28px] lg:text-[32px] text-[#18202A] block mb-1">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#9A968E] font-medium tracking-[0.02em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
