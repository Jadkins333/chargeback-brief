import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chargeback Evidence Checklist: What You Need for Card-Not-Present Fraud Disputes (2026)',
  description:
    'Complete evidence checklist for fighting CNP fraud chargebacks. Organized by evidence type with priority rankings for Shopify merchants.',
  openGraph: {
    title: 'Chargeback Evidence Checklist for Fraud Disputes (2026)',
    description:
      'What evidence you need, what you can skip, and what wins fraud disputes. For Shopify and ecommerce merchants.',
    url: 'https://jadkins333.github.io/chargeback-brief/blog/evidence-checklist-fraud/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chargeback Evidence Checklist (2026)',
    description:
      'Complete evidence checklist for card-not-present fraud disputes. Priority ranked for Shopify merchants.',
  },
};

const transactionEvidence = [
  {
    item: 'AVS (Address Verification System) result',
    priority: 'Critical',
    detail:
      'Full AVS match (street + zip) is the strongest single signal that the cardholder made the purchase. Partial matches (zip only) are still useful. No match or not checked is a red flag in your response.',
    where: 'Stripe Dashboard → Payment → Card details, or Shopify admin → Order → Timeline',
  },
  {
    item: 'CVV/CVC match result',
    priority: 'Critical',
    detail:
      'A CVV match proves the person had the physical card (or the full card number from the back). This is the baseline evidence every fraud response needs.',
    where: 'Same as AVS — your payment processor records it at authorization time.',
  },
  {
    item: '3D Secure / SCA authentication',
    priority: 'Critical',
    detail:
      'If the customer passed 3D Secure (Verified by Visa, Mastercard Identity Check), the liability for fraud shifts to the card issuer. This is the strongest possible defense. If you have 3DS, you should win automatically.',
    where: 'Stripe Dashboard → Payment → 3D Secure status. Shopify Payments shows this in the order timeline.',
  },
  {
    item: 'Transaction authorization code',
    priority: 'Standard',
    detail:
      'The six-digit auth code from the issuing bank. Proves the bank approved the transaction at the time. Not decisive alone, but required for a complete response.',
    where: 'Payment processor dashboard. Stripe shows this in payment details.',
  },
  {
    item: 'IP address and geolocation',
    priority: 'Strong',
    detail:
      'The IP address where the order was placed, resolved to a city/region. If the IP matches the billing address location, it strongly suggests the cardholder made the purchase.',
    where: 'Shopify admin → Order → Additional details (IP address). Use a geolocation service to resolve it.',
  },
];

const shippingEvidence = [
  {
    item: 'Carrier delivery confirmation',
    priority: 'Critical',
    detail:
      'Official carrier record showing the package was delivered to the address provided at checkout. Must include delivery date and delivery address. A tracking number that shows "in transit" is not delivery proof.',
    where: 'USPS Tracking, UPS, FedEx, DHL dashboard. Request official delivery records, not just the public tracking page.',
  },
  {
    item: 'Signature confirmation',
    priority: 'Very Strong',
    detail:
      'Recipient signature at delivery. For orders over $100-150, this should be standard. A signed delivery essentially closes the product-not-received argument.',
    where: 'Carrier dashboard. UPS and FedEx provide signature images. USPS provides signature confirmation records.',
  },
  {
    item: 'Delivery photo proof',
    priority: 'Strong',
    detail:
      'Carrier photo showing the package at the delivery address. Amazon has normalized this. If your carrier provides it, include it.',
    where: 'Carrier app or dashboard if the service was selected.',
  },
  {
    item: 'Shipping address match to billing address',
    priority: 'Strong',
    detail:
      'If the shipping address matches the billing address on the card, it undermines the fraud claim. The cardholder is disputing a delivery to their own address.',
    where: 'Compare Shopify order details (shipping vs billing address).',
  },
];

const customerEvidence = [
  {
    item: 'Customer email correspondence',
    priority: 'Strong',
    detail:
      'Any email where the customer discusses the order, product, or delivery. Even a complaint about product quality proves they received it and made the purchase.',
    where: 'Your email/helpdesk system. Export as PDF with full headers showing email addresses and timestamps.',
  },
  {
    item: 'Account login history',
    priority: 'Strong',
    detail:
      'If the customer logged into their account on your store after the purchase — especially from the same IP — it proves continued engagement.',
    where: 'Shopify customer timeline, or your auth/session logs if you track them.',
  },
  {
    item: 'Product review or rating',
    priority: 'Very Strong',
    detail:
      'If the customer left a product review, they cannot credibly claim they did not make the purchase or did not receive it. Screenshot the review with their name and date.',
    where: 'Your review platform (Judge.me, Loox, Shopify Reviews, etc.).',
  },
  {
    item: 'Prior order history',
    priority: 'Moderate',
    detail:
      'Previous successful orders from the same email, card, or address with no disputes. Establishes a pattern of legitimate purchasing.',
    where: 'Shopify admin → Customer profile → Order history.',
  },
  {
    item: 'Discount code or referral usage',
    priority: 'Supporting',
    detail:
      'If the customer used a discount code from an email campaign or a referral link, it shows they intentionally engaged with your marketing and store.',
    where: 'Shopify order details → Discount code applied.',
  },
];

