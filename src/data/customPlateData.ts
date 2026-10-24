export interface CustomDish {
  id: string;
  name: string;
  categoryId: string;
  description?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  // Per-plate price increment (used ONLY in background calculation, never displayed during selection)
  platePriceContribution: number;
  isAccompaniment?: boolean;
}

export interface DishCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const DISH_CATEGORIES: DishCategory[] = [
  {
    id: "sweets",
    name: "Sweets",
    iconName: "Candy",
    description: "Traditional Telugu and Indian celebratory sweets prepared in pure ghee",
  },
  {
    id: "flavoured-rice",
    name: "Flavoured Rice",
    iconName: "UtensilsCrossed",
    description: "Aromatic festive rice varieties, authentic pulaos, and dum biryanis",
  },
  {
    id: "wet-curries",
    name: "Wet Curries",
    iconName: "Soup",
    description: "Rich gravy delicacies, paneer specialties, and traditional gravies",
  },
  {
    id: "veg-curries",
    name: "Vegetable Curries",
    iconName: "Carrot",
    description: "Wholesome seasonal vegetable curries and kurmas",
  },
  {
    id: "white-rice",
    name: "White Rice",
    iconName: "Wheat",
    description: "Freshly steamed premium Sona Masoori white rice",
  },
  {
    id: "fry-items",
    name: "Fry Items",
    iconName: "Flame",
    description: "Crisp and flavourful shallow-fried traditional South Indian fries",
  },
  {
    id: "dal",
    name: "Dal",
    iconName: "Bowl",
    description: "Comforting homestyle Telugu pappu tempered with desi spices",
  },
  {
    id: "sambar-rasam",
    name: "Sambar / Rasam",
    iconName: "Coffee",
    description: "Aromatic lentil sambar and piping hot tangy rasam",
  },
  {
    id: "snacks-starters",
    name: "Snacks & Starters",
    iconName: "Sparkles",
    description: "Crispy bajjis, hot vadas, tandoori paneer, and party snacks",
  },
  {
    id: "chutneys",
    name: "Chutneys",
    iconName: "Citrus",
    description: "Fresh stone-ground pachadis and traditional dips",
  },
  {
    id: "pickles",
    name: "Pickles",
    iconName: "Jar",
    description: "Traditional Andhra homemade pickles with authentic spice blends",
  },
  {
    id: "salads",
    name: "Salads",
    iconName: "Salad",
    description: "Crunchy farm-fresh cucumber, carrot, onion, and lime slices",
  },
  {
    id: "papad",
    name: "Papad",
    iconName: "CircleDot",
    description: "Crispy roasted appadam and crunchy festive fryums",
  },
  {
    id: "curd",
    name: "Curd",
    iconName: "Milk",
    description: "Thick creamy homestyle plain curd",
  },
  {
    id: "ghee",
    name: "Ghee",
    iconName: "Droplet",
    description: "Aromatic pure desi cow ghee served piping hot on rice",
  },
  {
    id: "breads",
    name: "Breads",
    iconName: "Cookie",
    description: "Soft rotis, phulkas, and tandoori naans freshly prepared",
  },
  {
    id: "desserts",
    name: "Desserts & Refreshments",
    iconName: "Candy",
    description: "Chilled celebration ice cream cups and refreshing welcome beverages",
  },
];

