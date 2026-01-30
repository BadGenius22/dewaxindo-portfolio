import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

/**
 * Generate XML sitemap for SEO
 * Includes all pages for Google indexing
 * Using static dates to prevent cache invalidation on every request
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static last modified date - update this when content changes
  const lastModified = new Date("2026-01-30");

  // Product pages - SEO optimized slugs
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Products listing page
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual product pages
    ...productPages,
  ];
}
