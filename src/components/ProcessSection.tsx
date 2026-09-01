export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      name: "DISCOVER",
      title: "Strategy & Alignment",
      description:
        "We dive deep into your business model, customer psychology, local competition, and primary revenue goals to craft a deliberate gameplan.",
    },
    {
      step: "02",
      name: "BUILD",
      title: "Design & Engineering",
      description:
        "Crafting responsive layouts, bespoke editorial typography, high-converting copy structure, and reliable tech integrations.",
    },
    {
      step: "03",
      name: "LAUNCH",
      title: "Deployment & Optimization",
      description:
        "Rigorous cross-browser testing, SEO indexing verification, speed optimization, and seamless go-live transition.",
    },
    {
      step: "04",
      name: "GROW",
      title: "Visibility & Automation",
      description:
        "Continuous SEO improvements, lead tracking, conversion optimization, and workflow automations that free up your schedule.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="label-uppercase text-[#18202A]">04 — PROCESS</span>
          <div className="w-12 h-[1px] bg-[#D8D4CB]" />
        </div>

        {/* Section Title */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-section-heading mb-4 text-[#18202A]">
            A clear, deliberate path <br />
            from idea to execution.
          </h2>
          <p className="text-body-large text-[#77736B]">
            No fluff. No unnecessary meetings. Just a straightforward 4-step studio methodology.
          </p>
        </div>

        {/* 4-Step Grid (Desktop 4 Columns, Mobile Stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="bg-[#FFFDF9] border border-[#D8D4CB] rounded-[16px] p-8 flex flex-col justify-between shadow-card-custom relative transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D8D4CB]/60">
                  <span className="font-serif-display text-3xl text-[#18202A]">
                    {s.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#C99A3A] uppercase">
                    PHASE {index + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl text-[#18202A] mb-3">
                  {s.title}
                </h3>

                <p className="text-body-small text-[#77736B] leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="w-full h-1 bg-[#F7F5F0] rounded-full mt-8 overflow-hidden">
                <div
                  className="h-full bg-[#18202A]"
                  style={{ width: `${(index + 1) * 25}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
