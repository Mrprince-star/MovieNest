const API_KEY = process.env.TMDB_API_KEY;
const BASE = 'https://api.themoviedb.org/3';

export const IMG = {
  poster: (path?: string | null, size: 'w342' | 'w500' | 'original' = 'w500') =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : '/placeholder-poster.svg',
  backdrop: (path?: string | null, size: 'w780' | 'w1280' | 'original' = 'w1280') =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : '/placeholder-backdrop.svg',
};

export const GENRES: Record<number, string> = {
  28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime',
  99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
  27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance',
  878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western',
};

export const GENRE_LIST = Object.entries(GENRES).map(([id, name]) => ({ id: Number(id), name }));

// TMDB uses different genre IDs for TV shows than for movies.
// This maps our movie-based genre ID to its closest TV equivalent.
// Genres with no real TV equivalent (e.g. Music, TV Movie) are omitted on purpose.
const MOVIE_TO_TV_GENRE: Record<number, number> = {
  28: 10759,   // Action -> Action & Adventure
  12: 10759,   // Adventure -> Action & Adventure
  16: 16,      // Animation
  35: 35,      // Comedy
  80: 80,      // Crime
  99: 99,      // Documentary
  18: 18,      // Drama
  10751: 10751, // Family
  14: 10765,   // Fantasy -> Sci-Fi & Fantasy
  27: 9648,    // Horror -> closest is Mystery (TV has no Horror genre)
  9648: 9648,  // Mystery
  10749: 18,   // Romance -> closest is Drama (TV has no Romance genre)
  878: 10765,  // Science Fiction -> Sci-Fi & Fantasy
  53: 9648,    // Thriller -> closest is Mystery (TV has no Thriller genre)
  10752: 10768, // War -> War & Politics
  37: 37,      // Western
};

export function toTVGenreId(movieGenreId: number): number | null {
  return MOVIE_TO_TV_GENRE[movieGenreId] ?? null;
}

async function tmdb(path: string, params: Record<string, string> = {}) {
  if (!API_KEY) return null;
  const qs = new URLSearchParams({ api_key: API_KEY, ...params }).toString();
  try {
    const res = await fetch(`${BASE}${path}?${qs}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getTrending(mediaType: 'movie' | 'tv' | 'all' = 'all') {
  const data = await tmdb(`/trending/${mediaType}/week`);
  return data?.results ?? [];
}

export async function getPopular(mediaType: 'movie' | 'tv') {
  const data = await tmdb(`/${mediaType}/popular`);
  return data?.results ?? [];
}

export async function getNowPlaying() {
  const data = await tmdb('/movie/now_playing');
  return data?.results ?? [];
}

export async function getDetails(mediaType: 'movie' | 'tv', id: string) {
  const data = await tmdb(`/${mediaType}/${id}`, { append_to_response: 'credits,videos,similar' });
  return data;
}

export async function searchMulti(query: string) {
  if (!query) return [];
  const data = await tmdb('/search/multi', { query });
  return (data?.results ?? []).filter((r: any) => r.media_type === 'movie' || r.media_type === 'tv');
}

export async function getByGenre(mediaType: 'movie' | 'tv', genreId: string) {
  const data = await tmdb(`/discover/${mediaType}`, { with_genres: genreId, sort_by: 'popularity.desc' });
  return data?.results ?? [];
}

export function isConfigured() {
  return Boolean(API_KEY);
}
