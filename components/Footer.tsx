import Link from 'next/link';
import { SITE } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/10 bg-panel/40">
      <div className="film-strip" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-xl tracking-wide mb-2">
            MOVIE<span className="gold-text">NEST</span>
          </p>
          <p className="text-slate-soft">{SITE.brandTagline}</p>
        </div>
        <div>
          <p className="text-gold mb-3 font-medium">Browse</p>
          <ul className="space-y-2 text-bone/70">
            <li><Link href="/movies" className="hover:text-gold">Movies</Link></li>
            <li><Link href="/tv" className="hover:text-gold">TV Series</Link></li>
            <li><Link href="/genres" className="hover:text-gold">Genres</Link></li>
            <li><Link href="/search" className="hover:text-gold">Search</Link></li>
            <li><Link href="/watchlist" className="hover:text-gold">Watchlist</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-gold mb-3 font-medium">Site</p>
          <ul className="space-y-2 text-bone/70">
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            <li>
              <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Telegram Channel
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gold mb-3 font-medium">Legal</p>
          <ul className="space-y-2 text-bone/70">
            <li><Link href="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold">Terms of Service</Link></li>
            <li><Link href="/dmca" className="hover:text-gold">DMCA / Copyright</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-slate-soft">
        © {new Date().getFullYear()} {SITE.name}. Movie data and images provided by TMDB. All rights to underlying films and shows belong to their respective owners.
      </div>
    </footer>
  );
}
