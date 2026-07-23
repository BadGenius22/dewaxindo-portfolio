/**
 * Products listing page
 * SEO: /products - main category page for digital products
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

import { products, formatPrice } from "@/data/products";
import { siteConfig } from "@/data/site";
import { locales, defaultLocale } from "@/i18n/config";
import { generateBreadcrumbSchema } from "@/lib/seo";

// SEO Metadata (per-locale canonical + hreflang)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const path = "/products";
  const localeUrl = (loc: string) =>
    loc === defaultLocale ? `${siteConfig.url}${path}` : `${siteConfig.url}/${loc}${path}`;
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = localeUrl(loc);
  });
  languages["x-default"] = localeUrl(defaultLocale);

  return {
    title: t("title"),
    description: t("metaDescription"),
    keywords: [
      "Web3 guides",
      "Smart contract templates",
      "DeFi resources",
      "Blockchain development",
      "Solidity tutorials",
    ],
    alternates: { canonical: localeUrl(locale), languages },
    openGraph: {
      title: `${t("title")} | Dewangga Praxindo`,
      description: t("metaDescription"),
      url: localeUrl(locale),
      type: "website",
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("products");

  const base = siteConfig.url;
  const productsUrl = locale === defaultLocale ? `${base}/products` : `${base}/${locale}/products`;
  const homeUrl = locale === defaultLocale ? base : `${base}/${locale}`;
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: homeUrl },
    { name: t("title"), url: productsUrl },
  ]);

  return (
    <main id="main-content" className="pk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <h1 className="sr-only">{t("title")}: Web3 & DeFi developer guides and templates</h1>

      <section className="section">
        <div className="forge-container">
          <header className="sec-head">
            <div className="marker">
              <span className="num">§ 07</span> {t("label")}
            </div>
            <div>
              <h2>{t("title")}</h2>
              <p className="pk-lead" style={{ marginTop: "16px", maxWidth: "46ch" }}>
                {t("subtitle")}
              </p>
            </div>
          </header>

          <div className="pk-catalog">
            {products.map((product) => {
              const isFree = Boolean(product.leadMagnet?.enabled);
              return (
                <Link key={product.id} href={`/products/${product.id}`} className="pk-card">
                  <div className="pk-card-media">
                    <Image
                      src={product.image}
                      alt={`${t(`items.${product.id}.title`)}: ${t(`items.${product.id}.subtitle`)}`}
                      fill
                      className="pk-img"
                      sizes="(max-width: 900px) 100vw, 480px"
                    />
                    {(isFree || product.badge) && (
                      <span className="pk-card-badge">{isFree ? t("free") : product.badge}</span>
                    )}
                  </div>

                  <div className="pk-card-body">
                    <p className="pk-card-type">{t(`items.${product.id}.meta`)}</p>
                    <h3 className="pk-card-title">{t(`items.${product.id}.title`)}</h3>
                    <p className="pk-card-sub">{t(`items.${product.id}.subtitle`)}</p>
                    <p className="pk-card-desc">{t(`items.${product.id}.description`)}</p>

                    <ul className="pk-card-feats">
                      {product.features.slice(0, 4).map((_, i) => (
                        <li key={i}>{t(`items.${product.id}.features.${i}`)}</li>
                      ))}
                    </ul>

                    <div className="pk-card-foot">
                      <span className="pk-price">
                        {isFree ? t("free") : formatPrice(product.price, product.currency)}
                      </span>
                      <span className="pk-cta">
                        {t("viewDetails")} ↗
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            <div className="pk-slot">
              <span className="tag">{t("comingSoon.title")}</span>
              <p>{t("comingSoon.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
