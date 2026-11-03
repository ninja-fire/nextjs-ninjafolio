import { process } from "../data/site";
import Reveal from "./reveal";
import SectionHeading from "./sectionHeading";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="container-site flex flex-col gap-12 py-24 md:py-32">
      <SectionHeading
        id="process-title"
        eyebrow="How we work"
        title={
          <>
            Trust the <span className="text-primary">process</span>.
          </>
        }
      />
      <ol className="grid gap-px overflow-hidden rounded-3xl border-2 border-line bg-line lg:grid-cols-3">
        {process.map((step, i) => (
          <Reveal as="li" key={step.name} delay={i * 120} className="flex flex-col gap-6 bg-background p-8 md:p-10">
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-extrabold text-primary">{i + 1}</span>
              <h3 className="text-h3">{step.name}</h3>
            </div>
            <p className="text-placeholder">{step.text}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {step.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-caption">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
