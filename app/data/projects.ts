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
import zuSlideSpeaker from "../../public/zuitzerland/slide-speaker.webp";
import zuSlidePartners from "../../public/zuitzerland/slide-partners.webp";
import zuSlideAgenda from "../../public/zuitzerland/slide-agenda.webp";
import zuSocialTicket from "../../public/zuitzerland/social-ticket.webp";
import zuPosters from "../../public/zuitzerland/print-posters.webp";
import zuSignage from "../../public/zuitzerland/print-signage.webp";
import zuStickers from "../../public/zuitzerland/print-stickers.webp";
import zuKits from "../../public/zuitzerland/merch-kits.webp";
import zuTiers from "../../public/zuitzerland/merch-tiers.webp";
import zuHoodie from "../../public/zuitzerland/merch-hoodie.webp";

import venaCover from "../../public/venalabs/cover.webp";
import venaDiscover from "../../public/venalabs/discover.webp";
import venaCourses from "../../public/venalabs/courses.webp";
import venaAirdrops from "../../public/venalabs/airdrops.webp";
import venaRoutines from "../../public/venalabs/routines.webp";
import venaBattlePass from "../../public/venalabs/battle-pass.webp";
import venaArchitecture from "../../public/venalabs/architecture.webp";
import venaV1Discover from "../../public/venalabs/v1-discover.webp";
import venaV1Airdrops from "../../public/venalabs/v1-airdrops.webp";
import venaV1Routines from "../../public/venalabs/v1-routines.webp";
import venaV1Courses from "../../public/venalabs/v1-courses.webp";

