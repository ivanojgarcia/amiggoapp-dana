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
      {/* Encabezado principal */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
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
            className="inline-block px-4 py-2 rounded-md text-sm font-medium transition duration-200"
          >
            Inicio de Sesión
          </Link>
          <Link
            href="/contacto"
            className="inline-block px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
          >
            Contáctanos
          </Link>
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
    <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Logo y botón de cerrar menú */}
        <div className="flex items-center justify-between mb-6">
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
        <div className="flex flex-col items-stretch gap-4">
          <Link
            href="/"
            className="inline-block w-full px-4 py-2 bg-blue-base rounded-md text-sm font-medium text-center hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-blue-400 transition duration-200"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            href="/buscar-coche"
            className="inline-block w-full px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium text-center hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
            onClick={toggleMenu}
          >
            Buscar Coche
          </Link>
          <Link
            href="/registrar-coche"
            className="inline-block w-full px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium text-center hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
            onClick={toggleMenu}
          >
            Registrar Coche
          </Link>
          <Link
            href="/amiggoapp"
            className="inline-block w-full px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium text-center hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
            onClick={toggleMenu}
          >
            AmiggoApp
          </Link>
          <Link
            href="/contacto"
            className="inline-block w-full px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium text-center hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
            onClick={toggleMenu}
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </nav>
  </div>
)}
    </nav>
  );
}