const policyEvidence = [
  {
    item: 'Refund and return policy',
    priority: 'Standard',
    detail:
      'A screenshot of your refund policy as it appeared at checkout. Proves the customer had the option to return instead of dispute. Banks consider this relevant.',
    where: 'Screenshot your checkout page or policy page. Use the Wayback Machine if you changed it recently.',
  },
  {
    item: 'Terms of service acceptance',
    priority: 'Standard',
    detail:
      'Proof the customer accepted your terms at checkout (checkbox, click-wrap, etc.). Important for subscription disputes.',
    where: 'Shopify checkout configuration. Screenshot the checkbox or acceptance flow.',
  },
  {
    item: 'Cancellation policy (subscriptions)',
    priority: 'Critical for subscriptions',
    detail:
      'For subscription disputes, showing that the customer had an easy way to cancel — and did not use it — is essential evidence.',
    where: 'Screenshot your cancellation flow. Include any cancellation confirmation emails you send.',
  },
];

type EvidenceItem = {
  item: string;
  priority: string;
  detail: string;
  where: string;
};

function EvidenceSection({ title, items }: { title: string; items: EvidenceItem[] }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-8 space-y-4">
        {items.map((ev) => (
          <div
            key={ev.item}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  ev.priority === 'Critical' || ev.priority === 'Critical for subscriptions'
                    ? 'bg-red-400/20 text-red-200'
                    : ev.priority === 'Very Strong'
                    ? 'bg-emerald-400/20 text-emerald-200'
                    : ev.priority === 'Strong'
                    ? 'bg-sky-400/20 text-sky-200'
                    : ev.priority === 'Moderate'
                    ? 'bg-amber-400/20 text-amber-200'
                    : 'bg-slate-400/20 text-slate-300'
                }`}
              >
                {ev.priority}
              </span>
              <h3 className="font-semibold text-white">{ev.item}</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{ev.detail}</p>
            <p className="mt-2 text-xs text-slate-400">
              <span className="font-medium text-slate-300">Where to find it:</span>{' '}
              {ev.where}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EvidenceChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-8 text-slate-50 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/chargeback-brief/" className="hover:text-white">
            Chargeback Brief
          </Link>{' '}
          /{' '}
          <Link href="/chargeback-brief/guide/" className="hover:text-white">
            Guide
          </Link>{' '}
          / <span className="text-slate-200">Evidence Checklist</span>
        </nav>

        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Chargeback Evidence Checklist for Card-Not-Present Fraud Disputes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every piece of evidence you might need for a fraud chargeback —
            organized by category, ranked by impact, with exact instructions on
            where to find it.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            How to use this checklist
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Not every dispute needs every item on this list. But knowing what
            exists — and what you are missing — is the difference between a
            winning response and a losing one.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            Start with the Critical items. If you have those, you are in a
            strong position. Then layer in Strong and Supporting evidence to
            build an airtight case. Items marked Standard should be included
            for completeness but rarely decide the outcome alone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: 'Critical', color: 'bg-red-400/20 text-red-200' },
              { label: 'Very Strong', color: 'bg-emerald-400/20 text-emerald-200' },
              { label: 'Strong', color: 'bg-sky-400/20 text-sky-200' },
              { label: 'Moderate', color: 'bg-amber-400/20 text-amber-200' },
              { label: 'Standard / Supporting', color: 'bg-slate-400/20 text-slate-300' },
            ].map((badge) => (
              <span
                key={badge.label}
                className={`rounded-full px-3 py-1 text-xs font-bold ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </section>

        <EvidenceSection title="Transaction and payment data" items={transactionEvidence} />
        <EvidenceSection title="Shipping and delivery proof" items={shippingEvidence} />
        <EvidenceSection title="Customer behavior and communication" items={customerEvidence} />
        <EvidenceSection title="Policy and terms documentation" items={policyEvidence} />

        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Automate the checklist
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Chargeback Brief builds your evidence package automatically
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Mark what evidence you have, and the tool identifies what is missing
            and generates a structured rebuttal with everything referenced.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/chargeback-brief/app/"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Open the brief builder — free
            </Link>
            <Link
              href="/chargeback-brief/guide/"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            >
              Read the full guide
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-lg font-semibold text-white">Related reading</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/chargeback-brief/blog/product-not-received-dispute/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Product Not Received Disputes</p>
              <p className="mt-1 text-sm text-slate-400">Step-by-step response guide for Shopify.</p>
            </Link>
            <Link
              href="/chargeback-brief/blog/chargeback-response-template/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Free Chargeback Response Template</p>
              <p className="mt-1 text-sm text-slate-400">Section-by-section template for every dispute.</p>
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Chargeback Brief. All rights reserved.</p>
          <Link
            href="/chargeback-brief/"
            className="mt-2 inline-block transition hover:text-white"
          >
            ← Back to home
          </Link>
        </footer>
      </div>
    </main>
  );
}
