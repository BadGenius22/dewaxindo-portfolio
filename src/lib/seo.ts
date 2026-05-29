/**
 * SEO utilities for structured data (JSON-LD)
 * Implements Schema.org markup for Google Search and AI Overviews
 *
 * Entity graph: every node carries a stable @id (#person, #website,
 * #organization, #service, #webpage, #portfolio) and cross-references the
 * others by @id so Google/AI engines can resolve a single connected graph.
 */

import { siteConfig } from "@/data/site";
import { getSocialUrls } from "@/data/socials";
import { getFeaturedProjects } from "@/data/projects";
import { defaultLocale } from "@/i18n/config";
import type { Product } from "@/types";

/**
 * Person schema for the portfolio owner
 * Helps Google understand the author and display knowledge panels
 */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    mainEntityOfPage: `${siteConfig.url}/#webpage`,
    name: siteConfig.author.name,
    givenName: "Dewangga",
    familyName: "Praxindo",
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/profile.jpg`,
      width: 1277,
      height: 1383,
    },
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
      "Move",
      "Sui Move",
      "Anchor Framework",
      "Foundry",
      "Ethereum",
      "Arbitrum",
      "Base",
      "Solana",
      "Sui",
      "Walrus Decentralized Storage",
      "Seal Encryption",
      "Noir",
      "Zero-Knowledge Proofs",
      "ZK Circuits",
      "Account Abstraction",
      "Passkeys (WebAuthn)",
      "x402 Payments",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Chainlink VRF",
      "Web3",
      "Blockchain",
      "Smart Contract Security Auditing",
    ],
    nationality: { "@type": "Country", name: "Indonesia" },
    worksFor: {
      "@type": "Organization",
      name: "Factor Finance",
      url: "https://pro.factor.fi",
    },
    award: ["Chainlink Fall 2022 Hackathon Winner — Top Quality Project"],
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
      skills: "Solidity, Rust, Move, Sui, DeFi, ZK Proofs, Security Auditing, Web3",
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
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: ["en", "id"],
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.author.name} - Smart Contract Development`,
    description:
      "Professional DeFi and smart contract development. Expertise in Solidity, Rust, and Move across Ethereum, Arbitrum, Base, Solana, and Sui, plus ZK proofs (Noir) and account abstraction.",
    url: siteConfig.url,
    provider: { "@id": `${siteConfig.url}/#person` },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Smart Contract Development",
      "Sui Move Development",
      "DeFi Protocol Design",
      "ZK Circuit Development",
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
      url: product.purchaseUrl || `${siteConfig.url}/products/${product.id}`,
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
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og-image.png`,
    description: "Smart contract development and DeFi consulting services",
    founder: { "@id": `${siteConfig.url}/#person` },
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
 * Map a project's tags to a representative operating system / platform.
 * Keeps the portfolio schema's operatingSystem field accurate as projects change.
 */
function projectOperatingSystem(tags: string[]): string {
  const t = tags.map((x) => x.toLowerCase());
  if (t.includes("sui move") || t.includes("sui")) return "Sui";
  if (t.includes("solana") || t.includes("anchor")) return "Solana";
  if (t.includes("arbitrum")) return "Arbitrum";
  if (t.includes("polygon")) return "Polygon";
  if (t.includes("base")) return "Base";
  if (t.includes("solidity") || t.includes("foundry")) return "Ethereum Virtual Machine";
  if (t.includes("pwa") || t.includes("next.js")) return "Web";
  return "Web3";
}

/**
 * CreativeWork schema for portfolio projects.
 * Derived from src/data/projects.ts so it never drifts from the real project list.
 */
export function generatePortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#portfolio`,
    name: "Portfolio Projects",
    description: `Smart contract, DeFi and Web3 projects by ${siteConfig.author.name}`,
    numberOfItems: getFeaturedProjects().length,
    itemListElement: getFeaturedProjects().map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.title,
        description: p.description,
        applicationCategory: "Smart Contract / Web3 Application",
        operatingSystem: projectOperatingSystem(p.tags),
        keywords: p.tags.join(", "),
        ...(p.links.live ? { url: p.links.live } : {}),
        ...(p.links.github ? { sameAs: [p.links.github] } : {}),
        author: { "@id": `${siteConfig.url}/#person` },
        ...(p.image ? { image: `${siteConfig.url}${p.image}` } : {}),
      },
    })),
  };
}

/**
 * ProfilePage schema — wraps the homepage as a profile of the Person entity.
 * Strong signal for "who is X" queries and AI-engine citation.
 */
export function generateProfilePageSchema(locale: string = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    inLanguage: locale,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    about: { "@id": `${siteConfig.url}/#person` },
    dateModified: new Date().toISOString(),
  };
}

/**
 * Combine all schemas for the homepage
 */
export function generateHomepageSchemas(
  locale: string = defaultLocale,
  product?: Product
): JsonLdSchema[] {
  const schemas: JsonLdSchema[] = [
    generateProfilePageSchema(locale),
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
