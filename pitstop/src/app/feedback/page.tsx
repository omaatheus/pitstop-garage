import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Feedback() {
  return (
    <main>
      <HeroSection/>
      <Content 
            title="Queremos ouvir você!" 
            description="Sua opinião é muito importante para nós. O que você achou do nosso projeto? Tem alguma sugestão ou ideia para melhorar? Deixe seu feedback e ajude o Pitstop Garage a oferecer uma experiência ainda mais incrível para todos os apaixonados por carros e boa comida!"
            linkButton="https://forms.gle/S9YxRhgY53YPWVB4A"
            titleButton="Desejo dar meu feedback!"
      />
      <Footer />

    </main>
  );
}