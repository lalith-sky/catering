import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AASWADYA Caterers Hyderabad | Tradition Meets Taste | Pure Veg Catering",
  description:
    "AASWADYA Caterers provides authentic, high-quality vegetarian catering services in Hyderabad & Telangana. Specialising in weddings, engagements, family functions, and celebrations with authentic flavours and disciplined service.",
  keywords: [
    "AASWADYA Caterers Hyderabad",
    "Vegetarian Caterers Hyderabad",
    "Veg Catering Services Hyderabad",
    "Telugu Wedding Catering",
    "Hyderabad Brahmin Catering",
    "Traditional Veg Food Hyderabad",
    "Gutti Vankaya Catering Hyderabad",
    "Tradition Meets Taste",
    "Veg Menu Packages Hyderabad",
  ],
  authors: [{ name: "AASWADYA Caterers" }],
  openGraph: {
    title: "AASWADYA Caterers | Tradition Meets Taste",
    description:
      "Authentic Vegetarian Catering for Every Celebration in Hyderabad. Fresh ingredients, traditional recipes, and professional catering.",
    url: "https://aaswadyacaterers.com",
    siteName: "AASWADYA Caterers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-feast.jpg",
        width: 1200,
        height: 675,
        alt: "AASWADYA Caterers - Authentic Vegetarian Feast in Hyderabad",
      },
    ],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${jakarta.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A2821]">
        {children}
      </body>
    </html>
  );
}
