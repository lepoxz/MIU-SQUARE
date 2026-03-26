const painPoints = [
  {
    title: "Lead vao nhieu kenh, phan hoi cham",
    desc: "Khach hang gui tin nhan qua Facebook, Zalo, form website nhung khong ai tong hop. Lead nong nguoi di truoc khi sale kip phan hoi.",
  },
  {
    title: "Sale bo sot lead vi xu ly tay",
    desc: "Khong co quy trinh handoff ro rang. Lead bi rot giua cac buoc, sale khong biet dau la lead moi, dau la lead da cham.",
  },
  {
    title: "Chu doanh nghiep khong thay ROI",
    desc: "Do tien vao ads nhung khong biet bao nhieu lead chuyen thanh khach. Khong co dashboard, khong co so lieu de ra quyet dinh.",
  },
];

export function PainPoints() {
  return (
    <section
      id="pain-points"
      className="section section--surface"
      aria-labelledby="pain-points-heading"
    >
      <div className="container">
        <p className="section__eyebrow">Van de hien tai</p>
        <h2 id="pain-points-heading" className="section__heading">
          Lead dang rot o dau trong quy trinh cua ban?
        </h2>
        <p className="section__desc">
          Nhieu doanh nghiep chay ads tot nhung van mat lead vi khau sau click
          con roi rac.
        </p>

        <div className="grid-3" style={{ marginTop: "var(--space-10)" }}>
          {painPoints.map((point) => (
            <article key={point.title} className="card">
              <div className="card__icon" aria-hidden="true">
                !
              </div>
              <h3 className="card__title">{point.title}</h3>
              <p className="card__desc">{point.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
