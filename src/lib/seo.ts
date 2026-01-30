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
    givenName: "Dewangga",
    familyName: "Praxindo",
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    image: `${siteConfig.url}/images/profile.jpg`,
    sameAs: getSocialUrls(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "ID",
    },
    knowsAbout: [
      "Smart Contract Development",
      "DeFi Protocols",
      "Solidity",
      "Rust",
      "Ethereum",
      "Arbitrum",
      "Solana",
      "Base",
      "Polygon",
      "Web3",
      "Blockchain",
      "Zero-Knowledge Proofs",
      "Security Auditing",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Experience",
        name: "3+ Years Smart Contract Development",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Smart Contract Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Indonesia",
      },
      skills: "Solidity, Rust, DeFi, Security Auditing, Web3",
    },
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
 * Organization schema for brand presence
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/profile.jpg`,
    description: "Smart contract development and DeFi consulting services",
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.author.email,
      contactType: "Business Inquiries",
      availableLanguage: ["English", "Indonesian"],
    },
    sameAs: getSocialUrls(),
  };
}

/**
 * CreativeWork schema for portfolio projects
 */
export function generatePortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    description: "Smart contract and DeFi projects by Dewangga Praxindo",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Factor Finance",
          description: "Composable DeFi platform on Arbitrum with $50M+ TVL",
          applicationCategory: "DeFi Protocol",
          operatingSystem: "Ethereum Virtual Machine",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "RekonGG",
          description: "AI-powered esports prediction market",
          applicationCategory: "Prediction Market",
          operatingSystem: "Blockchain",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "LazorKit SDK",
          description: "Passkey-based wallet infrastructure on Solana",
          applicationCategory: "Wallet SDK",
          operatingSystem: "Solana",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "Vouch Protocol",
          description: "Zero-knowledge identity verification using Noir",
          applicationCategory: "Identity Protocol",
          operatingSystem: "Ethereum",
        },
      },
    ],
  };
}

/**
 * Combine all schemas for the homepage
 */
export function generateHomepageSchemas(product?: Product): JsonLdSchema[] {
  const schemas: JsonLdSchema[] = [
    generatePersonSchema(),
    generateWebsiteSchema(),
    generateProfessionalServiceSchema(),
    generateOrganizationSchema(),
    generatePortfolioSchema(),
  ];

  if (product) {
    schemas.push(generateProductSchema(product));
  }

  return schemas;
}
