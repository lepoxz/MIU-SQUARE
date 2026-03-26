"use client";

import { useLeadForm } from "@/features/leads/use-lead-form";

const benefits = [
  "Giam thoi gian phan hoi lead tu hang gio xuong vai phut",
  "Biet chinh xac lead nao dang nong, lead nao can nurture",
  "Co so lieu de quyet dinh tang hay giam ngan sach ads",
];

export function LeadFormSection() {
  const { state, handleSubmit, reset } = useLeadForm();
  const { status, fieldErrors, submitError } = state;

  return (
    <section
      id="lead-form"
      className="lead-form-section"
      aria-labelledby="lead-form-heading"
    >
      <div className="lead-form-section__inner">
        <div>
          <p className="section__eyebrow">Bat dau ngay</p>
          <h2
            id="lead-form-heading"
            className="section__heading"
            style={{ color: "var(--color-text-inverse)" }}
          >
            Muon biet lead cua ban dang rot o dau?
          </h2>
          <p
            className="section__desc"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            De lai thong tin, doi ngu MIU SQUARE se lien he trong 24h de demo
            quy trinh phu hop voi doanh nghiep cua ban.
          </p>
          <ul
            className="lead-form-section__benefits"
            style={{ marginTop: "var(--space-8)" }}
          >
            {benefits.map((b) => (
              <li key={b} className="lead-form-section__benefit">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lead-form-card">
          {status === "success" ? (
            <div className="lead-form-success" role="status" aria-live="polite">
              <div className="lead-form-success__icon" aria-hidden="true">
                &#10003;
              </div>
              <h3 className="type-h3" style={{ marginBottom: "var(--space-3)" }}>
                Cam on ban da gui thong tin!
              </h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-6)" }}>
                Doi ngu MIU SQUARE se lien he voi ban trong 24h lam viec.
                {state.response?.traceId && (
                  <span style={{ display: "block", marginTop: "var(--space-2)" }}>
                    <span className="type-micro">Ma theo doi: {state.response.traceId}</span>
                  </span>
                )}
              </p>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={reset}
                style={{ width: "100%" }}
              >
                Gui thong tin khac
              </button>
            </div>
          ) : (
            <form
              id="primary-lead-form"
              aria-label="Lead capture form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-field">
                <label className="form-field__label" htmlFor="fullName">
                  Ho ten *
                </label>
                <input
                  className={`input ${fieldErrors.fullName ? "input--error" : ""}`}
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Nguyen Van A"
                  required
                  autoComplete="name"
                  disabled={status === "submitting"}
                  aria-invalid={!!fieldErrors.fullName}
                  aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                />
                {fieldErrors.fullName && (
                  <p id="fullName-error" className="form-field__error" role="alert">
                    {fieldErrors.fullName}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label className="form-field__label" htmlFor="phone">
                  So dien thoai *
                </label>
                <input
                  className={`input ${fieldErrors.phone ? "input--error" : ""}`}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0901234567"
                  required
                  autoComplete="tel"
                  disabled={status === "submitting"}
                  aria-invalid={!!fieldErrors.phone}
                  aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                />
                {fieldErrors.phone && (
                  <p id="phone-error" className="form-field__error" role="alert">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label className="form-field__label" htmlFor="notes">
                  Nhu cau cua ban
                </label>
                <textarea
                  className="textarea"
                  id="notes"
                  name="notes"
                  placeholder="Vi du: Can tu dong hoa quy trinh thu lead tu Facebook Ads"
                  disabled={status === "submitting"}
                />
              </div>

              <label className="checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="consent.marketing"
                  required
                  disabled={status === "submitting"}
                  aria-invalid={!!fieldErrors.consentMarketing}
                  aria-describedby={fieldErrors.consentMarketing ? "consent-error" : undefined}
                />
                Toi dong y nhan thong tin tu van tu MIU SQUARE *
              </label>
              {fieldErrors.consentMarketing && (
                <p id="consent-error" className="form-field__error" role="alert">
                  {fieldErrors.consentMarketing}
                </p>
              )}

              {submitError && (
                <div className="form-submit-error" role="alert" aria-live="assertive">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                className="btn btn--primary"
                style={{ width: "100%" }}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Dang gui..." : "Dat lich demo quy trinh"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
