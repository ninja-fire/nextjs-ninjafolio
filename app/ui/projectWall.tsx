import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import orageHome from "../../public/orage/app-home.webp";
import orageIcon from "../../public/orage/app-icon.webp";
import orageJournal from "../../public/orage/app-journal-sky-placed.webp";
import venaCover from "../../public/venalabs/cover.webp";
import ethPosterHand from "../../public/ethzurich/poster-hand.webp";
import zuWordmark from "../../public/zuitzerland/wordmark-pink.webp";
import zuFireside from "../../public/zuitzerland/yt-fireside.webp";
import trooperMascot from "../../public/trooper/mascot.webp";
import looterCharacter from "../../public/looter/looterblur.png";
import trooperLanding from "../../public/trooper/trooper02.webp";
import zuStickers from "../../public/zuitzerland/print-stickers.webp";
import zuMerch from "../../public/zuitzerland/merch-hoodie.webp";
import familyHero from "../../public/family/family.png";

type Tile = { slug: string; title: string; src: StaticImageData; alt: string; aspect: string; position?: string };

// Four columns of real work, mixed shapes so the wall has rhythm.
const columns: Tile[][] = [
  [
    { slug: "orage", title: "Orage", src: orageHome, alt: "Orage app home screen", aspect: "aspect-[3/5]", position: "object-top" },
    { slug: "trooper", title: "Trooper", src: trooperMascot, alt: "Trooper 3D mascot", aspect: "aspect-[4/3]" },
    { slug: "venalabs", title: "VenaLabs", src: venaCover, alt: "VenaLabs 3D logo", aspect: "aspect-square" },
  ],
  [
    { slug: "zuitzerland", title: "Zuitzerland", src: zuWordmark, alt: "Zuitzerland wordmark", aspect: "aspect-[5/2]" },
    { slug: "looter", title: "Looter", src: looterCharacter, alt: "Looter 3D character carrying a loot chest", aspect: "aspect-square" },
    { slug: "zuitzerland", title: "Zuitzerland", src: zuFireside, alt: "Zuitzerland fireside YouTube thumbnail", aspect: "aspect-video" },
    { slug: "ethzurich", title: "ETHZürich", src: ethPosterHand, alt: "ETHZürich poster with the hand illustration", aspect: "aspect-[5/7]" },
  ],
  [
    { slug: "zuitzerland", title: "Zuitzerland", src: zuMerch, alt: "Zuitzerland hoodie", aspect: "aspect-[4/3]" },
    { slug: "orage", title: "Orage", src: orageIcon, alt: "Orage app icon: the sun-and-cloud logo on a rainy sky", aspect: "aspect-square" },
    { slug: "family", title: "Family", src: familyHero, alt: "Family app screens", aspect: "aspect-[4/3]" },
  ],
  [
    { slug: "zuitzerland", title: "Zuitzerland", src: zuStickers, alt: "Zuitzerland stickers on a laptop", aspect: "aspect-video" },
    { slug: "orage", title: "Orage", src: orageJournal, alt: "Orage journal screen", aspect: "aspect-[3/5]", position: "object-top" },
    { slug: "trooper", title: "Trooper", src: trooperLanding, alt: "Trooper landing page on desktop, laptop and phone", aspect: "aspect-[4/3]" },
  ],
];

export default function ProjectWall() {
  return (
    <div className="relative h-[28rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)] md:h-[40rem] lg:-mr-24 lg:h-[46rem]">
      <div className="absolute left-1/2 top-1/2 grid w-[150%] -translate-x-[38%] -translate-y-1/2 rotate-[-8deg] grid-cols-4 gap-3 md:gap-4">
        {columns.map((col, c) => (
          <ul key={c} className={`flex flex-col gap-3 md:gap-4 ${["-translate-y-28", "translate-y-2", "translate-y-20", "-translate-y-12"][c]}`}>
            {col.map((t) => (
              <li key={t.alt}>
                <Link
                  href={`/work/${t.slug}`}
                  aria-label={`${t.title}: ${t.alt}`}
                  className={`group relative block overflow-hidden rounded-xl border-2 border-line bg-surface transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:border-label hover:shadow-primaryXl ${t.aspect}`}
                >
                  <Image
                    priority
                    src={t.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 14vw, 30vw"
                    className={`object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] ${t.position ?? ""}`}
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-background/80 px-2.5 py-1 text-xs font-extrabold opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    {t.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Soften the left edge where the wall meets the headline */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-background to-transparent lg:block" />
    </div>
  );
}
