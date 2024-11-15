import Image from "next/image";
import contactoAmiggoAppImg from "../../public/assets/contacto-amiggoApp.png";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="px-4 pt-6 lg:px-18 lg:pb-18 bs-section-dragged">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="w-full md:w-2/3 p-2">
            <div className="h-full p-10 bg-white rounded-4xl">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <div className="max-w-lg">
                    <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                      Contacto
                    </h4>
                    <p className="mb-8 text-lg text-neutral-600 font-medium tracking-tight">
                      Para reclamar tu recompensa de <span className="font-semibold text-green-500">hasta 75€</span>, si tu vehículo
                      es reparable, descarga la aplicación de <span className="font-semibold text-green-500">AmiggoApp y
                      completa tu registro.</span>
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <FiMail className="text-green-500 text-xl" />
                        <span className="text-neutral-600 text-lg font-medium">
                          contacto@amiggoapp.com
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiPhone className="text-green-500 text-xl" />
                        <span className="text-neutral-600 text-lg font-medium">
                          +34 682 106 333
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiMapPin className="text-green-500 text-xl" />
                        <span className="text-neutral-600 text-lg font-medium">
                        Eloy Gonzalo 4, 1C 28010 Madrid, España
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="flex flex-wrap -m-1.5 mb-16"></ul>
                </div>
                <div className="w-full"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:flex-1 p-2">
            <div className="h-full p-10 bg-white rounded-4xl">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-8 w-full">
                  <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                    WhatsApp
                  </h4>
                  <p className="mb-8 text-lg text-neutral-600 font-medium tracking-tight">
                    Comunícate con nosotros vía WhatsApp
                  </p>
                  <Image
                    className="mx-auto h-56 object-cover"
                    src={contactoAmiggoAppImg}
                    alt="Contacto Amiggo App"
                  />
                </div>
                <div className="w-full">
                  <Link
                    className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white border rounded-lg focus:ring-4 transition duration-200 hover:bg-green-500 border-green-500 focus:ring-green-400 focus:bg-green-500"
                    href="https://wa.me/682106333"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
