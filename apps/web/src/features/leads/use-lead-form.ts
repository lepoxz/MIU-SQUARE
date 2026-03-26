"use client";

import { useCallback, useRef, useState } from "react";
import type { LeadFormData, LeadFormFieldErrors } from "./form-schema";
import { validateLeadForm } from "./form-schema";
import type { LeadResponse } from "./contracts";
import { trackFormSubmitted, trackFormFailed } from "@/features/tracking/client";

export type LeadFormStatus = "idle" | "submitting" | "success" | "error";

export interface LeadFormState {
  status: LeadFormStatus;
  fieldErrors: LeadFormFieldErrors;
  submitError: string | null;
  response: LeadResponse | null;
}

const INITIAL_STATE: LeadFormState = {
  status: "idle",
  fieldErrors: {},
  submitError: null,
  response: null,
};

/**
 * Hook that manages lead form state: validation, submission, and result handling.
 *
 * Usage:
 *   const { state, handleSubmit, reset } = useLeadForm();
 *   <form onSubmit={handleSubmit}> ... </form>
 */
export function useLeadForm() {
  const [state, setState] = useState<LeadFormState>(INITIAL_STATE);
  const abortRef = useRef<AbortController | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Abort any in-flight request
      abortRef.current?.abort();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const raw = {
        fullName: formData.get("fullName") as string,
        phone: formData.get("phone") as string,
        notes: (formData.get("notes") as string) || "",
        consentMarketing: formData.get("consent.marketing") === "on" ? true : undefined,
      };

      // Client-side validation
      const validation = validateLeadForm(raw);

      if (validation.errors) {
        setState({
          status: "idle",
          fieldErrors: validation.errors,
          submitError: null,
          response: null,
        });
        // Track validation failure
        const firstErrorField = Object.keys(validation.errors)[0];
        trackFormFailed("primary-lead-form", firstErrorField);
        // Focus first errored field
        if (firstErrorField) {
          const el = form.querySelector<HTMLElement>(`[name="${firstErrorField === "consentMarketing" ? "consent.marketing" : firstErrorField}"]`);
          el?.focus();
        }
        return;
      }

      // Build API payload
      const payload = {
        fullName: validation.data.fullName,
        phone: validation.data.phone,
        notes: validation.data.notes || undefined,
        source: "landing_page" as const,
        consent: {
          marketing: true,
          timestamp: new Date().toISOString(),
        },
        metadata: extractUtmParams(),
      };

      setState({
        status: "submitting",
        fieldErrors: {},
        submitError: null,
        response: null,
      });

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        if (!res.ok) {
          const errorBody = await res.json().catch(() => null);
          throw new Error(
            errorBody?.error || `Server error: ${res.status}`
          );
        }

        const data: LeadResponse = await res.json();

        // Track successful submission
        trackFormSubmitted("primary-lead-form", data.status);

        setState({
          status: "success",
          fieldErrors: {},
          submitError: null,
          response: data,
        });
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return; // Silently ignore aborted requests
        }

        // Track submission error
        trackFormFailed("primary-lead-form");

        setState({
          status: "error",
          fieldErrors: {},
          submitError:
            err instanceof Error
              ? err.message
              : "Co loi xay ra, vui long thu lai.",
          response: null,
        });
      }
    },
    []
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setState(INITIAL_STATE);
  }, []);

  return { state, handleSubmit, reset };
}

/**
 * Extract UTM parameters from the current URL.
 */
function extractUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }

  return utm;
}
