"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send,
  MessageCircle,
  AlertCircle,
  FileText,
} from "lucide-react";
import { BUSINESS_CONFIG, MENU_PACKAGES } from "@/data/cateringData";

interface BookingFormProps {
  selectedPackageId: "basic" | "regular";
  initialGuestCount?: number;
  onPackageChange: (pkgId: "basic" | "regular") => void;
  selectedEventType?: string;
}

interface FormData {
  customerName: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  eventDate: string;
  numberOfGuests: number;
  selectedPackage: "basic" | "regular";
  eventLocation: string;
  specialRequests: string;
}

export default function BookingEnquiryForm({
  selectedPackageId,
  initialGuestCount = 100,
  onPackageChange,
  selectedEventType,
}: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    phoneNumber: "",
    email: "",
    eventType: selectedEventType || "Wedding / Engagement",
    eventDate: "",
    numberOfGuests: initialGuestCount,
    selectedPackage: selectedPackageId,
    eventLocation: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionReference, setSubmissionReference] = useState<string>("");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage: selectedPackageId,
      numberOfGuests: initialGuestCount || prev.numberOfGuests,
      ...(selectedEventType ? { eventType: selectedEventType } : {}),
    }));
  }, [selectedPackageId, initialGuestCount, selectedEventType]);

  const currentPkg =
    MENU_PACKAGES.find((p) => p.id === formData.selectedPackage) || MENU_PACKAGES[0];
  const estimatedTotal = currentPkg.pricePerPlate * (formData.numberOfGuests || 0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Please enter your name.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your contact phone number.";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Please choose the event date.";
    }

    if (!formData.numberOfGuests || formData.numberOfGuests < 10) {
      newErrors.numberOfGuests = "Please enter a valid guest count (min 10).";
    }

    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = "Please specify the event venue or area in Hyderabad.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Generate reference code
    const refCode = `AAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionReference(refCode);
    setSubmitted(true);

    // Trigger joyous confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#14482E", "#B88E28", "#D4AF37", "#FFFFFF"],
      });
    } catch {
      // safe fallback
    }
  };

  // Build clean WhatsApp message URL
  const buildWhatsAppUrl = () => {
    const pkgName =
      formData.selectedPackage === "basic"
        ? `Basic Veg Menu (₹${MENU_PACKAGES[0].pricePerPlate}/plate)`
        : `Regular Veg Menu (₹${MENU_PACKAGES[1].pricePerPlate}/plate)`;
    const message = `Hello AASWADYA Caterers! I would like to enquire about vegetarian catering for my upcoming event.

📋 *Booking Details:*
• *Customer Name:* ${formData.customerName || "Customer"}
• *Phone:* ${formData.phoneNumber || "Not provided"}
• *Event Type:* ${formData.eventType}
• *Event Date:* ${formData.eventDate || "Date TBD"}
• *Guest Count:* ${formData.numberOfGuests} guests
• *Selected Package:* ${pkgName}
• *Estimated Total:* ₹${estimatedTotal.toLocaleString("en-IN")} (indicative)
• *Location / Area:* ${formData.eventLocation || "Hyderabad"}
${formData.specialRequests ? `• *Special Requests:* ${formData.specialRequests}` : ""}

