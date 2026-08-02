import Hero from '@/components/Hero';
import Shelf from '@/components/Shelf';
import GenreChips from '@/components/GenreChips';
import { getTrending, getPopular, getNowPlaying, isConfigured } from '@/lib/tmdb';

export const revalidate = 3600;

export default async function HomePage() {
  const [trending, popularMovies, popularTV, nowPlaying] = await Promise.all([
    getTrending('all'),
    getPopular('movie'),
    getPopular('tv'),
    getNowPlaying(),
  ]);

  const featured = trending[0];

  return (
    <>
      <Hero
        backdropPath={featured?.backdrop_path}
        title={featured?.title ?? featured?.name}
        overview={featured?.overview}
      />

      {!isConfigured() && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-lg border border-gold/30 bg-panel p-4 text-sm text-bone/80">
            Movie and show data isn&apos;t loading yet — add your{' '}
            <code className="text-gold">TMDB_API_KEY</code> environment variable in your Vercel
            project settings, then redeploy.
          </div>
        </div>
      )}

      <Shelf id="trending" heading="Trending This Week" items={trending} seeAllHref="/movies" />
      <Shelf heading="Latest Movies" items={nowPlaying} seeAllHref="/movies" fallbackMediaType="movie" />
      <Shelf heading="Popular TV Series" items={popularTV} seeAllHref="/tv" fallbackMediaType="tv" />
      <GenreChips />
      <Shelf heading="Recently Added" items={popularMovies} seeAllHref="/movies" fallbackMediaType="movie" />
    </>
  );
}
