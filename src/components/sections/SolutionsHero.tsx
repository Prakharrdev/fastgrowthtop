export function SolutionsHero() {
  return (
    <section className="pt-[160px] pb-[80px] lg:pt-[200px] lg:pb-[96px] bg-white relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 animate-fade-up">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="label-eyebrow">THE SOLUTION</span>
          {/* We'll use the border bottom or a simple div line as an accent rule */}
        </div>

        {/* The 70/30 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Content (approx 70%) */}
          <div className="lg:col-span-8 flex flex-col items-start relative">
             {/* Eyebrow accent rule positioned absolutely relative to the heading container to match the screenshot if needed, but a simple border top can work too. The screenshot shows the eyebrow on top, then a blue line directly above the 'H' in Here's. */}
             <div className="w-[40px] h-[2px] bg-[#1261F5] mb-6 rounded-full" />
             
            <h1 className="text-hero mb-6">
              Here's how I fix it<span className="text-[#1261F5]">.</span>
            </h1>
            <p className="text-body-large max-w-2xl text-[#344563]">
              I build the right strategy, website, and systems to get you found, generate more leads, and save you time.<br/>
              Simple. Focused. Built around your business.
            </p>
          </div>

          {/* Supporting Statement (approx 30%) */}
          <div className="lg:col-span-4 lg:pl-12 lg:border-l-[2px] border-[#1261F5]/80 mt-6 lg:mt-12 flex items-center">
            {/* The screenshot shows a short blue vertical line on the left. The border-l handles this visually on desktop. On mobile, we might want it differently. */}
            <p className="text-[19px] font-medium leading-[1.65] text-[#0D1F3C] pl-4 lg:pl-0 border-l-[2px] lg:border-l-0 border-[#1261F5]/80">
              No fluff. No jargon.<br />
              Just what works.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
