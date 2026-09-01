export function SolutionsHero() {
  return (
    <section className="pt-[96px] pb-[48px] lg:pt-[140px] lg:pb-[64px] relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Divider */}
        <div className="divider mb-20 lg:mb-24" />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

          {/* Main Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="label-eyebrow mb-5">The Solution</span>
            <div className="accent-line mb-8" />
            <h2 className="text-section-heading mb-6">
              Here's how I fix it.
            </h2>
            <p className="text-body-large max-w-lg">
              I build the right strategy, website, and systems to get you found, generate more leads, and save you time.<br />
              Simple. Focused. Built around your business.
            </p>
          </div>

          {/* Side Statement */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-[#D8D4CB] lg:mt-14">
            <p className="font-serif text-[20px] lg:text-[22px] text-[#18202A] leading-[1.45]">
              No fluff. No jargon.<br />
              Just what works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
