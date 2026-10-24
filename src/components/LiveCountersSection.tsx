"use client";

import React from "react";
import {
  Flame,
  Sparkles,
  Soup,
  ChefHat,
  Candy,
  Plus,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

interface LiveCounterItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

export default function LiveCountersSection() {
  const liveCounters: LiveCounterItem[] = [
    {
      id: "dosa",
      name: "Dosa",
      tag: "Live Tawa",
      description: "Crispy golden dosas made fresh to order with chutneys and hot sambar",
      icon: <Flame className="w-5 h-5 text-[#B88E28]" />,
    },
    {
      id: "chaat",
      name: "Chaat",
      tag: "Delhi & Mumbai Style",
      description: "Sev Puri, Dahi Puri, Papdi Chaat, and crispy Aloo Tikki prepared fresh",
      icon: <Sparkles className="w-5 h-5 text-[#14482E]" />,
    },
    {
      id: "pani-puri",
      name: "Pani Puri",
      tag: "Tangy & Chilled",
      description: "Crispy hollow puris served with tangy mint water and sweet tamarind water",
      icon: <Soup className="w-5 h-5 text-[#B88E28]" />,
    },
    {
      id: "pav-bhaji",
      name: "Pav Bhaji",
      tag: "Desi Butter Tawa",
      description: "Spiced mashed vegetable bhaji served with butter-toasted soft pavs",
      icon: <ChefHat className="w-5 h-5 text-[#14482E]" />,
    },
    {
      id: "ice-cream",
      name: "Ice Cream",
      tag: "Dessert Station",
      description: "Delicious chilled scoops and festive dessert cups for your guests",
      icon: <Candy className="w-5 h-5 text-[#B88E28]" />,
    },
    {
      id: "and-more",
      name: "And more...",
      tag: "On Request",
      description: "Custom live counters, live sweets, or specialty snacks tailored to your event",
      icon: <Plus className="w-5 h-5 text-[#14482E]" />,
    },
  ];

  const handleEnquire = () => {
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}?text=${encodeURIComponent(
    "Hello AASWADYA Caterers! I would like to enquire about Live Counters (Dosa, Chaat, Pani Puri, Pav Bhaji, Ice Cream) for my upcoming celebration."
  )}`;

  return (
    <section
      id="live-counters"
      className="py-14 sm:py-18 bg-gradient-to-b from-[#FAF7F0] via-[#F6EFE2] to-[#FAF7F0] border-b border-[#E8DCC6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#B88E28]/60"></span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#9C731C] uppercase">
              INTERACTIVE FOOD STATIONS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#B88E28]/60"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-3">
            Live Counters Available
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-4 rounded-full"></div>

          <p className="text-sm sm:text-base text-[#495C51] leading-relaxed">
            Add sizzling live food stations alongside your celebration feast. Made fresh and served hot on-site by our skilled catering chefs.
          </p>
        </div>

        {/* Live Counters 6 Cards Grid - Strictly matching requested options, Clean & No Prices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {liveCounters.map((counter) => (
            <div
              key={counter.id}
              className="bg-white rounded-2xl p-5 border border-[#E5D7C2] shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#14482E]/10 transition-all duration-300">
                    {counter.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#8E6515] bg-gold-100/80 px-2 py-0.5 rounded-full border border-gold-300/70">
                    {counter.tag}
                  </span>
                </div>

                {/* Counter Name */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D3522] mb-1.5 group-hover:text-[#B88E28] transition-colors">
                  {counter.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#52645A] leading-relaxed">
                  {counter.description}
                </p>
              </div>

              {/* Bottom Subtle Status */}
              <div className="pt-3 mt-3 border-t border-cream-200 flex items-center justify-between text-[11px] text-[#14482E] font-semibold">
                <span>Available Live</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Small Bottom Callout Banner */}
        <div className="mt-10 rounded-2xl bg-white p-5 sm:p-6 border border-[#E3D4BC] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#14482E]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#B88E28]" />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#0D3522]">
                Want Live Counters at Your Celebration?
              </h4>
              <p className="text-xs text-[#52645A] mt-0.5">
                Live counters can be arranged as optional services alongside any wedding, reception, birthday, or private event.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleEnquire}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold bg-[#14482E] text-white hover:bg-[#0D3522] shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <span>Enquire in Booking</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
