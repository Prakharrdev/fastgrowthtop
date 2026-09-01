"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#D8D4CB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[96px] flex items-center justify-between">
        {/* Brand Logo System */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {/* Geometric Schrader Symbol in Ink */}
          <div className="w-10 h-10 bg-[#18202A] rounded-lg flex items-center justify-center text-[#FFFDF9] transition-transform duration-300 group-hover:scale-105">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-[22px] tracking-tight text-[#18202A] leading-none">
              Schrader<span className="text-[#C99A3A]">.co</span>
            </span>
            <span className="text-[11px] font-sans text-[#77736B] tracking-wider uppercase font-medium mt-0.5 hidden sm:inline">
              Digital Marketing & Automation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C99A3A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Primary Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="btn-hover-arrow inline-flex items-center justify-center h-[56px] px-7 bg-[#18202A] text-[#FFFDF9] text-[15px] font-medium rounded-[8px] transition-colors duration-250 hover:bg-[#263342]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="arrow-icon ml-2.5 w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#18202A] hover:text-[#C99A3A] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-b border-[#D8D4CB] px-6 py-8 shadow-lg flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif-display text-[#18202A] py-2 border-b border-[#D8D4CB]/40 hover:text-[#C99A3A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center h-[56px] px-6 bg-[#18202A] text-[#FFFDF9] text-base font-medium rounded-[8px] w-full"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
