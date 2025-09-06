/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'app.hablr.ai' },
      { protocol: 'https', hostname: 'auth.hablr.ai' },
      { protocol: 'https', hostname: 'cdn.auth0.com' },
    ],
  },
};
module.exports = nextConfig;
