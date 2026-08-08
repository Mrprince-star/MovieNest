import type { Metadata } from 'next';
import Link from 'next/link';
import Shelf from '@/components/Shelf';
import AdBanner from '@/components/AdBanner';
import { getByGenre, GENRE_LIST } from '@/lib/tmdb';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Browse by Genre',
  description: 'Explore movies and TV series by genre on MovieNest — action, drama, horror, comedy, and more.',
  alternates: {
    canonical: '/genres',
  },
};

// Show a curated set of genres on the hub page, each with a preview row.
// (All genres are still reachable via their own /genres/[id] page.)
const FEATURED_GENRE_IDS = [28, 35, 18, 27, 878, 10749, 16, 53];

export default async function GenresIndexPage() {
  const rows = await Promise.all(
    FEATURED_GENRE_IDS.map(async (id) => {
      const genre = GENRE_LIST.find((g) => g.id === id);
      const movies = await getByGenre('movie', String(id));
      return { genre, movies };
    })
  );

  const firstHalf = rows.slice(0, 3);
  const secondHalf = rows.slice(3);

  return (
    <div className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-3">Browse by Genre</h1>
        <p className="text-bone/70 max-w-2xl">
          Jump into a genre below, or explore the full list.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {GENRE_LIST.map((g) => (
            <Link
              key={g.id}
              href={`/genres/${g.id}`}
              className="rounded-full border border-gold/20 px-4 py-2 text-sm text-bone/80 hover:border-gold hover:text-gold transition-colors"
            >
              {g.name}
            </Link>
          ))}
        </div>
      </div>

      {firstHalf.map(({ genre, movies }) =>
        genre ? (
          <Shelf
            key={genre.id}
            heading={genre.name}
            items={movies}
            seeAllHref={`/genres/${genre.id}`}
            fallbackMediaType="movie"
          />
        ) : null
      )}

      <AdBanner variant="native" />

      {secondHalf.map(({ genre, movies }) =>
        genre ? (
          <Shelf
            key={genre.id}
            heading={genre.name}
            items={movies}
            seeAllHref={`/genres/${genre.id}`}
            fallbackMediaType="movie"
          />
        ) : null
      )}
    </div>
  );
}
