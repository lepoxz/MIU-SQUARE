# Design System - MIU SQUARE

## Pham vi

Design system nay phuc vu chang 1 cua website da trang MIU SQUARE gom 6 route public, shared navigation/footer, 1 form tu van chinh va floating quick contact. Day la bo quy tac du de CTO scaffold nhanh, khong mo rong thanh design system enterprise.

## Nguyen tac he thong

- Hinh anh va headline lon la trung tam, component lui ve vai tro ho tro
- Mau do chi dong vai tro dieu huong va chot hanh dong, khong phu kin toan giao dien
- Moi component phai co trang thai mobile/desktop ro rang
- Token duoc goi ten theo vai tro, khong truyen hex truc tiep vao component
- Uu tien pattern de review nhanh bang placeholder truoc khi co asset final

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color-bg-page` | `#FFFFFF` | Nen tong trang |
| `color-bg-alt` | `#F6F3F1` | Section xen ke, band content |
| `color-bg-dark` | `#111111` | Hero, footer, CTA dark |
| `color-bg-card` | `#FFFFFF` | Card, form surface, modal |
| `color-text-primary` | `#111111` | Heading, body chinh |
| `color-text-secondary` | `#5F5A57` | Body phu, meta |
| `color-text-inverse` | `#FFFFFF` | Text tren dark/red |
| `color-brand-primary` | `#E30613` | CTA chinh, active nav, underline |
| `color-brand-primary-hover` | `#B1000F` | Hover CTA chinh |
| `color-brand-soft` | `#FFE5E7` | Badge nen nhat, hover chip |
| `color-accent-pink` | `#FF6A7A` | Highlight nho, event tag |
| `color-accent-gold` | `#F2B544` | Icon/label nhan manh |
| `color-border-soft` | `#DDD6D1` | Input, card, divider |
| `color-border-strong` | `#C4BAB4` | Card active, sticky nav border |
| `color-success` | `#1F8F5F` | Success state |
| `color-error` | `#C62828` | Error state |
| `color-overlay-dark` | `rgba(17, 17, 17, 0.58)` | Overlay tren anh |

## Typography Tokens

| Token | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| `type-display-xl` | Be Vietnam Pro | 72px | 800 | Homepage hero desktop |
| `type-display-lg` | Be Vietnam Pro | 56px | 700 | Page hero desktop |
| `type-h1` | Be Vietnam Pro | 48px | 700 | Tieu de trang trong |
| `type-h2` | Be Vietnam Pro | 34px | 700 | Tieu de section |
| `type-h3` | Be Vietnam Pro | 22px | 700 | Card title |
| `type-body-lg` | Manrope | 18px | 500 | Intro paragraph |
| `type-body` | Manrope | 16px | 400 | Body mac dinh |
| `type-body-strong` | Manrope | 16px | 600 | Label, nav active, button text |
| `type-caption` | Manrope | 14px | 500 | Meta, helper text |
| `type-micro` | IBM Plex Mono | 12px | 500 | Eyebrow, tag, section index |

## Line Height

- Display: `1.02-1.08`
- H1/H2: `1.12`
- H3: `1.2`
- Body: `1.6`
- Caption: `1.5`
- Micro: `1.4`

## Spacing Scale

Base unit: `4px`

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `4px` | Gap icon nho |
| `space-2` | `8px` | Stack micro |
| `space-3` | `12px` | Chip, badge, nav item gap |
| `space-4` | `16px` | Stack mac dinh |
| `space-5` | `20px` | Card compact |
| `space-6` | `24px` | Form field gap |
| `space-8` | `32px` | Gutter mobile, card padding vua |
| `space-10` | `40px` | Hero content gap nho |
| `space-12` | `48px` | Section spacing mobile |
| `space-16` | `64px` | Section spacing tablet |
| `space-20` | `80px` | Section spacing desktop |
| `space-24` | `96px` | Hero/page spacing desktop |
| `space-32` | `128px` | Homepage hero lon, section interlude |

## Border Radius

- `radius-xs`: `8px`
- `radius-sm`: `12px`
- `radius-md`: `18px`
- `radius-lg`: `28px`
- `radius-xl`: `40px`
- `radius-pill`: `999px`

## Shadow

- `shadow-sm`: `0 10px 24px rgba(17, 17, 17, 0.06)`
- `shadow-md`: `0 20px 48px rgba(17, 17, 17, 0.10)`
- `shadow-cta`: `0 14px 28px rgba(227, 6, 19, 0.22)`
- `shadow-focus`: `0 0 0 4px rgba(227, 6, 19, 0.18)`

## Grid va Container

- Max container desktop: `1280px`
- Noi dung text-heavy: `760px`
- Gutter desktop: `32px`
- Gutter tablet: `24px`
- Gutter mobile: `20px`
- Grid desktop: `12 columns`
- Grid tablet: `8 columns`
- Grid mobile: `4 columns`

## Breakpoints

