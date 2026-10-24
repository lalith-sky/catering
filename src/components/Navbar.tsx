"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, Utensils, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/cateringData";

interface NavbarProps {
  onSelectPackage?: (packageId: "basic" | "regular") => void;
}

export default function Navbar({ onSelectPackage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Occasions", href: "#celebrations" },
    { name: "Menu Packages", href: "#menus" },
    { name: "Live Counters", href: "#live-counters" },
    { name: "Customise Plate", href: "/customise-plate", isHighlight: true },
    { name: "Catering Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact & Enquiry", href: "#booking-enquiry" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Strip */}
      <div className="bg-[#0A2618] text-[#F3EAD8] text-xs py-2 px-4 border-b border-[#B88E28]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              100% Pure Vegetarian Catering
            </span>
            <span className="hidden md:inline text-gold-400/50">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-cream-200">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              {BUSINESS_CONFIG.location}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-cream-200">
            <a
              href={`tel:${BUSINESS_CONFIG.telPhone}`}
              className="flex items-center gap-1 hover:text-gold-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_CONFIG.displayPhone}</span>
            </a>
            <span className="hidden sm:inline text-gold-400/50">•</span>
            <a
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="hidden sm:flex items-center gap-1 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_CONFIG.email}</span>
            </a>
            <span className="text-gold-400/50">•</span>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsAppPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F0]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#B88E28]/20"
            : "bg-[#FAF7F0] py-3.5 border-b border-[#E9DDC9]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand with Official Clean Crop */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 sm:h-16 w-44 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="AASWADYA Caterers - Tradition Meets Taste"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 flex items-center gap-1.5 ${
                  link.isHighlight
                    ? "text-[#8E6515] font-bold"
                    : "text-[#1A3326] hover:text-[#B88E28]"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B88E28] hover:after:w-full after:transition-all`}
              >
                <span>{link.name}</span>
                {link.isHighlight && (
                  <span className="text-[9px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#B88E28] to-[#9C731C] text-white px-1.5 py-0.5 rounded-full shadow-xs">
                    Build
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#menus"
              onClick={(e) => handleNavClick(e, "#menus")}
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-[#14482E] text-[#14482E] hover:bg-[#14482E] hover:text-[#FAF7F0] transition-all flex items-center gap-1.5"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>View Menus</span>
            </a>
            <a
              href="#booking-enquiry"
              onClick={(e) => handleNavClick(e, "#booking-enquiry")}
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-[#B88E28] to-[#9C731C] text-white hover:from-[#9C731C] hover:to-[#7A5618] transition-all shadow-sm hover:shadow flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#14482E] hover:bg-cream-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F0] border-b border-[#B88E28]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-cream-300">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E28]">
                AASWADYA Menu & Navigation
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                Pure Veg
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#14482E] hover:text-[#B88E28] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-cream-300 flex flex-col gap-2.5">
              <a
                href="#menus"
                onClick={(e) => handleNavClick(e, "#menus")}
                className="w-full text-center text-sm font-semibold py-2.5 rounded-lg border border-[#14482E] text-[#14482E]"
              >
                Explore Menu Packages
              </a>
              <a
                href="#booking-enquiry"
                onClick={(e) => handleNavClick(e, "#booking-enquiry")}
                className="w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-[#14482E] text-white"
              >
                Book Catering Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
