import Link from 'next/link';
import { ChargebackApp } from '@/components/chargeback-app';

export default function AppPage() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

  return (
    <main className="min-h-screen pb-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pt-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Chargeback Brief</p>
          <p className="mt-2 text-sm text-slate-300">Local-first MVP for Shopify dispute response prep.</p>
        </div>
        <Link href="/" className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5">
          Back to landing page
        </Link>
      </div>
      <ChargebackApp checkoutUrl={checkoutUrl} />
    </main>
  );
}
