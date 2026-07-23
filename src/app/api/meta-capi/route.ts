/**
 * Meta Conversions API (CAPI) Route
 * Server-side event tracking for improved Event Match Quality (EMQ)
 *
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api/
 */

import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
// Set only while verifying events in Events Manager -> Test Events, then remove
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const API_VERSION = "v25.0";

/**
 * Events this site is allowed to forward.
 *
 * The route is a public POST endpoint, so anything reaching Meta unvalidated
 * lands in the dataset — malformed payloads raise Events Manager diagnostics
 * (`s2s_missing_event_name`) and arbitrary ones would pollute conversion data.
 * Reject here rather than letting Meta be the validator.
 */
const ALLOWED_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "InitiateCheckout",
  "Contact",
]);

interface CAPIEventData {
  event_name: string;
  event_id: string;
  event_time?: number;
  event_source_url?: string;
  action_source: "website";
  user_data: {
    client_ip_address?: string;
    client_user_agent?: string;
    em?: string; // hashed email
    ph?: string; // hashed phone
    fbc?: string; // click ID from _fbc cookie
    fbp?: string; // browser ID from _fbp cookie
  };
  custom_data?: Record<string, unknown>;
}

interface CAPIRequestBody {
  event_name: string;
  event_id: string;
  event_source_url?: string;
  user_data?: {
    em?: string;
    ph?: string;
    fbc?: string;
    fbp?: string;
  };
  custom_data?: Record<string, unknown>;
}

export async function POST(request: NextRequest) {
  // Check configuration
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "CAPI not configured" },
      { status: 503 }
    );
  }

  try {
    const body: CAPIRequestBody = await request.json();

    // Validate before forwarding. Meta drops malformed events and raises a
    // dataset-level diagnostic for them, so a bad payload is worse than a
    // rejected request.
    const eventName = typeof body.event_name === "string" ? body.event_name.trim() : "";
    if (!eventName) {
      return NextResponse.json(
        { error: "event_name is required and must be a non-empty string" },
        { status: 400 }
      );
    }
    if (!ALLOWED_EVENTS.has(eventName)) {
      return NextResponse.json(
        { error: `event_name "${eventName}" is not an allowed event` },
        { status: 400 }
      );
    }
    if (typeof body.event_id !== "string" || !body.event_id.trim()) {
      return NextResponse.json(
        { error: "event_id is required for Pixel/CAPI deduplication" },
        { status: 400 }
      );
    }

    // Get user data from request headers
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || "";

    // Build event data
    const eventData: CAPIEventData = {
      event_name: eventName,
      event_id: body.event_id,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: body.event_source_url,
      action_source: "website",
      user_data: {
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        ...body.user_data,
      },
      custom_data: body.custom_data,
    };

    // Send to Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [eventData],
          ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("CAPI Error:", result);
      return NextResponse.json(
        { error: "CAPI request failed", details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("CAPI Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