import ethCover from "../../public/ethzurich/cover.webp";
import ethCrowd from "../../public/ethzurich/illustration-crowd.webp";
import ethManifesto from "../../public/ethzurich/illustration-manifesto.webp";
import ethVenue from "../../public/ethzurich/illustration-venue.webp";
import ethMeetups from "../../public/ethzurich/illustration-meetups.webp";
import ethAudience from "../../public/ethzurich/illustration-audience.webp";
import ethStage from "../../public/ethzurich/illustration-stage.webp";
import ethCity from "../../public/ethzurich/illustration-city.webp";
import ethEther from "../../public/ethzurich/illustration-ether.webp";
import ethPeople from "../../public/ethzurich/illustration-people.webp";
import ethPosterType from "../../public/ethzurich/poster-type.webp";
import ethPosterEth from "../../public/ethzurich/poster-eth.webp";
import ethPosterHand from "../../public/ethzurich/poster-hand.webp";
import ethPosterCrowd from "../../public/ethzurich/poster-crowd.webp";
import ethPosterStage from "../../public/ethzurich/poster-stage.webp";
import ethPosterPeople from "../../public/ethzurich/poster-people.webp";
import ethLogo from "../../public/ethzurich/logo.webp";
import ethLogomark from "../../public/ethzurich/logomark.webp";
import ethPalette from "../../public/ethzurich/palette.webp";
import ethType from "../../public/ethzurich/type.webp";
import ethKeyVisual from "../../public/ethzurich/key-visual.webp";
import ethBillboard from "../../public/ethzurich/billboard.webp";
import ethTote from "../../public/ethzurich/tote.webp";
import ethWebsite from "../../public/ethzurich/website.webp";

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
  /** The v1 screen this highlight replaces; renders a v1 / v2 comparison. */
  before?: ProjectImage;
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
    tagline: "Brand identity and event design for a Swiss network state",
    year: "2025",
    client: "Zuitzerland",
    link: { href: "https://www.zuitzerland.ch/", label: "zuitzerland.ch" },
    cover: { src: zuCover, alt: "Zuitzerland illustration: glass domes on an alpine lake" },
    role: "Brand & event designer",
    deliverables: ["Brand identity", "Speaker & stage slides", "Posters & prints", "Social media visuals", "Merch & welcome kits"],
    tags: ["branding", "logo design", "event design", "print", "merch"],
    tools: ["Figma", "Figma Slides"],
    question: "How do you keep one brand consistent across a month of events, every screen, print and piece of merch?",
    summary:
      "Zuitzerland is a Swiss network state: a month-long residency in May 2025 where builders, researchers and thinkers explored new ways to govern and live together, ending with a summit. I designed the brand identity, then stayed on as the event's designer: speaker slides, agendas, posters, signage, social visuals and merch, so every touchpoint looked like the same world.",
    objectives: [
      "Create an identity that feels both Swiss and future-facing, serious and warm.",
      "Keep a month of daily events visually consistent, with a fast turnaround.",
      "Make attendees proud to wear and share the brand.",
    ],
    caseStudy: {
      process: [
        {
          name: "Brand",
          intro:
            "A custom wordmark, a Z monogram and a round “A Swiss Network State · Future Society Sandbox” seal. A palette that runs from night blue to orchid pink, with a soft lime, and a four-pointed sparkle pattern that turns any surface into Zuitzerland.",
        },
        {
          name: "Event",
          intro:
            "During the residency, I was the team's on-call designer. Templates did the heavy lifting: one speaker slide, one panel slide, one agenda, so any talk could go on stage the same day it was booked.",
        },
        {
          name: "Print & merch",
          intro:
            "Posters, room signage, stickers and color-coded welcome kits for team, participants and guests. The same seal and pattern on every piece, so the venue felt like one place.",
        },
      ],
      highlightsTitle: "Selected work",
      highlights: [
        {
          title: "The identity",
          images: [
            { src: zuLogo, alt: "Zuitzerland logo and Z monogram on light and gradient backgrounds" },
            { src: zuColors, alt: "Zuitzerland color palette" },
          ],
          text: "The wordmark and the Z monogram, on light and on the signature gradient. Green and blue for nature and technology, pink for the human touch.",
        },
        {
          title: "On stage",
          images: [
            { src: zuSlideSpeaker, alt: "Zuitzerland speaker slide template with camera and presentation areas" },
            { src: zuSlideAgenda, alt: "Zuitzerland agenda slide" },
            { src: zuSlidePartners, alt: "Zuitzerland partners slide" },
          ],
          text: "Livestream layouts with room for the camera and the speaker's deck, daily agendas and a partner wall. Built as templates, so the team could fill them in minutes between sessions.",
        },
        {
          title: "Posters & prints",
          images: [
            { src: zuPosters, alt: "Framed Zuitzerland posters" },
            { src: zuSignage, alt: "Room signage: Room B, Solarpunk talks" },
            { src: zuStickers, alt: "Zuitzerland stickers on a laptop" },
          ],
          text: "Posters, room signs with schedules and QR codes, and a sticker sheet. A month of events means people get lost, so every print had a job to do.",
        },
        {
          title: "Social",
          images: [{ src: zuSocialTicket, alt: "“You're going!” ticket visual for the Zuitzerland summit" }],
          text: "Announcement visuals like this “You're going!” ticket for the summit: made to be shared, so attendees did the promotion for us.",
        },
        {
          title: "Merch & welcome kits",
          images: [
            { src: zuTiers, alt: "Three badge colors for team, participants and guests" },
            { src: zuKits, alt: "Zuitzerland welcome kit boxes" },
            { src: zuHoodie, alt: "Zuitzerland hoodie" },
          ],
          text: "Lime for the team, pink for participants, lilac for guests: you know who to ask for help at a glance. Every attendee got a kit with a t-shirt, cap, badge, bottle, tote and stickers.",
        },
      ],
    },
  },
  {
    slug: "venalabs",
    title: "VenaLabs",
    tagline: "A full redesign of a crypto learning app, from v1 to v2",
    year: "2025",
    client: "VenaLabs",
    link: { href: "https://venalabs.com/en/landing", label: "venalabs.com" },
    cover: { src: venaCover, alt: "VenaLabs v2 landing page: Find the airdrops, follow your routines, learn to farm" },
    role: "Product designer",
    deliverables: ["Full app redesign (v1 → v2)", "Design system", "Rewards & gamification", "Landing page"],
    tags: ["ux/ui design", "redesign", "design system", "gamification"],
    tools: ["Figma"],
    question: "How do you turn courses, airdrops and routines into one app people open every day?",
    summary:
      "VenaLabs helps people learn crypto and farm airdrops, with courses, step-by-step airdrop guides and daily routines from creators. I redesigned the whole app from v1 to v2: a new structure, a new design system and a rewards loop that makes progress visible, plus the landing page that sells it.",
    objectives: [
      "Bring courses, airdrops and routines into one clear structure.",
      "Make progress visible and rewarding, so users come back every day.",
      "Make premium easy to understand without blocking free users.",
      "Give the team a design system to ship v2 and beyond.",
    ],
    caseStudy: {
      process: [
        {
          name: "Research",
          intro:
            "Before touching a screen, I mapped the whole app in FigJam: every section, every sub-page and the links between them. That map showed the problem: the same content lived in several places and nothing told you where to start.",
        },
        {
          name: "Restructure",
          intro:
            "v2 starts from what people come to do: learn, farm, keep a routine. Discover became the hub, ranking, referrals and settings moved under the profile, and one layout carries everything: navigation on the left, content in the middle, your streak and today's tasks always at hand.",
        },
        {
          name: "Design system",
          intro:
            "A dark, focused interface with icy blue accents, and one card system for every content type in several sizes and states, from not started to done.",
        },
        {
          name: "Gamification",
          intro:
            "VenaPoints, chests, a streak flame and a battle pass. Every useful action gives feedback, and locked rewards stay visible, so there's always a next goal.",
        },
      ],
      highlightsTitle: "From v1 to v2",
      highlights: [
        {
          title: "Mapping the app first",
          images: [{ src: venaArchitecture, alt: "VenaLabs app architecture in FigJam: navigation, Discover, Routines, Courses, Airdrops, Profile and Settings" }],
          text: "The architecture became the brief for v2: five main sections, Discover linking to the rest, and premium and settings each in one place.",
        },
        {
          title: "Discover",
          before: { src: venaV1Discover, alt: "VenaLabs v1 home: a marketing hero explaining airdrops above a table" },
          images: [{ src: venaDiscover, alt: "VenaLabs v2 Discover: recommended quest, airdrops and today's routine" }],
          issue:
            "The home page was a marketing page: a big logo, a paragraph explaining what an airdrop is, and a table pushed below the fold. Returning users scrolled past it every time.",
          solution:
            "Discover answers one question: what should I do today? A recommended quest, the airdrops worth your time and today's routine, with your streak and tasks in the side panel.",
        },
        {
          title: "Airdrops",
          before: { src: venaV1Airdrops, alt: "VenaLabs v1 airdrops: a dense table with many columns and filters" },
          images: [{ src: venaAirdrops, alt: "VenaLabs v2 airdrop page with tasks and rewards" }],
          issue:
            "A spreadsheet: ten columns, a row of filters and unlabeled progress bars. Hard to scan, and nothing told you what to actually do.",
          solution:
            "Each airdrop gets its own page: what the project is, the tasks to complete with your progress, and the rewards waiting for you.",
        },
        {
          title: "Routines",
          before: { src: venaV1Routines, alt: "VenaLabs v1 routines: large creator banners" },
          images: [{ src: venaRoutines, alt: "VenaLabs v2 routines: routine of the day with tasks, streak and check-ins" }],
          issue:
            "Big creator banners with a name and a face, but nothing about what a routine contains or how far along you are.",
          solution:
            "The routine of the day shows its tasks and your progress (3/5), and the streak and weekly check-ins sit right next to it.",
        },
        {
          title: "Courses",
          before: { src: venaV1Courses, alt: "VenaLabs v1 course map with identical grey chapter cards" },
          images: [{ src: venaCourses, alt: "VenaLabs v2 course map with completed, in-progress and locked chapters" }],
          issue:
            "The course map was already there, but every chapter looked the same: small grey cards, tiny text, no way to tell done from locked.",
          solution:
            "Completed, in progress and locked each have their own look, the path is drawn with arrows, and the reward for each chapter is visible.",
        },
        {
          title: "New in v2: a battle pass",
          images: [{ src: venaBattlePass, alt: "VenaLabs battle pass with tiers and rewards" }],
          text: "Missions earn XP, XP unlocks tiers, tiers unlock rewards. A pattern from games that keeps people coming back.",
        },
      ],
    },
  },
  {
    slug: "ethzurich",
    title: "ETHZürich",
    tagline: "Brand identity, illustrations and posters for Zürich's Ethereum conference",
    year: "2026",
    client: "EthereumZüri.ch",
    link: { href: "https://ethereumzuri.ch/", label: "ethereumzuri.ch" },
    cover: { src: ethCover, alt: "ETHZürich illustration: a crowd at a conference in blue, red and pink" },
    role: "Brand designer & illustrator",
    deliverables: ["Logo & brand identity", "Brand guidelines", "Illustrations", "Event posters & key visual", "Website art direction"],
    tags: ["branding", "logo design", "illustration", "posters"],
    tools: ["Figma"],
    question: "How do you make a blockchain conference look as curious and human as its community?",
    summary:
      "EthereumZüri.ch is a community-driven Ethereum conference at the University of Zürich. I designed the whole identity: logo, colors, type, patterns, a series of illustrations and the event posters. The result is bold enough for a billboard and warm enough to make people want to show up.",
    objectives: [
      "Root the brand in both Ethereum and Zürich.",
      "Stand out from the polished, corporate look of Swiss finance.",
      "Give the team a system they can apply on their own.",
    ],
    caseStudy: {
      highlightsTitle: "Selected work",
      highlights: [
        {
          title: "A mark made of the city",
          images: [
            { src: ethLogo, alt: "ETHZürich logo" },
            { src: ethLogomark, alt: "Logomark construction: Zürich, Ethereum, Z and a speech bubble" },
          ],
          text: "The logomark folds four ideas into one shape: Zürich's diagonal flag, the Ethereum diamond, the letter Z and a speech bubble for the talks.",
        },
        {
          title: "Colors and type with a voice",
          images: [
            { src: ethPalette, alt: "ETHZürich color palette" },
            { src: ethType, alt: "Chaney display typeface" },
          ],
          text: "Convergence Blue, Builder Red, Alpine Light, Limmat Pink and Midnight Chain, each named after the city or the community. A wide display face for impact, a clean grotesk for reading.",
        },
        {
          title: "Illustrations that bring people in",
          images: [
            { src: ethManifesto, alt: "Illustration of a hand sprinkling sparks over a landscape" },
            { src: ethVenue, alt: "Illustration of people networking in a conference venue" },
            { src: ethMeetups, alt: "Illustration grid of people meeting and talking" },
            { src: ethAudience, alt: "Illustration of an audience facing a stage" },
            { src: ethStage, alt: "Illustration of a woman looking at an empty stage" },
            { src: ethCrowd, alt: "Illustration of conference attendees" },
            { src: ethCity, alt: "Illustration of attendees in front of Zürich buildings" },
            { src: ethEther, alt: "Illustration of two faces around the Ethereum diamond" },
            { src: ethPeople, alt: "Illustration of six attendees in a grid" },
          ],
          text: "A series of textured, flat illustrations in the brand colors. People first, technology as a spark: they set the tone on the website, in announcements and on the posters.",
        },
        {
          title: "Welcome and agenda posters",
          images: [
            { src: ethPosterType, alt: "Typographic ETHZürich welcome poster in pink" },
            { src: ethPosterEth, alt: "ETHZürich welcome poster with the Ethereum illustration, dark version" },
            { src: ethPosterHand, alt: "ETHZürich welcome poster with the hand illustration, green version" },
            { src: ethPosterCrowd, alt: "ETHZürich welcome poster with the crowd illustration" },
            { src: ethPosterStage, alt: "ETHZürich welcome poster with the stage illustration" },
            { src: ethPosterPeople, alt: "ETHZürich welcome poster with the attendees illustration, dark version" },
          ],
          text: "28 A0 posters for the venue from one template: seven visuals, four colorways. Each one carries the agenda QR code and the partner logos, so the series feels varied but always on brand.",
        },
        {
          title: "Key visual, out in the city",
          images: [
            { src: ethKeyVisual, alt: "ETHZürich key visual" },
            { src: ethBillboard, alt: "ETHZürich billboard" },
            { src: ethTote, alt: "ETHZürich tote bag" },
          ],
          text: "The key visual uses the full name as a graphic: huge, stacked and impossible to miss, from a billboard down to a tote bag.",
        },
        {
          title: "Live on ethereumzuri.ch",
          images: [{ src: ethWebsite, alt: "ethereumzuri.ch website with the illustration and the new identity" }],
          text: "The identity and illustrations carried through to the conference website.",
        },
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
