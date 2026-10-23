"use client";

import React from "react";
import Image from "next/image";
import { Utensils, CalendarCheck, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { MENU_PACKAGES } from "@/data/cateringData";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#F5EEDD] to-[#FAF7F0] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E7DBC4]">
      {/* Background Decorative Traditional Pattern Watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none -mr-20 -mt-20">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-[#14482E]">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pure Veg & Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14482E]/10 border border-[#14482E]/20 text-[#14482E] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="flex items-center justify-center w-3.5 h-3.5 border border-emerald-700 p-0.5 rounded-sm bg-white">
                <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
              </span>
              <span>100% Pure Vegetarian Catering • Hyderabad</span>
            </div>

            {/* Main Tagline & Headings */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D3522] leading-[1.15] mb-4">
              Tradition Meets <span className="gold-gradient-text">Taste</span>
            </h1>

            <p className="font-display italic text-xl sm:text-2xl text-[#8E6515] font-medium mb-4 leading-snug">
              “Authentic Vegetarian Catering for Every Celebration.”
            </p>

            <p className="text-base sm:text-lg text-[#32453B] leading-relaxed max-w-2xl mb-8">
              Bringing families together with traditional flavours, fresh ingredients, and memorable food experiences. Handcrafted vegetarian delicacies cooked with devotion and served with authentic Telugu hospitality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollToSection("menus")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#14482E] text-[#FAF7F0] font-semibold text-base shadow-md hover:bg-[#0D3522] hover:shadow-lg transition-all duration-200 group"
              >
                <Utensils className="w-4 h-4 text-gold-300 transition-transform group-hover:scale-110" />
                <span>Explore Our Menus</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("booking-enquiry")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-[#B88E28] text-[#8E6515] font-semibold text-base shadow-sm hover:bg-[#FCFAF6] hover:border-[#8E6515] hover:text-[#5A3E16] transition-all duration-200"
              >
                <CalendarCheck className="w-4 h-4 text-[#B88E28]" />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E2D5BC] w-full text-xs sm:text-sm text-[#273D32]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14482E] shrink-0" />
                <span className="font-medium">Fresh on Event Day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14482E] shrink-0" />
                <span className="font-medium">Pure Ghee Delicacies</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#14482E] shrink-0" />
                <span className="font-medium">From ₹{MENU_PACKAGES[0].pricePerPlate} / Plate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Food Photography & Traditional Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative golden corner frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#B88E28]/40 via-[#FAF7F0] to-[#14482E]/30 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/hero-feast.jpg"
                    alt="Authentic South Indian Vegetarian Catering Feast by AASWADYA Caterers Hyderabad"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating caption badge on the image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-lg bg-[#0A2618]/85 backdrop-blur-sm border border-[#B88E28]/40 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-300 font-semibold">
                        AASWADYA Traditional Feast
                      </p>
                      <p className="text-sm font-medium text-cream-100">
                        Banana Leaf Feasts & Royal Buffets
                      </p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-[#B88E28] text-white rounded">
                      Hyderabad
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Pill on Side */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-[#FAF7F0] border border-[#B88E28] rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#14482E]">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#14482E]">Hygienic Kitchen</div>
                  <div className="text-[10px] text-gray-600">Zero Compromise on Quality</div>
                </div>
              </div>

              {/* Floating Pill on Bottom Left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-[#0D3522] text-[#FAF7F0] border border-gold-400/40 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <div className="text-left">
                  <div className="text-xs font-bold text-gold-300">Authentic Taste</div>
                  <div className="text-[10px] text-cream-200">Gutti Vankaya & Bagara Rice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
