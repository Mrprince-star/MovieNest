import Link from 'next/link';
import MovieCard from '@/components/MovieCard';

type Item = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  media_type?: 'movie' | 'tv';
};

type Props = {
  id?: string;
  heading: string;
  items: Item[];
  seeAllHref?: string;
  fallbackMediaType?: 'movie' | 'tv';
};

export default function Shelf({ id, heading, items, seeAllHref, fallbackMediaType = 'movie' }: Props) {
  if (!items?.length) return null;
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-display text-2xl sm:text-3xl tracking-wide">{heading}</h2>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="inline-flex items-center gap-1 rounded-full bg-gold/15 border border-gold/50 px-4 py-1.5 text-sm font-semibold text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            See all →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {items.slice(0, 12).map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            title={item.title ?? item.name ?? 'Untitled'}
            posterPath={item.poster_path}
            date={item.release_date ?? item.first_air_date}
            rating={item.vote_average}
            mediaType={item.media_type ?? fallbackMediaType}
          />
        ))}
      </div>
    </section>
  );
}
