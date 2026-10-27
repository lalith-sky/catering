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
  metadataBase: new URL("https://catering-one-self.vercel.app"),
  title: "AASWADYA Caterers Hyderabad | Pure Vegetarian Catering Services",
  description:
    "AASWADYA Caterers offers pure vegetarian catering services for weddings, family functions, celebrations and events in Hyderabad.",
  keywords: [
    "AASWADYA Caterers",
    "AASWADYA Caterers Hyderabad",
    "Vegetarian Caterers Hyderabad",
    "Veg Catering Services Hyderabad",
    "Pure Veg Catering Hyderabad",
    "Telugu Wedding Catering",
    "Traditional Veg Food Hyderabad",
    "Brahmin Catering Hyderabad",
    "Tradition Meets Taste",
    "Veg Menu Packages Hyderabad",
  ],
  authors: [{ name: "AASWADYA Caterers" }],
  alternates: {
    canonical: "https://catering-one-self.vercel.app/",
  },
  openGraph: {
    title: "AASWADYA Caterers | Pure Vegetarian Catering in Hyderabad",
    description:
      "AASWADYA Caterers offers pure vegetarian catering services for weddings, family functions, celebrations and events in Hyderabad.",
    url: "https://catering-one-self.vercel.app/",
    siteName: "AASWADYA Caterers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-feast.jpg",
        width: 1200,
        height: 675,
        alt: "AASWADYA Caterers - Pure Vegetarian Catering Feast in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AASWADYA Caterers | Pure Vegetarian Catering in Hyderabad",
    description:
      "AASWADYA Caterers offers pure vegetarian catering services for weddings, family functions, celebrations and events in Hyderabad.",
    images: ["/images/hero-feast.jpg"],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  verification: {
    google: "f-XzcvkW3Czr-TH-2nvIzigva4mYhiztB_vqv1HRj1E",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://catering-one-self.vercel.app/#organization",
      name: "AASWADYA Caterers",
      url: "https://catering-one-self.vercel.app/",
      logo: {
        "@type": "ImageObject",
        url: "https://catering-one-self.vercel.app/images/logo.png",
      },
      email: "aaswadya18@gmail.com",
      telephone: "+919490122942",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+919490122942",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "te", "hi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+919440110455",
          contactType: "reservations",
          areaServed: "IN",
          availableLanguage: ["en", "te", "hi"],
        },
      ],
    },
    {
      "@type": ["LocalBusiness", "FoodEstablishment"],
      "@id": "https://catering-one-self.vercel.app/#localbusiness",
      name: "AASWADYA Caterers",
      parentOrganization: {
        "@id": "https://catering-one-self.vercel.app/#organization",
      },
      url: "https://catering-one-self.vercel.app/",
      logo: "https://catering-one-self.vercel.app/images/logo.png",
      image: "https://catering-one-self.vercel.app/images/hero-feast.jpg",
      description:
        "AASWADYA Caterers offers pure vegetarian catering services for weddings, family functions, celebrations and events in Hyderabad.",
      slogan: "Tradition Meets Taste",
      email: "aaswadya18@gmail.com",
      telephone: "+919490122942",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "City",
          name: "Secunderabad",
        },
        {
          "@type": "AdministrativeArea",
          name: "Telangana",
        },
      ],
      servesCuisine: "South Indian Vegetarian",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Bank Transfer",
      hasMenu: "https://catering-one-self.vercel.app/#menus",
      makesOffer: [
        {
          "@type": "Offer",
          name: "Basic Menu Catering Package",
          price: "250",
          priceCurrency: "INR",
          url: "https://catering-one-self.vercel.app/#menus",
          description: "Essential Traditional Feast - pure vegetarian festive meal",
        },
        {
          "@type": "Offer",
          name: "Regular Menu Catering Package",
          price: "350",
          priceCurrency: "INR",
          url: "https://catering-one-self.vercel.app/#menus",
          description: "Rich Festive Celebration - pure vegetarian catering",
        },
        {
          "@type": "Offer",
          name: "Customised Catering Quotation",
          url: "https://catering-one-self.vercel.app/customise-plate",
          description: "Custom plate builder with instant quotation for events",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF7F0] text-[#1A2821]">
        {children}
      </body>
    </html>
  );
}
