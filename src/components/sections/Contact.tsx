"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const trustPoints = [
  {
    title: "Direct collaboration",
    desc: "You'll work directly with me from day one — no account managers or handoffs.",
  },
  {
    title: "Fast response",
    desc: "I'll review your site and get back to you promptly with actionable insights.",
  },
  {
    title: "Zero pressure",
    desc: "An honest conversation focused on real results and clear business value.",
  },
];

export function Contact() {
  const ref = useScrollReveal();
  const [formState, setFormState] = useState({
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Main Grid: Left copy & contacts + Right form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="reveal reveal-delay-1 text-section-heading mb-6">
                Like the sites I build?<br />
                Let's fix your score.
              </h2>

              <p className="reveal reveal-delay-2 text-[18px] md:text-[20px] text-[#77736B] leading-[1.6] max-w-[520px] mb-8 lg:mb-10">
                Whether you loved the recent work or want to take your site’s audit score to the next level—just drop your email or number. No endless questionnaires, just a quick hello to get going.
              </p>
            </div>

            {/* Direct Contact Cards / Pills */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:hello@schrader.co"
                className="inline-flex items-center px-4 py-2.5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB] text-[#18202A] text-[14px] font-medium hover:border-[#18202A] hover:shadow-sm transition-all"
              >
                hello@schrader.co
              </a>

              <a
                href="tel:+12315555555"
                className="inline-flex items-center px-4 py-2.5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB] text-[#18202A] text-[14px] font-medium hover:border-[#18202A] hover:shadow-sm transition-all"
              >
                (231) 555-5555
              </a>

              <div className="inline-flex items-center px-4 py-2.5 rounded-[var(--radius-md)] bg-[#F0EDE6]/60 border border-[#D8D4CB]/70 text-[#77736B] text-[14px]">
                Traverse City, MI
              </div>
            </div>
          </div>

          {/* Right Column (Form Card) */}
          <div className="lg:col-span-6">
            <div className="reveal bg-[#FFFDF9] border border-[#D8D4CB] rounded-[var(--radius-lg)] p-8 sm:p-10 shadow-[0_4px_30px_rgba(24,32,42,0.03)] relative overflow-hidden">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C99A3A] via-[#18202A] to-[#C99A3A] opacity-75" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <h3 className="font-serif text-[26px] md:text-[28px] text-[#18202A] mb-2 font-medium">
                    Message Received
                  </h3>
                  <p className="text-[15px] text-[#77736B] max-w-sm leading-relaxed mb-6">
                    Thanks for reaching out. I'll personally review your details and be in touch promptly to discuss your site.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[13px] text-[#18202A] font-semibold underline underline-offset-4 hover:opacity-75 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="pb-4 border-b border-[#D8D4CB]/50">
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#18202A] leading-tight font-medium">
                      Ready to get going?
                    </h3>
                    <p className="text-[14px] text-[#77736B] mt-1">
                      Drop your email or number below and I'll personally be in touch.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.01em]">
                        Email Address <span className="text-[#B9684A]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all focus:border-[#18202A] focus:bg-[#FFFDF9] focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.01em]">
                        Phone Number <span className="text-[#9A968E] font-normal text-[12px]">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all focus:border-[#18202A] focus:bg-[#FFFDF9] focus:outline-none"
                        placeholder="(231) 555-0199"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <button type="submit" className="btn-primary w-full justify-center text-[15px] py-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
                      Say Hi & Get Going
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-[#9A968E] pt-1">
                    <span>Zero spam guarantee</span>
                    <span>Typically replies in &lt;2 hours</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Trust Cards Row (3 balanced columns) */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#D8D4CB]/60">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-[var(--radius-md)] bg-[#FFFDF9]/80 border border-[#D8D4CB]/70 flex flex-col items-start hover:border-[#18202A]/40 transition-all"
            >
              <h4 className="text-[16px] font-semibold text-[#18202A] mb-1.5 tracking-[0.01em]">
                {item.title}
              </h4>
              <p className="text-[14px] text-[#77736B] leading-[1.55]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
