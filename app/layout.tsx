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
        url: '/chargeback-brief/og.png',
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
    images: ['/chargeback-brief/og.png']
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/*
          ===== ANALYTICS PLACEHOLDER =====
          This site is deployed on GitHub Pages (not Vercel), so @vercel/analytics
          won't work here. Drop one of the following when ready:

          -- Google Analytics (GA4) --
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}} />

          -- Meta Pixel --
          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s){...}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}} />

          -- Plausible (self-hostable, lightweight) --
          <script defer data-domain="jadkins333.github.io" src="https://plausible.io/js/script.js" />
        */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
