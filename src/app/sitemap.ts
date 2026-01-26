import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Generate XML sitemap for SEO
 * Google doesn't index hash fragments - only include actual URLs
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add new pages here as they're created
    // Example: { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];
}
