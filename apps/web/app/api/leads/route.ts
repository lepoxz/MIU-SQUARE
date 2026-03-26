import { NextRequest, NextResponse } from "next/server";
import { createLeadTraceId, leadPayloadSchema, leadResponseSchema } from "@/features/leads/contracts";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const payload = leadPayloadSchema.parse(body);
  const traceId = createLeadTraceId();

  logger.info({ traceId, source: payload.source, phone: payload.phone }, "lead accepted");

  const response = leadResponseSchema.parse({
    leadId: traceId,
    status: "queued",
    receivedAt: new Date().toISOString(),
    traceId
  });

  return NextResponse.json(response, { status: 202 });
}
