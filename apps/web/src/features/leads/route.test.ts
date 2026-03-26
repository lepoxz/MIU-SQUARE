import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { maskPhoneForLog, POST } from "../../../app/api/leads/route";

describe("maskPhoneForLog", () => {
  it("che tat ca tru 4 so cuoi", () => {
    expect(maskPhoneForLog("0901234567")).toBe("******4567");
  });

  it("che toan bo chuoi ngan", () => {
    expect(maskPhoneForLog("1234")).toBe("****");
  });
});

describe("POST /api/leads", () => {
  it("chap nhan payload hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify({
        fullName: "Nguyen Van A",
        phone: "0901234567",
        email: "hello@miusquare.vn",
        source: "landing_page",
        consent: {
          marketing: true,
          timestamp: new Date().toISOString()
        },
        metadata: {
          utm_campaign: "launch"
        }
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(202);
    expect(body.status).toBe("queued");
    expect(body.traceId).toMatch(/^lead_/);
  });

  it("tra ve 422 khi payload khong hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/leads", {
      method: "POST",
      body: JSON.stringify({
        fullName: "A",
        phone: "0901234567",
        source: "landing_page"
      })
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(422);
    expect(body.error).toBe("Validation failed");
    expect(body.details.fullName).toBeDefined();
    expect(body.details.consent).toBeDefined();
  });

  it("tra ve 400 khi body khong phai json hop le", async () => {
    const request = new NextRequest("http://localhost:3000/api/leads", {
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
