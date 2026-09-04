"use client";

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const trustPoints = [
  { title: "Direct 1-on-1 collaboration", desc: "You'll work directly with me from day one." },
  { title: "Fast response", desc: "I'll review your site and get back to you promptly." },
  { title: "Zero pressure", desc: "An honest conversation focused on real results." },
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
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">

            <h2 className="reveal reveal-delay-1 text-section-heading mb-6">
              Like the sites I build?<br />Let's fix your score.
            </h2>

            <p className="reveal reveal-delay-2 text-body-large mb-12">
              Whether you loved the recent work or want to take your site’s audit score to the next level—just drop your email or number. No endless questionnaires, just a quick hello to get going.
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
                <div className="flex flex-col items-center justify-center text-center py-14">
                  <h3 className="font-serif text-[28px] text-[#18202A] mb-3">Thanks for reaching out!</h3>
                  <p className="text-body max-w-sm">
                    I've received your info and will reach out shortly to talk about your site.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[24px] text-[#18202A] mb-1">
                      Ready to get going?
                    </h3>
                    <p className="text-[14px] text-[#77736B]">
                      Drop your email or number below and I'll personally be in touch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-[13px] font-semibold text-[#18202A] mb-2 tracking-[0.02em]">
                        Email Address <span className="text-[#B9684A]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all focus:border-[#18202A] focus:outline-none"
                        placeholder="you@company.com"
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
                        className="w-full bg-[#F7F5F0] border border-[#D8D4CB] rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] text-[#18202A] placeholder:text-[#9A968E]/70 transition-all focus:border-[#18202A] focus:outline-none"
                        placeholder="(231) 555-0199"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                      Say Hi & Get Going
                      <ArrowRight className="w-4 h-4 arrow-icon" />
                    </button>
                  </div>

                  <p className="text-[12px] text-[#9A968E] leading-[1.5]">
                    No spam, ever. Just direct communication about your website and business goals.
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
