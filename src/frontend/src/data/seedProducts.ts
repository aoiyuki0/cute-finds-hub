import type { ExtendedProduct } from "../types/product";

export const seedProducts: ExtendedProduct[] = [
  {
    id: "anker-powerbank",
    title: "Anker PowerCore 20000mAh Portable Charger",
    description:
      "Ultra-high capacity power bank with fast charging technology. Perfect for long study sessions and travel.",
    rating: 4.7,
    reviewCount: 12453,
    priceHint: "$39.99",
    amazonUrl: "https://www.amazon.com/dp/B00X5RV14Y",
    imageUrl:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    category: "tech",
    pros: [
      "Massive 20000mAh capacity charges phones 4-5 times",
      "Fast charging with PowerIQ technology",
      "Compact and portable design",
      "Excellent build quality and durability",
    ],
    cons: [
      "Takes 10+ hours to fully recharge",
      "Slightly heavier than smaller capacity banks",
    ],
    comparisonGroup: "powerbanks",
  },
  {
    id: "logitech-mouse",
    title: "Logitech M510 Wireless Mouse",
    description:
      "Comfortable wireless mouse with long battery life. Ergonomic design perfect for extended use.",
    rating: 4.5,
    reviewCount: 8932,
    priceHint: "$19.99",
    amazonUrl: "https://www.amazon.com/dp/B003NR57BY",
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    category: "tech",
    pros: [
      "Up to 2 years battery life",
      "Comfortable contoured shape",
      "Reliable wireless connection",
      "Budget-friendly price",
    ],
    cons: ["Not suitable for gaming", "Basic feature set"],
    comparisonGroup: "mice",
  },
  {
    id: "pilot-pens",
    title: "Pilot G2 Retractable Gel Pens, 12-Pack",
    description:
      "Smooth writing gel pens in assorted colors. A student essential for note-taking and assignments.",
    rating: 4.8,
    reviewCount: 15678,
    priceHint: "$14.99",
    amazonUrl: "https://www.amazon.com/dp/B001GAOTSW",
    imageUrl:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=500&fit=crop",
    category: "study-tools",
    pros: [
      "Smooth gel ink flows perfectly",
      "Comfortable grip for long writing sessions",
      "Vibrant color selection",
      "Excellent value for money",
    ],
    cons: [
      "Ink can smudge if touched immediately",
      "Refills not widely available",
    ],
  },
  {
    id: "five-star-notebook",
    title: "Five Star Spiral Notebooks, 5-Pack",
    description:
      "Durable college-ruled notebooks with reinforced covers. Perfect for organizing class notes.",
    rating: 4.6,
    reviewCount: 6234,
    priceHint: "$22.99",
    amazonUrl: "https://www.amazon.com/dp/B07VQKZ8YN",
    imageUrl:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&h=500&fit=crop",
    category: "study-tools",
    pros: [
      "Thick, high-quality paper prevents bleed-through",
      "Reinforced covers last all semester",
      "Perforated pages tear cleanly",
      "Multiple pockets for organization",
    ],
    cons: [
      "Slightly bulky to carry all at once",
      "More expensive than basic notebooks",
    ],
  },
  {
    id: "desk-lamp",
    title: "TaoTronics LED Desk Lamp with USB Port",
    description:
      "Eye-caring LED lamp with adjustable brightness and color temperature. Built-in USB charging port.",
    rating: 4.6,
    reviewCount: 9876,
    priceHint: "$29.99",
    amazonUrl: "https://www.amazon.com/dp/B00APAQSP6",
    imageUrl:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "desk-setup",
    pros: [
      "5 color modes and 7 brightness levels",
      "USB charging port for devices",
      "Memory function remembers settings",
      "Energy-efficient LED technology",
    ],
    cons: [
      "Touch controls can be overly sensitive",
      "Base could be heavier for stability",
    ],
    comparisonGroup: "desk-lamps",
  },
  {
    id: "monitor-stand",
    title: "SimpleHouseware Monitor Stand Riser",
    description:
      "Metal mesh monitor stand with storage space underneath. Elevates screen to ergonomic height.",
    rating: 4.5,
    reviewCount: 5432,
    priceHint: "$24.99",
    amazonUrl: "https://www.amazon.com/dp/B074DV8C9J",
    imageUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    category: "desk-setup",
    pros: [
      "Sturdy metal construction",
      "Ventilated mesh prevents overheating",
      "Storage space for keyboard/supplies",
      "Easy assembly",
    ],
    cons: ["Fixed height, not adjustable", "May not fit ultra-wide monitors"],
  },
  {
    id: "desk-organizer",
    title: "SimpleHouseware Mesh Desk Organizer",
    description:
      "Multi-functional desk organizer with 6 compartments. Keeps supplies tidy and accessible.",
    rating: 4.7,
    reviewCount: 7654,
    priceHint: "$16.99",
    amazonUrl: "https://www.amazon.com/dp/B01HDQAS8O",
    imageUrl:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&h=500&fit=crop",
    category: "desk-setup",
    pros: [
      "Multiple compartments for different items",
      "Durable mesh construction",
      "Compact footprint",
      "Modern aesthetic",
    ],
    cons: ["Mesh can collect dust", "Not suitable for very small items"],
  },
  {
    id: "storage-bins",
    title: "IRIS USA Plastic Storage Bins, 6-Pack",
    description:
      "Stackable storage containers perfect for dorm rooms and small spaces. Clear design for easy visibility.",
    rating: 4.4,
    reviewCount: 4321,
    priceHint: "$34.99",
    amazonUrl: "https://www.amazon.com/dp/B01N6PQXQX",
    imageUrl:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=500&h=500&fit=crop",
    category: "hostel-essentials",
    pros: [
      "Stackable design saves space",
      "Clear sides show contents",
      "Durable plastic construction",
      "Versatile size for various items",
    ],
    cons: ["Lids sold separately", "Can crack if overloaded"],
  },
  {
    id: "shower-caddy",
    title: "mDesign Portable Shower Caddy Tote",
    description:
      "Mesh shower caddy with handles and drainage. Essential for shared bathroom situations.",
    rating: 4.5,
    reviewCount: 3456,
    priceHint: "$12.99",
    amazonUrl: "https://www.amazon.com/dp/B07FMXQXQY",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=500&fit=crop",
    category: "hostel-essentials",
    pros: [
      "Quick-dry mesh material",
      "Multiple compartments",
      "Comfortable handles",
      "Lightweight and portable",
    ],
    cons: ["Mesh can stretch over time", "Not suitable for heavy bottles"],
  },
  {
    id: "bed-risers",
    title: "Home-it Bed Risers, 8-Pack",
    description:
      "Heavy-duty bed risers create extra storage space underneath. Supports up to 10,000 lbs.",
    rating: 4.6,
    reviewCount: 5678,
    priceHint: "$19.99",
    amazonUrl: "https://www.amazon.com/dp/B01N03XQZB",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop",
    category: "hostel-essentials",
    pros: [
      "Creates valuable storage space",
      "Extremely sturdy and stable",
      "Easy to install",
      "Affordable solution",
    ],
    cons: ["Fixed height options", "May not fit all bed frame legs"],
  },
  {
    id: "resistance-bands",
    title: "Fit Simplify Resistance Loop Bands, 5-Pack",
    description:
      "Exercise bands with varying resistance levels. Perfect for dorm room workouts.",
    rating: 4.7,
    reviewCount: 11234,
    priceHint: "$11.99",
    amazonUrl: "https://www.amazon.com/dp/B01AVDVHTI",
    imageUrl:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop",
    category: "fitness",
    pros: [
      "5 resistance levels for progression",
      "Portable and space-efficient",
      "Includes carry bag",
      "Excellent quality for the price",
    ],
    cons: ["Can roll during exercises", "May wear out with heavy use"],
    comparisonGroup: "home-fitness",
  },
  {
    id: "yoga-mat",
    title: "BalanceFrom GoYoga All-Purpose Mat",
    description:
      "Extra thick yoga mat with carrying strap. Non-slip surface for safe practice.",
    rating: 4.5,
    reviewCount: 8765,
    priceHint: "$17.99",
    amazonUrl: "https://www.amazon.com/dp/B00FO1C3V0",
    imageUrl:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    category: "fitness",
    pros: [
      "Extra thick 1/2 inch cushioning",
      "Non-slip textured surface",
      "Includes carrying strap",
      "Easy to clean",
    ],
    cons: ["Initial rubber smell", "Heavier than standard mats"],
    comparisonGroup: "home-fitness",
  },
  {
    id: "water-bottle",
    title: "Nalgene Wide Mouth Water Bottle",
    description:
      "Durable BPA-free water bottle. Leak-proof and dishwasher safe.",
    rating: 4.8,
    reviewCount: 9876,
    priceHint: "$12.99",
    amazonUrl: "https://www.amazon.com/dp/B001NCDE8Y",
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    category: "fitness",
    pros: [
      "Virtually indestructible",
      "Wide mouth for easy filling/cleaning",
      "Graduated measurements",
      "Lifetime warranty",
    ],
    cons: ["Not insulated", "Can retain odors if not cleaned properly"],
  },
  {
    id: "xiaomi-powerbank",
    title: "Xiaomi Mi Power Bank 3 10000mAh",
    description:
      "Slim and lightweight power bank with dual USB ports. Great balance of capacity and portability.",
    rating: 4.6,
    reviewCount: 7890,
    priceHint: "$24.99",
    amazonUrl: "https://www.amazon.com/dp/B07XFBN7HX",
    imageUrl:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    category: "tech",
    pros: [
      "Slim profile fits in pockets",
      "Dual USB ports charge two devices",
      "Fast charging support",
      "Premium aluminum build",
    ],
    cons: ["Lower capacity than larger models", "No USB-C input"],
    comparisonGroup: "powerbanks",
  },
  {
    id: "beurer-desk-lamp",
    title: "Beurer TL 30 Daylight Lamp",
    description:
      "Bright daylight therapy lamp for better focus and mood. Compact design perfect for desks.",
    rating: 4.4,
    reviewCount: 3210,
    priceHint: "$34.99",
    amazonUrl: "https://www.amazon.com/dp/B00JJFZ1RO",
    imageUrl:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    category: "desk-setup",
    pros: [
      "10,000 lux bright daylight",
      "Helps with focus and energy",
      "Compact and portable",
      "UV-free LED technology",
    ],
    cons: [
      "No adjustable brightness",
      "Bright light may be too intense for some",
    ],
    comparisonGroup: "desk-lamps",
  },
];
