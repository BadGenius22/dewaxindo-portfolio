"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getFeaturedProduct, formatPrice } from "@/data/products";

export function Products() {
  const product = getFeaturedProduct();

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Products"
            subtitle="Resources to accelerate your Web3 journey"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <Link href={`/products/${product.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] md:aspect-auto bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col p-6 md:p-8">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        {product.type === "pdf"
                          ? "Digital Guide"
                          : product.type}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="mt-4 text-muted-foreground line-clamp-3">
                      {product.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">
                          {formatPrice(product.price, product.currency)}
                        </span>
                        <span className="text-muted-foreground">
                          {product.currency}
                        </span>
                      </div>

                      <Button size="lg" className="w-full mt-4">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* View All Products Link */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
