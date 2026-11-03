import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getNeighbours, getProject, type Highlight, type ProjectImage } from "../../data/projects";
import { TagList } from "../../ui/tag";
import Reveal from "../../ui/reveal";
import SectionHeading from "../../ui/sectionHeading";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
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

function Frame({ image, sizes, priority }: { image: ProjectImage; sizes: string; priority?: boolean }) {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-2xl border-2 border-line bg-gradient-to-b from-[#232323] to-[#0E0E0E]">
      <Image
        src={image.src}
        alt={image.alt}
        sizes={sizes}
        unoptimized={image.unoptimized}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

function HighlightBlock({ h, index }: { h: Highlight; index: number }) {
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
            <p className="eyebrow !text-placeholder">Issue</p>
            <p className="text-caption">{h.issue}</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-primary pl-5">
            <p className="eyebrow">Solution</p>
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
      <div className={`grid gap-6 ${cols}`}>
        {h.images.map((img) => (
          <Frame key={img.alt} image={img} sizes={cols ? "(min-width: 768px) 33vw, 100vw" : "100vw"} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <h3 className="text-h3">{h.title}</h3>
        <p className="text-caption">{h.text}</p>
      </div>
    </Reveal>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project?.caseStudy) notFound();
  const cs = project.caseStudy;
  const { prev, next } = getNeighbours(project.slug);

  return (
    <article>
      {/* Header */}
      <header className="container-site flex flex-col gap-10 pb-16 pt-32 md:pt-40">
        <Link href="/#work" className="w-fit text-sm text-placeholder transition-colors hover:text-primary">
          ← All work
        </Link>
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Case study</p>
          <h1 className="text-display">{project.title}</h1>
          <p className="max-w-3xl text-xl text-caption md:text-2xl">{project.tagline}</p>
        </div>
        <div className="overflow-hidden rounded-3xl border-2 border-label shadow-primaryXl">
          <Image priority src={project.cover.src} alt={project.cover.alt} sizes="100vw" className="h-auto w-full" />
        </div>
      </header>

      {/* Overview */}
      <section aria-label="Overview" className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <p className="text-lg text-caption md:text-xl">{project.summary}</p>
          {project.objectives && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl">Objectives</h2>
              <ol className="flex flex-col gap-4">
                {project.objectives.map((o, i) => (
                  <li key={o} className="flex gap-4 text-placeholder">
                    <span className="font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {o}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <dl className="flex h-fit flex-col gap-6 rounded-3xl border-2 border-line bg-surface p-8 lg:sticky lg:top-28">
          <div className="flex flex-col gap-3">
            <dt className="eyebrow !text-placeholder">Services</dt>
            <dd>
              <TagList tags={project.tags} />
            </dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="eyebrow !text-placeholder">Tools</dt>
            <dd>{project.tools.join(", ")}</dd>
          </div>
          {project.client && (
            <div className="flex flex-col gap-1">
              <dt className="eyebrow !text-placeholder">Client</dt>
              <dd>{project.client}</dd>
            </div>
          )}
          {project.year && (
            <div className="flex flex-col gap-1">
              <dt className="eyebrow !text-placeholder">Year</dt>
              <dd>{project.year}</dd>
            </div>
          )}
        </dl>
      </section>

      {/* Challenges */}
      <section aria-labelledby="challenges" className="mt-16 bg-label text-background">
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

      {/* Process */}
      <section aria-labelledby="process" className="container-site flex flex-col gap-4 py-24">
        <SectionHeading id="process" eyebrow="How we got there" title="The process" />
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

      {/* Highlights */}
      <section aria-labelledby="highlights" className="border-t border-line">
        <div className="container-site flex flex-col gap-20 py-24">
          <SectionHeading id="highlights" eyebrow="Design solutions" title={cs.highlightsTitle} />
          {cs.highlights.map((h, i) => (
            <HighlightBlock key={h.title} h={h} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section aria-label="Gallery" className="container-site flex flex-col gap-6 pb-24">
        {cs.gallery.map((img) => (
          <Reveal key={img.alt}>
            <Frame image={img} sizes="100vw" />
          </Reveal>
        ))}
      </section>

      {/* Prev / next */}
      <nav aria-label="More case studies" className="border-t border-line">
        <div className="container-site grid gap-px py-0 sm:grid-cols-2">
          {[
            { p: prev, label: "Previous", align: "items-start" },
            { p: next, label: "Next", align: "items-start sm:items-end sm:text-right" },
          ].map(({ p, label, align }) => (
            <Link
              key={label}
              href={`/work/${p.slug}`}
              className={`group flex flex-col gap-2 py-12 ${align}`}
            >
              <span className="text-sm text-placeholder">
                {label === "Previous" ? "← " : ""}
                {label}
                {label === "Next" ? " →" : ""}
              </span>
              <span className="text-h3 transition-colors group-hover:text-primary">{p.title}</span>
              <span className="text-placeholder">{p.tagline}</span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