export const CUSTOM_DISHES: CustomDish[] = [
  // 1. Sweets
  {
    id: "sw-gulab-jamun",
    name: "Gulab Jamun",
    categoryId: "sweets",
    description: "Soft golden dumplings soaked in aromatic cardamom and saffron sugar syrup",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "sw-double-ka-meetha",
    name: "Double Ka Meetha",
    categoryId: "sweets",
    description: "Hyderabadi classic fried bread pudding simmered in saffron milk and rich nuts",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "sw-rava-kesari",
    name: "Rava Kesari",
    categoryId: "sweets",
    description: "Melt-in-mouth golden semolina pudding loaded with pure desi ghee and roasted cashews",
    platePriceContribution: 20,
  },
  {
    id: "sw-bobbatlu",
    name: "Bobbatlu",
    categoryId: "sweets",
    description: "Traditional festive sweet flatbread stuffed with fragrant lentil-jaggery puran",
    isPremium: true,
    platePriceContribution: 30,
  },
  {
    id: "sw-malpua-rabri",
    name: "Malpua with Rabri",
    categoryId: "sweets",
    description: "Crispy-edged syrupy pancakes served alongside rich, slow-simmered rabri",
    isPremium: true,
    platePriceContribution: 35,
  },
  {
    id: "sw-payasam",
    name: "Payasam",
    categoryId: "sweets",
    description: "Silky South Indian vermicelli kheer simmered in creamy milk, cardamom, and raisins",
    platePriceContribution: 20,
  },
  {
    id: "sw-poornam-boorelu",
    name: "Poornam Boorelu",
    categoryId: "sweets",
    description: "Auspicious Andhra sweet balls with sweet chana dal stuffing deep-fried in rice batter",
    isPremium: true,
    platePriceContribution: 30,
  },

  // 2. Flavoured Rice
  {
    id: "fr-pulihora",
    name: "Pulihora",
    categoryId: "flavoured-rice",
    description: "Temple-style tangy tamarind rice tempered with mustard, curry leaves, and crunchy peanuts",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "fr-lemon-rice",
    name: "Lemon Rice",
    categoryId: "flavoured-rice",
    description: "Vibrant zesty lemon rice with turmeric, ginger, green chillies, and roasted lentils",
    platePriceContribution: 20,
  },
  {
    id: "fr-tomato-rice",
    name: "Tomato Rice",
    categoryId: "flavoured-rice",
    description: "Spicy and tangy spiced tomato rice slow-cooked with fresh coriander and whole spices",
    platePriceContribution: 20,
  },
  {
    id: "fr-veg-pulao",
    name: "Veg Pulao",
    categoryId: "flavoured-rice",
    description: "Mild aromatic long-grain basmati rice gently cooked with garden-fresh vegetables",
    platePriceContribution: 25,
  },
  {
    id: "fr-bagara-rice",
    name: "Bagara Rice",
    categoryId: "flavoured-rice",
    description: "Authentic Hyderabadi seasoned rice flavoured with whole garam masala and mint",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "fr-special-veg-pulao",
    name: "Special Veg Pulao",
    categoryId: "flavoured-rice",
    description: "Chef's signature recipe with fried onions, green peas, paneer cubes, and whole spices",
    platePriceContribution: 30,
  },
  {
    id: "fr-veg-dum-biryani",
    name: "Veg Dum Biryani",
    categoryId: "flavoured-rice",
    description: "Classic slow-cooked dum biryani layered with marinated vegetables, saffron, and mint",
    isPopular: true,
    platePriceContribution: 35,
  },
  {
    id: "fr-kaju-pulao",
    name: "Kaju Pulao",
    categoryId: "flavoured-rice",
    description: "Rich royal basmati pulao studded with golden fried whole cashews and ghee",
    isPremium: true,
    platePriceContribution: 35,
  },
  {
    id: "fr-hyderabadi-biryani",
    name: "Hyderabadi Veg Dum Biryani",
    categoryId: "flavoured-rice",
    description: "Authentic Nizami spiced dum biryani prepared with layered basmati and rich masala gravy",
    isPremium: true,
    platePriceContribution: 35,
  },

  // 3. Wet Curries
  {
    id: "wc-gutti-vankaya",
    name: "Gutti Vankaya",
    categoryId: "wet-curries",
    description: "Signature Andhra baby brinjals stuffed with peanut, sesame, and coconut spicy gravy",
    isPopular: true,
    platePriceContribution: 30,
  },
  {
    id: "wc-aloo-kurma",
    name: "Aloo Kurma",
    categoryId: "wet-curries",
    description: "Tender potato chunks simmered in a creamy coconut and poppy-seed fragrant kurma gravy",
    platePriceContribution: 25,
  },
  {
    id: "wc-paneer-butter-masala",
    name: "Paneer Butter Masala",
    categoryId: "wet-curries",
    description: "Cottage cheese cubes bathed in rich, velvety tomato butter gravy with dried fenugreek",
    isPopular: true,
    platePriceContribution: 35,
  },
  {
    id: "wc-kaju-curry",
    name: "Kaju Curry",
    categoryId: "wet-curries",
    description: "Luxurious creamy cashew nut curry cooked in an aromatic onion-tomato spiced sauce",
    isPremium: true,
    platePriceContribution: 40,
  },
  {
    id: "wc-paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    categoryId: "wet-curries",
    description: "Char-grilled paneer cubes simmered in a spiced tandoori tikka gravy with capsicum",
    isPremium: true,
    platePriceContribution: 35,
  },

  // 4. Vegetable Curries
  {
    id: "vc-mixed-veg",
    name: "Mixed Vegetable Curry",
    categoryId: "veg-curries",
    description: "Carrots, French beans, cauliflower, and peas tossed in a mildly spiced homestyle gravy",
    platePriceContribution: 25,
  },
  {
    id: "vc-aloo-tomato",
    name: "Aloo Tomato Curry",
    categoryId: "veg-curries",
    description: "Comforting classic curry of potatoes and ripe country tomatoes cooked with curry leaves",
    platePriceContribution: 20,
  },
  {
    id: "vc-navratan-kurma",
    name: "Navratan Kurma",
    categoryId: "veg-curries",
    description: "Nine gems of vegetables, dried fruits, and paneer cooked in a mildly sweet, royal white gravy",
    isPremium: true,
    platePriceContribution: 30,
  },
  {
    id: "vc-special-veg",
    name: "Special Vegetable Curry",
    categoryId: "veg-curries",
    description: "Special blend of country vegetables slow-simmered with roasted coriander and pepper",
    platePriceContribution: 25,
  },

  // 5. White Rice (Accompaniment)
  {
    id: "wr-steamed-white-rice",
    name: "Steamed White Rice",
    categoryId: "white-rice",
    description: "Aged Sona Masoori rice, cooked to fluffy perfection, served piping hot",
    platePriceContribution: 10,
    isAccompaniment: true,
  },

  // 6. Fry Items
  {
    id: "fy-aloo-fry",
    name: "Aloo Fry",
    categoryId: "fry-items",
    description: "Crispy pan-roasted potato cubes tossed with roasted garlic, red chillies, and curry leaves",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "fy-bhendi-fry",
    name: "Bhendi Fry",
    categoryId: "fry-items",
    description: "Crunchy sliced okra stir-fried with roasted peanuts, cumin, and dry coconut powder",
    platePriceContribution: 25,
  },
  {
    id: "fy-dondakaya-fry",
    name: "Dondakaya Fry",
    categoryId: "fry-items",
    description: "Thinly sliced ivy gourd fried crisp with Andhra podi spices and mustard tempering",
    platePriceContribution: 25,
  },
  {
    id: "fy-beans-fry",
    name: "Beans Fry",
    categoryId: "fry-items",
    description: "Finely chopped French beans sautéed with grated coconut and roasted gram lentil mix",
    platePriceContribution: 20,
  },
  {
    id: "fy-special-veg-fry",
    name: "Special Vegetable Fry",
    categoryId: "fry-items",
    description: "Medley of seasonal vegetable strips crisp-fried with crushed cashews and dry red chillies",
    platePriceContribution: 25,
  },

  // 7. Dal (Accompaniment)
  {
    id: "dl-tomato-pappu",
    name: "Tomato Pappu",
    categoryId: "dal",
    description: "Tangy toor dal cooked with ripe tomatoes and tempered with hing, garlic, and ghee",
    isPopular: true,
    platePriceContribution: 10,
    isAccompaniment: true,
  },
  {
    id: "dl-palakura-pappu",
    name: "Palakura Pappu",
    categoryId: "dal",
    description: "Nutritious toor dal slow-cooked with fresh tender spinach leaves and green chillies",
    platePriceContribution: 10,
    isAccompaniment: true,
  },
  {
    id: "dl-mudda-pappu",
    name: "Mudda Pappu",
    categoryId: "dal",
    description: "Thick, unadulterated cooked toor dal served with pure desi ghee and avakaya pickle",
    platePriceContribution: 10,
    isAccompaniment: true,
  },

  // 8. Sambar / Rasam (Accompaniment)
  {
    id: "sr-veg-sambar",
    name: "Vegetable Sambar",
    categoryId: "sambar-rasam",
    description: "Traditional drumstick, pumpkin, and shallot sambar brewed with authentic home-ground masala",
    isPopular: true,
    platePriceContribution: 10,
    isAccompaniment: true,
  },
  {
    id: "sr-tomato-rasam",
    name: "Tomato Rasam",
    categoryId: "sambar-rasam",
    description: "Peppery, digestive, tangy rasam infused with crushed garlic, cumin, and fresh coriander",
    platePriceContribution: 10,
    isAccompaniment: true,
  },
  {
    id: "sr-mixed-veg-sambar",
    name: "Mixed Vegetable Sambar",
    categoryId: "sambar-rasam",
    description: "Rich South Indian sambar loaded with carrots, bottle gourd, drumsticks, and tamarind",
    platePriceContribution: 10,
    isAccompaniment: true,
  },

  // 9. Snacks & Starters
  {
    id: "sn-mirchi-bajji",
    name: "Mirchi Bajji",
    categoryId: "snacks-starters",
    description: "Hyderabad's favourite large green chillies dipped in spiced gram batter and fried hot",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "sn-masala-vada",
    name: "Masala Vada",
    categoryId: "snacks-starters",
    description: "Crunchy golden chana dal patties infused with onions, fennel seeds, and green chillies",
    platePriceContribution: 20,
  },
  {
    id: "sn-banana-bajji",
    name: "Banana Bajji",
    categoryId: "snacks-starters",
    description: "Crispy raw plantain fritters served piping hot with coconut chutney",
    platePriceContribution: 20,
  },
  {
    id: "sn-veg-manchurian",
    name: "Veg Manchurian",
    categoryId: "snacks-starters",
    description: "Crispy vegetable dumplings tossed in a savoury ginger, garlic, and soy glaze",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "sn-crispy-corn",
    name: "Crispy Corn",
    categoryId: "snacks-starters",
    description: "Golden fried sweet corn kernels tossed with chaat masala, pepper, and fresh lemon",
    platePriceContribution: 25,
  },
  {
    id: "sn-paneer-tikka",
    name: "Paneer Tikka",
    categoryId: "snacks-starters",
    description: "Juicy marinated cottage cheese cubes roasted in tandoor with bell peppers and onions",
    isPremium: true,
    platePriceContribution: 35,
  },

  // 10. Chutneys (Accompaniment)
  {
    id: "ch-tomato-pachadi",
    name: "Tomato Pachadi",
    categoryId: "chutneys",
    description: "Country tomato stone-ground chutney with dry red chillies, mustard, and curry leaves",
    platePriceContribution: 5,
    isAccompaniment: true,
  },
  {
    id: "ch-coconut-chutney",
    name: "Coconut Chutney",
    categoryId: "chutneys",
    description: "Fresh grated coconut ground with roasted chana dal and green chillies",
    platePriceContribution: 5,
    isAccompaniment: true,
  },

  // 11. Pickles (Accompaniment)
  {
    id: "pk-mango-pickle",
    name: "Mango Pickle",
    categoryId: "pickles",
    description: "Traditional spicy Telugu Avakaya cut raw mango pickle steeped in pure sesame oil",
    platePriceContribution: 5,
    isAccompaniment: true,
  },
  {
    id: "pk-lemon-pickle",
    name: "Lemon Pickle",
    categoryId: "pickles",
    description: "Sun-ripened lime pickle cured in sea salt, turmeric, and fenugreek spices",
    platePriceContribution: 5,
    isAccompaniment: true,
  },

  // 12. Salads
  {
    id: "sl-fresh-salad",
    name: "Fresh Vegetable Salad",
    categoryId: "salads",
    description: "Sliced organic cucumbers, carrots, red onions, fresh green chillies, and lemon wedges",
    platePriceContribution: 10,
  },

  // 13. Papad (Accompaniment)
  {
    id: "pd-appadam",
    name: "Appadam",
    categoryId: "papad",
    description: "Crispy urad dal papad roasted or fried to light golden crispness",
    platePriceContribution: 5,
    isAccompaniment: true,
  },
  {
    id: "pd-fryums",
    name: "Fryums",
    categoryId: "papad",
    description: "Colourful crunchy festive fryums enjoyed by guests of all ages",
    platePriceContribution: 5,
    isAccompaniment: true,
  },

  // 14. Curd (Accompaniment)
  {
    id: "cd-fresh-plain-curd",
    name: "Fresh Plain Curd",
    categoryId: "curd",
    description: "Fresh, thick, non-sour whole milk curd served chilled for the final rice course",
    platePriceContribution: 10,
    isAccompaniment: true,
  },

  // 15. Ghee (Accompaniment)
  {
    id: "gh-pure-ghee",
    name: "Pure Ghee",
    categoryId: "ghee",
    description: "Granular pure cow ghee served hot over rice, sweets, and dal",
    platePriceContribution: 10,
    isAccompaniment: true,
  },

  // 16. Breads
  {
    id: "br-chapati",
    name: "Chapati",
    categoryId: "breads",
    description: "Soft whole wheat flatbread roasted on tawa without excess oil",
    platePriceContribution: 15,
  },
  {
    id: "br-plain-roti",
    name: "Plain Roti",
    categoryId: "breads",
    description: "Homestyle soft phulkas puffed on direct flame",
    platePriceContribution: 15,
  },
  {
    id: "br-butter-roti",
    name: "Butter Roti",
    categoryId: "breads",
    description: "Soft tandoor/tawa roti brushed with melted butter",
    platePriceContribution: 20,
  },
  {
    id: "br-plain-naan",
    name: "Plain Naan",
    categoryId: "breads",
    description: "Traditional soft tandoori naan baked fresh to order",
    platePriceContribution: 25,
  },
  {
    id: "br-butter-naan",
    name: "Butter Naan",
    categoryId: "breads",
    description: "Fluffy tandoori naan brushed generously with pure butter",
    platePriceContribution: 25,
  },
  {
    id: "br-garlic-naan",
    name: "Garlic Naan",
    categoryId: "breads",
    description: "Aromatic tandoor naan topped with minced roasted garlic and fresh coriander",
    isPopular: true,
    platePriceContribution: 30,
  },

  // 17. Desserts & Refreshments (Only Food items - Live counters kept completely separate)
  {
    id: "de-ice-cream",
    name: "Ice Cream",
    categoryId: "desserts",
    description: "Creamy vanilla, strawberry, or butterscotch dessert cups",
    isPopular: true,
    platePriceContribution: 25,
  },
  {
    id: "de-welcome-drink",
    name: "Welcome Drink",
    categoryId: "desserts",
    description: "Refreshing welcome beverage (Mint Lime, Panagam, or Fresh Fruit Punch)",
    platePriceContribution: 20,
  },
];

