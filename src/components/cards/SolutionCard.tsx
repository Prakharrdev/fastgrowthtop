import { LucideIcon, CheckCircle2 } from "lucide-react";

interface SolutionCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export function SolutionCard({ number, icon: Icon, title, description, features, index }: SolutionCardProps) {
  return (
    <div 
      className={`bg-white border border-[#E2E7F0] rounded-[8px] p-6 lg:p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-[3px] hover:border-[#C9D8F8] shadow-card-subtle hover:shadow-card-hover animate-fade-up opacity-0`}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Icon Container */}
      <div className="w-[72px] h-[72px] bg-[#F1F5FF] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#1261F5]" strokeWidth={1.5} />
      </div>

      {/* Number */}
      <span className="text-[17px] font-bold text-[#1261F5] mb-2">{number}</span>
      
      {/* Title */}
      <h3 className="text-[24px] font-bold text-[#0D1F3C] mb-4 tracking-tight leading-tight">{title}</h3>
      
      {/* Description */}
      <p className="text-[15px] text-[#344563] leading-[1.6] mb-8">
        {description}
      </p>

      {/* Divider */}
      <div className="w-[30px] h-[2px] bg-[#1261F5] mb-6 rounded-full" />

      {/* Features */}
      <ul className="flex flex-col gap-3.5 mt-auto w-full">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#1261F5] shrink-0 mt-[2px]" strokeWidth={2} />
            <span className="text-[14px] text-[#0D1F3C] font-medium leading-[1.4]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
