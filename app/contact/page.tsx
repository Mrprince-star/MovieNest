import type { Metadata } from 'next';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the ${SITE.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-6">Contact Us</h1>
      <p className="text-bone/80 leading-relaxed mb-8">
        Questions, feedback, or a takedown request? Reach out any time.
      </p>
      <div className="glass-card rounded-xl p-6 space-y-3">
        <p>
          <span className="text-gold">Email:</span>{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="text-bone/80 hover:text-gold">
            {SITE.contactEmail}
          </a>
        </p>
        <p>
          <span className="text-gold">Telegram:</span>{' '}
          <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-bone/80 hover:text-gold">
            Join our channel
          </a>
        </p>
      </div>
    </div>
  );
}
