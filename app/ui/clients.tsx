/* eslint-disable @next/next/no-img-element -- plain <img>: SVG logos gain nothing from next/image */
// Native lazy-loading: the strip sits right under the hero, inside Chrome's ~1250px load-ahead range, so all
// logos still load right after first layout (no pop-in) without competing with the hero for bandwidth.

// Logos live in /public/logoclient/logoclient-01.svg … -40.svg
const logos = Array.from({ length: 40 }, (_, i) => `/logoclient/logoclient-${String(i + 1).padStart(2, "0")}.svg`);

/*
 * Seamless loop: two identical groups side by side, each sliding by exactly its own width.
 * Spacing is padding inside each item (not flex gap) so both groups are the same width to the pixel.
 * Opacity/grayscale live on the images themselves, never on an ancestor of the moving element.
 */
function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const group = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 animate-marquee items-center will-change-transform"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {items.map((src) => (
        <li key={src} className="shrink-0 px-6 md:px-10">
          <img src={src} alt="" loading="lazy" decoding="async" className="h-8 w-auto opacity-50 grayscale md:h-11" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="flex">
      {group(false)}
      {group(true)}
    </div>
  );
}

export default function Clients() {
  return (
    <section aria-label="Clients" className="border-y border-line py-14">
      <p className="container-site mb-10 text-center text-placeholder">
        Trusted by <span className="font-bold text-primary">40+</span> teams worldwide
      </p>
      <div className="relative flex flex-col gap-8 overflow-hidden">
        <Row items={logos.slice(0, 20)} />
        <Row items={logos.slice(20)} reverse />
        {/* Edge fades as overlays (cheaper and steadier than a mask on the moving layer) */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background md:w-48" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background md:w-48" />
      </div>
    </section>
  );
}
