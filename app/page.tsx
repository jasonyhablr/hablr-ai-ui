// app/page.tsx — Public marketing homepage (direct Auth0 links, no client auth hooks)

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
    images: [{ url: "https://hablr.ai/og-image.png", width: 1200, height: 630, alt: "Hablr.ai Preview" }],
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

// Build a direct Universal Login URL (no /api/auth on this marketing app).
// If you want to use the *exact* long URL Auth0 gave you (with PKCE bits), set NEXT_PUBLIC_AUTH0_LOGIN_URL.
function buildLoginUrl(): string {
  // 1) Absolute override (paste your full working URL here in env if desired)
  const override = process.env.NEXT_PUBLIC_AUTH0_LOGIN_URL;
  if (override) return override;

  // 2) Otherwise build a clean /u/login URL
  const AUTH0_DOMAIN = (process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL || "https://auth.hablr.ai").replace(/\/+$/, "");
  const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "AUTEUkvgwXklugJH0eHSphcdPXKLcaJE";
  const DASHBOARD_URL = (process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.hablr.ai").replace(/\/+$/, "");
  const redirectUri = `${DASHBOARD_URL}/api/auth/callback`;

  // NOTE: Your dashboard’s @auth0/nextjs-auth0 will handle the code exchange at /api/auth/callback.
  // We include scope and state=returnTo so your app can route to /dashboard after login.
  const scope = "openid profile email";
  const state = JSON.stringify({ returnTo: "/dashboard" });

  // If you *must* use /authorize + PKCE, set NEXT_PUBLIC_AUTH0_LOGIN_URL to the exact URL you pasted from Auth0.
  // This default uses /u/login which is accepted for Universal Login in most setups.
  const url =
    `${AUTH0_DOMAIN}/u/login` +
    `?client_id=${encodeURIComponent(AUTH0_CLIENT_ID)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(scope)}` +
    `&state=${encodeURIComponent(state)}` +
    `&audience=${encodeURIComponent(`${AUTH0_DOMAIN}/api/v2/`)}`;

  return url;
}

export default function LandingPage() {
  const LOGIN_URL = buildLoginUrl();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl flex items-center justify-center">
              <NextImage src="/hablr-swish-nodot-32.png" alt="Hablr" width={28} height={28} className="rounded-lg" />
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
          <div className="flex items-center gap-2">
            {/* Direct absolute link to Auth0 Universal Login (no UserProvider required here) */}
            <a
              href={LOGIN_URL}
              className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 border border-blue-200"
              rel="noopener noreferrer"
            >
              Log in
            </a>
            <a
              href={LOGIN_URL}
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
              <a
                href={LOGIN_URL}
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

      {/* Features */}
      <section id="features" className="py-16 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to capture, qualify, and close</h2>
            <p className="mt-3 text-slate-600">
              Hablr.ai unifies contacts, properties, tasks, and conversations—backed by HID-based ownership and granular sharing.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Contact2 className="h-5 w-5" />, title: "Contacts", desc: "Capture and enrich leads automatically. Import CSVs, dedupe, and keep a clean book of business." },
              { icon: <Building2 className="h-5 w-5" />, title: "Properties", desc: "Link deals to addresses and parcels. Keep notes, comps, and docs in one place." },
              { icon: <CalendarCheck className="h-5 w-5" />, title: "Tasks & Follow-ups", desc: "Auto-create next steps from conversations. Stay on top of reminders and due dates." },
              { icon: <MessageSquare className="h-5 w-5" />, title: "Conversation Intelligence", desc: "AI extracts summaries, sentiment, objections, and action items—so you focus on closing." },
              { icon: <Share2 className="h-5 w-5" />, title: "Sharing & Permissions", desc: "Share specific records via email as Reader or Editor. Revoke anytime." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "HID Ownership & Security", desc: "Every record is bound to a private HID. Auth0 sessions and least-privilege access." },
              { icon: <Settings className="h-5 w-5" />, title: "Integrations", desc: "Plug into your stack. Import lists, export results, and automate with webhooks." },
              { icon: <Database className="h-5 w-5" />, title: "Fast & Scalable Data", desc: "MongoDB with owner/date indexes for instant filters and lists—even at scale." },
              { icon: <Users2 className="h-5 w-5" />, title: "Team Visibility", desc: "Share only what’s needed. Collaborate safely across reps, partners, and vendors." },
            ].map((f, i) => (
              <div key={i} className="chrome-card p-5">
                <div className="text-base font-semibold flex items-center gap-2 mb-1">
                  {f.icon}
                  {f.title}
                </div>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-16 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Your ROI with Hablr.ai</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature icon={<Users2 className="h-5 w-5" />} title="Cut Costs" desc="Save up to $5,000/month by replacing outsourced call centers with AI-driven outreach." />
            <Feature icon={<Database className="h-5 w-5" />} title="Higher Conversions" desc="Empathetic AI conversations reduce hang-ups and build trust, increasing conversion rates by 3x." />
            <Feature icon={<Building2 className="h-5 w-5" />} title="Faster Closes" desc="AI-qualified leads mean you close deals up to 2 weeks faster than traditional pipelines." />
            <Feature icon={<MessageSquare className="h-5 w-5" />} title="Better Leads" desc="Focus only on distressed and cost-burdened homeowners—stop wasting time on cold calls." />
            <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Stay Compliant" desc="Built-in adherence to TCPA/FDCPA avoids fines while keeping outreach ethical and effective." />
            <Feature icon={<Sparkles className="h-5 w-5" />} title="Predictable CAC" desc="Pay-per-lead model ensures marketing spend is tied directly to outcomes." />
          </div>
        </div>
      </section>

      {/* Pricing with ROI framing */}
      <section id="pricing" className="py-16 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Simple pricing that saves thousands</h2>
            <p className="mt-3 text-slate-600">Replace $5k/mo call centers. Start at just $39/mo with AI leads that actually close.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <PriceCard title="Starter" price="$0" cta="Get started" features={["1 seat", "1,000 contacts", "Basic AI summaries", "Community support"]} />
            <PriceCard title="Growth" price="$39" highlight cta="Start trial" features={["3 seats", "15,000 contacts", "Advanced AI insights", "Email support"]} />
            <PriceCard title="Scale" price="$99" cta="Talk to sales" features={["Unlimited seats", "Unlimited contacts", "Custom models", "SLA & SSO"]} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
            <p className="mt-3 text-slate-600">
              Everything you need to know about setup, security, and pricing.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How does HID ownership work?",
                a: "Each record (contact, property, task, conversation) is bound to a private HID generated for your account. Only you can see your data unless you share it with Reader or Editor access.",
              },
              {
                q: "What’s the difference between Reader and Editor?",
                a: "Reader can view shared records but cannot modify them. Editor can update shared records. Owners retain full control and can revoke access anytime.",
              },
              {
                q: "Can I import my existing lists?",
                a: "Yes—CSV import is supported for Contacts and Properties. We dedupe and validate as we ingest so your team starts clean.",
              },
              {
                q: "How is login and security handled?",
                a: "Authentication is powered by Auth0 with secure cookie sessions. We enforce least-privilege DB access and owner-scoped queries with server-verified HIDs.",
              },
              {
                q: "What ROI should I expect?",
                a: "Teams typically replace $5k/mo call centers, reduce CAC by up to 40%, and see 3× better lead quality via empathetic AI conversations. Actual results vary by list quality and follow-up discipline.",
              },
              {
                q: "Do you support teams and organizations?",
                a: "Yes—create an organization, invite teammates by email, and share at the record level with Reader/Editor roles. Audit-friendly by design.",
              },
              {
                q: "Can I export my data?",
                a: "Absolutely. Your data is yours. Export at any time in standard formats.",
              },
              {
                q: "What if I share with someone who isn’t a user?",
                a: "We send them a secure invite link. When they create an account, we resolve their HID automatically and apply the share.",
              },
            ].map((item, i) => (
              <div key={i} className="chrome-card p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <NextImage src="/hablr-swish-nodot-32.png" alt="Hablr" width={16} height={16} priority />
              Hablr.ai
            </div>
            <p className="mt-3 text-slate-600">Leads with empathy. Replace call centers, close faster, cut costs.</p>
          </div>
          <div>
            <div className="font-medium">Product</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#features" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Features</a></li>
              <li><a href="#roi" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">ROI</a></li>
              <li><a href="#pricing" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/about" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">About</a></li>
              <li><a href="/team" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Team</a></li>
              <li><a href="mailto:contact@hablr.ai" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/privacy" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Privacy</a></li>
              <li><a href="/terms" className="inline-flex rounded-2xl border border-blue-200 px-5 py-3 font-semibold hover:bg-blue-50">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Hablr.ai. All rights reserved.
        </div>
      </footer>
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
          href={buildLoginUrl()}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
