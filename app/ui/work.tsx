import { projects } from "../data/projects";
import ProjectCard from "./projectCard";
import Reveal from "./reveal";
import SectionHeading from "./sectionHeading";

export default function Work() {
  const [spotlight, ...rest] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="container-site flex flex-col gap-12 py-24 md:py-32">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title={
          <>
            Brands and products, <span className="text-primary">fired up</span>.
          </>
        }
        intro="A selection of identities, apps and launches I've designed. Open a project for the full story: the challenge, the process and the result."
      />
      <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
        <Reveal as="li" className="md:col-span-2">
          <ProjectCard project={spotlight} spotlight />
        </Reveal>
        {rest.map((p, i) => (
          <Reveal
            as="li"
            key={p.slug}
            delay={(i % 2) * 120}
            // An odd last card stretches full width so the grid never has a hole.
            className={rest.length % 2 === 1 && i === rest.length - 1 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
