import Hero from "./ui/Hero";
import Clients from "./ui/clients";
import Work from "./ui/work";
import Services from "./ui/services";
import Process from "./ui/process";
import Testimonials from "./ui/testimonials";
import { links, siteUrl } from "./data/site";

// Structured data so search engines know who the site is about.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NinjaFire",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  description:
    "UX/UI and brand identity designer for ambitious products. dApps, web apps, design systems, logos, 3D mascots and pitch decks, with deep Web3 expertise.",
  founder: { "@type": "Person", name: "Ninja Fire", jobTitle: "Product & Brand Designer" },
  sameAs: [links.telegram],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Clients />
      <Work />
      <Services />
      <Process />
      <Testimonials />
    </>
  );
}
