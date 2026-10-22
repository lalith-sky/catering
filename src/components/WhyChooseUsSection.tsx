"use client";

import React from "react";
import {
  ShieldCheck,
  Flame,
  Clock,
  Sparkles,
  BadgeDollarSign,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/cateringData";

export default function WhyChooseUsSection() {
  const iconList = [
    <ShieldCheck key="1" className="w-6 h-6 text-[#14482E]" />,
    <Flame key="2" className="w-6 h-6 text-[#B88E28]" />,
    <Sparkles key="3" className="w-6 h-6 text-[#14482E]" />,
    <Clock key="4" className="w-6 h-6 text-[#B88E28]" />,
    <BadgeDollarSign key="5" className="w-6 h-6 text-[#14482E]" />,
    <HeartHandshake key="6" className="w-6 h-6 text-[#B88E28]" />,
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF7F0] via-[#F5EEDD] to-[#FAF7F0] border-b border-[#E8DCC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>The AASWADYA Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-4">
            Why Choose AASWADYA Caterers?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-[#32453B] leading-relaxed">
            We understand that when you invite guests to your milestone celebration, the quality of food represents your family's honour and warmth. Here is our unwavering promise to you.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 border border-[#E3D4BC] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center">
                    {iconList[index % iconList.length]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream-100 text-[#14482E] border border-cream-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0D3522] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-[#495C51] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-cream-100 flex items-center gap-2 text-xs font-semibold text-[#14482E]">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Guaranteed Culinary Hygiene</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Pledge Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E3D4BC] shadow-sm text-center max-w-3xl mx-auto">
          <p className="font-display italic text-lg sm:text-xl text-[#0D3522] mb-2">
            “No shortcuts, no artificial food colours, no compromises. Only honest ingredients and pure traditional devotion.”
          </p>
          <span className="text-xs font-bold uppercase tracking-widest text-[#B88E28]">
            — AASWADYA Caterers Culinary Philosophy
          </span>
        </div>
      </div>
    </section>
  );
}
