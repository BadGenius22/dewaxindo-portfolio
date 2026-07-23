"use client";

/**
 * Fires a Meta ViewContent event (Pixel + CAPI, deduplicated by event_id)
 * once when a product landing page mounts. ViewContent is the mid-funnel
 * signal Meta Ads optimizes against between PageView and Lead.
 */

import { useEffect, useRef } from "react";

import { trackViewContent, sendToCAPI } from "@/lib/analytics";

interface TrackViewContentProps {
  contentId: string;
  contentName: string;
}

export function TrackViewContent({ contentId, contentName }: TrackViewContentProps) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const eventId = trackViewContent(contentId, "product", contentName, 0, "USD");
    sendToCAPI("ViewContent", eventId, {
      content_ids: [contentId],
      content_type: "product",
      content_name: contentName,
    });
  }, [contentId, contentName]);

  return null;
}
