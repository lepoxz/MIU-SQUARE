# Lead Ingestion Contract

## Endpoint

- `POST /api/leads`
- Content-Type: `application/json`

## Request Body

```json
{
  "fullName": "Nguyen Van A",
  "phone": "0901234567",
  "email": "lead@example.com",
  "notes": "Can demo dashboard lead trong tuan nay",
  "source": "landing_page",
  "campaign": {
    "campaignId": "fb-campaign-01",
    "adsetId": "fb-adset-03",
    "adId": "fb-ad-07",
    "creativeName": "hero-video-v1"
  },
  "consent": {
    "marketing": true,
    "timestamp": "2026-03-25T10:00:00.000Z"
  },
  "metadata": {
    "utm_campaign": "launch_q2",
    "landing_variant": "concierge"
  }
}
```

## Response

```json
{
  "leadId": "lead_123",
  "status": "queued",
  "receivedAt": "2026-03-25T10:00:01.000Z",
  "traceId": "lead_123"
}
```

## Operational Notes

- `source` giup tach lead tu landing page, Facebook Lead Ads va import tay.
- `traceId` duoc dung xuyen suot tu app -> workflow -> dashboard de audit.
- Workflow layer se nhan payload da validate va enrich them voi SLA status.