export const GUEST_QUICK_PRESETS = [50, 100, 200, 300, 500];

export const BASE_PLATE_MINIMUM = 50;

/**
 * Transparent, reasonable pricing engine for custom plates
 * - Purely based on selected food dishes
 * - Live Counters are kept strictly separate as instructed
 * - Basic accompaniments (rice, dal, sambar, curd, ghee, papad, pickle, chutney) are included affordably
 * - Per-plate price scales proportionally with the number and variety of dishes
 */
export interface CustomPlateCalculationResult {
  pricePerPlate: number;
  totalPerPlateFoodCost: number;
  estimatedTotal: number;
  selectedDishesCount: number;
  isEligible: boolean;
  canCalculatePrice: boolean;
}

export function calculateCustomPlatePrice(
  selectedDishIds: string[],
  guestCount: number
): CustomPlateCalculationResult {
  const isEligible = guestCount >= BASE_PLATE_MINIMUM;

  if (selectedDishIds.length === 0 || !isEligible) {
    return {
      pricePerPlate: 0,
      totalPerPlateFoodCost: 0,
      estimatedTotal: 0,
      selectedDishesCount: 0,
      isEligible,
      canCalculatePrice: false,
    };
  }

  // Base operational & traditional service fee per plate (includes clean service staff, buffet arrangement, water)
  // Keeps prices affordable and directly in line with AASWADYA's ₹250 (Basic) and ₹310 (Regular) packages
  const baseServiceFee = 100;

  let totalPlateSum = baseServiceFee;

  // Track accompaniments count to ensure they don't blow up the price unnecessarily
  let accompanimentContribution = 0;
  const maxAccompanimentCharge = 40; // Caps all basic accompaniments combined to ₹40 max so they stay truly affordable!

  for (const dishId of selectedDishIds) {
    const dish = CUSTOM_DISHES.find((d) => d.id === dishId);
    if (!dish) continue;

    if (dish.isAccompaniment) {
      accompanimentContribution = Math.min(
        maxAccompanimentCharge,
        accompanimentContribution + dish.platePriceContribution
      );
    } else {
      totalPlateSum += dish.platePriceContribution;
    }
  }

  totalPlateSum += accompanimentContribution;

  // Round pricePerPlate to nearest clean 5 or 10 rupees for transparent, professional catering pricing
  const roundedPerPlate = Math.ceil(totalPlateSum / 5) * 5;
  const estimatedTotal = roundedPerPlate * guestCount;

  return {
    pricePerPlate: roundedPerPlate,
    totalPerPlateFoodCost: estimatedTotal,
    estimatedTotal,
    selectedDishesCount: selectedDishIds.length,
    isEligible,
    canCalculatePrice: true,
  };
}
