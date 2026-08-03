// Blog post content lives here as plain data. No CMS needed for this scale.
// Each post is genuinely written for a specific search intent, not filler.

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string; // ISO format
  tags: string[];
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'best-public-domain-horror-movies-free-legal',
    title: '7 Public Domain Horror Movies You Can Legally Watch and Download for Free',
    description:
      'A guide to genuinely public domain horror classics, why each one is legally free to download, and where to actually watch them.',
    publishedDate: '2026-08-03',
    tags: ['public domain', 'horror', 'free movies'],
    sections: [
      {
        paragraphs: [
          "If you searched for free horror movies, you have probably run into a lot of sites offering pirated copies of films that are very much still under copyright. That is not what this list is. Every title below is genuinely in the public domain in the United States, for specific and documented legal reasons, which means downloading and watching them is completely legal. No sketchy workaround required.",
        ],
      },
      {
        heading: '1. Night of the Living Dead (1968)',
        paragraphs: [
          "George Romero's Night of the Living Dead is public domain because of an accident, not a choice. When the distributor changed the film's title before release, the new prints lost their copyright notice. Under the copyright law of the time, that single mistake sent the film straight into the public domain the day it opened in theaters.",
          `It also happens to be the film that invented the modern zombie genre as we know it. Slow, shambling, flesh eating undead did not really exist as a horror archetype before this. You can watch it and read more on our <a href="/movies/963" class="text-gold hover:text-gold-light">Night of the Living Dead page</a>.`,
        ],
      },
      {
        heading: '2. Nosferatu (1922)',
        paragraphs: [
          "Nosferatu is public domain because someone tried to destroy it. German studio Prana Film adapted Bram Stoker's Dracula without buying the rights, changed the names, and got sued into oblivion by Stoker's widow. A court ordered every copy destroyed. A few prints survived abroad, and because the original copyright was never properly enforced internationally, it is free to watch in the US today.",
          `It is also one of the most visually influential horror films ever made. Count Orlok's shadow climbing a staircase has been copied more times than almost any single shot in film history. Full details are on our <a href="/movies/426" class="text-gold hover:text-gold-light">Nosferatu page</a>.`,
        ],
      },
      {
        heading: '3. The Cabinet of Dr. Caligari (1920)',
        paragraphs: [
          "This German expressionist film is widely considered the first true horror film, built entirely around warped, nightmarish set design rather than jump scares. Its US copyright was never properly renewed, which is why it sits in the public domain today.",
        ],
      },
      {
        heading: '4. White Zombie (1932)',
        paragraphs: [
          "Often cited as the first feature length zombie film, made years before Romero redefined the genre. Bela Lugosi plays a voodoo master controlling the undead on a Haitian sugar plantation. Like many films from this era, its copyright lapsed without renewal, placing it in the public domain.",
        ],
      },
      {
        heading: '5. Carnival of Souls (1962)',
        paragraphs: [
          "A low budget, genuinely unsettling film about a woman who survives a car accident and is then haunted by ghostly figures. It bombed on release and was mostly forgotten until film scholars rediscovered it decades later. It fell into the public domain after its copyright was not renewed.",
        ],
      },
      {
        heading: '6. The Last Man on Earth (1964)',
        paragraphs: [
          "Vincent Price stars in this adaptation of Richard Matheson's novel I Am Legend, about the last human survivor in a world of plague infected creatures. It heavily influenced later zombie and vampire apocalypse films. Its US copyright was not properly renewed, so it is legally free to watch today.",
        ],
      },
      {
        heading: '7. House on Haunted Hill (1959)',
        paragraphs: [
          "Vincent Price again, this time as a millionaire who offers guests money to survive a night in a haunted mansion. Campy, fun, and genuinely influential on the haunted house genre. Like several films on this list, it entered the public domain after its copyright was not renewed.",
        ],
      },
      {
        heading: 'Why do so many old films end up public domain?',
        paragraphs: [
          "Under older US copyright law, a film's copyright had to be actively renewed after a set number of years, or it expired automatically. Studios sometimes simply forgot, especially for films they did not expect to remain valuable. That is how so many genuinely good films from the 1920s through the 1960s ended up freely available today, decades before more recent copyright law changes extended protection terms significantly.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() -
      new Date(a.publishedDate).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
