"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { MENU_PACKAGES } from "@/data/cateringData";

interface MenuPackagesSectionProps {
  onSelectPackage: (pkgId: "basic" | "regular", guestCount?: number) => void;
}

export default function MenuPackagesSection({ onSelectPackage }: MenuPackagesSectionProps) {
  // Guest counts for real-time interactive calculation
  const [basicGuests, setBasicGuests] = useState<number>(100);
  const [regularGuests, setRegularGuests] = useState<number>(100);

  // Quick preset buttons
  const guestPresets = [50, 100, 200, 300, 500];

  const scrollToBooking = (pkgId: "basic" | "regular", guests: number) => {
    onSelectPackage(pkgId, guests);
    const formElement = document.getElementById("booking-enquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menus" className="py-16 lg:py-24 bg-[#FAF7F0] border-b border-[#E8DCC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
            <span>Curated Catering Menus</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-4">
            Our Menu Packages
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-[#32453B] leading-relaxed">
            Choose between our two structured packages: the classic{" "}
            <strong>Basic Veg Menu</strong> for focused traditional feasts, or the grand{" "}
            <strong>Regular Veg Menu</strong> with additional courses, both curries, rotis, and fresh salad.
          </p>
        </div>

        {/* The Two Packages Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* 1. BASIC VEG MENU CARD */}
          <div className="bg-white rounded-3xl border-2 border-[#E3D4BA] hover:border-[#14482E] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
            {/* Top Ribbon */}
            <div className="bg-cream-200/80 text-[#14482E] text-center py-1.5 text-xs font-bold uppercase tracking-widest border-b border-[#E3D4BA]">
              🌿 Traditional Feast for Family Functions
            </div>

            <div className="p-6 sm:p-8">
              {/* Card Top Title & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-100 text-[#14482E] border border-cream-300">
                  {MENU_PACKAGES[0].highlightBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Pure Veg
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3522] mb-1">
                BASIC VEG MENU
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 min-h-[3.25rem] flex items-center leading-relaxed">
                {MENU_PACKAGES[0].tagline}
              </p>

              {/* Price Callout */}
              <div className="bg-cream-50 p-4 sm:p-5 rounded-2xl border border-cream-200 mb-6 min-h-[108px] flex flex-col justify-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Price Per Plate
                </span>
                <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex items-baseline">
                    <span className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0D3522] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D3522] tabular-nums leading-none">
                      {MENU_PACKAGES[0].pricePerPlate}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 ml-1.5">
                      / plate
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[11px] font-bold text-amber-900 bg-amber-100/90 px-3 py-1.5 rounded-full border border-amber-300/70 shadow-xs shrink-0 self-center">
                    1 Sweet • 1 Curry Choice
                  </span>
                </div>
              </div>

              {/* Interactive Guest Count & Indicative Total Calculator */}
              <div className="bg-[#FAF7F0] p-4 rounded-2xl border border-[#E7D9C0] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="basicGuests" className="text-xs font-bold text-[#0D3522] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#14482E]" />
                    <span>Calculate for Guests:</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="basicGuests"
                      type="number"
                      min={25}
                      max={5000}
                      step={25}
                      value={basicGuests}
                      onChange={(e) => setBasicGuests(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-20 text-center font-bold text-sm bg-white border border-gray-300 rounded px-1.5 py-0.5 text-[#0D3522] focus:ring-1 focus:ring-[#14482E]"
                    />
                    <span className="text-xs text-gray-500">guests</span>
                  </div>
                </div>

                {/* Preset Pills */}
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  <span className="text-[11px] text-gray-500">Quick:</span>
                  {guestPresets.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setBasicGuests(count)}
                      className={`text-[11px] px-2 py-0.5 rounded transition-all ${
                        basicGuests === count
                          ? "bg-[#14482E] text-white font-bold"
                          : "bg-white text-gray-700 hover:bg-cream-200 border border-gray-200"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                {/* Indicative Total Display */}
                <div className="pt-2.5 border-t border-[#E2D5BC] flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-semibold">Indicative Total:</span>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-base text-[#14482E] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-xl sm:text-2xl font-extrabold tracking-tight text-[#14482E] tabular-nums leading-none">
                      {(MENU_PACKAGES[0].pricePerPlate * basicGuests).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 italic">
                  *Indicative estimate. Final quote depends on menu selections and service setup.
                </p>
              </div>

              {/* Menu Course Checklist (Category Names Only) */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3522] border-b border-cream-200 pb-2">
                  Included Courses:
                </h4>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {MENU_PACKAGES[0].sections.map((sec) => (
                    <div
                      key={sec.category}
                      className="py-2.5 px-3.5 rounded-xl bg-cream-50/80 border border-cream-200 flex items-center justify-between gap-2 hover:bg-cream-100/60 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#14482E]"></span>
                        <span className="font-semibold text-sm text-[#0D3522]">
                          {sec.category}
                        </span>
                      </div>
                      {sec.badge && (
                        <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full shrink-0">
                          {sec.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions for Basic Package */}
            <div className="p-6 sm:p-8 bg-cream-50 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToBooking("basic", basicGuests)}
                className="flex-1 py-3 px-4 rounded-xl bg-[#14482E] hover:bg-[#0D3522] text-white font-semibold text-sm shadow transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Basic Package</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToBooking("basic", basicGuests)}
                className="py-3 px-4 rounded-xl border border-[#14482E] text-[#14482E] hover:bg-cream-200 font-semibold text-sm transition-all text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* 2. REGULAR VEG MENU CARD (FEATURED / RECOMMENDED) */}
          <div className="bg-white rounded-3xl border-2 border-[#B88E28] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ring-2 ring-[#B88E28]/20">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-[#B88E28] via-[#D4AF37] to-[#B88E28] text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm">
              ⭐ Most Popular for Weddings & Grand Celebrations
            </div>

            <div className="p-6 sm:p-8">
              {/* Card Top Title & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-100 text-[#7A5618] border border-gold-300">
                  {MENU_PACKAGES[1].highlightBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Pure Veg
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3522] mb-1">
                REGULAR VEG MENU
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 min-h-[3.25rem] flex items-center leading-relaxed">
                {MENU_PACKAGES[1].tagline}
              </p>

              {/* Price Callout */}
              <div className="bg-gradient-to-r from-[#FCFAF5] to-[#F7F0DF] p-4 sm:p-5 rounded-2xl border border-gold-300 mb-6 shadow-xs min-h-[108px] flex flex-col justify-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Price Per Plate
                </span>
                <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex items-baseline">
                    <span className="font-sans font-extrabold text-2xl sm:text-3xl text-[#7A5618] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-[#7A5618] tabular-nums leading-none">
                      {MENU_PACKAGES[1].pricePerPlate}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 ml-1.5">
                      / plate
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[11px] font-bold text-[#7A5618] bg-gold-200/90 px-3 py-1.5 rounded-full border border-gold-400/60 shadow-xs shrink-0 self-center">
                    1 Sweet • Both Curries • Roti
                  </span>
                </div>
              </div>

              {/* Interactive Guest Count & Indicative Total Calculator */}
              <div className="bg-[#FAF7F0] p-4 rounded-2xl border border-[#E7D9C0] mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="regularGuests" className="text-xs font-bold text-[#0D3522] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>Calculate for Guests:</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="regularGuests"
                      type="number"
                      min={25}
                      max={5000}
                      step={25}
                      value={regularGuests}
                      onChange={(e) => setRegularGuests(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-20 text-center font-bold text-sm bg-white border border-gold-400 rounded px-1.5 py-0.5 text-[#0D3522] focus:ring-1 focus:ring-[#B88E28]"
                    />
                    <span className="text-xs text-gray-500">guests</span>
                  </div>
                </div>

                {/* Preset Pills */}
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  <span className="text-[11px] text-gray-500">Quick:</span>
                  {guestPresets.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setRegularGuests(count)}
                      className={`text-[11px] px-2 py-0.5 rounded transition-all ${
                        regularGuests === count
                          ? "bg-[#B88E28] text-white font-bold"
                          : "bg-white text-gray-700 hover:bg-cream-200 border border-gray-200"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                {/* Indicative Total Display */}
                <div className="pt-2.5 border-t border-[#E2D5BC] flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-semibold">Indicative Total:</span>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-base text-[#7A5618] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-xl sm:text-2xl font-extrabold tracking-tight text-[#7A5618] tabular-nums leading-none">
                      {(MENU_PACKAGES[1].pricePerPlate * regularGuests).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 italic">
                  *Indicative estimate. Final quote depends on menu selections and service setup.
                </p>
              </div>

              {/* Menu Course Checklist (Category Names Only) */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3522] border-b border-cream-200 pb-2">
                  Included Courses:
                </h4>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {MENU_PACKAGES[1].sections.map((sec) => (
                    <div
                      key={sec.category}
                      className={`py-2.5 px-3.5 rounded-xl border flex items-center justify-between gap-2 transition-colors ${
                        sec.badge === "Regular Extra"
                          ? "bg-gold-50/70 border-gold-300 font-medium hover:bg-gold-100/60"
                          : "bg-cream-50/80 border-cream-200 hover:bg-cream-100/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            sec.badge === "Regular Extra" ? "bg-[#B88E28]" : "bg-[#14482E]"
                          }`}
                        ></span>
                        <span className="font-semibold text-sm text-[#0D3522]">
                          {sec.category}
                        </span>
                      </div>
                      {sec.badge && (
                        <span
                          className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                            sec.badge === "Regular Extra"
                              ? "bg-[#B88E28] text-white"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          {sec.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions for Regular Package */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 border-t border-gold-200 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToBooking("regular", regularGuests)}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#B88E28] to-[#9C731C] hover:from-[#9C731C] hover:to-[#7A5618] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Regular Package</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToBooking("regular", regularGuests)}
                className="py-3 px-4 rounded-xl border border-[#B88E28] text-[#7A5618] hover:bg-gold-50 font-semibold text-sm transition-all text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Sweets & Feast Showcase Card at bottom (Clean Presentation) */}
        <div className="mt-14 rounded-2xl bg-white p-6 sm:p-8 border border-[#E3D4BC] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 relative aspect-[4/3] rounded-xl overflow-hidden border border-cream-300 shadow-sm">
              <Image
                src="/images/sweets-desserts.jpg"
                alt="Authentic Sweets and Accompaniments by AASWADYA Caterers"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B88E28] block mb-1">
                Authentic Celebration Delicacies
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0D3522] mb-2">
                Traditional Sweets & Festive Accompaniments
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                Our celebration sweets and accompaniments are prepared fresh in pure desi ghee following classic Telugu culinary heritage. Every dish is crafted to delight your guests with memorable authentic taste.
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-cream-100 text-[#14482E] font-medium border border-cream-300">
                  Basic Package: 1 Sweet Included
                </span>
                <span className="px-3 py-1 rounded-full bg-gold-100 text-[#7A5618] font-bold border border-gold-300">
                  Regular Package: 1 Sweet Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
