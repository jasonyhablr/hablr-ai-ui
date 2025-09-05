// app/page.tsx — Public marketing homepage with ROI-driven messaging

import {
  Sparkles,
  ShieldCheck,
  Share2,
  Settings,
  Users2,
  Database,
  MessageSquare,
  CalendarCheck,
  Building2,
  Contact2,
  Check,
} from "lucide-react";
import Link from "next/link";
// ❌ Remove this — marketing site shouldn’t use useUser() or AuthButtons
// import AuthButtons from "./_components/AuthButtons";
import Script from "next/script";
import NextImage from "next/image";

// ---------- SEO (App Router) ----------
export const metadata = {
  title: "Hablr.ai – AI-Powered Lead Management Platform",
  description:
    "Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.",
  openGraph: {
    title: "Hablr.ai – AI-Powered Lead Management Platform",
    description:
      "Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.",
    url: "https://hablr.ai",
    siteName: "Hablr.ai",
    images: [
      { url: "https://hablr.ai/og-image.png", width: 1200, height: 630, alt: "Hablr.ai Preview" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hablr.ai – AI-Powered Lead Management Platform",
    description:
      "Cut acquisition costs, close faster, and scale empathetic outreach to 20M+ homeowners with AI-powered lead management.",
    images: ["https://hablr.ai/og-image.png"],
  },
};
// -------------------------------------

export default function LandingPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hablr.ai";
  const appBase = "https://app.hablr.ai"; // <- centralize app domain
  const loginUrl = `${appBase}/api/auth/login?returnTo=/dashboard`; // will redirect to https://auth.hablr.ai/...

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hablr.ai",
    url: base,
    logo: `${base}/icon-512x512.png`,
    sameAs: ["https://www.linkedin.com/company/hablr-ai"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hablr.ai",
    url: base,
    potentialAction: {
      "@type": "SearchAction",
      target: `${base}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* JSON-LD */}
      <Script id="ld-org" type="application/ld+json">
        {JSON.stringify(org)}
      </Script>
      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify(website)}
      </Script>

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl flex items-center justify-center">
              <NextImage
                src="/hablr-swish-nodot-32.png"
                alt="Hablr"
                width={28}
                height={28}
                className="rounded-lg"
                priority
              />
            </div>
            <span className="font-semibold tracking-tight">Hablr.ai</span>
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-accent-500/10 text-accent-700 border border-accent-500/30">
              Leads with empathy
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary-700">Features</a>
            <a href="#roi" className="hover:text-primary-700">ROI</a>
            <a href="#pricing" className="hover:text-primary-700">Pricing</a>
            <a href="#faq" className="hover:text-primary-700">FAQ</a>
          </nav>

          {/* Auth CTAs -> ALWAYS to app subdomain */}
          <div className="flex items-center gap-2">
            <a
              href={loginUrl}
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 border border-blue-200"
              rel="noopener noreferrer"
            >
              Log in
            </a>
            <a
              href={loginUrl}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
              rel="noopener noreferrer"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Hero with ROI metrics */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-brand-radial" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Replace $5k call centers with an{" "}
              <span className="bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent">
                AI that converts
              </span>
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              20.7M cost-burdened homeowners. 3.3M delinquent mortgages. Hablr.ai helps you capture this market faster, cheaper, and with empathy—cutting CAC by up to 40% while increasing conversion rates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Use absolute app login URL */}
              <a
                href={loginUrl}
                className="px-5 py-3 rounded-2xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700"
                rel="noopener noreferrer"
              >
                Start free
              </a>
              <a
                href="#roi"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50"
              >
                See ROI
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-500" /> 40% lower CAC
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-accent-500" /> 3x lead quality
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-accent-500" /> Compliance built-in
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (Features, ROI, Pricing, FAQ remain the same) ... */}

      {/* In PriceCard, make CTA absolute too */}
      {/* Replace the Link with <a href={loginUrl}> */}
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="chrome-card">
      <div className="p-4 pb-2 text-base font-semibold flex items-center gap-2">
        {icon}
        {title}
      </div>
      <div className="px-4 pb-4 pt-0 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function PriceCard({
  title,
  price,
  features,
  cta,
  highlight,
}: {
  title: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) {
  const loginUrl = "https://app.hablr.ai/api/auth/login?returnTo=/dashboard";
  return (
    <div className={`relative ${highlight ? "border-primary-700 shadow-lg" : "border-slate-200"} rounded-3xl border bg-white`}>
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-full bg-blue-600 text-white">
          Most popular
        </span>
      )}
      <div className="p-6">
        <div className="text-xl font-semibold">{title}</div>
        <div className="mt-2 text-4xl font-bold">
          {price}
          <span className="text-base font-normal text-slate-500">/mo</span>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <Check className="h-4 w-4 text-accent-500" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={loginUrl}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
