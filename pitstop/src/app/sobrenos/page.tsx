import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/featureSection";
import { Team } from "@/components/team";
import { Feature } from "@/components/feature";

export default function sobreNos(){
  return (
    <main>
      <HeroSection/>
      <Content 
            title="Conheça nossa história!" 
            description="O Pitstop Garage nasceu da paixão por carros e boa comida. Nossa ideia foi criar um espaço único, onde motores e sabores se encontram para proporcionar momentos inesquecíveis."
      />
      <Team />
      <FeatureSection />
      <Feature />

      <Footer />

    </main>
  );
}