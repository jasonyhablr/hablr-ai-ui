'use client';

import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AuthButtons() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;

  return user ? (
    <div className="flex items-center gap-2">
      <Link href="/dashboard" className="px-3 py-2 rounded-lg text-sm hover:bg-slate-100">
        Dashboard
      </Link>
      <Link href="/api/auth/logout?returnTo=/" className="px-3 py-2 rounded-lg text-sm bg-slate-100 hover:bg-slate-200">
        Logout
      </Link>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link href="/api/auth/login?returnTo=/dashboard" className="hidden sm:inline-flex px-3 py-2 rounded-lg text-sm hover:bg-slate-100">
        Log in
      </Link>
      <Link href="/api/auth/login?returnTo=/dashboard" className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700">
        Start free
      </Link>
    </div>
  );
}
