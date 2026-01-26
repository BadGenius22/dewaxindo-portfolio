import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Generate robots.txt for SEO
 * Allows all crawlers, points to sitemap
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
