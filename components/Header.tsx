'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GENRE_LIST } from '@/lib/tmdb';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="MovieNest" width={40} height={40} className="rounded-full" />
            <span className="font-display text-2xl tracking-wide">
              MOVIE<span className="gold-text">NEST</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-body text-sm text-bone/80">
            <Link href="/movies" className="hover:text-gold transition-colors">Movies</Link>
            <Link href="/tv" className="hover:text-gold transition-colors">TV Series</Link>
            <div className="group relative">
              <Link href="/genres" className="hover:text-gold transition-colors">Genres</Link>
              <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-2 gap-x-4 gap-y-1 bg-panel border border-gold/15 rounded-lg p-4 w-96 shadow-xl">
                {GENRE_LIST.map((g) => (
                  <Link key={g.id} href={`/genres/${g.id}`} className="text-bone/70 hover:text-gold text-sm py-1">
                    {g.name}
                  </Link>
                ))}
                <Link href="/genres" className="text-gold hover:text-gold-light text-sm py-1 col-span-2 border-t border-gold/10 mt-1 pt-2">
                  View all genres →
                </Link>
              </div>
            </div>
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          </nav>

          <form action="/search" className="hidden sm:flex items-center">
            <input
              type="text"
              name="q"
              placeholder="Search movies & shows"
              aria-label="Search"
              className="w-56 rounded-l-full bg-panel border border-gold/15 px-4 py-2 text-sm text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60"
            />
            <button
              type="submit"
              className="rounded-r-full bg-gold text-ink px-4 py-2 text-sm font-medium hover:bg-gold-light transition-colors"
            >
              Search
            </button>
          </form>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full border border-gold/20 hover:border-gold/60 transition-colors shrink-0"
          >
            <span
              className={`block h-0.5 w-5 bg-bone transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-bone transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/10 bg-ink/95 backdrop-blur px-4 sm:px-6 py-4">
          <form action="/search" className="flex items-center mb-4">
            <input
              type="text"
              name="q"
              placeholder="Search movies & shows"
              aria-label="Search"
              className="flex-1 rounded-l-full bg-panel border border-gold/15 px-4 py-2 text-sm text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60"
            />
            <button
              type="submit"
              className="rounded-r-full bg-gold text-ink px-4 py-2 text-sm font-medium hover:bg-gold-light transition-colors"
            >
              Search
            </button>
          </form>

          <nav className="flex flex-col gap-1 font-body text-bone/80">
            <Link href="/movies" onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">
              Movies
            </Link>
            <Link href="/tv" onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">
              TV Series
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="/genres"
            onClick={() => setOpen(false)}
            className="mt-4 mb-3 inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/50 px-4 py-2 text-xs font-semibold text-gold uppercase tracking-wider hover:bg-gold hover:text-ink transition-colors"
          >
            Genres — View All →
          </Link>
          <div className="flex flex-wrap gap-2">
            {GENRE_LIST.map((g) => (
              <Link
                key={g.id}
                href={`/genres/${g.id}`}
                onClick={() => setOpen(false)}
                className="rounded-full border border-gold/20 px-3 py-1.5 text-xs text-bone/80 hover:border-gold hover:text-gold transition-colors"
              >
                {g.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="film-strip" />
    </header>
  );
}
