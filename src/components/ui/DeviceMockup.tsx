"use client";

import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface DeviceMockupProps {
  project: ProjectItem;
}

export function DeviceMockup({ project }: DeviceMockupProps) {
  return (
    <div className="relative w-full max-w-[820px] mx-auto select-none pt-2 pb-4 group">
      {/* DEVICES STAGE: Laptop on left/center, Phone cleanly beside it on the right */}
      <div className="relative flex items-end justify-between w-full">
        {/* ========================================================
            1. LAPTOP (MacBook Pro) — 76% to 78% width, completely unobscured
           ======================================================== */}
        <div className="relative w-[77%] sm:w-[79%] z-10 transition-transform duration-700 ease-out group-hover:-translate-y-1">
          {/* Laptop Lid Screen Frame */}
          <div className="relative bg-[#1a1715] rounded-t-[16px] sm:rounded-t-[22px] p-[6px] sm:p-[10px] pb-0 border border-[#3e3833] shadow-[0_24px_50px_rgba(94,48,35,0.22)]">
            {/* Screen Top Camera Notch */}
            <div className="absolute top-[2px] sm:top-[4px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center w-20 sm:w-32 h-2.5 sm:h-4 bg-[#1a1715] rounded-b-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0d0c0b] border border-[#2e2a27] flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#1b3a4b]/90" />
              </div>
            </div>

            {/* Screen Display Area (16:10) */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[10px] sm:rounded-t-[14px] bg-[#1d1a18]">
              {/* Animated Desktop Website Image */}
              <div key={`desktop-${project.id}`} className="relative w-full h-full animate-device-fade">
                <Image
                  src={project.desktopImage}
                  alt={`${project.name} Desktop Website`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 55vw, 680px"
                />

                {/* In-screen Realistic Website Navigation Header Overlay */}
                <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent p-2.5 sm:p-4 text-white z-10 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/80 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#FAF6F0] rounded-full" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-serif tracking-wider uppercase font-semibold text-white/95">
                      {project.name}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-[10px] font-sans tracking-wide text-white/90">
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-[9px] font-medium border border-white/30 text-white">
                      Get a Quote
                    </span>
                  </div>
                </div>

                {/* Specular Glass Sheen */}
                <div
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 35%, transparent 60%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Laptop Aluminum Base & Hinge */}
          <div className="relative w-[105%] -left-[2.5%] z-20">
            {/* Keyboard Deck Top Lip */}
            <div className="h-[9px] sm:h-[13px] bg-gradient-to-r from-[#2c2825] via-[#48423d] to-[#2c2825] rounded-b-[4px] border-t border-[#585049] flex items-start justify-center shadow-md">
              {/* Center Thumb Notch */}
              <div className="w-14 sm:w-20 h-[3px] sm:h-[4px] bg-[#181615] rounded-b-md" />
            </div>

            {/* Bottom Footpad Shadow */}
            <div className="h-[3px] sm:h-[4px] bg-gradient-to-r from-transparent via-[#181615]/75 to-transparent w-[96%] mx-auto" />
          </div>
        </div>

        {/* ========================================================
            2. MOBILE (iPhone) — Sits upright to the right, overlapping ONLY the base corner
           ======================================================== */}
        <div className="relative w-[23%] sm:w-[22%] max-w-[175px] min-w-[105px] z-30 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 -ml-[3%] mb-[3px] sm:mb-[6px]">
          {/* iPhone Chassis */}
          <div className="relative bg-[#191716] p-[4px] sm:p-[6px] pb-[5px] rounded-[24px] sm:rounded-[36px] border-[2.5px] sm:border-[4px] border-[#38332f] shadow-[0_24px_45px_rgba(94,48,35,0.35),0_8px_16px_rgba(0,0,0,0.25)]">
            {/* Dynamic Island */}
            <div className="absolute top-[6px] sm:top-[9px] left-1/2 -translate-x-1/2 z-30 w-10 sm:w-14 h-2.5 sm:h-3.5 bg-black rounded-full flex items-center justify-end pr-1 sm:pr-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1b3a4b]/80" />
            </div>

            {/* iPhone Display */}
            <div className="relative w-full aspect-[9/19] overflow-hidden rounded-[18px] sm:rounded-[28px] bg-[#1d1a18]">
              {/* Animated Mobile Website Image */}
              <div key={`mobile-${project.id}`} className="relative w-full h-full animate-device-fade">
                <Image
                  src={project.mobileImage}
                  alt={`${project.name} Mobile Website`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 30vw, 180px"
                />

                {/* Mobile Header Bar Overlay */}
                <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-2.5 pt-4 text-white z-10 flex items-center justify-between pointer-events-none">
                  <span className="text-[7px] sm:text-[9px] font-serif font-semibold tracking-wider uppercase truncate max-w-[65px]">
                    {project.name}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="w-2.5 sm:w-3.5 h-[1px] bg-white rounded-full" />
                    <span className="w-2.5 sm:w-3.5 h-[1px] bg-white rounded-full" />
                  </div>
                </div>

                {/* Mobile Glass Reflection */}
                <div
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 45%)",
                  }}
                />
              </div>
            </div>

            {/* Home Bar Indicator */}
            <div className="absolute bottom-[4px] sm:bottom-[6px] left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[2px] bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* ========================================================
          3. NATURAL SLATE ROCK LEDGE PEDESTAL (Matches Reference)
         ======================================================== */}
      <div className="relative -mt-2 sm:-mt-4 w-full z-0 overflow-hidden">
        {/* Deep ambient drop shadow into background */}
        <div className="absolute inset-x-4 top-2 h-7 sm:h-10 bg-[#5E3023]/25 blur-2xl rounded-full" />
        <div className="absolute inset-x-12 top-4 h-5 sm:h-7 bg-[#2a1711]/30 blur-xl rounded-full" />

        {/* Natural Rock Ledge Graphic */}
        <svg
          viewBox="0 0 800 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-lg"
          preserveAspectRatio="none"
        >
          {/* Main Rock Base Body with Slate Gradient */}
          <path
            d="M 12 18 
               Q 60 14, 140 16 
               Q 240 19, 360 15 
               Q 480 18, 620 14 
               Q 720 16, 788 19 
               L 796 42 
               Q 710 46, 580 44 
               Q 410 48, 250 44 
               Q 120 46, 4 41 
               Z"
            fill="url(#rockSlateGrad)"
          />

          {/* Top Sunlit Rim Highlight (Warm Desert Sand / Golden Chestnut Light) */}
          <path
            d="M 14 18 
               Q 60 14, 140 16 
               Q 240 19, 360 15 
               Q 480 18, 620 14 
               Q 720 16, 786 19"
            stroke="url(#rockRimLight)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* Rock Crags / Natural Geological Facet Creases */}
          <path
            d="M 140 16 L 165 34 M 270 17 L 295 38 M 460 16 L 485 36 M 615 15 L 640 37"
            stroke="#1d1917"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 142 17 L 167 35 M 272 18 L 297 39 M 462 17 L 487 37 M 617 16 L 642 38"
            stroke="#C08552"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.3"
          />

          <defs>
            {/* Rock Base Multi-stop Slate Color */}
            <linearGradient id="rockSlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d3530" />
              <stop offset="25%" stopColor="#2c2522" />
              <stop offset="50%" stopColor="#433b35" />
              <stop offset="75%" stopColor="#292320" />
              <stop offset="100%" stopColor="#1e1a18" />
            </linearGradient>

            {/* Sunlight Rim Gradient */}
            <linearGradient id="rockRimLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DAB49D" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#F3E9DC" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#C08552" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#DAB49D" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
