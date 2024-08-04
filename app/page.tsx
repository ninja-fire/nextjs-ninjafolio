import Image from "next/image";
import Hero from "./ui/Hero";
import Cta from "./ui/cta";
import Clients from "./ui/clients";
import Benefice from "./ui/benefice";
import Process from "./ui/process";
import Testimonials from "./ui/testimonials";
import Portfolio from "./ui/portfolio";

export default function Home() {
  return (
    <>
    <Hero/>
    <Clients/>
    <Benefice/>
    <Process/>
    <Cta/>
    <Portfolio/>
    <Testimonials/>
    </>
  );
}
