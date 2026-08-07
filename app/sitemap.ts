import type { MetadataRoute } from "next";
import { business } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/contact", "/blog", "/for-clinics", "/for-tradies", "/services/seo", "/services/smart-website", "/services/review-request", "/services/social-media", "/loyalty-program", "/privacy"]; return routes.map((route) => ({ url: `${business.url}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : .7 })); }
