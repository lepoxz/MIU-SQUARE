# Landing Page Spec - MIU SQUARE

## Muc tieu trang

Tao landing page 1 trang de:

- Trinh bay MIU SQUARE nhu doi tac tang truong so cho SME/local business
- Chot ro loi ich trong 5 giay dau
- Day nguoi dung den CTA de lai thong tin hoac dat lich
- Tao bo khung san sang mo rong them dashboard/automation flow o dot sau

## Trang thai handoff

Spec nay da duoc cap nhat theo:

- Messaging chot trong `docs/LANDING-PAGE-MESSAGING.md`
- Scope MVP trong `ANG-17#document-scope-mvp`
- Contract ky thuat trong `docs/contracts/lead-ingestion.md` va `docs/contracts/tracking.md`

Muc tieu o heartbeat nay la khoa ban handoff cuoi cho implementation dot 1.

## Copy lock

- H1: `Bien lead Facebook thanh pipeline chot sale nhanh, khong con roi trong inbox`
- Subheadline: `MIU SQUARE giup SME va local business thu lead, phan loai, thong bao cho sale va theo doi conversion trong mot quy trinh co the do luong.`
- CTA chinh: `Dat lich demo quy trinh`
- CTA phu: `Nhan tu van giai phap`
- Final CTA heading: `Muon biet lead cua ban dang rot o dau?`

## Kien truc noi dung

1. Hero
2. Van de khach hang dang gap
3. Cach MIU SQUARE giai quyet
4. Ket qua va gia tri nhan duoc
5. Use case phu hop
6. Lead capture form
7. FAQ
8. Footer CTA

## Wireframe Desktop

```text
+----------------------------------------------------------------------------------+
| LOGO                                   Menu anchors                 CTA button   |
+----------------------------------------------------------------------------------+
| HERO LEFT                                              | HERO RIGHT             |
| Eyebrow                                                | Flow card              |
| Headline khoa copy                                     | Facebook -> form ->    |
| Subheadline khoa copy                                  | handoff -> dashboard   |
| [CTA primary] [CTA secondary]                          |                        |
| 3 proof bullets ngan                                   |                        |
+----------------------------------------------------------------------------------+
| SECTION: Van de hien tai                                                         |
| 3 cards: Lead vao nhieu kenh / Phan hoi cham / Khong do duoc ROI                 |
+----------------------------------------------------------------------------------+
| SECTION: Cach MIU SQUARE giai quyet                                              |
| 4 flow cards: Thu lead -> Phan loai -> Handoff -> Theo doi                       |
+----------------------------------------------------------------------------------+
| SECTION: Ket qua nhan duoc                                                       |
| 4 outcome tiles: nhanh hon / giam that thoat / minh bach / de scale              |
+----------------------------------------------------------------------------------+
| SECTION: Use case phu hop                                                        |
| 4 cards: Bat dong san / Giao duc / Tham my-F&B / Agency service                  |
+----------------------------------------------------------------------------------+
| LEAD FORM BLOCK                                                                  |
| Left: heading + 3 loi ich             Right: Form (fullName/phone/notes/consent)|
+----------------------------------------------------------------------------------+
| FAQ                                                                              |
| Accordion 4-5 cau hoi                                                            |
+----------------------------------------------------------------------------------+
| FINAL CTA BAND                                                                   |
| Headline + primary CTA + secondary contact                                       |
+----------------------------------------------------------------------------------+
| FOOTER                                                                           |
+----------------------------------------------------------------------------------+
```

## Wireframe Mobile

```text
+--------------------------------------+
| LOGO                    Menu / CTA   |
+--------------------------------------+
| Eyebrow                              |
| Headline khoa copy                   |
| Support copy khoa copy               |
| CTA primary                          |
| CTA secondary                        |
| Flow card / image abstraction        |
+--------------------------------------+
| Problem card 1                       |
| Problem card 2                       |
| Problem card 3                       |
+--------------------------------------+
| Heading + copy                       |
| Flow card 1                          |
| Flow card 2                          |
| Flow card 3                          |
| Flow card 4                          |
+--------------------------------------+
| Outcome tiles (scroll stack)         |
+--------------------------------------+
| Use case 1                           |
| Use case 2                           |
| Use case 3                           |
| Use case 4                           |
+--------------------------------------+
| Lead form intro                      |
| Input name                           |
| Input phone                          |
| Input notes                          |
| Consent checkbox                     |
| Submit CTA chinh                     |
+--------------------------------------+
| FAQ accordion                        |
+--------------------------------------+
| Final CTA band                       |
+--------------------------------------+
```

## Mockup Direction

## Hero

