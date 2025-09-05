import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hablr.ai'),
  title: 'Hablr.ai – AI-Powered Lead Management Platform',
  description:
    'Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://hablr.ai',
    siteName: 'Hablr.ai',
    title: 'Hablr.ai – AI-Powered Lead Management Platform',
    description:
      'Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hablr.ai Preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hablr.ai – AI-Powered Lead Management Platform',
    description:
      'Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: ['/favicon.ico'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0EA5E9', // blue accent
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
