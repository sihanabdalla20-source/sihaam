export type TourCategory =
  | "Adventure"
  | "Beach Holidays"
  | "Cultural Tours"
  | "Family Trips";

export type Tour = {
  slug: string;
  name: string;
  destination: string;
  country: string;
  category: TourCategory;
  price: number;
  duration: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  highlights: string[];
  included: string[];
  bestFor: string;
  featured?: boolean;
};

export const tourCategories: Array<"All" | TourCategory> = [
  "All",
  "Adventure",
  "Beach Holidays",
  "Cultural Tours",
  "Family Trips",
];

/**
 * Sample tour packages.
 * To update the catalogue, edit or add entries in this array. Every card,
 * filter, detail view and inquiry link is generated from this data.
 */
export const tours: Tour[] = [
  {
    slug: "zanzibar-island-escape",
    name: "Zanzibar Island Escape",
    destination: "Zanzibar",
    country: "Tanzania",
    category: "Beach Holidays",
    price: 1250,
    duration: "6 days / 5 nights",
    summary:
      "Powder-white sand, spice-scented lanes and unhurried days beside the Indian Ocean.",
    description:
      "Slow down in Zanzibar. Wander the carved doorways and lively markets of Stone Town, follow the scent of cloves into the countryside, then retreat to the island's northern shore for warm water, fresh seafood and long, golden evenings.",
    image: "/images/zanzibar.jpg",
    imageAlt: "Turquoise Indian Ocean water beside a white sand beach in Zanzibar",
    highlights: [
      "Private Stone Town heritage walk",
      "Spice farm visit and traditional lunch",
      "Four nights on the north coast",
      "Sunset dhow cruise and sandbank picnic",
    ],
    included: [
      "Handpicked hotel and beach lodge",
      "Daily breakfast and selected meals",
      "Airport and inter-island transfers",
      "Local guide throughout your stay",
    ],
    bestFor: "Couples, friends and slow-travel lovers",
    featured: true,
  },
  {
    slug: "skies-over-cappadocia",
    name: "Skies Over Cappadocia",
    destination: "Cappadocia",
    country: "Türkiye",
    category: "Adventure",
    price: 980,
    duration: "5 days / 4 nights",
    summary:
      "Wake above a fairytale landscape of rock valleys, cave homes and drifting balloons.",
    description:
      "Cappadocia is best experienced slowly and from above. Stay in a characterful cave hotel, walk through ancient valleys, meet local artisans and take to the sky at sunrise for one of travel's most unforgettable views.",
    image: "/images/cappadocia.jpg",
    imageAlt: "Hot air balloons floating over the valleys of Cappadocia at sunrise",
    highlights: [
      "Sunrise hot-air balloon flight",
      "Göreme Open Air Museum",
      "Guided walk through Love Valley",
      "Pottery workshop in Avanos",
    ],
    included: [
      "Boutique cave hotel accommodation",
      "Daily breakfast",
      "Private airport transfers",
      "Experienced local guide",
    ],
    bestFor: "Adventurers, couples and photographers",
    featured: true,
  },
  {
    slug: "istanbul-through-the-ages",
    name: "Istanbul Through the Ages",
    destination: "Istanbul",
    country: "Türkiye",
    category: "Cultural Tours",
    price: 1150,
    duration: "5 days / 4 nights",
    summary:
      "A layered city of grand mosques, bazaars, ferries and beautifully imperfect streets.",
    description:
      "Spend five days between two continents, discovering the stories that shaped Istanbul. See its landmark architecture, taste its food culture and take a ferry across the Bosphorus — with enough unhurried time to simply wander.",
    image: "/images/istanbul.jpg",
    imageAlt: "Historic Istanbul skyline and waterfront at golden hour",
    highlights: [
      "Hagia Sophia and Blue Mosque",
      "Topkapi Palace and Grand Bazaar",
      "Bosphorus ferry crossing",
      "Guided Kadıköy food walk",
    ],
    included: [
      "Central boutique hotel",
      "Daily breakfast",
      "Airport transfers",
      "Small-group guided experiences",
    ],
    bestFor: "Culture seekers and first-time visitors",
  },
  {
    slug: "serengeti-ngorongoro-safari",
    name: "Serengeti & Ngorongoro Safari",
    destination: "Serengeti",
    country: "Tanzania",
    category: "Adventure",
    price: 2480,
    duration: "7 days / 6 nights",
    summary:
      "Big skies, wide plains and the quiet thrill of watching wildlife in its own rhythm.",
    description:
      "A considered safari that balances extraordinary wildlife with comfortable camps and time to take it all in. Explore the Serengeti and the Ngorongoro Crater with a dedicated guide, guided by the season and the movement of the herds.",
    image: "/images/destination-serengeti.jpg",
    imageAlt: "Wildlife on the open savannah in the Serengeti",
    highlights: [
      "Full-day Ngorongoro Crater game drive",
      "Two nights in a Serengeti camp",
      "Sunrise and sunset game drives",
      "Maasai village visit with a local host",
    ],
    included: [
      "Safari camps and lodges",
      "Full board throughout the safari",
      "4x4 vehicle with dedicated guide",
      "Park and conservation fees",
    ],
    bestFor: "Wildlife lovers and special-occasion trips",
    featured: true,
  },
  {
    slug: "maldives-overwater-retreat",
    name: "Maldives Overwater Retreat",
    destination: "Maldives",
    country: "Maldives",
    category: "Beach Holidays",
    price: 2950,
    duration: "5 days / 4 nights",
    summary:
      "Clear lagoons, private overwater villas and nothing more pressing than the next swim.",
    description:
      "A restorative escape built around the water. Settle into an overwater villa, snorkel straight from your deck, dine under the stars and spend your days at the gentle pace of the tide.",
    image: "/images/maldives.jpg",
    imageAlt: "Overwater villas and clear lagoon in the Maldives",
    highlights: [
      "Four nights in an overwater villa",
      "Private sandbank excursion",
      "Guided reef snorkelling",
      "Sunset dinner on the beach",
    ],
    included: [
      "Overwater villa accommodation",
      "Half-board dining",
      "Speedboat transfers",
      "Snorkelling equipment",
    ],
    bestFor: "Honeymoons and restful escapes",
  },
  {
    slug: "marrakech-atlas-mountains",
    name: "Marrakech & the Atlas Mountains",
    destination: "Marrakech",
    country: "Morocco",
    category: "Cultural Tours",
    price: 1320,
    duration: "6 days / 5 nights",
    summary:
      "Rose-coloured streets, mountain air and a rich blend of craft, food and hospitality.",
    description:
      "Move between the energy of Marrakech and the calm of the Atlas Mountains. Explore souks and gardens, share mint tea with mountain families and watch the light change over the High Atlas.",
    image: "/images/morocco.jpg",
    imageAlt: "Blue-painted lanes and traditional architecture in Morocco",
    highlights: [
      "Guided Marrakech medina walk",
      "Jardin Majorelle and Bahia Palace",
      "Atlas Mountains hike",
      "Berber village lunch",
    ],
    included: [
      "Riad and mountain lodge stays",
      "Daily breakfast",
      "Private driver-guide",
      "Selected cultural experiences",
    ],
    bestFor: "Curious travelers and culture lovers",
  },
  {
    slug: "dubai-family-discovery",
    name: "Dubai Family Discovery",
    destination: "Dubai",
    country: "United Arab Emirates",
    category: "Family Trips",
    price: 1680,
    duration: "5 days / 4 nights",
    summary:
      "Big-city excitement, desert adventures and plenty of easygoing family time.",
    description:
      "A family break with something for every age. Combine Dubai's landmarks and beaches with a desert evening, a waterpark day and enough flexibility for spontaneous pool afternoons.",
    image: "/images/dubai.jpg",
    imageAlt: "Dubai skyline rising above the water at dusk",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with dinner",
      "Family beach day",
      "Dubai Marina dhow cruise",
    ],
    included: [
      "Family-friendly hotel",
      "Daily breakfast",
      "Private airport transfers",
      "Selected attraction tickets",
    ],
    bestFor: "Families with children of all ages",
  },
  {
    slug: "amalfi-coast-family-summer",
    name: "Amalfi Coast Family Summer",
    destination: "Amalfi Coast",
    country: "Italy",
    category: "Family Trips",
    price: 1890,
    duration: "6 days / 5 nights",
    summary:
      "Cliffside villages, lemon groves and long Mediterranean days made for sharing.",
    description:
      "An easygoing introduction to southern Italy for the whole family. Base yourselves by the sea, explore colourful villages by boat and make time for gelato, swimming and leisurely lunches.",
    image: "/images/amalfi.jpg",
    imageAlt: "Colourful cliffside village on the Amalfi Coast",
    highlights: [
      "Private boat day along the coast",
      "Pompeii family-friendly visit",
      "Lemon farm tour and tasting",
      "Free time at the beach",
    ],
    included: [
      "Family-sized apartment or hotel rooms",
      "Daily breakfast",
      "Private transfers",
      "Local host support",
    ],
    bestFor: "Families seeking a relaxed European summer",
  },
];

export const featuredTours = tours.filter((tour) => tour.featured);

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
