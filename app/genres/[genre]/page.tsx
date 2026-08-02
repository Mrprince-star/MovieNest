import type { Metadata } from 'next';
import MovieCard from '@/components/MovieCard';
import { getByGenre, GENRES, toTVGenreId } from '@/lib/tmdb';

export const revalidate = 3600;

type Props = { params: { genre: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = GENRES[Number(params.genre)] ?? 'Genre';
  return {
    title: `${name} Movies & TV Series`,
    description: `Browse ${name.toLowerCase()} movies and TV series reviews, trailers, and downloads on MovieNest.`,
  };
}

export default async function GenrePage({ params }: Props) {
  const genreId = Number(params.genre);
  const name = GENRES[genreId] ?? 'Genre';
  const tvGenreId = toTVGenreId(genreId);

  const [movies, shows] = await Promise.all([
    getByGenre('movie', params.genre),
    tvGenreId ? getByGenre('tv', String(tvGenreId)) : Promise.resolve([]),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-8">{name}</h1>

      <h2 className="font-display text-xl tracking-wide mb-4 text-gold">Movies</h2>
      {movies.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
          {movies.map((m: any) => (
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.title}
              posterPath={m.poster_path}
              date={m.release_date}
              rating={m.vote_average}
              mediaType="movie"
            />
          ))}
        </div>
      ) : (
        <p className="text-slate-soft mb-12">No movies found in this genre yet.</p>
      )}

      {shows.length > 0 && (
        <>
          <h2 className="font-display text-xl tracking-wide mb-4 text-gold">TV Series</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {shows.map((t: any) => (
              <MovieCard
                key={t.id}
                id={t.id}
                title={t.name}
                posterPath={t.poster_path}
                date={t.first_air_date}
                rating={t.vote_average}
                mediaType="tv"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
