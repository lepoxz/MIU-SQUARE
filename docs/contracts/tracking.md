# Tracking Contract

## Endpoint

- `POST /api/tracking`
- Content-Type: `application/json`

## Supported Events

- `page_view`
- `cta_clicked`
- `lead_form_viewed`
- `lead_form_submitted`
- `lead_form_failed`

## Event Shape

```json
{
  "event": "lead_form_submitted",
  "occurredAt": "2026-03-25T10:03:00.000Z",
  "page": "/",
  "anonymousId": "anon_123",
  "sessionId": "session_456",
  "campaign": {
    "source": "facebook",
    "medium": "paid_social",
    "campaign": "launch_q2",
    "content": "hero-video-v1"
  },
  "properties": {
    "form_id": "hero-lead-form",
    "submission_status": "queued"
  }
}
```

## Why It Exists

- Dong bo naming event giua frontend, analytics va workflow.
- Cho phep Product Owner doc funnel co ban truoc khi co stack analytics day du.
