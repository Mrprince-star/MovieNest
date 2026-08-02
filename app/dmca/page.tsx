import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'DMCA / Copyright Policy',
  description: `Copyright and takedown policy for ${SITE.name}.`,
};

export default function DMCAPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">DMCA / Copyright Policy</h1>
      <p className="text-slate-soft font-mono text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none text-bone/80 leading-relaxed space-y-6">
        <p>
          This is a starting template — have it reviewed before publishing.
        </p>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Our Approach</h2>
          <p>
            {SITE.name} only links directly to films that are in the public domain or released under an
            open license permitting free distribution. For all other titles, we publish original written
            reviews, cast information, and trailers hosted by their official rights holders (e.g.
            YouTube) — we do not host or link to unauthorized copies of copyrighted films.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Reporting a Concern</h2>
          <p>
            If you believe a title listed as public domain or openly licensed is in fact still under
            copyright, or that any other content on this site infringes your rights, please contact us
            with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The specific title and URL on our site</li>
            <li>A description of your copyright ownership</li>
            <li>Your contact information</li>
          </ul>
          <p>
            Send reports to{' '}
            <a href={`mailto:${SITE.contactEmail}`} className="text-gold">{SITE.contactEmail}</a>. We
            will review and remove any confirmed infringing link promptly.
          </p>
        </section>
      </div>
    </div>
  );
}
