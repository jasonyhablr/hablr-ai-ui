import { Linkedin, Twitter } from "lucide-react";

export const metadata = {
  title: "Our Team – Hablr.ai",
  description:
    "Meet the founders behind Hablr.ai and the values guiding our work.",
};

// simple inline SVG avatar (replace `src` with a real photo later)
function Avatar({ initials, bg = "#0ea5e9", fg = "#ffffff" }: { initials: string; bg?: string; fg?: string }) {
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='${bg}'/>
          <stop offset='100%' stop-color='#f59e0b'/>
        </linearGradient>
      </defs>
      <rect width='512' height='512' rx='40' fill='url(#g)'/>
      <text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle'
            font-family='system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
            font-size='200' fill='${fg}' font-weight='700'>${initials}</text>
    </svg>`
  );
  return (
    <img
      src={`data:image/svg+xml;charset=UTF-8,${svg}`}
      alt={initials}
      className="h-28 w-28 rounded-2xl ring-1 ring-black/5 object-cover"
    />
  );
}

function TeamCard({
  name,
  title,
  bio,
  initials,
  linkedin,
  twitter,
}: {
  name: string;
  title: string;
  bio: string;
  initials: string;
  linkedin?: string;
  twitter?: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-5">
        <Avatar initials={initials} />
        <div>
          <h3 className="text-lg font-semibold leading-tight">{name}</h3>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="mt-3 text-sm text-slate-700">{bio}</p>
          <div className="mt-3 flex items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900"
              >
                <Twitter className="h-4 w-4" />
                <span className="text-sm">Twitter</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-wider text-slate-500">OUR TEAM</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Builders with empathy. Operators obsessed with outcomes.
        </h1>
        <p className="mt-3 text-slate-600">
          We started Hablr.ai after running into the same problems again and again:
          expensive call centers, low trust from homeowners, and messy data that made
          collaboration risky. We’re fixing that with AI that actually listens and a
          secure HID ownership model that makes sharing simple.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <TeamCard
          name="Jason Yamada"
          title="Co-founder"
          initials="JY"
          bio="Jason blends embedded-systems rigor with product intuition. After years of
               building automation platforms and leading teams, he set out to replace
               the cold call center model with empathetic AI and clear data ownership."
          linkedin="https://www.linkedin.com/"
          twitter="https://x.com/"
        />
        <TeamCard
          name="Ximing Feng"
          title="Co-founder"
          initials="X"
          bio="Ximing brings deep technical expertise in distributed systems and
                data-driven applications. His passion lies in turning complex problems
                into scalable, elegant solutions. At Hablr.ai, he focuses on the
                architecture that powers AI conversations, HID-based ownership, and
                collaboration at scale"
          linkedin="https://www.linkedin.com/"
          twitter="https://x.com/"
        />
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold">What we’re solving</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>$5k+/mo call centers with low ROI</li>
            <li>Cold outreach that erodes trust</li>
            <li>Scattered, ownerless data across tools</li>
            <li>No safe way to share just the right records</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold">How Hablr.ai helps</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Empathy-first AI conversations that convert</li>
            <li>HID ownership for every record</li>
            <li>Reader/Editor sharing, revocable anytime</li>
            <li>CSV imports, dedupe, and clean pipelines</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-base font-semibold">Our commitments</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Privacy by default, audit-friendly by design</li>
            <li>Outcome-driven pricing and clear ROI</li>
            <li>Fast, respectful support</li>
            <li>Build with empathy</li>
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-base font-semibold">We’re hiring (slowly)</h3>
        <p className="mt-2 text-sm text-slate-700">
          If you care about pragmatic AI, secure collaboration, and helping people in
          real financial situations, we’d love to meet you.
        </p>
        <a
          href="mailto:contact@hablr.ai"
          className="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Email us
        </a>
      </section>
    </main>
  );
}
