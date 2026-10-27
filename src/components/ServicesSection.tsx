"use client";

import React from "react";
import Image from "next/image";
import {
  HeartHandshake,
  Sparkles,
  PartyPopper,
  Home,
  Flame,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { CATERING_SERVICES } from "@/data/cateringData";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#14482E]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#B88E28]" />,
    PartyPopper: <PartyPopper className="w-6 h-6 text-[#14482E]" />,
    Home: <Home className="w-6 h-6 text-[#B88E28]" />,
    Flame: <Flame className="w-6 h-6 text-[#14482E]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#B88E28]" />,
  };

  const handleBookService = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const enquiry = document.getElementById("booking-enquiry");
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF7F0] via-[#F4EDE0] to-[#FAF7F0] border-b border-[#E8DCC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Specialised Catering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-4">
            Our Catering Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-[#32453B] leading-relaxed">
            Tailored vegetarian menus, attentive service, and time-tested recipes designed to make every auspicious milestone and celebration memorable for your guests.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATERING_SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 border border-[#E5D7C2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#14482E]/10 transition-all duration-300">
                  {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-[#14482E]" />}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0D3522] mb-2.5 group-hover:text-[#8E6515] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#495C51] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Pure Veg Kitchen
                </span>

                <button
                  type="button"
                  onClick={() => handleBookService(service.title)}
                  className="text-xs font-semibold text-[#14482E] hover:text-[#B88E28] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner with Curries and Sweets Image */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0D3522] via-[#14482E] to-[#0A2618] text-[#FAF7F0] p-6 sm:p-10 shadow-xl border border-[#B88E28]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-widest text-gold-300 font-bold block mb-2">
                Traditional Telugu Catering Tradition
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Planning an Auspicious Event in Hyderabad?
              </h3>
              <p className="text-cream-200 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Whether you need a traditional banana leaf feast or a modern luxury buffet, AASWADYA Caterers ensures your event is handled with punctuality, warmth, and culinary authenticity.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-cream-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  ✓ Hot Live Counter Delicacies
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  ✓ Pure Desi Ghee
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
                  ✓ Strict Satvik & Hygiene Standards
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs aspect-video rounded-xl overflow-hidden border-2 border-gold-400/50 shadow-lg">
                <Image
                  src="/images/curry-spread.jpg"
                  alt="AASWADYA Caterers Traditional Curries and Delicacies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
