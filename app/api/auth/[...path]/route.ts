// app/api/auth/[...path]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://app.hablr.ai';

function forward(req: NextRequest) {
  const current = new URL(req.nextUrl);
  const appURL = new URL(APP); // throws if invalid => that's fine

  // ---- GUARD: prevent same-origin loops ----
  if (appURL.origin === current.origin) {
    // If you ever misconfigure NEXT_PUBLIC_APP_ORIGIN to marketing,
    // fail fast instead of 302-looping forever.
    return NextResponse.json(
      {
        error: 'Misconfiguration: NEXT_PUBLIC_APP_ORIGIN points to this site (marketing).',
        hint: 'Set NEXT_PUBLIC_APP_ORIGIN to your dashboard origin, e.g. http://localhost:3001 in dev or https://app.hablr.ai in prod.',
      },
      { status: 500 }
    );
  }

  // Preserve the exact path/query and send to the dashboard app
  const dest = new URL(current.pathname + current.search, appURL);
  return NextResponse.redirect(dest.toString(), 302);
}

export const GET = forward;
export const POST = forward;
export const PUT = forward;
export const PATCH = forward;
export const DELETE = forward;
export const HEAD = forward;
export const OPTIONS = forward;
