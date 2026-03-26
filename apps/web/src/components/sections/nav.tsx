"use client";

import { trackCtaClick } from "@/features/tracking/client";

export function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#" className="nav__wordmark">
          MIU <span>SQUARE</span>
        </a>
        <div className="nav__actions">
          <ul className="nav__links">
            <li>
              <a href="#pain-points" className="nav__link">
                Van de
              </a>
            </li>
            <li>
              <a href="#solution-flow" className="nav__link">
                Giai phap
              </a>
            </li>
            <li>
              <a href="#outcomes" className="nav__link">
                Ket qua
              </a>
            </li>
            <li>
              <a href="#lead-form" className="nav__link">
                Lien he
              </a>
            </li>
            <li>
              <a href="#faq" className="nav__link">
                FAQ
              </a>
            </li>
          </ul>
          <a
            href="#lead-form"
            className="btn btn--primary"
            onClick={() => trackCtaClick("nav", "Dat lich demo quy trinh")}
          >
            Dat lich demo quy trinh
          </a>
        </div>
      </div>
    </nav>
  );
}
