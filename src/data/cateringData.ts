export interface MenuItem {
  category: string;
  badge?: string;
}

export interface MenuPackage {
  id: "basic" | "regular";
  name: string;
  subtitle: string;
  pricePerPlate: number;
  highlightBadge?: string;
  tagline: string;
  keyDifferentiators: string[];
  sweetCount: string;
  curryRule: string;
  includesRoti: boolean;
  includesSaladPickle: boolean;
  sections: MenuItem[];
}

export const BUSINESS_CONFIG = {
  name: "AASWADYA Caterers",
  tagline: "Tradition Meets Taste",
  subTagline: "Serving Happiness to Every Plate",
  email: "aaswadya18@gmail.com",
  location: "Hyderabad, Telangana, India",
  displayPhone: "+91 94901 22942",
  telPhone: "+919490122942",
  // Secondary phone number for calls only:
  displayPhoneSecondary: "+91 94401 10455",
  telPhoneSecondary: "+919440110455",
  // Official WhatsApp phone number (India country code 91 + 10 digits):
  whatsAppPhone: "919490122942",
  serviceAreas: ["Hyderabad", "Secunderabad", "Cyberabad & Greater Hyderabad Region"],
  dietary: "100% Pure Vegetarian & Fresh Ingredients",
};

export const MENU_PACKAGES: MenuPackage[] = [
  {
    id: "basic",
    name: "Basic Veg Menu",
    subtitle: "Essential Traditional Feast",
    pricePerPlate: 229,
    highlightBadge: "Popular for Family Functions",
    tagline: "Authentic, freshly prepared South Indian festive meal with classic favourites.",
    sweetCount: "1 Sweet",
    curryRule: "1 Curry Category (Wet OR Veg)",
    includesRoti: false,
    includesSaladPickle: false,
    keyDifferentiators: [
      "1 Sweet",
      "1 Curry category choice (Wet OR Veg)",
      "Steamed White Rice with Pure Ghee",
      "Traditional snacks, dal, rasam & papad",
    ],
    sections: [
      {
        category: "Sweet",
        badge: "1 Sweet",
      },
      {
        category: "Flavoured Rice",
      },
      {
        category: "Curry (Wet OR Veg Category)",
        badge: "Choose Any 1",
      },
      {
        category: "White Rice",
      },
      {
        category: "Fry",
      },
      {
        category: "Dal",
      },
      {
        category: "Sambar / Rasam",
      },
      {
        category: "Veg Snack",
      },
      {
        category: "Chutney",
      },
      {
        category: "Papad",
      },
      {
        category: "Curd",
      },
      {
        category: "Ghee",
      },
      {
        category: "Mouth Freshener",
      },
    ],
  },
  {
    id: "regular",
    name: "Regular Veg Menu",
    subtitle: "Complete Grand Celebration",
    pricePerPlate: 299,
    highlightBadge: "Most Recommended",
    tagline: "Expanded celebratory feast with two sweets, two distinct curries, rotis, and accompaniments.",
    sweetCount: "2 Sweets",
    curryRule: "2 Curries (Wet Curry AND Vegetable Curry)",
    includesRoti: true,
    includesSaladPickle: true,
    keyDifferentiators: [
      "2 Sweets included",
      "Both Wet Curry AND Vegetable Curry included",
      "Roti / Chapati included",
      "Fresh Salad & Pickles included",
      "Flavoured Rice & all traditional accompaniments",
    ],
    sections: [
      {
        category: "Sweets",
        badge: "2 Sweets Included",
      },
      {
        category: "Flavoured Rice",
      },
      {
        category: "Wet Curry",
        badge: "Included",
      },
      {
        category: "Vegetable Curry",
        badge: "Included",
      },
      {
        category: "White Rice",
      },
      {
        category: "Fry",
      },
      {
        category: "Dal",
      },
      {
        category: "Sambar / Rasam",
      },
      {
        category: "Veg Snack",
      },
      {
        category: "Chutney",
      },
      {
        category: "Pickle",
        badge: "Regular Extra",
      },
      {
        category: "Salad",
        badge: "Regular Extra",
      },
      {
        category: "Papad",
      },
      {
        category: "Curd",
      },
      {
        category: "Ghee",
      },
      {
        category: "Roti",
        badge: "Regular Extra",
      },
      {
        category: "Mouth Freshener",
      },
    ],
  },
];

export const CATERING_SERVICES = [
  {
    title: "Family Celebrations",
    description:
      "Heartwarming vegetarian feasts tailored for Shashtipoorti, cradle ceremonies, anniversaries, and intimate family gatherings.",
    icon: "HeartHandshake",
  },
  {
    title: "Engagements & Weddings",
    description:
      "Traditional South Indian wedding banquet catering executed with disciplined timing, pristine presentation, and pure ghee delicacies.",
    icon: "Sparkles",
  },
  {
    title: "Birthdays & Milestones",
    description:
      "Delicious, crowd-pleasing veg spreads with snacks, live fry stations, sweets, and savoury traditional dishes for all age groups.",
    icon: "PartyPopper",
  },
  {
    title: "Housewarming (Gruhapravesam)",
    description:
      "Auspicious, strictly satvik and hygienic meals prepared with traditional care for poojas and new home inaugurations.",
    icon: "Home",
  },
  {
    title: "Community & Festive Events",
    description:
      "Seamless large-scale catering for festivals like Vinayaka Chavithi, Navratri, Sankranti, and cultural spiritual functions.",
    icon: "Flame",
  },
  {
    title: "Corporate & Team Dinners",
    description:
      "Professional, punctual, and hygienically served buffet catering for corporate milestone lunches and festive celebrations.",
    icon: "Briefcase",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Pure Vegetarian",
    description:
      "Strictly vegetarian kitchen practices upholding religious sanctities and hygiene standards without compromise.",
    badge: "Pure Veg",
  },
  {
    title: "Traditional Authentic Recipes",
    description:
      "Authentic Telugu and South Indian culinary traditions perfected with genuine spices and pure ghee.",
    badge: "Authentic",
  },
  {
    title: "Fresh & Hygienic Preparation",
    description:
      "Cooked fresh on the event day using top-grade vegetables, cold-pressed oils, and certified clean water.",
    badge: "Hygiene First",
  },
  {
    title: "Disciplined Professional Service",
    description:
      "Courteous catering staff, immaculate buffet presentation, and prompt service management on schedule.",
    badge: "Punctual",
  },
  {
    title: "Honest & Transparent Pricing",
    description:
      "Crystal clear pricing per plate with no hidden fees. Flexible packages designed for every celebration size.",
    badge: "Transparent",
  },
  {
    title: "Customizable Telugu Flavours",
    description:
      "Adjust spice levels, rice variations, and regional delicacies according to your family's personal taste.",
    badge: "Tailored Taste",
  },
];
