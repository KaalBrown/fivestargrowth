import type { MetadataRoute } from "next";
import { business } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/contact", "/blog", "/services/seo", "/services/smart-website", "/services/review-request", "/services/social-media"]; return routes.map((route) => ({ url: `${business.url}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : .7 })); }
