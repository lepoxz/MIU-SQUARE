import { describe, expect, it } from "vitest";
import { leadFormSchema, validateLeadForm } from "@/features/leads/form-schema";

describe("leadFormSchema", () => {
  it("accepts valid form data", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "0901234567",
      notes: "Can demo",
      consentMarketing: true,
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).toBe("Nguyen Van A");
      expect(result.data.phone).toBe("0901234567");
    }
  });

  it("accepts valid data without notes", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Tran Thi B",
      phone: "0987654321",
      consentMarketing: true,
    });

    expect(result.success).toBe(true);
  });

  it("rejects empty fullName", () => {
    const result = leadFormSchema.safeParse({
      fullName: "",
      phone: "0901234567",
      consentMarketing: true,
    });

    expect(result.success).toBe(false);
  });

  it("rejects short fullName", () => {
    const result = leadFormSchema.safeParse({
      fullName: "A",
      phone: "0901234567",
      consentMarketing: true,
    });

    expect(result.success).toBe(false);
  });

  it("rejects short phone", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "090",
      consentMarketing: true,
    });

    expect(result.success).toBe(false);
  });

  it("rejects phone with invalid characters", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "abc12345678",
      consentMarketing: true,
    });

    expect(result.success).toBe(false);
  });

  it("accepts phone with dashes and spaces", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "+84 90-123 4567",
      consentMarketing: true,
    });

    expect(result.success).toBe(true);
  });

  it("rejects when consent is false", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "0901234567",
      consentMarketing: false,
    });

    expect(result.success).toBe(false);
  });

  it("rejects when consent is missing", () => {
    const result = leadFormSchema.safeParse({
      fullName: "Nguyen Van A",
      phone: "0901234567",
    });

    expect(result.success).toBe(false);
  });

  it("trims whitespace from fullName and phone", () => {
    const result = leadFormSchema.safeParse({
      fullName: "  Nguyen Van A  ",
      phone: "  0901234567  ",
      consentMarketing: true,
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).toBe("Nguyen Van A");
      expect(result.data.phone).toBe("0901234567");
    }
  });
});

describe("validateLeadForm", () => {
  it("returns data when valid", () => {
    const result = validateLeadForm({
      fullName: "Nguyen Van A",
      phone: "0901234567",
      consentMarketing: true,
    });

    expect(result.errors).toBeNull();
    expect(result.data).not.toBeNull();
    expect(result.data?.fullName).toBe("Nguyen Van A");
  });

  it("returns field errors when invalid", () => {
    const result = validateLeadForm({
      fullName: "",
      phone: "09",
      consentMarketing: false,
    });

    expect(result.data).toBeNull();
    expect(result.errors).not.toBeNull();
    expect(result.errors?.fullName).toBeDefined();
    expect(result.errors?.phone).toBeDefined();
    expect(result.errors?.consentMarketing).toBeDefined();
  });

  it("returns only first error per field", () => {
    const result = validateLeadForm({
      fullName: "",
      phone: "",
    });

    expect(result.data).toBeNull();
    expect(result.errors?.fullName).toBeTypeOf("string");
    expect(result.errors?.phone).toBeTypeOf("string");
  });
});
