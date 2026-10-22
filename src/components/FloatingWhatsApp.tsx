"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `Hello AASWADYA Caterers! I would like to inquire about vegetarian catering packages in Hyderabad for an upcoming event. Please share availability and menu details.`;

  const whatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#0D3522] py-2 px-3.5 rounded-2xl shadow-xl border border-[#B88E28]/40 text-xs font-semibold animate-in slide-in-from-bottom-2 duration-300">
          <span>👋 Chat with AASWADYA Caterers</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-700 p-0.5 rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AASWADYA Caterers on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white"></span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
