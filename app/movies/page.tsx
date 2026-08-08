import type { Metadata } from 'next';
import MovieCard from '@/components/MovieCard';
import AdBanner from '@/components/AdBanner';
import { getPopular, getNowPlaying } from '@/lib/tmdb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Browse movie reviews, trailers, and free downloads of public domain films on MovieNest.',
  alternates: {
    canonical: '/movies',
  },
};

export default async function MoviesPage() {
  const [popular, nowPlaying] = await Promise.all([getPopular('movie'), getNowPlaying()]);
  const seen = new Set<number>();
  const combined = [...nowPlaying, ...popular].filter((m) => {
    if (seen.has(m.id)) return false;
    seen.add(m.id);
    return true;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-8">Movies</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {combined.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            posterPath={m.poster_path}
            date={m.release_date}
            rating={m.vote_average}
            mediaType="movie"
          />
        ))}
      </div>

      <AdBanner variant="native" />
    </div>
  );
}
