import Image from "next/image";
import Link from "next/link";
import ninjapic from "../../public/ninjapic.png";
import Button from "./button";
import { links } from "../data/site";
import { projects } from "../data/projects";

// TODO(content): double-check these numbers.
const stats = [
  { value: "6+", label: "years designing" },
  { value: "40+", label: "clients worldwide" },
];

const showcase = projects.slice(0, 4);

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft lime glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="container-site relative grid items-center gap-16 pb-20 pt-28 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              priority
              src={ninjapic}
              alt="Ninja Fire avatar"
              className="h-14 w-14 rounded-full border-2 border-label"
            />
            <div>
              <p className="font-extrabold">Hi, I&apos;m Ninja Fire</p>
              <p className="text-sm text-placeholder">Product &amp; brand designer</p>
            </div>
            <p className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />
              Open to new projects
            </p>
          </div>

          <h1 id="hero-title" className="text-display">
            I <span className="text-primary">fire</span> design,
            <br />
            you <span className="text-primary">launch</span>.
          </h1>

          <p className="max-w-xl text-lg text-caption md:text-xl">
            I design <strong className="text-label">brand identities</strong> and{" "}
            <strong className="text-label">product interfaces</strong> for founders who are building something hard.
            You get one designer from first logo to shipped product, and a launch that looks as serious as the tech
            behind it.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#work" variant="primary">
              See my work
            </Button>
            <Button href={links.bookCall} variant="outline">
              Book a free intro call
            </Button>
          </div>

          <dl className="mt-4 grid max-w-sm grid-cols-2 gap-6 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-label md:text-4xl">{s.value}</dd>
                <dd className="text-sm text-placeholder">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Static showcase: two columns, the right one offset down */}
        <ul className="grid grid-cols-2 gap-4 md:gap-5">
          {showcase.map((p, i) => (
            <li key={p.slug} className={i % 2 === 1 ? "translate-y-10" : ""}>
              <Link
                href={`/work/${p.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border-2 border-line transition-all duration-300 hover:-translate-y-1 hover:border-label hover:shadow-primaryXl"
              >
                <Image
                  priority
                  src={p.cover.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-4 transition-transform duration-300 md:translate-y-2 md:group-hover:translate-y-0">
                  <span className="font-extrabold">{p.title}</span>
                  <span className="line-clamp-1 text-xs text-caption md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100">
                    {p.tagline}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
