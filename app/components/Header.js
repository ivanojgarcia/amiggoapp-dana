"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoAmiggoAppDana from "../../public/assets/logo-amiggo-dana.png";
import { FiHome } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative bg-white mb-6 px-10 lg:pl-20 py-7 lg:py-4 rounded-2xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Botón del menú solo visible en móviles */}
          <button
            className="block lg:hidden order-1 lg:order-none lg:pr-9"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={14}
              viewBox="0 0 34 14"
              fill="none"
            >
              <rect width={34} height={3} rx="1.5" fill="#19191B" />
              <rect y={11} width={34} height={3} rx="1.5" fill="#19191B" />
            </svg>
          </button>
          <Link href="/">
            <Image
              className="h-10 w-auto"
              src={logoAmiggoAppDana}
              alt="AmiggoApp-Dana Logo"
            />
          </Link>
        </div>

        {/* Navegación principal (visible en pantallas grandes) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/"
            className="inline-flex justify-center items-center h-8 px-3 font-semibold text-sm hover:text-white focus:text-white bg-transparent rounded-lg focus:ring-4 transition duration-200 bg-blue-base hover:bg-green-500 focus:bg-green-500 focus:ring-green-400"
          >
            <FiHome />
          </Link>
          <Link
            href="/login"
            className="inline-flex justify-center items-center h-8 px-3 font-semibold text-sm bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200 focus:text-green-500"
          >
            Inicio de Sesión
          </Link>
          {/* <Link
            href="/registro-voluntario"
            className="inline-flex justify-center items-center h-8 px-3 font-semibold text-sm hover:text-white focus:text-white bg-transparent border rounded-lg focus:ring-4 transition duration-200 border-green-500 hover:bg-green-500 focus:bg-green-500 focus:ring-green-400"
          >
            Registro de Voluntario
          </Link> */}
        </div>
      </div>

      {/* Navegación móvil */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black opacity-20"
            onClick={toggleMenu}
          />
          <nav className="relative p-8 w-full h-full bg-white overflow-y-auto ">
            <div className="flex flex-col justify-between h-full">
              {/* Logo y botón de cerrar menú */}
              <div className="flex items-center justify-between mb-16">
                <Link href="/">
                  <Image
                    className="h-10 w-auto"
                    src={logoAmiggoAppDana}
                    alt="AmiggoApp-Dana Logo"
                  />
                </Link>
                <button onClick={toggleMenu}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#252E4A"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Enlaces del menú móvil */}
              <div className="flex flex-col items-center gap-2">
                <Link
                  href="/login"
                  className="inline-flex justify-center items-center w-full h-8 px-3 font-semibold text-medium focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200"
                  onClick={toggleMenu}
                >
                  Inicio de Sesión
                </Link>
                {/* <Link
                  href="/registro"
                  className="inline-flex justify-center items-center w-full h-8 px-3 font-semibold text-medium hover:text-white focus:text-white bg-transparent border rounded-lg focus:ring-4 transition duration-200 hover:bg-green-500 focus:ring-green-400 focus:bg-green-500 border-green-500"
                  onClick={toggleMenu}
                >
                  Registro de Voluntario
                </Link> */}
              </div>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}