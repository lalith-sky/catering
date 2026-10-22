"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Utensils, HeartHandshake, Sparkles, ChefHat, Leaf, Eye, Maximize2 } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

export default function AboutSection() {
  const [activeCardSide, setActiveCardSide] = useState<"front" | "back">("front");
  const [showFullModal, setShowFullModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showFullModal) {
        setShowFullModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullModal]);

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF7F0] border-b border-[#E8DCC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#14482E]" />
            <span>About AASWADYA Caterers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-4">
            Serving Happiness to Every Plate
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-[#32453B] leading-relaxed">
            AASWADYA Caterers is a dedicated pure vegetarian catering service based in Hyderabad, Telangana. Rooted in culinary tradition and inspired by authentic South Indian heritage, we cater with affection, punctuality, and uncompromising cleanliness.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4D7C0] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-[#0D3522] mb-3">
                Traditional Flavours for Your Special Celebrations
              </h3>
              <p className="text-[#3E5247] text-sm sm:text-base leading-relaxed mb-6">
                From sacred wedding ceremonies and joyous engagements to birthdays, housewarmings (Gruhapravesam), and intimate family gatherings, food is the soul of every Indian milestone. At AASWADYA Caterers, we treat every event as our own family function, ensuring your guests depart with full hearts and memorable tastes.
              </p>

              {/* 4 Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#14482E] flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D3522]">Freshly Prepared Veg Food</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Cooked fresh on the event day with premium produce and pure ghee.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D3522]">Traditional Recipes</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Time-honoured Telugu dishes prepared with authentic spices and care.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#14482E] flex items-center justify-center shrink-0">
                    <Utensils className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D3522]">Flexible Menu Choices</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Select from our structured Basic and Regular packages tailored to your event.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <ChefHat className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0D3522]">Professional Catering</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Hygienic setup, disciplined service, and attentive staff management.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#0D3522] text-[#FAF7F0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <span className="text-xs uppercase tracking-wider text-gold-300 font-semibold block">
                    Transparent Per-Plate Pricing
                  </span>
                  <span className="text-sm font-medium text-cream-100">
                    Packages designed for every celebration — Basic at ₹229 & Regular at ₹299
                  </span>
                </div>
                <a
                  href="#menus"
                  className="px-4 py-2 rounded-lg bg-[#B88E28] hover:bg-[#9C731C] text-white text-xs font-semibold whitespace-nowrap transition-colors"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visiting Card Showcase (Fitted Perfectly) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#E2D4BC] shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-cream-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#14482E]"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14482E]">
                    Official Visiting Card
                  </span>
                </div>

                {/* Switch between front and back */}
                <div className="flex items-center gap-1 bg-cream-100 p-1 rounded-xl text-xs font-semibold border border-cream-300">
                  <button
                    type="button"
                    onClick={() => setActiveCardSide("front")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeCardSide === "front"
                        ? "bg-[#14482E] text-white shadow-xs"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    Front Side
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCardSide("back")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeCardSide === "back"
                        ? "bg-[#14482E] text-white shadow-xs"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    Back Side
                  </button>
                </div>
              </div>

              {/* Card Preview Container - Exact Aspect Ratio Without Cropping */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#D9C8AC] shadow-md bg-[#0A2618]/5">
                {activeCardSide === "front" ? (
                  <div className="relative w-full aspect-[711/336]">
                    <Image
                      src="/images/visiting-card-front.jpg"
                      alt="AASWADYA Caterers Visiting Card Front Side"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[711/289]">
                    <Image
                      src="/images/visiting-card-back.jpg"
                      alt="AASWADYA Caterers Visiting Card Back Side - Serving Happiness to Every Plate"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Card Details & Quick Actions */}
              <div className="mt-4 pt-3 border-t border-cream-200">
                <div className="flex items-center justify-between text-xs text-[#2A3E33] mb-3">
                  <span className="font-semibold text-[#0D3522]">
                    {activeCardSide === "front"
                      ? "Pure Vegetarian & Hygienic Preparation"
                      : "Serving Happiness to Every Plate"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowFullModal(true)}
                    className="inline-flex items-center gap-1 text-[#8E6515] hover:text-[#5A3E16] font-semibold text-xs transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Card</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-600 bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span>📞 +91 94901 22942</span>
                  <span>📍 Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Visiting Card Lightbox Modal */}
      {showFullModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowFullModal(false)}
        >
          <div
            className="relative bg-[#FAF7F0] p-4 sm:p-6 rounded-3xl max-w-3xl w-full border-2 border-gold-400 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-cream-300">
              <span className="font-serif font-bold text-base text-[#0D3522]">
                AASWADYA Caterers — Official Visiting Card
              </span>
              <button
                type="button"
                onClick={() => setShowFullModal(false)}
                className="text-gray-500 hover:text-black font-bold text-sm px-2.5 py-1 rounded-lg bg-cream-200"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              {/* Front */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E6515] block mb-1">
                  Card Front
                </span>
                <div className="relative aspect-[711/336] w-full rounded-xl overflow-hidden border border-cream-300 shadow">
                  <Image
                    src="/images/visiting-card-front.jpg"
                    alt="AASWADYA Caterers Card Front"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Back */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E6515] block mb-1">
                  Card Back
                </span>
                <div className="relative aspect-[711/289] w-full rounded-xl overflow-hidden border border-cream-300 shadow">
                  <Image
                    src="/images/visiting-card-back.jpg"
                    alt="AASWADYA Caterers Card Back"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
