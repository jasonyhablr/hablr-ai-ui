// middleware.ts (root of repo)
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://app.hablr.ai';

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    return NextResponse.redirect(`${APP}${pathname}${search}`);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml|json|css|js|map)).*)',
  ],
};
