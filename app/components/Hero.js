"use client"
import Image from "next/image";
import Link from "next/link";
import logotipoAmiggoApp from "../../public/assets/logotipo.png";
import unionIcon from "../../public/assets/union-icon.png";
import contactIcon from "../../public/assets/amiggo-contacto.png";
import { useEffect, useState } from "react";

export default function Hero() {

  const [linkUrl, setLinkUrl] = useState('https://amiggoapp.com/'); 

  useEffect(() => {
    // This code runs on the client side
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device
      setLinkUrl('https://play.google.com/store/apps/details?id=com.amiggoapp.stable');
    } else if (/iPad|iPhone/.test(userAgent) && !window.MSStream) {
      // iOS device
      setLinkUrl('https://apps.apple.com/es/app/amiggoapp-coche-sustituci%C3%B3n/id6661026853');
    }
  }, []);


  return (
    <div className="bg-white rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-12">
      <div className="flex flex-wrap -m-4 mb-2">
        <div className="w-full p-4">
          <div className="h-full rounded-3xl pl-4 lg:pl-18 pr-4 lg:pr-16">
            <div className="flex flex-wrap gap-8 mb-4 justify-center">
              <h3 className="mb-2 text-green-600 text-center">
                Hemos ayudado a encontrar: <span className="font-bold">1028 vehículos.</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-8 mb-4 justify-center">
              <Link
                className="inline-flex justify-center items-center text-center font-semibold tracking-tight text-white bg-green-500 hover:bg-green-800 focus:bg-green-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 px-6 py-2 w-full md:w-auto sm:min-w-[300px] h-[65px]"
                href="/buscar-coche"
              >
                ¿Alguien tiene información sobre mi coche perdido?
              </Link>
              <Link
                className="inline-flex justify-center items-center text-center font-semibold tracking-tight text-white bg-dark-blue hover:bg-blue-800 focus:bg-blue-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200 px-6 py-2 w-full md:w-auto sm:min-w-[300px] h-[65px] whitespace-normal"
                href="/registrar-coche"
              >
                Registrar Coche Encontrado
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Caja 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-sm">
          <div className="rounded-lg p-6 h-full relative overflow-hidden bg-blue-base shadow-md">
            <div className="flex flex-col items-start gap-4 h-full relative z-20">
              <h2 className="font-heading text-lg lg:text-xl tracking-tight font-semibold">
                Recibe hasta 75€, si tu vehículo es Reparable
              </h2>
              <p className="text-sm lg:text-lg tracking-tight font-medium">
                Descárgate AmiggoApp Tengas el seguro que tengas.
              </p>
              <Link
                className="inline-block px-4 py-3 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition duration-200"
                href={linkUrl}
              >
                AmiggoApp
              </Link>
            </div>
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              src={logotipoAmiggoApp}
              alt="AmiggoApp"
            />
          </div>
        </div>

        {/* Caja 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-sm">
          <div className="rounded-lg p-6 h-full relative overflow-hidden border border-green-500 shadow-md bg-white">
            <div className="flex flex-col items-start gap-4 h-full relative z-20">
              <h2 className="font-heading text-lg lg:text-xl tracking-tight font-semibold">
                Hágase Voluntario
              </h2>
              <p className="text-sm lg:text-lg tracking-tight font-medium text-neutral-700">
                Regístrate como voluntario y ayuda a otros afectados a recuperar
                lo que es suyo.
              </p>
              <Link
                className="inline-block px-4 py-3 bg-dark-blue text-white rounded-md text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-200"
                href="/registro-voluntario"
              >
                Registrarse
              </Link>
            </div>
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              src={unionIcon}
              alt="Unión Amiggo Coche DANA"
            />
          </div>
        </div>

        {/* Caja 3 */}
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-sm">
          <div className="rounded-lg p-6 h-full relative overflow-hidden shadow-md bg-neutral-50">
            <div className="flex flex-col items-start gap-4 h-full relative z-20">
              <h2 className="font-heading text-lg lg:text-xl tracking-tight font-semibold">
                Necesitas ayuda con tu coche
              </h2>
              <p className="text-sm lg:text-lg tracking-tight font-medium text-neutral-700">
                Contacta con nosotros y aclara las dudas.
              </p>
              <Link
                className="inline-block px-4 py-3 bg-dark-blue text-white rounded-md text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-200"
                href="/contacto"
              >
                Contáctanos
              </Link>
            </div>
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              src={contactIcon}
              alt="Contacto AmiggoApp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
