"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OccasionsSection, { OccasionItem } from "@/components/OccasionsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MenuPackagesSection from "@/components/MenuPackagesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BookingEnquiryForm from "@/components/BookingEnquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [selectedPackageId, setSelectedPackageId] = useState<"basic" | "regular">("regular");
  const [guestCount, setGuestCount] = useState<number>(100);
  const [selectedEventType, setSelectedEventType] = useState<string>("Wedding / Engagement");

  const handleSelectPackage = (packageId: "basic" | "regular", count?: number) => {
    setSelectedPackageId(packageId);
    if (count) {
      setGuestCount(count);
    }
  };

  const handleSelectOccasion = (occasion: OccasionItem) => {
    setSelectedEventType(occasion.formEventType);
    if (occasion.recommendedPackage) {
      setSelectedPackageId(occasion.recommendedPackage);
    }
  };

  const handleSelectService = (serviceName: string) => {
    if (serviceName.includes("Wedding") || serviceName.includes("Engagement")) {
      setSelectedEventType("Wedding / Engagement");
    } else if (serviceName.includes("Birthday")) {
      setSelectedEventType("Birthday Party");
    } else if (serviceName.includes("Housewarming")) {
      setSelectedEventType("Housewarming (Gruhapravesam)");
    } else if (serviceName.includes("Corporate")) {
      setSelectedEventType("Corporate Event");
    } else if (serviceName.includes("Puja") || serviceName.includes("Religious") || serviceName.includes("Festive")) {
      setSelectedEventType("Festive / Religious Gathering");
    } else {
      setSelectedEventType("Family Function");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A2821] selection:bg-[#14482E] selection:text-[#FAF7F0]">
      {/* 1. Navbar */}
      <Navbar onSelectPackage={handleSelectPackage} />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. What Are You Celebrating? (Tailored Experiences) */}
      <OccasionsSection
        selectedEventType={selectedEventType}
        onSelectOccasion={handleSelectOccasion}
      />

      {/* 4. About Us Section & Visiting Card Showcase */}
      <AboutSection />

      {/* 4. Catering Services */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. Menu Packages (Basic & Regular only) */}
      <MenuPackagesSection onSelectPackage={handleSelectPackage} />

      {/* 6. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 7. Booking Enquiry Form */}
      <BookingEnquiryForm
        selectedPackageId={selectedPackageId}
        initialGuestCount={guestCount}
        selectedEventType={selectedEventType}
        onPackageChange={setSelectedPackageId}
      />

      {/* 8. Contact Section */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </main>
  );
}
