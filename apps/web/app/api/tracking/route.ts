import { NextRequest, NextResponse } from "next/server";
import { trackingEventSchema } from "@/features/tracking/contracts";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const event = trackingEventSchema.parse(body);

  logger.info({ event }, "tracking event accepted");

  return NextResponse.json({ status: "accepted" }, { status: 202 });
}
