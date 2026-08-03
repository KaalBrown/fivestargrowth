import { ServiceDetailPage } from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Smart Website Pack" };
export default function SmartWebsitePage() { return <ServiceDetailPage serviceKey="website" />; }
