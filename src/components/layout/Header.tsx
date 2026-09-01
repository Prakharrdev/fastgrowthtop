"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
            ? "bg-[#F7F5F0]/90 backdrop-blur-[16px] shadow-sm"
            : "bg-[#F7F5F0]"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="font-serif text-[22px] text-[#18202A] tracking-tight transition-opacity group-hover:opacity-70">
                Schrader
              </span>
              <span className="text-[12px] text-[#77736B] font-medium tracking-[0.02em] hidden sm:block">
                Digital Marketing & Automation
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors duration-300 uppercase tracking-[0.08em]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="hidden lg:flex btn-primary text-[13px] py-3 px-6"
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
                  className={`block w-6 h-[1.5px] bg-[#18202A] rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-[#18202A] rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[1.5px] bg-[#18202A] rounded-full transition-all duration-300 ${
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
        className={`fixed inset-0 z-[90] bg-[#F7F5F0] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-10 gap-2">
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-[40px] text-[#18202A] hover:text-[#77736B] transition-colors py-2"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-[#D8D4CB] w-full">
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
