import { services } from "../data/site";
import Reveal from "./reveal";
import SectionHeading from "./sectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-label text-background">
      <div className="container-site flex flex-col gap-12 py-24 md:py-32">
        <SectionHeading
          id="services-title"
          tone="light"
          eyebrow="What I do"
          title="One designer, from brand to product."
          intro="Your identity and your interface shouldn't feel like two different companies. I design both, so everything you launch speaks the same language."
        />
        <ol className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 120}
              className="flex flex-col gap-6 rounded-3xl border-2 border-background bg-label p-8 shadow-darkXl"
            >
              <span className="text-sm font-bold text-background/50">0{i + 1}</span>
              <h3 className="text-h3">{s.title}</h3>
              <p className="text-background/70">{s.text}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-background/15 pt-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-background" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
