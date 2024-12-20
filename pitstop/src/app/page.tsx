import { HeroSection } from "@/components/hero-section";
import { Content } from "@/components/content";
import { Feature } from "@/components/feature";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Content />
      <Feature />
      <Team />
      <Footer />

    </main>
  );
}