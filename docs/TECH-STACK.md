# MIU SQUARE Tech Stack

## Stack da khoa cho dot doi cau truc

| Lop | Cong nghe | Vai tro |
|-----|-----------|---------|
| Frontend framework | Next.js 15 App Router | Public website, route groups, API routes |
| Language | TypeScript 5.x | Dong bo UI, validation, integration helpers |
| UI styling | Tailwind CSS | Xay layout nhanh, giu token design nhat quan |
| UI primitives | shadcn/ui | Form controls, dialog, accordion va primitive tai su dung |
| Motion | Framer Motion | Scroll reveal va micro-interaction theo brief |
| Validation | Zod + React Hook Form | Form tu van va env validation |
| CMS phase 2 | Sanity.io | Board tu thay text/anh sau khi layout da khoa |
| Email delivery | Resend | Gui lead notification cho admin |
| Chat notification | Telegram Bot API | Ban lead nhanh vao kenh admin |
| Hosting | Vercel | Preview + public deployment cho board review |
| Testing | Vitest + Next build | Bao ve contracts, route logic va build health |

## Nguyen tac chon stack

- Uu tien nhung cong cu phu hop viec ship website nhanh va sua lien tuc theo feedback.
- Khong dua database hay back-end nang vao dot dau neu chua phuc vu truc tiep review loop.
- Giu kha nang mo rong CMS va backend, nhung khong de no lam cham chang demo dau tien.

## Thu tu kich hoat cong nghe

1. `Next.js + Tailwind + shadcn/ui` de khoa bo khung giao dien.
2. `Framer Motion` de them chuyen dong co chu dich sau khi IA va layout on.
3. `Resend + Telegram` cho form tu van.
4. `Sanity` sau khi board xac nhan page structure, asset slots va copy direction.

## Trade-off da chap nhan

- Chua dua database vao dot dau: doi lai deployment don gian hon va review nhanh hon.
- Chua bat buoc Sanity ngay tu dau: giam overhead schema va content modeling truoc khi wireframe duoc khoa.
- Van giu route tracking rieng: de khong mat luong do luong khi public demo len traffic that.
