import Image from "next/image";
import React from "react";
import pitstop from '@/assets/pitstop-logo.png'

export const FeatureSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={pitstop}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-[#0055f8] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-lg title-font font-semibold mb-3">
                Empoderamento
              </h2>
              <p className="leading-relaxed text-base">
              No Pitstop Garage, acreditamos no poder de transformar sonhos em realidade. Nosso espaço foi criado para 
              inspirar e motivar, mostrando que todos têm o potencial de alcançar o extraordinário. Aqui, encorajamos você a 
              tomar decisões ousadas e acreditar na sua força, seja qual for o caminho que você deseja trilhar. Afinal, o verdadeiro combustível está dentro de você!
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-[#0055f8] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-semibold mb-3">
                Corte de Desânimo
              </h2>
              <p className="leading-relaxed text-base">
              Desânimo? Não aqui! No Pitstop Garage, cada desafio é visto como uma oportunidade para crescer e avançar. Criamos um ambiente que 
              celebra as conquistas, grandes ou pequenas, e onde você sempre encontrará incentivo para seguir em frente. Lembre-se: toda curva 
              fechada é uma chance de acelerar para a reta final!
              </p>
              
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-900 text-[#0055f8] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-semibold mb-3">
            Desenvolvimento Pessoal
              </h2>
              <p className="leading-relaxed text-base">
              O desenvolvimento pessoal é uma jornada contínua, e o Pitstop Garage está aqui para acompanhá-lo nesse caminho. Oferecemos mais do que um espaço para refeições – 
              queremos que você saia daqui com novas ideias, novas conexões e renovado para enfrentar seus desafios. Aqui, 
              você encontra inspiração para evoluir e construir o futuro que deseja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
