'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getWatchlist, removeFromWatchlist, type WatchlistItem } from '@/lib/watchlist';
import { IMG } from '@/lib/tmdb';

export default function WatchlistPage() {
  const [items, setItems] = useState<WatchlistItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(getWatchlist());
    setLoaded(true);
    const handler = () => setItems(getWatchlist());
    window.addEventListener('watchlist-updated', handler);
    return () => window.removeEventListener('watchlist-updated', handler);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">My Watchlist</h1>
      <p className="text-bone/70 mb-8">
        Saved right in this browser. Clearing your browser data will clear this list too.
      </p>

      {loaded && items.length === 0 && (
        <div className="glass-card rounded-xl p-8 text-center">
          <p className="text-bone/70 mb-4">Your watchlist is empty.</p>
          <Link
            href="/movies"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
          >
            Browse Movies
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={`${item.mediaType}-${item.id}`} className="relative group">
              <Link
                href={`/${item.mediaType === 'movie' ? 'movies' : 'tv'}/${item.id}`}
                className="glass-card rounded-xl overflow-hidden block"
              >
                <div className="relative aspect-[2/3] bg-panel">
                  <Image
                    src={IMG.poster(item.posterPath, 'w342')}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 45vw, 200px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-bone truncate">{item.title}</p>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => removeFromWatchlist(item.id, item.mediaType)}
                aria-label={`Remove ${item.title} from watchlist`}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-ink/80 border border-gold/30 text-bone/70 hover:text-gold flex items-center justify-center text-sm"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
