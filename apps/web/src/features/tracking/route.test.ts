import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { POST } from "../../../app/api/tracking/route";

describe("POST /api/tracking", () => {
  it("chap nhan payload hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/tracking", {
      method: "POST",
      body: JSON.stringify({
        event: "page_view",
        occurredAt: new Date().toISOString(),
        page: "/",
        anonymousId: "anon_123",
        sessionId: "sess_123",
        properties: {
          source: "landing"
        }
      })
    });

    const response = await POST(request);

    expect(response.status).toBe(202);
    await expect(response.json()).resolves.toEqual({ status: "accepted" });
  });

  it("tra ve 422 khi payload khong hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/tracking", {
      method: "POST",
      body: JSON.stringify({
        occurredAt: new Date().toISOString(),
        page: "/",
        anonymousId: "anon_123",
        sessionId: "sess_123"
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(422);
    expect(body.error).toBe("Validation failed");
    expect(body.details.event).toBeDefined();
  });

  it("tra ve 400 khi body khong phai json hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/tracking", {
      method: "POST",
      body: "{invalid-json",
      headers: {
        "content-type": "application/json"
      }
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: "Invalid JSON body" });
  });
});
