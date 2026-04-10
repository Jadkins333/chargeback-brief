import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Chargeback Response Template for Shopify Merchants (2026)',
  description:
    'Download a free chargeback response template built for Shopify. Covers merchant info, order timeline, evidence checklist, and rebuttal letter.',
  openGraph: {
    title: 'Free Chargeback Response Template for Shopify (2026)',
    description:
      'A structured chargeback response template with evidence checklist and rebuttal letter. Built for Shopify merchants.',
    url: 'https://jadkins333.github.io/chargeback-brief/blog/chargeback-response-template/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Chargeback Response Template (2026)',
    description:
      'Structured chargeback response template for Shopify merchants. Evidence checklist + rebuttal letter included.',
  },
};

const templateSections = [
  {
    section: 'Merchant identification',
    fields: [
      'Legal business name',
      'DBA (doing business as) name',
      'Merchant ID / MID',
      'Store URL',
      'Statement descriptor (exactly as it appears on the customer statement)',
      'Contact email and phone',
    ],
    why: 'The acquirer needs to match your response to the right account. If your statement descriptor does not match your store name, call that out explicitly — it is the number one reason customers claim they do not recognize a charge.',
  },
  {
    section: 'Dispute details',
    fields: [
      'Dispute case number / ARN',
      'Card network (Visa, Mastercard, Amex, Discover)',
      'Reason code and description',
      'Dispute amount',
      'Dispute filing date',
      'Response deadline',
    ],
    why: 'Every card network uses different reason codes and timelines. Visa 13.1 (product not received) has different evidence requirements than Mastercard 4853 (goods or services not provided). Getting the reason code right determines your entire evidence strategy.',
  },
  {
    section: 'Order details',
    fields: [
      'Order ID / number',
      'Order date and time (with timezone)',
      'Order total and currency',
      'Product names and quantities',
      'Shipping method selected',
      'Discount codes applied',
      'IP address at time of purchase',
    ],
    why: 'This establishes the baseline facts. The timestamp, IP, and order details create a paper trail that ties the purchase to a specific person and moment.',
  },
  {
    section: 'Customer information',
    fields: [
      'Cardholder name (as on the card)',
      'Customer name (if different from cardholder)',
      'Email address',
      'Billing address',
      'Shipping address',
      'Phone number (if collected)',
      'Account creation date (if applicable)',
    ],
    why: 'Matching the cardholder to the shipping recipient is critical for fraud disputes. If billing and shipping match, that is strong evidence. If they do not match, you need to explain why (gift orders, corporate purchasing, etc.).',
  },
  {
    section: 'Fulfillment and delivery',
    fields: [
      'Fulfillment date',
      'Carrier name',
      'Tracking number',
      'Delivery confirmation date',
      'Signature (if collected)',
      'Delivery address confirmed by carrier',
      'Photo proof of delivery (if available)',
    ],
    why: 'For product-not-received disputes, delivery proof is the single most important evidence. A tracking number alone is not enough — you need carrier confirmation that the package was delivered to the correct address.',
  },
  {
    section: 'Evidence checklist',
    fields: [
      'AVS (Address Verification System) match result',
      'CVV match result',
      '3D Secure authentication result',
      'Customer email correspondence',
      'Refund or return policy (as shown at checkout)',
      'Terms of service acceptance screenshot',
      'Prior successful orders from same customer',
      'Device fingerprint or session data',
      'Product usage logs (for digital goods)',
    ],
    why: 'Not every dispute needs every piece of evidence. But documenting what you have and what you are missing is the difference between a scattered response and a winning one. Banks process thousands of disputes — make yours easy to rule in your favor.',
  },
  {
    section: 'Rebuttal letter',
    fields: [
      'One-paragraph merchant summary',
      'Timeline of events (order → fulfillment → delivery → dispute)',
      'Specific rebuttal to the reason code claim',
      'Reference to attached evidence',
      'Closing statement',
    ],
    why: 'The rebuttal letter is what the bank analyst actually reads. Keep it factual, chronological, and under one page. Do not be emotional or accusatory. Just lay out the facts and reference the evidence.',
  },
];

