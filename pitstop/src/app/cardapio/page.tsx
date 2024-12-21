import { Content } from "@/components/content";
import { Foods } from "@/components/foods";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Cardapio() {
  return (
    <main>
      <HeroSection/>
      <Content 
            title="Confira nosso cardápio" 
            description="No nosso restaurante, cada prato é uma viagem por sabores marcantes, inspirados no universo automotivo. Confira nosso menu e escolha entre delícias que vão de entradas leves e rápidas, como um pit stop, até pratos principais que são verdadeiros motores de sabor."
            
      />
      <Foods />

      <Footer />

    </main>
  );
}