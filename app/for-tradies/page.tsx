import type { Metadata } from "next";
import { IndustryLanding } from "@/components/sections/IndustryLanding";

export const metadata: Metadata = {
  title: "Digital Growth for Tradies & Field Services",
  description: "Smart websites, Google reviews, and local search visibility for tradies and service providers.",
};

export default function TradiesPage() {
  return <IndustryLanding eyebrow="For tradies & field services" headline="Turn local Google searches into high-value job calls." subheadline="Built specifically for plumbers, electricians, builders, and local service pros." callout="Tired of tire-kickers and missing out on 5-star Google reviews? We upgrade your online presence to land high-value jobs on autopilot." outcomes={["Rank Top #3 on Google Maps when local customers search for your trade.", "Turn website visitors into steady job calls with high-converting smart layouts.", "Automate 5-Star Google Reviews to build unstoppable local trust."]} serviceLabels={["Lead-focused tradie websites", "Google Maps visibility for field services", "Customer review automation"]} />;
}
