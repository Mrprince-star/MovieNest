import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">Privacy Policy</h1>
      <p className="text-slate-soft font-mono text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-invert max-w-none text-bone/80 leading-relaxed space-y-6">
        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Information We Collect</h2>
          <p>
            {SITE.name} does not require an account to browse. We may automatically collect standard
            technical information such as your browser type, device type, pages visited, and referring
            site, typically through analytics tools.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Cookies &amp; Advertising</h2>
          <p>
            We use third-party advertising (Adsterra) to support the site. Adsterra and its partners may
            use cookies or similar technologies to serve ads based on your visits to this and other
            websites. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Third-Party Content</h2>
          <p>
            Movie and TV metadata (posters, synopses, ratings) is provided by The Movie Database (TMDB).
            Download links point to third-party or archival sources outside our control; we are not
            responsible for their privacy practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href={`mailto:${SITE.contactEmail}`} className="text-gold">{SITE.contactEmail}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
