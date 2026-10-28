import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siham Tours | Thoughtfully Planned Journeys",
    template: "%s | Siham Tours",
  },
  description: siteConfig.description,
  applicationName: "Siham Tours",
  keywords: [
    "Siham Tours",
    "tourism",
    "tour packages",
    "travel agency",
    "tailor-made travel",
    "beach holidays",
    "cultural tours",
    "adventure travel",
    "family trips",
  ],
  authors: [{ name: "Siham Tours" }],
  creator: "Siham Tours",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Siham Tours",
    title: "Siham Tours | Thoughtfully Planned Journeys",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 800,
        alt: "A turquoise coastline and white sand beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siham Tours | Thoughtfully Planned Journeys",
    description: siteConfig.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071f28",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </body>
    </html>
  );
}
