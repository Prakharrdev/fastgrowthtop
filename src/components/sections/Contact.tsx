"use client";

import { ArrowRight, User, Zap, Target, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const trustPoints = [
  {
    icon: User,
    title: "You'll work with me",
    desc: "No handoffs. No account managers.",
  },
  {
    icon: Zap,
    title: "Fast, personal response",
    desc: "I'll get back to you soon.",
  },
  {
    icon: Target,
    title: "Focused on results",
    desc: "Everything is built around your goals.",
  },
];

export function Contact() {
  const ref = useScrollReveal();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <div className="reveal mb-4">
              <span className="label-eyebrow">LET'S CONNECT</span>
            </div>

            <h2 className="reveal reveal-delay-1 text-section-heading mb-6">
              Let's build something great together<span className="text-[#1261F5]">.</span>
            </h2>

            <p className="reveal reveal-delay-2 text-body-large mb-12">
              Tell me a little about your business and what you're looking to achieve. I'll personally review your message and get back to you.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col gap-6 mb-12">
              {trustPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}
                  >
                    <div className="w-10 h-10 bg-[#F1F5FF] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#1261F5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#0D1F3C] mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#344563] leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Details */}
            <div className="reveal flex flex-col gap-4 pt-8 border-t border-[#E2E7F0]">
              <a href="mailto:hello@schrader.co" className="inline-flex items-center gap-3 text-[15px] text-[#344563] hover:text-[#1261F5] transition-colors">
                <Mail className="w-4 h-4 text-[#1261F5]" />
                hello@schrader.co
              </a>
              <a href="tel:+12315555555" className="inline-flex items-center gap-3 text-[15px] text-[#344563] hover:text-[#1261F5] transition-colors">
                <Phone className="w-4 h-4 text-[#1261F5]" />
                (231) 555-5555
              </a>
              <span className="inline-flex items-center gap-3 text-[15px] text-[#344563]">
                <MapPin className="w-4 h-4 text-[#1261F5]" />
                Based in Traverse City, MI
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="reveal bg-[#FBFCFF] border border-[#E2E7F0] rounded-xl p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-[#F1F5FF] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#1261F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[24px] font-bold text-[#0D1F3C] mb-3">Message sent!</h3>
                  <p className="text-body-regular max-w-sm">
                    Thank you for reaching out. I'll review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[14px] font-semibold text-[#0D1F3C] mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-[#E2E7F0] rounded-lg px-4 py-3.5 text-[15px] text-[#0D1F3C] placeholder:text-[#68758C]/60 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[14px] font-semibold text-[#0D1F3C] mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-[#E2E7F0] rounded-lg px-4 py-3.5 text-[15px] text-[#0D1F3C] placeholder:text-[#68758C]/60 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-[14px] font-semibold text-[#0D1F3C] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white border border-[#E2E7F0] rounded-lg px-4 py-3.5 text-[15px] text-[#0D1F3C] placeholder:text-[#68758C]/60 transition-all"
                      placeholder="(231) 555-1234"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[14px] font-semibold text-[#0D1F3C] mb-2">
                      Tell me about your business and goals
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border border-[#E2E7F0] rounded-lg px-4 py-3.5 text-[15px] text-[#0D1F3C] placeholder:text-[#68758C]/60 resize-none transition-all"
                      placeholder="I run a small business in Northern Michigan and I'm looking to..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#1261F5] hover:bg-[#0756E8] text-white px-8 py-4 rounded-lg text-[16px] font-semibold transition-all group w-full sm:w-auto"
                  >
                    Send Message
                    <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
                  </button>

                  {/* Privacy */}
                  <p className="text-[13px] text-[#68758C] leading-[1.5]">
                    Your information is safe with me. I respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
