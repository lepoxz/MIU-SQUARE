import { describe, expect, it } from "vitest";
import { leadPayloadSchema } from "@/features/leads/contracts";

describe("leadPayloadSchema", () => {
  it("accepts a valid landing page payload", () => {
    const payload = leadPayloadSchema.parse({
      fullName: "Nguyen Thi B",
      phone: "0901234567",
      email: "hello@miusquare.vn",
      source: "landing_page",
      consent: {
        marketing: true,
        timestamp: new Date().toISOString()
      },
      metadata: {
        utm_campaign: "spring-launch"
      }
    });

    expect(payload.fullName).toBe("Nguyen Thi B");
    expect(payload.source).toBe("landing_page");
  });

  it("rejects payloads without consent", () => {
    expect(() =>
      leadPayloadSchema.parse({
        fullName: "Nguyen Thi B",
        phone: "0901234567",
        source: "landing_page"
      })
    ).toThrow();
  });
});
