import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Mark */}
              <div className="w-9 h-9 bg-[#1261F5] rounded-md flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5C15 9.5 14 9 12 9C10 9 9 9.5 9 10.5C9 12.5 15 11.5 15 13.5C15 14.5 14 15 12 15C10 15 9 14.5 9 13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="text-[18px] font-bold text-white leading-none">Schrader.co</span>
                <span className="block text-[12px] text-white/50 mt-0.5">Digital Marketing & Automation</span>
              </div>
            </div>
            <p className="text-[15px] text-white/60 leading-[1.65] max-w-sm">
              Helping businesses build better websites, get found online, and grow. Based in Traverse City, Michigan.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-semibold text-white/40 uppercase tracking-[0.08em] mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between">
            <div className="lg:text-right">
              <h4 className="text-[14px] font-semibold text-white/40 uppercase tracking-[0.08em] mb-5">
                Ready to grow?
              </h4>
              <p className="text-[15px] text-white/60 leading-[1.65] mb-6 max-w-xs lg:ml-auto">
                Let's talk about your business and see how I can help.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all group"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[13px] text-white/40">
            © 2026 Schrader.co. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link href="#" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
