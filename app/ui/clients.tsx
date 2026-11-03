import Image from "next/image";

// Logos live in /public/logoclient/logoclient-01.svg … -40.svg
const logos = Array.from({ length: 40 }, (_, i) => `/logoclient/logoclient-${String(i + 1).padStart(2, "0")}.svg`);

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // The list is rendered twice so the -50% translate loops seamlessly.
  return (
    <div className="flex w-max animate-marquee gap-12 md:gap-16" style={reverse ? { animationDirection: "reverse" } : undefined}>
      {[...items, ...items].map((src, i) => (
        <Image key={i} src={src} alt="" width={160} height={64} className="h-8 w-auto md:h-12" />
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <section aria-label="Clients" className="border-y border-line py-14">
      <p className="container-site mb-10 text-center text-placeholder">
        Trusted by <span className="font-bold text-primary">40+</span> teams worldwide
      </p>
      <div className="flex flex-col gap-8 opacity-60 grayscale [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Row items={logos.slice(0, 20)} />
        <Row items={logos.slice(20)} reverse />
      </div>
    </section>
  );
}
