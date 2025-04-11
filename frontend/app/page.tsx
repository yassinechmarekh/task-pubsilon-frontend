// Components
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Soon from "@/components/home/soon";
import Team from "@/components/home/team";
import WhyUs from "@/components/home/why-us";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Team />
      <WhyUs />
      <Soon />
    </div>
  );
}
