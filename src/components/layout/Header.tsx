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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-[12px] border-b border-[#EDF0F5] shadow-sm"
            : "bg-white border-b border-[#EDF0F5]"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 h-[80px] lg:h-[88px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="w-9 h-9 bg-[#1261F5] rounded-md flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10.5C15 9.5 14 9 12 9C10 9 9 9.5 9 10.5C9 12.5 15 11.5 15 13.5C15 14.5 14 15 12 15C10 15 9 14.5 9 13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-[#0D1F3C] leading-none tracking-tight">Schrader.co</span>
              <span className="text-[11px] text-[#68758C] font-medium mt-0.5 hidden sm:block">Digital Marketing & Automation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-[#0D1F3C] hover:text-[#1261F5] transition-colors relative py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center justify-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-6 py-3 rounded-lg text-[14px] font-semibold transition-colors group"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 relative z-[110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`w-6 h-[2px] bg-[#0D1F3C] rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#0D1F3C] rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#0D1F3C] rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-[28px] font-bold text-[#0D1F3C] hover:text-[#1261F5] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-8 py-4 rounded-lg text-[16px] font-semibold transition-all group"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
