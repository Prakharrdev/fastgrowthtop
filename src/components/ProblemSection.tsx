export default function ProblemSection() {
  return (
    <section className="py-24 md:py-36 bg-[#FFFDF9] border-y border-[#D8D4CB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label System */}
        <div className="flex items-center gap-3 mb-10">
          <span className="label-uppercase text-[#18202A]">01 — POSITIONING</span>
          <div className="w-12 h-[1px] bg-[#D8D4CB]" />
        </div>

        <div className="max-w-4xl">
          <h2 className="text-section-heading mb-8 text-[#18202A]">
            A website should do <br className="hidden sm:inline" />
            more than look good.
          </h2>
          <p className="font-serif-display text-[28px] sm:text-[36px] md:text-[44px] text-[#77736B] leading-[1.2] tracking-tight">
            It should help people <span className="text-[#18202A] italic">find you</span>,{" "}
            <span className="text-[#18202A] italic">trust you</span>,{" "}
            <span className="text-[#18202A] italic">contact you</span>, and ultimately become long-term customers.
          </p>
        </div>

      </div>
    </section>
  );
}
