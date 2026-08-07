'use client';

import { useEffect, useState } from 'react';
import { isInWatchlist, toggleWatchlist } from '@/lib/watchlist';

type Props = {
  id: number;
  mediaType: 'movie' | 'tv';
  title: string;
  posterPath: string | null;
};

export default function WatchlistButton({ id, mediaType, title, posterPath }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isInWatchlist(id, mediaType));
    const handler = () => setSaved(isInWatchlist(id, mediaType));
    window.addEventListener('watchlist-updated', handler);
    return () => window.removeEventListener('watchlist-updated', handler);
  }, [id, mediaType]);

  return (
    <button
      type="button"
      onClick={() => toggleWatchlist({ id, mediaType, title, posterPath })}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-colors ${
        saved
          ? 'bg-gold border-gold text-ink hover:bg-gold-light'
          : 'border-gold/40 text-bone hover:border-gold'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
      </svg>
      {saved ? 'In Watchlist' : 'Add to Watchlist'}
    </button>
  );
}
