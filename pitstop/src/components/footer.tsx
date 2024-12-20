import React from "react";
import Image from "next/image";
import pitstopLogo from "@/assets/pitstop-logo-inteira.png"

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#0a0a0a]">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
                    className="h-8 w-auto"
                    src={pitstopLogo}
                    alt="Logo"
                    width={400}
                    height={400}
                  />
      </a>
      <p className="mt-2 text-sm text-gray-600">Seja você um fã de motores, um entusiasta de design automotivo, ou apenas alguém em busca de um bom momento, o Pitstop Garage é o lugar certo para você!</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Categorias</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">Cardápio</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">Feedback</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">Sobre nós</a>
          </li>
        </nav>
      </div>
      
      
    </div>
  </div>
  <div className="bg-[#0d00c0]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">© 2025 Pitstop Garage —
        <a rel="noopener noreferrer" className="text-white ml-1" >@pitstopgarage</a>
      </p>
      
    </div>
  </div>
</footer>
  );
};
