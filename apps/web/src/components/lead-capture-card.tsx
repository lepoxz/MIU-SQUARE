export function LeadCaptureCard() {
  return (
    <section className="card" aria-labelledby="lead-capture-title">
      <p className="eyebrow">Lead intake baseline</p>
      <h2 id="lead-capture-title">Contract san sang cho form MVP</h2>
      <p>
        Endpoint POST <code>/api/leads</code> nhan lead tu landing page, validate schema va
        day event cho workflow orchestration.
      </p>
      <form className="stack">
        <label className="label">
          Ho ten
          <input className="input" placeholder="Nguyen Van A" name="fullName" />
        </label>
        <label className="label">
          So dien thoai
          <input className="input" placeholder="0901234567" name="phone" />
        </label>
        <label className="label">
          Nhu cau
          <textarea className="textarea" placeholder="Can tu dong hoa intake lead Facebook" name="notes" />
        </label>
        <button className="button" type="button">
          Frontend hook vao contract nay
        </button>
      </form>
      <p className="meta">Tracking event mac dinh: <code>lead_form_viewed</code>, <code>lead_form_submitted</code>.</p>
    </section>
  );
}
