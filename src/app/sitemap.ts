import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { locales } from "@/i18n/config";

/**
 * Generate XML sitemap for SEO
 * Includes all pages for Google indexing with multi-locale support
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-02-01");

  const routes: MetadataRoute.Sitemap = [];

  // Generate entries for each locale
  locales.forEach((locale) => {
    // Homepage
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}`])
        ),
      },
    });

    // Products listing page
    routes.push({
      url: `${baseUrl}/${locale}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}/products`])
        ),
      },
    });

    // Individual product pages
    products.forEach((product) => {
      routes.push({
        url: `${baseUrl}/${locale}/products/${product.id}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}/products/${product.id}`])
          ),
        },
      });
    });
  });

  return routes;
}
