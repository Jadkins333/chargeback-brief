import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Friendly Fraud on Shopify: How to Identify It and Fight Back (2026)',
  description:
    'Learn what friendly fraud is, how to spot it on your Shopify store, and how to build evidence that wins disputes. Free checklist included.',
  openGraph: {
    title: 'Friendly Fraud on Shopify: How to Identify It and Fight Back (2026)',
    description:
      'Up to 80% of chargebacks are friendly fraud. Here is how to identify it and fight back.',
    url: 'https://jadkins333.github.io/chargeback-brief/blog/friendly-fraud-shopify/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friendly Fraud on Shopify (2026)',
    description:
      'Up to 80% of chargebacks are friendly fraud. Here is how Shopify merchants fight back.',
  },
};

const redFlags = [
  {
    flag: 'Repeat disputers',
    detail:
      'Same customer email or card has filed disputes before. Shopify does not surface this well — you need to track it yourself.',
  },
  {
    flag: 'High-value first orders',
    detail:
      'Brand-new customer placing a $300+ order with express shipping. Not always fraud, but worth flagging.',
  },
  {
    flag: 'Shipping ≠ billing address',
    detail:
      'The item ships somewhere different from the cardholder address. Common for gifts, but also common for fraud.',
  },
  {
    flag: 'Multiple failed payment attempts',
    detail:
      'Customer tried several cards before one went through. Legitimate buyers usually have one working card.',
  },
  {
    flag: 'Dispute filed after delivery confirmation',
    detail:
      'Tracking shows delivered, customer claims otherwise. This is the classic friendly fraud pattern.',
  },
  {
    flag: 'No contact before dispute',
    detail:
      'Customer went straight to their bank without ever emailing you. Legitimate complaints usually start with the merchant.',
  },
];

const evidenceTypes = [
  {
    name: 'AVS + CVV match',
    why: 'Proves the person had the physical card or at minimum the correct billing details. Banks weigh this heavily.',
  },
  {
    name: '3D Secure authentication',
    why: 'If the customer passed 3DS (Verified by Visa, Mastercard SecureCode), liability shifts to the issuer. This is your strongest defense.',
  },
  {
    name: 'IP geolocation',
    why: 'Shows the order was placed from the same city/region as the billing address. Undermines the "I did not make this purchase" claim.',
  },
  {
    name: 'Delivery confirmation + signature',
    why: 'Carrier-verified delivery to the correct address. Even better with a signature or photo.',
  },
  {
    name: 'Prior purchase history',
    why: 'If the same email/card/address has successful orders with no disputes, it weakens the fraud claim.',
  },
  {
    name: 'Customer engagement logs',
    why: 'Did the customer leave a review, use a discount code, contact support about sizing? All proof they knew about the purchase.',
  },
  {
    name: 'Login and session data',
    why: 'Account login from the same IP/device after purchase. Shows continued engagement with their account.',
  },
];

const preventionStrategies = [
  {
    strategy: 'Use clear billing descriptors',
    detail:
      'If your Stripe descriptor says "STRIPE* JDKNS333" instead of your store name, customers will not recognize the charge. Update your Stripe statement descriptor to match your store name.',
  },
  {
    strategy: 'Enable 3D Secure',
    detail:
      'Turn on 3DS for all transactions, or at minimum for international orders and first-time buyers. The liability shift alone makes it worth the slight friction.',
  },
  {
    strategy: 'Send pre-charge confirmation emails',
    detail:
      'For subscriptions, send a "your card will be charged in 3 days" reminder. For one-time purchases, send immediate order confirmation with the exact charge amount.',
  },
  {
    strategy: 'Require signature on high-value orders',
    detail:
      'Set a threshold ($100-150+) where you require signature confirmation on delivery. The $2-5 cost is nothing compared to a chargeback.',
  },
  {
    strategy: 'Make returns easier than disputes',
    detail:
      'If your return process is painful, customers will skip it and go to their bank instead. A generous return policy is cheaper than chargebacks.',
  },
  {
    strategy: 'Track and flag repeat offenders',
    detail:
      'Build a simple spreadsheet of disputed orders. If you see the same email, address, or card number twice — block future orders from that customer.',
  },
];

