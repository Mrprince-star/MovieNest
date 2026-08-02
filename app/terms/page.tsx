import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">Terms of Service</h1>
      <p className="text-slate-soft font-mono text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none text-bone/80 leading-relaxed space-y-6">
        <p>
          This is a starting template — have it reviewed before publishing. By using {SITE.name}, you
          agree to the terms below.
        </p>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Use of the Site</h2>
          <p>
            {SITE.name} provides movie and TV reviews, trailers, and recommendations. Where a title is in
            the public domain or otherwise openly licensed, we link to a download source. We do not host
            copyrighted files ourselves.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Third-Party Links</h2>
          <p>
            This site links to third-party sources (including archival sites and our Telegram channel).
            We are not responsible for the content, availability, or practices of those third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">No Warranty</h2>
          <p>
            Content is provided &ldquo;as is&rdquo; without warranties of any kind. Ratings and metadata
            are sourced from TMDB and may not always be accurate or current.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site means you accept the current version.</p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Contact</h2>
          <p>
            Questions? Email{' '}
            <a href={`mailto:${SITE.contactEmail}`} className="text-gold">{SITE.contactEmail}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
