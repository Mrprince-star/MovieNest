import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE.name}.`,
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-2">Privacy Policy</h1>
      <p className="text-slate-soft font-mono text-sm mb-8">Last updated: November 4, 2026</p>

      <div className="prose prose-invert max-w-none text-bone/80 leading-relaxed space-y-6">
        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Information We Collect</h2>
          <p>
            {SITE.name} does not require an account to browse. When you use the site, technical and
            usage information such as your browser type, device information, pages visited, and
            referring website may be collected through analytics technologies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Analytics</h2>
          <p>
            We use Google Analytics 4 to understand how visitors use {SITE.name}, measure site
            performance, and improve our content and navigation. Google Analytics may use cookies
            or similar technologies and may process information such as online identifiers and
            interaction data under Google's applicable terms and privacy practices.
          </p>
          <p>
            You can manage cookies through your browser settings. Blocking cookies may affect some
            website functionality or the information available to our analytics reports.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Contact Form</h2>
          <p>
            If you contact us through the website form, we receive the information you submit,
            including your name, email address, subject, and message. The form is processed by
            Formspree, which handles the submission on our behalf. Please avoid including passwords,
            payment details, or other sensitive information in a message.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Advertising</h2>
          <p>
            MovieNest does not currently load third-party advertising network scripts. If advertising
            services are introduced, we will update this policy to explain the relevant providers,
            technologies, and available privacy controls before those services are enabled.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-wide text-gold mb-2">Third-Party Services and Links</h2>
          <p>
            Movie and TV metadata, including posters, synopses, and ratings, is provided by The Movie
            Database (TMDB). The site also links to external services and archival sources that are
            not operated by MovieNest. Those third parties have their own privacy practices and terms.
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
