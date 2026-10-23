import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomPlateBuilder from "@/components/custom-plate/CustomPlateBuilder";

export const metadata: Metadata = {
  title: "Customise Your Plate | AASWADYA Caterers Hyderabad",
  description:
    "Build your own custom vegetarian catering plate with AASWADYA Caterers. Select your favourite sweets, biryanis, wet curries, fries, breads, and live counters for events in Hyderabad.",
};

export default function CustomisePlatePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A2821] selection:bg-[#14482E] selection:text-[#FAF7F0]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Custom Plate Interactive Builder */}
      <div className="flex-1">
        <CustomPlateBuilder />
      </div>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </main>
  );
}
