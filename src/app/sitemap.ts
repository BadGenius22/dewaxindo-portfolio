import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

/**
 * Generate XML sitemap for SEO
 * Includes all pages for Google indexing
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Product pages - SEO optimized slugs
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Products listing page
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual product pages
    ...productPages,
  ];
}
