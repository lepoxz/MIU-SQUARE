# Website Visual Direction va Page Composition - MIU SQUARE

## Trang thai

Ten file duoc giu lai vi lich su repo, nhung tai lieu nay khong con la spec landing page 1 trang. Day la handoff visual direction va page composition cho website MIU SQUARE da trang theo brief board trong `ANG-50#document-website-miusquare`.

## Muc tieu heartbeat

Khoa cac quyet dinh de CTO co the build chang 1 ma khong phai doan y:

- palette do-trang-den va nhan dien tong the
- composition cho 6 route
- mapping section/component tai su dung
- asset nao dung placeholder, asset nao can board cap them
- note desktop/mobile cho nav, hero, form va floating contact

## Route Map da chot

1. `/`
2. `/ve-miu-square`
3. `/khu-miu-square`
4. `/dich-vu`
5. `/tin-tuc`
6. `/lien-he`

## Visual Direction tong the

### Hero direction

- Hero homepage phai toan ban, co hinh anh hoac collage crop manh, overlay toi nhe va heading do lon
- Tong cam giac: agency/editorial, khoang tho rong, image-led, nhan do ro
- CTA chinh luon la do, CTA phu la trang/outline
- Co 1 khoi thong tin nho de nhan vao "to hop da nang + livestream hub" hoac "hop tac kinh doanh"

### Page rhythm

- Xen ke giua section sang, alt, va dark band
- Moi trang co it nhat 1 image-led section va 1 section text-card de giu nhip
- Khong lap lai cung mot hero layout y nguyen tren ca 6 trang
- Nav/footer/floating contact dung chung tren toan site

### Composition formula

- Trang chu: hinh anh + section teaser + CTA hop tac
- Trang trong gioi thieu: hero noi dung + timeline/value/gallery
- Trang khu: grid zone + teaser tung khu + gallery
- Trang dich vu: service blocks + quy trinh + form tu van chinh
- Trang tin tuc: listing/editorial cards
- Trang lien he: info + map + form phu

## Shared Sections va Components

| ID | Thanh phan | Tai su dung o dau | Ghi chu build |
|----|------------|-------------------|---------------|
| `site-nav` | Nav sticky | 6/6 trang | Desktop menu + mobile drawer |
| `page-hero` | Hero trong | 5 trang trong | Co 3 bien the: image-right, image-full, text-left |
| `home-hero` | Hero trang chu | `/` | Bien the rieng, uu tien full-bleed |
| `section-header` | Eyebrow + heading + intro | Nhieu trang | Tach rieng de copy thay sau |
| `feature-card` | Card noi dung co icon/so | `/`, `/dich-vu`, `/ve-miu-square` | 3-4 cot desktop |
| `image-tile` | O anh + label | `/`, `/khu-miu-square`, `/tin-tuc` | Dung cho placeholder va asset final |
| `editorial-band` | Section dark/highlight | `/`, `/dich-vu`, `/lien-he` | CTA hoac quote band |
| `service-process` | Step/timeline | `/dich-vu` | 3-5 buoc |
| `consultation-form` | Form tu van chinh | `/dich-vu` | Form quan trong nhat |
| `contact-panel` | Box lien he nhanh | `/lien-he`, footer | Gom dia chi, phone, social |
| `news-card` | Bai viet/event card | `/`, `/tin-tuc` | Ty le 4:3 |
| `quick-contact` | Floating contact | 6/6 trang | Messenger, Zalo, WhatsApp |
| `site-footer` | Footer | 6/6 trang | Link + contact + policy |

## Page Composition chi tiet

### 1. Trang chu `/`

Muc tieu: gioi thieu tong quan MIU SQUARE, tao an tuong thi giac va dieu huong nguoi dung den cac khu chinh hoac CTA hop tac.

#### Section order

1. `home-hero`
2. `destination-intro`
3. `zone-teaser-grid`
4. `livestream-highlight`
5. `event-promo-strip`
6. `services-teaser`
7. `news-teaser`
8. `final-cta-band`

#### Composition notes

