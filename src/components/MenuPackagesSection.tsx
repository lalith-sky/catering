"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ArrowRight,
  Sparkles,
  Crown,
} from "lucide-react";
import { MENU_PACKAGES } from "@/data/cateringData";

interface MenuPackagesSectionProps {
  onSelectPackage: (pkgId: "basic" | "regular" | "premium", guestCount?: number) => void;
}

export default function MenuPackagesSection({ onSelectPackage }: MenuPackagesSectionProps) {
  // Guest counts for real-time interactive calculation
  const [basicGuests, setBasicGuests] = useState<number>(100);
  const [regularGuests, setRegularGuests] = useState<number>(100);
  const [premiumGuests, setPremiumGuests] = useState<number>(200);

  // Quick preset buttons for standard packages
  const guestPresets = [50, 100, 200, 300, 500];
  // Preset buttons for Premium Feast (minimum 200 guests)
  const premiumGuestPresets = [200, 300, 500, 800, 1000];

  const scrollToBooking = (pkgId: "basic" | "regular" | "premium", guests: number) => {
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
            Choose between our three structured packages: the classic{" "}
            <strong>Basic Menu</strong> (₹250/plate) for focused traditional feasts, the grand{" "}
            <strong>Regular Menu</strong> (₹310/plate) with curries, rotis & salad, or the ultra-luxury{" "}
            <strong>AASWADYA Premium Feast</strong> (₹760/plate, min. 200 guests) with 26 courses and 4 live counters.
          </p>
        </div>

        {/* The Three Packages Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* 1. BASIC MENU CARD */}
          <div className="bg-white rounded-3xl border-2 border-[#E3D4BA] hover:border-[#14482E] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative">
            {/* Top Ribbon */}
            <div className="bg-cream-200/80 text-[#14482E] text-center py-1.5 text-xs font-bold uppercase tracking-widest border-b border-[#E3D4BA]">
              🌿 Traditional Feast for Family Functions
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col">
              {/* Card Top Title & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-100 text-[#14482E] border border-cream-300">
                  {MENU_PACKAGES[0].highlightBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Pure Veg
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0D3522] mb-1">
                BASIC MENU
              </h3>
              <p className="text-xs text-gray-600 mb-5 min-h-[2.75rem] flex items-center leading-relaxed">
                {MENU_PACKAGES[0].tagline}
              </p>

              {/* Price Callout */}
              <div className="bg-cream-50 p-4 rounded-2xl border border-cream-200 mb-5 min-h-[96px] flex flex-col justify-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Price Per Plate
                </span>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-baseline">
                    <span className="font-sans font-extrabold text-2xl text-[#0D3522] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-3xl font-extrabold tracking-tight text-[#0D3522] tabular-nums leading-none">
                      {MENU_PACKAGES[0].pricePerPlate}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 ml-1">
                      / plate
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-full border border-amber-300/70 shrink-0">
                    1 Sweet • 1 Curry Choice
                  </span>
                </div>
              </div>

              {/* Interactive Guest Count & Indicative Total Calculator */}
              <div className="bg-[#FAF7F0] p-3.5 rounded-2xl border border-[#E7D9C0] mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="basicGuests" className="text-xs font-bold text-[#0D3522] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#14482E]" />
                    <span>Guests:</span>
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
                      className="w-16 text-center font-bold text-sm bg-white border border-gray-300 rounded px-1 py-0.5 text-[#0D3522] focus:ring-1 focus:ring-[#14482E]"
                    />
                    <span className="text-xs text-gray-500">guests</span>
                  </div>
                </div>

                {/* Preset Pills */}
                <div className="flex items-center gap-1 mb-2.5 flex-wrap">
                  <span className="text-[10px] text-gray-500">Quick:</span>
                  {guestPresets.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setBasicGuests(count)}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all ${
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
                <div className="pt-2 border-t border-[#E2D5BC] flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-semibold">Total:</span>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-sm text-[#14482E] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-xl font-extrabold tracking-tight text-[#14482E] tabular-nums leading-none">
                      {(MENU_PACKAGES[0].pricePerPlate * basicGuests).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Course Checklist */}
              <div className="space-y-2 pt-1 flex-1">
                <div className="flex items-center justify-between border-b border-cream-200 pb-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3522]">
                    Included Courses ({MENU_PACKAGES[0].sections.length}):
                  </h4>
                </div>

                <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1.5 text-xs">
                  {MENU_PACKAGES[0].sections.map((sec) => (
                    <div
                      key={sec.category}
                      className="py-2 px-3 rounded-xl bg-cream-50/80 border border-cream-200 flex items-center justify-between gap-2 hover:bg-cream-100/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14482E] shrink-0"></span>
                        <span className="font-semibold text-xs text-[#0D3522]">
                          {sec.category}
                        </span>
                      </div>
                      {sec.badge && (
                        <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full shrink-0">
                          {sec.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions for Basic Package */}
            <div className="p-5 sm:p-6 bg-cream-50 border-t border-cream-200 flex flex-col gap-2.5 mt-auto">
              <button
                type="button"
                onClick={() => scrollToBooking("basic", basicGuests)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#14482E] hover:bg-[#0D3522] text-white font-semibold text-sm shadow transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Basic Package</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToBooking("basic", basicGuests)}
                className="w-full py-2 px-4 rounded-xl border border-[#14482E] text-[#14482E] hover:bg-cream-200 font-semibold text-xs transition-all text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* 2. REGULAR MENU CARD (FEATURED / RECOMMENDED) */}
          <div className="bg-white rounded-3xl border-2 border-[#B88E28] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative ring-2 ring-[#B88E28]/20">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-[#B88E28] via-[#D4AF37] to-[#B88E28] text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm">
              ⭐ Most Popular for Grand Celebrations
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col">
              {/* Card Top Title & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-100 text-[#7A5618] border border-gold-300">
                  {MENU_PACKAGES[1].highlightBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Pure Veg
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0D3522] mb-1">
                REGULAR MENU
              </h3>
              <p className="text-xs text-gray-600 mb-5 min-h-[2.75rem] flex items-center leading-relaxed">
                {MENU_PACKAGES[1].tagline}
              </p>

              {/* Price Callout */}
              <div className="bg-gradient-to-r from-[#FCFAF5] to-[#F7F0DF] p-4 rounded-2xl border border-gold-300 mb-5 shadow-xs min-h-[96px] flex flex-col justify-center">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Price Per Plate
                </span>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-baseline">
                    <span className="font-sans font-extrabold text-2xl text-[#7A5618] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-3xl font-extrabold tracking-tight text-[#7A5618] tabular-nums leading-none">
                      {MENU_PACKAGES[1].pricePerPlate}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 ml-1">
                      / plate
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-[#7A5618] bg-gold-200/90 px-2.5 py-1 rounded-full border border-gold-400/60 shrink-0">
                    1 Sweet • Both Curries • Roti
                  </span>
                </div>
              </div>

              {/* Interactive Guest Count & Indicative Total Calculator */}
              <div className="bg-[#FAF7F0] p-3.5 rounded-2xl border border-[#E7D9C0] mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="regularGuests" className="text-xs font-bold text-[#0D3522] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>Guests:</span>
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
                      className="w-16 text-center font-bold text-sm bg-white border border-gold-400 rounded px-1 py-0.5 text-[#0D3522] focus:ring-1 focus:ring-[#B88E28]"
                    />
                    <span className="text-xs text-gray-500">guests</span>
                  </div>
                </div>

                {/* Preset Pills */}
                <div className="flex items-center gap-1 mb-2.5 flex-wrap">
                  <span className="text-[10px] text-gray-500">Quick:</span>
                  {guestPresets.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setRegularGuests(count)}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all ${
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
                <div className="pt-2 border-t border-[#E2D5BC] flex items-center justify-between">
                  <span className="text-xs text-gray-700 font-semibold">Total:</span>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-sm text-[#7A5618] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-xl font-extrabold tracking-tight text-[#7A5618] tabular-nums leading-none">
                      {(MENU_PACKAGES[1].pricePerPlate * regularGuests).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Course Checklist */}
              <div className="space-y-2 pt-1 flex-1">
                <div className="flex items-center justify-between border-b border-cream-200 pb-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3522]">
                    Included Courses ({MENU_PACKAGES[1].sections.length}):
                  </h4>
                </div>

                <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1.5 text-xs">
                  {MENU_PACKAGES[1].sections.map((sec) => (
                    <div
                      key={sec.category}
                      className={`py-2 px-3 rounded-xl border flex items-center justify-between gap-2 transition-colors ${
                        sec.badge === "Regular Extra"
                          ? "bg-gold-50/70 border-gold-300 font-medium hover:bg-gold-100/60"
                          : "bg-cream-50/80 border-cream-200 hover:bg-cream-100/60"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            sec.badge === "Regular Extra" ? "bg-[#B88E28]" : "bg-[#14482E]"
                          }`}
                        ></span>
                        <span className="font-semibold text-xs text-[#0D3522]">
                          {sec.category}
                        </span>
                      </div>
                      {sec.badge && (
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${
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
            <div className="p-5 sm:p-6 bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 border-t border-gold-200 flex flex-col gap-2.5 mt-auto">
              <button
                type="button"
                onClick={() => scrollToBooking("regular", regularGuests)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#B88E28] to-[#9C731C] hover:from-[#9C731C] hover:to-[#7A5618] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Regular Package</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToBooking("regular", regularGuests)}
                className="w-full py-2 px-4 rounded-xl border border-[#B88E28] text-[#7A5618] hover:bg-gold-50 font-semibold text-xs transition-all text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* 3. AASWADYA PREMIUM FEAST CARD */}
          <div className="bg-gradient-to-b from-[#FCFBF7] via-white to-[#F8F3E6] rounded-3xl border-2 border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative ring-2 ring-[#D4AF37]/30">
            {/* Top Ribbon */}
            <div className="bg-gradient-to-r from-[#8E6515] via-[#B88E28] to-[#8E6515] text-white text-center py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm flex items-center justify-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-amber-200" />
              <span>Royal Feast & Live Stations</span>
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col">
              {/* Card Top Title & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-[#8E6515] border border-amber-300">
                  {MENU_PACKAGES[2].highlightBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Pure Veg
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0D3522] mb-1">
                AASWADYA PREMIUM FEAST
              </h3>
              <p className="text-xs text-gray-600 mb-5 min-h-[2.75rem] flex items-center leading-relaxed">
                {MENU_PACKAGES[2].tagline}
              </p>

              {/* Price Callout */}
              <div className="bg-gradient-to-r from-[#FCFAF2] to-[#F5ECD5] p-4 rounded-2xl border-2 border-[#D4AF37]/60 mb-5 shadow-xs min-h-[96px] flex flex-col justify-center">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-[#8E6515] uppercase tracking-wider block">
                    Price Per Plate
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#14482E] text-white">
                    Min. 200 Guests
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-baseline">
                    <span className="font-sans font-extrabold text-2xl text-[#0D3522] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-3xl font-extrabold tracking-tight text-[#0D3522] tabular-nums leading-none">
                      {MENU_PACKAGES[2].pricePerPlate}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 ml-1">
                      / plate
                    </span>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-amber-950 bg-amber-200/90 px-2.5 py-1 rounded-full border border-amber-400/80 shrink-0">
                    2 Sweets • 2 Desserts • 4 Live Stations
                  </span>
                </div>
              </div>

              {/* Interactive Guest Count & Indicative Total Calculator (Min 200) */}
              <div className="bg-[#FAF7F0] p-3.5 rounded-2xl border border-[#E7D9C0] mb-5">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="premiumGuests" className="text-xs font-bold text-[#0D3522] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>Guests (Min. 200):</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      id="premiumGuests"
                      type="number"
                      min={200}
                      max={5000}
                      step={25}
                      value={premiumGuests}
                      onChange={(e) => setPremiumGuests(Math.max(200, parseInt(e.target.value) || 200))}
                      className="w-16 text-center font-bold text-sm bg-white border border-[#B88E28] rounded px-1 py-0.5 text-[#0D3522] focus:ring-1 focus:ring-[#B88E28]"
                    />
                    <span className="text-xs text-gray-500">guests</span>
                  </div>
                </div>

                {/* Preset Pills */}
                <div className="flex items-center gap-1 mb-2.5 flex-wrap">
                  <span className="text-[10px] text-gray-500">Quick:</span>
                  {premiumGuestPresets.map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setPremiumGuests(count)}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all ${
                        premiumGuests === count
                          ? "bg-[#B88E28] text-white font-bold"
                          : "bg-white text-gray-700 hover:bg-cream-200 border border-gray-200"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                {/* Indicative Total Display */}
                <div className="pt-2 border-t border-[#E2D5BC] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-700 font-semibold block">Total:</span>
                    <span className="text-[10px] text-[#8E6515] font-medium">Min: ₹1,52,000</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-sm text-[#0D3522] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-xl font-extrabold tracking-tight text-[#0D3522] tabular-nums leading-none">
                      {(MENU_PACKAGES[2].pricePerPlate * premiumGuests).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Course Checklist (26 Items) */}
              <div className="space-y-2 pt-1 flex-1">
                <div className="flex items-center justify-between border-b border-cream-200 pb-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3522]">
                    Included Courses (26 Items):
                  </h4>
                  <span className="text-[10px] text-gray-500">Scroll to view all</span>
                </div>

                <div className="max-h-[380px] overflow-y-auto pr-1 space-y-1.5 text-xs">
                  {MENU_PACKAGES[2].sections.map((sec, idx) => (
                    <div
                      key={`${sec.category}-${idx}`}
                      className="py-2 px-3 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-center justify-between gap-2 hover:bg-amber-100/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B88E28] shrink-0"></span>
                        <span className="font-semibold text-xs text-[#0D3522]">
                          {sec.category}
                        </span>
                      </div>
                      {sec.badge && (
                        <span className="text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full shrink-0 border border-amber-300/60">
                          {sec.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions for Premium Feast Package */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-cream-100 via-[#F7EFE1] to-cream-100 border-t border-gold-300 flex flex-col gap-2.5 mt-auto">
              <button
                type="button"
                onClick={() => scrollToBooking("premium", premiumGuests)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#B88E28] to-[#9C731C] hover:from-[#9C731C] hover:to-[#7A5618] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Premium Feast</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollToBooking("premium", premiumGuests)}
                className="w-full py-2 px-4 rounded-xl border border-[#B88E28] text-[#7A5618] hover:bg-gold-50 font-semibold text-xs transition-all text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Customise Your Plate Callout Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#0D3522] via-[#14482E] to-[#0A2618] p-6 sm:p-8 text-white shadow-xl border-2 border-[#B88E28]/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300 flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Total Culinary Freedom • Min 50 Guests</span>
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Want to Handpick Every Single Dish?
              </h4>
              <p className="text-xs sm:text-sm text-cream-200 max-w-2xl">
                Use our interactive <strong>Customise Your Plate</strong> builder to choose from 40+ authentic Telugu curries, biryanis, sweets, fries, breads, and live counters with instant quote calculation.
              </p>
            </div>

            <Link
              href="/customise-plate"
              className="shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#B88E28] to-[#9C731C] hover:from-[#CBA745] hover:to-[#B88E28] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Build Custom Plate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Sweets & Feast Showcase Card at bottom */}
        <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8 border border-[#E3D4BC] shadow-md">
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
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300">
                  AASWADYA Premium Feast: 2 Sweets & 2 Desserts Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
