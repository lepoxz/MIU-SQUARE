const proofBullets = [
  "Thu lead tap trung tu landing page va Facebook",
  "Thong bao va handoff cho sale nhanh",
  "Theo doi conversion trong mot quy trinh do luong duoc",
];

const flowSteps = [
  "Lead tu Facebook Ads",
  "Form thu & phan loai",
  "Handoff cho sale",
  "Dashboard theo doi",
];

export function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero__inner">
        <div>
          <p className="hero__eyebrow">
            Lead Facebook → pipeline do luong duoc
          </p>
          <h1 className="hero__headline">
            Bien lead Facebook thanh pipeline chot sale nhanh, khong con roi
            trong inbox
          </h1>
          <p className="hero__subheadline">
            MIU SQUARE giup SME va local business thu lead, phan loai, thong bao
            cho sale va theo doi conversion trong mot quy trinh co the do luong.
          </p>
          <div className="hero__ctas">
            <a href="#lead-form" className="btn btn--primary">
              Dat lich demo quy trinh
            </a>
            <a href="#lead-form" className="btn btn--ghost-inverse">
              Nhan tu van giai phap
            </a>
          </div>
          <ul className="hero__proof">
            {proofBullets.map((bullet) => (
              <li key={bullet} className="hero__proof-item">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__flow-card">
          <p className="hero__flow-card-title">Quy trinh MIU SQUARE</p>
          <ol className="hero__flow-steps">
            {flowSteps.map((step, i) => (
              <li key={step} className="hero__flow-step">
                <span className="hero__flow-step-num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
