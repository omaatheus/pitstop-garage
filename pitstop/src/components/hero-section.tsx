"use client"; // Diretiva para indicar que este é um componente do lado do cliente

import React, { useState } from "react";
import Image from "next/image";

import pitstopLogo from "@/assets/pitstop-logo-inteira.png";


export const HeroSection = () => {
  // Estado para controlar a visibilidade do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="hero-section" className="text-white body-font bg-[#0a0a0a]">
      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="../" className="-m-1.5 p-1.5">
                <span className="sr-only">Pitstop Garage</span>
                {!menuOpen && (
                  <Image
                    className="h-8 w-auto"
                    src={pitstopLogo}
                    alt="Logo"
                    width={400}
                    height={400}
                  />
                )}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={toggleMenu} // Lógica para alternar o menu
              >
                <span className="sr-only">Abra o menu principal</span>
                {/* Alternando entre ícone de hambúrguer e X */}
                {!menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Itens de navegação visíveis em desktop */}
            <div className="hidden lg:flex space-x-6 text-white">
              <a href="/cardapio" className="text-lg font-medium">Cardápio</a>
              <a href="/trabalheconosco" className="text-lg font-medium">Trabalhe Conosco</a>
              <a href="/feedback" className="text-lg font-medium">Feedback</a>
              <a href="/sobrenos" className="text-lg font-medium">Sobre Nós</a>
              <a href="#" className="text-lg font-medium">Entrar</a>
            </div>
          </nav>
        </header>
      </div>

      {/* Menu de navegação para dispositivos móveis */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Fundo azul com opacidade e efeito de blur */}
        <div
          className={`fixed inset-0 bg-[#001e57] bg-opacity-30 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu} // Fechar o menu ao clicar no fundo
        ></div>

        {/* Menu de navegação */}
        <div
          className={`fixed inset-0 bg-[#001e57] bg-opacity-30 flex flex-col items-center justify-center space-y-6 text-white transition-all duration-300 ease-in-out transform ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Logo */}
          <div className="mb-6">
            <Image
              className="h-12 w-auto"
              src={pitstopLogo}
              alt="Logo"
              width={200}
              height={200}
            />
          </div>

          {/* Itens de navegação */}
          <a href="/cardapio" className="text-lg font-medium">Cardápio</a>
              <a href="/trabaleconosco" className="text-lg font-medium">Trabalhe Conosco</a>
              <a href="/feedback" className="text-lg font-medium">Feedback</a>
              <a href="/sobrenos" className="text-lg font-medium">Sobre Nós</a>
              <a href="#" className="text-lg font-medium">Entrar</a>
        </div>
      </div>
    </section>
  );
};
