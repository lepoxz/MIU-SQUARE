import { z } from "zod";

export const leadSourceSchema = z.enum(["landing_page", "facebook_lead_ads", "manual_import"]);

export const leadPayloadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(8).max(20),
  email: z.string().trim().email().optional(),
  notes: z.string().trim().max(2000).optional(),
  source: leadSourceSchema.default("landing_page"),
  campaign: z
    .object({
      campaignId: z.string().trim().min(1),
      adsetId: z.string().trim().min(1).optional(),
      adId: z.string().trim().min(1).optional(),
      creativeName: z.string().trim().min(1).optional()
    })
    .optional(),
  consent: z.object({
    marketing: z.boolean(),
    timestamp: z.string().datetime()
  }),
  metadata: z.record(z.string(), z.string()).default({})
});

export const leadResponseSchema = z.object({
  leadId: z.string(),
  status: z.enum(["accepted", "queued"]),
  receivedAt: z.string().datetime(),
  traceId: z.string()
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
export type LeadResponse = z.infer<typeof leadResponseSchema>;

export function createLeadTraceId() {
  return `lead_${crypto.randomUUID()}`;
}
