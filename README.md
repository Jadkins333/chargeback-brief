# Chargeback Brief

Chargeback Brief is a lean micro-SaaS MVP for small Shopify merchants dealing with recurring disputes.

## What this MVP does

- Public landing page with pain / solution / pricing / FAQ / CTA
- App page with a dispute intake form
- Local rules-based chargeback brief generation
- Coverage for these dispute types:
  - `product_not_received`
  - `fraudulent`
  - `subscription_canceled`
  - `duplicate_charge`
- Output sections for:
  - merchant summary
  - recommended evidence checklist
  - missing items
  - rebuttal draft
  - timeline
- Demo prefill button for a sample Shopify merchant case
- Placeholder checkout CTA driven by `NEXT_PUBLIC_CHECKOUT_URL`

## What is real vs placeholder

### Real in this MVP
- Landing page and pricing copy
- Intake UX
- Local generation logic in `domain/chargeback.ts`
- Rules engine for dispute-type-specific evidence prompts
- Graceful handling when checkout URL is missing

### Placeholder / not yet implemented
- Real authentication
- Saved dispute history
- PDF export
- Shopify API import
- Payment processing beyond linking out to a configured checkout URL
- Database persistence
- Manual concierge workflow backend

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` if you want the paid CTA enabled:

```bash
NEXT_PUBLIC_CHECKOUT_URL=https://buy.stripe.com/your-link
```

If `NEXT_PUBLIC_CHECKOUT_URL` is not set, the checkout button stays visible but disabled with a clear message.

## Build

```bash
npm run build
npm start
```

## Deploy

### Vercel

1. Push this folder to a Git repo.
2. Import the repo into Vercel.
3. Set `NEXT_PUBLIC_CHECKOUT_URL` in project environment variables if you have a payment link.
4. Deploy.

No deploy success is claimed here. This repo was only built and verified locally.

## Architecture notes

- `app/` — public landing page and app route
- `components/` — UI layer for the intake + brief experience
- `domain/` — dispute model and local rules-based brief generation

## Verification performed

After scaffolding, run:

```bash
npm install
npm run build
```

Record the exact output in your handoff / task report. Do not claim deploy success unless you actually deploy and verify it.
