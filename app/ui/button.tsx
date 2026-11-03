import Link from "next/link";

/*
 * Pick the variant by the background the button sits on:
 *   on dark  → "primary" (main action) or "outline"
 *   on lime  → "dark" (main action) or "outlineDark"
 */
type Variant = "primary" | "outline" | "dark" | "outlineDark";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-background hover:bg-label",
  outline: "border-2 border-label/30 text-label hover:border-label hover:bg-label hover:text-background",
  dark: "bg-background text-label hover:bg-background/85",
  outlineDark: "border-2 border-background/30 text-background hover:border-background hover:bg-background hover:text-primary",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-extrabold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
        {external ? "↗" : "→"}
      </span>
    </Link>
  );
}
