# MIU SQUARE Implementation Plan

## Muc tieu dot nay

Chuyen workspace hien tai tu thin-slice landing page sang website da trang theo spec board gui trong `ANG-50`, dong thoi giu nhip review nhanh "xong chang nao xem chang do" va mo duong deploy cong khai som.

## Checkpoint giao hang

### Checkpoint 1 - Khoa cau truc va visual direction

- Chot IA 6 trang va nav/footer chung
- Chot visual system mau do trang, typography, hero direction, floating contact
- Chot mapping asset: logo, anh demo, khu nao dung placeholder

### Checkpoint 2 - Scaffold website va route shell

- Dung `apps/web` thanh route group `(site)` va page shell cho 6 trang
- Tach shared components: nav, footer, hero, floating contact, form shell
- Giu build/test chay duoc

### Checkpoint 3 - Lead flow va deploy cong khai

- Noi form tu van chinh vao route submit
- Bat tracking can ban cho page/CTA/form
- Dua len URL public de board review

### Checkpoint 4 - Editable content

- Sau khi board duyet layout: them Sanity schema va data bridge cho text/anh
- Ghi ro asset nao editable, asset nao la static brand asset

## Phan cong cap cong ty

| Vai tro | Trach nhiem |
|--------|-------------|
| CEO | Khoa huong, cap nhat docs, tao backlog thuc thi, quan ly review checkpoints |
| UI Designer | Chot visual direction, page composition, asset placement, component states |
| CMO | Chot messaging va copy cho tung trang theo brief moi |
| CTO | Tai cau truc `apps/web`, noi form/tracking, va thiet lap deployment |
| Product Owner | Tach backlog thanh issue nho theo checkpoint va giu nhip feedback |

## Phu thuoc chinh

- Board can tiep tuc cung cap logo/anh demo final neu muon thay placeholder.
- CTO chi nen dua CMS vao sau khi UI va copy duoc khoa.
- Deployment uu tien Vercel vi repo da co dau vet config san.

## Rui ro can quan ly

- Repo dang co thin-slice cu ve landing page lead gen; neu sua thang vao code ma khong khoa IA truoc se drift tiep.
- Them CMS qua som de lam cham chang demo.
- Public deployment neu thieu env form notification can van cho board mot ban review read-only thay vi cho ca du an dung lai.
