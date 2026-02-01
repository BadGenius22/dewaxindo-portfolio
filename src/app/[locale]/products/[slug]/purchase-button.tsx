"use client";

/**
 * Product purchase button with Meta Ads tracking
 * Tracks: ViewContent on mount, InitiateCheckout on click
 */

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  trackViewContent,
  trackInitiateCheckout,
  sendToCAPI,
} from "@/lib/analytics";
import type { Product } from "@/types";

interface ProductPurchaseButtonProps {
  product: Product;
}

export function ProductPurchaseButton({ product }: ProductPurchaseButtonProps) {
  // Track ViewContent on page load (Meta Ads)
  useEffect(() => {
    const eventId = trackViewContent(
      product.id,
      "product",
      product.title,
      product.price,
      product.currency
    );

    // Send to CAPI for better tracking
    sendToCAPI("ViewContent", eventId, {
      content_ids: [product.id],
      content_type: "product",
      content_name: product.title,
      value: product.price,
      currency: product.currency,
    });
  }, [product]);

  const handlePurchaseClick = () => {
    const eventId = trackInitiateCheckout(
      product.id,
      product.title,
      product.price,
      product.currency
    );

    // Send to CAPI for better tracking
    sendToCAPI("InitiateCheckout", eventId, {
      content_ids: [product.id],
      content_name: product.title,
      content_type: "product",
      value: product.price,
      currency: product.currency,
      num_items: 1,
    });
  };

  return (
    <Button size="lg" className="w-full text-lg py-6" asChild>
      <a
        href={product.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handlePurchaseClick}
      >
        Buy Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </Button>
  );
}
