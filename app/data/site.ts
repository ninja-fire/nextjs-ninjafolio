import type { StaticImageData } from "next/image";
import dani from "../../public/testimonials/dani.png";
import madperps from "../../public/testimonials/madperps.png";
import marvin from "../../public/testimonials/marvin.png";

export const links = {
  bookCall: "https://cal.com/ninjafire/introcall",
  telegram: "https://t.me/ninja_fire",
};

export const services = [
  {
    title: "Product UX/UI",
    text: "Web apps, dApps, dashboards and landing pages. I turn complex flows into interfaces people understand on first use, from research and wireframes to a production-ready design system.",
    items: ["User research & flows", "Wireframes & prototypes", "UI & design systems", "Landing pages"],
  },
  {
    title: "Brand identity",
    text: "A brand that feels like it belongs to you. Logo, visual language, 3D mascots and the assets that carry it everywhere: pitch decks, socials and the product itself.",
    items: ["Logo & visual identity", "3D mascots & illustration", "Pitch decks", "Social & launch assets"],
  },
  {
    title: "Web3 native",
    text: "Wallets, tokenomics, swaps, escrow and on-chain ownership. I know the space well enough to design for it, and to make it feel simple for people who don't.",
    items: ["dApp & DeFi flows", "Tokenomics made readable", "Wallet onboarding", "Crypto-native branding"],
  },
];

export const process = [
  {
    name: "Define",
    text: "We start by understanding your goals, your users and your market. Research and insight gathering set a clear direction before a single pixel is pushed.",
    items: ["Project research", "Strategic planning", "Insight gathering", "Vision alignment"],
  },
  {
    name: "Design",
    text: "Where creativity meets function. I craft the identity and the interfaces together, so the product looks like the brand and the brand works like the product.",
    items: ["Brand identity", "User interface design", "UX optimization", "Design system"],
  },
  {
    name: "Refine",
    text: "We test, gather feedback and iterate until every detail is right, then hand over clean, documented files your team can build from.",
    items: ["User testing & feedback", "Iterative improvements", "Polish", "Developer handoff"],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: StaticImageData;
  quote: string;
  /** Shown under the role, e.g. when the quote is translated. */
  note?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Dohne",
    role: "CEO, Aramid Labs",
    avatar: dani,
    quote:
      "Manon was amazing at understanding exactly what I wanted for Aramid.Finance. She worked quickly and efficiently, delivering a fantastic design ahead of schedule. Even after the project was completed, she was incredibly helpful, providing support and ensuring everything ran smoothly. Highly recommend!",
  },
  {
    name: "Mad Bear",
    role: "Founder, MadPerps",
    avatar: madperps,
    quote:
      "Ninja Fire delivered exceptional branding for MadPerps. Her style, font choices, and color palette perfectly captured our vision for our perpetual futures DEX on Berachain. What impressed us most was her speed and accuracy - nailing it on the first try. While we're still in the early stages, the initial response to our branding has been overwhelmingly positive. Ninja Fire's work has given us a strong visual identity to build upon as we grow our community and partnerships.",
  },
  {
    name: "Marvin Scaringella",
    role: "CEO, VenaLabs",
    avatar: marvin,
    note: "Translated from French",
    quote:
      "Manon is a talented designer, and we had the pleasure of working with her on our VenaLabs project. She showed real initiative and exceptional creativity, turning our ideas into a visual reality. It's rare to meet a designer who understands her clients' needs so deeply and answers them so brilliantly. Thank you Manon, you were amazing!",
  },
];
