import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "web3-starter-kit",
    title: "Web3 Starter Kit",
    subtitle: "The Complete Guide",
    description:
      "Everything you need to start building in Web3. A comprehensive PDF guide covering smart contract development, DeFi concepts, security best practices, and career advice.",
    image: "/images/products/web3-starter-kit.png",
    price: 29,
    currency: "USD",
    type: "pdf",
    purchaseUrl: "https://dewaxindo.gumroad.com/l/web3-starter-kit",
    features: [
      "50+ pages of curated content",
      "Smart contract templates (ERC20, ERC721, Staking)",
      "Security checklist & audit preparation guide",
      "DeFi protocol architecture patterns",
      "Resource links to best tools & docs",
      "Lifetime updates included",
    ],
    badge: "New",
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