- `home-hero`: desktop 2 lop, nen anh full-bleed; mobile stack text len tren anh 56-64vh
- `destination-intro`: 2 cot, trai la intro MIU SQUARE, phai la 2 stat/USP cards
- `zone-teaser-grid`: 4 card cho Mua sam, Am thuc, Vui choi, Livestream Hub
- `livestream-highlight`: section dark voi 1 anh lon + 2-3 bullet loi ich
- `event-promo-strip`: carousel hoac horizontal cards, neu chua code carousel thi dung grid ngang snap
- `services-teaser`: teaser ve thue gian hang, livestream support, hop tac brand
- `news-teaser`: 3 `news-card`
- `final-cta-band`: CTA `Tu van hop tac` + thong tin contact nhanh

### 2. Trang `/ve-miu-square`

Muc tieu: xay dung tin cay ve thuong hieu, tam nhin va khong gian.

#### Section order

1. `page-hero`
2. `brand-story`
3. `vision-values`
4. `facility-gallery`
5. `why-miu-square`
6. `final-cta-band`

#### Composition notes

- `page-hero`: hero image-right hoac full-width image voi overlay text trai
- `brand-story`: layout editorial 2 cot, copy trai, anh/doc quote phai
- `vision-values`: 3-4 `feature-card`
- `facility-gallery`: masonry nhe hoac asymmetrical grid 2-3 ty le anh
- `why-miu-square`: bullet value cho khach tham quan va doi tac

### 3. Trang `/khu-miu-square`

Muc tieu: trinh bay cac khu chuc nang trong to hop, giup nguoi dung hieu tung zone va dieu huong sang hop tac/tham quan.

#### Section order

1. `page-hero`
2. `zone-overview-index`
3. `shopping-zone`
4. `food-zone`
5. `entertainment-zone`
6. `livestream-hub-zone`
7. `visit-or-partner-cta`

#### Composition notes

- `zone-overview-index`: 4 tile anchor den tung khu
- Moi zone section theo cong thuc:
- anh hero nho
- heading + intro
- 3 diem noi bat hoac 3 the tile
- 1 CTA phu `Xem dich vu lien quan` hoac `Lien he hop tac`
- `livestream-hub-zone` duoc uu tien mot dark band hoac do nhe de tao khac biet

### 4. Trang `/dich-vu`

Muc tieu: day la trang conversion chinh, giai thich dich vu va chot form tu van.

#### Section order

1. `page-hero`
2. `service-categories`
3. `partnership-benefits`
4. `service-process`
5. `stall-rental-options`
6. `consultation-form`
7. `faq-lite`
8. `final-cta-band`

#### Composition notes

- `page-hero`: hinh anh hoac collage dich vu, CTA chinh dua thang xuong form
- `service-categories`: 4 card cho setup livestream, fanpage, quang cao, dong goi-ship
- `partnership-benefits`: 2 cot, bullet ben trai, image/stat ben phai
- `service-process`: 4 step dat ngang desktop, stack mobile
- `stall-rental-options`: 3 card package hoac space types
- `consultation-form`: section quan trong nhat, background alt hoac dark + card trang noi bat
- `faq-lite`: 4-5 accordion ngan, tranh dua copy dai

### 5. Trang `/tin-tuc`

Muc tieu: tao cam giac website dang van hanh song dong va co noi dung/su kien cap nhat.

#### Section order

1. `page-hero`
2. `featured-story`
3. `news-grid`
4. `event-list-strip`
5. `newsletter-or-contact-cta`

#### Composition notes

- `featured-story`: 1 bai noi bat tren cung voi anh lon
- `news-grid`: 6-9 `news-card`, chang 1 co the la du lieu seed
- `event-list-strip`: cards ngang cho su kien sap toi
- Neu chua co CMS, phai seed bang du lieu mock nhat quan ve format va tone

### 6. Trang `/lien-he`

Muc tieu: dua nguoi dung den cac kenh lien lac va form lien he mot cach ro rang, nhanh.

#### Section order

1. `page-hero`
2. `contact-methods`
3. `map-and-location`
4. `contact-form-secondary`
5. `recruitment-or-business-note`

