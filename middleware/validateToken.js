import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const ISSUER = process.env.AUTH0_ISSUER_BASE_URL;   // e.g., https://dev-xxx.us.auth0.com
const AUDIENCE = process.env.AUTH0_AUDIENCE;        // your API identifier

if (!ISSUER) throw new Error('Missing AUTH0_ISSUER_BASE_URL');
if (!AUDIENCE) throw new Error('Missing AUTH0_AUDIENCE');

// Cache + rate limit JWKS lookups
const client = jwksClient({
  jwksUri: `${ISSUER}/.well-known/jwks.json`,
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: 10 * 60 * 1000,   // 10 minutes
  rateLimit: true,
  jwksRequestsPerMinute: 10,
});

function getKey(header, callback) {
  if (!header || !header.kid) {
    return callback(new Error('No KID in token header'));
  }
  client.getSigningKey(header.kid, (err, key) => {
    if (err) return callback(err);
    const signingKey = key.getPublicKey ? key.getPublicKey() : (key.publicKey || key.rsaPublicKey);
    if (!signingKey) return callback(new Error('No public key found for KID'));
    callback(null, signingKey);
  });
}

/**
 * Strict Bearer-JWT validator for API routes (Pages Router).
 * Usage:
 *   export default validateToken(async function handler(req, res) { ... });
 */
const validateToken = (handler) => async (req, res) => {
  try {
    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: Bearer token required' });
    }
    const token = authHeader.slice('Bearer '.length);

    // Verify signature + claims
    jwt.verify(
      token,
      getKey,
      {
        algorithms: ['RS256'],
        issuer: `${ISSUER}/`,   // jsonwebtoken expects trailing slash
        audience: AUDIENCE,
      },
      async (err, decoded) => {
        if (err) {
          console.error('JWT verify error:', err);
          return res.status(401).json({ error: 'Unauthorized: invalid token' });
        }
        // Attach claims to req for downstream usage
        req.user = decoded;
        return handler(req, res);
      }
    );
  } catch (e) {
    console.error('validateToken error:', e);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default validateToken;
