import Link from "next/link";
import Image from "next/image";
import flame from "../../public/flame.svg";

type Variant = "primary" | "light" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-background border-background shadow-darkSm hover:shadow-darkXl",
  light: "bg-label text-background border-background shadow-primarySm hover:shadow-primaryXl",
  dark: "bg-background text-label border-label shadow-lightSm hover:shadow-lightXl",
  ghost: "bg-transparent text-label border-line hover:border-label",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Show the flame mark before the label. */
  icon?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 px-6 py-3 font-extrabold transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none ${variants[variant]} ${className}`}
    >
      {icon && <Image src={flame} alt="" className="h-5 w-auto" />}
      {children}
      {external && <span aria-hidden>↗</span>}
    </Link>
  );
}
