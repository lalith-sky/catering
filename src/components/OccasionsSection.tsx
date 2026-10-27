"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export interface OccasionItem {
  id: string;
  name: string;
  image: string;
  formEventType: string;
  recommendedPackage: "basic" | "regular" | "premium";
  guestRecommendation: string;
  tagline: string;
}

export const OCCASIONS: OccasionItem[] = [
  {
    id: "wedding",
    name: "Wedding",
    image: "/images/occasions/wedding.jpg",
    formEventType: "Wedding / Engagement",
    recommendedPackage: "regular",
    guestRecommendation: "150 - 2,000+ Guests",
    tagline: "Grand traditional South Indian wedding feasts with authentic sweets and curries",
  },
  {
    id: "birthday",
    name: "Birthday",
    image: "/images/occasions/birthday.jpg",
    formEventType: "Birthday Party",
    recommendedPackage: "basic",
    guestRecommendation: "30 - 250 Guests",
    tagline: "Fun, vibrant spreads with hot snacks, live fry counters, and delicious sweets",
  },
  {
    id: "corporate",
    name: "Corporate",
    image: "/images/occasions/corporate.jpg",
    formEventType: "Corporate Event",
    recommendedPackage: "regular",
    guestRecommendation: "50 - 500 Guests",
    tagline: "Punctual, hygienic, and professional buffet setups for business lunches & dinners",
  },
  {
    id: "anniversary",
    name: "Anniversary",
    image: "/images/occasions/anniversary.jpg",
    formEventType: "Anniversary Celebration",
    recommendedPackage: "regular",
    guestRecommendation: "50 - 300 Guests",
    tagline: "Heartfelt celebrations and milestone gatherings with authentic regional flavours",
  },
  {
    id: "house-party",
    name: "House Party",
    image: "/images/occasions/house-party.jpg",
    formEventType: "House Party Celebration",
    recommendedPackage: "basic",
    guestRecommendation: "20 - 80 Guests",
    tagline: "Intimate home gatherings with fresh hot traditional dishes and personal care",
  },
  {
    id: "reception",
    name: "Reception",
    image: "/images/occasions/reception.jpg",
    formEventType: "Wedding Reception",
    recommendedPackage: "regular",
    guestRecommendation: "200 - 1,500 Guests",
    tagline: "Enchanting evening celebrations with grand buffet displays and warm hospitality",
  },
];

interface OccasionsSectionProps {
  selectedEventType?: string;
  onSelectOccasion?: (occasion: OccasionItem) => void;
}

export default function OccasionsSection({
  selectedEventType,
  onSelectOccasion,
}: OccasionsSectionProps) {
  // Find which occasion matches selectedEventType initially
  const getInitialOccasionId = () => {
    if (!selectedEventType) return "wedding";
    const match = OCCASIONS.find(
      (o) => o.formEventType.toLowerCase() === selectedEventType.toLowerCase()
    );
    return match ? match.id : "wedding";
  };

  const [activeId, setActiveId] = useState<string>(getInitialOccasionId());
  const [selectedBanner, setSelectedBanner] = useState<OccasionItem | null>(null);

  const handleCardClick = (occasion: OccasionItem) => {
    setActiveId(occasion.id);
    setSelectedBanner(occasion);

    if (onSelectOccasion) {
      onSelectOccasion(occasion);
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById("packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="celebrations"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#E6D9C3] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching user's design */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Subtle line kicker: — TAILORED EXPERIENCES — */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#B88E28]/70" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#9C731C] uppercase">
              TAILORED EXPERIENCES
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#B88E28]/70" />
          </div>

          {/* Main Title: What are you celebrating? */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A2821] font-normal tracking-normal mb-3 sm:mb-4">
            What are you celebrating?
          </h2>

          {/* Subtitle: Pick your occasion — we'll recommend the right menus instantly. */}
          <p className="text-sm sm:text-base md:text-lg text-[#8A6C3A] mb-2.5 font-normal">
            Pick your occasion — we&apos;ll recommend the right menus instantly.
          </p>

          {/* Gold Action Instruction */}
          <div className="inline-block">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#B88E28] uppercase">
              CLICK AN OCCASION BELOW TO SELECT
            </span>
          </div>
        </div>

        {/* 6 Occasions Horizontal Row/Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {OCCASIONS.map((occasion) => {
            const isSelected = activeId === occasion.id;

            return (
              <button
                key={occasion.id}
                type="button"
                onClick={() => handleCardClick(occasion)}
                className={`group relative text-left bg-white rounded-sm overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14482E] flex flex-col justify-between ${
                  isSelected
                    ? "ring-2 ring-[#B88E28] shadow-xl -translate-y-1.5"
                    : "border border-[#E7DEC8] hover:border-[#B88E28]/60 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
                aria-pressed={isSelected}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full bg-cream-100 overflow-hidden">
                  <Image
                    src={occasion.image}
                    alt={`${occasion.name} catering by AASWADYA Caterers`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={occasion.id === "wedding" || occasion.id === "birthday"}
                  />

                  {/* Active Selection Badge Overlay */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#14482E] text-white flex items-center justify-center shadow-md animate-in fade-in zoom-in-75 duration-200">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                  )}

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* White Bottom Label Bar */}
                <div
                  className={`py-3 sm:py-3.5 px-2 text-center transition-colors ${
                    isSelected ? "bg-[#FAF7F2]" : "bg-white group-hover:bg-[#FCFBF8]"
                  }`}
                >
                  <span
                    className={`block text-xs sm:text-sm tracking-wide ${
                      isSelected
                        ? "font-bold text-[#14482E]"
                        : "font-medium text-[#1A2821] group-hover:text-[#B88E28]"
                    }`}
                  >
                    {occasion.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Recommendation Bar below the cards */}
        {selectedBanner && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#DBC172] shadow-md animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#14482E]/10 flex items-center justify-center shrink-0 text-[#14482E]">
                  <Sparkles className="w-5 h-5 text-[#B88E28]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B88E28]">
                      Selected Occasion:
                    </span>
                    <span className="font-bold text-sm text-[#0D3522]">
                      {selectedBanner.name}
                    </span>
                    <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-[#14482E] border border-emerald-200 font-medium">
                      {selectedBanner.guestRecommendation}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E5246] mt-0.5">
                    {selectedBanner.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={scrollToMenu}
                  className="flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-[#14482E] text-[#14482E] hover:bg-[#14482E]/5 transition-all text-center"
                >
                  View Recommended Menus
                </button>
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-semibold bg-[#14482E] text-white hover:bg-[#0D3522] shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book for {selectedBanner.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