const mistakes = [
  {
    mistake: 'Submitting evidence without a cover letter',
    fix: 'Always include a one-page rebuttal that summarizes the case. Raw evidence without context gets skimmed and dismissed.',
  },
  {
    mistake: 'Missing the response deadline',
    fix: 'Most networks give 7-30 days. Set a calendar reminder for 3 days before the deadline. Late responses are automatically lost.',
  },
  {
    mistake: 'Sending irrelevant evidence',
    fix: 'If the dispute is about product quality, shipping proof does not help. Match your evidence to the specific reason code.',
  },
  {
    mistake: 'Screenshots without timestamps',
    fix: 'Bank analysts need to see when things happened. Every screenshot should show a date. Use browser dev tools to capture full-page screenshots with URL bars visible.',
  },
  {
    mistake: 'Ignoring the statement descriptor issue',
    fix: 'If the customer says they do not recognize the charge, your first job is to show that your descriptor matches your store. Include a screenshot of your Stripe/processor descriptor settings.',
  },
  {
    mistake: 'Not including your refund policy',
    fix: 'Attach a screenshot of your refund policy as it appeared at checkout. If the customer had a chance to return the item and chose to dispute instead, that is relevant.',
  },
];

export default function ChargebackResponseTemplatePage() {
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
          / <span className="text-slate-200">Response Template</span>
        </nav>

        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Free Chargeback Response Template for Shopify Merchants
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A section-by-section template for building a complete chargeback
            response. Fill it out once, reuse it for every dispute.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Why you need a template
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Most merchants lose chargebacks not because they lack evidence, but
            because their response is disorganized. Bank analysts review hundreds
            of disputes per day. If your evidence is scattered, missing context,
            or hard to follow — you lose by default.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            A structured template solves this. It ensures you never miss a
            critical field, your timeline is clear, and your evidence is
            referenced properly. Merchants who use structured responses win
            60-70% of disputes versus the 20-30% industry average.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { stat: '20-30%', label: 'Average chargeback win rate without structure' },
              { stat: '60-70%', label: 'Win rate with organized evidence and rebuttal' },
              { stat: '5 min', label: 'Time to fill this template with Chargeback Brief' },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-3xl font-semibold text-white">{item.stat}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            The template: section by section
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Below is every section your chargeback response needs. For each
            section, we list what to include and why it matters.
          </p>
          <div className="mt-8 space-y-6">
            {templateSections.map((ts, i) => (
              <div
                key={ts.section}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {ts.section}
                    </h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {ts.fields.map((field) => (
                        <div
                          key={field}
                          className="flex items-center gap-2 rounded-xl border border-white/8 bg-slate-900/60 px-3 py-2 text-sm text-slate-200"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          {field}
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {ts.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Common mistakes that lose disputes
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Even with the right evidence, these mistakes will tank your win
            rate:
          </p>
          <div className="mt-8 space-y-4">
            {mistakes.map((m) => (
              <div
                key={m.mistake}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-semibold text-amber-200">{m.mistake}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {m.fix}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Skip the blank page
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Fill out this template automatically with Chargeback Brief
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Paste your dispute details, check your evidence, and get a
            structured rebuttal brief you can submit directly.
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
              href="/chargeback-brief/blog/friendly-fraud-shopify/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Friendly Fraud on Shopify</p>
              <p className="mt-1 text-sm text-slate-400">How to identify it and fight back.</p>
            </Link>
            <Link
              href="/chargeback-brief/blog/chargeback-win-rate/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Improve Your Chargeback Win Rate</p>
              <p className="mt-1 text-sm text-slate-400">Data-driven tips for Shopify merchants.</p>
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
