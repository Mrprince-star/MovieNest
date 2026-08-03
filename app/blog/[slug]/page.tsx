import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { SITE } from '@/lib/config';
import AdBanner from '@/components/AdBanner';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedDate,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Organization',
      name: SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo.png`,
      },
    },
  };

  return (
    <div className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12">
        <Link href="/blog" className="text-sm text-gold hover:text-gold-light mb-6 inline-block">
          ← Back to Blog
        </Link>

        <p className="text-xs font-mono text-slate-soft mb-3">
          {new Date(post.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-8">{post.title}</h1>

        <div className="space-y-8 text-bone/80 leading-relaxed">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-display text-2xl tracking-wide text-gold mb-3">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mb-4" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-panel border border-gold/10 px-3 py-1 text-xs text-bone/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <AdBanner variant="native" />
    </div>
  );
}
