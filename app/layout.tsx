import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavMenu from "./ui/navmenu";
import FooterB from "./ui/footerB";

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
    <body className= "antialiased overflow-x-hidden bg-background">
      <header className="flex sticky top-0 z-10 w-full">
        <NavMenu/>
      </header>
    <main className="flex min-h-screen">
    <div className="flex flex-col">{children}</div>
    </main>
    <footer className="flex items-center justify-center">
      <FooterB/>
    </footer>
  </body>
  </html>
  );
}
