"use client";

import { trackCtaClick } from "@/features/tracking/client";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="final-cta"
      aria-labelledby="final-cta-heading"
    >
      <div className="container">
        <h2 id="final-cta-heading" className="final-cta__heading">
          Muon biet lead cua ban dang rot o dau?
        </h2>
        <div className="final-cta__actions">
          <a
            href="#lead-form"
            className="btn btn--primary"
            onClick={() => trackCtaClick("final-cta", "Dat lich demo quy trinh")}
          >
            Dat lich demo quy trinh
          </a>
          <a
            href="#lead-form"
            className="btn btn--ghost-inverse"
            onClick={() => trackCtaClick("final-cta", "Nhan tu van giai phap")}
          >
            Nhan tu van giai phap
          </a>
        </div>
      </div>
    </section>
  );
}
