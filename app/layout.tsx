import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  title: { default: "Five Star Growth | Christchurch Growth Engine", template: "%s | Five Star Growth" },
  description: "Growth systems for ambitious Christchurch businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NZ"><body><Navbar /><PageTransition>{children}</PageTransition><Footer /></body></html>;
}
