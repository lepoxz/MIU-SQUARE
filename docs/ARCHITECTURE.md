# System Architecture

## Overview

MIU SQUARE duoc khoi tao nhu mot he thong gom website/landing page, dashboard noi bo va lop workflow automation de thu lead tu Facebook, phan loai va day vao quy trinh cham soc. Muc tieu la co mot thin slice du de demo luong "lead vao -> xu ly -> thong bao -> theo doi".

## Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| Landing Site | Trinh bay offer, thu lead va CTA | Next.js |
| Admin Dashboard | Theo doi lead, campaign status, audit log | Next.js |
| API Layer | Webhook, CRUD lead, campaign config | Next.js Route Handlers |
| Workflow Engine | Tu dong phan luong, thong bao, handoff | n8n |
| Data Store | Luu lead, campaign, automation event | PostgreSQL + Prisma |

## Data Flow

1. Khach hang tu Facebook Ads hoac landing page gui lead.
2. API layer validate payload va ghi lead vao PostgreSQL.
3. Event duoc day sang n8n de phan loai lead, gui thong bao noi bo, va kich hoat sequence tiep theo.
4. Dashboard doc trang thai lead va lich su automation tu database.

## API Boundaries

### External APIs

- Facebook Lead Ads webhook ingestion
- Form submission endpoint cho landing page

### Internal APIs

- Dashboard CRUD cho lead va campaign metadata
- Internal endpoint de replay workflow hoac mark handoff status

## Deployment Model

- **Build**: GitHub Actions chay lint, unit test va build Next.js
- **Test**: Unit test cho validation/business logic, integration test cho lead ingestion
- **Deploy**: Vercel cho web tier, Railway cho Postgres; n8n chay nhu workflow service tach rieng

## Key Decisions

| Decision | Context | Rationale |
|----------|---------|-----------|
| Monolith truoc, tach sau | MVP can toc do | Giam overhead phoi hop va deployment |
| n8n la lop orchestration | Agency can automation linh hoat | Cho phep thay doi flow nhanh ma khong doi code core qua nhieu |
| Postgres lam source of truth | Can audit va bao cao | De truy vet lead va hanh vi he thong on dinh |
