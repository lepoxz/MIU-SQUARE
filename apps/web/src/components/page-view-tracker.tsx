"use client";

import { useEffect } from "react";
import { track } from "@/features/tracking/client";

/**
 * Fires a page_view event once on mount.
 * Place this component once in the page tree.
 */
export function PageViewTracker() {
  useEffect(() => {
    track("page_view");
  }, []);

  return null;
}
