/**
 * SEO utilities for structured data (JSON-LD)
 * Implements Schema.org markup for Google Search and AI Overviews
 */

import { siteConfig } from "@/data/site";
import { getSocialUrls } from "@/data/socials";
import type { Product } from "@/types";

/**
 * Person schema for the portfolio owner
 * Helps Google understand the author and display knowledge panels
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    sameAs: getSocialUrls(),
    knowsAbout: [
      "Smart Contract Development",
      "DeFi Protocols",
      "Solidity",
      "Rust",
      "Ethereum",
      "Arbitrum",
      "Solana",
      "Web3",
      "Blockchain",
    ],
  };
}

/**
 * Website schema for the portfolio site
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}

/**
 * Professional service schema
 * Helps with local/professional search results
 */
export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.author.name} - Smart Contract Development`,
    description:
      "Professional DeFi and smart contract development services. Expertise in Solidity, Rust, Ethereum, Arbitrum, and Solana.",
    url: siteConfig.url,
    provider: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Smart Contract Development",
      "DeFi Protocol Design",
      "Security Auditing",
      "Web3 Consulting",
    ],
  };
}

/**
 * Product schema for digital products
 * Required for Google Shopping and rich results
 */
export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      url: product.purchaseUrl,
      seller: {
        "@type": "Person",
        name: siteConfig.author.name,
      },
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: "Digital Product",
  };
}

/**
 * Breadcrumb schema for navigation
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ schema for common questions
 * Helps with AI Overviews and featured snippets
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generic schema type for JSON-LD
type JsonLdSchema = Record<string, unknown>;

/**
 * Combine all schemas for the homepage
 */
export function generateHomepageSchemas(product?: Product): JsonLdSchema[] {
  const schemas: JsonLdSchema[] = [
    generatePersonSchema(),
    generateWebsiteSchema(),
    generateProfessionalServiceSchema(),
  ];

  if (product) {
    schemas.push(generateProductSchema(product));
  }

  return schemas;
}
