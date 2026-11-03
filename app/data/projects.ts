import type { StaticImageData } from "next/image";

import orageCover from "../../public/orage/hero.webp";
import orageHome from "../../public/orage/app-home.webp";
import orageForecast from "../../public/orage/app-forecast-calendar.webp";
import orageSeason from "../../public/orage/app-season.webp";
import orageJournalSky from "../../public/orage/app-journal-sky-placed.webp";
import orageJournalMoods from "../../public/orage/app-journal-moods-dragging.webp";
import orageJournalSaved from "../../public/orage/app-journal-saved.webp";
import orageWelcome from "../../public/orage/app-onboarding-welcome.webp";
import orageLastStorm from "../../public/orage/app-onboarding-last-storm.webp";
import orageCycleLength from "../../public/orage/app-onboarding-cycle-length.webp";
import orageLanding from "../../public/orage/landing.webp";
import orageLandingAdvice from "../../public/orage/landing-advice.webp";
import orageSkyStorm from "../../public/orage/sky-day-02-a.webp";
import orageSkySun from "../../public/orage/sky-day-14-a.webp";
import orageSkyAutumn from "../../public/orage/sky-day-22-b.webp";

import zuCover from "../../public/zuitzerland/cover.webp";
import zuLogo from "../../public/zuitzerland/logo.webp";
import zuColors from "../../public/zuitzerland/colors.webp";
import zuSummary from "../../public/zuitzerland/brand-summary.webp";
import zuLandingHero from "../../public/zuitzerland/landing-hero.webp";
import zuLandingProgram from "../../public/zuitzerland/landing-program.webp";
import zuOnsite from "../../public/zuitzerland/merch-onsite.webp";
import zuPosters from "../../public/zuitzerland/merch-posters.webp";
import zuSignage from "../../public/zuitzerland/merch-signage.webp";
import zuKits from "../../public/zuitzerland/merch-kits.webp";
import zuTiers from "../../public/zuitzerland/merch-tiers.webp";
import zuCards from "../../public/zuitzerland/merch-cards.webp";
import zuStickers from "../../public/zuitzerland/merch-stickers.webp";
import zuBags from "../../public/zuitzerland/merch-bags.webp";
import zuHoodie from "../../public/zuitzerland/merch-hoodie.webp";
import zuDcombCover from "../../public/zuitzerland/dcombinator-cover.webp";
import zuDcombManifesto from "../../public/zuitzerland/dcombinator-manifesto.webp";
import zuDcombFlywheel from "../../public/zuitzerland/dcombinator-flywheel.webp";

import venaCover from "../../public/venalabs/cover.webp";
import venaLanding from "../../public/venalabs/landing-learn.webp";
import venaDiscover from "../../public/venalabs/app-discover.webp";
import venaAirdrops from "../../public/venalabs/app-airdrops.webp";
import venaCourse from "../../public/venalabs/app-course.webp";
import venaRoutines from "../../public/venalabs/app-routines.webp";
import venaCards from "../../public/venalabs/components-cards.webp";
import venaRewards from "../../public/venalabs/components-rewards.webp";
import venaIllustrations from "../../public/venalabs/illustrations.webp";

import ethCover from "../../public/ethzurich/cover.webp";
import ethSummary from "../../public/ethzurich/brand-summary.webp";
import ethLogo from "../../public/ethzurich/logo.webp";
import ethLogomark from "../../public/ethzurich/logomark.webp";
import ethLogomarkGrid from "../../public/ethzurich/logomark-grid.webp";
import ethPrimary from "../../public/ethzurich/primary-color.webp";
import ethPalette from "../../public/ethzurich/palette.webp";
import ethTypeDisplay from "../../public/ethzurich/type-display.webp";
import ethTypeHierarchy from "../../public/ethzurich/type-hierarchy.webp";
import ethPatterns from "../../public/ethzurich/patterns.webp";
import ethPatternsUsage from "../../public/ethzurich/patterns-usage.webp";
import ethBillboard from "../../public/ethzurich/billboard.webp";
import ethTote from "../../public/ethzurich/tote.webp";
import ethSpeaker from "../../public/ethzurich/speaker.webp";

import trooperCover from "../../public/trooper/trooper.png";
import trooperP1 from "../../public/trooper/problem1.png";
import trooperP2 from "../../public/trooper/problem2.png";
import trooperP3 from "../../public/trooper/problem3.png";
import trooper01 from "../../public/trooper/trooper01.webp";
import trooper02 from "../../public/trooper/trooper02.webp";
import trooper03 from "../../public/trooper/trooper03.webp";

import familyCover from "../../public/family/family.png";
import fam01 from "../../public/family/fam01.svg";
import fam02 from "../../public/family/fam02.svg";
import fam03 from "../../public/family/fam03.svg";
import famdesignsystem from "../../public/family/famdesignsystem.svg";
import famlanding from "../../public/family/famlanding.svg";
import fammobile from "../../public/family/fammobile.png";

