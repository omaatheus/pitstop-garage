"use client";

import Image from "next/image";
import React from "react";

import matheus from "@/assets/matheus-caronas.png";
import jorge from "@/assets/jorge-caronas.png";
import matue from "@/assets/matue.png";
import roni from "@/assets/ronizada.png";
import box from "@/assets/box.png";
import murilo from "@/assets/murilo.png"

export const Team = () => {
  return (
    <section id="team" className="text-white body-font">
        
        

      <div className="bg-[#0a0a0a] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-150 sm:text-4xl">
              Conheça nossos fundadores:
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            A equipe Pitstop é formada por profissionais dedicados e gerenciada com carinho pela família Caronas, trazendo confiança e excelência em cada serviço.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={roni}
                  alt="Cleiton Caronas"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Cleiton Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={box}
                  alt="Eduardo Box"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Eduardo Box Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={matue}
                  alt="Gabriel Bertolucci"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Gabriel Bertolucci Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={jorge}
                  alt="Jorge Caronas"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Jorge Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={matheus}
                  alt="Matheus"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Matheus Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <Image
                  className="size-16 rounded-full"
                  src={murilo}
                  alt="Murilo Raul"
                  width={200} // Largura da imagem
                  height={200} // Altura da imagem
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    Murilin Raul Caronas
                  </h3>
                  <p className="text-sm/6 font-semibold text-blue-700">
                    Sócio-proprietário
                  </p>
                </div>
              </div>
              
            </li>
          </ul>

          <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3c0781] to-[#0d00c0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
          
        </div>
      </div>
    </section>
  );
};
