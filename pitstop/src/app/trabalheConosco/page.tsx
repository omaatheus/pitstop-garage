import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function trabalheConosco(){
  return (
    <main>
      <HeroSection/>
      <Content 
            title="Acredita no nosso projeto?" 
            description="Venha fazer parte dessa equipe, nosso espaço foi pensado para unir amantes da cultura automotiva e cidadãos em geral, criando um ambiente inclusivo e repleto de interação social. "
            titleButton="Vamos lá"
            linkButton="https://forms.gle/penQ3LuNTeFeyPof8"
      />
      

      <Footer />

    </main>
  );
}