import looterCover from "../../public/looter/looter.png";
import looterpitch from "../../public/looter/looter.webp";
import looterlogo from "../../public/looter/looterlogo.webp";
import looterswap from "../../public/looter/looterswap.webp";
import looterlanding from "../../public/looter/looter03.webp";
import looterlogoanimated from "../../public/looter/logoanimated.gif";
import cardanimated from "../../public/looter/cardanimated.gif";
import btnanimated from "../../public/looter/btnanimated.gif";
import key from "../../public/looter/keygif.gif";
import chest540 from "../../public/looter/chest540.gif";
import looterblur from "../../public/looter/looterblur.png";
import step1 from "../../public/looter/step1.png";
import step2 from "../../public/looter/step2.png";
import step3 from "../../public/looter/step3.png";

/*
 * Every project on the site lives here.
 *
 * To add a project:
 *   1. Drop its images in /public/<slug>/ and import them above.
 *   2. Add an entry to `projects` below. Order = order on the home page.
 *   3. Every project gets a page at /work/<slug>. Fill in as much of `caseStudy` as you have;
 *      empty sections are simply not shown.
 */

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  /** Needed for animated GIFs so Next doesn't freeze them on the first frame. */
  unoptimized?: boolean;
};

export type Phase = {
  name: string;
  intro?: string;
  items?: { title: string; text: string }[];
  outro?: string;
};

export type Highlight = {
  title: string;
  images: ProjectImage[];
  text?: string;
  issue?: string;
  solution?: string;
};

