/**
 * Products listing page
 * SEO: /products - main category page for digital products
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { products, formatPrice } from "@/data/products";
import { siteConfig } from "@/data/site";

// SEO Metadata
export const metadata: Metadata = {
  title: "Products",
  description:
    "Digital products and resources to accelerate your Web3 development journey. Guides, templates, and tools by Dewangga Praxindo.",
  keywords: [
    "Web3 guides",
    "Smart contract templates",
    "DeFi resources",
    "Blockchain development",
    "Solidity tutorials",
  ],
  openGraph: {
    title: "Products | Dewangga Praxindo",
    description:
      "Digital products and resources to accelerate your Web3 development journey.",
    url: `${siteConfig.url}/products`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Products"
            subtitle="Resources to accelerate your Web3 journey"
          />
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={0.1 * index}>
              <Link
                href={`/products/${product.id}`}
                className="group block h-full"
              >
                <div className="relative flex flex-col overflow-hidden rounded-xl border bg-card h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.type === "pdf" ? "Digital Guide" : product.type}
                    </p>
                    <h2 className="mt-1 font-semibold text-lg group-hover:text-primary transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {product.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-lg font-bold">
                        {formatPrice(product.price, product.currency)}
                      </span>
                      <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
