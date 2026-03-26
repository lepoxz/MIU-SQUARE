"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Bao lau de co landing page ban dau?",
    a: "Voi quy trinh hien tai, MIU SQUARE co the setup landing page va flow thu lead trong 3-5 ngay lam viec, tuy theo do phuc tap cua nhu cau.",
  },
  {
    q: "Toi da co nguoi chay ads roi, MIU SQUARE giup them gi?",
    a: "MIU SQUARE khong thay the doi chay ads. Chung toi xu ly khau sau click: thu lead, phan loai, handoff cho sale va theo doi conversion. Ads tot ma khau xu ly yeu thi van mat tien.",
  },
  {
    q: "Toi da co CRM roi, co can them MIU SQUARE khong?",
    a: "MIU SQUARE bo sung lop giua ads va CRM: thu lead nhanh, phan loai tu dong, handoff tuc thi. Neu CRM cua ban da lam tot viec nay thi khong can. Neu chua thi MIU SQUARE giup lap day khoang trong do.",
  },
  {
    q: "Setup co phuc tap khong?",
    a: "Khong. Doi ngu MIU SQUARE se ho tro setup toan bo. Ban chi can cung cap thong tin ve flow hien tai va muc tieu kinh doanh.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section section--light"
      aria-labelledby="faq-heading"
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section__eyebrow">Cau hoi thuong gap</p>
        <h2 id="faq-heading" className="section__heading">
          FAQ
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={faq.q} className="faq-item">
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              {faq.q}
              <span aria-hidden="true">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div id={`faq-answer-${i}`} className="faq-item__answer">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