| Name | Min width | Notes |
|------|-----------|-------|
| `mobile` | `0px` | Uu tien traffic truy cap bang dien thoai |
| `tablet` | `768px` | Bat dau tach 2 cot cho section |
| `desktop` | `1024px` | Hero split, nav day du, card grid |
| `wide` | `1440px` | Mo rong khoang tho, khong tang do dai dong |

## Shared Component Patterns

### Primary Button

- Fill: `color-brand-primary`
- Text: `color-text-inverse`
- Radius: `radius-pill`
- Height: `52px` desktop, `48px` mobile
- Padding ngang: `24px`
- States:
- default: do chinh
- hover: `color-brand-primary-hover` + `shadow-cta`
- active: giam sang 6%
- focus: `shadow-focus`
- disabled: opacity `0.45`

### Secondary Button

- Fill: `#FFFFFF`
- Text: `color-text-primary`
- Border: `1px solid color-border-soft`
- Hover: border dam hon + nen `#F9F6F4`
- Dung cho CTA phu, nav CTA phu, card actions

### Dark Button

- Fill: `color-bg-dark`
- Text: `color-text-inverse`
- Dung tren section sang khi can action phu co trong luong cao

### Text Link

- Mau mac dinh: `color-text-primary`
- Hover: them underline do 2px hoac doi sang `color-brand-primary`
- Khong dung mau do don le lam link trong doan body dai

### Input

- Height: `52px`
- Radius: `18px`
- Border: `1px solid color-border-soft`
- Padding ngang: `16px`
- Placeholder: `#8B827D`
- Focus: vien do + `shadow-focus`
- Error: vien `color-error` + helper text do

### Textarea

- Min height: `132px`
- Radius: `18px`
- Resize doc cho phep, resize ngang tat

### Select

- Dong style voi input
- Icon dropdown canh phai, mau `color-text-secondary`

### Checkbox

- Kich thuoc: `20px`
- Checked: fill do, check trang
- Khong duoc chi show vien ma khong co label text

### Surface Card

- Background: `color-bg-card`
- Border: `1px solid color-border-soft`
- Radius: `radius-lg`
- Shadow: `shadow-sm`
- Padding: `24px` mobile, `32px` desktop

### Editorial Card

- Nen: `color-bg-dark` hoac anh + overlay
- Text: `color-text-inverse`
- Dung cho zone highlight, su kien noi bat, hero pull-quote

### Image Tile

- Ty le uu tien: `4:5`, `3:4`, `16:10`
- Radius: `radius-lg`
- Neu placeholder: dung block mau `#ECE7E3` + nhan dang ro vai tro asset

## Navigation

- Desktop:
- chieu cao `84px`
- nen trang trong 16px scroll dau, sau do sticky voi nen trang mo 94% + blur nhe
- logo trai, menu giua/phai, CTA hop tac o cuoi
- active state dung underline do 2px
- Mobile:
- chieu cao `68px`
- menu drawer fullscreen tu phai vao
- CTA chinh nam trong drawer va co the lap lai o footer

## Footer

- Nen `color-bg-dark`
- Gom logo, link dieu huong, thong tin lien he, social/contact
- Co micro row cho chinh sach va copyright

## Floating Quick Contact

- Vi tri mac dinh: phai duoi
- Desktop: stack doc 3 nut, cach mep duoi `24px`, cach mep phai `24px`
- Mobile: stack doc gon hon, cach mep duoi `88px` de tranh de len sticky CTA neu co
- Thu tu: Messenger, Zalo, WhatsApp
- Nut:
- hinh tron `52px` desktop, `48px` mobile
- co nhan label tooltip desktop
- co state hover nhich len 2px
- bat buoc co aria-label ro tung kenh

## Form Tu Van Chinh

- Form chinh dat o trang `/dich-vu`
- Field chang 1:
- `fullName`
- `phone`
- `email`
- `interestType`
- `message`
- Trang thai:
- default
- focus
- error inline
- submitting
- success inline
- Layout:
- desktop 2 cot cho field ngan, textarea full width
- mobile 1 cot

## Motion

- Hover/focus: `160-180ms`, `ease-out`
- Reveal section: `260-320ms`, translateY nhe `8-16px`
- Drawer/menu: `240ms`
- Tranh parallax manh, auto-carousel kho nhanh, counter nhay lien tuc

## Accessibility

- Body text toi thieu `16px`
- Nut va icon tap target toi thieu `44px`
- Focus ring bat buoc thay ro
- Moi card anh quan trong phai co alt text hoac nhan placeholder co nghia
- Trang thai active/selected khong chi phan biet bang mau

## Handoff cho CTO

- Tao token CSS theo ten trong tai lieu nay
- Scaffold 7 primitive truoc:
- container
- section shell
- button
- input/select/textarea/checkbox
- nav
- footer
- floating quick contact
- Anh that chua co thi dung placeholder dung ti le va ghi ro key asset
- Khong tu pha them palette phu ngoai cac token tren neu chua co cap nhat tu designer
