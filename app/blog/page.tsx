import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { getDetails, IMG } from '@/lib/tmdb';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides, lists, and deep dives on movies and TV from MovieNest.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogIndexPage() {
  const posts = getAllPosts();

  const postsWithImages = await Promise.all(
    posts.map(async (post) => {
      let image: string | null = null;
      if (post.featureMovieId) {
        const movie = await getDetails('movie', String(post.featureMovieId));
        if (movie?.backdrop_path) {
          image = IMG.backdrop(movie.backdrop_path, 'w780');
        }
      }
      return { ...post, image };
    })
  );

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-display text-4xl sm:text-5xl tracking-wide mb-3">Blog</h1>
      <p className="text-bone/70 mb-10">
        Guides, lists, and honest takes on movies and TV.
      </p>

      <div className="space-y-6">
        {postsWithImages.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card rounded-xl overflow-hidden block sm:flex"
          >
            {post.image && (
              <div className="relative w-full h-48 sm:h-auto sm:w-64 shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
            )}
            <div className="p-6">
              <p className="text-xs font-mono text-slate-soft mb-2">
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className="font-display text-2xl tracking-wide mb-2">{post.title}</h2>
              <p className="text-bone/70">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
