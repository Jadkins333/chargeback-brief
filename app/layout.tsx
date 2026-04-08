import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chargeback Brief',
  description: 'Turn chargeback evidence into a ready-to-submit brief in under 5 minutes.',
  metadataBase: new URL('https://jadkins333.github.io/chargeback-brief/'),
  openGraph: {
    title: 'Chargeback Brief',
    description: 'Turn messy chargeback evidence into a rebuttal brief in under 5 minutes.',
    url: 'https://jadkins333.github.io/chargeback-brief/',
    siteName: 'Chargeback Brief',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chargeback Brief',
    description: 'Turn messy chargeback evidence into a rebuttal brief in under 5 minutes.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
