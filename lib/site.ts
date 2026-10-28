export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

/**
 * All editable business information lives here.
 * Replace the placeholder phone, email, address and social URLs with the
 * company's real details before publishing the site.
 */
export const siteConfig = {
  name: "Siham Tours",
  wordmark: "SIHAM",
  tagline: "Journeys made personal.",
  description:
    "Thoughtfully planned tours to remarkable places, with local knowledge, beautiful stays and care in every detail.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sihamtours.example",
  contact: {
    phone: {
      display: "+252 61 000 0000",
      href: "tel:+252610000000",
      isPlaceholder: true,
    },
    email: {
      display: "hello@sihamtours.example",
      href: "mailto:hello@sihamtours.example",
      isPlaceholder: true,
    },
    whatsapp: {
      display: "+252 61 000 0000",
      number: "252610000000",
      href: "https://wa.me/252610000000",
      isPlaceholder: true,
    },
    address: {
      lines: ["Office address to be added", "Mogadishu, Somalia"],
      isPlaceholder: true,
    },
    hours: "Monday – Saturday · 9:00 – 18:00 EAT",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
  ],
  map: {
    // Replace with an embed URL for the actual office location.
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=45.265%2C1.995%2C45.385%2C2.095&layer=mapnik&marker=2.045%2C45.320",
    link: "https://www.openstreetmap.org/?mlat=2.045&mlon=45.320#map=13/2.045/45.320",
    label: "Mogadishu, Somalia",
    note: "Map shown is indicative. Contact us for the exact office location.",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sihamtours.example";
