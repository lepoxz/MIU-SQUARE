import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { trackingEventSchema } from "@/features/tracking/contracts";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = trackingEventSchema.parse(body);

    logger.info({ event }, "tracking event accepted");

    return NextResponse.json({ status: "accepted" }, { status: 202 });
  } catch (err) {
    if (err instanceof ZodError) {
      logger.warn({ errors: err.flatten() }, "tracking validation failed");
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

    logger.error({ err }, "unexpected error in tracking ingestion");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
