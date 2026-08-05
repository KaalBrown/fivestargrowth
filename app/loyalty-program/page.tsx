import type { Metadata } from "next";
import { LoyaltyProgramLanding } from "@/components/sections/LoyaltyProgramLanding";

export const metadata: Metadata = {
  title: "Smart Scanner Loyalty Program",
  description: "Turn first-time walk-ins into regulars and fresh Google reviews with Five Star Growth's two-tap Smart Scanner loyalty program.",
  alternates: { canonical: "/loyalty-program/" },
};

export default function LoyaltyProgramPage() {
  return <LoyaltyProgramLanding />;
}
