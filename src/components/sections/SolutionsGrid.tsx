import { solutionsData } from "@/data/solutions";
import { SolutionCard } from "@/components/cards/SolutionCard";

export function SolutionsGrid() {
  return (
    <section className="pb-[40px] lg:pb-[64px] bg-white relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative -top-8 lg:-top-16">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.number}
              {...solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
