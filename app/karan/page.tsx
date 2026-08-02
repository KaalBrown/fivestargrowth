import type { Metadata } from "next";
import { DigitalVisitingCard } from "@/components/team/DigitalVisitingCard";
import { teamCards } from "@/lib/teamCards";

export const metadata: Metadata = {
  title: "Karan Vinayak | Director",
  description: "Digital visiting card for Karan Vinayak, Director at Five Star Growth.",
};

export default function KaranDigitalCardPage() {
  return <DigitalVisitingCard card={teamCards.karan} />;
}
