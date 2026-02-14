// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://shourl.in';

  // Static routes
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
