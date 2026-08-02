import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="font-mono text-gold text-sm tracking-[0.3em] uppercase mb-4">404</p>
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-4">
        This one&apos;s not in the nest.
      </h1>
      <p className="text-bone/70 mb-8">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 font-medium hover:bg-gold-light transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
