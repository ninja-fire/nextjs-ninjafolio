import Image from "next/image";
import ninjapic from "../../public/ninjapic.png";
import remix from "../../public/remix/icon.svg";
import Button from "./button";
import { links } from "../data/site";
import { projects, type ProjectImage } from "../data/projects";

// TODO(content): double-check these numbers.
const stats = [
  { value: "6+", label: "years designing" },
  { value: "40+", label: "clients worldwide" },
];

// Covers in one column, case-study visuals in the other.
const covers = projects.map((p) => p.cover);
const visuals = projects.flatMap((p) => p.caseStudy.gallery ?? []);

function Column({ images, reverse = false }: { images: ProjectImage[]; reverse?: boolean }) {
  // Rendered twice so the -50% translate loops without a seam.
  return (
    <div
      className="flex animate-marquee-y flex-col gap-5"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {[...images, ...images].map((img, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border-2 border-line">
          <Image src={img.src} alt="" sizes="(min-width: 1024px) 22vw, 0px" className="h-auto w-full" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft lime glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="container-site relative grid items-center gap-16 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8 pb-20 pt-28 md:pt-36 lg:py-32">
          <div className="flex items-center gap-4">
            <Image
              priority
              src={ninjapic}
              alt="Ninja Fire avatar"
              className="h-14 w-14 rounded-full border-2 border-label shadow-primarySm"
            />
            <div>
              <p className="font-extrabold">Hi, I&apos;m Ninja Fire</p>
              <p className="flex flex-wrap items-center gap-x-1.5 text-sm text-placeholder">
                Product designer at
                <span className="inline-flex items-center gap-1 font-semibold text-label">
                  <Image src={remix} alt="" className="h-4 w-4" />
                  Remix
                </span>
                <span aria-hidden>·</span> freelance brand &amp; UX/UI
              </p>
            </div>
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
            <Button href={links.bookCall} variant="dark">
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

        {/* Two columns of work drifting in opposite directions */}
        <div
          aria-hidden
          className="relative hidden h-[100svh] grid-cols-2 gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] lg:grid"
        >
          <Column images={covers} />
          <div className="-mt-40">
            <Column images={visuals} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
