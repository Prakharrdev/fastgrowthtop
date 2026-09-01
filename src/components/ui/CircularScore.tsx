"use client";

import React, { useEffect, useState } from "react";

interface CircularScoreProps {
  score: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  isFeatured?: boolean;
}

export function CircularScore({
  score,
  label,
  size = 120,
  strokeWidth = 8,
  isFeatured = false,
}: CircularScoreProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.max(1, Math.ceil(score / 30));
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [score]);

  // Brand Palette Tiers:
  // - 90-100: Olive Green (#2E7D32)
  // - 50-89: Brand Ochre (#C99A3A)
  // - 0-49: Brand Terracotta (#B9684A)
  let color = "#B9684A"; // Terracotta
  let trackColor = "#F2E8E4";
  let textColor = "text-[#B9684A]";
  let bgBadge = "bg-[#FAF0EC] text-[#9A4C32] border-[#EBD0C6]";
  let statusText = "Needs Rebuild";

  if (score >= 90) {
    color = "#2E7D32"; // Olive Green
    trackColor = "#E4EFE6";
    textColor = "text-[#2E7D32]";
    bgBadge = "bg-[#EDF7EE] text-[#226327] border-[#CBE5CF]";
    statusText = "Fast & Healthy";
  } else if (score >= 50) {
    color = "#C99A3A"; // Ochre Gold
    trackColor = "#F6EEE0";
    textColor = "text-[#A37822]";
    bgBadge = "bg-[#FAF5EC] text-[#8C661A] border-[#EBD8B2]";
    statusText = "Needs Work";
  }

  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-[var(--radius-md)] border transition-all ${
        isFeatured
          ? "bg-[#FFFDF9] border-[#C99A3A]/60 shadow-[0_4px_16px_rgba(201,154,58,0.1)] ring-1 ring-[#C99A3A]/20"
          : "bg-[#FFFDF9] border-[#D8D4CB]"
      }`}
    >
      {isFeatured && (
        <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#C99A3A] mb-3 font-sans">
          Overall Health Score
        </span>
      )}

      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg] transform">
          {/* Background circle track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center Score Number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`font-serif ${
              isFeatured ? "text-[36px]" : "text-[30px]"
            } font-bold leading-none ${textColor}`}
          >
            {animatedScore}
          </span>
          <span className="text-[12px] text-[#77736B] font-mono mt-1">/100</span>
        </div>
      </div>

      {/* Label and Badge */}
      <div className="mt-4 text-center">
        <h4 className="text-[14px] font-semibold text-[#18202A] tracking-[0.04em] uppercase font-sans">
          {label}
        </h4>
        <span
          className={`inline-block mt-2 text-[12px] font-medium px-3 py-0.5 rounded-[var(--radius-sm)] border ${bgBadge}`}
        >
          {statusText}
        </span>
      </div>
    </div>
  );
}
