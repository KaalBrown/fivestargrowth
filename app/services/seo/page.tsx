import { ServiceDetailPage } from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Growth Engine | Local SEO" };
export default function SeoPage() { return <ServiceDetailPage serviceKey="growth" />; }
