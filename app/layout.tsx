import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chargeback Brief',
  description: 'Turn chargeback evidence into a ready-to-submit brief in under 5 minutes.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
