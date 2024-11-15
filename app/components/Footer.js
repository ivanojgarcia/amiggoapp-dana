import Image from "next/image";
import Link from "next/link";
import logoAmiggoAppDana from "../../public/assets/logo-amiggo-dana.png";

export default function Footer() {
  return (
    <footer className="relative bg-white mt-6 px-6 lg:px-10 py-6 rounded-2xl">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo y derechos reservados */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/">
              <Image
                className="h-8 w-auto"
                src={logoAmiggoAppDana}
                alt="AmiggoApp-Dana Logo"
              />
            </Link>
            <p className="text-neutral-600 text-xs lg:text-sm font-medium tracking-tight">
              © AmiggoAppDana 2024. Todos los derechos reservados
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link
              href="/terminos-y-condiciones"
              className="text-neutral-600 text-xs lg:text-sm font-medium hover:text-neutral-700 tracking-tight transition duration-200"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/politica-de-privacidad"
              className="text-neutral-600 text-xs lg:text-sm font-medium hover:text-neutral-700 tracking-tight transition duration-200"
            >
              Políticas de Privacidad
            </Link>
            <Link
              href="https://wa.me/682106333"
              target="_blank"
              className="text-neutral-600 text-xs lg:text-sm font-medium hover:text-neutral-700 tracking-tight transition duration-200"
            >
              WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="text-neutral-600 text-xs lg:text-sm font-medium hover:text-neutral-700 tracking-tight transition duration-200"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}