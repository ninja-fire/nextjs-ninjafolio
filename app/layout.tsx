import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavMenu from "./ui/navmenu";
import Footer from "./ui/footer";

const bricoFont = Bricolage_Grotesque({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-brico',
});

export const metadata: Metadata = {
  title: {
    default: "NinjaFire · Product & Brand Designer",
    template: "%s · NinjaFire",
  },
  description:
    "UX/UI and brand identity designer for ambitious products. dApps, web apps, design systems, logos, 3D mascots and pitch decks, with deep Web3 expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricoFont.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-background font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <header className="fixed top-0 z-40 w-full border-b border-line bg-background/80 backdrop-blur-md">
          <NavMenu />
        </header>
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
