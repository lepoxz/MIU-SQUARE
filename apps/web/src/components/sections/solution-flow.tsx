const steps = [
  {
    num: "01",
    title: "Thu lead tap trung",
    desc: "Moi lead tu Facebook Ads, landing page hay form deu vao mot pipeline duy nhat. Khong con sot kenh.",
  },
  {
    num: "02",
    title: "Phan loai va day thong bao",
    desc: "He thong tu dong gan nhan, phan loai lead theo nhu cau va gui thong bao cho dung nguoi.",
  },
  {
    num: "03",
    title: "Handoff sale nhanh",
    desc: "Sale nhan lead trong vai phut kem du thong tin can thiet de goi lai ngay, khong can hoi lai tu dau.",
  },
  {
    num: "04",
    title: "Theo doi trang thai va conversion",
    desc: "Dashboard minh bach: lead nao da cham, lead nao chua xu ly, ti le conversion theo tung nguon.",
  },
];

export function SolutionFlow() {
  return (
    <section
      id="solution-flow"
      className="section section--light"
      aria-labelledby="solution-flow-heading"
    >
      <div className="container">
        <p className="section__eyebrow">Cach MIU SQUARE giai quyet</p>
        <h2 id="solution-flow-heading" className="section__heading">
          Mot quy trinh tu dong tu lead den conversion
        </h2>
        <p className="section__desc">
          MIU SQUARE thay the cac buoc thu cong bang mot flow co the do luong va
          lap lai.
        </p>

        <div className="grid-4" style={{ marginTop: "var(--space-10)" }}>
          {steps.map((step) => (
            <article key={step.num} className="card">
              <span className="badge badge--accent">{step.num}</span>
              <h3 className="card__title" style={{ marginTop: "var(--space-4)" }}>
                {step.title}
              </h3>
              <p className="card__desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
