import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "web3-starter-kit",
    title: "Web3 Starter Kit",
    subtitle: "5 First Steps",
    description:
      "A 22-page practical guide to start your Web3 developer journey. From zero to job-ready with clear, actionable steps.",
    image: "/og-web3-starter-kit.png",
    price: 0,
    currency: "USD",
    type: "pdf",
    purchaseUrl: "",
    features: [
      "5 practical steps from zero to job-ready",
      "Blockchain concepts without jargon",
      "Curated tools & resources",
      "Tips from $50M+ TVL DeFi experience",
      "Telegram community access",
    ],
    badge: "Free",
    leadMagnet: {
      enabled: true,
      formId: "YOUR_CONVERTKIT_FORM_ID",
      deliveryType: "email",
    },
  },
];

// Helper to format price
export const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
};

// Helper to get featured product
export const getFeaturedProduct = () => products[0];
