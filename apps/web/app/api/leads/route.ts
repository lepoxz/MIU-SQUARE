import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { createLeadTraceId, leadPayloadSchema, leadResponseSchema } from "@/features/leads/contracts";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = leadPayloadSchema.parse(body);
    const traceId = createLeadTraceId();

    logger.info({ traceId, source: payload.source, phone: payload.phone }, "lead accepted");

    // TODO: persist to database when Prisma is wired (ANG tech-debt)
    // TODO: forward to n8n webhook for workflow orchestration

    const response = leadResponseSchema.parse({
      leadId: traceId,
      status: "queued",
      receivedAt: new Date().toISOString(),
      traceId
    });

    return NextResponse.json(response, { status: 202 });
  } catch (err) {
    if (err instanceof ZodError) {
      logger.warn({ errors: err.flatten() }, "lead validation failed");
      return NextResponse.json(
        {
          error: "Validation failed",
          details: err.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    logger.error({ err }, "unexpected error in lead ingestion");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
