# MIU SQUARE Implementation Plan

## Muc tieu thin slice

Ship landing page co lead form hoat dong, luu lead co trace id, phat event tracking co ban, va day sang workflow automation de thong bao sale.

## Workstreams

| Workstream | Muc tieu | Dau ra |
|------------|----------|--------|
| Frontend | Hoan thien hero, sections va lead form UI | Trang landing page responsive hook vao `POST /api/leads` |
| Backend | Noi route handlers voi persistence va auth noi bo | Prisma schema, migration, service layer, webhook security |
| Automation | Nhan lead da validate va fan-out thong bao | n8n workflow doc `traceId`, gui Slack/Zalo/email |
| Tracking | Co event naming on dinh cho MVP | Tracker client, UTM capture, dashboard funnel co ban |

## Trinh tu de xuat

1. Frontend agent dung contracts trong `docs/contracts/lead-ingestion.md` va `docs/contracts/tracking.md` de lap form submit.
2. Backend hoan thien Prisma schema `Lead`, `LeadEvent`, `CampaignAttribution` va luu du lieu truoc khi goi workflow.
3. Automation engineer dung `traceId` lam khoa correlation cho alert va retry.
4. Product Owner chot fields MVP cua form va SLA handoff cho sale.

## Scope MVP can Product Owner dong bo

- Truong bat buoc cua lead form: `fullName`, `phone`, `consent.marketing`.
- Kenh thong bao uu tien khi co lead moi: Slack, Zalo hay email.
- Dinh nghia `qualified lead` de dashboard phan loai sau intake.
- Muc tieu conversion ban dau de quyet dinh event tracking can giu lai.

## No tech debt visible

- Chua co persistence layer; route handlers hien tra `202` de unblock frontend.
- Chua co auth/rate limit cho ingestion endpoint; can them truoc khi public traffic.
- Chua co package lock, can chay install mot lan trong workspace execution de co CI cache on dinh.
