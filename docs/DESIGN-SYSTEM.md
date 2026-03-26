# Design System - MIU SQUARE

## Pham vi

Design system nay la bo nen nho cho dot 1: mot landing page responsive, lead capture form, CTA lap lai, cac block noi dung va handoff cho frontend engineer. Uu tien la toc do va tinh dong bo, khong mo rong thanh full component library.

## Nguyen tac he thong

- Uu tien conversion truoc trang tri
- Mot man hinh, mot hierarchy ro
- Token duoc goi bang ten, khong truyen hex truc tiep vao component
- Khoang trang va ty le phai tao nhip dieu tin cay, khong chat chu
- Moi component phai co state co the implement ngay

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `color-bg-page` | `#F5F7FA` | Nen tong trang |
| `color-bg-surface` | `#FFFFFF` | Card, form, nav |
| `color-bg-hero` | `#102033` | Hero, dark bands |
| `color-text-primary` | `#17212B` | Body text chinh |
| `color-text-secondary` | `#5B6B7A` | Body text phu |
| `color-text-inverse` | `#FFFFFF` | Text tren nen dark |
| `color-brand-primary` | `#102033` | Nut secondary dark, heading key |
| `color-brand-secondary` | `#36506B` | Divider nhan manh, icon, subheading |
| `color-brand-accent` | `#3ECF8E` | Badge, stat positive, nhan "fast/start" |
| `color-action-primary` | `#FF6B57` | Nut CTA chinh |
| `color-action-primary-hover` | `#E85A47` | Hover CTA |
| `color-border-soft` | `#D9E1E8` | Input border, card border |
| `color-border-strong` | `#AAB7C3` | Focus ring phu, card emphasis |
| `color-success` | `#1F9D68` | Thanh cong |
| `color-error` | `#D64545` | Loi |
| `color-warning` | `#C98512` | Canh bao |

## Typography

| Token | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| `type-display` | Space Grotesk | 56px | 700 | Hero desktop |
| `type-h1` | Space Grotesk | 48px | 700 | Hero nho / page title |
| `type-h2` | Space Grotesk | 32px | 700 | Tieu de section |
| `type-h3` | Space Grotesk | 20px | 700 | Card title |
| `type-body-lg` | Manrope | 18px | 400 | Intro paragraph |
| `type-body` | Manrope | 16px | 400 | Body mac dinh |
| `type-body-strong` | Manrope | 16px | 600 | Labels, nav active |
| `type-caption` | Manrope | 14px | 500 | Helper text, eyebrow |
| `type-micro` | IBM Plex Mono | 12px | 500 | Meta, stat prefix |

## Line Height

- Display/H1: `1.1`
- H2/H3: `1.2`
- Body: `1.6`
- Caption: `1.5`
- Micro: `1.4`

## Spacing Scale

Base unit: `4px`

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `4px` | Khoang cach icon-label rat nho |
| `space-2` | `8px` | Khoang cach text stack nho |
| `space-3` | `12px` | Input internal gap |
| `space-4` | `16px` | Padding nho, stack mac dinh |
| `space-5` | `20px` | Card content compact |
| `space-6` | `24px` | Section group, form field gap |
| `space-8` | `32px` | Card lon, gutter mobile |
| `space-10` | `40px` | Hero block compact |
| `space-12` | `48px` | Section spacing mobile |
| `space-16` | `64px` | Section spacing tablet |
| `space-20` | `80px` | Section spacing desktop |
| `space-24` | `96px` | Hero spacing desktop |

## Border Radius

- `radius-sm`: `10px`
- `radius-md`: `16px`
- `radius-lg`: `24px`
- `radius-pill`: `999px`

## Shadow

- `shadow-sm`: `0 8px 24px rgba(16, 32, 51, 0.06)`
- `shadow-md`: `0 18px 40px rgba(16, 32, 51, 0.10)`
- `shadow-focus`: `0 0 0 4px rgba(62, 207, 142, 0.22)`

## Grid va Container

- Max container desktop: `1200px`
- Inner content width text-heavy: `720px`
- Gutter desktop: `32px`
- Gutter tablet: `24px`
- Gutter mobile: `20px`
- Grid desktop: `12 columns`
- Grid tablet: `8 columns`
- Grid mobile: `4 columns`

## Responsive Breakpoints

| Name | Min width | Notes |
|------|-----------|-------|
| `mobile` | `0px` | Mac dinh cho quang cao do ve |
| `tablet` | `768px` | Section co the chuyen sang 2 cot |
| `desktop` | `1024px` | Hero 2 cot, card grid 3 cot |
| `wide` | `1280px` | Chi mo rong khoang tho, khong tang line length |

## Copy va CTA lock

- CTA chinh xuyen suot trang: `Dat lich demo quy trinh`
- CTA phu: `Nhan tu van giai phap`
- Hero eyebrow nen uu tien mot trong 2 huong:
- `Lead Facebook -> pipeline do luong duoc`
- `Automation-first lead operations`
- H1 phai giu dung headline da chot trong brand doc

