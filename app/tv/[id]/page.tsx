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
  const show = await getDetails('tv', params.id);
  if (!show) return {};
  const year = show.first_air_date ? new Date(show.first_air_date).getFullYear() : '';
  return {
    title: `${show.name} (${year}) — Review & Info`,
    description: show.overview?.slice(0, 155),
    openGraph: {
      title: `${show.name} (${year})`,
      description: show.overview?.slice(0, 155),
      images: show.backdrop_path ? [IMG.backdrop(show.backdrop_path)] : [],
    },
  };
}

export default async function TVDetailPage({ params }: Props) {
  const show = await getDetails('tv', params.id);
  if (!show) notFound();

  const catalogEntry = findCatalogEntry('tv', Number(params.id));
  const year = show.first_air_date ? new Date(show.first_air_date).getFullYear() : null;
  const trailer = show.videos?.results?.find(
    (v: any) => v.site === 'YouTube' && v.type === 'Trailer'
  );
  const cast = show.credits?.cast?.slice(0, 8) ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name: show.name,
    image: IMG.poster(show.poster_path, 'w500'),
    datePublished: show.first_air_date,
    genre: show.genres?.map((g: any) => g.name),
    numberOfSeasons: show.number_of_seasons,
    numberOfEpisodes: show.number_of_episodes,
  };

  return (
    <div className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative">
        {show.backdrop_path && (
          <div className="absolute inset-0 h-96 overflow-hidden">
            <Image src={IMG.backdrop(show.backdrop_path)} alt="" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/40" />
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 grid md:grid-cols-[280px_1fr] gap-8">
          <div className="glass-card rounded-xl overflow-hidden aspect-[2/3] relative shrink-0 w-full max-w-[280px]">
            <Image src={IMG.poster(show.poster_path)} alt={show.name} fill className="object-cover" />
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">{show.name}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-slate-soft mb-6">
              {year && <span>{year}</span>}
              {show.number_of_seasons ? <span>· {show.number_of_seasons} seasons</span> : null}
              {show.vote_average ? (
                <span className="text-gold">· ★ {show.vote_average.toFixed(1)}</span>
              ) : null}
              {show.genres?.length ? (
                <span>· {show.genres.map((g: any) => g.name).join(', ')}</span>
              ) : null}
            </div>

            <p className="text-bone/80 leading-relaxed max-w-2xl mb-8">{show.overview}</p>

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

      {show.similar?.results?.length > 0 && (
        <Shelf heading="Related Series" items={show.similar.results} fallbackMediaType="tv" />
      )}
    </div>
  );
}
