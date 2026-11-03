import Image from "next/image";
import { testimonials } from "../data/site";
import Reveal from "./reveal";
import SectionHeading from "./sectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-line">
      <div className="container-site flex flex-col gap-12 py-24 md:py-32">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Kind words"
          title={
            <>
              Don&apos;t trust, <span className="text-primary">verify</span>.
            </>
          }
        />
        {/* The shortest quote is featured large; the two longer ones stack beside it */}
        <ul className="grid gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
          {testimonials.map((t, i) => {
            const featured = i === 0;
            return (
              <Reveal
                as="li"
                key={t.name}
                delay={i * 120}
                className={`rounded-3xl border-2 border-line bg-surface p-8 md:p-10 ${featured ? "lg:row-span-2" : ""}`}
              >
                <figure className="flex h-full flex-col gap-8">
                  <blockquote lang={t.lang} className="flex flex-col gap-3">
                    <span aria-hidden className="h-6 text-6xl font-extrabold leading-none text-primary">
                      &ldquo;
                    </span>
                    <p className={featured ? "text-2xl leading-snug text-label md:text-3xl" : "text-caption"}>{t.quote}</p>
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-4">
                    <Image
                      src={t.avatar}
                      alt=""
                      className="h-12 w-12 rounded-full border-2 border-label bg-primary"
                      sizes="48px"
                    />
                    <div>
                      <p className="font-extrabold">{t.name}</p>
                      <p className="text-sm text-placeholder">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
