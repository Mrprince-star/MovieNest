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
    if (res.status === 404) return null;
    if (!res.ok) {
      throw new Error(`TMDB request failed (${res.status}) for ${path}`);
    }
    return res.json();
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('TMDB request failed')) {
      throw error;
    }
    throw new Error(`Unable to reach TMDB for ${path}`, { cause: error });
  }
}

// Collection endpoints power discovery shelves and search results. A temporary
// TMDB outage should not take down the whole page; log it and render the
// surrounding UI without catalogue items. Detail requests remain strict so
// an API outage is never mistaken for a genuine "not found" response.
async function tmdbList(path: string, params: Record<string, string> = {}) {
  try {
    const data = await tmdb(path, params);
    return data?.results ?? [];
  } catch (error) {
    console.error(`TMDB collection request failed for ${path}:`, error);
    return [];
  }
}

export async function getTrending(mediaType: 'movie' | 'tv' | 'all' = 'all') {
  return tmdbList(`/trending/${mediaType}/week`);
}

export async function getPopular(mediaType: 'movie' | 'tv') {
  return tmdbList(`/${mediaType}/popular`);
}

export async function getNowPlaying() {
  return tmdbList('/movie/now_playing');
}

export async function getDetails(mediaType: 'movie' | 'tv', id: string) {
  const data = await tmdb(`/${mediaType}/${id}`, { append_to_response: 'credits,videos,similar' });
  return data;
}

export async function searchMulti(query: string) {
  if (!query) return [];
  const results = await tmdbList('/search/multi', { query });
  return results.filter((r: any) => r.media_type === 'movie' || r.media_type === 'tv');
}

export async function getByGenre(mediaType: 'movie' | 'tv', genreId: string) {
  return tmdbList(`/discover/${mediaType}`, { with_genres: genreId, sort_by: 'popularity.desc' });
}

export function isConfigured() {
  return Boolean(API_KEY);
}
