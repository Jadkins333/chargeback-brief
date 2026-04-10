import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Respond to Product Not Received Chargebacks on Shopify (2026)',
  description:
    'Step-by-step guide to fighting product not received chargebacks. Covers Visa 13.1, Mastercard 4853, evidence requirements, and response templates.',
  openGraph: {
    title: 'Product Not Received Chargeback Response Guide (2026)',
    description:
      'Win product-not-received disputes with the right evidence. Covers Visa 13.1, Mastercard 4853, and step-by-step response workflow.',
    url: 'https://jadkins333.github.io/chargeback-brief/blog/product-not-received-dispute/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Not Received Chargeback Response (2026)',
    description:
      'Fight product-not-received disputes on Shopify with carrier proof, timeline evidence, and structured rebuttals.',
  },
};

const reasonCodes = [
  {
    network: 'Visa',
    code: '13.1',
    name: 'Merchandise / Services Not Received',
    deadline: '30 days from dispute notification',
    notes:
      'The most common product-not-received code. Visa requires compelling evidence that the item was delivered to the cardholder address or the address provided at checkout.',
  },
  {
    network: 'Mastercard',
    code: '4853',
    name: 'Goods or Services Not Provided',
    deadline: '45 days from dispute notification',
    notes:
      'Mastercard gives slightly more time. Requires proof of delivery to the correct address. Signature proof or carrier photo evidence significantly improves win rate.',
  },
  {
    network: 'American Express',
    code: 'C08',
    name: 'Goods / Services Not Received',
    deadline: '20 days from dispute notification',
    notes:
      'Amex has the shortest window. Their process is also more merchant-friendly if you have delivery proof, but you need to respond fast.',
  },
  {
    network: 'Discover',
    code: 'NR',
    name: 'Non-Receipt of Goods or Services',
    deadline: '30 days from dispute notification',
    notes:
      'Similar requirements to Visa. Delivery confirmation with matching address is the key evidence.',
  },
];

const evidenceRanking = [
  {
    evidence: 'Carrier delivery confirmation to correct address',
    strength: 'Critical',
    detail:
      'This is the single most important piece of evidence. The carrier must confirm delivery to the exact address provided at checkout. A tracking number that shows "in transit" is not enough.',
  },
  {
    evidence: 'Signature or photo proof of delivery',
    strength: 'Very Strong',
    detail:
      'If you required a signature and the customer signed, the dispute is essentially won. Photo proof (Amazon-style delivery photos) is nearly as strong.',
  },
  {
    evidence: 'AVS (Address Verification) match',
    strength: 'Strong',
    detail:
      'Proves the billing address on the card matched the address used at checkout. When combined with delivery proof to the same address, this is very compelling.',
  },
  {
    evidence: 'Post-delivery customer interaction',
    strength: 'Strong',
    detail:
      'Did the customer leave a review, use the product (for digital goods), or contact support about the product after delivery? This proves receipt.',
  },
  {
    evidence: 'Customer email correspondence',
    strength: 'Moderate',
    detail:
      'Any emails where the customer discusses the product, asks about usage, or mentions receiving it. Even a complaint about product quality proves they received it.',
  },
  {
    evidence: 'IP geolocation matching delivery address',
    strength: 'Supporting',
    detail:
      'Shows the order was placed from the same geographic area as the delivery address. Not proof of delivery, but supports the narrative.',
  },
  {
    evidence: 'Prior successful deliveries to same address',
    strength: 'Supporting',
    detail:
      'If you have fulfilled other orders to this customer at the same address without issues, that context helps establish a pattern.',
  },
];

const commonMistakes = [
  {
    mistake: 'Relying on tracking number alone',
    reality:
      'A tracking number that shows "shipped" or "in transit" proves nothing. You need carrier confirmation of delivery — the final scan that says "delivered" with the address.',
  },
  {
    mistake: 'Not checking the delivery address match',
    reality:
      'If the package was delivered but to a different address than what the customer provided, you have a problem. Always compare the Shopify order address to the carrier delivery address.',
  },
  {
    mistake: 'Waiting too long to respond',
    reality:
      'Evidence degrades over time. Carrier tracking pages expire. Customer service logs get harder to find. Start gathering evidence within 24 hours of dispute notification.',
  },
  {
    mistake: 'Sending the tracking page screenshot instead of carrier records',
    reality:
      'A screenshot of a tracking page can be faked. Request official delivery records from the carrier. USPS, UPS, and FedEx all provide delivery confirmation documents.',
  },
  {
    mistake: 'Ignoring partial delivery situations',
    reality:
      'If the order had multiple items and only some were delivered, address this directly. A partial delivery requires partial evidence — do not pretend everything was delivered if it was not.',
  },
];

