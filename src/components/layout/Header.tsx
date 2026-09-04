"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Audit", href: "#audit" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If at very top (e.g. hero), no specific section active
      if (window.scrollY < 160) {
        setActiveSection("");
        return;
      }

      // If near bottom of page, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = ["audit", "work", "about", "reviews", "contact"];
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top is near upper viewport and bottom is still below header
          if (rect.top <= 240 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#F3E9DC]/90 backdrop-blur-[16px] shadow-sm border-b border-[#DAB49D]/50"
            : "bg-[#F3E9DC]"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-serif text-[22px] text-[#5E3023] tracking-tight transition-opacity group-hover:opacity-70">
                Schrader
              </span>
              <span className="text-[12px] text-[#895737] font-medium tracking-[0.02em] hidden sm:block">
                Digital Marketing & Automation
              </span>
            </Link>

            {/* Desktop Nav with Glow Pill */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-[#DAB49D]/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#DAB49D]/70 shadow-[inset_0_1px_2px_rgba(94,48,35,0.03)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-[12px] uppercase tracking-[0.08em] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#5E3023] font-semibold bg-white/95 shadow-[0_0_16px_rgba(192,133,82,0.35),0_2px_8px_rgba(94,48,35,0.06)] border border-[#C08552]/60"
                        : "text-[#895737] hover:text-[#5E3023] hover:bg-white/40 border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className={`hidden lg:flex btn-primary text-[13px] py-3 px-6 transition-all duration-300 ${
                activeSection === "contact"
                  ? "shadow-[0_0_20px_rgba(192,133,82,0.4)] border-[#C08552]"
                  : ""
              }`}
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5 arrow-icon" />
            </Link>

            {/* Mobile burger */}
            <button
              className="lg:hidden relative w-8 h-8 flex items-center justify-center z-[110]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-[6px]">
                <span
                  className={`block w-6 h-[1.5px] bg-[#5E3023] rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-[#5E3023] rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-[#5E3023] rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-[#F3E9DC] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-10 gap-3">
          {navItems.map((item, i) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`font-serif text-[38px] transition-all duration-300 py-1.5 ${
                  isActive
                    ? "text-[#5E3023] font-medium translate-x-2"
                    : "text-[#895737] hover:text-[#5E3023]"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-8 pt-8 border-t border-[#DAB49D] w-full">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
