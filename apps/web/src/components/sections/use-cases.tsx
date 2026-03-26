const useCases = [
  {
    title: "Bat dong san",
    desc: "Thu lead tu Facebook Ads cho du an, phan bo cho sale theo khu vuc va theo doi ti le cham ngay trong dashboard.",
  },
  {
    title: "Giao duc",
    desc: "Quan ly dang ky hoc thu, tu van khoa hoc. Handoff nhanh cho doi tu van de khong mat hoc vien tiem nang.",
  },
  {
    title: "Tham my & F&B",
    desc: "Dat lich hen, tu van dich vu qua form. Tu dong thong bao cho nhan vien va xac nhan lai voi khach.",
  },
  {
    title: "Agency service",
    desc: "Van hanh lead cho nhieu client cung luc. Mot flow lap lai duoc, do luong duoc, bao cao duoc.",
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="section section--light"
      aria-labelledby="use-cases-heading"
    >
      <div className="container">
        <p className="section__eyebrow">Use case phu hop</p>
        <h2 id="use-cases-heading" className="section__heading">
          Ai nen dung MIU SQUARE?
        </h2>
        <p className="section__desc">
          Bat ky doanh nghiep nao dang chay ads va can mot quy trinh xu ly lead
          on dinh deu co the bat dau ngay.
        </p>

        <div className="grid-2x2" style={{ marginTop: "var(--space-10)" }}>
          {useCases.map((uc) => (
            <article key={uc.title} className="card">
              <h3 className="card__title">{uc.title}</h3>
              <p className="card__desc">{uc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
