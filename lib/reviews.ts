// Original written content for public-domain catalog titles.
// Keyed by TMDB movie ID (matches entries in lib/catalog.ts).
// This is genuine site-original analysis + FAQ content, distinct from
// TMDB's synopsis — the goal is unique, citable content search engines
// and AI answer engines can actually surface, rather than duplicated
// third-party metadata.

export type ReviewEntry = {
  review: string[]; // paragraphs
  faqs: { question: string; answer: string }[];
};

export const REVIEWS: Record<number, ReviewEntry> = {
  // Nosferatu (1922)
  426: {
    review: [
      "Nosferatu exists because of a legal loophole, and that history is almost as interesting as the film itself. German studio Prana Film adapted Bram Stoker's Dracula without securing the rights, renaming the count \"Orlok\" and shifting a few plot details in a doomed attempt to dodge a lawsuit. Stoker's widow sued anyway, won, and a court ordered every copy destroyed. A handful of prints survived in other countries, and because of how the original copyright was never properly enforced internationally, the film is now in the public domain in the US — free to watch precisely because someone once tried to erase it.",
      "Visually, it's still startling more than a century later. Director F.W. Murnau leaned on expressionist shadow-play rather than makeup or special effects — Count Orlok's silhouette climbing a staircase is one of the most copied images in horror cinema, referenced everywhere from Salem's Lot to SpongeBob. If you've only seen modern vampire films, this is the blueprint they're all quietly borrowing from.",
    ],
    faqs: [
      {
        question: 'Is Nosferatu (1922) really public domain and legal to download?',
        answer:
          "Yes. Due to how its original copyright was handled internationally after a lawsuit from Bram Stoker's estate, Nosferatu is recognized as public domain in the United States, meaning it can be freely and legally downloaded and shared.",
      },
      {
        question: 'Is Nosferatu the same story as Dracula?',
        answer:
          "It's an unauthorized adaptation of Stoker's Dracula with the character names and some plot points changed — Count Dracula becomes Count Orlok, for example — after the studio failed to secure the rights.",
      },
      {
        question: 'Why did the film almost get completely destroyed?',
        answer:
          "A court ordered all prints destroyed after Bram Stoker's widow successfully sued for copyright infringement. Only a small number of copies that had already been distributed abroad survived.",
      },
    ],
  },

  // Metropolis (1927)
  738: {
    review: [
      "Metropolis is where modern science fiction cinema really begins. Fritz Lang built an entire vertical city — workers toiling underground, the wealthy living in towers above — and used it to argue about industrialization and class inequality nearly a century before those became blockbuster themes. The robot Maria, gleaming and unsettling, remains one of the most imitated designs in film; you can trace a direct line from her to C-3PO and beyond.",
      "The version you'll find today usually isn't the original cut. Metropolis was heavily trimmed after its 1927 premiere, and large chunks were considered lost for decades — until a damaged print turned up in a museum in Buenos Aires in 2008, restoring about 25 minutes previously thought gone forever. So depending on which restoration you watch, the runtime and some scenes will differ; that's not an error, it's film history still being pieced back together.",
    ],
    faqs: [
      {
        question: 'Is Metropolis actually free and legal to watch or download?',
        answer:
          'Yes, Metropolis (1927) is in the public domain and can be legally downloaded and shared, which is why you can find it archived on sites like archive.org.',
      },
      {
        question: 'Why do different versions of Metropolis have different lengths?',
        answer:
          "The film was cut down after its original release and large sections were lost for decades. A near-complete print discovered in Argentina in 2008 restored about 25 minutes, so restorations released before and after that discovery vary in length.",
      },
      {
        question: 'Why is Metropolis considered important today?',
        answer:
          "It's widely credited as one of the first major science-fiction films and a huge influence on the visual language of the genre — its city design and robot character have been referenced in countless later films.",
      },
    ],
  },

  // Night of the Living Dead (1968)
  963: {
    review: [
      "Night of the Living Dead is public domain by accident, not by design — and that accident is why it's one of the most widely available horror films ever made. When distributor Walter Reade Organization changed the film's title before release, they dropped the copyright notice from the new prints. Under the copyright law of the time, that omission meant the film entered the public domain the moment it hit theaters. George Romero, its director, reportedly never saw a dime from its enormous and lasting popularity as a result.",
      "The film itself essentially invented the modern zombie genre — slow, shambling, flesh-eating undead didn't really exist as a horror archetype before this. Made on a shoestring budget in black and white, it's also been read by critics for decades as commentary on the social tensions of its era, though Romero himself was often cautious about confirming intentional messaging. Watch it expecting grainy, low-budget dread rather than gore — its power is in atmosphere and pacing, not spectacle.",
    ],
    faqs: [
      {
        question: 'Why is Night of the Living Dead public domain?',
        answer:
          'A copyright notice was accidentally omitted from prints when the distributor changed the film\'s title before release. Under the copyright rules in effect in 1968, that mistake caused the film to enter the public domain immediately.',
      },
      {
        question: 'Is it really free and legal to watch or download?',
        answer:
          'Yes — because of its public domain status, it can be legally downloaded, streamed, and shared without restriction, which is why it appears on so many free movie archives.',
      },
      {
        question: 'Did this movie invent the modern zombie genre?',
        answer:
          "It's widely credited as the film that established the modern conventions of zombie horror — slow-moving, flesh-eating undead — that most zombie media since has built on.",
      },
    ],
  },
};

export function getReview(tmdbId: number): ReviewEntry | null {
  return REVIEWS[tmdbId] ?? null;
}
