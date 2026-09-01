import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F0] border-t border-[#D8D4CB] py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 pb-12 border-b border-[#D8D4CB]">
          
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link href="/" className="font-serif-display text-2xl text-[#18202A] tracking-tight mb-1">
              Schrader<span className="text-[#C99A3A]">.co</span>
            </Link>
            <span className="text-[13px] font-sans text-[#77736B] tracking-wider uppercase font-medium">
              Digital Marketing & Automation
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-8">
            <Link href="#work" className="text-[14px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors">
              Work
            </Link>
            <Link href="#solutions" className="text-[14px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors">
              Solutions
            </Link>
            <Link href="#about" className="text-[14px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors">
              About
            </Link>
            <Link href="#reviews" className="text-[14px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-[14px] font-medium text-[#77736B] hover:text-[#18202A] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Location Badge */}
          <div className="text-[14px] text-[#77736B] font-medium">
            Based in <span className="text-[#18202A] font-semibold">Traverse City, Michigan</span>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[13px] text-[#77736B]">
          <p>© 2026 Schrader.co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/roofer/pertex-roofing.html" className="hover:text-[#18202A] transition-colors">
              Legacy Roofer Page
            </Link>
            <span className="text-[#D8D4CB]">·</span>
            <span>Privacy Policy</span>
            <span className="text-[#D8D4CB]">·</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
