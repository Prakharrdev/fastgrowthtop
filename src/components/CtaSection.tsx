"use client";

import { useState } from "react";
import { ArrowRight, Check, Send } from "lucide-react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FFFDF9] border-t border-[#D8D4CB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="bg-[#18202A] text-[#FFFDF9] rounded-[32px] p-8 sm:p-14 md:p-20 shadow-floating-custom relative overflow-hidden">
          
          {/* Subtle Background Dot Grid Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-dot-grid opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Narrative Block (6 Cols) */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold tracking-[0.14em] text-[#C99A3A] uppercase mb-6 block">
                08 — START A CONVERSATION
              </span>

              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FFFDF9] mb-8 leading-[1.05] tracking-tight">
                Ready for your website <br />
                to work harder?
              </h2>

              <p className="font-serif-display text-2xl sm:text-3xl text-[#D8D4CB]/80 mb-10 leading-snug">
                Let&apos;s build something <br className="hidden sm:inline" />
                that actually <span className="italic text-[#C99A3A]">brings you business</span>.
              </p>

              <div className="space-y-4 pt-8 border-t border-[#77736B]/30 text-[15px] text-[#D8D4CB]/70 font-sans">
                <p>📍 Office located in Traverse City, Michigan</p>
                <p>✉️ Direct email: hello@schrader.co</p>
                <p>⏱️ Typical response time: Within 24 business hours</p>
              </div>
            </div>

            {/* Right Interactive Form Block (6 Cols) */}
            <div className="lg:col-span-6 bg-[#FFFDF9] text-[#18202A] rounded-[20px] p-8 sm:p-10 border border-[#D8D4CB] shadow-card-custom">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#18202A] text-[#C99A3A] flex items-center justify-center mb-6">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-display text-3xl text-[#18202A] mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-body-regular text-[#77736B] max-w-md mb-8">
                    Thank you for reaching out. I will review your business details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[14px] font-semibold text-[#18202A] hover:text-[#C99A3A] underline transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#18202A] uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-13 px-4 bg-[#F7F5F0] border border-[#D8D4CB] rounded-[8px] text-[15px] text-[#18202A] placeholder-[#77736B]/60 focus:outline-none focus:border-[#18202A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#18202A] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourbusiness.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-13 px-4 bg-[#F7F5F0] border border-[#D8D4CB] rounded-[8px] text-[15px] text-[#18202A] placeholder-[#77736B]/60 focus:outline-none focus:border-[#18202A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#18202A] uppercase tracking-wider mb-2">
                      Business Name & Website
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Grand Traverse Lodge (grandtraverselodge.com)"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full h-13 px-4 bg-[#F7F5F0] border border-[#D8D4CB] rounded-[8px] text-[15px] text-[#18202A] placeholder-[#77736B]/60 focus:outline-none focus:border-[#18202A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#18202A] uppercase tracking-wider mb-2">
                      Tell Me About Your Business & Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What are your main bottlenecks? (e.g. site redesign, search rankings, lead forms...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 bg-[#F7F5F0] border border-[#D8D4CB] rounded-[8px] text-[15px] text-[#18202A] placeholder-[#77736B]/60 focus:outline-none focus:border-[#18202A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-hover-arrow w-full h-[56px] bg-[#18202A] text-[#FFFDF9] text-[15px] font-medium rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#263342]"
                  >
                    <span>Start a Conversation</span>
                    <Send className="arrow-icon ml-2.5 w-4 h-4 text-[#C99A3A]" />
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
