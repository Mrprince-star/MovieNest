// Client-side watchlist stored in the browser's localStorage.
// No account or backend needed. Each visitor's list lives only on their
// own device. A custom 'watchlist-updated' event lets components react
// to changes made elsewhere on the page without prop drilling.

export type WatchlistItem = {
  id: number;
  mediaType: 'movie' | 'tv';
  title: string;
  posterPath: string | null;
  addedAt: string;
};

const STORAGE_KEY = 'movienest_watchlist';

function isBrowser() {
  return typeof window !== 'undefined';
}

export function getWatchlist(): WatchlistItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWatchlist(items: WatchlistItem[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('watchlist-updated'));
}

export function isInWatchlist(id: number, mediaType: 'movie' | 'tv'): boolean {
  return getWatchlist().some((item) => item.id === id && item.mediaType === mediaType);
}

export function addToWatchlist(item: Omit<WatchlistItem, 'addedAt'>) {
  const current = getWatchlist();
  if (current.some((i) => i.id === item.id && i.mediaType === item.mediaType)) return;
  const updated = [...current, { ...item, addedAt: new Date().toISOString() }];
  saveWatchlist(updated);
}

export function removeFromWatchlist(id: number, mediaType: 'movie' | 'tv') {
  const current = getWatchlist();
  const updated = current.filter((item) => !(item.id === id && item.mediaType === mediaType));
  saveWatchlist(updated);
}

export function toggleWatchlist(item: Omit<WatchlistItem, 'addedAt'>) {
  if (isInWatchlist(item.id, item.mediaType)) {
    removeFromWatchlist(item.id, item.mediaType);
  } else {
    addToWatchlist(item);
  }
}
