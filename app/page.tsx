import Hero from "./ui/Hero";
import Clients from "./ui/clients";
import Work from "./ui/work";
import Services from "./ui/services";
import Process from "./ui/process";
import Testimonials from "./ui/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Work />
      <Services />
      <Process />
      <Testimonials />
    </>
  );
}
