// Blog post content lives here as plain data. No CMS needed for this scale.
// Each post is genuinely written for a specific search intent, not filler.
//
// IMPORTANT: if a paragraph string contains double quotes (e.g. HTML like
// class="foo"), wrap that string in backticks, not double quotes, or the
// build will break on the first embedded quote mark.

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
  featureMovieId?: number; // TMDB movie id used for the post's hero/OG image
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'michael-jackson-biopic-starz-streaming-date-billion-dollar-record',
    title: 'Michael Is Streaming August 10: How the $1 Billion Biopic Beat Oppenheimer',
    description:
      'The Michael Jackson biopic Michael hits Starz on August 10, 2026, after becoming the highest grossing biopic in history. Here is what is confirmed and where to watch it.',
    publishedDate: '2026-08-04',
    tags: ['where to watch', 'biopic', 'box office'],
    featureMovieId: 936075,
    sections: [
      {
        paragraphs: [
          "Michael, the Michael Jackson biopic starring his real life nephew Jaafar Jackson, is about to make the jump from theaters to your living room. Lionsgate and Starz confirmed the film begins streaming on August 10, 2026, and it arrives with a genuinely remarkable box office story behind it.",
        ],
      },
      {
        heading: 'When and where you can actually watch it',
        paragraphs: [
          "Michael premieres on Starz starting August 10, 2026, available through the Starz app and Starz streaming and on demand platforms, with a simultaneous linear TV premiere on the Starz cable channel at 7 p.m. ET and PT the same day. If you already have a Starz subscription, no extra step is needed, it will simply be there. Before this, the film had already been available to rent digitally following a June 9, 2026 premium video on demand release, so this Starz debut marks its first home for subscription streaming specifically, not its first appearance at home overall.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/936075" class="text-gold hover:text-gold-light">Michael movie page</a>.`,
        ],
      },
      {
        heading: 'The record it actually broke',
        paragraphs: [
          "Michael opened in theaters on April 24, 2026 to $97.2 million domestically, a debut weekend record for a musical biopic on its own. It kept climbing from there. By mid June, it passed Bohemian Rhapsody's $911 million to become the highest grossing music biopic of all time. By July 14, it crossed the billion dollar mark worldwide entirely, finishing with roughly $372.3 million domestic and just over $1 billion globally.",
          "That total makes Michael the highest grossing biographical film of any kind in box office history, ahead of Oppenheimer. It is also now Lionsgate's single biggest release ever, surpassing every other film the studio has put out.",
        ],
      },
      {
        heading: 'A rare split between critics and audiences',
        paragraphs: [
          "Here is the part that makes this story more interesting than a simple box office headline. Michael sits at just 38 percent with critics on Rotten Tomatoes, a genuinely mixed to negative score. Audiences disagree almost completely, giving it a 97 percent audience score alongside an A- CinemaScore, the kind of gap that shows up when a film connects emotionally with the public in a way that reviews do not fully capture. A billion dollar box office run from a film critics were lukewarm on is rare, and it says something about how much cultural pull Michael Jackson's story and music still carry, decades after his death.",
        ],
      },
      {
        heading: 'Quick summary',
        paragraphs: [
          "Michael streams on Starz starting August 10, 2026, is already available to rent digitally, and now holds the record as the highest grossing biopic in history at over a billion dollars worldwide, all despite a mixed critical reception. If you have Starz, this is one of the easiest big releases of the year to catch up on at home.",
        ],
      },
    ],
  },
  {
    slug: 'spider-man-brand-new-day-box-office-record-avengers-endgame',
    title: 'Spider-Man: Brand New Day Just Broke Avengers: Endgame Box Office Record',
    description:
      'A breakdown of how Spider-Man: Brand New Day became the biggest opening weekend in box office history, beating the record Avengers: Endgame held for seven years.',
    publishedDate: '2026-08-04',
    tags: ['box office', 'spider-man', 'news'],
    featureMovieId: 969681,
    sections: [
      {
        paragraphs: [
          "For seven years, Avengers: Endgame held the record for the biggest domestic opening weekend in movie history. As of this week, that record belongs to Spider-Man: Brand New Day. Here is exactly what happened, with the real numbers, not just headline claims.",
        ],
      },
      {
        heading: 'The final numbers',
        paragraphs: [
          "Spider-Man: Brand New Day closed its opening weekend with $360 million at the domestic box office, according to final Monday numbers from Sony Pictures. That edges past Avengers: Endgame's previous record of $357.1 million from April 2019, a number that had stood untouched since. The two films are now the only movies in history to cross $300 million in a single opening weekend domestically.",
          "Globally, Brand New Day pulled in $932 million over the weekend, its second-best global opening in history behind only Endgame's $1.2 billion. So while it did not beat Endgame worldwide, it beat it where it mattered most for the domestic record books.",
        ],
      },
      {
        heading: 'It broke more than one record',
        paragraphs: [
          "The Thursday night preview screenings alone brought in $72 million, beating Endgame's previous preview record of $60 million. Friday, including those previews, hit $169.8 million, another all time high, topping Endgame's $156.7 million opening day. Saturday added $101.5 million, and the film closed out Sunday stronger than Sony had initially projected, pushing the final total past the $355 million estimate reported over the weekend.",
          "Attendance told a similar story. An estimated 24.1 million people bought tickets over the weekend, a record for the modern box office tracking era, ahead of the 20 million who turned out for Spider-Man: No Way Home in 2021.",
        ],
      },
      {
        heading: 'Why this one connected so hard',
        paragraphs: [
          "Industry forecasters were not predicting this. Boxoffice Pro had projected an opening in the $280 to $300 million range going into the weekend, a number they themselves called optimistic. The film blew past it. Part of that comes down to genuine audience reaction rather than pure hype. Brand New Day is sitting at a 90 percent critic score and a rare 98 percent audience score, the kind of gap that usually signals a movie people are actively telling their friends to go see.",
          "It also helps that this continues a run of steady growth for Tom Holland's Spider-Man specifically. His first solo film, Homecoming, opened to $117 million in 2017. No Way Home more than doubled that with a $260 million domestic debut in 2021. Brand New Day has now nearly tripled where the character started just nine years ago.",
        ],
      },
      {
        heading: 'What this means going forward',
        paragraphs: [
          "Records like this tend to get treated as one off headlines, but the more interesting story is what it says about the theatrical experience right now. This was also, industry wide, the biggest single weekend at the box office ever recorded, with roughly $430 million spent on movie tickets across every film in theaters, not just Spider-Man. That is a real signal that big theatrical events still pull people out of the house in a way that was genuinely in question a few years ago.",
          `You can see our full page for Spider-Man: Brand New Day, including trailer and cast, on our <a href="/movies/969681" class="text-gold hover:text-gold-light">movie page here</a>.`,
        ],
      },
    ],
  },
  {
    slug: 'where-to-watch-the-odyssey-obsession-avatar-aang-devils-mouth-2026',
    title: 'Where to Watch The Odyssey, Obsession, Avatar Aang, and The Devil\'s Mouth',
    description:
      'A clear, current guide to four of 2026 most talked about releases, and exactly where you can legally watch each one right now.',
    publishedDate: '2026-08-03',
    tags: ['where to watch', '2026 movies', 'streaming guide'],
    featureMovieId: 1368337,
    sections: [
      {
        paragraphs: [
          "Not every big 2026 release is stuck in a theaters only window. A couple of these are already streaming right now, while others still have a wait ahead of them. Here is the actual current status of each, as of early August 2026.",
        ],
      },
      {
        heading: 'The Odyssey',
        paragraphs: [
          "Christopher Nolan's adaptation of Homer's epic opened in theaters, including IMAX, on July 17, 2026. As of now it remains a theaters only release, with no digital or streaming date confirmed. Nolan is known for insisting on long exclusive theatrical windows for his films, so based on the pattern set by his previous film Oppenheimer, industry estimates point to a possible digital rental release around mid to late November 2026, with a subscription streaming debut on Peacock likely even further out, possibly early 2027. Nothing here is official yet, so treat these as informed estimates rather than confirmed dates.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/1368337" class="text-gold hover:text-gold-light">The Odyssey page</a>.`,
        ],
      },
      {
        heading: 'Obsession',
        paragraphs: [
          "Obsession, the horror film built around a cursed novelty toy called the One Wish Willow, opened in theaters on May 15, 2026. It has already moved through its theatrical and rental windows and is now available to stream with a Peacock subscription. Under its distribution deal, it is expected to move over to Netflix around November 17, 2026, so if you already have Peacock, now is the easiest time to watch it.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/1339713" class="text-gold hover:text-gold-light">Obsession page</a>.`,
        ],
      },
      {
        heading: 'Avatar Aang: The Last Airbender',
        paragraphs: [
          "This one is the easiest yes on the list. Avatar Aang: The Last Airbender skipped a wide theatrical release entirely and premiered directly on Paramount+ on July 25, 2026, after a leak earlier in the year pushed Paramount to move up its release. It is available right now with any Paramount+ subscription, no waiting required.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/980431" class="text-gold hover:text-gold-light">Avatar Aang: The Last Airbender page</a>.`,
        ],
      },
      {
        heading: 'The Devil\'s Mouth',
        paragraphs: [
          "This survival horror film about a cave diving trip in Thailand gone wrong skipped a traditional theatrical run and premiered straight to Prime Video on July 29, 2026. If you have a Prime Video subscription, it is available to watch right now.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/1481343" class="text-gold hover:text-gold-light">The Devil's Mouth page</a>.`,
        ],
      },
      {
        heading: 'Quick summary',
        paragraphs: [
          "Two of these, Avatar Aang: The Last Airbender and Obsession, are already streaming and easy to watch today. The other two, The Odyssey and The Devil's Mouth, are newer, with The Devil's Mouth already on Prime Video and The Odyssey still theaters only for the time being. We will update this post as official streaming dates get confirmed.",
        ],
      },
    ],
  },
  {
    slug: 'where-to-watch-spider-man-brand-new-day-supergirl-2026',
    title: 'Where to Watch Spider-Man: Brand New Day and Supergirl in 2026',
    description:
      'A clear, up to date guide to the legal ways to watch two of 2026 biggest releases, in theaters and at home.',
    publishedDate: '2026-08-03',
    tags: ['where to watch', '2026 movies', 'streaming guide'],
    featureMovieId: 969681,
    sections: [
      {
        paragraphs: [
          "Two of the biggest releases of 2026 are Spider-Man: Brand New Day and Supergirl, and if you searched for either one, you are probably trying to figure out one simple thing. Can you watch it right now, and if not, when. Here is what is actually confirmed as of early August 2026, not speculation dressed up as fact.",
        ],
      },
      {
        heading: 'Spider-Man: Brand New Day',
        paragraphs: [
          "Spider-Man: Brand New Day, directed by Destin Daniel Cretton and starring Tom Holland, opened in theaters on July 31, 2026. Right now, theaters are the only legal way to watch it. There is no confirmed digital, rental, or streaming date yet.",
          "Based on how Sony has handled previous Spider-Man releases, industry reporting suggests a premium digital rental could arrive sometime around late September to late October 2026, though Sony has not confirmed a date. Sony also has a Pay-1 deal that sends its films to Netflix after their theatrical and rental windows close, and early estimates based on that deal's typical timing point to a possible Netflix debut around late November 2026, though this is an estimate, not an announced date. If you are outside the US, the wait could be longer or shorter depending on your region's separate licensing deals.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/969681" class="text-gold hover:text-gold-light">Spider-Man: Brand New Day page</a>.`,
        ],
      },
      {
        heading: 'Supergirl (2026)',
        paragraphs: [
          "Supergirl, directed by Craig Gillespie and starring Milly Alcock as Kara Zor-El, opened in theaters on June 26, 2026. Unlike Spider-Man, Supergirl has already moved past its theatrical only window. As of early August 2026, you can legally rent or buy it digitally on Prime Video, Apple TV, Google Play, and Fandango at Home. A physical 4K, Blu-ray, and DVD release is set for September 8, 2026.",
          "Supergirl is expected to arrive on HBO Max sometime this fall, since Warner Bros. typically moves its DC titles there, but an official subscription streaming date has not been confirmed yet.",
          `You can see our full page for it, including trailer and cast, on our <a href="/movies/1081003" class="text-gold hover:text-gold-light">Supergirl page</a>.`,
        ],
      },
      {
        heading: 'Why we do not list unofficial download links for these',
        paragraphs: [
          "Both of these are new, actively protected theatrical releases, not public domain films. We only offer direct downloads for titles that are genuinely in the public domain, like the classics on our site. For everything else, including brand new blockbusters like these, we point you toward real legal options and keep this page updated as official dates are announced. Follow our Telegram channel for updates the moment either film gets a confirmed streaming date.",
        ],
      },
    ],
  },
  {
    slug: 'best-public-domain-horror-movies-free-legal',
    title: '7 Public Domain Horror Movies You Can Legally Watch and Download for Free',
    description:
      'A guide to genuinely public domain horror classics, why each one is legally free to download, and where to actually watch them.',
    publishedDate: '2026-08-03',
    tags: ['public domain', 'horror', 'free movies'],
    featureMovieId: 963,
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
