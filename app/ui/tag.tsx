export default function Tag({ children, tone = "dark" }: { children: React.ReactNode; tone?: "dark" | "light" }) {
  const styles =
    tone === "dark"
      ? "border-line bg-background/70 text-label backdrop-blur"
      : "border-background/20 bg-transparent text-background";
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      {children}
    </span>
  );
}

export function TagList({ tags, tone }: { tags: string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t}>
          <Tag tone={tone}>{t}</Tag>
        </li>
      ))}
    </ul>
  );
}