#### Composition notes

- `contact-methods`: 3-4 card cho phone, email, Messenger, dia chi
- `map-and-location`: desktop 2 cot, mobile stack
- `contact-form-secondary`: nhe hon form trang dich vu; dung cho lien he tong quat
- `recruitment-or-business-note`: text strip nho o cuoi trang

## Desktop va Mobile states can khoa

### Nav

- Desktop: menu ngang day du + CTA hop tac
- Mobile: drawer fullscreen; CTA lap lai trong drawer; quick contact van hien

### Hero

- Desktop:
- homepage uu tien 55/45 hoac full-bleed
- page trong uu tien 50/50 text-image
- Mobile:
- text len truoc, anh xuong sau neu hero chia cot
- heading khong vuot qua 4 dong
- CTA stack doc neu co 2 nut

### Grid

- Desktop: 3-4 cot tuy section
- Tablet: 2 cot
- Mobile: 1 cot cho service/news; 2 cot chi dung voi card rat ngan

### Floating contact

- Desktop: hien tooltip label khi hover
- Mobile: icon-only, size lon de bam, cach sticky CTA toi thieu `16px`

### Form

- Desktop: 2 cot cho field ngan, submit full width hoac canh trai ro rang
- Mobile: 1 cot, sticky submit khong can; field cach nhau `16px`
- Success state inline, khong redirect chang 1

## Asset Mapping

| Khu vuc | Asset can co | Trang thai hien tai | Xu ly chang 1 |
|--------|---------------|---------------------|---------------|
| Shared nav/footer | Logo chinh thuc | Chua co file trong repo | Dung wordmark fallback, cho board cap file |
| Homepage hero | 1-2 anh hero tong quan | Chua co | Dung placeholder editorial ton do/trang |
| Zone teasers | 4 anh dai dien khu | Chua co | Dung placeholder theo tung chu de |
| Ve MIU SQUARE | 3-5 anh khong gian/co so vat chat | Chua co | Dung gallery placeholder cung style |
| Khu MIU SQUARE | 1 anh/zone + 1 detail/zone | Chua co | Dung placeholder co label asset key |
| Dich vu | 2-4 anh dich vu/livestream/partner | Chua co | Dung placeholder/grid do hoa |
| Tin tuc | Thumbnail bai viet/su kien | Chua co | Seed mock image 4:3 |
| Lien he | Ban do/anh mat tien | Chua co | Dung block map placeholder + text |

## Asset board can cap them

- Logo chinh thuc PNG/SVG nen trong
- Bo anh that cho homepage hero
- It nhat 1 anh cho moi zone: mua sam, am thuc, vui choi, livestream
- Anh co so vat chat/khong gian cho trang gioi thieu
- Anh mat bang/mat tien neu muon tang do tin cay trang lien he

## Placeholder rules

- Placeholder phai dong bo cung mot style crop, saturation, contrast
- Khong mix stock photo qua nhieu phong cach
- Tren moi asset placeholder quan trong, luu key ro trong content/data de thay sau
- Neu chua co anh that, uu tien layout song bang shape + block mau + label hon la anh kem chat luong

## Tracking va CTA placement can giu

- CTA chinh xuat hien o homepage hero, `/dich-vu`, va final CTA bands
- Floating contact hien dien toan site
- Form tu van chinh chi co 1 ban tren `/dich-vu`
- Form/CTA phu o trang khac chi nen dan ve `/dich-vu` hoac mo kenh lien he nhanh

## Handoff quyet dinh cho CTO

- Scaffold route shell cho 6 trang truoc khi noi copy chi tiet
- Uu tien build shared layout + hero variants + card primitives + consultation form + floating contact
- Dung data seed/mock data theo dung section order o tai lieu nay
- Chua co asset final thi van phai giu dung ti le khung anh va khoang trang de board duyet bo cuc
- Khong can cho CMS moi bat dau chang 1

## Phu thuoc con mo

- Copy chi tiet tung trang do CMO khoa o issue rieng
- Asset final chua vao repo
- Co the tiep tuc implementation ngay vi hierarchy, states, va route composition da du ro
