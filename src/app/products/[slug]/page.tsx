/**
 * Individual product page
 * SEO: /products/[slug] - optimized product detail page
 * Meta Ads: ViewContent event tracking
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/ui/animated-section";
import { products, formatPrice } from "@/data/products";
import { siteConfig } from "@/data/site";
import { ProductPurchaseButton } from "./purchase-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all products (SSG)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

// Generate SEO metadata for each product
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.title} - ${product.subtitle}`;
  const description = product.description;
  const url = `${siteConfig.url}/products/${product.id}`;

  return {
    title,
    description,
    keywords: [
      product.title,
      product.type,
      "Web3",
      "DeFi",
      "Smart contracts",
      "Blockchain",
    ],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${product.image}`,
          width: 600,
          height: 800,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${product.image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <AnimatedSection>
            <nav className="mb-8">
              <Link
                href="/products"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </nav>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <AnimatedSection>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted border">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Product Details */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.type === "pdf" ? "Digital Guide" : product.type}
                </p>

                <h1 className="mt-2 text-3xl md:text-4xl font-bold">
                  {product.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.subtitle}
                </p>

                <Separator className="my-6" />

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mt-8">
                  <h2 className="font-semibold mb-4">What&apos;s Included</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-8" />

                {/* Price & Purchase */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold">
                      {formatPrice(product.price, product.currency)}
                    </span>
                    <span className="text-muted-foreground">
                      {product.currency}
                    </span>
                  </div>

                  <ProductPurchaseButton product={product} />

                  <p className="mt-4 text-sm text-center text-muted-foreground">
                    Secure checkout via Gumroad • Instant delivery
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
  );
}
