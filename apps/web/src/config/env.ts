import { z } from "zod";

/**
 * Public env vars are required for frontend build.
 * Server-only vars (DATABASE_URL, secrets, etc.) are optional
 * so the frontend can build without a backend configured.
 * Server code should validate these at runtime before use.
 */
const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("MIU SQUARE"),
  NEXT_PUBLIC_BASE_URL: z.string().url().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1).optional(),
  LEAD_WEBHOOK_SECRET: z.string().min(1).optional(),
  TRACKING_WRITE_KEY: z.string().min(1).optional(),
  INTERNAL_API_TOKEN: z.string().min(1).optional(),
  N8N_WEBHOOK_URL: z.string().url().optional(),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info")
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  LEAD_WEBHOOK_SECRET: process.env.LEAD_WEBHOOK_SECRET,
  TRACKING_WRITE_KEY: process.env.TRACKING_WRITE_KEY,
  INTERNAL_API_TOKEN: process.env.INTERNAL_API_TOKEN,
  N8N_WEBHOOK_URL: process.env.N8N_WEBHOOK_URL,
  LOG_LEVEL: process.env.LOG_LEVEL
});

export type Env = z.infer<typeof envSchema>;
