import Image from "next/image";
import React from "react";

import pitmelt from '@/assets/pitmelt.png'
import chicken from '@/assets/pitchicken.png'
import pitvegan from '@/assets/pitvegan.png'
import refrip from '@/assets/refri-p.png'
import refrim from '@/assets/refri-m.png'
import refrig from '@/assets/refri-g.png'

export const Foods = () => {
  return (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-[#0055f8]"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-semibold title-font text-2xl mb-2 sm:mb-0">Nossas bebidas</h1>
          <p className="sm:w-3/5 leading-relaxed text-gray-600 sm:pl-10 pl-0">Nossos refrigerantes são como o combustível perfeito para completar sua experiência. Com opções clássicas e sabores únicos, eles são o refresco ideal para acompanhar cada etapa da sua jornada gastronômica. Sirva-se de uma dose de energia borbulhante e deixe a frescura tomar conta enquanto você aprecia o ambiente automotivo que nos define.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image alt="content" className="object-cover object-center h-full w-full" src={refrig} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Refrigerante Grande</h2>
          <p className="text-base leading-relaxed mt-2">O refrigerante G é para quem precisa de um refresco à altura de uma grande jornada. Com sua generosa porção, ele sacia até 70% da sua sede.</p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={refrim} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Refrigerante Médio</h2>
          <p className="text-base leading-relaxed mt-2">O refrigerante M é o parceiro perfeito para quem busca refrescância na medida certa. Com capacidade para saciar 50% da sua sede.</p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={refrip} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Refrigerante Pequeno</h2>
          <p className="text-base leading-relaxed mt-2">O refrigerante P é perfeito para quem busca um toque rápido de frescor sem exageros. Apesar do tamanho compacto, ele sacia 30% da sua sede.</p>
        </div>
      </div>
    </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-[#0055f8]"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-white font-semibold title-font text-2xl mb-2 sm:mb-0">Nossos lanches</h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Nossos pratos são verdadeiras máquinas de sabor, projetados para oferecer uma experiência gastronômica que combina qualidade, criatividade e inspiração no universo automotivo. Desde entradas que aquecem os motores até pratos principais que são uma verdadeira explosão de potência no paladar, cada item do cardápio é preparado com ingredientes selecionados e aquele toque especial que só encontramos na cozinha feita com paixão.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image alt="content" className="object-cover object-center h-full w-full" src={pitmelt} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Cheddar Pitmelt</h2>
          <p className="text-base leading-relaxed mt-2">O Cheddar Pitmelt é um verdadeiro campeão da fome, capaz de saciar até 70% do apetite com sua combinação irresistível de ingredientes. Imagine uma explosão de queijo cheddar cremoso, carne suculenta e uma pitada de tempero especial, tudo harmonizado para criar uma experiência que vai deixar seu paladar acelerado.</p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={chicken} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Pit Chicken</h2>
          <p className="text-base leading-relaxed mt-2">O Pitchicken é a parada perfeita para quem quer saborear algo prático, saboroso e na medida certa. Com sua porção que sacia 50% da fome, ele combina frango suculento, temperos especiais e acompanhamentos que fazem cada mordida ser uma experiência única.</p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
          <Image alt="content" className="object-cover object-center h-full w-full" src={pitvegan} />
          </div>
          <h2 className="text-xl font-semibold title-font text-white mt-5">Pit Vegan</h2>
          <p className="text-base leading-relaxed mt-2">O Pit Vegan é a escolha perfeita para quem busca um lanche leve, nutritivo e cheio de personalidade. Feito com ingredientes 100% vegetais e um toque especial de temperos, ele sacia 30% da fome, sendo ideal para quem deseja algo prático e delicioso sem abrir mão do cuidado com a alimentação.</p>
        </div>
      </div>
    </div>
  </section>
  
  );
};
