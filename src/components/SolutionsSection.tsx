import Link from "next/link";
import { ArrowRight, Layout, Search, Zap, Cpu } from "lucide-react";

export default function SolutionsSection() {
  const services = [
    {
      num: "01",
      title: "WEBSITES",
      icon: Layout,
      heading: "Websites designed to turn visitors into business.",
      description:
        "Bespoke visual architecture, mobile perfection, and lightning-fast speed built for independent businesses that value craft and conversion.",
      features: ["Custom UI & Editorial Design", "Mobile-First Optimization", "CMS Integration"],
    },
    {
      num: "02",
      title: "SEO & VISIBILITY",
      icon: Search,
      heading: "Search optimization that puts you first.",
      description:
        "Rank for high-intent search terms in Traverse City and beyond. Clean technical SEO, local search presence, and structured content strategy.",
      features: ["Local Map Pack Ranking", "Technical On-Page Audit", "High-Intent Keyword Strategy"],
    },
    {
      num: "03",
      title: "LEAD GENERATION",
      icon: Zap,
      heading: "Conversion pathways that capture real inquiries.",
      description:
        "Transform casual site visitors into qualified inquiries through clear messaging, frictionless contact flows, and high-trust social proof.",
      features: ["Frictionless Form Design", "Call-to-Action Architecture", "Conversion Rate Optimization"],
    },
    {
      num: "04",
      title: "AUTOMATION",
      icon: Cpu,
      heading: "Workflow automations that save time every week.",
      description:
        "Connect your website directly to your CRM, email notifications, calendar booking, and customer follow-up sequences automatically.",
      features: ["CRM & Lead Syncing", "Automated Email Follow-ups", "Custom Tool Integrations"],
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-36 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Label */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="label-uppercase text-[#18202A]">02 — SOLUTIONS</span>
            <div className="w-12 h-[1px] bg-[#D8D4CB]" />
          </div>
          <span className="hidden sm:block text-[14px] text-[#77736B]">
            Four core pillars to scale your digital presence
          </span>
        </div>

        {/* Major Section Headline */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-section-heading mb-4 text-[#18202A]">
            Digital systems built <br />
            for measurable growth.
          </h2>
          <p className="text-body-large text-[#77736B]">
            Focused studio services engineered to solve your biggest online bottlenecks.
          </p>
        </div>

        {/* Service Cards Grid (Strict Uniform Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.num}
                className="bg-[#FFFDF9] border border-[#D8D4CB] rounded-[16px] p-8 md:p-10 flex flex-col justify-between shadow-card-custom transition-all duration-300 hover:-translate-y-1 hover:border-[#18202A]"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[13px] font-semibold text-[#C99A3A] tracking-[0.14em]">
                      {service.num} / {service.title}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#F7F5F0] border border-[#D8D4CB] flex items-center justify-center text-[#18202A]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-card-heading text-[#18202A] mb-4">
                    {service.heading}
                  </h3>

                  {/* Card Description */}
                  <p className="text-body-regular text-[#77736B] mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="flex flex-wrap gap-2.5 mb-10">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-[#F7F5F0] text-[13px] font-medium text-[#18202A] border border-[#D8D4CB]/60"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-[#D8D4CB]/60 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="btn-hover-arrow inline-flex items-center text-[15px] font-semibold text-[#18202A] group"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="arrow-icon ml-2 w-4 h-4 text-[#C99A3A]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
