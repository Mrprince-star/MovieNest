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
