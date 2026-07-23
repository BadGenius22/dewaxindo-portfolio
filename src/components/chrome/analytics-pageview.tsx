"use client";

/**
 * Fires page-view events on App Router soft navigations.
 * The initial page view is already tracked by the inline GA / Meta Pixel
 * bootstrap scripts, so the first render is skipped.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { trackPageView } from "@/lib/analytics";

export function AnalyticsPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
