import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-4 w-4" />
            Hablr.ai
          </div>
          <p className="mt-3 text-slate-600">
            Leads with empathy. Replace call centers, close faster, cut costs.
          </p>
        </div>
        <div>
          <div className="font-medium">Product</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="/#features" className="hover:text-slate-900">Features</a></li>
            <li><a href="/#roi" className="hover:text-slate-900">ROI</a></li>
            <li><a href="/#pricing" className="hover:text-slate-900">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><Link href="/about" className="hover:text-slate-900">About</Link></li>
            <li><Link href="/team" className="hover:text-slate-900">Our Team</Link></li>
            <li><a href="mailto:hello@hablr.ai" className="hover:text-slate-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><Link href="/privacy" className="hover:text-slate-900">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-slate-900">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Hablr.ai. All rights reserved.
      </div>
    </footer>
  );
}
