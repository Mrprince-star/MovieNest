import Link from 'next/link';
import Image from 'next/image';
import { IMG } from '@/lib/tmdb';

type Props = {
  id: number;
  title: string;
  posterPath?: string | null;
  date?: string | null;
  rating?: number;
  mediaType: 'movie' | 'tv';
};

export default function MovieCard({ id, title, posterPath, date, rating, mediaType }: Props) {
  const year = date ? new Date(date).getFullYear() : null;
  return (
    <Link
      href={`/${mediaType === 'movie' ? 'movies' : 'tv'}/${id}`}
      className="glass-card rounded-xl overflow-hidden block group"
    >
      <div className="relative aspect-[2/3] bg-panel">
        <Image
          src={IMG.poster(posterPath, 'w342')}
          alt={title}
          fill
          sizes="(max-width: 768px) 45vw, 200px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {typeof rating === 'number' && rating > 0 && (
          <span className="absolute top-2 right-2 rounded-full bg-ink/80 border border-gold/40 text-gold font-mono text-xs px-2 py-0.5">
            {rating.toFixed(1)}
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-bone truncate">{title}</p>
        {year && <p className="text-xs text-slate-soft font-mono mt-0.5">{year}</p>}
      </div>
    </Link>
  );
}
