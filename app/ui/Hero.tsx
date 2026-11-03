import Image from "next/image";
import ninjapic from "../../public/ninjapic.png";
import Button from "./button";
import { links } from "../data/site";
import { projects } from "../data/projects";

// TODO(content): double-check these numbers.
const stats = [
  { value: "6+", label: "years designing" },
  { value: "40+", label: "clients worldwide" },
];

const stack = projects.filter((p) => p.featured).slice(0, 3);

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Soft lime glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="container-site relative grid items-center gap-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Image
              priority
              src={ninjapic}
              alt="Ninja Fire avatar"
              className="h-14 w-14 rounded-full border-2 border-label shadow-primarySm"
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
            <strong className="text-label">product interfaces</strong> that make ambitious, complex products feel
            simple, from the first logo sketch to a full design system. Years of shipping in{" "}
            <strong className="text-label">Web3</strong> taught me how to make hard tech human.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#work" variant="primary">
              See my work
            </Button>
            <Button href={links.bookCall} variant="dark">
              Book a call
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

        {/* Fanned stack of featured covers */}
        <div aria-hidden className="relative mx-auto hidden aspect-[4/3.4] w-full max-w-xl sm:block">
          {stack.map((p, i) => (
            <div
              key={p.slug}
              className="absolute w-[78%] overflow-hidden rounded-2xl border-2 border-label shadow-lightXl transition-transform duration-500 hover:z-10 hover:!rotate-0 hover:scale-105"
              style={{
                left: `${i * 11}%`,
                top: `${i * 16}%`,
                rotate: `${(i - 1) * 5}deg`,
                zIndex: i,
              }}
            >
              <Image priority src={p.cover.src} alt="" sizes="(min-width: 1024px) 40vw, 80vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
