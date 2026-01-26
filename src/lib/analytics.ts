/**
 * Analytics utilities for Google Analytics and Meta Pixel
 * Implements tracking for SEO and Meta Ads optimization
 */

import { siteConfig } from "@/data/site";

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Google Analytics 4 event tracking
 */
export function trackGAEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Meta Pixel event tracking
 * Standard events: https://developers.facebook.com/docs/meta-pixel/reference
 */
export function trackMetaEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  }
}

/**
 * Track page view (both GA4 and Meta Pixel)
 */
export function trackPageView(url: string) {
  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", siteConfig.analytics.gaId, {
      page_path: url,
    });
  }

  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}

/**
 * Track content view (for products/projects)
 */
export function trackViewContent(
  contentId: string,
  contentType: string,
  contentName: string,
  value?: number,
  currency?: string
) {
  // Google Analytics
  trackGAEvent("view_item", contentType, contentName, value);

  // Meta Pixel - ViewContent event
  trackMetaEvent("ViewContent", {
    content_ids: [contentId],
    content_type: contentType,
    content_name: contentName,
    value: value,
    currency: currency || "USD",
  });
}

/**
 * Track product purchase initiation (redirect to Gumroad)
 */
export function trackInitiateCheckout(
  productId: string,
  productName: string,
  price: number,
  currency: string
) {
  // Google Analytics
  trackGAEvent("begin_checkout", "product", productName, price);

  // Meta Pixel - InitiateCheckout event
  trackMetaEvent("InitiateCheckout", {
    content_ids: [productId],
    content_name: productName,
    content_type: "product",
    value: price,
    currency: currency,
    num_items: 1,
  });
}

/**
 * Track external link clicks
 */
export function trackOutboundLink(url: string, label: string) {
  // Google Analytics
  trackGAEvent("click", "outbound", label);

  // Meta Pixel custom event
  trackMetaEvent("Lead", {
    content_name: label,
    content_category: "outbound_link",
  });
}

/**
 * Track contact/social link clicks
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function trackContactClick(platform: string, url: string) {
  // Google Analytics
  trackGAEvent("click", "contact", platform);

  // Meta Pixel - Contact event
  trackMetaEvent("Contact", {
    content_name: platform,
  });
}

/**
 * Track scroll depth (for engagement metrics)
 */
export function trackScrollDepth(percentage: number) {
  trackGAEvent("scroll", "engagement", `${percentage}%`, percentage);
}

/**
 * Generate Google Analytics script
 */
export function getGAScript(gaId: string) {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', {
      page_path: window.location.pathname,
    });
  `;
}

/**
 * Generate Meta Pixel script
 * Includes PageView tracking by default
 */
export function getMetaPixelScript(pixelId: string) {
  return `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
}