## Component Patterns

### Buttons

#### Primary Button

- Fill: `color-action-primary`
- Text: `color-text-inverse`
- Radius: `radius-pill`
- Height: `48px` desktop, `44px` mobile
- Horizontal padding: `24px`
- Min width: `184px` cho desktop hero CTA
- States:
- default: coral fill
- hover: `color-action-primary-hover`
- active: giam sang 4%
- focus: them `shadow-focus`
- disabled: opacity `0.45`, cursor `not-allowed`

#### Secondary Button

- Fill: `#FFFFFF`
- Text: `color-brand-primary`
- Border: `1px solid color-border-soft`
- Dung cho CTA phu trong hero hoac nav

#### Ghost Button

- Khong fill
- Text: `color-brand-primary` hoac `color-text-inverse` tuy nen
- Chi dung trong nav/phu, khong dung lam CTA chinh

### Inputs

#### Text Input

- Height: `52px`
- Radius: `16px`
- Border: `1px solid color-border-soft`
- Background: `#FFFFFF`
- Text: `color-text-primary`
- Placeholder: `#7F8C98`
- Focus: border `color-brand-accent` + `shadow-focus`
- Error: border `color-error`, helper text do
- Required cho MVP: `fullName`, `phone`

#### Textarea

- Min height: `120px`
- Khong resize ngang
- Padding trong: `16px`
- Dung cho field `notes`

#### Checkbox

- Kich thuoc: `20px`
- Checked fill: `color-brand-primary`
- Dung cho consent `consent.marketing`

### Cards

#### Service Card

- Background: `#FFFFFF`
- Border: `1px solid color-border-soft`
- Radius: `24px`
- Padding: `32px`
- Dung cho 3-4 loi ich chinh

#### Metric Card

- Background: `#FFFFFF`
- Border trai 4px `color-brand-accent`
- Dung cho stat, proof point, timeline

#### Testimonial Card

- Background: `#102033`
- Text: `#FFFFFF`
- Accent line hoac badge mint

### Navigation

- Sticky top sau 24px scroll
- Chieu cao: `72px` desktop, `64px` mobile
- Gom wordmark trai, CTA phai
- Mobile: hamburger + CTA thu gon, khong nhieu hon 1 action chinh

### Section Pattern

- Moi section co:
- eyebrow hoac micro label
- heading ngan
- 1 doan copy ho tro toi da 2-3 dong
- mot khoi noi dung chinh: grid, list, form, hoac proof strip

## Page Sections cho dot 1

| Section ID | Muc dich | Pattern |
|------------|----------|---------|
| `hero` | Chot van de + gia tri + CTA | 2 cot desktop, stack mobile |
| `pain-points` | Goi dung no dau van hanh | Grid 3 card |
| `solution-flow` | Giai thich cach MIU SQUARE xu ly lead | Grid 4 card theo flow |
| `outcomes` | Noi ve ket qua/loi ich | Metric + bullet strip |
| `use-cases` | Tu nhan dien dung nhom | 2x2 cards hoac tabs card |
| `lead-form` | Chuyen doi chinh | Intro + form card |
| `faq` | Xu ly objection | Accordion |
| `final-cta` | Chot hanh dong cuoi | Dark/coral band |

## Hanh vi chuyen dong

- Motion ngan, quyet doan
- Duration: `180ms` cho hover/focus, `280ms` cho reveal section
- Easing: `ease-out`
- Tranh animation bay nhay, parallax manh hoac counter qua da

## Brand Guidelines

- Nen uu tien canh thang, card bo goc lon, duong vien mo
- Khong dung minh hoa neon, 3D bong bay hay glassmorphism nang
- Do hoa background chi la ho tro, khong canh tranh voi copy/CTA

## Accessibility

- Body text toi thieu `16px`
- Nut va input target toi thieu `44px`
- Khong truyen thong tin chi bang mau
- Focus ring bat buoc nhin thay tren keyboard navigation
- Form error phai co text cu the, khong chi vien do

## Tracking Hooks cho UI

UI can phat event theo contract MVP hien tai trong `docs/contracts/tracking.md`:

- `page_view` khi vao trang
- `cta_clicked` cho moi CTA chinh/phu
- `lead_form_viewed` khi form vao viewport hoac user bat dau tuong tac
- `lead_form_submitted` khi submit thanh cong
- `lead_form_failed` khi validate/submission loi

Properties toi thieu de UI truyen vao event:

- `section_id`
- `cta_label`
- `form_id`
- `submission_status`
- thong tin UTM neu da capture duoc

## Handoff cho Engineer

- Implement bang token CSS/TS tu dung ten tren
- Uu tien xay 5 primitive dau tien:
- container/section
- button
- input
- card
- badge/stat chip
- Copy dot 1 da khoa. Engineer khong tu doi CTA/section order neu khong co cap nhat tu designer/CMO