/** Every section is optional: the page only renders what a project has. */
export type CaseStudy = {
  /** "How might we…" questions. */
  challenges?: string[];
  process?: Phase[];
  highlightsTitle?: string;
  highlights?: Highlight[];
  /** Full-width images at the end of the page. */
  gallery?: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  /** One-line positioning, shown under the title. */
  tagline: string;
  year?: string;
  client?: string;
  /** Live site or store link, shown in the project meta. */
  link?: { href: string; label: string };
  /** Used on cards and as the full-screen hero of the project page. */
  cover: ProjectImage;
  /** What I did on the project, e.g. "Brand & product designer". */
  role: string;
  deliverables: string[];
  tags: string[];
  tools: string[];
  /** Short paragraph at the top of the project page. */
  summary: string;
  /** The guiding question shown on featured cards. */
  question?: string;
  objectives?: string[];
  /** Featured projects get a large tile in the home grid. */
  featured?: boolean;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "orage",
    title: "Orage",
    tagline: "A cycle tracker you check like the weather",
    year: "2026",
    client: "Self-initiated product",
    link: { href: "https://orage.app", label: "orage.app (coming soon)" },
    cover: { src: orageCover, alt: "Watercolor painting of a storm at sea, Orage's signature visual" },
    role: "Founder, brand & product designer",
    deliverables: [
      "Name, logo & brand identity",
      "Mobile app UX/UI",
      "Sky-based visual system",
      "Tone of voice (EN / FR)",
      "Landing page & blog",
    ],
    tags: ["branding", "logo design", "mobile app ux/ui", "landing page design"],
    tools: ["Figma", "React Native", "Astro"],
    featured: true,
    question: "What if checking your cycle felt as calm, and as private, as checking the weather?",
    summary:
      "Orage (French for “storm”) is a period tracker that turns your cycle into a sky. Every day has its own watercolor sky, every phase is a season, and your period is the storm. No charts, no pink, no account: everything stays on your phone. It's my own product, and I designed all of it, from the name and logo to the app, the landing page and the voice.",
    objectives: [
      "Replace clinical charts and pink clichés with a language anyone can read at a glance: weather and seasons.",
      "Make it safe to glance at in public. A reminder about a storm reveals nothing on a lock screen.",
      "Collect nothing: no account, no analytics, no server, and no internet permission in the release build.",
      "Keep it gentle: no forced daily logging, no paywalls, no guilt.",
      "Ship everywhere, F-Droid included, with no Google libraries.",
    ],
    caseStudy: {
      challenges: [
        "How might we make a cycle readable at a glance, without a single chart?",
        "How might we forecast something uncertain without promising a date we can't keep?",
        "How might we earn the trust of people who've been burned by period apps selling their data?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "After ten years with a popular tracker, I changed phones and stopped before reinstalling it. I had no idea where a decade of my data had gone, and the app put a paywall in front of almost every action. Research backed the unease: in 2022, Mozilla put a privacy warning on 18 of the 25 period apps it reviewed. The brief wrote itself: a tracker that respects your body and your data, and that you actually enjoy opening. Designing brands is my job, so I started with the brand.",
        },
        {
          name: "Design",
          items: [
            {
              title: "A weather language",
              text: "Your period is the storm. Each phase is a season: winter, spring, summer, autumn. The season is always the headline; clinical names only appear as small labels, for those who want them.",
            },
            {
              title: "A living sky",
              text: "65 watercolor skies, one matched to each day of your cycle. When a storm runs late, the sky gets heavier, day after day, instead of shouting a number at you.",
            },
            {
              title: "A soft, airy identity",
              text: "A hand-drawn script wordmark with a sun and a cloud. Fraunces for display, Inter for the interface, and exactly one saturated color: the little orange sun dot. Even delete uses clay instead of red.",
            },
            {
              title: "Words that protect you",
              text: "Weather words only, never medical ones. “Storm likely tomorrow.” works on any lock screen, in any meeting, on any shared tablet.",
            },
          ],
        },
        {
          name: "Refine",
          intro:
            "Every round of testing on real devices removed something. The forecast range band greyed out most of the month, so it went. Mood chips, a 3/10-day switch and colorful tiles from the first mockups went too: no color on the Season screen except the sky. Forecast copy moved from a countdown to “Storm around Sunday.”, and a late storm is simply “running late”, never a count of days. Reduced motion, screen-reader labels and font scaling were checked along the way.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "Set up in three questions",
          images: [
            { src: orageWelcome, alt: "Orage welcome screen: Your personal weather app" },
            { src: orageLastStorm, alt: "Onboarding: pick your last storm on a range calendar" },
            { src: orageCycleLength, alt: "Onboarding: days between storms, with an 'It varies a lot' option" },
          ],
          text: "When did your last storm start, how long did it last, how many days between storms? That's all Orage asks. Every question has a way out for real life (“I'm not sure of the exact day”, “It varies a lot”). There's no account to create.",
        },
        {
          title: "Today, as a forecast",
          images: [
            { src: orageHome, alt: "Orage home: Summer, day 14 of 28, three-day forecast and today's advice" },
            { src: orageForecast, alt: "Orage forecast calendar with season-colored days and the next storm range" },
            { src: orageSeason, alt: "Orage season screen: what's happening in early summer, with eat, move and plan advice" },
          ],
          text: "Home shows today's season and sky, a three-day forecast in weather words, and one tap to log a storm. The calendar colors each day by season and learns from your own history once you've logged three cycles. Season turns each phase into everyday advice: what to eat, how to move, how to plan your week.",
        },
        {
          title: "A journal that lives in the present",
          images: [
            { src: orageJournalSky, alt: "Journal: today's sky placed as a polaroid" },
            { src: orageJournalMoods, alt: "Journal: dragging a mood into one of four circles" },
            { src: orageJournalSaved, alt: "Journal: the saved, locked page with sky, moods and a handwritten note" },
          ],
          text: "Place today's sky like a polaroid, drag up to four moods into the circles, write a note in a handwritten font. Only today can be written, and pages lock once saved, because a journal records how you feel now. On days you'd rather not, “I don't feel journaling today” lets the page rest.",
        },
        {
          title: "65 skies, one for every day",
          images: [
            { src: orageSkyStorm, alt: "Watercolor storm sky" },
            { src: orageSkySun, alt: "Watercolor full-sun sky" },
            { src: orageSkyAutumn, alt: "Watercolor autumn sunset sky" },
          ],
          text: "Storms, clearing skies, bright sun, soft autumn light. The sky replaces the chart: you know where you are in your cycle before you read a single word.",
        },
        {
          title: "A landing page that keeps the app's promise",
          images: [
            { src: orageLanding, alt: "orage.app hero: Check your cycle like you check the weather" },
            { src: orageLandingAdvice, alt: "orage.app advice section" },
          ],
          text: "orage.app opens on a storm at sea, with a scroll-driven season dial that walks through a cycle and rain falling at the same angle as the paintings. The first version looked like a generic website, so I threw it away and rebuilt it product-first. It runs zero analytics and makes zero third-party requests: privacy before you've even downloaded the app.",
        },
      ],
    },
  },
  {
    slug: "zuitzerland",
    title: "Zuitzerland",
    tagline: "A brand for a Swiss network state, from logo to merch kits",
    year: "2025",
    client: "Zuitzerland",
    cover: { src: zuCover, alt: "Zuitzerland merch flat lay: cap, bottle, notebook, mug and card in lilac" },
    role: "Brand designer",
    deliverables: [
      "Logo & brand guidelines",
      "Illustration & pattern system",
      "Event landing page",
      "Merch strategy & on-site signage",
      "Pitch deck (dCombinator)",
    ],
    tags: ["branding", "logo design", "landing page design", "merch", "pitch deck"],
    tools: ["Figma", "Figma Slides"],
    question: "How do you make 700 years of Swiss democracy feel like the future?",
    summary:
      "Zuitzerland is a Swiss network state: a month-long residency where builders, researchers and thinkers test new ways to govern, fund and live together. It needed a brand that felt both Swiss and solarpunk, serious enough for policymakers and warm enough for a community. I built the whole identity, then carried it everywhere the community would see it: the website, the venue, the welcome kits and the deck for what comes next.",
    objectives: [
      "Create an identity that holds technology and nature, ambition and warmth, in one system.",
      "Make it flexible enough to run a month of events, rooms and talks without a designer on every asset.",
      "Turn attendees into ambassadors with merch they actually want to keep.",
      "Give the team a pitch deck that sells the next chapter: a permanent builder hub.",
    ],
    caseStudy: {
      challenges: [
        "How might we make a governance experiment feel welcoming instead of technical?",
        "How might we build one brand that works on a slide, a lanyard, a hoodie and a building wall?",
        "How might we tell residents, team and guests apart without breaking the family look?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "I started from the brand's own tension: advanced technology and social well-being, Swiss tradition and a new kind of society. That became four values (responsible innovation, open collaboration, transparency and trust, positive impact) and a visual direction: solarpunk by day, lunarpunk by night.",
        },
        {
          name: "Design",
          items: [
            {
              title: "A wordmark with a horizon",
              text: "A custom Zuitzerland wordmark and a compact Z monogram, set in a round “A Swiss Network State · Future Society Sandbox” seal for stamps, stickers and badges.",
            },
            {
              title: "Night to bloom",
              text: "A gradient from deep night blue through electric blue to orchid pink, with a soft lime and an off-white. Green and blue for nature and technology, pink for the human touch.",
            },
            {
              title: "A world to step into",
              text: "Glass domes on alpine lakes, open landscapes, organic architecture: one illustrated universe that sets the scene on the website, the welcome cards and the deck.",
            },
            {
              title: "A sparkle pattern",
              text: "A four-pointed star pattern in every brand color gives any surface, from tape to tote bags, an instant Zuitzerland look.",
            },
          ],
        },
        {
          name: "Refine",
          intro:
            "Then I rolled it out: a landing page that sells the residency in one sentence, a program people can scan in seconds, signage for every room, and a merch strategy with three color-coded tiers. Each new asset tested the system, and the guidelines grew with it.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "An identity built on a tension",
          images: [
            { src: zuLogo, alt: "Zuitzerland logo and Z monogram on light and gradient backgrounds" },
            { src: zuColors, alt: "Zuitzerland color palette: night blue to orchid gradient, lime and off-white" },
            { src: zuSummary, alt: "Zuitzerland brand summary: essence, personality, values and visual elements" },
          ],
          text: "The wordmark, the Z monogram, the night-to-bloom gradient and the brand summary that keeps everyone on the same page. Every choice traces back to one idea: high-tech and human, side by side.",
        },
        {
          title: "A landing page that sells the residency in one line",
          images: [
            { src: zuLandingHero, alt: "Zuitzerland landing page hero: 700 years of Swiss democracy rewired for the web3 era" },
            { src: zuLandingProgram, alt: "Zuitzerland program section, week by week" },
          ],
          text: "“700 years of Swiss democracy, rewired for the web3 era.” The hero says what it is, the illustration says how it feels, and two buttons cover the only questions that matter: who is it for, and how do I join. The program reads week by week, so a busy visitor finds their track in seconds.",
        },
        {
          title: "Wayfinding that feels like the brand",
          images: [
            { src: zuSignage, alt: "Room signage: Room B, Solarpunk talks" },
            { src: zuPosters, alt: "Framed Zuitzerland posters on a lime wall" },
            { src: zuOnsite, alt: "Branded bean bags in the Zuitzerland lounge" },
          ],
          text: "Room signs, schedules with QR codes, framed posters and lounge pieces. A month of events means people get lost, so every sign does a job, and the pattern makes the venue feel like one place.",
        },
        {
          title: "Three tiers, one family",
          images: [
            { src: zuTiers, alt: "Three badge colors: Zuiteam in lime, Zuiticipants in pink, Zuitguest in lilac" },
            { src: zuKits, alt: "Zuitzerland welcome kit boxes in lime, pink and lilac" },
            { src: zuCards, alt: "Zuitzerland NFC card and holder" },
          ],
          text: "Team, participants and guests each get their own color, so you know who to ask for help at a glance. Every attendee receives a curated kit: t-shirt, cap, NFC card holder, badge and lanyard, bottle, tote and sticker pack.",
        },
        {
          title: "Merch people keep",
          images: [
            { src: zuStickers, alt: "Zuitzerland stickers on a laptop" },
            { src: zuBags, alt: "Drawstring bags in lilac, lime and pink" },
            { src: zuHoodie, alt: "Folded hoodie with a pink hood and the Zuitzerland seal" },
          ],
          text: "Good merch is distribution. The seal, the wordmark and the sparkle pattern work on stickers, bags and hoodies, so the brand keeps traveling long after the residency ends.",
        },
        {
          title: "A deck for the next chapter",
          images: [
            { src: zuDcombCover, alt: "dCombinator pitch deck cover" },
            { src: zuDcombManifesto, alt: "dCombinator manifesto slide" },
            { src: zuDcombFlywheel, alt: "dCombinator legitimacy flywheel diagram" },
          ],
          text: "dCombinator is Zuitzerland's next step: a permanent accelerator and builder hub for the d/acc ecosystem, anchored in Switzerland. I designed the deck with the same visual language, turning dense ideas like a legitimacy flywheel into diagrams an investor can read in one look.",
        },
      ],
    },
  },
  {
    slug: "venalabs",
    title: "VenaLabs",
    tagline: "Learn, farm, earn, repeat: a Web3 learning app with game-like rewards",
    year: "2025",
    client: "VenaLabs",
    cover: { src: venaCover, alt: "VenaLabs landing page hero with a glowing 3D logo: Learn, farm, earn, repeat" },
    role: "Product designer",
    deliverables: ["Web app UX/UI", "Design system", "Rewards & gamification", "Landing page", "Interactive prototype"],
    tags: ["ux/ui design", "design system", "landing page design", "gamification"],
    tools: ["Figma"],
    question: "How do you turn airdrop hunting into a habit people enjoy, instead of a chore?",
    summary:
      "VenaLabs helps crypto newcomers learn Web3 and catch the airdrops worth their time, with courses, step-by-step airdrop guides and daily routines picked by experts. The content was strong; the experience didn't make people come back. I designed the web app, its design system, a rewards loop that makes progress feel tangible, and the landing page that sells it.",
    objectives: [
      "Bring courses, airdrops and routines into one clear dashboard.",
      "Make progress visible and rewarding, so users come back every day.",
      "Make the premium offer obvious without getting in the way of free users.",
      "Build a design system the team can grow without me.",
    ],
    caseStudy: {
      challenges: [
        "How might we make a dense Web3 topic feel approachable to beginners?",
        "How might we reward consistency without turning the app into a casino?",
        "How might we keep one layout working for courses, airdrops and routines?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "I mapped the three things users come for (learn, farm airdrops, keep a routine) and the states each one goes through, from not connected to premium. That gave one structure for the whole product: navigation on the left, content in the middle, your progress and to-dos always on the right.",
        },
        {
          name: "Design",
          intro:
            "A dark, focused interface with icy blue accents, and one card system for every content type, in big, medium and small sizes and default, hover and done states. On top of it, a rewards layer: VenaPoints, chests and a daily streak flame, each with an active and a locked state, so you always see what you've earned and what's next.",
        },
        {
          name: "Refine",
          intro:
            "I built an interactive prototype to test the core flows end to end: connecting, starting a course, following an airdrop step by step, and claiming rewards. The details that came out of it, like breadcrumbs inside courses and a to-do list that remembers where you stopped, went straight into the system.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "One dashboard, three ways to grow",
          images: [
            { src: venaDiscover, alt: "VenaLabs Discover page with featured courses, airdrops and routines" },
            { src: venaAirdrops, alt: "VenaLabs Airdrops page with filters and airdrop cards" },
          ],
          text: "Discover brings everything together; Airdrops, Courses and Routines each get their own page with tabs and filters. The side panel never moves: your level, your rewards and today's to-do are always one glance away.",
        },
        {
          title: "Learning paths, not lists",
          images: [
            { src: venaCourse, alt: "VenaLabs course path with chapters as a tree" },
            { src: venaRoutines, alt: "VenaLabs Routines page" },
          ],
          text: "Courses unfold as a path of chapters, each with the rewards you'll earn, so you always know how far you are from the next milestone. Routines turn repeated airdrop tasks into a weekly checklist.",
        },
        {
          title: "Rewards you can almost touch",
          images: [
            { src: venaRewards, alt: "VenaLabs reward components: VenaPoints, chest and streak flame, active and locked" },
            { src: venaIllustrations, alt: "VenaLabs 3D illustration set: coin, parachute drop, crystal, book, lightning, chest and flames" },
          ],
          text: "VenaPoints, chests and a streak flame in gold, silver and color. Locked rewards fade to silver, so the next goal is always visible. The same 3D world runs through the app and the marketing.",
        },
        {
          title: "A system the team can grow",
          images: [{ src: venaCards, alt: "VenaLabs card components in every type, size and state" }],
          text: "Every card type in three sizes and every state, plus buttons, inputs, tabs, filters, breadcrumbs and navigation, all as Figma components. New content types slot in without a new design.",
        },
        {
          title: "A landing page that shows the product",
          images: [{ src: venaLanding, alt: "VenaLabs landing page Learn & Earn section built from real app components" }],
          text: "“Learn, farm, earn, repeat.” The landing page is built from real product components, so visitors see the app before they sign up, with clear sections for how it works, confirmed airdrops and the community.",
        },
      ],
    },
  },
  {
    slug: "ethzurich",
    title: "ETHZürich",
    tagline: "A bold identity for Zürich's community Ethereum conference",
    year: "2026",
    client: "ETHZürich",
    cover: { src: ethCover, alt: "ETHZürich key visual: oversized ETHEREUM ZÜRICH type with the red logomark" },
    role: "Brand designer",
    deliverables: ["Logo & logomark", "Color & typography system", "Pattern system", "Brand guidelines", "Event applications"],
    tags: ["branding", "logo design", "brand guidelines"],
    tools: ["Figma", "Figma Slides"],
    question: "How do you brand a builder conference so it stands out in a city full of banks?",
    summary:
      "ETHZürich is a community-driven Ethereum conference in Zürich, bringing developers, researchers, founders and builders together. It needed an identity loud enough for billboards and flexible enough for a speaker card. I designed the logo, colors, type, patterns and the guidelines that let the team produce everything else.",
    objectives: [
      "Root the brand in both Ethereum and Zürich.",
      "Stand out from the polished, corporate look of Swiss finance.",
      "Give the team a system they can apply on their own, from slides to signage.",
    ],
    caseStudy: {
      challenges: [
        "How might we make one mark say Zürich, Ethereum and conversation at the same time?",
        "How might we keep a loud identity readable and consistent across every format?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "The brand had to reflect the builder community: curious, experimental and collaborative, where technology, community and academic thinking meet. Openness, innovation and collaboration became the brief.",
        },
        {
          name: "Design",
          items: [
            {
              title: "A mark made of the city",
              text: "The logomark folds four ideas into one shape: Zürich's flag, the Ethereum diamond, the letter Z and a speech bubble for the talks.",
            },
            {
              title: "Convergence Blue",
              text: "A primary blue born from Ethereum's blue and the deep blue of the Zürich flag, backed by Builder Red, Alpine Light, Limmat Pink and Midnight Chain.",
            },
            {
              title: "Type with a voice",
              text: "Chaney Extended for headlines that fill a billboard, Overused Grotesk for everything people actually read.",
            },
            {
              title: "Patterns from the mark",
              text: "Fragments of the logomark become patterns for backgrounds, frames and graphic accents, so any surface can carry the brand.",
            },
          ],
        },
        {
          name: "Refine",
          intro:
            "I tested the system on real applications, a billboard, a tote bag, a speaker card and the event key visual, and wrote the rules into the guidelines: clear space, color ratios, type hierarchy and pattern usage.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "Four ideas, one mark",
          images: [
            { src: ethLogo, alt: "ETHZürich logo lockup in blue" },
            { src: ethLogomark, alt: "ETHZürich logomark construction: Zürich, Ethereum, Z letter and talk bubble" },
            { src: ethLogomarkGrid, alt: "ETHZürich logomark in every color combination" },
          ],
          text: "Zürich's diagonal, the Ethereum diamond, a Z and a speech bubble. The logomark works on its own as an app icon or a sticker, and the stacked wordmark gives the full name real presence.",
        },
        {
          title: "Colors with a story",
          images: [
            { src: ethPrimary, alt: "Convergence Blue, the ETHZürich primary color" },
            { src: ethPalette, alt: "ETHZürich palette: Builder Red, Alpine Light, Limmat Pink, Midnight Chain" },
          ],
          text: "Every color is named after the place or the community: Convergence Blue, Builder Red for the hacker energy, Alpine Light, Limmat Pink after the river, Midnight Chain for depth.",
        },
        {
          title: "Loud headlines, calm reading",
          images: [
            { src: ethTypeDisplay, alt: "Chaney display typeface specimen" },
            { src: ethTypeHierarchy, alt: "ETHZürich type hierarchy from H1 to captions" },
          ],
          text: "A wide display face for impact, a neutral grotesk for clarity, and a five-level hierarchy so every speaker card and schedule looks like it belongs.",
        },
        {
          title: "From guidelines to the street",
          images: [
            { src: ethBillboard, alt: "ETHZürich billboard mockup" },
            { src: ethTote, alt: "ETHZürich tote bag" },
            { src: ethSpeaker, alt: "ETHZürich speaker card" },
          ],
          text: "A billboard, a tote bag and a speaker card, built only from the rules in the guidelines. If the system works there, it works everywhere.",
        },
      ],
      gallery: [
        { src: ethSummary, alt: "ETHZürich brand summary with a blue pattern" },
        { src: ethPatterns, alt: "ETHZürich patterns in red, blue and pink" },
        { src: ethPatternsUsage, alt: "ETHZürich pattern usage guidelines" },
      ],
    },
  },
  {
    slug: "trooper",
    title: "Trooper",
    tagline: "A job market where gamers get hired, and get paid safely",
    cover: { src: trooperCover, alt: "Trooper app screens: gamer profile, job listings and landing page" },
    role: "Brand & product designer",
    deliverables: ["Logo & visual identity", "3D mascot", "Landing page", "Web app UX/UI"],
    tags: ["branding", "logo design", "ux/ui design", "3D design"],
    tools: ["Figma", "Blender"],
    featured: true,
    question:
      "How do you build trust between strangers on a blockchain job market, without asking gamers to read a whitepaper?",
    summary:
      "Trooper connects gamers, guilds and studios in the play-to-earn economy. Companies post paid missions, players apply with a profile that proves what they can do, and a smart-contract escrow makes sure everyone gets paid. I designed the brand, the 3D mascot and the whole product, from first wireframes to polished UI.",
    objectives: [
      "Give Trooper a bold, memorable identity, personified by a 3D mascot.",
      "Shape the platform around how the gaming industry actually hires: missions, players and guilds.",
      "Let profiles do the matching, with skills, badges and track record readable at a glance.",
      "Make payments trustless with an escrow that acts as a neutral third party.",
      "Weave the Trooper token into the product's economy without turning it into a barrier.",
    ],
    caseStudy: {
      challenges: [
        "How might we create an intuitive platform that seamlessly connects gamers and gaming professionals?",
        "How might we implement a blockchain-based escrow system that ensures secure and efficient transactions?",
        "How might we incorporate gamification elements that engage users and build trust within the community?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "Trooper started as an ambitious idea: a place where gamers find paid work in the play-to-earn market, and where studios find skilled players and developers. Before drawing anything, I mapped what the product had to get right:",
          items: [
            { title: "Branding", text: "A unique identity that speaks to gamers and studios alike." },
            { title: "User profiles", text: "Profiles rich enough to hire from, for players and professionals." },
            { title: "Job listings", text: "Posting and applying in a few steps, with no friction." },
            { title: "Escrow", text: "A secure, blockchain-based escrow for every payment." },
            { title: "Gamification", text: "A reputation system that builds trust and keeps people engaged." },
          ],
          outro:
            "Research covered the target audience, the competitive landscape and the latest trends in blockchain and pro gaming. Workshops with the founders kept the vision and the product goals aligned from day one.",
        },
        {
          name: "Design",
          items: [
            {
              title: "Branding",
              text: "A bold, futuristic identity that reflects both the innovation of blockchain and the excitement of gaming. Logo, typography and color were chosen to stand out in a crowded, noisy space, and the 3D mascot gives the brand a face players remember.",
            },
            {
              title: "User profiles",
              text: "Profiles act as a player's CV: skill badges, past missions, favorite games, and achievements verified through gaming platforms and in-game rewards.",
            },
            {
              title: "Job listings",
              text: "Studios list a mission in minutes, and players find the right one with search and filters designed for how gamers actually look for work.",
            },
            {
              title: "Escrow",
              text: "When a studio posts a job, its funds are locked in a smart contract. Players know the money is there before they start. As a bonus, Trooper can stake the locked funds and earn interest, which adds value for companies.",
            },
            {
              title: "Gamification",
              text: "Completed jobs and positive feedback earn badges and XP. Reliability becomes visible at a glance, which is what trust looks like between strangers.",
            },
          ],
        },
        {
          name: "Refine",
          items: [
            {
              title: "User testing",
              text: "Several rounds of testing showed where the experience held up and where it didn't, and fed straight back into the design.",
            },
            {
              title: "Iterations",
              text: "Each round sharpened the interface: better search and filters, and clearer review and reputation signals.",
            },
            {
              title: "Polish",
              text: "A final pass on consistency and detail across every screen, so the product felt as strong as the brand.",
            },
          ],
        },
      ],
      highlightsTitle: "What testing revealed, and how I fixed it",
      highlights: [
        {
          title: "Studios couldn't tell applicants apart",
          images: [{ src: trooperP1, alt: "Trooper applicant review screen with player comments and badges" }],
          issue:
            "Studios hiring several players for one mission struggled to filter applications. XP and badges alone weren't enough to separate a reliable player from a lucky one.",
          solution:
            "I added detailed reviews with comments for each player, so studios can read what previous employers thought. Badges were reworked to surface specific skills and achievements instead of a generic score.",
        },
        {
          title: "Will anyone see my job post?",
          images: [{ src: trooperP2, alt: "Trooper job post with social sharing options" }],
          issue:
            "Early users worried that a brand-new platform wouldn't attract enough gamers to their missions.",
          solution:
            "One-tap sharing of any job post to social media. Every studio becomes a distribution channel, and listings reach players far beyond the platform.",
        },
        {
          title: "Finding anything took too long",
          images: [{ src: trooperP3, alt: "Trooper global search results across gamers, guilds and jobs" }],
          issue:
            "Users wanted a single place to search for gamers, guilds and jobs. Without it, finding a specific profile or opportunity meant hunting through separate sections.",
          solution:
            "A global search across the whole platform, with filters for skills, game genres, job types and guild specialties. Results from every category show up on one page that's easy to scan.",
        },
      ],
      gallery: [
        { src: trooper01, alt: "Trooper interface overview" },
        { src: trooper02, alt: "Trooper interface details" },
        { src: trooper03, alt: "Trooper brand and mascot" },
      ],
    },
  },
  {
    slug: "looter",
    title: "Looter",
    tagline: "A DeFi exchange with the soul of a treasure hunt",
    cover: { src: looterCover, alt: "Looter brand visuals with 3D mascot and DEX interface" },
    role: "Brand & product designer",
    deliverables: ["Logo & visual identity", "3D mascot & assets", "dApp UX/UI", "Investor pitch deck", "Social media kit"],
    tags: ["branding", "logo design", "dapp design", "3D design", "pitch deck"],
    tools: ["Figma", "Blender", "Marvelous Designer"],
    featured: true,
    question:
      "How do you make complex DeFi mechanics feel like a game worth playing, and a project worth investing in?",
    summary:
      "Looter is a deflationary DEX where trading is a strategy game: users build yield strategies, mine liquidity and compete for loot. The team needed a brand loud enough for the Degen crowd and an interface clear enough to make its tokenomics click. I designed the identity, the 3D world, the dApp, the investor pitch deck and the social kit.",
    objectives: [
      "Create a striking identity, personified by a 3D mascot.",
      "Design an immersive experience that matches the culture and energy of the Degen community.",
      "Win investors over with a sharp, persuasive pitch deck.",
      "Carry the brand onto social media with banners that feel native to crypto Twitter.",
    ],
    caseStudy: {
      challenges: [
        "How might we make complex tokenomics clear and engaging?",
        "How might we design a visual identity that's both sophisticated and appealing?",
        "How might we integrate gamification seamlessly into the user experience?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "DeFi has a retention problem: products are powerful but confusing, and most users leave before they get it. Research and user interviews pointed to three things Looter had to nail: tokenomics people can understand, an identity people want to belong to, and game mechanics that feel natural rather than bolted on.",
        },
        {
          name: "Design",
          intro:
            "I built the brand on neon and cyberpunk aesthetics: sophisticated enough to be taken seriously, playful enough for the Degen crowd. In the product, every complex mechanic got a visual cue and an intuitive UI element, so users understand what they're doing while enjoying the game around it.",
        },
        {
          name: "Refine",
          intro:
            "Several rounds of user testing and iterative design sessions tuned every detail, from the color system to the micro-interactions. The result balances strategy, engagement and visual punch.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "A guided swap that never traps you",
          images: [
            { src: step1, alt: "Swap flow, step 1" },
            { src: step2, alt: "Swap flow, step 2" },
            { src: step3, alt: "Swap flow, step 3" },
          ],
          text: "Swapping is broken into clear steps, paired with real-time notifications. Users aren't stuck watching a spinner: they can keep exploring the app while the transaction runs, and the notification tells them when it lands.",
        },
        {
          title: "Motion that sells the brand",
          images: [
            { src: looterlogoanimated, alt: "Animated Looter logo", unoptimized: true },
            { src: cardanimated, alt: "Animated LOOT / ETH card", unoptimized: true },
            { src: btnanimated, alt: "Animated Open App button", unoptimized: true },
          ],
          text: "The animated logo, the living LOOT / ETH card and the fluid \"Open App\" button make the product instantly recognizable. They invite interaction in the app and stop the scroll on social media, where a DeFi project wins or loses its community.",
        },
        {
          title: "A 3D world to belong to",
          images: [
            { src: key, alt: "3D cryptographic key", unoptimized: true },
            { src: chest540, alt: "3D glowing loot chest", unoptimized: true },
            { src: looterblur, alt: "3D character in hoodie and AR goggles", unoptimized: true },
          ],
          text: "A glowing cube etched with circuits stands for the decentralized tech underneath. An intricate key stands for the cryptography that secures access. A hooded figure in AR goggles is the Looter user: tech-savvy, forward-thinking and always online. Together they turn a DEX into a world people want to be part of.",
        },
      ],
      gallery: [
        { src: looterpitch, alt: "Looter pitch deck" },
        { src: looterlogo, alt: "Looter logo" },
        { src: looterlanding, alt: "Looter landing page" },
        { src: looterswap, alt: "Looter swap interface" },
      ],
    },
  },
  {
    slug: "family",
    title: "Family",
    tagline: "Buy, own and resell fashion, physical and on-chain",
    cover: { src: familyCover, alt: "Family marketplace screens" },
    role: "Product designer",
    deliverables: ["Landing page", "Mobile app UX/UI", "NFC scan & ownership flows", "Resale marketplace & chat", "Design system"],
    tags: ["ux/ui design", "landing page design", "design system"],
    tools: ["Figma"],
    featured: true,
    question:
      "How do you make NFC-certified ownership and on-chain resale feel as simple as any online shop?",
    summary:
      "Family sells clothing collections where every garment carries a chip linked to an NFT. Scan it, and ownership is certified on-chain. Resell it, and ownership moves with it. My job was to make all of that feel as easy as shopping on any e-commerce site, so customers never have to think about the blockchain underneath.",
    objectives: [
      "Let people buy collections, physical or NFT, as easily as on any online store.",
      "Build one ecosystem where physical and digital fashion live side by side.",
      "Certify ownership with NFC tags and NFTs without putting blockchain hurdles in front of users.",
      "Let owners resell their pieces on a second-hand market, right inside the app.",
    ],
    caseStudy: {
      challenges: [
        "How might we create a seamless user experience that merges traditional e-commerce functionalities with Web3 technologies?",
        "How might we ensure the smooth integration of RFID chip scanning within the buying and selling processes?",
        "How might we create an engaging and secure secondary market for clothing items?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "The hard part wasn't the shop, it was the link between a physical garment and its digital twin. I started by mapping every moment a customer touches the chip: first scan, proof of ownership, resale, transfer. Each one had to feel secure, but never technical.",
        },
        {
          name: "Design",
          intro:
            "The UI borrows the patterns people already know from clothing marketplaces, then adds the Web3 layer quietly on top. A Vinted-style live chat lets buyers and sellers negotiate price and delivery, and dedicated flows for buying and selling second-hand put chip scanning exactly where it's needed, and nowhere else.",
        },
        {
          name: "Refine",
          intro:
            "I tested every scenario, from scanning a garment for the first time to handing over ownership on the resale market, working closely with potential users to remove friction. The result is a marketplace that feels cutting-edge and familiar at the same time.",
        },
      ],
      highlightsTitle: "Design highlights",
      highlights: [
        {
          title: "Scan, chat, sell",
          images: [
            { src: fam01, alt: "RFID scanning screen" },
            { src: fam02, alt: "Garment detail with NFT ownership" },
            { src: fam03, alt: "Live chat negotiation screen" },
          ],
          text: "One scan links a physical garment to its NFT, proving authenticity and adding it to your wardrobe in the app. Live chat lets buyers and sellers talk directly during a sale, which builds trust and makes negotiating easy. Together they make resale feel as natural as on any second-hand app.",
        },
        {
          title: "A brand system for two worlds",
          images: [{ src: famdesignsystem, alt: "Family design system" }],
          text: "Logo, typography, color and iconography were designed to speak to Web3 natives and mainstream shoppers alike. A shared design system keeps the landing page and the app consistent across every touchpoint.",
        },
      ],
      gallery: [
        { src: famlanding, alt: "Family landing page" },
        { src: fammobile, alt: "Family mobile screens" },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Previous / next project, wrapping around. */
export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return {
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
}