Please share the detailed quote and availability. Thank you!`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="booking-enquiry" className="py-16 lg:py-24 bg-[#FAF7F0] border-b border-[#E8DCC6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
            <span>Instant Quote & Availability</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-3">
            Book Your Catering Enquiry
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#43574C]">
            Tell us about your celebration in Hyderabad. We will review your guest count and menu preferences to provide an authentic, stress-free dining experience.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E3D4BA] shadow-xl relative overflow-hidden">
          {submitted ? (
            /* Success State */
            <div className="text-center py-10 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-emerald-700" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cream-100 text-[#14482E] border border-cream-200">
                  Enquiry Reference: {submissionReference}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3522] mt-3 mb-2">
                  Thank You, {formData.customerName}!
                </h3>
                <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto">
                  Your catering enquiry for the{" "}
                  <strong>
                    {formData.selectedPackage === "basic" ? "Basic Veg Menu" : "Regular Veg Menu"}
                  </strong>{" "}
                  has been noted successfully.
                </p>
              </div>

              {/* Summary Box */}
              <div className="max-w-md mx-auto bg-cream-50 rounded-2xl p-5 border border-cream-200 text-left text-xs sm:text-sm space-y-2 text-[#243B30]">
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-gray-600">Event Date:</span>
                  <span className="font-bold">{formData.eventDate}</span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-gray-600">Guest Count:</span>
                  <span className="font-bold">{formData.numberOfGuests} guests</span>
                </div>
                <div className="flex justify-between border-b border-cream-200 pb-2">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-bold">{formData.eventLocation}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-600">Indicative Estimate:</span>
                  <div className="flex items-baseline">
                    <span className="font-sans font-bold text-sm text-[#14482E] mr-0.5">₹</span>
                    <span className="font-sans font-bold text-base text-[#14482E] tabular-nums">
                      {estimatedTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct trigger */}
              <div className="max-w-md mx-auto pt-2 space-y-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send These Details on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-gray-600 hover:text-[#14482E] transition-colors"
                >
                  Edit or Submit Another Enquiry
                </button>
              </div>

              <div className="text-[11px] text-gray-600 max-w-sm mx-auto bg-cream-100 p-2.5 rounded-lg border border-cream-200">
                Notice: Frontend enquiry confirmed. Click the WhatsApp button above or call our team to finalize booking dates and tastings.
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dynamic Package Price & Total Indicator */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FDFBF7] to-[#F7EFE1] border-2 border-[#B88E28]/40 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8E6515] block">
                    Selected Package
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#0D3522]">
                      {currentPkg.name}
                    </span>
                    <span className="text-sm font-bold text-[#8E6515] bg-gold-100 px-2.5 py-0.5 rounded-full border border-gold-300 font-sans tabular-nums">
                      ₹{currentPkg.pricePerPlate}/plate
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 block mt-1">
                    {formData.selectedPackage === "basic"
                      ? "1 Sweet • 1 Curry Category Choice • Pickle Included"
                      : "1 Sweet • Both Wet & Veg Curries • Roti & Salad"}
                  </span>
                </div>

                <div className="sm:text-right bg-white px-4 py-2.5 rounded-xl border border-cream-300 w-full sm:w-auto">
                  <span className="text-[11px] font-semibold text-gray-500 block uppercase">
                    Indicative Estimate ({formData.numberOfGuests || 0} guests)
                  </span>
                  <div className="flex items-baseline sm:justify-end">
                    <span className="font-sans font-bold text-lg text-[#14482E] mr-0.5 leading-none select-none">
                      ₹
                    </span>
                    <span className="font-sans text-2xl font-extrabold tracking-tight text-[#14482E] tabular-nums leading-none">
                      {estimatedTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* 1. Customer Name */}
                <div>
                  <label htmlFor="customerName" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="customerName"
                      type="text"
                      placeholder="e.g. Ramesh Varma"
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({ ...formData, customerName: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all ${
                        errors.customerName ? "border-red-400 bg-red-50/20" : "border-[#D8C7A9]"
                      }`}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.customerName}
                    </p>
                  )}
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all ${
                        errors.phoneNumber ? "border-red-400 bg-red-50/20" : "border-[#D8C7A9]"
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* 3. Email Address (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Email Address <span className="text-xs text-gray-500 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all"
                    />
                  </div>
                </div>

                {/* 4. Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all"
                  >
                    <option value="Wedding / Engagement">Wedding / Engagement Ceremony</option>
                    <option value="Family Function">Family Function / Shashtipoorti</option>
                    <option value="Birthday Party">Birthday Party & Milestone</option>
                    <option value="Housewarming (Gruhapravesam)">Housewarming (Gruhapravesam)</option>
                    <option value="Festive / Religious Gathering">Festive / Religious Pooja</option>
                    <option value="Corporate Event">Corporate Lunch / Dinner</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>

                {/* 5. Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Event Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all ${
                        errors.eventDate ? "border-red-400 bg-red-50/20" : "border-[#D8C7A9]"
                      }`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.eventDate}
                    </p>
                  )}
                </div>

                {/* 6. Number of Guests */}
                <div>
                  <label htmlFor="numberOfGuests" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      id="numberOfGuests"
                      type="number"
                      min={10}
                      max={10000}
                      step={10}
                      value={formData.numberOfGuests}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          numberOfGuests: Math.max(0, parseInt(e.target.value) || 0),
                        })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all ${
                        errors.numberOfGuests ? "border-red-400 bg-red-50/20" : "border-[#D8C7A9]"
                      }`}
                    />
                  </div>
                  {errors.numberOfGuests && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.numberOfGuests}
                    </p>
                  )}
                </div>

                {/* 7. Selected Package (Basic or Regular) */}
                <div>
                  <label htmlFor="packageSelect" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Selected Package <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="packageSelect"
                    value={formData.selectedPackage}
                    onChange={(e) => {
                      const val = e.target.value as "basic" | "regular";
                      setFormData({ ...formData, selectedPackage: val });
                      onPackageChange(val);
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] font-semibold focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all"
                  >
                    <option value="basic">BASIC VEG MENU — ₹{MENU_PACKAGES[0].pricePerPlate} / plate (1 Sweet, 1 Curry Choice, Pickle)</option>
                    <option value="regular">REGULAR VEG MENU — ₹{MENU_PACKAGES[1].pricePerPlate} / plate (1 Sweet, 2 Curries, Roti, Salad)</option>
                  </select>
                </div>

                {/* 8. Event Location */}
                <div>
                  <label htmlFor="eventLocation" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                    Event Location / Area <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      id="eventLocation"
                      type="text"
                      placeholder="e.g. Kukatpally / Madhapur / Secunderabad"
                      value={formData.eventLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, eventLocation: e.target.value })
                      }
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all ${
                        errors.eventLocation ? "border-red-400 bg-red-50/20" : "border-[#D8C7A9]"
                      }`}
                    />
                  </div>
                  {errors.eventLocation && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.eventLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* 9. Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs font-bold uppercase tracking-wider text-[#0D3522] mb-1.5">
                  Special Requests / Menu Notes <span className="text-xs text-gray-500 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="specialRequests"
                    rows={3}
                    placeholder="e.g. Specific choice for wet curry or flavoured rice, dietary preferences (mild spice, satvik, jain options), or venue timing."
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({ ...formData, specialRequests: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#D8C7A9] text-sm text-[#0D3522] focus:outline-none focus:ring-2 focus:ring-[#14482E] transition-all"
                  ></textarea>
                </div>
              </div>

              {/* Terms note */}
              <p className="text-xs text-gray-600 italic">
                * Note: The indicative total (₹{estimatedTotal.toLocaleString("en-IN")}) is calculated as ₹{currentPkg.pricePerPlate} × {formData.numberOfGuests || 0} guests. The final quotation depends on confirmed menu selections, service requirements, and event logistics.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#14482E] hover:bg-[#0D3522] text-[#FAF7F0] font-bold text-base shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>Submit Catering Enquiry</span>
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#128C7E] hover:bg-[#075E54] text-white font-bold text-sm shadow transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
