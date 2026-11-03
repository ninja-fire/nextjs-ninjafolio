import type { StaticImageData } from "next/image";

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

import avantgardeCover from "../../public/avantgarde.png";
import confabCover from "../../public/confab.png";

/*
 * Every project on the site lives here.
 *
 * To add a project:
 *   1. Drop its images in /public/<slug>/ and import them above.
 *   2. Add an entry to `projects` below. Order = order on the home page.
 *   3. Leave out `caseStudy` for a card-only project; add it to get a full page at /work/<slug>.
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

export type CaseStudy = {
  /** "How might we…" questions. */
  challenges: string[];
  process: Phase[];
  highlightsTitle: string;
  highlights: Highlight[];
  /** Full-bleed images at the end of the page. */
  gallery: ProjectImage[];
};

export type Project = {
  slug: string;
  title: string;
  /** One-line positioning, shown under the title. */
  tagline: string;
  year?: string;
  client?: string;
  cover: ProjectImage;
  tags: string[];
  tools: string[];
  /** Short paragraph used on cards and at the top of the case study. */
  summary?: string;
  /** The guiding question shown on featured cards. */
  question?: string;
  objectives?: string[];
  /** Featured projects get a large tile in the home grid. */
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "trooper",
    title: "Trooper",
    tagline: "Blockchain job market for the gaming industry",
    cover: { src: trooperCover, alt: "Trooper app screens: gamer profile, job listings and landing page" },
    tags: ["logo design", "branding", "ux/ui design", "3D design"],
    tools: ["Figma", "Blender"],
    featured: true,
    question:
      "How to create a blockchain-based job market platform specialized in the gaming sector, meeting specific user needs and ensuring transaction security?",
    summary:
      "Trooper is a blockchain job market platform tailored for the gaming industry, aiming to connect gamers and developers with job opportunities in blockchain gaming. The project focuses on creating an engaging and intuitive user experience, incorporating a compelling visual identity and comprehensive job listings to meet the unique needs of the gaming community.",
    objectives: [
      "Develop a compelling visual identity and personify the project through a 3D mascot.",
      "Provide a specialized platform catering specifically to the needs and dynamics of the gaming industry.",
      "Streamline the creation of personalized profiles for each user, facilitating effective job market matching.",
      "Establish trust through the escrow system, acting as an impartial third party to secure payments between users.",
      "Introduce economic mechanisms inherent to the application and the use of the Trooper token.",
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
            "Trooper began as an ambitious idea to revolutionize the gaming job market by connecting gamers and game developers within the blockchain ecosystem. The project’s mission was to create a platform where gamers could find professional opportunities in the emerging “play to earn” market, while companies could find and hire skilled players and developers. The challenges were clear:",
          items: [
            { title: "Branding", text: "Establish a unique, captivating brand identity." },
            { title: "User Profiles", text: "Create comprehensive profiles for gamers and professionals." },
            { title: "Job Listings", text: "Design a seamless job posting and application system." },
            { title: "Escrow System", text: "Develop a secure blockchain-based escrow system for payments." },
            { title: "Gamification", text: "Implement a gamified reputation system to build trust and engagement." },
          ],
          outro:
            "To tackle these challenges, we started with comprehensive research and strategic planning. We dived deep into understanding the target audience’s needs, the competitive landscape, and the latest trends in blockchain gaming and professional gaming markets. Workshops and brainstorming sessions with stakeholders ensured that we aligned our vision with the project’s goals.",
        },
        {
          name: "Design",
          items: [
            {
              title: "Branding",
              text: "The first step was crafting a brand identity that resonated with both gamers and professionals. We opted for a bold and futuristic theme, reflecting the innovative nature of blockchain technology and the excitement of gaming. The logo, typography, and color scheme were carefully chosen to create a strong, memorable brand.",
            },
            {
              title: "User Profiles",
              text: "Next, we designed user profiles that allowed gamers to showcase their skills, experiences, and achievements. These profiles included features like skill badges, past project highlights, and integration with gaming platforms to verify achievements and in-game rewards.",
            },
            {
              title: "Job Listings",
              text: "We designed a user-friendly job posting system where companies could easily list opportunities and gamers could search and apply for jobs. The interface was optimized for ease of use, with filters and search functions to help users find relevant listings quickly.",
            },
            {
              title: "Escrow System",
              text: "A key feature of Trooper was the blockchain-based escrow system. We designed a secure escrow mechanism where companies would lock funds into a smart contract when posting a job. This not only ensured payment security but also allowed Trooper to stake these funds and earn interest, providing additional value to companies.",
            },
            {
              title: "Gamification",
              text: "To enhance user engagement and build trust, we implemented a gamified reputation system. Users could earn badges and XP points for completing jobs and receiving positive feedback. This system provided a clear, visual representation of a user’s reliability and expertise.",
            },
          ],
        },
        {
          name: "Refine",
          items: [
            {
              title: "User Testing and Feedback",
              text: "We conducted multiple rounds of user testing to gather feedback on the platform’s usability and design. This feedback was invaluable in identifying areas for improvement and ensuring the platform met user expectations.",
            },
            {
              title: "Iterative Improvements",
              text: "Based on the feedback, we made iterative improvements to the platform. This included refining the user interface, enhancing the search and filter functions, and improving the overall user experience.",
            },
            {
              title: "Polishing the Design",
              text: "Attention to detail was key in the final stages. We polished the design, ensuring consistency across all elements and optimizing the platform for performance and speed.",
            },
          ],
        },
      ],
      highlightsTitle: "Main problems and solutions",
      highlights: [
        {
          title: "Difficulty in Filtering Applications for Multiple Player Missions",
          images: [{ src: trooperP1, alt: "Trooper applicant review screen with player comments and badges" }],
          issue:
            "Companies posting job offers to hire multiple players for a mission found it challenging to filter applications effectively. The existing XP and badges system was not clear enough to differentiate between applicants.",
          solution:
            "We implemented a detailed review system with comments for each player. This allowed companies to read feedback from other employers, providing clearer insights into each applicant’s past performance and reliability. We also enhanced the badges system to display specific skills and achievements more prominently.",
        },
        {
          title: "Low Job Visibility and Engagement",
          images: [{ src: trooperP2, alt: "Trooper job post with social sharing options" }],
          issue:
            "Users were concerned that the new platform might struggle to attract gamers to apply for their jobs, resulting in lower engagement.",
          solution:
            "We added a feature that allows users to share job posts on social media platforms directly from the app. This not only increased visibility but also drove more traffic to the job listings, ensuring that opportunities reached a wider audience quickly.",
        },
        {
          title: "Lack of a Comprehensive Search Feature",
          images: [{ src: trooperP3, alt: "Trooper global search results across gamers, guilds and jobs" }],
          issue:
            "Users expressed a need for a feature that would allow them to search across the entire app for gamers, guilds, and job listings. The absence of a unified search functionality made it cumbersome for users to find specific profiles or opportunities efficiently.",
          solution:
            "We developed and integrated a robust search engine that spans the entire platform. This feature includes advanced filtering options, enabling users to refine their search by specific criteria such as skills, game genres, job types, and guild specializations. The search results page was designed to display relevant matches from all categories—gamers, guilds, and jobs—in a single, easy-to-navigate interface. This enhancement significantly improved user experience by making it simpler and faster to locate the desired information within the app.",
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
    tagline: "Decentralized exchange with AMM and game theory",
    cover: { src: looterCover, alt: "Looter brand visuals with 3D mascot and DEX interface" },
    tags: ["branding", "logo design", "dapp design", "3D design", "pitch deck"],
    tools: ["Figma", "Blender", "Marvelous Designer"],
    featured: true,
    question:
      "How to create a brand identity and visual experience that captivates the Degen community while integrating innovative economic mechanisms into a decentralized exchange?",
    summary:
      "Looter is a cutting-edge decentralized exchange (DEX) with a deflationary tokenomics model designed for the adventurous. Looter combines elements of finance and gaming, enabling users to develop yield strategies, participate in liquidity mining, and compete for valuable rewards. The project’s unique branding, 3D assets, and seamless user experience make it a standout in the world of blockchain-based decentralized finance.",
    objectives: [
      "Develop a striking visual identity and personify the project through a 3D mascot.",
      "Create an immersive user experience aligned with the culture and energy of the Degen community.",
      "Generate interest from potential investors through a compelling and persuasive pitch deck.",
      "Design social media banners aligned with the aesthetics and spirit of the brand identity and the Degen community.",
    ],
    caseStudy: {
      challenges: [
        "How might we make complex tokenomics clear and engaging?",
        "How might we design a visual identity that’s both sophisticated and appealing?",
        "How might we integrate gamification seamlessly into the user experience?",
      ],
      process: [
        {
          name: "Define",
          intro:
            "The journey began with a deep dive into understanding the core problems facing the crypto and DeFi space—where user needs were unmet, and retention was low. We defined our mission to create a strategy-oriented DEX AMM that not only addresses these issues but also introduces innovative gamification elements. Through extensive research and user interviews, we identified the key challenges: clarity in tokenomics, the need for an engaging visual identity, and the seamless integration of game mechanics.",
        },
        {
          name: "Design",
          intro:
            "Armed with these insights, we started crafting a design that would not only meet but exceed user expectations. The branding was designed to reflect both sophistication and accessibility, using neon and cyberpunk aesthetics to create a unique identity. We also focused on making the complex tokenomics easy to understand through intuitive UI elements and clear visual cues. Our goal was to ensure that users could easily navigate the platform while enjoying a gamified experience that kept them engaged.",
        },
        {
          name: "Refine",
          intro:
            "With the initial designs in place, we moved into the refinement phase. We conducted multiple rounds of user testing to gather feedback on the usability and overall experience. Iterative design sessions allowed us to fine-tune every detail, from the color scheme to the interactive elements. We made adjustments based on user behavior and feedback, ensuring that the final product was not only functional but also enjoyable. The result was a polished platform that successfully balances strategy, engagement, and visual appeal.",
        },
      ],
      highlightsTitle: "Main project highlights",
      highlights: [
        {
          title: "Guided Swapping Experience with Integrated Notifications",
          images: [
            { src: step1, alt: "Swap flow, step 1" },
            { src: step2, alt: "Swap flow, step 2" },
            { src: step3, alt: "Swap flow, step 3" },
          ],
          text: "In the Looter project, we designed a step-by-step UI that guides users seamlessly through the swapping process, paired with a real-time notification system. This feature ensures users are not confined to the swapping interface and can engage with other app features concurrently. Notifications serve to inform users of the transaction status without interrupting their overall app experience, allowing them to multitask efficiently.",
        },
        {
          title: "Dynamic UI Interactions and Branding",
          images: [
            { src: looterlogoanimated, alt: "Animated Looter logo", unoptimized: true },
            { src: cardanimated, alt: "Animated LOOT / ETH card", unoptimized: true },
            { src: btnanimated, alt: "Animated Open App button", unoptimized: true },
          ],
          text: "The Looter app’s dynamic UI elements are crafted to captivate users and make the experience unforgettable. The “Open App” button’s fluid animation and the interactive “LOOT / ETH” card draw users in, signaling both engagement and ease of use. The animated Looter logo serves as a strong branding tool, making the app instantly recognizable and memorable. These design elements not only enhance user interaction but also make the app stand out on social media, attracting attention and encouraging user retention.",
        },
        {
          title: "Immersive 3D Elements",
          images: [
            { src: key, alt: "3D cryptographic key", unoptimized: true },
            { src: chest540, alt: "3D glowing loot chest", unoptimized: true },
            { src: looterblur, alt: "3D character in hoodie and AR goggles", unoptimized: true },
          ],
          text: "The Looter project embodies the essence of Web3 innovation, combining cutting-edge design with a deep understanding of the blockchain community. The first visual element, a glowing green cube adorned with circuit-like patterns, symbolizes the core technology and decentralized structure that forms the backbone of the Looter ecosystem. The second illustration presents a dynamic, intricate object that visually represents the cryptographic keys essential to security and access within the platform. Finally, the third design—a futuristic figure donning a hoodie and augmented reality goggles—captures the spirit of the user base: tech-savvy, forward-thinking, and deeply engaged in the digital frontier. Together, these visuals encapsulate the Looter project’s commitment to blending aesthetic appeal with functional, user-centric design.",
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
    tagline: "On-chain clothing purchase and resale",
    cover: { src: familyCover, alt: "Family marketplace screens" },
    tags: ["landing page design", "ux/ui design"],
    tools: ["Figma"],
    featured: true,
    question:
      "How to create a system where purchasing, NFC-certified ownership, and resale on a secondary market seamlessly integrate?",
    summary:
      "Family is an on-chain clothing purchase and sale platform, integrating NFC-certified ownership and secondary market resale. The project aimed to seamlessly combine physical and digital fashion, allowing users to acquire, own, and resell clothing items with blockchain technology, ensuring a smooth and intuitive experience similar to traditional online commerce platforms.",
    objectives: [
      "Develop an application enabling users to acquire clothing collections, whether physical or in the form of NFTs, with a simplicity comparable to other online commerce platforms.",
      "Establish an ecosystem where physical and digital fashion coexist seamlessly, providing users with a comprehensive experience.",
      "Ensure a smooth integration of blockchain technology to certify clothing ownership, utilizing NFC tags and assigning NFTs without creating complex barriers for users.",
      "Integrate a feature allowing users to resell their clothing items on a second-hand market directly within the application.",
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
            "The journey began with understanding the complex integration of digital NFTs with physical garments through RFID chips. We had to bridge traditional e-commerce functionalities with cutting-edge Web3 features. The challenge was to craft a user experience that could seamlessly guide users through scanning their RFID chips to link their clothes to the digital space, ensuring both the security and ease of use needed in a marketplace with both physical and digital assets. This phase was crucial to ensure every user interaction was intuitive and aligned with the unique demands of the project.",
        },
        {
          name: "Design",
          intro:
            "In the design phase, we focused on creating a UI that was as familiar as a standard clothing marketplace but with the added layer of Web3 capabilities. The design had to be sleek and modern, offering users a straightforward yet engaging experience. We integrated features like a live chat similar to Vinted, allowing users to negotiate prices and discuss deliveries, all while ensuring that the RFID scanning process was clear and accessible. The design also included specific flows for selling and buying on the second-hand market, ensuring the chip scanning was seamlessly integrated into these processes.",
        },
        {
          name: "Refine",
          intro:
            "Refinement was about perfecting the user experience. We rigorously tested the UI to ensure every scenario—from scanning a garment for the first time to transferring ownership on the second-hand market—was smooth and error-free. Feedback loops were crucial here; we worked closely with potential users to gather insights and make adjustments. The final product is a refined, user-centric application that merges the physical and digital worlds, providing a marketplace that feels both cutting-edge and user-friendly, ensuring that the complexities of the Family project are elegantly managed through design.",
        },
      ],
      highlightsTitle: "Interactive design solutions",
      highlights: [
        {
          title: "RFID Scanning and Live Chat Integration",
          images: [
            { src: fam01, alt: "RFID scanning screen" },
            { src: fam02, alt: "Garment detail with NFT ownership" },
            { src: fam03, alt: "Live chat negotiation screen" },
          ],
          text: "The RFID Scanning and Live Chat Integration seamlessly blend Web3 technology with a user-friendly experience. The RFID scanning feature allows users to link their physical garments to digital NFTs, ensuring authenticity and enabling easy management within the dApp. Coupled with a live chat feature, users can directly communicate during transactions, enhancing trust and simplifying negotiation processes. This integration makes the marketplace both innovative and practical, streamlining the buying and selling process with real-time communication and cutting-edge technology.",
        },
        {
          title: "Visual Branding Elements",
          images: [{ src: famdesignsystem, alt: "Family design system" }],
          text: "The Visual Branding Elements of the Family project focus on creating a cohesive and recognizable identity that bridges the physical and digital realms. Utilizing a carefully crafted design system, the branding reflects the project’s innovative spirit while maintaining user accessibility. From logos and typography to color schemes and iconography, each element was meticulously designed to resonate with both Web3 enthusiasts and mainstream users. This strong visual identity not only enhances brand recall but also contributes to a consistent and engaging user experience across all touchpoints.",
        },
      ],
      gallery: [
        { src: famlanding, alt: "Family landing page" },
        { src: fammobile, alt: "Family mobile screens" },
      ],
    },
  },
  {
    // TODO(content): add a summary, year and tools.
    slug: "avantgarde",
    title: "AvantGarde",
    tagline: "Generative NFT collection and live auction",
    cover: { src: avantgardeCover, alt: "AvantGarde NFT minting and auction interface" },
    tags: ["design system", "ux/ui design"],
    tools: ["Figma"],
  },
  {
    // TODO(content): add a summary, year and tools.
    slug: "confab",
    title: "Confab",
    tagline: "Wallet-based secure messaging app",
    cover: { src: confabCover, alt: "Confab messaging app screens: onboarding, conversations and chat" },
    tags: ["dapp design", "ux/ui design"],
    tools: ["Figma"],
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Previous / next case study, wrapping around. */
export function getNeighbours(slug: string) {
  const i = caseStudies.findIndex((p) => p.slug === slug);
  const n = caseStudies.length;
  return {
    prev: caseStudies[(i - 1 + n) % n],
    next: caseStudies[(i + 1) % n],
  };
}
