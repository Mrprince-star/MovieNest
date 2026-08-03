import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';
import { GENRE_LIST, getPopular, getTrending } from '@/lib/tmdb';
import { getAllPosts } from '@/lib/blog';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ['', '/movies', '/tv', '/genres', '/blog', '/about', '/contact', '/privacy', '/terms', '/dmca'].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
    })
  );

  const genreRoutes = GENRE_LIST.map((g) => ({
    url: `${SITE.url}/genres/${g.id}`,
    lastModified: new Date(),
  }));

  // Pull real titles so search engines can discover actual movie/TV pages,
  // not just the static structure. Combines trending + popular for good coverage,
  // deduplicated by ID.
  const [trending, popularMovies, popularTV] = await Promise.all([
    getTrending('all'),
    getPopular('movie'),
    getPopular('tv'),
  ]);

  const seenMovies = new Set<number>();
  const seenTV = new Set<number>();
  const titleRoutes: MetadataRoute.Sitemap = [];

  const addMovie = (id: number) => {
    if (seenMovies.has(id)) return;
    seenMovies.add(id);
    titleRoutes.push({ url: `${SITE.url}/movies/${id}`, lastModified: new Date() });
  };

  const addTV = (id: number) => {
    if (seenTV.has(id)) return;
    seenTV.add(id);
    titleRoutes.push({ url: `${SITE.url}/tv/${id}`, lastModified: new Date() });
  };

  for (const item of trending) {
    if (item.media_type === 'movie') addMovie(item.id);
    else if (item.media_type === 'tv') addTV(item.id);
  }
  for (const m of popularMovies) addMovie(m.id);
  for (const t of popularTV) addTV(t.id);

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
  }));

  return [...staticRoutes, ...genreRoutes, ...titleRoutes, ...blogRoutes];
}
