import type { MetadataRoute } from 'next';

// Ganti baseUrl ini ke domain produksi kamu setelah deploy
const baseUrl = 'https://www.bsbcity.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
