"use client";

import { solutionsData } from "@/data/solutions";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SolutionsGrid() {
  const ref = useScrollReveal();

  return (
    <section className="pb-[40px] lg:pb-[64px] relative" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
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
