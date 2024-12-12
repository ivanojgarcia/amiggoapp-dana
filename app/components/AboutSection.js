import solidaridadImg from "../../public/assets/solidaridad.webp";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="pt-8 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 md:mb-20 font-semibold font-heading text-4xl md:text-5xl text-center md:text-left">
          Unidos para recuperar lo que importa
        </h2>
        <div className="flex flex-wrap -m-5">
          {/* Imagen */}
          <div className="w-full md:w-1/2 p-5">
            <div className="overflow-hidden rounded-2xl h-[300px] md:h-[688px]">
              <Image
                className="w-full h-full object-cover"
                src={solidaridadImg}
                alt="Solidaridad Social"
                width={688}
                height={688}
              />
            </div>
          </div>
          {/* Contenido */}
          <div className="w-full md:w-1/2 p-5">
            <div className="flex flex-col justify-center h-full">
              <div>
                <p className="mb-6 text-lg md:text-xl font-medium max-w-xl">
                  <strong>Amiggo Coche DANA</strong> nace del compromiso de{" "}
                  <strong>AmiggoApp</strong>, una aplicación dedicada a
                  garantizar movilidad a sus usuarios, con el fin de apoyar a
                  las personas afectadas por la DANA.
                </p>
                <p className="mb-6 text-lg md:text-xl font-medium max-w-xl">
                  Tras el desastre, vimos la necesidad de crear una herramienta
                  solidaria que permitiera conectar a quienes buscan su vehículo
                  con aquellos que pueden ayudar a encontrarlo.
                </p>
                <div className="rounded-lg p-6 border border-green-500 shadow-md bg-white mb-5">
                  <h3 className="mb-4 text-lg md:text-xl font-bold">
                    ¿Cómo funciona?
                  </h3>
                  <ol className="list-decimal pl-5 text-lg md:text-xl font-medium space-y-4">
                    <li>
                      <span className="block">
                        <strong>Registra coches encontrados:</strong> Si
                        encuentras un coche en la calle, súbelo a la app con su
                        matrícula y ubicación.
                      </span>
                    </li>
                    <li>
                      <span className="block">
                        <strong>Busca tu vehículo perdido:</strong> Ingresa la
                        matrícula de tu coche y verifica si ha sido registrado.
                      </span>
                    </li>
                  </ol>
                </div>
                <p className="text-lg md:text-xl font-medium rounded-lg p-6 bg-neutral-50">
                  <strong>Amiggo Coche DANA</strong> no solo busca localizar
                  vehículos, sino también ser un puente de solidaridad y apoyo.
                  Juntos, hacemos posible la recuperación y brindamos esperanza
                  en medio de las dificultades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
