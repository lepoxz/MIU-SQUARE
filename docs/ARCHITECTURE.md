# MIU SQUARE Website Architecture

## Tong quan

MIU SQUARE duoc chot theo mo hinh website marketing da trang, public-first, toi uu cho review nhanh va mo rong dan thanh he thong co CMS. Giai doan hien tai khong dong vai dashboard automation nua; trong tam la mot website gioi thieu to hop + dich vu livestream, co form tu van trung tam, asset demo de board review, va duong deploy cong khai.

## Muc tieu kien truc

- Ship duoc nhanh tung chang nho de board xem va yeu cau sua ngay
- Tach ro phan "giao dien review nhanh" va phan "quan tri noi dung/CMS" de co the mo rong sau
- Giu codebase don gian, uu tien App Router va component sections tai su dung
- Co cho de gan form tu van voi email + Telegram ma khong buoc doi toan bo cau truc

## So do thanh phan

```text
Board assets/spec
        |
        v
 Next.js App Router (`apps/web`)
        |
        +-- Public site routes
        |     / 
        |     /ve-miu-square
        |     /khu-miu-square
        |     /dich-vu
        |     /tin-tuc
        |     /lien-he
        |
        +-- Shared UI
        |     nav / footer / section blocks / floating contact / form shell
        |
        +-- Content layer
        |     static seed truoc
        |     Sanity CMS sau khi layout da khoa
        |
        +-- Lead ingestion
        |     submit-form adapter -> validation -> email / Telegram
        |
        +-- Tracking
              page_view / cta_click / form events
```

## Cau truc module muc tieu

```text
apps/web/
  app/
    (site)/
      page.tsx
      ve-miu-square/page.tsx
      khu-miu-square/page.tsx
      dich-vu/page.tsx
      tin-tuc/page.tsx
      lien-he/page.tsx
      layout.tsx
    api/
      submit-form/route.ts
      tracking/route.ts
      health/route.ts
  src/
    components/
      common/
      sections/
      forms/
      ui/
    content/
      site-copy.ts
      site-navigation.ts
    features/
      leads/
      tracking/
      cms/
    lib/
      env.ts
      logger.ts
      telegram.ts
      email.ts
  public/
    logo/
    images/
    icons/
```

## Ranh gioi thanh phan

### Public site

- Chiu trach nhiem render cac trang marketing va data seed trong giai doan 1
- To chuc theo route groups de them layout chung va giu menu/footer nhat quan
- Moi page duoc lap tu sections tai su dung thay vi viet monolithic page

### Content layer

- Giai doan 1: dung file content local de board review nhanh bang asset demo
- Giai doan 2: them Sanity lam he thong thay anh/text ma khong sua component structure
- Muc tieu la thay data source, khong thay layout tree

### Lead ingestion

- `submit-form` la public API cho form tu van
- Validate payload, chuan hoa data, roi day qua email va Telegram
- Co the giu `src/features/leads` lam domain layer de tranh logic bi tron vao route handler

### Tracking

- Theo doi page view, CTA click, form viewed, submit success/failure
- Giu route tracking rieng va vocabulary su kien on dinh de bo sung analytics sau

## Luong du lieu

1. Khach vao cac trang public tu ads, social hoac direct traffic.
2. Frontend render copy va asset demo/static seed.
3. Nguoi dung tuong tac CTA hoac form -> client tracker goi tracking API.
4. Khi submit form, public route validate va gui thong tin den email + Telegram.
5. Sau khi board duyet layout va flow, content source duoc nang cap sang Sanity ma khong doi route map.

## Mo hinh deployment

- Hosting uu tien: Vercel
- Moi branch quan trong can build duoc va co preview URL
- Production/public demo URL phai san som de board review theo chang
- Asset demo luu trong `public/`; asset editable sau do chuyen qua CMS/CDN khi can

## Quyet dinh kien truc

| Quyet dinh | Ly do |
|-----------|-------|
| Multi-page site thay vi landing page 1 trang | Brief moi can website day du cho MIU SQUARE, khong chi thin slice lead gen |
| Static seed truoc, CMS sau | Board can xem nhanh tung chang; CMS chi nen them sau khi layout duyet |
| Form tu van chinh tap trung o trang Dich vu va CTA lien quan | Don gian hoa chuyen doi, dung brief "1 form quan trong nhat" |
| App Router + section components | De tach page shell, tai su dung section, va ship tang phan |
| Public deploy la milestone som | Board muon review song song voi qua trinh sua |
