# Tech Stack

## Chosen Stack

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Language | TypeScript | 5.x | Dong bo frontend, backend va automation scripts |
| Framework | Next.js | 16.x | Phu hop landing page, dashboard noi bo va API routes nhe; tranh baseline tren nhanh de giam rui ro security |
| Automation | n8n | latest stable | Dieu phoi workflow Facebook lead intake va notification |
| Database | PostgreSQL | 16 | Luu lead, campaign snapshot va audit log |
| ORM | Prisma | 6.x | Schema ro rang, migration de quan ly |
| Hosting | Vercel + Railway | current | Vercel cho web, Railway cho Postgres va worker nho |
| CI/CD | GitHub Actions | current | Lint, test, deploy tu dong |

## Rationale

Chon stack "boring but reliable" de ship nhanh MVP cho agency automation. TypeScript giam chi phi chuyen context giua web app, API va workflow glue code. Next.js du linh hoat cho landing page, admin dashboard va webhook endpoints. PostgreSQL + Prisma giup luu du lieu lead/campaign ro rang ngay tu giai doan som. n8n la lop tu dong hoa phu hop DNA cua agency.

## Trade-offs

- Khong chon stack Python-first vi team hien tai duoc bootstrap quanh web/product flow, khong phai data-heavy backend.
- Khong chon microservices giai doan dau vi chi lam tang chi phi van hanh.
- Khong dua Facebook automation logic het vao n8n; cac logic can kiem soat version va test se de o app code.

## Key Dependencies

| Package | Purpose | License |
|---------|---------|---------|
| `next` | Web app va API surface | MIT |
| `react` | UI layer cho dashboard va landing page | MIT |
| `prisma` | ORM, schema va migration | Apache-2.0 |
| `@prisma/client` | Database client runtime | Apache-2.0 |
| `zod` | Request validation va config schema | MIT |
| `pino` | Structured logging | MIT |
