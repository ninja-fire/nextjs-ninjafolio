import Image from "next/image";
import Hero from "./ui/Hero";
import Cta from "./ui/cta";
import Clients from "./ui/clients";

export default function Home() {
  return (
    <>
    <Hero/>
    <Clients/>
    <Cta/>
    </>
  );
}
