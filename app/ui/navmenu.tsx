import logo from "../../public/ninjalogo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Kind words" },
];

export default function NavMenu() {
  return (
    <nav aria-label="Main" className="container-site flex items-center justify-between gap-6 py-3">
      <Link href="/" aria-label="Ninja Fire, go to homepage" className="flex items-center gap-2">
        <Image priority src={logo} alt="" className="w-12 md:w-14" />
        <span className="hidden text-lg font-extrabold tracking-tight sm:inline">
          Ninja<span className="text-primary">Fire</span>
        </span>
      </Link>
      <ul className="hidden items-center gap-8 md:flex">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm font-medium text-caption transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button href="/#contact" variant="primary" className="!px-5 !py-2 text-sm">
        Let&apos;s talk
      </Button>
    </nav>
  );
}
