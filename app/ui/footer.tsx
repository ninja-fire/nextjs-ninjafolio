import Image from "next/image";
import flame from "../../public/flame.svg";
import Button from "./button";
import { links } from "../data/site";

export default function Footer() {
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="bg-primary text-background">
        <div className="container-site flex flex-col items-start gap-10 py-24 md:py-32">
          <p className="eyebrow !text-background/60">Contact</p>
          <h2 id="contact-title" className="max-w-5xl text-display">
            Got a launch coming? Let&apos;s make it unforgettable.
          </h2>
          <p className="max-w-xl text-lg text-background/70">
            Book a free 30-minute intro call to talk about your product, your brand and your next steps. Or just say hi
            on Telegram.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={links.bookCall} variant="dark">
              Book a free intro call
            </Button>
            <Button href={links.telegram} variant="outlineDark">
              Chat on Telegram
            </Button>
          </div>
        </div>
      </section>
      <footer className="container-site flex flex-col items-center justify-between gap-4 py-10 text-sm text-placeholder sm:flex-row">
        <p className="flex items-center gap-1">
          Made with <Image src={flame} alt="fire" className="h-5 w-auto" /> by NinjaFire
        </p>
        <p>© {new Date().getFullYear()} NinjaFire. All rights reserved.</p>
      </footer>
    </>
  );
}
