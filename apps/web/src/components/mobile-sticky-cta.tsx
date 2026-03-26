"use client";

import { useEffect, useState } from "react";
import { trackCtaClick } from "@/features/tracking/client";

/**
 * Mobile sticky CTA bar — fixed at bottom of viewport.
 * Only visible on mobile (<768px) via CSS.
 * Appears after user scrolls past the hero section.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      // If hero doesn't exist, show immediately
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky CTA when hero is NOT intersecting (user scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta" role="complementary" aria-label="Quick action">
      <a
        href="#lead-form"
        className="btn btn--primary"
        onClick={() => trackCtaClick("mobile-sticky", "Dat lich demo quy trinh")}
      >
        Dat lich demo quy trinh
      </a>
    </div>
  );
}
