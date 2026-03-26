import { z } from "zod";

export const trackingEventSchema = z.object({
  event: z.enum([
    "page_view",
    "cta_clicked",
    "lead_form_viewed",
    "lead_form_submitted",
    "lead_form_failed"
  ]),
  occurredAt: z.string().datetime(),
  page: z.string().trim().min(1),
  anonymousId: z.string().trim().min(1),
  sessionId: z.string().trim().min(1),
  campaign: z
    .object({
      source: z.string().trim().min(1).optional(),
      medium: z.string().trim().min(1).optional(),
      campaign: z.string().trim().min(1).optional(),
      content: z.string().trim().min(1).optional()
    })
    .optional(),
  properties: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).default({})
});

export type TrackingEvent = z.infer<typeof trackingEventSchema>;
