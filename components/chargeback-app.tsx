'use client';

import { useMemo, useState } from 'react';
import {
  demoIntake,
  disputeTypeLabels,
  evidenceLabels,
  generateChargebackBrief,
  type EvidenceKey,
  type IntakeData
} from '@/domain/chargeback';

const evidenceOptions = Object.entries(evidenceLabels) as [EvidenceKey, string][];
const disputeOptions = Object.entries(disputeTypeLabels);

const blankForm: IntakeData = {
  merchantName: '',
  storeUrl: '',
  disputeType: 'product_not_received',
  orderId: '',
  orderDate: '',
  orderAmount: '',
  currency: 'USD',
  customerName: '',
  customerEmail: '',
  fulfillmentDate: '',
  deliveryDate: '',
  disputeDate: '',
  shippingAddress: '',
  productSummary: '',
  descriptor: '',
  notes: '',
  evidence: []
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-200">
      <span className="font-medium">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" />;
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="min-h-28 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500" />;
}

export function ChargebackApp({ checkoutUrl }: { checkoutUrl?: string }) {
  const [form, setForm] = useState<IntakeData>(demoIntake);
  const result = useMemo(() => generateChargebackBrief(form), [form]);

  const hasCheckout = Boolean(checkoutUrl);

  function updateField<K extends keyof IntakeData>(key: K, value: IntakeData[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleEvidence(key: EvidenceKey) {
    setForm((current) => ({
      ...current,
      evidence: current.evidence.includes(key)
        ? current.evidence.filter((item) => item !== key)
        : [...current.evidence, key]
    }));
  }

  async function copyBrief() {
    await navigator.clipboard.writeText(result.copyBlock);
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:px-8">
      <section className="w-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/30 lg:w-[46%]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Dispute intake</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Chargeback Brief builder</h1>
            <p className="mt-2 text-sm text-slate-300">Built for Shopify merchants that need a rebuttal packet fast.</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Use the demo to see the full workflow, then swap in your own order facts. You should know what evidence is missing before you burn time on submission.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setForm(demoIntake)}
              className="rounded-full border border-sky-400/30 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/10"
            >
              Load demo
            </button>
            <button
              type="button"
              onClick={() => setForm(blankForm)}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Merchant name">
            <Input value={form.merchantName} onChange={(e) => updateField('merchantName', e.target.value)} placeholder="Acme Shop" />
          </Field>
          <Field label="Store URL">
            <Input value={form.storeUrl} onChange={(e) => updateField('storeUrl', e.target.value)} placeholder="https://yourstore.com" />
          </Field>
          <Field label="Dispute type">
            <select
              value={form.disputeType}
              onChange={(e) => updateField('disputeType', e.target.value as IntakeData['disputeType'])}
              className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
            >
              {disputeOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Order ID">
            <Input value={form.orderId} onChange={(e) => updateField('orderId', e.target.value)} placeholder="#1001" />
          </Field>
          <Field label="Order date">
            <Input type="date" value={form.orderDate} onChange={(e) => updateField('orderDate', e.target.value)} />
          </Field>
          <Field label="Dispute date">
            <Input type="date" value={form.disputeDate} onChange={(e) => updateField('disputeDate', e.target.value)} />
          </Field>
          <Field label="Amount">
            <Input value={form.orderAmount} onChange={(e) => updateField('orderAmount', e.target.value)} placeholder="84.00" />
          </Field>
          <Field label="Currency">
            <Input value={form.currency} onChange={(e) => updateField('currency', e.target.value.toUpperCase())} placeholder="USD" />
          </Field>
          <Field label="Customer name">
            <Input value={form.customerName} onChange={(e) => updateField('customerName', e.target.value)} />
          </Field>
          <Field label="Customer email">
            <Input value={form.customerEmail} onChange={(e) => updateField('customerEmail', e.target.value)} />
          </Field>
          <Field label="Fulfillment date">
            <Input type="date" value={form.fulfillmentDate} onChange={(e) => updateField('fulfillmentDate', e.target.value)} />
          </Field>
          <Field label="Delivery / access date">
            <Input type="date" value={form.deliveryDate} onChange={(e) => updateField('deliveryDate', e.target.value)} />
          </Field>
        </div>

        <div className="mt-4 grid gap-4">
          <Field label="Shipping address">
            <Textarea value={form.shippingAddress} onChange={(e) => updateField('shippingAddress', e.target.value)} />
          </Field>
          <Field label="Product or subscription summary">
            <Textarea value={form.productSummary} onChange={(e) => updateField('productSummary', e.target.value)} />
          </Field>
          <Field label="Statement descriptor">
            <Input value={form.descriptor} onChange={(e) => updateField('descriptor', e.target.value)} placeholder="YOURSTORE*ORDER" />
          </Field>
          <Field label="Merchant notes / facts to include">
            <Textarea value={form.notes} onChange={(e) => updateField('notes', e.target.value)} />
          </Field>
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium text-slate-100">Available evidence</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {evidenceOptions.map(([key, label]) => {
              const checked = form.evidence.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleEvidence(key)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    checked
                      ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100'
                      : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="block font-medium">{label}</span>
                  <span className="mt-1 block text-xs opacity-75">{checked ? 'Included in this brief' : 'Tap to include'}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full rounded-[28px] border border-white/10 bg-slate-950/65 p-6 shadow-2xl shadow-sky-950/30 lg:w-[54%]">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Generated locally</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">{result.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">Rules-based output. No external AI API. Clean enough to paste into your processor and tighten for edge cases.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setForm(demoIntake)}
              className="rounded-full border border-sky-400/30 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/10"
            >
              Try live demo data
            </button>
            <button
              type="button"
              onClick={copyBrief}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Copy brief
            </button>
            <a
              href={hasCheckout ? checkoutUrl : undefined}
              aria-disabled={!hasCheckout}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                hasCheckout
                  ? 'bg-emerald-400 text-slate-950 hover:opacity-90'
                  : 'cursor-not-allowed border border-white/10 text-slate-500'
              }`}
            >
              {hasCheckout ? 'Start paid plan' : 'Checkout link not configured'}
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold text-white">Merchant summary</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {result.merchantSummary.map((item) => (
                <li key={item} className="rounded-2xl border border-white/8 bg-slate-900/70 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold text-white">Recommended evidence checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {result.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-5">
            <h3 className="text-lg font-semibold text-white">Missing items</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {result.missingItems.length ? (
                result.missingItems.map((item) => (
                  <li key={item} className="rounded-2xl border border-amber-300/20 bg-slate-950/55 p-3">
                    {item}
                  </li>
                ))
              ) : (
                <li className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-100">
                  No missing evidence flagged from the current intake.
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-semibold text-white">Timeline</h3>
            <div className="mt-4 space-y-4">
              {result.timeline.map((item) => (
                <div key={`${item.label}-${item.date}`} className="rounded-2xl border border-white/8 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium text-white">{item.label}</p>
                    <span className="text-xs uppercase tracking-[0.18em] text-sky-200">{item.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">Rebuttal draft</h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Paste-ready</span>
          </div>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-200">{result.rebuttalDraft}</p>
        </div>
      </section>
    </div>
  );
}
