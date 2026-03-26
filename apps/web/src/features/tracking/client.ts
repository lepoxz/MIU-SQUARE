"use client";

import type { TrackingEvent } from "./contracts";

/**
 * Lightweight tracking client for MVP.
 * Fires events to POST /api/tracking following the contract in docs/contracts/tracking.md.
 * Uses navigator.sendBeacon where available for reliability on page unload.
 */

let _anonymousId: string | null = null;
let _sessionId: string | null = null;

function getAnonymousId(): string {
  if (_anonymousId) return _anonymousId;

  if (typeof window === "undefined") return "ssr";

  const stored = localStorage.getItem("miu_anon_id");
  if (stored) {
    _anonymousId = stored;
    return stored;
  }

  const id = `anon_${crypto.randomUUID()}`;
  localStorage.setItem("miu_anon_id", id);
  _anonymousId = id;
  return id;
}

function getSessionId(): string {
  if (_sessionId) return _sessionId;

  if (typeof window === "undefined") return "ssr";

  const stored = sessionStorage.getItem("miu_session_id");
  if (stored) {
    _sessionId = stored;
    return stored;
  }

  const id = `session_${crypto.randomUUID()}`;
  sessionStorage.setItem("miu_session_id", id);
  _sessionId = id;
  return id;
}

function getUtmCampaign(): TrackingEvent["campaign"] | undefined {
  if (typeof window === "undefined") return undefined;

  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  const content = params.get("utm_content");

  if (!source && !medium && !campaign && !content) return undefined;

  return {
    source: source || undefined,
    medium: medium || undefined,
    campaign: campaign || undefined,
    content: content || undefined,
  };
}

/**
 * Send a tracking event to POST /api/tracking.
 * Fire-and-forget: does not throw or block UI.
 */
export function track(
  event: TrackingEvent["event"],
  properties: Record<string, string | number | boolean> = {}
): void {
  if (typeof window === "undefined") return;

  const payload: TrackingEvent = {
    event,
    occurredAt: new Date().toISOString(),
    page: window.location.pathname,
    anonymousId: getAnonymousId(),
    sessionId: getSessionId(),
    campaign: getUtmCampaign(),
    properties,
  };

  // Prefer sendBeacon for reliability, fall back to fetch
  const body = JSON.stringify(payload);
  const sent = navigator.sendBeacon?.("/api/tracking", new Blob([body], { type: "application/json" }));

  if (!sent) {
    fetch("/api/tracking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Swallow tracking errors — never block UI
    });
  }
}

/**
 * Convenience: track CTA click with section_id and cta_label.
 */
export function trackCtaClick(sectionId: string, ctaLabel: string): void {
  track("cta_clicked", { section_id: sectionId, cta_label: ctaLabel });
}

/**
 * Convenience: track form viewed.
 */
export function trackFormViewed(formId: string, sectionId: string): void {
  track("lead_form_viewed", { form_id: formId, section_id: sectionId });
}

/**
 * Convenience: track form submitted.
 */
export function trackFormSubmitted(formId: string, submissionStatus: string): void {
  track("lead_form_submitted", { form_id: formId, submission_status: submissionStatus });
}

/**
 * Convenience: track form failed.
 */
export function trackFormFailed(formId: string, field?: string): void {
  track("lead_form_failed", {
    form_id: formId,
    ...(field ? { field } : {}),
    submission_status: "failed",
  });
}
