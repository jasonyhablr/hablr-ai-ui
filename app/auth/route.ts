// app/auth/route.ts
import { NextResponse } from 'next/server';

const APP = process.env.NEXT_PUBLIC_APP_ORIGIN ?? 'https://app.hablr.ai';
const RETURN_TO = process.env.NEXT_PUBLIC_RETURN_TO ?? '/dashboard';

export function GET() {
  return NextResponse.redirect(
    `${APP}/api/auth/login?returnTo=${encodeURIComponent(RETURN_TO)}`,
    302
  );
}
