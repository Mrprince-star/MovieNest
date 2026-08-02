import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';
import { GENRE_LIST } from '@/lib/tmdb';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/movies', '/tv', '/about', '/contact', '/privacy', '/terms', '/dmca'].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })
  );

  const genreRoutes = GENRE_LIST.map((g) => ({
    url: `${SITE.url}/genres/${g.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...genreRoutes];
}
