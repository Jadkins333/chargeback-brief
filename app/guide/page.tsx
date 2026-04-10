import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Complete Shopify Chargeback Response Guide (2026)',
  description:
    'Free step-by-step guide to fighting Shopify chargebacks. Evidence checklists, rebuttal templates, and response workflows for every dispute type.',
  openGraph: {
    title: 'The Complete Shopify Chargeback Response Guide (2026)',
    description:
      'Free evidence checklists and rebuttal templates for Shopify merchants fighting chargebacks.',
    url: 'https://jadkins333.github.io/chargeback-brief/guide/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Chargeback Response Guide (2026)',
    description:
      'Evidence checklists and rebuttal templates for every dispute type.',
  },
};

const disputeTypes = [
  {
    code: '13.1 / 10.4',
    name: 'Product Not Received',
    network: 'Visa / Mastercard',
    description:
      'Customer claims they never got the item. The most common dispute for physical goods.',
    evidence: [
      'Carrier tracking showing delivered status with date',
      'Delivery confirmation with signature if available',
      'Screenshot of tracking page showing delivered to correct address',
      'Proof the shipping address matches the billing address',
      'Any delivery photo from carrier (Amazon-style proof)',
      'Communication with customer acknowledging shipment',
    ],
    mistakes: [
      'Using economy shipping with no tracking on orders over $50',
      'Not requiring signature confirmation on high-value orders',
      'Waiting too long to ship after order placement',
    ],
  },
  {
    code: '10.4 / 4837',
    name: 'Fraudulent Transaction',
    network: 'Visa / Mastercard',
    description:
      'Cardholder says they did not authorize the purchase. Often friendly fraud — they bought it and forgot, or a family member used their card.',
    evidence: [
      'AVS (Address Verification) match result',
      'CVV match confirmation',
      '3D Secure authentication proof if enabled',
      'IP address and device fingerprint matching customer location',
      'Previous successful orders from same card/email/address',
      'Customer service logs showing the buyer engaged with the product',
      'Login/account activity from same IP after purchase',
    ],
    mistakes: [
      'Not enabling 3D Secure for international orders',
      'Ignoring AVS mismatches on first-time buyers',
      'Not keeping server logs that tie IP to transaction',
    ],
  },
  {
    code: '13.7 / 4841',
    name: 'Subscription Canceled',
    network: 'Visa / Mastercard',
    description:
      'Customer says they canceled a recurring charge but were still billed.',
    evidence: [
      'Copy of terms of service / subscription agreement shown at checkout',
      'Record of when customer subscribed with timestamp',
      'Cancellation policy as displayed during signup',
      'Proof no cancellation request was received before charge date',
      'Email confirmations sent at signup and each renewal',
      'Screenshots of the cancellation flow available to customer',
    ],
    mistakes: [
      'Burying the cancel button behind support tickets',
      'Not sending renewal reminder emails before charging',
      'No clear cancellation confirmation email',
    ],
  },
  {
    code: '12.6.2 / 4834',
    name: 'Duplicate Processing',
    network: 'Visa / Mastercard',
    description:
      'Customer says they were charged twice for the same transaction.',
    evidence: [
      'Transaction IDs showing each charge is for a distinct order',
      'Separate order confirmations with different order numbers',
      'Itemized receipts showing different products or quantities',
      'Proof that separate shipments were made',
      'Refund receipt if one charge was already refunded',
    ],
    mistakes: [
      'Retry logic that double-charges on payment gateway timeout',
      'Not showing clear order IDs on customer receipts',
      'Delayed refund processing making it look like two live charges',
    ],
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-8 text-slate-50 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/chargeback-brief/" className="hover:text-white">
            Chargeback Brief
          </Link>{' '}
          / <span className="text-slate-200">Guide</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Free resource
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            The Complete Shopify Chargeback Response Guide (2026)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Everything you need to fight chargebacks and win. Evidence
            checklists, rebuttal workflows, and the mistakes that sink most
            responses — organized by dispute type.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/chargeback-brief/app/"
              className="rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
            >
              Try the free brief builder
            </Link>
            <a
              href="#checklists"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Jump to checklists
            </a>
          </div>
        </header>

        {/* The Cost */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            What chargebacks actually cost you
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                stat: '$15–25',
                label: 'Per dispute in processor fees alone',
              },
              {
                stat: '2–3x',
                label: 'Total cost including lost product + shipping',
              },
              {
                stat: '1%',
                label:
                  'Chargeback rate threshold before your processor flags you',
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-3xl font-semibold text-white">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-300 leading-7">
            A $50 order that gets charged back doesn&apos;t cost you $50. It costs
            the product, the shipping, the chargeback fee, staff time assembling
            evidence, and the hit to your dispute ratio. For a store doing 500
            orders/month, even a 1% dispute rate means 5 chargebacks — and
            $500+ in total losses before you count the time.
          </p>
        </section>

        {/* Step by step */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            The chargeback response workflow
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            When a dispute hits, you typically have 7–21 days to respond
            depending on the card network. Here&apos;s the process:
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: 1,
                title: 'Identify the reason code',
                detail:
                  'Check your Shopify Payments dashboard or processor notification. The reason code tells you exactly what evidence the bank wants.',
              },
              {
                step: 2,
                title: 'Gather your evidence',
                detail:
                  'Pull tracking info, order details, customer communications, and policy screenshots. The checklists below tell you what to collect for each type.',
              },
              {
                step: 3,
                title: 'Write the rebuttal letter',
                detail:
                  'A clear, factual narrative that walks the reviewer through your evidence. No emotion, no accusations — just the timeline and proof.',
              },
              {
                step: 4,
                title: 'Compile and submit',
                detail:
                  'Bundle everything into a single PDF or submit through your processor portal. Label each piece of evidence clearly.',
              },
              {
                step: 5,
                title: 'Track the outcome',
                detail:
                  'Most decisions come back in 60–75 days. Log wins and losses to spot patterns and tighten your process.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence checklists */}
        <section id="checklists" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-semibold text-white">
            Evidence checklists by dispute type
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Each dispute type requires different evidence. Use these checklists
            to make sure you&apos;re not leaving money on the table.
          </p>
          <div className="mt-8 space-y-8">
            {disputeTypes.map((dt) => (
              <article
                key={dt.code}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                    {dt.network}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    Code {dt.code}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {dt.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {dt.description}
                </p>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                    Evidence to collect
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {dt.evidence.map((e) => (
                      <li key={e} className="flex gap-3 text-sm text-slate-200">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-red-300">
                    Common mistakes
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {dt.mistakes.map((m) => (
                      <li key={m} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/70" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Stop building briefs from scratch
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Generate a structured rebuttal brief in under 5 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Paste your dispute details, get an evidence checklist and
            copy-ready rebuttal draft. No AI API costs, no bloated platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/chargeback-brief/app/"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Open the brief builder — free
            </Link>
            <Link
              href="/chargeback-brief/#pricing"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            >
              See paid plans
            </Link>
          </div>
        </section>

        {/* Related reading */}
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Related reading</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Keep learning about chargeback defense
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/chargeback-brief/blog/friendly-fraud-shopify/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
                Blog
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Friendly Fraud on Shopify: What It Really Costs and How to Fight Back
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Learn why friendly fraud is the fastest-growing chargeback category and what Shopify merchants can do about it.
              </p>
            </Link>
            <Link
              href="/chargeback-brief/blog/chargeback-win-rate/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
                Blog
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                How to Improve Your Chargeback Win Rate: Evidence That Actually Works
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The difference between a 20% and 60% win rate comes down to evidence quality. Here's what to fix.
              </p>
            </Link>
          </div>
        </section>

        {/* Footer */}
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
