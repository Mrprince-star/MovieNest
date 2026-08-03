import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDetails, IMG } from '@/lib/tmdb';
import { findCatalogEntry } from '@/lib/catalog';
import { SITE } from '@/lib/config';
import Shelf from '@/components/Shelf';
import AdBanner from '@/components/AdBanner';

export const revalidate = 3600;

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await getDetails('movie', params.id);
  if (!movie) return {};
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
  return {
    title: `${movie.title} (${year}) — Review & Info`,
    description: movie.overview?.slice(0, 155),
    openGraph: {
      title: `${movie.title} (${year})`,
      description: movie.overview?.slice(0, 155),
      images: movie.backdrop_path ? [IMG.backdrop(movie.backdrop_path)] : [],
    },
  };
}

export default async function MovieDetailPage({ params }: Props) {
  const movie = await getDetails('movie', params.id);
  if (!movie) notFound();

  const catalogEntry = findCatalogEntry('movie', Number(params.id));
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : null;
  const trailer = movie.videos?.results?.find(
    (v: any) => v.site === 'YouTube' && v.type === 'Trailer'
  );
  const cast = movie.credits?.cast?.slice(0, 8) ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    image: IMG.poster(movie.poster_path, 'w500'),
    dateCreated: movie.release_date,
    genre: movie.genres?.map((g: any) => g.name),
    aggregateRating: movie.vote_average
      ? {
          '@type': 'AggregateRating',
          ratingValue: movie.vote_average,
          bestRating: 10,
          ratingCount: movie.vote_count,
        }
      : undefined,
  };

  return (
    <div className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative">
        {movie.backdrop_path && (
          <div className="absolute inset-0 h-96 overflow-hidden">
            <Image src={IMG.backdrop(movie.backdrop_path)} alt="" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/40" />
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 grid md:grid-cols-[280px_1fr] gap-8">
          <div className="glass-card rounded-xl overflow-hidden aspect-[2/3] relative shrink-0 w-full max-w-[280px]">
            <Image src={IMG.poster(movie.poster_path)} alt={movie.title} fill className="object-cover" />
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-slate-soft mb-6">
              {year && <span>{year}</span>}
              {movie.runtime ? <span>· {movie.runtime} min</span> : null}
              {movie.vote_average ? (
                <span className="text-gold">· ★ {movie.vote_average.toFixed(1)}</span>
              ) : null}
              {movie.genres?.length ? (
                <span>· {movie.genres.map((g: any) => g.name).join(', ')}</span>
              ) : null}
            </div>

            <p className="text-bone/80 leading-relaxed max-w-2xl mb-8">{movie.overview}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              {catalogEntry ? (
                
                  href={catalogEntry.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
                >
                  Download — {catalogEntry.source}
                </a>
              ) : (
                
                  href={SITE.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
                >
                  Find it on our Telegram
                </a>
              )}
              {trailer && (
                
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-medium hover:border-gold transition-colors"
                >
                  Watch Trailer
                </a>
              )}
            </div>

            {cast.length > 0 && (
              <div>
                <h2 className="font-display text-xl tracking-wide mb-3">Cast</h2>
                <div className="flex flex-wrap gap-2">
                  {cast.map((c: any) => (
                    <span
                      key={c.id}
                      className="rounded-full bg-panel border border-gold/10 px-3 py-1 text-xs text-bone/70"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AdBanner variant="banner" />

      {movie.similar?.results?.length > 0 && (
        <Shelf heading="Related Movies" items={movie.similar.results} fallbackMediaType="movie" />
      )}
    </div>
  );
}
