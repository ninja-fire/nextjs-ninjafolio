import Image from "next/image";
import ninjapic from "../../public/ninjapic.png";
import Button from "./button";
import { links } from "../data/site";
import ProjectWall from "./projectWall";

const stats = [
  { value: "6+", label: "years designing" },
  { value: "40+", label: "clients worldwide" },
];

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
          <div className="flex items-center gap-4">
            <Image
              priority
              src={ninjapic}
              alt="Ninja Fire avatar"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border-2 border-label"
            />
            <div>
              <p className="font-extrabold">Hi, I&apos;m Ninja Fire</p>
              <p className="text-sm text-placeholder">Product &amp; brand designer</p>
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

        {/* Project wall: real work from every project, tilted, each piece links to its case study */}
        <ProjectWall />
      </div>
    </section>
  );
}
