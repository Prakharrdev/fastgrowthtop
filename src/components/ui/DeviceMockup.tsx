"use client";

import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface DeviceMockupProps {
  project: ProjectItem;
}

export function DeviceMockup({ project }: DeviceMockupProps) {
  return (
    <div className="relative w-full max-w-[760px] mx-auto select-none pt-4 pb-8 lg:pb-12">
      {/* LAPTOP (MacBook Pro) */}
      <div className="relative mx-auto w-[92%] sm:w-[88%] z-10">
        {/* Screen Lid Frame */}
        <div className="relative bg-[#171514] rounded-t-[18px] sm:rounded-t-[22px] p-[7px] sm:p-[10px] pb-0 border border-[#3e3834] shadow-[0_20px_50px_rgba(94,48,35,0.18)]">
          {/* Top Notch / Camera */}
          <div className="absolute top-[3px] sm:top-[4px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center w-24 sm:w-32 h-3 sm:h-4 bg-[#171514] rounded-b-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0d0c0b] border border-[#2e2a27] flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-[#1b3a4b]/80" />
            </div>
          </div>

          {/* Screen Display Area */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[12px] sm:rounded-t-[14px] bg-[#221f1c]">
            {/* Desktop Website Screenshot */}
            <div className="relative w-full h-full">
              <Image
                src={project.desktopImage}
                alt={`${project.name} Desktop Website`}
                fill
                priority
                className="object-cover object-top transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
              />

              {/* In-screen Realistic Website Navigation Header Overlay */}
              <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/75 via-black/40 to-transparent p-2.5 sm:p-4 text-white z-10 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/80 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-serif tracking-wider uppercase font-semibold">
                    {project.name}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-[10px] font-sans tracking-wide text-white/90">
                  <span>Services</span>
                  <span>Portfolio</span>
                  <span>About</span>
                  <span>Contact</span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] border border-white/30">
                    Get a Quote
                  </span>
                </div>
              </div>

              {/* Glass Specular Reflection Highlight */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(125deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Laptop Aluminum Base & Hinge */}
        <div className="relative w-[105%] -left-[2.5%] z-20">
          {/* Keyboard Hinge / Top Deck Lip */}
          <div className="h-[9px] sm:h-[13px] bg-gradient-to-r from-[#2c2825] via-[#48423d] to-[#2c2825] rounded-b-[4px] border-t border-[#544d47] flex items-start justify-center shadow-md">
            {/* Center Thumb Opening Notch */}
            <div className="w-14 sm:w-20 h-[3px] sm:h-[4px] bg-[#1a1816] rounded-b-md" />
          </div>

          {/* Bottom Footpad / Thin Shadow */}
          <div className="h-[3px] sm:h-[4px] bg-gradient-to-r from-transparent via-[#1a1816]/70 to-transparent w-[96%] mx-auto" />
        </div>
      </div>

      {/* MOBILE (iPhone) - Overlapping Right */}
      <div className="absolute right-0 sm:right-2 bottom-1 sm:bottom-4 w-[28%] sm:w-[26%] max-w-[190px] min-w-[110px] z-30 drop-shadow-[0_24px_36px_rgba(94,48,35,0.28)]">
        {/* iPhone Chassis */}
        <div className="relative bg-[#1a1816] p-[4px] sm:p-[6px] pb-[5px] rounded-[24px] sm:rounded-[34px] border-[2.5px] sm:border-[3.5px] border-[#38332f] shadow-2xl">
          {/* Dynamic Island */}
          <div className="absolute top-[6px] sm:top-[9px] left-1/2 -translate-x-1/2 z-30 w-10 sm:w-14 h-2.5 sm:h-3.5 bg-black rounded-full flex items-center justify-end pr-1 sm:pr-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1b3a4b]/60" />
          </div>

          {/* iPhone Display */}
          <div className="relative w-full aspect-[9/19] overflow-hidden rounded-[18px] sm:rounded-[27px] bg-[#221f1c]">
            <Image
              src={project.mobileImage}
              alt={`${project.name} Mobile Website`}
              fill
              priority
              className="object-cover object-top transition-opacity duration-500"
              sizes="(max-width: 768px) 35vw, 200px"
            />

            {/* Mobile Header Bar Overlay */}
            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/75 to-transparent p-2 sm:p-2.5 pt-4 text-white z-10 flex items-center justify-between pointer-events-none">
              <span className="text-[7px] sm:text-[9px] font-serif font-semibold tracking-wider uppercase truncate max-w-[65px]">
                {project.name}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="w-2.5 sm:w-3.5 h-[1px] bg-white rounded-full" />
                <span className="w-2.5 sm:w-3.5 h-[1px] bg-white rounded-full" />
              </div>
            </div>

            {/* Glass Specular Reflection */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 45%)",
              }}
            />
          </div>

          {/* Home Bar */}
          <div className="absolute bottom-[4px] sm:bottom-[6px] left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[2px] bg-white/40 rounded-full" />
        </div>
      </div>

      {/* Grounding Base / Pedestal Surface */}
      <div className="relative -mt-3 sm:-mt-5 w-[96%] mx-auto h-7 sm:h-10 z-0">
        {/* Soft Organic Stone Drop Shadow */}
        <div className="absolute inset-x-8 top-1 h-5 sm:h-7 bg-[#5E3023]/15 blur-xl rounded-full" />
        <div className="absolute inset-x-16 top-2 h-3 sm:h-5 bg-[#C08552]/10 blur-md rounded-full" />
        
        {/* Subtle Textured Ground Ledge */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DAB49D]/70 to-transparent" />
      </div>
    </div>
  );
}
