"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUp, Heart } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#092215] text-[#FAF7F0] pt-14 pb-8 border-t-2 border-[#B88E28]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cream-100/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-16 w-56 bg-cream-50 p-2 rounded-xl border border-gold-400/30">
              <Image
                src="/images/logo.png"
                alt="AASWADYA Caterers - Tradition Meets Taste"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="font-display italic text-gold-300 text-sm">
              “Tradition Meets Taste” — Serving Happiness to Every Plate
            </p>
            <p className="text-cream-200/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Authentic vegetarian catering service based in Hyderabad, Telangana. Handcrafted with traditional Telugu culinary heritage, pure ghee, and disciplined cleanliness for all your auspicious occasions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              100% Pure Vegetarian Kitchen
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-200/90">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  About AASWADYA
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Catering Services
                </a>
              </li>
              <li>
                <a href="#menus" className="hover:text-gold-300 transition-colors">
                  Basic Veg Menu (₹229)
                </a>
              </li>
              <li>
                <a href="#menus" className="hover:text-gold-300 transition-colors">
                  Regular Veg Menu (₹299)
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#booking-enquiry" className="hover:text-gold-300 transition-colors">
                  Book Catering Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hyderabad Service Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Hyderabad Catering Desk
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-cream-200/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-mono">{BUSINESS_CONFIG.displayPhone}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-cream-300/60 leading-tight">
                Catering to all regions across Hyderabad, Secunderabad, Cyberabad, and surrounding districts.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/70">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. Hyderabad, Telangana.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