- Nen navy dam voi mot lop gradient chuyen rat nhe sang xanh steel
- Ben trai la copy khoa theo messaging, ben phai la mot flow card mo ta "lead vao -> handoff -> dashboard"
- Co 1 stat chip mau mint va 1 CTA coral de tao tam diem
- Hero khong dung anh stock; chi dung card UI abstraction

## Section styles

- Section sang/toi xen ke de tao nhip cuon trang
- Problem section: nen trang, card border mo, icon outline
- Solution section: card surface trang tren background cloud
- Lead form section: background navy, form card trang de tang contrast
- Final CTA band: nen coral/gradient coral-navy nhung copy van phai de doc

## Component hierarchy

- CTA chinh luon coral
- CTA phu la outline/trang
- Badge/eyebrow luon dung mint hoac navy nhat quan
- Metric number co the dung Space Grotesk dam + mono prefix nho
- H1/H2 phai giu dung structure thong diep "van de -> giai phap -> ket qua"

## Noi dung tung section

### 1. Hero

- Eyebrow de xuat: `Lead Facebook -> pipeline do luong duoc`
- Headline: `Bien lead Facebook thanh pipeline chot sale nhanh, khong con roi trong inbox`
- Subcopy: `MIU SQUARE giup SME va local business thu lead, phan loai, thong bao cho sale va theo doi conversion trong mot quy trinh co the do luong.`
- CTA chinh: `Dat lich demo quy trinh`
- CTA phu: `Nhan tu van giai phap`
- Proof bullets:
- `Thu lead tap trung tu landing page va Facebook`
- `Thong bao va handoff cho sale nhanh`
- `Theo doi conversion trong mot quy trinh do luong duoc`

### 2. Van de hien tai

Muc dich: goi dung pain point truoc khi ban giai phap.

- Lead vao nhieu kenh nen phan hoi cham
- Sale bo sot lead nong do xu ly tay va roi rac
- Chu doanh nghiep khong thay duoc ROI that sau khi da do tien vao ads

### 3. Giai phap

4 card de xuat theo flow:

- Thu lead tap trung
- Phan loai va day thong bao
- Handoff sale nhanh
- Theo doi trang thai va conversion tren dashboard

### 4. Proof / Loi ich

Noi ve outcome, khong noi feature:

- Rut ngan thoi gian phan hoi lead
- Giam that thoat lead trong follow-up
- Minh bach hoa quy trinh marketing -> sale
- Tao nen tang de scale ads ma khong tang chaos van hanh

### 5. Use case phu hop

- Bat dong san
- Giao duc
- Tham my va F&B
- Agency service

### 6. Lead form

Field MVP theo contract:

- `fullName`
- `phone`
- `notes`
- `consent.marketing`

Field mo rong neu backend/frontend chot them o dot sau:

- `email`
- metadata UTM an

Button submit:

- `Dat lich demo quy trinh`

### 7. FAQ

FAQ de xuat:

- Bao lau de co landing page ban dau?
- Toi da co nguoi chay ads roi, MIU SQUARE giup them gi?
- Toi da co CRM roi, co can them MIU SQUARE khong?
- Setup co phuc tap khong?

## Interaction Notes

- CTA sticky o mobile sau khi user scroll qua hero la khuyen nghi nen co
- Form submit state dung inline success theo scope MVP, khong can page rieng
- FAQ mo dong mem, khong lam giat layout qua manh
- Nav anchor scroll muot nhung van ton trong reduced-motion

## Implementation Notes cho Engineer

- Build page theo section-based layout, moi section la 1 component doc lap
- Tach content copy khoi presentation de cap nhat sau nay de dang
- Uu tien mobile-first vi traffic tu ads co kha nang den tu dien thoai
- Hero mockup co the dung CSS cards thay vi anh
- Form area can du cho validation va thank-you state
- Su dung `form_id=\"hero-lead-form\"` hoac `primary-lead-form` nhat quan giua UI va tracking

## Event mapping cho MVP

| Hanh vi UI | Event contract hien tai | Properties toi thieu |
|------------|--------------------------|----------------------|
| Vao trang | `page_view` | `page`, `campaign.*` |
| Click CTA hero/final | `cta_clicked` | `cta_label`, `section_id`, `page` |
| Form vao viewport hoac focus lan dau | `lead_form_viewed` | `form_id`, `section_id` |
| Submit thanh cong | `lead_form_submitted` | `form_id`, `submission_status` |
| Validate/submit loi | `lead_form_failed` | `form_id`, `field` hoac `submission_status` |

## Dependency con lai

- Social proof, testimonial, case study that
- Logo chinh thuc neu board muon nang cap thuong hieu sau MVP
