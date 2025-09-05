import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function MyApp({ Component, pageProps }: AppProps) {
  // If you use withPageAuthRequired on a page, it can pass `user` via pageProps
  // and UserProvider will hydrate it on the client.
  return (
    <UserProvider user={(pageProps as any).user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}
