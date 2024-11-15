import Image from "next/image";
import Link from "next/link";
import logoAmiggoAppDana from "../../public/assets/logo-amiggo-dana.png";

export default function Login() {
  return (
    <>
    <section className="py-8 md:py-8 bs-section-dragged">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2">
              <div className="px-8 md:px-16 pt-16 pb-20">
                <form action="#">
                  <h5 className="text-3xl font-semibold mb-2 font-heading">Registro de Voluntario</h5>
                  <p className="font-medium tracking-tight text-sm text-green-500 mb-3">Contribuye a la comunidad</p>
                  <div className="flex flex-wrap -m-3 mb-3">
                    <div className="w-full p-3">
                      <label
                        className="block mb-1 text-neutral-600 text-sm font-medium"
                        htmlFor="name"
                      >
                        Nombre
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                        id="name"
                        type="text"
                        placeholder="Pedro"
                      />
                    </div>
                    <div className="w-full p-3">
                      <label
                        className="block mb-1 text-neutral-600 text-sm font-medium"
                        htmlFor="lastname"
                      >
                        Apellido
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                        id="lastname"
                        type="text"
                        placeholder="Pérez"
                      />
                    </div>
                    <div className="w-full p-3">
                      <label
                        className="block mb-1 text-neutral-600 text-sm font-medium"
                        htmlFor="phone"
                      >
                        Teléfono
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                        id="phone"
                        type="text"
                        placeholder="+34 111 12 12 12"
                      />
                    </div>
                    <div className="w-full p-3">
                      <label
                        className="block mb-1 text-neutral-600 text-sm font-medium"
                        htmlFor="email"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                        id="email"
                        type="text"
                        placeholder="eg. d.duncan@email.com"
                      />
                    </div>
                    <div className="w-full p-3">
                      <label
                        className="block mb-1 text-neutral-600 text-sm font-medium"
                        htmlFor="password"
                      >
                        Contraseña
                      </label>
                      <input
                        className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                      />
                    </div>
                    <div className="w-full p-3">
                      <button
                        className="w-full py-3 text-sm font-medium rounded-md transition duration-200 bg-green-500 text-white hover:bg-green-800"
                        type="submit"
                      >
                        Regístrate Ahora
                      </button>
                    </div>
                  </div>
                  <Link
                    className="inline-block text-neutral-600 text-sm font-medium hover:text-neutral-800 tracking-tight transition duration-200"
                    href="/login"
                  >
                    ¿Ya tienes una cuenta? Inicia Sesión
                  </Link>
                </form>
              </div>
            </div>
            <div className="w-full xl:w-1/2 invisible lg:visible">
              <div className="bg-neutral-50 relative h-full rounded-3xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs md:max-w-md">
                  <div className="bg-white rounded-5xl px-4 md:px-10 pt-6 md:pt-12 pb-8 md:pb-16">
                    <Image
                      className="mb-4"
                      src={logoAmiggoAppDana}
                      alt="Logo Amiggo Coche DANA"
                    />
                    <p className="text-neutral-400 font-medium tracking-tight mb-10">
                      Amiggo Coche DANA es una comunidad solidaria para ayudar
                      a las víctimas de la DANA. Cada registro y búsqueda
                      nos acerca más a recuperar lo perdido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}