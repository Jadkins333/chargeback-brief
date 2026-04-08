import Link from 'next/link';

const painPoints = [
  'Friendly fraud is eating margin on otherwise healthy orders',
  'Dispute evidence lives across Shopify, email, tracking, and helpdesk tabs',
  'Teams keep rewriting the same rebuttal from scratch under deadline pressure'
];

const trafficAngles = [
  'Chargeback response template for Shopify stores',
  'How to respond to product not received chargebacks',
  'Evidence checklist for fraudulent transaction disputes',
  'Subscription canceled dispute response workflow'
];

const pricing = [
  {
    name: 'Starter',
    price: '$29/mo',
    detail: 'Up to 10 disputes per month',
    bullets: ['Rules-based evidence checklist', 'Copy-ready rebuttal draft', 'Built for lean Shopify teams']
  },
  {
    name: 'Growth',
    price: '$79/mo',
    detail: 'Up to 50 disputes per month',
    bullets: ['Everything in Starter', 'Priority support queue', 'Best fit for stores with weekly disputes'],
    featured: true
  },
  {
    name: 'Concierge add-on',
    price: '$19/dispute',
    detail: 'Manual review layer for edge cases',
    bullets: ['Human QA before submission', 'Use when the bank asks for more', 'Good bridge before deeper automation']
  }
];

const faqs = [
  {
    q: 'Does this pull data from Shopify automatically?',
    a: 'Not in this MVP. Right now you paste the dispute facts, select the evidence you already have, and the app assembles a structured brief locally.'
  },
  {
    q: 'Is this an AI API wrapper?',
    a: 'No. The generator here is local and rules-based. That keeps the product fast, cheap to run, and honest about what is actually automated.'
  },
  {
    q: 'Can I use this for different dispute reasons?',
    a: 'Yeah. The MVP handles product not received, fraudulent transaction, subscription canceled, and duplicate charge.'
  },
  {
    q: 'Will this guarantee I win chargebacks?',
    a: 'No fantasy math. It gives you a tighter, faster evidence packet. Outcome still depends on your documentation, processor, and the dispute itself.'
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Chargeback Brief</p>
          </div>
          <nav className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <Link href="/app" className="rounded-full bg-white px-4 py-2 font-semibold text-slate-950">
              Open app
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Recover revenue faster
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Turn messy chargeback evidence into a rebuttal brief in under 5 minutes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Built for Shopify brands doing real volume without a fraud ops team. Stop digging through tracking emails, refund policies,
              and support threads every time a dispute hits.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {painPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/app" className="rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90">
                Build your first brief
              </Link>
              <a href="#pricing" className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                See pricing
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['5 min', 'Average time to assemble a first-pass packet'],
                ['4 dispute types', 'Focused on the highest-friction early cases'],
                ['0 paid APIs', 'Lean stack, cheap to operate, easy to deploy']
              ].map(([stat, caption]) => (
                <div key={stat} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-3xl font-semibold text-white">{stat}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-sky-950/30">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Before</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Pull order data from Shopify</li>
                <li>Hunt down tracking proof</li>
                <li>Search old support threads</li>
                <li>Rewrite the same rebuttal from scratch</li>
              </ul>
            </div>
            <div className="my-5 flex items-center justify-center text-sky-200">↓</div>
            <div className="rounded-[28px] border border-emerald-400/25 bg-emerald-400/10 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">After</p>
              <ul className="mt-4 space-y-3 text-sm text-emerald-50">
                <li>Drop in the dispute details once</li>
                <li>Get a recommended evidence checklist instantly</li>
                <li>See what is missing before you submit</li>
                <li>Copy a structured rebuttal draft and move</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Pain tied to lost cash',
              body: 'Every dispute is either recovered revenue or a write-off. This is not a nice-to-have dashboard.'
            },
            {
              title: 'Lean workflow, not fake automation',
              body: 'The MVP does one thing well: turn raw merchant facts into a structured evidence packet.'
            },
            {
              title: 'Built for small Shopify teams',
              body: 'Owner-operators and tiny ecommerce teams do not need a bloated risk platform. They need a faster brief.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Pricing</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Price it against one recovered dispute.</h2>
            <p className="mt-4 text-lg text-slate-300">Sharp enough for early revenue. Simple enough to sell without a sales deck.</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[28px] border p-6 ${
                  plan.featured ? 'border-sky-400/40 bg-sky-400/10' : 'border-white/10 bg-white/[0.04]'
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">{plan.name}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-300">{plan.detail}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Search hooks</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">High-intent traffic starts with the exact pain merchants search for.</h2>
              <p className="mt-4 text-lg text-slate-300">
                These are the angles this product should rank, post, and pitch against because they map directly to active chargeback pain.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {trafficAngles.map((angle) => (
                <div key={angle} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-200">
                  {angle}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mt-16 grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300">FAQ</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">What merchants are going to ask right away.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">Founding user CTA</p>
          <h2 className="mt-3 text-4xl font-semibold text-white">If disputes are eating margin, stop answering them from scratch.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Open the builder, load the demo, and see the kind of brief your team can generate without bolting on another bloated ops stack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/app" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950">
              Open Chargeback Brief
            </Link>
            <a href="#pricing" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
              Review plans
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
