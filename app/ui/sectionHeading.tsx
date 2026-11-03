export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  id?: string;
}) {
  const light = tone === "light";
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      <p className={light ? "eyebrow !text-background/60" : "eyebrow"}>{eyebrow}</p>
      <h2 id={id} className={`text-h2 ${light ? "text-background" : "text-label"}`}>
        {title}
      </h2>
      {intro && <p className={`text-lg ${light ? "text-background/70" : "text-placeholder"}`}>{intro}</p>}
    </div>
  );
}
