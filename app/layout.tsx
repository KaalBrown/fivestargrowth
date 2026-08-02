import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/motion/PageTransition";
import { WhatsAppChat } from "@/components/ui/WhatsAppChat";
import { business, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: "Five Star Growth | Smart Websites, Reviews & Local SEO", template: "%s | Five Star Growth" },
  description: "Smart websites, automated Google reviews, and local SEO for businesses, tradies, clinics, and professional services across Christchurch and Canterbury.",
  keywords: ["local SEO Christchurch", "local SEO Canterbury", "Google Maps ranking", "Google review automation", "smart website design", "tradie marketing", "clinic marketing", "digital marketing Christchurch"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: business.name,
    title: "Five Star Growth | Smart Websites, Reviews & Local SEO",
    description: "Turn local searches into calls, bookings, and stronger customer trust across Christchurch and Canterbury.",
  },
  twitter: { card: "summary_large_image", title: "Five Star Growth | Local Growth Systems", description: "Smart websites, automated reviews, and local SEO for Christchurch and Canterbury." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NZ"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} /><Navbar /><PageTransition>{children}</PageTransition><Footer /><WhatsAppChat /></body></html>;
}
