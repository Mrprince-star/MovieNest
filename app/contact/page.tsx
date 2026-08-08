import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the ${SITE.name} team.`,
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-4">Contact Us</h1>
      <p className="text-bone/80 leading-relaxed mb-10">
        Questions, feedback, or a takedown request? Send us a message below, or reach out directly
        through email or Telegram. If your message is specifically a copyright concern, our{' '}
        <Link href="/dmca" className="text-gold">
          DMCA and copyright policy
        </Link>{' '}
        explains what to include so we can act on it quickly.
      </p>

      <form
        action={SITE.formspreeEndpoint}
        method="POST"
        className="glass-card rounded-xl p-6 sm:p-8 space-y-5 mb-10"
      >
        <div>
          <label htmlFor="name" className="block text-sm text-gold mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-lg bg-panel border border-gold/15 px-4 py-3 text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg bg-panel border border-gold/15 px-4 py-3 text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-gold mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            defaultValue="General Question"
            className="w-full rounded-lg bg-panel border border-gold/15 px-4 py-3 text-bone focus:outline-none focus:border-gold/60"
          >
            <option>General Question</option>
            <option>Feedback / Suggestion</option>
            <option>Report a Broken Link</option>
            <option>Copyright / DMCA Concern</option>
            <option>Advertising Inquiry</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-gold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what's on your mind..."
            className="w-full rounded-lg bg-panel border border-gold/15 px-4 py-3 text-bone placeholder:text-slate-soft focus:outline-none focus:border-gold/60 resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold text-ink px-8 py-3 font-medium hover:bg-gold-light transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="glass-card rounded-xl p-6 space-y-3">
        <p className="text-sm text-slate-soft mb-1">Prefer to reach us directly?</p>
        <p>
          <span className="text-gold">Email:</span>{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="text-bone/80 hover:text-gold">
            {SITE.contactEmail}
          </a>
        </p>
        <p>
          <span className="text-gold">Telegram:</span>{' '}
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone/80 hover:text-gold"
          >
            Join our channel
          </a>
        </p>
      </div>
    </div>
  );
}
