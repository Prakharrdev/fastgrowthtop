import { Target } from "lucide-react";

export function GoalBanner() {
  return (
    <section className="pb-[120px] lg:pb-[160px] bg-white">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-center relative">
          
          {/* Left horizontal line */}
          <div className="hidden md:block absolute left-0 w-[calc(50%-280px)] lg:w-[calc(50%-320px)] h-[1px] bg-[#E2E7F0]" />
          
          {/* Content */}
          <div className="flex flex-col items-center text-center max-w-[600px] bg-white px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
              <Target className="w-8 h-8 text-[#1261F5]" strokeWidth={1.5} />
              <h2 className="text-[20px] md:text-[22px] font-bold text-[#0D1F3C] tracking-tight">
                The goal is simple: more customers and less stress.
              </h2>
            </div>
            <p className="text-[17px] text-[#344563] leading-[1.6]">
              I handle the digital. You focus on your business.
            </p>
          </div>

          {/* Right horizontal line */}
          <div className="hidden md:block absolute right-0 w-[calc(50%-280px)] lg:w-[calc(50%-320px)] h-[1px] bg-[#E2E7F0]" />
          
        </div>
      </div>
    </section>
  );
}
