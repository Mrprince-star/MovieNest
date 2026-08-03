import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides, lists, and deep dives on movies and TV from MovieNest.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-3">Blog</h1>
      <p className="text-bone/70 mb-10">
        Guides, lists, and honest takes on movies and TV.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card rounded-xl p-6 block"
          >
            <p className="text-xs font-mono text-slate-soft mb-2">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h2 className="font-display text-2xl tracking-wide mb-2">{post.title}</h2>
            <p className="text-bone/70">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
