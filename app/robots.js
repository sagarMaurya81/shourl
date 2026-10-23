// app/robots.js — generates /robots.txt at build time
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow API routes from indexing, but allow Googlebot to load CSS/JS chunks
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://shourl-alpha.vercel.app/sitemap.xml',
  };
}

