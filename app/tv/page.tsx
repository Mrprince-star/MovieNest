import type { Metadata } from 'next';
import MovieCard from '@/components/MovieCard';
import AdBanner from '@/components/AdBanner';
import { getPopular } from '@/lib/tmdb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'TV Series',
  description: 'Browse TV series reviews, trailers, and recommendations on MovieNest.',
  alternates: {
    canonical: '/tv',
  },
};

export default async function TVPage() {
  const popular = await getPopular('tv');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-8">TV Series</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {popular.map((t: any) => (
          <MovieCard
            key={t.id}
            id={t.id}
            title={t.name}
            posterPath={t.poster_path}
            date={t.first_air_date}
            rating={t.vote_average}
            mediaType="tv"
          />
        ))}
      </div>

      <AdBanner variant="native" />
    </div>
  );
}