const responseSteps = [
  {
    step: 'Verify the reason code',
    detail:
      'Confirm this is actually a product-not-received dispute (Visa 13.1, Mastercard 4853, Amex C08, or Discover NR). Sometimes what looks like a non-receipt dispute is actually coded as fraud — which requires different evidence.',
  },
  {
    step: 'Pull the delivery confirmation',
    detail:
      'Go to your carrier dashboard and get the delivery confirmation. You need the delivery date, delivery address, and delivery status. If available, get signature proof and GPS coordinates.',
  },
  {
    step: 'Compare addresses',
    detail:
      'Match the Shopify order shipping address to the carrier delivery address. If they match, screenshot both side by side. If they differ, you need to explain why.',
  },
  {
    step: 'Gather supporting evidence',
    detail:
      'Pull AVS match results, customer emails, order confirmation emails (did they open it?), and any post-delivery customer activity. The more touchpoints, the stronger your case.',
  },
  {
    step: 'Write the rebuttal letter',
    detail:
      'One page. Start with order facts, lay out the timeline (ordered → shipped → delivered → disputed), reference each piece of attached evidence, and close with a clear statement that the product was delivered.',
  },
  {
    step: 'Compile and submit',
    detail:
      'Attach all evidence as separate labeled files. Put the rebuttal letter first. Submit through your payment processor (Shopify Payments, Stripe Dashboard, etc.) before the deadline.',
  },
];

export default function ProductNotReceivedPage() {
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
          / <span className="text-slate-200">Product Not Received</span>
        </nav>

        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            How to Respond to Product Not Received Chargebacks on Shopify
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Product not received is the most common chargeback type for physical
            goods. Here is how to fight it with the right evidence and win.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Understanding the reason codes
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Each card network has its own reason code for product-not-received
            disputes. The requirements and deadlines differ, so knowing which
            network you are dealing with is step one.
          </p>
          <div className="mt-8 space-y-4">
            {reasonCodes.map((rc) => (
              <div
                key={rc.code}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sky-400 px-3 py-1 text-xs font-bold text-slate-950">
                    {rc.network}
                  </span>
                  <span className="font-mono text-sm text-slate-300">
                    Code {rc.code}
                  </span>
                  <span className="text-sm text-slate-400">—</span>
                  <span className="font-semibold text-white">{rc.name}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {rc.notes}
                </p>
                <p className="mt-2 text-xs text-amber-200">
                  Response deadline: {rc.deadline}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Evidence that wins these disputes
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Not all evidence carries the same weight. Here is what matters most
            for product-not-received disputes, ranked by impact:
          </p>
          <div className="mt-8 space-y-4">
            {evidenceRanking.map((er) => (
              <div
                key={er.evidence}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span
                  className={`mt-1 inline-flex h-6 shrink-0 items-center rounded-full px-2 text-xs font-bold ${
                    er.strength === 'Critical'
                      ? 'bg-red-400/20 text-red-200'
                      : er.strength === 'Very Strong'
                      ? 'bg-emerald-400/20 text-emerald-200'
                      : er.strength === 'Strong'
                      ? 'bg-sky-400/20 text-sky-200'
                      : er.strength === 'Moderate'
                      ? 'bg-amber-400/20 text-amber-200'
                      : 'bg-slate-400/20 text-slate-300'
                  }`}
                >
                  {er.strength}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{er.evidence}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {er.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Step-by-step response workflow
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            When a product-not-received dispute lands, follow this workflow:
          </p>
          <div className="mt-8 space-y-4">
            {responseSteps.map((rs, i) => (
              <div
                key={rs.step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{rs.step}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {rs.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Mistakes that lose product-not-received disputes
          </h2>
          <div className="mt-8 space-y-4">
            {commonMistakes.map((cm) => (
              <div
                key={cm.mistake}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-semibold text-amber-200">{cm.mistake}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {cm.reality}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Stop rebuilding from scratch
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Generate your product-not-received rebuttal in under 5 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Chargeback Brief builds a structured response with evidence
            checklist, timeline, and rebuttal letter — ready to submit.
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
              href="/chargeback-brief/blog/chargeback-response-template/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Free Chargeback Response Template</p>
              <p className="mt-1 text-sm text-slate-400">Section-by-section template for Shopify merchants.</p>
            </Link>
            <Link
              href="/chargeback-brief/blog/friendly-fraud-shopify/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">Friendly Fraud on Shopify</p>
              <p className="mt-1 text-sm text-slate-400">How to identify it and fight back.</p>
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
