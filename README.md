# MIU SQUARE Website

## Muc tieu

Tai lieu nay khoa lai huong du an theo brief moi nhat cua board: xay dung website MIU SQUARE theo huong marketing site da trang, uu tien review nhanh tung chang, de mo rong CMS va back-end sau khi giao dien demo duoc duyet.

## Pham vi hien tai

- Website public cho MIU SQUARE, phong cach agency mau do trang
- Cau truc da trang gom: Trang chu, Ve MIU SQUARE, Khu MIU SQUARE, Dich vu, Tin tuc, Lien he
- 1 form tu van chinh de thu lead
- Floating quick contact cho Messenger, Zalo, WhatsApp
- Duong deploy public de board review lien tuc

## Cau truc thuc thi muc tieu

- `apps/web`: Next.js 15 App Router cho website va API surface
- `docs/ARCHITECTURE.md`: kien truc muc tieu va module ownership
- `docs/TECH-STACK.md`: stack da khoa theo brief moi
- `docs/IMPLEMENTATION-PLAN.md`: trinh tu giao viec va review checkpoints
- `plans/2026-03-26-miusquare-website-restructure-plan.md`: plan dieu phoi cap CEO cho dot doi cau truc

## Nguyen tac triễn khai

1. Frontend demo truoc bang asset mau de board duyet nhanh.
2. Khi layout da khoa, bo sung CMS de board tu thay anh va text.
3. Form tu van va deployment phai len som de moi chang deu review duoc tren URL public.
4. Khong pha vo cac route contract dang co neu chua co ke hoach thay the ro rang.

## Chay local

- Cai dependency: `npm --prefix apps/web install`
- Chay dev: `npm --prefix apps/web run dev`
- Kiem tra: `npm --prefix apps/web run lint`, `npm --prefix apps/web run test`, `npm --prefix apps/web run build`

## Trang thai hien tai

- Workspace da co `apps/web` va `vercel.json`
- Repo dang duoc realign tu thin-slice landing page sang website da trang theo brief moi
- CTO se chot scaffold + deployment path, UI Designer khoa visual direction, CMO khoa copy, Product Owner tach chang review
