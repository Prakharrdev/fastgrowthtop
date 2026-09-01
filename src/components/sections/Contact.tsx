"use client";

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const trustPoints = [
  { title: "You'll work with me", desc: "No handoffs. No account managers." },
  { title: "Fast, personal response", desc: "I'll get back to you soon." },
  { title: "Focused on results", desc: "Everything is built around your goals." },
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
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="reveal mb-5">
              <span className="label-eyebrow">Let's Connect</span>
            </div>

            <h2 className="reveal reveal-delay-1 text-section-heading mb-6">
              Let's build something<br />great together.
            </h2>

            <p className="reveal reveal-delay-2 text-body-large mb-12">
              Tell me a little about your business and what you're looking to achieve. I'll personally review your message and get back to you.
            </p>

            {/* Trust Points */}
            <div className="flex flex-col gap-6 mb-12">
              {trustPoints.map((item, i) => (
                <div key={item.title} className={`reveal reveal-delay-${i + 1} flex flex-col`}>
                  <h4 className="text-[15px] font-semibold text-[#18202A] mb-0.5">{item.title}</h4>
                  <p className="text-[14px] text-[#77736B] leading-[1.55]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="reveal flex flex-col gap-4 pt-8 border-t border-[#D8D4CB]/50">
              <a href="mailto:hello@schrader.co" className="inline-flex items-center gap-3 text-[14px] text-[#77736B] hover:text-[#18202A] transition-colors">
                <Mail className="w-4 h-4 text-[#9A968E]" />
                hello@schrader.co
              </a>
              <a href="tel:+12315555555" className="inline-flex items-center gap-3 text-[14px] text-[#77736B] hover:text-[#18202A] transition-colors">
                <Phone className="w-4 h-4 text-[#9A968E]" />
                (231) 555-5555
              </a>
              <span className="inline-flex items-center gap-3 text-[14px] text-[#77736B]">
                <MapPin className="w-4 h-4 text-[#9A968E]" />
                Based in Traverse City, MI
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="reveal bg-[#FFFDF9] border border-[#E8E5DE] rounded-[var(--radius-lg)] p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <h3 className="font-serif text-[28px] text-[#18202A] mb-3">Message sent.</h3>
                  <p className="text-body max-w-sm">
                    Thank you for reaching out. I'll review your message and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.02em]">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.02em]">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.02em]">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all"
                      placeholder="(231) 555-1234"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.02em]">
                      Tell me about your business and goals
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 resize-none transition-all"
                      placeholder="I run a small business in Northern Michigan and I'm looking to..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Send Message
                    <ArrowRight className="w-4 h-4 arrow-icon" />
                  </button>

                  <p className="text-[12px] text-[#9A968E] leading-[1.5]">
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
