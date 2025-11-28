import type { MetadataRoute } from 'next';

// Ganti baseUrl ini ke domain produksi kamu setelah deploy
const baseUrl = 'https://www.bsbcity.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/location',
    '/facilities',
    '/contact',
    '/clusters',
    '/clusters/hilago',
    '/clusters/naraya',
    '/clusters/puri-arga',
    '/clusters/graha-pelangi',
    '/clusters/graha-bunga',
    '/clusters/bsb-village',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
