"use client";

import { useEffect, useRef } from "react";
import { trackFormViewed } from "@/features/tracking/client";

interface Props {
  formId: string;
  sectionId: string;
}

/**
 * Fires lead_form_viewed when the target element enters the viewport
 * OR when the user first interacts with the form. Fires at most once.
 */
export function FormViewedTracker({ formId, sectionId }: Props) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;

    const formEl = document.getElementById(formId);
    if (!formEl) return;

    // Fire on first focus inside form
    const handleFocus = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      trackFormViewed(formId, sectionId);
    };

    formEl.addEventListener("focusin", handleFocus, { once: true });

    // Fire on intersection
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            trackFormViewed(formId, sectionId);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(formEl);

    return () => {
      formEl.removeEventListener("focusin", handleFocus);
      observer.disconnect();
    };
  }, [formId, sectionId]);

  return null;
}
