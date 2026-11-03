import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNeighbours, getProject, projects, type Highlight, type ProjectImage } from "../../data/projects";
import { TagList } from "../../ui/tag";
import Reveal from "../../ui/reveal";
import SectionHeading from "../../ui/sectionHeading";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.tagline}`,
    description: project.summary,
    openGraph: { images: [project.cover.src.src] },
  };
}

function Frame({ image, sizes }: { image: ProjectImage; sizes: string }) {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl border-2 border-line bg-gradient-to-b from-[#232323] to-[#0E0E0E]">
      <Image src={image.src} alt={image.alt} sizes={sizes} unoptimized={image.unoptimized} className="h-auto w-full" />
    </div>
  );
}

function HighlightBlock({ h, index }: { h: Highlight; index: number }) {
  // v1 screen next to its v2 redesign, problem / fix below.
  if (h.before) {
    const pair = [
      { label: "v1", image: h.before },
      { label: "v2", image: h.images[0] },
    ];
    return (
      <Reveal className="flex flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-2">
          {pair.map(({ label, image }) => (
            <figure key={label} className="flex flex-col gap-3">
              <figcaption className={`eyebrow ${label === "v1" ? "!text-placeholder" : ""}`}>{label}</figcaption>
              <div className="flex-1">
                <Frame image={image} sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </figure>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h3 className="text-h3">{h.title}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="eyebrow !text-placeholder">The problem</p>
              <p className="text-caption">{h.issue}</p>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-primary pl-5">
              <p className="eyebrow">The fix</p>
              <p className="text-caption">{h.solution}</p>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  // Single image + issue/solution → side-by-side, alternating sides.
  if (h.images.length === 1 && h.issue) {
    const flip = index % 2 === 1;
    return (
      <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          <Frame image={h.images[0]} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-h3">{h.title}</h3>
          <div className="flex flex-col gap-2">
            <p className="eyebrow !text-placeholder">The problem</p>
            <p className="text-caption">{h.issue}</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-primary pl-5">
            <p className="eyebrow">The fix</p>
            <p className="text-caption">{h.solution}</p>
          </div>
        </div>
      </Reveal>
    );
  }

  // Image row + title / text below.
  const cols = h.images.length >= 3 ? "md:grid-cols-3" : h.images.length === 2 ? "md:grid-cols-2" : "";
  return (
    <Reveal className="flex flex-col gap-10">
      <div className={`grid items-stretch gap-6 ${cols}`}>
        {h.images.map((img) => (
          <Frame key={img.alt} image={img} sizes={cols ? "(min-width: 768px) 33vw, 100vw" : "100vw"} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <h3 className="text-h3">{h.title}</h3>
        <p className="text-lg text-caption">{h.text}</p>
      </div>
    </Reveal>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const cs = project.caseStudy;
  const { prev, next } = getNeighbours(project.slug);

  const meta = [
    { label: "Role", value: project.role },
    { label: project.client ? "Client" : "Tools", value: project.client ?? project.tools.join(", ") },
    project.year && { label: "Year", value: project.year },
    project.client && { label: "Tools", value: project.tools.join(", ") },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="relative">
      {/* Full-screen cover */}
      <header className="relative flex h-[100svh] min-h-[36rem] items-end overflow-hidden">
        <Image
          priority
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="100vw"
          className="animate-[hero-zoom_1.6s_cubic-bezier(0.2,0.7,0.2,1)_both] object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="container-site relative flex flex-col gap-6 pb-16 md:pb-24">
          <Link href="/#work" className="w-fit text-sm text-caption transition-colors hover:text-primary">
            ← All work
          </Link>
          <h1 className="text-display">{project.title}</h1>
          <p className="max-w-3xl text-xl text-caption md:text-3xl md:leading-tight">{project.tagline}</p>
        </div>
      </header>

      {/* Meta strip */}
      <dl className="container-site grid grid-cols-2 gap-x-6 gap-y-8 border-b border-line py-10 md:grid-cols-4">
        {meta.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <dt className="eyebrow !text-placeholder">{m.label}</dt>
            <dd className="font-medium">{m.value}</dd>
          </div>
        ))}
        {project.link && (
          <div className="flex flex-col gap-1">
            <dt className="eyebrow !text-placeholder">Live</dt>
            <dd>
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {project.link.label} ↗
              </a>
            </dd>
          </div>
        )}
      </dl>

      {/* Overview */}
      <section aria-label="Overview" className="container-site grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <p className="text-xl text-label md:text-2xl md:leading-snug">{project.summary}</p>
          {project.question && (
            <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-caption">{project.question}</blockquote>
          )}
          {project.objectives && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl">The goals</h2>
              <ol className="flex flex-col gap-4">
                {project.objectives.map((o, i) => (
                  <li key={o} className="flex gap-4 text-caption">
                    <span className="font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {o}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <div className="flex h-fit flex-col gap-8 rounded-3xl border-2 border-line bg-surface p-8 lg:sticky lg:top-28">
          <div className="flex flex-col gap-4">
            <h2 className="eyebrow !text-placeholder">What I delivered</h2>
            <ul className="flex flex-col gap-3">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 font-medium">
                  <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <TagList tags={project.tags} />
        </div>
      </section>

      {cs.challenges && (
        <section aria-labelledby="challenges" className="bg-label text-background">
          <div className="container-site flex flex-col gap-12 py-24">
            <SectionHeading id="challenges" tone="light" eyebrow="The brief" title="The challenges" />
            <ol className="grid gap-6 lg:grid-cols-3">
              {cs.challenges.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 120}
                  className="flex flex-col gap-6 rounded-3xl border-2 border-background bg-primary p-8 shadow-darkXl"
                >
                  <span className="text-5xl font-extrabold">{i + 1}</span>
                  <p className="text-xl font-extrabold leading-snug md:text-2xl">{c}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {cs.process && (
        <section aria-labelledby="process" className="container-site flex flex-col gap-4 py-24">
          <SectionHeading id="process" eyebrow="How I got there" title="The process" />
          <ol className="mt-8 flex flex-col">
            {cs.process.map((phase, i) => (
              <Reveal
                as="li"
                key={phase.name}
                className="grid gap-6 border-t border-line py-12 lg:grid-cols-[16rem_1fr] lg:gap-16"
              >
                <div className="flex items-baseline gap-4 lg:sticky lg:top-28 lg:h-fit">
                  <span className="text-5xl font-extrabold text-primary">{i + 1}</span>
                  <h3 className="text-h3">{phase.name}</h3>
                </div>
                <div className="flex flex-col gap-8">
                  {phase.intro && <p className="text-lg text-caption">{phase.intro}</p>}
                  {phase.items && (
                    <dl className="grid gap-6 md:grid-cols-2">
                      {phase.items.map((item) => (
                        <div key={item.title} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6">
                          <dt className="font-extrabold text-label">{item.title}</dt>
                          <dd className="text-placeholder">{item.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {phase.outro && <p className="text-caption">{phase.outro}</p>}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {cs.highlights && (
        <section aria-labelledby="highlights" className="border-t border-line">
          <div className="container-site flex flex-col gap-24 py-24">
            <SectionHeading id="highlights" eyebrow="The work" title={cs.highlightsTitle ?? "Design highlights"} />
            {cs.highlights.map((h, i) => (
              <HighlightBlock key={h.title} h={h} index={i} />
            ))}
          </div>
        </section>
      )}

      {cs.gallery && (
        <section aria-label="Gallery" className="container-site flex flex-col gap-6 pb-24">
          {cs.gallery.map((img) => (
            <Reveal key={img.alt}>
              <Frame image={img} sizes="100vw" />
            </Reveal>
          ))}
        </section>
      )}

      {/* Project navigation: sticks to the bottom of the screen while reading, settles at the end */}
      <nav
        aria-label="Projects"
        className="sticky bottom-0 z-30 border-t border-line bg-background/85 backdrop-blur-md"
      >
        <div className="container-site grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3 md:py-4">
          <Link href={`/work/${prev.slug}`} className="group flex min-w-0 items-center gap-3">
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-line transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-background"
            >
              ←
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xs text-placeholder">Previous</span>
              <span className="truncate font-extrabold transition-colors group-hover:text-primary">{prev.title}</span>
            </span>
          </Link>
          <Link href="/#work" className="hidden text-sm text-placeholder transition-colors hover:text-primary sm:block">
            All projects
          </Link>
          <Link href={`/work/${next.slug}`} className="group flex min-w-0 items-center justify-end gap-3 text-right">
            <span className="flex min-w-0 flex-col">
              <span className="text-xs text-placeholder">Next</span>
              <span className="truncate font-extrabold transition-colors group-hover:text-primary">{next.title}</span>
            </span>
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-line transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-background"
            >
              →
            </span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
