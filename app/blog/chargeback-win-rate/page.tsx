import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Improve Your Chargeback Win Rate: A Data-Driven Approach for Shopify Merchants',
  description:
    'Industry average chargeback win rates are 20-30%. With structured evidence and proper formatting, merchants hit 60-70%. Here is how.',
  openGraph: {
    title: 'How to Improve Your Chargeback Win Rate (2026)',
    description:
      'Go from 20% to 60%+ chargeback win rate with structured responses. A guide for Shopify merchants.',
    url: 'https://jadkins333.github.io/chargeback-brief/blog/chargeback-win-rate/',
    siteName: 'Chargeback Brief',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Improve Your Chargeback Win Rate (2026)',
    description:
      'From 20% to 60%+. Five factors that determine whether you win or lose disputes.',
  },
};

const winFactors = [
  {
    factor: 'Response time',
    weight: 'Critical',
    detail:
      'You typically have 7-21 days to respond depending on the card network. But response quality degrades after day 3. The evidence is freshest right after the dispute lands — tracking pages are still live, customer service logs are easy to find, and nothing has been archived yet.',
    tip: 'Set a policy: start gathering evidence within 24 hours of dispute notification. Treat day 1-3 as your active window.',
  },
  {
    factor: 'Evidence completeness',
    weight: 'Critical',
    detail:
      'Banks review disputes by checking whether the merchant addressed every element the reason code requires. Missing one piece — say, no AVS match for a fraud dispute — can sink an otherwise strong case. The reason code is your rubric.',
    tip: 'Use an evidence checklist specific to each reason code. Do not wing it. Our guide page has checklists for the four most common types.',
  },
  {
    factor: 'Narrative clarity',
    weight: 'High',
    detail:
      'The bank reviewer reading your response is processing dozens of disputes a day. A wall of text with no structure loses them. A clear timeline with labeled evidence sections gets read properly.',
    tip: 'Structure your rebuttal as: (1) transaction summary, (2) what the customer is claiming, (3) why that claim is incorrect, with evidence for each point labeled clearly.',
  },
  {
    factor: 'Correct reason code handling',
    weight: 'High',
    detail:
      'A "product not received" dispute requires completely different evidence than a "fraudulent transaction" dispute. Merchants who send the same generic rebuttal for every dispute type lose cases they should win.',
    tip: 'Read the reason code before doing anything else. Visa 13.1, Mastercard 4834, Amex C32 — each has specific evidence requirements published by the networks.',
  },
  {
    factor: 'Formatting and presentation',
    weight: 'Medium',
    detail:
      'This sounds cosmetic, but it matters. A single merged PDF with clear section headers, labeled screenshots, and a professional rebuttal letter signals competence. A pile of unorganized attachments signals "this merchant does not take this seriously."',
    tip: 'Compile everything into a single PDF. Lead with the rebuttal letter, follow with evidence organized by type. Label every screenshot.',
  },
];

const trackingMetrics = [
  {
    metric: 'Win rate by reason code',
    why: 'If you win 70% of "product not received" disputes but only 15% of "fraudulent transaction" disputes, that tells you exactly where to focus. Maybe your fraud evidence is weak, or you are not enabling 3DS.',
  },
  {
    metric: 'Average response time',
    why: 'Are you responding in 2 days or 12? Track the gap between dispute notification and response submission. Faster is almost always better.',
  },
  {
    metric: 'Dispute rate over time',
    why: 'Your raw dispute rate (disputes / transactions) is what processors watch. If it is climbing, you have a prevention problem, not just a response problem.',
  },
  {
    metric: 'Revenue recovered',
    why: 'Track the dollar value of won disputes. This is the number that justifies spending time on chargeback responses — and the number that makes the business case for better tooling.',
  },
  {
    metric: 'Repeat offenders',
    why: 'What percentage of disputes come from repeat customers? If the same emails or addresses keep appearing, you have a targeting problem that evidence quality alone will not fix.',
  },
];

export default function WinRatePage() {
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
          / <span className="text-slate-200">Win Rate</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            How to Improve Your Chargeback Win Rate
          </h1>
          <p className="mt-2 text-lg text-slate-400">A data-driven approach for Shopify merchants</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The industry average chargeback win rate is 20-30%. Merchants who
            use structured evidence packages and follow reason-code-specific
            workflows regularly hit 60-70%. The difference is process, not luck.
          </p>
        </header>

        {/* The numbers */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Win rates by the numbers
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: '20-30%', label: 'Average win rate without structured responses', color: 'text-red-400' },
              { stat: '60-70%', label: 'Win rate with structured evidence + proper formatting', color: 'text-emerald-400' },
              { stat: '7-21', label: 'Days you have to respond (varies by card network)', color: 'text-sky-400' },
              { stat: '60-75', label: 'Days until the bank makes a decision', color: 'text-slate-400' },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className={`text-3xl font-semibold ${item.color}`}>
                  {item.stat}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-300 leading-7">
            That gap between 20% and 60%+ is not about having better products or
            nicer customers. It is about process: responding faster, collecting
            the right evidence, and presenting it in a way the bank reviewer can
            actually parse.
          </p>
        </section>

        {/* Five factors */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            The 5 factors that determine win or loss
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            After analyzing chargeback workflows across hundreds of merchant
            responses, these five factors explain nearly all the variance in
            outcomes:
          </p>
          <div className="mt-8 space-y-6">
            {winFactors.map((wf, i) => (
              <article
                key={wf.factor}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {wf.factor}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      wf.weight === 'Critical'
                        ? 'border border-red-400/25 bg-red-400/10 text-red-200'
                        : wf.weight === 'High'
                          ? 'border border-amber-400/25 bg-amber-400/10 text-amber-200'
                          : 'border border-white/10 bg-white/5 text-slate-400'
                    }`}
                  >
                    {wf.weight} impact
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {wf.detail}
                </p>
                <div className="mt-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Practical tip
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-50/90">
                    {wf.tip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tracking */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Measuring your win rate: what to track
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            You cannot improve what you do not measure. Most Shopify merchants
            have no idea what their actual chargeback win rate is. Start tracking
            these five metrics:
          </p>
          <div className="mt-8 space-y-4">
            {trackingMetrics.map((tm) => (
              <div
                key={tm.metric}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <h3 className="font-semibold text-white">{tm.metric}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {tm.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why structured briefs */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Why structured briefs win more disputes
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            The single biggest lever most merchants have is switching from
            ad-hoc responses to a structured, repeatable process. When every
            dispute gets the same treatment — correct evidence checklist, clear
            narrative format, labeled attachments — your win rate improves simply
            because you stop making avoidable mistakes.
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            The merchants who win at 60%+ are not doing anything magical. They
            have a template. They follow it. They do not skip steps when they are
            busy. That is the entire secret.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Stop leaving money on the table
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Build a structured brief in under 5 minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Chargeback Brief gives you reason-code-specific checklists, a
            structured rebuttal format, and a clear evidence workflow. No AI
            fluff — just a faster, more complete response.
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

        {/* Related */}
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
