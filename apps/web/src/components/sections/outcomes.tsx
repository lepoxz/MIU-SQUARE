const outcomes = [
  {
    metric: "< 5 phut",
    label: "Thoi gian phan hoi",
    desc: "Rut ngan thoi gian tu luc lead gui form den luc sale goi lai.",
  },
  {
    metric: "- 40%",
    label: "Giam that thoat",
    desc: "Giam ty le lead bi bo sot trong qua trinh follow-up.",
  },
  {
    metric: "Minh bach",
    label: "Quy trinh ro rang",
    desc: "Minh bach hoa toan bo quy trinh tu marketing den sale.",
  },
  {
    metric: "Scale",
    label: "De mo rong",
    desc: "Tao nen tang de scale ads ma khong tang chaos van hanh.",
  },
];

export function Outcomes() {
  return (
    <section
      id="outcomes"
      className="section section--surface"
      aria-labelledby="outcomes-heading"
    >
      <div className="container">
        <p className="section__eyebrow">Ket qua nhan duoc</p>
        <h2 id="outcomes-heading" className="section__heading">
          Nhung gia tri cu the khi su dung MIU SQUARE
        </h2>

        <div className="grid-4" style={{ marginTop: "var(--space-10)" }}>
          {outcomes.map((item) => (
            <article key={item.label} className="card card--metric">
              <p className="card__number">{item.metric}</p>
              <p className="card__label">{item.label}</p>
              <p className="card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
