import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp, Target, Cog } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#F7F5F0]">
      {/* Background Dot Grid Accent */}
      <div className="absolute top-12 right-[45%] w-48 h-32 bg-dot-grid opacity-35 pointer-events-none hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column (5 Cols Desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col z-10">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9] border border-[#D8D4CB] text-[12px] font-semibold text-[#77736B] tracking-[0.12em] uppercase mb-8 w-fit shadow-sm">
              <span>BASED IN TRAVERSE CITY, MICHIGAN</span>
              <MapPin className="w-3.5 h-3.5 text-[#C99A3A]" />
            </div>

            {/* Editorial Headline */}
            <h1 className="text-hero mb-6">
              Your website <br />
              should be bringing <br />
              <span className="relative inline-block text-[#18202A]">
                you business.
                {/* Hand-drawn Ochre Underline SVG Accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#C99A3A]"
                  viewBox="0 0 240 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C45 3.5 120 2.5 237 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-body-large text-[#77736B] mb-10 max-w-xl">
              If it isn&apos;t, I can help. I build websites, improve your visibility, generate more leads, and automate the busywork so you can focus on running your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <Link
                href="#contact"
                className="btn-hover-arrow inline-flex items-center justify-center h-[56px] px-7 bg-[#18202A] text-[#FFFDF9] text-[15px] font-medium rounded-[8px] transition-all duration-250 hover:bg-[#263342] shadow-sm"
              >
                <span>Tell Me About Your Business</span>
                <ArrowRight className="arrow-icon ml-2.5 w-4 h-4" />
              </Link>
              <Link
                href="#work"
                className="btn-hover-arrow inline-flex items-center justify-center h-[56px] px-7 bg-[#FFFDF9] border border-[#D8D4CB] text-[#18202A] text-[15px] font-medium rounded-[8px] transition-all duration-250 hover:border-[#18202A] hover:bg-white"
              >
                <span>See My Work</span>
                <ArrowRight className="arrow-icon ml-2.5 w-4 h-4 text-[#77736B]" />
              </Link>
            </div>

            {/* Benefit Row Component (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D8D4CB]">
              {/* Benefit 1 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#D8D4CB] flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4 text-[#18202A]" />
                </div>
                <h4 className="font-semibold text-[15px] text-[#18202A] mb-1">More Leads</h4>
                <p className="text-[13px] text-[#77736B] leading-snug">Better quality inquiries</p>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#D8D4CB] flex items-center justify-center mb-3">
                  <Target className="w-4 h-4 text-[#18202A]" />
                </div>
                <h4 className="font-semibold text-[15px] text-[#18202A] mb-1">More Visibility</h4>
                <p className="text-[13px] text-[#77736B] leading-snug">Get found by the right people</p>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#D8D4CB] flex items-center justify-center mb-3">
                  <Cog className="w-4 h-4 text-[#18202A]" />
                </div>
                <h4 className="font-semibold text-[15px] text-[#18202A] mb-1">Less Busywork</h4>
                <p className="text-[13px] text-[#77736B] leading-snug">Automations that save time</p>
              </div>
            </div>

          </div>

          {/* Right Image Column (6-7 Cols Desktop with Signature Organic Curve) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Main Hero Photo Container with Signature Cut-in */}
            <div className="relative w-full max-w-[640px] aspect-[4/3] sm:aspect-[1.25/1] lg:aspect-[1.15/1] rounded-[24px] overflow-hidden shadow-floating-custom hero-organic-mask group">
              <Image
                src="/images/hero_waterfront.jpg"
                alt="Traverse City Michigan Waterfront with sailboats"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle Warm Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18202A]/20 via-transparent to-transparent opacity-60" />
            </div>

            {/* Signature Floating Location Card Component */}
            <div className="absolute -bottom-6 left-4 sm:left-12 lg:-left-6 bg-[#FFFDF9] border border-[#D8D4CB] rounded-[16px] p-6 shadow-floating-custom max-w-[240px] z-20 transition-transform duration-300 hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4 text-[#C99A3A]" />
              </div>
              <p className="text-[12px] font-semibold text-[#77736B] uppercase tracking-[0.1em] mb-1">
                Proudly based in
              </p>
              <h4 className="font-serif-display text-[22px] text-[#18202A] leading-tight">
                Traverse City, Michigan
              </h4>
              <div className="w-8 h-[2px] bg-[#C99A3A] mt-2.5" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
