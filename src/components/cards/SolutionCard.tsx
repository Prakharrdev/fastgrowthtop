"use client";

import { LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SolutionCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function SolutionCard({ number, icon: Icon, title, description, features, index }: SolutionCardProps) {
  return (
    <div
      className={`reveal bg-[#FFFDF9] border border-[#E8E5DE] rounded-[var(--radius-lg)] p-7 lg:p-8 flex flex-col items-start card`}
      style={{ transitionDelay: `${(index + 1) * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-[#F0EDE6] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-[#18202A]" strokeWidth={1.5} />
      </div>

      {/* Number */}
      <span className="text-[12px] font-semibold text-[#9A968E] tracking-[0.14em] uppercase mb-3">
        {number}
      </span>

      {/* Title — serif */}
      <h3 className="font-serif text-[24px] text-[#18202A] leading-[1.15] mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-[#77736B] leading-[1.6] mb-8">
        {description}
      </p>

      {/* Divider */}
      <div className="accent-line mb-6" />

      {/* Features */}
      <ul className="flex flex-col gap-3 mt-auto w-full">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-[5px] h-[5px] rounded-full bg-[#D8D4CB] shrink-0 mt-[7px]" />
            <span className="text-[14px] text-[#18202A] font-medium leading-[1.45]">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
