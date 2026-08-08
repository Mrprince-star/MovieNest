import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${SITE.name} — reviews, trailers, and a community for movie and TV lovers.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-6">About MovieNest</h1>
      <div className="prose prose-invert prose-headings:font-display prose-headings:tracking-wide max-w-none text-bone/80 leading-relaxed space-y-4">
        <p>
          MovieNest is a home for people who love film and television — a place to discover what to
          watch next, read honest reviews, and connect with a community of fellow fans through our{' '}
          <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-gold">
            Telegram channel
          </a>
          . You can also browse by{' '}
          <Link href="/genres" className="text-gold">
            genre
          </Link>
          , check our{' '}
          <Link href="/blog" className="text-gold">
            blog
          </Link>{' '}
          for reviews and guides, or keep track of what you want to watch with our{' '}
          <Link href="/watchlist" className="text-gold">
            watchlist
          </Link>
          .
        </p>
        <p>
          We cover new releases and classics alike. For titles in the public domain or released under
          open licenses, we link directly to a free download. For everything else, we focus on what we
          do best: trailers, cast details, and reviews to help you decide what&apos;s worth your time.
          Details on which titles qualify for direct download, and how we handle copyright concerns, are
          in our{' '}
          <Link href="/dmca" className="text-gold">
            DMCA and copyright policy
          </Link>
          .
        </p>
        <p>
          Movie and show information on this site is provided by{' '}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer" className="text-gold">
            The Movie Database (TMDB)
          </a>
          . MovieNest is not endorsed or certified by TMDB. For details on how we handle your data, see
          our{' '}
          <Link href="/privacy" className="text-gold">
            Privacy Policy
          </Link>
          , and our{' '}
          <Link href="/terms" className="text-gold">
            Terms of Service
          </Link>
          . Questions or feedback are always welcome on our{' '}
          <Link href="/contact" className="text-gold">
            Contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
