import { z } from "zod";

/**
 * Client-side form validation schema.
 * Lighter than the full leadPayloadSchema — only validates fields
 * the user fills in. The API route adds source, campaign, consent.timestamp, etc.
 */
export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Ho ten phai co it nhat 2 ky tu")
    .max(120, "Ho ten khong duoc vuot qua 120 ky tu"),
  phone: z
    .string()
    .trim()
    .min(8, "So dien thoai phai co it nhat 8 ky tu")
    .max(20, "So dien thoai khong duoc vuot qua 20 ky tu")
    .regex(/^[0-9+\-\s()]+$/, "So dien thoai khong hop le"),
  notes: z
    .string()
    .trim()
    .max(2000, "Nhu cau khong duoc vuot qua 2000 ky tu")
    .optional()
    .default(""),
  consentMarketing: z.literal(true, {
    errorMap: () => ({ message: "Ban can dong y de tiep tuc" }),
  }),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export type LeadFormFieldErrors = Partial<Record<keyof LeadFormData, string>>;

/**
 * Validate form data and return field-level errors.
 * Returns null if valid.
 */
export function validateLeadForm(
  data: Record<string, unknown>
): { data: LeadFormData; errors: null } | { data: null; errors: LeadFormFieldErrors } {
  const result = leadFormSchema.safeParse(data);

  if (result.success) {
    return { data: result.data, errors: null };
  }

  const errors: LeadFormFieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof LeadFormData;
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  }

  return { data: null, errors };
}
