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
        question: "Is Nosferatu (1922) really public domain and legal to download?",
        answer:
          "Yes. Due to how its original copyright was handled internationally after a lawsuit from Bram Stoker's estate, Nosferatu is recognized as public domain in the United States, meaning it can be freely and legally downloaded and shared.",
      },
      {
        question: "Is Nosferatu the same story as Dracula?",
        answer:
          "It's an unauthorized adaptation of Stoker's Dracula with the character names and some plot points changed — Count Dracula becomes Count Orlok, for example — after the studio failed to secure the rights.",
      },
      {
        question: "Why did the film almost get completely destroyed?",
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
        question: "Is Metropolis actually free and legal to watch or download?",
        answer:
          "Yes, Metropolis (1927) is in the public domain and can be legally downloaded and shared, which is why you can find it archived on sites like archive.org.",
      },
      {
        question: "Why do different versions of Metropolis have different lengths?",
        answer:
          "The film was cut down after its original release and large sections were lost for decades. A near-complete print discovered in Argentina in 2008 restored about 25 minutes, so restorations released before and after that discovery vary in length.",
      },
      {
        question: "Why is Metropolis considered important today?",
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
        question: "Why is Night of the Living Dead public domain?",
        answer:
          "A copyright notice was accidentally omitted from prints when the distributor changed the film's title before release. Under the copyright rules in effect in 1968, that mistake caused the film to enter the public domain immediately.",
      },
      {
        question: "Is it really free and legal to watch or download?",
        answer:
          "Yes — because of its public domain status, it can be legally downloaded, streamed, and shared without restriction, which is why it appears on so many free movie archives.",
      },
      {
        question: "Did this movie invent the modern zombie genre?",
        answer:
          "It's widely credited as the film that established the modern conventions of zombie horror — slow-moving, flesh-eating undead — that most zombie media since has built on.",
      },
    ],
  },

  // His Girl Friday (1940)
  3085: {
    review: [
      "His Girl Friday moves faster than almost any comedy made before or since. Director Howard Hawks had his actors overlap their dialogue on purpose, cutting people off mid sentence the way real conversations actually work, and the effect is still startling nearly ninety years later. The film reworks the play The Front Page by turning the lead reporter character into a woman, Hildy Johnson, which sharpens every scene into a tug of war between her ex husband editor and her new fiance.",
      "It also happens to be public domain for a fairly mundane reason. Studios at the time had to actively file paperwork to renew a film's copyright after a set number of years, and this one simply was not renewed, sending a genuine A list studio comedy into the public domain decades before most people expect that to happen.",
    ],
    faqs: [
      {
        question: "Is His Girl Friday really public domain and free to watch?",
        answer:
          "Yes. Its copyright was not renewed after the required term, which under the copyright law of the time meant it fell into the public domain and can be legally downloaded and shared today.",
      },
      {
        question: "Why does everyone talk so fast in this movie?",
        answer:
          "Director Howard Hawks deliberately had actors overlap and talk over each other to make the dialogue feel more natural and rapid, a technique that became one of the film's most famous trademarks.",
      },
      {
        question: "Is His Girl Friday based on a real play?",
        answer:
          "Yes, it's adapted from the 1928 stage play The Front Page, with the major change of turning the lead reporter role into a woman for this version.",
      },
    ],
  },

  // Charade (1963)
  4808: {
    review: [
      "Charade is often called the best Hitchcock movie Alfred Hitchcock never actually made. It stars Cary Grant and Audrey Hepburn in a Paris set story that slides between comedy, romance, and genuine thriller tension, with a plot involving stolen money and a rotating cast of suspicious characters that keeps you guessing who to trust until the end.",
      "What makes its public domain status notable is that this is a much glossier, later studio film than most public domain titles. It ended up free due to a clerical error, the copyright notice on early prints was missing the actual word Copyright, just showing the symbol and date, which under the law at the time was enough to invalidate the protection entirely.",
    ],
    faqs: [
      {
        question: "Is Charade really public domain and legal to download?",
        answer:
          "Yes. A printing error on its original copyright notice, missing the required word Copyright, caused it to enter the public domain despite being a major studio release.",
      },
      {
        question: "Why did such a big studio film end up public domain?",
        answer:
          "A technical mistake in how the copyright notice was printed on early prints invalidated the copyright under the rules in place in 1963, something that would not happen under today's copyright law.",
      },
      {
        question: "Is Charade connected to Alfred Hitchcock?",
        answer:
          "Not officially. It was directed by Stanley Donen, but its blend of romance, comedy, and suspense is so similar to Hitchcock's style that critics have nicknamed it his best uncredited film.",
      },
    ],
  },

  // The General (1926)
  961: {
    review: [
      "The General is widely considered Buster Keaton's masterpiece, and by many critics one of the greatest films ever made, full stop. Keaton performed his own stunts, including sequences involving a full sized moving train, with no special effects trickery, which is part of why the physical comedy still holds up as genuinely impressive rather than dated.",
      "It's loosely based on a real Civil War era locomotive chase, and while it did not do well on its initial release, its reputation has only grown over the decades. Like many silent films from this era, it fell into the public domain after its copyright was not renewed.",
    ],
    faqs: [
      {
        question: "Is The General really public domain?",
        answer:
          "Yes, its copyright was not renewed after the required term, placing it in the public domain, which is why it can be freely downloaded and watched today.",
      },
      {
        question: "Did Buster Keaton really do his own stunts?",
        answer:
          "Yes, including dangerous sequences involving a full sized train, without stunt doubles or the special effects techniques available to filmmakers today.",
      },
      {
        question: "Is The General based on a true story?",
        answer:
          "It's loosely inspired by a real Civil War era train chase known as the Great Locomotive Chase, though the film takes significant creative liberties with the actual events.",
      },
    ],
  },

  // Detour (1945)
  20367: {
    review: [
      "Detour is proof that a great film does not need a real budget. Shot in about six days on threadbare sets, it tells a bleak, paranoid story of a hitchhiker whose road trip spirals into a nightmare of bad luck and worse decisions. Critic Roger Ebert included it in his Great Movies collection specifically because of how much genuine dread it manages to create despite its obvious limitations.",
      "Ann Savage's performance as Vera is the film's most talked about element, a genuinely unsettling presence that elevates the material well beyond its budget. Like many films from this era, its copyright was not properly renewed, placing it in the public domain today.",
    ],
    faqs: [
      {
        question: "Is Detour public domain and free to watch?",
        answer:
          "Yes, its copyright was not renewed after the required term, which placed it in the public domain and makes it legal to download and share today.",
      },
      {
        question: "Why does this film look so rough technically?",
        answer:
          "It was made on an extremely small budget in about six days, with sparse sets and limited production value, which was typical for low budget films of this era known as B pictures.",
      },
      {
        question: "Is Detour worth watching despite its low budget?",
        answer:
          "Many film critics and historians consider it one of the best examples of film noir precisely because of how much tension it creates despite its limitations, and it has been preserved in the US National Film Registry.",
      },
    ],
  },

  // A Trip to the Moon (1902)
  775: {
    review: [
      "A Trip to the Moon is where science fiction cinema effectively begins. Made by French filmmaker Georges Melies in 1902, its image of a rocket landing in the eye of a very unhappy looking moon face is one of the most reproduced images in all of film history, recognizable even to people who have never seen the actual film.",
      "At around 13 to 16 minutes depending on the print, it is a quick watch, but a genuinely important one. Melies pioneered many of the special effects techniques, like stop motion substitution and hand painted color, that filmmakers would build on for decades. Its public domain status comes simply from its age, films from this era predate modern copyright terms entirely.",
    ],
    faqs: [
      {
        question: "Is A Trip to the Moon public domain?",
        answer:
          "Yes. Due to its age, made in 1902, it is in the public domain in the United States and can be freely downloaded and shared.",
      },
      {
        question: "How long is A Trip to the Moon?",
        answer:
          "It runs approximately 13 to 16 minutes depending on the specific print and frame rate used, making it a quick watch compared to feature length films.",
      },
      {
        question: "Why is this film historically important?",
        answer:
          "It's widely regarded as one of the first true science fiction films and pioneered special effects techniques, like stop motion substitution, that influenced decades of filmmaking after it.",
      },
    ],
  },

  // The Phantom of the Opera (1925)
  964: {
    review: [
      "The 1925 Phantom of the Opera is best remembered today for one thing above all else, Lon Chaney's makeup. Chaney designed and applied his own ghoulish transformation and kept it a closely guarded secret, reportedly even from the studio, so that the film's unmasking scene genuinely shocked audiences at its premiere in a way that's hard to recreate now that the image is so widely known.",
      "Based on Gaston Leroux's novel, it predates the famous stage musical by decades and tells a considerably darker, more horror focused version of the story. Like many silent era films, its copyright was not properly renewed, placing it in the public domain today.",
    ],
    faqs: [
      {
        question: "Is this Phantom of the Opera public domain?",
        answer:
          "Yes, its copyright was not renewed after the required term, placing it in the public domain, which is why it can be freely downloaded and watched today.",
      },
      {
        question: "Is this the same story as the famous musical?",
        answer:
          "It's based on the same original novel by Gaston Leroux, but this 1925 silent film predates Andrew Lloyd Webber's musical by decades and takes a darker, more straightforwardly horror focused approach to the story.",
      },
      {
        question: "Why is Lon Chaney's makeup in this film so famous?",
        answer:
          "Chaney designed and applied the makeup himself and kept the full look secret before release, so the reveal genuinely shocked 1925 audiences and became one of the most iconic moments in silent horror cinema.",
      },
    ],
  },
};

export function getReview(tmdbId: number): ReviewEntry | null {
  return REVIEWS[tmdbId] ?? null;
}
