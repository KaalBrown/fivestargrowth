import { ServiceDetailPage } from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Social Presence Management" };
export default function SocialMediaPage() { return <ServiceDetailPage serviceKey="social" />; }
