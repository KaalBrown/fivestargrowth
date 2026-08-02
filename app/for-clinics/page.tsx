import type { Metadata } from "next";
import { IndustryLanding } from "@/components/sections/IndustryLanding";

export const metadata: Metadata = {
  title: "Digital Growth for Clinics & Medical Practices",
  description: "Smart websites, patient reviews, and local Google visibility for clinics and medical practices.",
};

export default function ClinicsPage() {
  return <IndustryLanding eyebrow="For clinics & medical practices" headline="Turn local medical searches into booked patient appointments." subheadline="Built specifically for clinics, dental practices, and allied health professionals." callout="Tired of empty website traffic and slow patient reviews? We transform your clinic's online reputation and turn local searches into booked patients." outcomes={["Rank Top #3 on Google Maps when nearby patients search for your treatments.", "Turn clinic website visitors into daily patient bookings with high-converting smart layouts.", "Automate 5-Star Google Reviews to build unstoppable local patient trust."]} serviceLabels={["Clinic-ready smart websites", "Google Maps visibility for clinics", "Patient review automation"]} />;
}
