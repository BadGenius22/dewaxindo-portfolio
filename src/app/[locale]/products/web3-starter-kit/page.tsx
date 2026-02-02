/**
 * Web3 Starter Kit - Lead Magnet Landing Page
 * Free 22-page ebook download page
 */

import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";

import { EbookMockup } from "@/components/products/ebook-mockup";
import { LeadMagnetForm } from "@/components/products/lead-magnet-form";

const CONVERTKIT_FORM_ID =
  process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "YOUR_FORM_ID";
const PRODUCT_ID = "web3-starter-kit";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("web3StarterKit.meta");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/products/web3-starter-kit`,
      type: "website",
      images: [
        {
          url: "/og-web3-starter-kit.png",
          width: 1200,
          height: 630,
          alt: "Web3 Starter Kit",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-web3-starter-kit.png"],
    },
  };
}

export default async function Web3StarterKitPage() {
  const t = await getTranslations("web3StarterKit");
  const tForm = await getTranslations("leadMagnet");

  const benefits = [0, 1, 2, 3, 4];
  const steps = [0, 1, 2, 3, 4];
  const credentials = [0, 1, 2];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            {t("hero.headline")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            {t("hero.subheadline")}
          </p>
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
              <span className="text-base">🇮🇩</span>
              {t("hero.languageNote")}
            </span>
          </div>

          {/* Ebook Mockup */}
          <div className="mb-10">
            <EbookMockup />
          </div>

          {/* Lead Form */}
          <div className="max-w-md mx-auto">
            <LeadMagnetForm
              formId={CONVERTKIT_FORM_ID}
              productId={PRODUCT_ID}
              productTitle="Web3 Starter Kit"
              buttonText={t("hero.cta")}
              inline
            />
            <p className="text-xs text-muted-foreground mt-3">
              {tForm("form.privacyNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
            &ldquo;{t("problem.text")}&rdquo;
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground mt-6">
            {t("problem.familiar")}
          </p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("whatsInside.title")}
          </h2>
          <ul className="space-y-4">
            {benefits.map((index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-lg text-foreground">
                  {t(`whatsInside.benefits.${index}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Peek Inside Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("peekInside.title")}
          </h2>
          <div className="bg-background rounded-xl border p-6 md:p-8">
            <ul className="space-y-4">
              {steps.map((index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-lg">{t(`peekInside.steps.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("author.title")}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Author Photo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-muted">
                <Image
                  src="/images/profile.jpg"
                  alt={t("author.name")}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Author Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground">
                {t("author.name")}
              </h3>
              <p className="text-muted-foreground mb-4">{t("author.role")}</p>
              <ul className="space-y-2">
                {credentials.map((index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-emerald-500">•</span>
                    {t(`author.credentials.${index}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 px-4 bg-muted/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {t("finalCta.title")}
          </h2>
          <LeadMagnetForm
            formId={CONVERTKIT_FORM_ID}
            productId={PRODUCT_ID}
            productTitle="Web3 Starter Kit"
            buttonText={t("finalCta.cta")}
          />
        </div>
      </section>
    </main>
  );
}
