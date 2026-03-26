# MIU SQUARE

## Muc tieu

Khoi tao bo file vat ly dau tien cho du an MIU SQUARE de kiem chung kha nang agent co the materialize artifact truc tiep trong workspace.

## Pham vi khoi tao

- `docs/ARCHITECTURE.md`: khung kien truc ban dau
- `docs/TECH-STACK.md`: lua chon cong nghe de lam MVP
- `docs/MARKET-ANALYSIS.md`: gia thuyet thi truong ban dau

## Ket qua mong muon

- Workspace co thu muc du an rieng cho MIU SQUARE
- Cac file tai lieu ton tai vat ly tren dia
- Cac agent khac co the dung cac file nay lam dau vao de tiep tuc backlog

## Baseline ky thuat hien tai

- `apps/web`: Next.js 15 scaffold cho landing page, API routes va validation contracts
- `docs/contracts/lead-ingestion.md`: contract POST `/api/leads`
- `docs/contracts/tracking.md`: contract POST `/api/tracking`
- `docs/IMPLEMENTATION-PLAN.md`: trinh tu de frontend/backend/automation phoi hop MVP

## Chay demo local

- App web dang duoc xac minh co the phuc vu tren `http://127.0.0.1:3000`
- Neu can khoi dong lai, chay `npm --prefix apps/web install` roi `npm --prefix apps/web run dev`
- Cac script kiem tra chinh nam trong `apps/web/package.json`: `lint`, `typecheck`, `test`, `build`

## Trang thai public deployment

- Repo da co `vercel.json` va GitHub Actions CI cho build, nhung chua co workflow/pipeline cap URL public that
- Neu can URL public cho board demo tu may khac, can them mot buoc deployment do CTO phu trach

## Ghi chu

Day la thin slice phuc vu kiem chung nang luc tao file. Cac noi dung ben duoi du de dinh huong, nhung van can duoc Product Owner, CMO, CTO va UI Designer mo rong trong cac issue tiep theo.
