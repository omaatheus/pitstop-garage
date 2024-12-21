import { HeroSection } from "@/components/hero-section";
import { Content } from "@/components/content";
import { Feature } from "@/components/feature";
import { Team } from "@/components/team";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Content 
      title="Bem-vindo(a) ao Pitstop Garage!" 
      description="Nosso espaço foi pensado para unir amantes da cultura automotiva e cidadãos em geral, criando um ambiente inclusivo e repleto de interação social. Junte-se a nós e viva a experiência que você merece! Vamos acelerar juntos rumo a memórias inesquecíveis!"
      titleButton="Vamos lá"
      event="Confira onde vai rolar nosso próximo evento"
      linkEvent="#"
      linkButton="#"
      linkSaibaMais="#"
      />
      <Feature />
      <Team />
      <Footer />

    </main>
  );
}