import type { Metadata } from 'next';
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
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Chargeback Brief — rebuttal packets for Shopify merchants'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chargeback Brief',
    description: 'Turn messy chargeback evidence into a rebuttal brief in under 5 minutes.',
    images: ['/og.png']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="jadkins333.github.io" src="https://plausible.io/js/script.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
