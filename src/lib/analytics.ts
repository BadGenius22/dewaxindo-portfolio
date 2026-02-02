/**
 * Analytics utilities for Google Analytics and Meta Pixel
 * Implements tracking for SEO and Meta Ads optimization
 *
 * CAPI (Conversions API) Ready:
 * - All events generate unique event_id for deduplication
 * - Server-side tracking can be added via Next.js API routes
 * - See: https://developers.facebook.com/docs/marketing-api/conversions-api/
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
 * Generate unique event ID for Meta CAPI deduplication
 * Same ID used for both Pixel (client) and CAPI (server)
 */
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Hash user data for CAPI (SHA-256)
 * Required for Event Match Quality (EMQ) score
 */
export async function hashUserData(value: string): Promise<string> {
  if (typeof window === "undefined") return "";
  const normalized = value.toLowerCase().trim();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
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
 * Meta Pixel event tracking with CAPI deduplication support
 * Standard events: https://developers.facebook.com/docs/meta-pixel/reference
 *
 * @param eventName - Standard Meta event name
 * @param parameters - Event parameters
 * @param eventId - Unique ID for CAPI deduplication (auto-generated if not provided)
 * @returns The event_id used (for sending same ID to CAPI server-side)
 */
export function trackMetaEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
  eventId?: string
): string {
  const id = eventId || generateEventId();
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters, { eventID: id });
  }
  return id;
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
 * Returns event_id for CAPI server-side deduplication
 */
export function trackViewContent(
  contentId: string,
  contentType: string,
  contentName: string,
  value?: number,
  currency?: string
): string {
  // Google Analytics
  trackGAEvent("view_item", contentType, contentName, value);

  // Meta Pixel - ViewContent event (returns event_id for CAPI)
  return trackMetaEvent("ViewContent", {
    content_ids: [contentId],
    content_type: contentType,
    content_name: contentName,
    value: value,
    currency: currency || "USD",
  });
}

/**
 * Track product purchase initiation (redirect to Gumroad)
 * Returns event_id for CAPI server-side deduplication
 */
export function trackInitiateCheckout(
  productId: string,
  productName: string,
  price: number,
  currency: string
): string {
  // Google Analytics
  trackGAEvent("begin_checkout", "product", productName, price);

  // Meta Pixel - InitiateCheckout event (returns event_id for CAPI)
  return trackMetaEvent("InitiateCheckout", {
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
 * Get Meta cookie values for CAPI user matching
 */
function getMetaCookies(): { fbc?: string; fbp?: string } {
  if (typeof document === "undefined") return {};
  const cookies = document.cookie.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      if (key === "_fbc" || key === "_fbp") {
        acc[key as "_fbc" | "_fbp"] = value;
      }
      return acc;
    },
    {} as { _fbc?: string; _fbp?: string }
  );
  return { fbc: cookies._fbc, fbp: cookies._fbp };
}

/**
 * Send event to Meta Conversions API (server-side)
 * Call this alongside trackMetaEvent for redundant tracking
 *
 * @param eventName - Standard Meta event name
 * @param eventId - Same ID used in trackMetaEvent for deduplication
 * @param customData - Event parameters (content_ids, value, etc.)
 * @param userData - Optional hashed user data (em, ph)
 */
export async function sendToCAPI(
  eventName: string,
  eventId: string,
  customData?: Record<string, unknown>,
  userData?: { em?: string; ph?: string }
): Promise<void> {
  if (typeof window === "undefined") return;

  const cookies = getMetaCookies();

  try {
    await fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          ...userData,
          ...cookies,
        },
        custom_data: customData,
      }),
    });
  } catch (error) {
    // Silently fail - CAPI is redundant, Pixel already tracked
    console.debug("CAPI send failed:", error);
  }
}

/**
 * Track event with both Pixel (client) and CAPI (server)
 * Use this for important conversion events
 */
export async function trackMetaEventWithCAPI(
  eventName: string,
  parameters?: Record<string, unknown>,
  userData?: { em?: string; ph?: string }
): Promise<string> {
  // Track client-side (returns event_id)
  const eventId = trackMetaEvent(eventName, parameters);

  // Track server-side with same event_id (deduplicated by Meta)
  await sendToCAPI(eventName, eventId, parameters, userData);

  return eventId;
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

/**
 * Track lead magnet download (email capture)
 * Used for tracking free PDF/resource signups
 */
export function trackLeadMagnetDownload(
  productId: string,
  productName: string
): string {
  // Google Analytics - generate_lead event
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      currency: "USD",
      value: 0,
      items: [{ item_id: productId, item_name: productName }],
    });
  }

  // Meta Pixel - Lead event (returns event_id for CAPI)
  return trackMetaEvent("Lead", {
    content_name: productName,
    content_category: "lead_magnet",
    content_ids: [productId],
    value: 0,
    currency: "USD",
  });
}
