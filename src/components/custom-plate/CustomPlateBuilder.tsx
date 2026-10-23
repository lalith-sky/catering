"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Users,
  Check,
  Plus,
  Minus,
  Search,
  Sparkles,
  X,
  Printer,
  MessageCircle,
  Edit3,
  ArrowRight,
  AlertCircle,
  Utensils,
  Calendar,
  MapPin,
  Phone,
  User,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Soup,
  Carrot,
  Wheat,
  Flame,
  Coffee,
  Cookie,
  PartyPopper,
  Candy,
  Milk,
  Droplet,
  Salad,
  CircleDot,
  FileCheck,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";
import {
  CUSTOM_DISHES,
  DISH_CATEGORIES,
  GUEST_QUICK_PRESETS,
  BASE_PLATE_MINIMUM,
  calculateCustomPlatePrice,
  CustomDish,
} from "@/data/customPlateData";

interface CustomerDetails {
  name: string;
  phone: string;
  eventDate: string;
  eventType: string;
  location: string;
  specialRequests: string;
}

export default function CustomPlateBuilder() {
  // 1. Guest Count state
  const [guestCount, setGuestCount] = useState<number>(100);
  const [guestInputText, setGuestInputText] = useState<string>("100");

  // 2. Selected dishes state (array of dish IDs)
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>([
    "sw-gulab-jamun",
    "fr-bagara-rice",
    "wc-gutti-vankaya",
    "vc-mixed-veg",
    "wr-steamed-white-rice",
    "fy-aloo-fry",
    "dl-tomato-pappu",
    "sr-veg-sambar",
    "sn-mirchi-bajji",
    "ch-tomato-pachadi",
    "pk-mango-pickle",
    "pd-appadam",
    "cd-fresh-plain-curd",
    "gh-pure-ghee",
  ]);

  // 3. UI Filters and Navigation
  const [activeCategoryId, setActiveCategoryId] = useState<string>("sweets");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [showMobilePlateDrawer, setShowMobilePlateDrawer] = useState<boolean>(false);

  // 4. Customer Enquiry Form state
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "Wedding / Engagement",
    location: "",
    specialRequests: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [enquirySent, setEnquirySent] = useState<boolean>(false);

  // Guest count validations
  const isGuestCountValid = guestCount >= BASE_PLATE_MINIMUM;

  const handleGuestChange = (count: number) => {
    const validNum = Math.max(0, count);
    setGuestCount(validNum);
    setGuestInputText(validNum.toString());
  };

  const handleCustomGuestInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setGuestInputText(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) {
      setGuestCount(parsed);
    }
  };

  // Dish toggle handler
  const handleToggleDish = (dishId: string) => {
    setSelectedDishIds((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [...prev, dishId]
    );
  };

  // Category select all / clear
  const handleSelectAllInCategory = (categoryId: string) => {
    const categoryDishIds = CUSTOM_DISHES.filter((d) => d.categoryId === categoryId).map(
      (d) => d.id
    );
    setSelectedDishIds((prev) => Array.from(new Set([...prev, ...categoryDishIds])));
  };

  const handleClearCategory = (categoryId: string) => {
    const categoryDishIds = new Set(
      CUSTOM_DISHES.filter((d) => d.categoryId === categoryId).map((d) => d.id)
    );
    setSelectedDishIds((prev) => prev.filter((id) => !categoryDishIds.has(id)));
  };

  const handleClearAllPlate = () => {
    if (window.confirm("Are you sure you want to clear all dishes from your plate?")) {
      setSelectedDishIds([]);
    }
  };

  // Filtered dishes based on category & search query
  const displayedDishes = useMemo(() => {
    let dishes = CUSTOM_DISHES;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      dishes = dishes.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description?.toLowerCase().includes(q) ||
          d.categoryId.toLowerCase().includes(q)
      );
    } else {
      dishes = dishes.filter((d) => d.categoryId === activeCategoryId);
    }
    return dishes;
  }, [activeCategoryId, searchQuery]);

  // Price Calculation Engine (Calculates purely on the frontend based on selected dishes)
  const calculation = useMemo(() => {
    return calculateCustomPlatePrice(selectedDishIds, guestCount);
  }, [selectedDishIds, guestCount]);

  // Selected dishes categorized map for summary view
  const categorizedSelections = useMemo(() => {
    const map = new Map<string, CustomDish[]>();
    for (const cat of DISH_CATEGORIES) {
      const dishesInCat = CUSTOM_DISHES.filter(
        (d) => d.categoryId === cat.id && selectedDishIds.includes(d.id)
      );
      if (dishesInCat.length > 0) {
        map.set(cat.name, dishesInCat);
      }
    }
    return map;
  }, [selectedDishIds]);

  // Open quotation view
  const handleOpenQuotation = () => {
    if (!isGuestCountValid) {
      alert("Please select at least 50 guests to build your custom catering plate.");
      return;
    }
    if (selectedDishIds.length === 0) {
      alert("Please select at least one dish for your catering menu.");
      return;
    }
    setShowSummaryModal(true);
    // Subtle festive celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#14482E", "#B88E28", "#E9D9A6"],
      });
    } catch {
      // safe fallback
    }
  };

  // Print quotation
  const handlePrintQuotation = () => {
    window.print();
  };

  // WhatsApp Enquiry builder
  const buildWhatsAppMessage = () => {
    let menuText = "";
    categorizedSelections.forEach((dishes, catName) => {
      menuText += `\n*${catName}:*\n• ${dishes.map((d) => d.name).join("\n• ")}\n`;
    });

    const lines = [
      `*AASWADYA CATERERS — CUSTOM PLATE ENQUIRY*`,
      `_Tradition Meets Taste • 100% Pure Vegetarian_`,
      ``,
      `*CUSTOMER DETAILS:*`,
      `• *Name:* ${customer.name || "Customer"}`,
      `• *Phone:* ${customer.phone || "Not provided"}`,
      `• *Event Type:* ${customer.eventType}`,
      `• *Event Date:* ${customer.eventDate || "Date TBD"}`,
      `• *Location:* ${customer.location || "Hyderabad"}`,
      customer.specialRequests ? `• *Special Notes:* ${customer.specialRequests}` : null,
      ``,
      `*CATERING SPECIFICATIONS:*`,
      `• *Number of Guests:* ${guestCount} guests`,
      `• *Total Selected Dishes:* ${selectedDishIds.length} items`,
      `• *Estimated Price Per Plate:* ₹${calculation.pricePerPlate} / plate`,
      calculation.totalAdditionalCharges > 0
        ? `• *Additional Counter Charges:* ₹${calculation.totalAdditionalCharges.toLocaleString("en-IN")}`
        : null,
      `• *Total Estimated Quote:* ₹${calculation.estimatedTotal.toLocaleString("en-IN")}`,
      ``,
      `*CUSTOMISED MENU:*${menuText}`,
      ``,
      `_Kindly confirm date availability and schedule a complimentary tasting._`,
    ].filter(Boolean);

    return `https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  // Category Icon helper
  const renderCategoryIcon = (iconName: string) => {
    const className = "w-4 h-4";
    switch (iconName) {
      case "Candy":
        return <Candy className={className} />;
      case "UtensilsCrossed":
        return <Utensils className={className} />;
      case "Soup":
        return <Soup className={className} />;
      case "Carrot":
        return <Carrot className={className} />;
      case "Wheat":
        return <Wheat className={className} />;
      case "Flame":
        return <Flame className={className} />;
      case "Coffee":
        return <Coffee className={className} />;
      case "Cookie":
        return <Cookie className={className} />;
      case "PartyPopper":
        return <PartyPopper className={className} />;
      case "Milk":
        return <Milk className={className} />;
      case "Droplet":
        return <Droplet className={className} />;
      case "Salad":
        return <Salad className={className} />;
      case "CircleDot":
        return <CircleDot className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="w-full bg-[#FAF7F0] text-[#1A2821] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* HERO TITLE & BRANDING                                     */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
            <span>AASWADYA Caterers • Custom Plate Experience</span>
          </div>

          <h1 className="font-display sm:font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-3">
            Customise Your Plate
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#B88E28] via-[#14482E] to-[#B88E28] mx-auto mb-4 rounded-full"></div>

          <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
            Handpick your favourite traditional dishes to build an authentic vegetarian feast for your celebration. Select dishes freely across all courses—we calculate your transparent final estimate at the end.
          </p>
        </div>

        {/* ========================================================= */}
        {/* STEP 1: GUEST COUNT SELECTOR (MIN 50 GUESTS)             */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E5D7C2] shadow-sm mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88E28] mb-1">
                <span>Step 1: Event Scale</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E28]"></span>
                <span className="text-[#14482E]">Min 50 Guests</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0D3522] flex items-center gap-2">
                <Users className="w-6 h-6 text-[#14482E]" />
                <span>How many guests are you hosting?</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Custom menu curation is available for celebrations of <strong>50 or more guests</strong>.
              </p>
            </div>

            {/* Quick Presets & Custom Input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Quick Preset Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-semibold text-gray-500 mr-1 hidden lg:inline">
                  Quick Select:
                </span>
                {GUEST_QUICK_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleGuestChange(preset)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      guestCount === preset
                        ? "bg-[#14482E] text-white shadow-sm scale-105"
                        : "bg-cream-100 text-[#0D3522] hover:bg-cream-200 border border-cream-300"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              {/* Precise Counter Input */}
              <div className="flex items-center border-2 border-[#D8C7A9] rounded-2xl bg-cream-50 p-1">
                <button
                  type="button"
                  onClick={() => handleGuestChange(Math.max(10, guestCount - 10))}
                  className="w-8 h-8 rounded-xl bg-white text-[#14482E] flex items-center justify-center hover:bg-cream-100 font-bold transition-all shadow-xs"
                  aria-label="Decrease guest count"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-3 flex items-center gap-1">
                  <input
                    type="number"
                    min={10}
                    step={10}
                    value={guestInputText}
                    onChange={handleCustomGuestInput}
                    className="w-16 text-center bg-transparent font-bold text-[#0D3522] text-sm focus:outline-none"
                    aria-label="Custom guest count"
                  />
                  <span className="text-xs text-gray-500 font-medium">guests</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleGuestChange(guestCount + 10)}
                  className="w-8 h-8 rounded-xl bg-white text-[#14482E] flex items-center justify-center hover:bg-cream-100 font-bold transition-all shadow-xs"
                  aria-label="Increase guest count"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Validation Alert for Guest Count < 50 */}
          {!isGuestCountValid && (
            <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex items-center gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
              <div>
                <strong>Custom plate builder requires a minimum of 50 guests.</strong> You currently have {guestCount} guests. Click <strong>50</strong> above or adjust your count to calculate pricing.
              </div>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* STEP 2: CATEGORY NAV + DISH SELECTION + LIVE PLATE        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8/12: Category Tabs, Search & Dish Grid */}
          <div className="lg:col-span-8 space-y-6">
            {/* Search Bar & Stats */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5D7C2] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search dishes (e.g. Gutti Vankaya, Biryani)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-8 py-2 rounded-xl bg-cream-50 border border-[#D8C7A9] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#14482E] text-[#0D3522]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs">
                <span className="text-[#3E5246]">
                  <strong>{selectedDishIds.length}</strong> dishes on your plate
                </span>
                <span className="text-gray-300">•</span>
                <button
                  type="button"
                  onClick={handleClearAllPlate}
                  className="text-xs text-red-600 hover:text-red-700 font-semibold transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Plate</span>
                </button>
              </div>
            </div>

            {/* Horizontal Category Nav Chips */}
            {!searchQuery && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                {DISH_CATEGORIES.map((cat) => {
                  const selectedCountInCat = CUSTOM_DISHES.filter(
                    (d) => d.categoryId === cat.id && selectedDishIds.includes(d.id)
                  ).length;
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                        isActive
                          ? "bg-[#14482E] text-white shadow-md scale-105"
                          : "bg-white text-[#2C3E34] hover:bg-cream-100 border border-[#E5D7C2]"
                      }`}
                    >
                      <span>{renderCategoryIcon(cat.iconName)}</span>
                      <span>{cat.name}</span>
                      {selectedCountInCat > 0 && (
                        <span
                          className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                            isActive
                              ? "bg-[#B88E28] text-white"
                              : "bg-[#14482E] text-white"
                          }`}
                        >
                          {selectedCountInCat}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Active Category Header */}
            {!searchQuery && (
              <div className="bg-gradient-to-r from-[#FCFAF6] to-[#F5EFEB] p-5 rounded-2xl border border-[#E5D7C2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0D3522] flex items-center gap-2">
                    {renderCategoryIcon(
                      DISH_CATEGORIES.find((c) => c.id === activeCategoryId)?.iconName || ""
                    )}
                    <span>
                      {DISH_CATEGORIES.find((c) => c.id === activeCategoryId)?.name}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {DISH_CATEGORIES.find((c) => c.id === activeCategoryId)?.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSelectAllInCategory(activeCategoryId)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-[#14482E]/40 text-[#14482E] hover:bg-[#14482E]/5 font-semibold transition-all"
                  >
                    Select All
                  </button>
                  <button
                    type="button"
                    onClick={() => handleClearCategory(activeCategoryId)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold transition-all"
                  >
                    Clear Category
                  </button>
                </div>
              </div>
            )}

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {displayedDishes.map((dish) => {
                const isSelected = selectedDishIds.includes(dish.id);

                return (
                  <div
                    key={dish.id}
                    onClick={() => handleToggleDish(dish.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between group select-none relative ${
                      isSelected
                        ? "bg-[#F2F7F4] border-[#14482E] shadow-sm"
                        : "bg-white border-[#E8DFC8] hover:border-[#B88E28]/70 hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Dish Top Bar: Name & Custom Checkbox */}
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <h4
                            className={`font-serif text-base font-bold transition-colors ${
                              isSelected ? "text-[#0D3522]" : "text-[#1A2821] group-hover:text-[#14482E]"
                            }`}
                          >
                            {dish.name}
                          </h4>
                        </div>

                        {/* Custom Animated Checkbox */}
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                            isSelected
                              ? "bg-[#14482E] text-white shadow-xs"
                              : "border-2 border-gray-300 group-hover:border-[#14482E]"
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                      </div>

                      {/* Description */}
                      {dish.description && (
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {dish.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Badges - STRICT COMPLIANCE: NO PRICES SHOWN HERE */}
                    <div className="flex items-center justify-between pt-2 border-t border-cream-200/80">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {dish.isPopular && (
                          <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                            ★ Popular
                          </span>
                        )}
                        {dish.isPremium && (
                          <span className="text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                            ✦ Special
                          </span>
                        )}
                        {dish.flatSetupCharge && (
                          <span className="text-[10px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-300">
                            Live Station
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-xs font-semibold ${
                          isSelected ? "text-[#14482E]" : "text-gray-400 group-hover:text-[#B88E28]"
                        }`}
                      >
                        {isSelected ? "Added to Plate" : "+ Add"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {displayedDishes.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#D8C7A9]">
                <p className="text-sm text-gray-500">
                  No dishes found matching &quot;{searchQuery}&quot;. Try clearing your search.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-3 text-xs font-bold text-[#14482E] underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* RIGHT 4/12: Sticky Live Menu Summary Panel */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border-2 border-[#E5D7C2] shadow-lg">
              {/* Summary Header */}
              <div className="flex items-center justify-between pb-4 border-b border-cream-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B88E28] block">
                    Your Curated Feast
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0D3522]">
                    Selected Menu
                  </h3>
                </div>
                <div className="text-right">
                  <span className="w-8 h-8 rounded-full bg-[#14482E] text-white flex items-center justify-center font-bold text-sm">
                    {selectedDishIds.length}
                  </span>
                </div>
              </div>

              {/* Guest Count Indicator */}
              <div className="py-3 px-3.5 my-4 bg-cream-50 rounded-xl border border-cream-200 flex items-center justify-between text-xs">
                <span className="text-gray-600 flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-[#14482E]" />
                  <span>Planning for:</span>
                </span>
                <span className="font-bold text-[#0D3522]">
                  {guestCount} guests
                </span>
              </div>

              {/* List of Dishes Grouped by Category */}
              <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3.5 my-4 divide-y divide-cream-100">
                {Array.from(categorizedSelections.entries()).map(([catName, dishes]) => (
                  <div key={catName} className="pt-2.5 first:pt-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#14482E] uppercase tracking-wider">
                        {catName} ({dishes.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dishes.map((dish) => (
                        <span
                          key={dish.id}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cream-100 text-[#0D3522] text-xs font-medium border border-cream-200 group"
                        >
                          <span>{dish.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleDish(dish.id);
                            }}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                            aria-label={`Remove ${dish.name}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {selectedDishIds.length === 0 && (
                  <div className="text-center py-8 text-xs text-gray-500">
                    Your plate is empty. Pick dishes from the left to start customising!
                  </div>
                )}
              </div>

              {/* Strict Notice: No prices shown until finished customising */}
              <div className="p-3 rounded-xl bg-cream-100/70 border border-cream-300 text-[11px] text-[#4A5D52] mb-4 text-center">
                🔒 Individual dish costs are aggregated into a transparent per-plate price calculation on the next step.
              </div>

              {/* Big Action Button: View Final Price */}
              <button
                type="button"
                onClick={handleOpenQuotation}
                disabled={!isGuestCountValid || selectedDishIds.length === 0}
                className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  !isGuestCountValid || selectedDishIds.length === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-[#14482E] hover:bg-[#0D3522] text-white hover:scale-[1.02]"
                }`}
              >
                <span>View Final Price & Summary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE BOTTOM FLOATING ACTION BAR                         */}
        {/* ========================================================= */}
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D8C7A9] p-4 lg:hidden shadow-2xl flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 block">
              {guestCount} Guests • {selectedDishIds.length} Dishes
            </span>
            <span className="font-serif font-bold text-sm text-[#0D3522]">
              Plate Configured
            </span>
          </div>

          <button
            type="button"
            onClick={handleOpenQuotation}
            disabled={!isGuestCountValid || selectedDishIds.length === 0}
            className={`py-2.5 px-5 rounded-xl font-bold text-xs shadow-md flex items-center gap-1.5 ${
              !isGuestCountValid || selectedDishIds.length === 0
                ? "bg-gray-200 text-gray-400"
                : "bg-[#14482E] text-white"
            }`}
          >
            <span>View Final Price</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* STEP 4: FINAL PRICE & COMPLETE ENQUIRY MODAL / REVIEW     */}
        {/* ========================================================= */}
        {showSummaryModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-4xl w-full border-2 border-[#DBC172] shadow-2xl overflow-hidden my-6">
              {/* Modal Top Bar */}
              <div className="bg-gradient-to-r from-[#0D3522] via-[#14482E] to-[#0A2618] text-[#FAF7F0] p-6 sm:p-8 relative">
                <button
                  type="button"
                  onClick={() => setShowSummaryModal(false)}
                  className="absolute right-5 top-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                  aria-label="Close quote modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 font-bold mb-2">
                  <Sparkles className="w-4 h-4 text-[#B88E28]" />
                  <span>AASWADYA Caterers • Quotation Estimate</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Your Customised Catering Quote
                </h3>
                <p className="text-xs sm:text-sm text-cream-200 max-w-xl">
                  Prepared for <strong>{guestCount} guests</strong> based on your handpicked selection of <strong>{selectedDishIds.length} authentic dishes</strong>.
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* 1. Final Price Highlight Box */}
                <div className="bg-gradient-to-br from-[#FCFAF5] to-[#F5EFEB] rounded-2xl p-6 border-2 border-[#DBC172] shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-cream-300">
                    {/* Guest Count */}
                    <div className="sm:pr-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        Catering Scale
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3522]">
                        {guestCount}
                      </span>
                      <span className="text-xs text-gray-600 block mt-0.5">Guests Selected</span>
                    </div>

                    {/* Final Price Per Plate */}
                    <div className="pt-4 sm:pt-0 sm:px-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        Final Price Per Plate
                      </span>
                      <div className="flex items-baseline justify-center sm:justify-start">
                        <span className="font-sans font-bold text-xl text-[#14482E] mr-0.5">₹</span>
                        <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#14482E] tabular-nums">
                          {calculation.pricePerPlate}
                        </span>
                        <span className="text-xs text-gray-500 font-medium ml-1">/ plate</span>
                      </div>
                      <span className="text-[11px] text-emerald-800 font-medium block mt-0.5">
                        Pure Ghee & All Accompaniments Included
                      </span>
                    </div>

                    {/* Total Estimated Price */}
                    <div className="pt-4 sm:pt-0 sm:pl-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                        Total Estimated Price
                      </span>
                      <div className="flex items-baseline justify-center sm:justify-start">
                        <span className="font-sans font-bold text-xl text-[#7A5618] mr-0.5">₹</span>
                        <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#7A5618] tabular-nums">
                          {calculation.estimatedTotal.toLocaleString("en-IN")}
                        </span>
                      </div>
                      {calculation.totalAdditionalCharges > 0 ? (
                        <span className="text-[11px] text-purple-800 font-medium block mt-0.5">
                          Includes ₹{calculation.totalAdditionalCharges.toLocaleString("en-IN")} Live Setup Charges
                        </span>
                      ) : (
                        <span className="text-[11px] text-gray-500 block mt-0.5">
                          Indicative estimated total
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Additional charges list if any */}
                  {calculation.additionalCharges.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-cream-300 text-xs text-gray-700 space-y-1">
                      <span className="font-bold uppercase tracking-wider text-[#0D3522] block mb-1">
                        Live Counters & Special Setups:
                      </span>
                      {calculation.additionalCharges.map((chg) => (
                        <div key={chg.name} className="flex justify-between">
                          <span>• {chg.name}</span>
                          <span className="font-bold">₹{chg.amount.toLocaleString("en-IN")}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Complete Selected Menu (Print & View) */}
                <div id="printable-quote" className="space-y-4">
                  <div className="flex items-center justify-between border-b border-cream-200 pb-2">
                    <h4 className="font-serif text-lg font-bold text-[#0D3522] flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-[#B88E28]" />
                      <span>Complete Selected Menu ({selectedDishIds.length} Items)</span>
                    </h4>
                    <span className="text-xs text-gray-500">AASWADYA Pure Veg Kitchen</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Array.from(categorizedSelections.entries()).map(([catName, dishes]) => (
                      <div
                        key={catName}
                        className="p-3.5 rounded-xl bg-cream-50/70 border border-cream-200 text-xs"
                      >
                        <span className="font-bold text-[#14482E] uppercase tracking-wider block mb-1.5">
                          {catName}
                        </span>
                        <ul className="space-y-1 text-gray-700">
                          {dishes.map((dish) => (
                            <li key={dish.id} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#14482E] mt-1.5 shrink-0"></span>
                              <span className="font-medium text-[#1A2821]">{dish.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Customer Enquiry Form */}
                <div className="bg-cream-50 rounded-2xl p-6 border border-cream-200 space-y-4">
                  <h4 className="font-serif text-base font-bold text-[#0D3522]">
                    Bookings & Enquiry Details
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Varma"
                          value={customer.name}
                          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={customer.phone}
                          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Event Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="date"
                          value={customer.eventDate}
                          onChange={(e) => setCustomer({ ...customer, eventDate: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Event Type
                      </label>
                      <select
                        value={customer.eventType}
                        onChange={(e) => setCustomer({ ...customer, eventType: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                      >
                        <option value="Wedding / Engagement">Wedding / Engagement Ceremony</option>
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Birthday Party">Birthday Party & Milestone</option>
                        <option value="Anniversary Celebration">Anniversary Celebration</option>
                        <option value="House Party Celebration">House Party Celebration</option>
                        <option value="Corporate Event">Corporate Lunch / Dinner</option>
                        <option value="Housewarming (Gruhapravesam)">Housewarming (Gruhapravesam)</option>
                        <option value="Family Function">Family Function / Shashtipoorti</option>
                        <option value="Festive / Religious Gathering">Festive / Religious Pooja</option>
                        <option value="Other Celebration">Other Celebration</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Event Location / Area in Hyderabad
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="e.g. Madhapur, Kukatpally, Secunderabad, Gachibowli"
                          value={customer.location}
                          onChange={(e) => setCustomer({ ...customer, location: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-bold text-gray-700 uppercase mb-1">
                        Special Requests / Dietary Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Mild spice for kids, Satvik (no onion/garlic) options, specific time of serving..."
                        value={customer.specialRequests}
                        onChange={(e) =>
                          setCustomer({ ...customer, specialRequests: e.target.value })
                        }
                        className="w-full p-2.5 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E]"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Notice: No fake server submission */}
                <p className="text-[11px] text-gray-500 italic text-center">
                  *This tool provides instant frontend estimation. Click the button below to share these exact dishes directly with our team on WhatsApp for date lock-in and complimentary food tasting.
                </p>
              </div>

              {/* Modal Footer Actions - THE 4 SPECIFIED BUTTONS */}
              <div className="p-6 bg-cream-100 border-t border-[#E5D7C2] flex flex-wrap items-center justify-between gap-3">
                {/* Button 1: Edit Menu */}
                <button
                  type="button"
                  onClick={() => setShowSummaryModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-[#14482E] text-[#14482E] hover:bg-[#14482E]/5 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Menu</span>
                </button>

                <div className="flex items-center gap-2.5 flex-wrap">
                  {/* Button 2: Print or Save Quotation */}
                  <button
                    type="button"
                    onClick={handlePrintQuotation}
                    className="px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A9] hover:bg-gray-50 text-[#0D3522] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <Printer className="w-4 h-4 text-[#B88E28]" />
                    <span>Print or Save Quotation</span>
                  </button>

                  {/* Button 3: Request Quote on WhatsApp */}
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Request Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
