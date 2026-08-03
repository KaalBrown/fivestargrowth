import { ServiceDetailPage } from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Trust Engine | Reviews & Google Maps" };
export default function ReviewRequestPage() { return <ServiceDetailPage serviceKey="trust" />; }
