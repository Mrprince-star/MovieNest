import type { Metadata } from 'next';
import MovieCard from '@/components/MovieCard';
import { searchMulti } from '@/lib/tmdb';

export const metadata: Metadata = {
  title: 'Search',
  robots: { index: false },
};

type Props = { searchParams: { q?: string } };

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? '';
  const results = query ? await searchMulti(query) : [];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-4">Search</h1>

      <form className="mb-10 flex max-w-lg">
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Search movies & shows"
          className="flex-1 rounded-l-full bg-panel border border-gold/15 px-4 py-3 text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60"
        />
        <button
          type="submit"
          className="rounded-r-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
        >
          Search
        </button>
      </form>

      {query && (
        <p className="text-slate-soft mb-6">
          {results.length} result{results.length === 1 ? '' : 's'} for &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {results.map((r: any) => (
          <MovieCard
            key={`${r.media_type}-${r.id}`}
            id={r.id}
            title={r.title ?? r.name}
            posterPath={r.poster_path}
            date={r.release_date ?? r.first_air_date}
            rating={r.vote_average}
            mediaType={r.media_type}
          />
        ))}
      </div>
    </div>
  );
}
