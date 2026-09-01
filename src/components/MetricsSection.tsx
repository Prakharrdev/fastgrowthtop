export default function MetricsSection() {
  const metrics = [
    {
      value: "+42%",
      label: "MORE ORGANIC TRAFFIC",
      description: "Average increase in qualified local search traffic within 90 days of launch.",
    },
    {
      value: "3.2×",
      label: "QUALIFIED LEADS",
      description: "Higher conversion rate from site visits to genuine phone & form inquiries.",
    },
    {
      value: "12 hrs",
      label: "SAVED EVERY WEEK",
      description: "Reduction in manual administrative work via automated lead syncing and scheduling.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#18202A] text-[#FFFDF9] relative overflow-hidden">
      {/* Decorative Ochre Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[#C99A3A]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C99A3A]">
            05 — IMPACT
          </span>
          <div className="w-12 h-[1px] bg-[#77736B]/40" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FFFDF9] mb-6 leading-tight">
            Real outcomes for real businesses.
          </h2>
          <p className="text-lg text-[#D8D4CB]/80 font-sans">
            We don&apos;t build websites to win design trophies—we build them to drive predictable revenue and save valuable time.
          </p>
        </div>

        {/* 3 Editorial Metric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-8 border-t border-[#77736B]/30">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif-display text-6xl sm:text-7xl md:text-8xl text-[#FFFDF9] mb-3 leading-none tracking-tight">
                {m.value}
              </span>
              <span className="text-[13px] font-semibold text-[#C99A3A] tracking-[0.14em] uppercase mb-3">
                {m.label}
              </span>
              <p className="text-[15px] text-[#D8D4CB]/70 leading-relaxed font-sans max-w-xs">
                {m.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
