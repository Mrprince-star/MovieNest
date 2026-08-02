import Link from 'next/link';
import { GENRE_LIST } from '@/lib/tmdb';

export default function GenreChips() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="font-display text-2xl sm:text-3xl tracking-wide mb-4">Popular Genres</h2>
      <div className="flex flex-wrap gap-3">
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
    </section>
  );
}