export default function FriendlyFraudPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-8 text-slate-50 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/chargeback-brief/" className="hover:text-white">
            Chargeback Brief
          </Link>{' '}
          /{' '}
          <Link href="/chargeback-brief/guide/" className="hover:text-white">
            Guide
          </Link>{' '}
          / <span className="text-slate-200">Friendly Fraud</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Friendly Fraud on Shopify: How to Identify It and Fight Back
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Up to 80% of all chargebacks are friendly fraud — legitimate
            purchases disputed by the actual buyer. Here is how to spot it,
            document it, and win the dispute.
          </p>
        </header>

        {/* What is friendly fraud */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            What is friendly fraud?
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Friendly fraud happens when a customer makes a legitimate purchase
            with their own card, receives the product, and then files a
            chargeback claiming they never authorized the transaction or never
            received the item.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            It is not always malicious. Sometimes a family member used the card
            without the cardholder knowing. Sometimes the customer forgot about
            the purchase and did not recognize the charge on their statement.
            Sometimes they just found disputing easier than returning.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            But the result is the same: you lose the product, the revenue, pay a
            chargeback fee ($15-25), and take a hit on your dispute ratio. At
            scale, friendly fraud can threaten your payment processing entirely.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { stat: '60-80%', label: 'Of all chargebacks are classified as friendly fraud' },
              { stat: '$117B', label: 'Estimated global cost of friendly fraud by 2023 (Juniper Research)' },
              { stat: '40%', label: 'Of consumers who file one chargeback will file another within 90 days' },
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

        {/* Red flags */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Red flags: how to spot friendly fraud early
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            You cannot prevent every dispute, but you can flag high-risk orders
            before they ship. Watch for these patterns:
          </p>
          <div className="mt-8 space-y-4">
            {redFlags.map((rf) => (
              <div
                key={rf.flag}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="font-semibold text-white">{rf.flag}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-300">
                  {rf.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Building your evidence package
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            When a friendly fraud dispute lands, your goal is to prove the
            cardholder authorized the purchase and received the product. Here is
            the evidence that actually moves the needle:
          </p>
          <div className="mt-8 space-y-4">
            {evidenceTypes.map((ev) => (
              <div
                key={ev.name}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h3 className="font-semibold text-white">{ev.name}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {ev.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Prevention: stop friendly fraud before it happens
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Fighting disputes is necessary, but preventing them is cheaper.
            These six strategies reduce your exposure:
          </p>
          <div className="mt-8 space-y-4">
            {preventionStrategies.map((ps, i) => (
              <div
                key={ps.strategy}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{ps.strategy}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {ps.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Fight friendly fraud faster
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Generate a structured rebuttal brief in under 5 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Paste your dispute details, pick your evidence, and get a
            copy-ready rebuttal. No AI costs, no bloated platform — just a
            faster evidence packet.
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

        {/* Related */}
        <section className="mt-16">
          <h3 className="text-lg font-semibold text-white">Related reading</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/chargeback-brief/blog/chargeback-win-rate/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-sky-300">Blog</p>
              <p className="mt-2 font-semibold text-white">How to Improve Your Chargeback Win Rate</p>
              <p className="mt-1 text-sm text-slate-400">Data-driven tips for Shopify merchants.</p>
            </Link>
            <Link
              href="/chargeback-brief/guide/"
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-wider text-emerald-300">Free resource</p>
              <p className="mt-2 font-semibold text-white">Complete Chargeback Response Guide</p>
              <p className="mt-1 text-sm text-slate-400">Evidence checklists for every dispute type.</p>
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
