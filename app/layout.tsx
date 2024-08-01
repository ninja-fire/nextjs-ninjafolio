import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavMenu from "./ui/navmenu";
import FooterB from "./ui/footerB";
import Contact from "./ui/contact";

const bricoFont = Bricolage_Grotesque({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-brico',
});

export const metadata: Metadata = {
  title: "NinjaFire - Web3 Branding & UX/UI Designer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricoFont.variable}`}>
      <body className="antialiased overflow-x-hidden bg-background">
        <div className="absolute z-[-1] bg-primary top-[64rem] 2xl:top-0 right-0 w-full h-[240%] md:h-full 2xl:w-6/12 xl:h-[120%]"></div>
        <header role="navigation" className="flex sticky top-0 z-10 w-full">
          <NavMenu />
        </header>
        <main role="main" className="flex flex-col min-h-screen">
          <div className="flex flex-col">{children}</div>
        <Contact/>
        </main>
        <footer role="contentinfo" className="flex w-full items-center justify-center">
          <FooterB />
        </footer>
      </body>
    </html>
  );
}
