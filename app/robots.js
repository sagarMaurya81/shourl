// app/robots.js — generates /robots.txt at build time
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Don't let Google index short redirect URLs or API routes
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://shourl-alpha.vercel.app/sitemap.xml',
    host: 'https://shourl-alpha.vercel.app',
  };
}
