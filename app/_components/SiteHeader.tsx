'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import AuthButtons from './AuthButtons';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-slate-900 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <Link href="/" className="font-semibold tracking-tight">Hablr.ai</Link>
          <span className="ml-2 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
            Leads with empathy
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#features" className="hover:text-slate-600">Features</a>
          <a href="/#roi" className="hover:text-slate-600">ROI</a>
          <a href="/#pricing" className="hover:text-slate-600">Pricing</a>
          <Link href="/team" className="hover:text-slate-600">Team</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
