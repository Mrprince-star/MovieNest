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
  {
    tmdbId: 3085, // His Girl Friday (1940)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/HisGirlFriday1940_201505',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 4808, // Charade (1963)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/1963-charade',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 961, // The General (1926)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/TheGeneral_201312',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 20367, // Detour (1945)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/detour1945HD',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 775, // A Trip to the Moon (1902)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/ATripToTheMoonGeorgeMelies',
    source: 'Public Domain — archive.org',
  },
  {
    tmdbId: 964, // The Phantom of the Opera (1925)
    mediaType: 'movie',
    downloadUrl: 'https://archive.org/details/ThePhantomOfTheOpera_201612',
    source: 'Public Domain — archive.org',
  },
];

export function findCatalogEntry(mediaType: 'movie' | 'tv', tmdbId: number) {
  return OPEN_SOURCE_CATALOG.find(
    (e) => e.mediaType === mediaType && e.tmdbId === tmdbId
  );
}
