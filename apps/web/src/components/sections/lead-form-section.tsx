const benefits = [
  "Giam thoi gian phan hoi lead tu hang gio xuong vai phut",
  "Biet chinh xac lead nao dang nong, lead nao can nurture",
  "Co so lieu de quyet dinh tang hay giam ngan sach ads",
];

/**
 * Lead form section shell.
 * Form logic (validation, submit, states) will be implemented in ANG-21.
 * This component provides the layout structure and placeholder form.
 */
export function LeadFormSection() {
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
          {/* Form logic to be wired in ANG-21 */}
          <form id="primary-lead-form" aria-label="Lead capture form">
            <div className="form-field">
              <label className="form-field__label" htmlFor="fullName">
                Ho ten *
              </label>
              <input
                className="input"
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Nguyen Van A"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-field">
              <label className="form-field__label" htmlFor="phone">
                So dien thoai *
              </label>
              <input
                className="input"
                id="phone"
                name="phone"
                type="tel"
                placeholder="0901234567"
                required
                autoComplete="tel"
              />
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
              />
            </div>

            <label className="checkbox-label">
              <input
                className="checkbox"
                type="checkbox"
                name="consent.marketing"
                required
              />
              Toi dong y nhan thong tin tu van tu MIU SQUARE
            </label>

            <button type="submit" className="btn btn--primary" style={{ width: "100%" }}>
              Dat lich demo quy trinh
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
