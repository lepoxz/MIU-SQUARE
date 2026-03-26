"use client";

import { useState, useCallback } from "react";
import { trackCtaClick } from "@/features/tracking/client";

const navLinks = [
  { href: "#pain-points", label: "Van de" },
  { href: "#solution-flow", label: "Giai phap" },
  { href: "#outcomes", label: "Ket qua" },
  { href: "#lead-form", label: "Lien he" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#" className="nav__wordmark">
          MIU <span>SQUARE</span>
        </a>
        <div className="nav__actions">
          <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Mobile-only: show CTA inside drawer */}
            <li className="nav__links-cta-mobile">
              <a
                href="#lead-form"
                className="btn btn--primary"
                onClick={() => {
                  closeMenu();
                  trackCtaClick("nav", "Dat lich demo quy trinh");
                }}
              >
                Dat lich demo quy trinh
              </a>
            </li>
          </ul>
          <a
            href="#lead-form"
            className="btn btn--primary nav__cta-desktop"
            onClick={() => trackCtaClick("nav", "Dat lich demo quy trinh")}
          >
            Dat lich demo quy trinh
          </a>
          <button
            className="nav__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? "Dong menu" : "Mo menu"}
            type="button"
          >
            <span aria-hidden="true">{menuOpen ? "\u2715" : "\u2630"}</span>
          </button>
        </div>
      </div>

      {/* Overlay to close menu on tap outside */}
      {menuOpen && (
        <div
          className="nav__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
