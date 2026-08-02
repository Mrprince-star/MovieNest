// Add entries here for titles you can legally offer for direct download
// (public domain / open-source releases). Everything not listed here
// is treated as review-only, with a "Join our Telegram" CTA instead
// of a download button.
//
// tmdbId: the TMDB id for the movie or TV show (visible in its TMDB URL)
// downloadUrl: direct link to the file (e.g. archive.org, your own CDN)
// source: short label shown to visitors, e.g. "Public Domain — archive.org"

export type CatalogEntry = {
  tmdbId: number;
  mediaType: 'movie' | 'tv';
  downloadUrl: string;
  source: string;
};

export const OPEN_SOURCE_CATALOG: CatalogEntry[] = [
  {
    tmdbId: 426, // Nosferatu (1922)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/Nosferatu1922',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 738, // Metropolis (1927)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/Metropolis1927restored',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 963, // Night of the Living Dead (1968)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/night_of_the_living_dead',
    source: 'Public Domain — archive.org',
  },
];

export function findCatalogEntry(mediaType: 'movie' | 'tv', tmdbId: number) {
  return OPEN_SOURCE_CATALOG.find(
    (e) => e.mediaType === mediaType && e.tmdbId === tmdbId
  );
}
