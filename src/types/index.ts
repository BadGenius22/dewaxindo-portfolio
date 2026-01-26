/**
 * Core TypeScript interfaces for the portfolio website
 */

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  links: {
    live?: string;
    github?: string;
    docs?: string;
  };
  featured: boolean;
  role: string;
  year: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  type: "pdf" | "course" | "template";
  purchaseUrl: string;
  features: string[];
  badge?: "New" | "Popular" | "Best Seller";
}

export interface SocialLink {
  platform: "twitter" | "github" | "linkedin" | "telegram" | "email";
  url: string;
  label: string;
  username: string;
}

// SEO metadata types
export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// For structured data (Google SEO / AI Search Optimization)
export interface PersonSchema {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[]; // Social links
}

export interface ProductSchema {
  name: string;
  description: string;
  image: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
