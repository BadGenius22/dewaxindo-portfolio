import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { locales, defaultLocale } from "@/i18n/config";

/**
 * Generate XML sitemap for SEO
 * With as-needed locale prefix: default locale (en) uses / not /en
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  // Only product ids that have a real static page under /products/[id]
  const PRODUCTS_WITH_PAGES = ["web3-starter-kit"];

  const routes: MetadataRoute.Sitemap = [];

  const localePath = (locale: string, path: string = "") =>
    locale === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;

  locales.forEach((locale) => {
    routes.push({
      url: localePath(locale),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, localePath(loc)])
        ),
      },
    });

    routes.push({
      url: localePath(locale, "/products"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, localePath(loc, "/products")])
        ),
      },
    });

    products
      .filter((product) => PRODUCTS_WITH_PAGES.includes(product.id))
      .forEach((product) => {
        routes.push({
          url: localePath(locale, `/products/${product.id}`),
          lastModified,
          changeFrequency: "weekly",
          priority: 0.8,
          alternates: {
            languages: Object.fromEntries(
              locales.map((loc) => [loc, localePath(loc, `/products/${product.id}`)])
            ),
          },
        });
      });
  });

  return routes;
}
