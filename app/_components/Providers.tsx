'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Keeps useUser() usable in client components like AuthButtons
  return <UserProvider>{children}</UserProvider>;
}
