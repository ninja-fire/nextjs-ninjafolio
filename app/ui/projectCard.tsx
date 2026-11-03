import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";
import { TagList } from "./tag";

/** Wraps in a Link only when the project has a case study page. */
function CardShell({ project, className, children }: { project: Project; className: string; children: React.ReactNode }) {
  return project.caseStudy ? (
    <Link href={`/work/${project.slug}`} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

const shell =
  "group relative flex h-full overflow-hidden rounded-3xl border-2 border-line bg-surface transition-all duration-300";
const interactive = "hover:-translate-x-1 hover:-translate-y-1 hover:border-label hover:shadow-primaryXl";

export default function ProjectCard({ project, spotlight = false }: { project: Project; spotlight?: boolean }) {
  const linked = !!project.caseStudy;
  return (
    <CardShell
      project={project}
      className={`${shell} ${linked ? interactive : ""} ${spotlight ? "flex-col lg:flex-row" : "flex-col"}`}
    >
      <div className={`relative overflow-hidden ${spotlight ? "aspect-[16/10] lg:aspect-auto lg:w-[60%]" : "aspect-[16/10]"}`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={spotlight ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`flex flex-1 flex-col gap-5 p-6 md:p-8 ${spotlight ? "lg:justify-between lg:p-10" : ""}`}>
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-h3">{project.title}</h3>
            {linked && (
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-label text-lg transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-primary group-hover:bg-primary group-hover:text-background"
              >
                →
              </span>
            )}
          </div>
          <p className="text-caption">{project.tagline}</p>
          {spotlight && project.question && <p className="mt-2 text-placeholder">{project.question}</p>}
        </div>
        <div className="flex flex-col gap-4">
          <TagList tags={project.tags} />
          <p className="text-sm text-placeholder">
            {project.tools.join(" · ")}
            {linked && <span className="sr-only">. Read the case study.</span>}
          </p>
        </div>
      </div>
    </CardShell>
  );
}
