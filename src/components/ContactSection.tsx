"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Sparkles,
  Send,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

export default function ContactSection() {
  const whatsAppDirectUrl = `https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}?text=${encodeURIComponent(
    "Hello AASWADYA Caterers! I would like to enquire about your vegetarian catering packages for an upcoming event in Hyderabad."
  )}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-[#FAF7F0] via-[#F4EDE0] to-[#EFE4D2] border-b border-[#E0D3BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-[#B88E28]/40 text-[#8E6515] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3522] mb-3">
            Contact AASWADYA Caterers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#B88E28] to-[#14482E] mx-auto mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base text-[#3E5247]">
            Planning a celebration in Hyderabad? We are here to answer your questions, customize menu choices, and arrange catering details.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#E5D7BF] shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Brand & Info */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="relative h-14 w-52 mb-3">
                  <Image
                    src="/images/logo.png"
                    alt="AASWADYA Caterers Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <p className="font-serif text-lg text-[#0D3522] font-bold">
                  {BUSINESS_CONFIG.name}
                </p>
                <p className="font-display italic text-[#8E6515] text-sm">
                  “{BUSINESS_CONFIG.tagline}” • {BUSINESS_CONFIG.subTagline}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2 text-sm text-[#243B30]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center shrink-0 text-[#14482E]">
                    <MapPin className="w-4 h-4 text-[#14482E]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Operating Location
                    </span>
                    <span className="font-semibold text-gray-900">{BUSINESS_CONFIG.location}</span>
                    <span className="block text-xs text-gray-600 mt-0.5">
                      Serving Hyderabad, Secunderabad & Greater Hyderabad
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center shrink-0 text-[#14482E]">
                    <Mail className="w-4 h-4 text-[#14482E]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.email}`}
                      className="font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center shrink-0 text-[#14482E]">
                    <Phone className="w-4 h-4 text-[#14482E]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                      Phone & WhatsApp
                    </span>
                    <span className="font-semibold text-gray-900 font-mono">
                      {BUSINESS_CONFIG.displayPhone}
                    </span>
                    <span className="block text-[11px] text-emerald-800 font-medium mt-0.5">
                      Direct Catering Desk & WhatsApp Orders
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Action Buttons */}
            <div className="md:col-span-5 bg-[#FAF7F0] p-6 rounded-2xl border border-[#E6D8C2] flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3522] block text-center mb-1">
                Direct Contact Channels
              </span>

              {/* 1. WhatsApp Button */}
              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* 2. Email Button */}
              <a
                href={`mailto:${BUSINESS_CONFIG.email}?subject=Catering%20Enquiry%20-%20AASWADYA%20Caterers`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#14482E] text-[#14482E] hover:bg-cream-200 font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              {/* 3. Call Button */}
              <a
                href={`tel:${BUSINESS_CONFIG.telPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#B88E28] text-[#8E6515] hover:bg-gold-50 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Catering Desk</span>
              </a>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-gray-600 block">
                  Catering Consultation Hours: 8:00 AM – 9:00 PM IST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
