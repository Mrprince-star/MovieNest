import Image from 'next/image';
import { IMG } from '@/lib/tmdb';
import { SITE } from '@/lib/config';

type Props = {
  backdropPath?: string | null;
  title?: string;
  overview?: string;
};

export default function Hero({ backdropPath, title, overview }: Props) {
  return (
    <section className="relative overflow-hidden nest-texture">
      <div className="absolute inset-0">
        <Image
          src={IMG.backdrop(backdropPath, 'w1280')}
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-4">
          {SITE.brandTagline}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-2xl">
          {title ?? (
            <>
              Movies worth <span className="gold-text">talking about.</span>
            </>
          )}
        </h1>
        {overview && (
          <p className="mt-6 max-w-xl text-bone/70 line-clamp-3">{overview}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
          >
            Join our Telegram
          </a>
          <a
            href="#trending"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-medium text-bone hover:border-gold transition-colors"
          >
            Browse trending
          </a>
        </div>
      </div>
    </section>
  );
}
