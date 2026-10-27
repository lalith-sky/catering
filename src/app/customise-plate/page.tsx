import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomPlateBuilder from "@/components/custom-plate/CustomPlateBuilder";

export const metadata: Metadata = {
  title: "Customise Your Plate & Quotation | AASWADYA Caterers Hyderabad",
  description:
    "Build your custom pure vegetarian catering menu with AASWADYA Caterers. Select your favourite dishes and get an instant quotation for events in Hyderabad.",
  alternates: {
    canonical: "https://catering-one-self.vercel.app/customise-plate",
  },
  openGraph: {
    title: "Customise Your Plate & Quotation | AASWADYA Caterers Hyderabad",
    description:
      "Build your custom pure vegetarian catering menu with AASWADYA Caterers. Select your favourite dishes and get an instant quotation for events in Hyderabad.",
    url: "https://catering-one-self.vercel.app/customise-plate",
    siteName: "AASWADYA Caterers",
    locale: "en_IN",
    type: "website",
  },
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
