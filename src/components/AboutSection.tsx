import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="label-uppercase text-[#18202A]">07 — ABOUT SCHRADER.CO</span>
          <div className="w-12 h-[1px] bg-[#D8D4CB]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Studio Portrait Framing (5 Cols Desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] lg:aspect-[0.9/1] rounded-[24px] overflow-hidden border border-[#D8D4CB] shadow-floating-custom group">
              <Image
                src="/images/about_portrait.jpg"
                alt="Schrader.co founder working in Traverse City studio"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18202A]/30 via-transparent to-transparent" />
            </div>

            {/* Studio Badge Overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#FFFDF9] border border-[#D8D4CB] rounded-[16px] p-5 shadow-card-custom max-w-[220px]">
              <div className="flex items-center gap-2 mb-1.5 text-[#C99A3A]">
                <Award className="w-4 h-4" />
                <span className="text-[12px] font-semibold tracking-wider uppercase text-[#18202A]">
                  STUDIO ETHOS
                </span>
              </div>
              <p className="text-[13px] text-[#77736B] leading-snug">
                One-on-one senior attention on every project. No junior pass-offs.
              </p>
            </div>
          </div>

          {/* Right Column: Story & Ethos (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h2 className="text-section-heading text-[#18202A] mb-8">
              Built in Traverse City. <br />
              Driven by craft & clarity.
            </h2>

            <div className="space-y-6 text-body-large text-[#77736B] mb-10">
              <p>
                I founded <strong className="text-[#18202A]">Schrader.co</strong> because I saw too many exceptional local and regional businesses struggling with generic marketing agencies, bloated budgets, and cookie-cutter SaaS templates that delivered zero real business.
              </p>
              <p>
                Instead of operating like an bloated agency with account managers and overhead, Schrader.co operates as a boutique creative studio. That means direct access, bespoke visual engineering, disciplined search strategy, and custom automations built specifically around your operations.
              </p>
            </div>

            {/* Key Facts Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 pt-6 border-t border-[#D8D4CB]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C99A3A] shrink-0" />
                <span className="text-[15px] font-medium text-[#18202A]">
                  Based in Traverse City, MI
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C99A3A] shrink-0" />
                <span className="text-[15px] font-medium text-[#18202A]">
                  Senior-Level Execution
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C99A3A] shrink-0" />
                <span className="text-[15px] font-medium text-[#18202A]">
                  SEO & Automation Focused
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C99A3A] shrink-0" />
                <span className="text-[15px] font-medium text-[#18202A]">
                  Transparent Fixed Pricing
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="#contact"
                className="btn-hover-arrow inline-flex items-center justify-center h-[56px] px-8 bg-[#18202A] text-[#FFFDF9] text-[15px] font-medium rounded-[8px] transition-colors duration-250 hover:bg-[#263342]"
              >
                <span>Learn More About Working Together</span>
                <ArrowRight className="arrow-icon ml-2.5 w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
