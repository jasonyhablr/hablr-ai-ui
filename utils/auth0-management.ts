// SERVER-ONLY: never import this from a client component
let tokenCache:
  | { accessToken: string; expiresAt: number }  // epoch ms
  | null = null;

const DOMAIN = process.env.AUTH0_DOMAIN!;
const CLIENT_ID = process.env.AUTH0_CLIENT_ID!;
const CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET!;
const AUDIENCE = process.env.AUTH0_AUDIENCE!;

function assertEnv(name: string, value?: string) {
  if (!value) throw new Error(`Missing required env var: ${name}`);
}
assertEnv('AUTH0_DOMAIN', DOMAIN);
assertEnv('AUTH0_CLIENT_ID', CLIENT_ID);
assertEnv('AUTH0_CLIENT_SECRET', CLIENT_SECRET);
assertEnv('AUTH0_AUDIENCE', AUDIENCE);

export async function getAuth0ManagementToken(): Promise<string> {
  // reuse token if not close to expiry (60s buffer)
  const now = Date.now();
  if (tokenCache && tokenCache.expiresAt - now > 60_000) {
    return tokenCache.accessToken;
  }

  const url = `https://${DOMAIN}/oauth/token`;
  const body = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    audience: AUDIENCE,
    grant_type: 'client_credentials',
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Auth0 token request failed (${res.status}): ${text}`);
  }

  const json: {
    access_token: string;
    token_type: string;
    expires_in: number; // seconds
  } = await res.json();

  if (!json.access_token || !json.expires_in) {
    throw new Error('Auth0 token response missing fields');
  }

  tokenCache = {
    accessToken: json.access_token,
    // expires_in is seconds; set a conservative expiry time
    expiresAt: Date.now() + json.expires_in * 1000,
  };

  return tokenCache.accessToken;
}
