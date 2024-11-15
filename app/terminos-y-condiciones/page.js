/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import logoAmiggo from "../../public/assets/logo-amiggo-dana.png";

export default function TermsAndConditions() {
  return (
    <section className="px-4 pt-6 pb-10 lg:pb-18 h-full bg-white rounded-4xl">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={logoAmiggo} alt="Logo Amiggo Coche DANA" width={100} height={100} />
        </div>

        {/* Encabezado */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Términos y Condiciones de Uso
        </h1>

        {/* Contenido */}
        <div className="text-neutral-800 space-y-6">
          <p>
            <strong>CocheAmiggoAppDana.es</strong> (en adelante, "Sitio Web") se compromete a proteger la privacidad de los usuarios y a cumplir con las normativas legales aplicables en España y la Unión Europea.
          </p>

          <h2 className="text-2xl font-semibold">1. Identificación del Responsable</h2>
          <p>
            El responsable del tratamiento de los datos personales es <strong>WhatsMov S.L.</strong>, con CIF <strong>B01679703</strong>, domiciliado en <strong>Calle Eloy Gonzalo 4, 1C, 28010, Madrid, España</strong>. Puedes contactar con nosotros en <strong>gerencia@amiggoapp.com</strong>.
          </p>

          <h2 className="text-2xl font-semibold">2. Legislación Aplicable</h2>
          <p>
            Este Sitio Web cumple con las siguientes normativas legales aplicables:
          </p>
          <ul className="list-disc pl-6">
            <li>Reglamento General de Protección de Datos (RGPD) (UE 2016/679).</li>
            <li>Ley Orgánica 3/2018, de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPD-GDD).</li>
            <li>Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Finalidades del Tratamiento</h2>
          <p>
            Los datos personales serán tratados para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6">
            <li>Facilitar la comunicación entre usuarios y el Sitio Web.</li>
            <li>Gestionar la búsqueda y recuperación de vehículos afectados por la DANA.</li>
            <li>Atender consultas, solicitudes y reclamaciones.</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. Alojamiento de los Datos</h2>
          <p>
            Este Sitio Web está alojado en <strong>Google Firebase</strong>, que cumple con las normativas europeas de protección de datos. El dominio del sitio web es <strong>amiggocochedana.es</strong>.
          </p>

          <h2 className="text-2xl font-semibold">5. Derechos del Usuario</h2>
          <p>
            De acuerdo con el RGPD y la LOPD-GDD, el usuario tiene los siguientes derechos:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Acceso:</strong> Obtener información sobre sus datos personales.</li>
            <li><strong>Rectificación:</strong> Corregir datos incorrectos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
            <li><strong>Portabilidad:</strong> Solicitar una copia de sus datos en un formato interoperable.</li>
          </ul>
          <p>
            Para ejercer estos derechos, envía una solicitud a <strong>gerencia@amiggoapp.com</strong>, adjuntando una copia de tu DNI o documento de identificación válido.
          </p>

          <h2 className="text-2xl font-semibold">6. Período de Retención</h2>
          <p>
            Los datos personales se conservarán mientras sea necesario para cumplir con las finalidades mencionadas o durante los períodos establecidos por la legislación vigente.
          </p>

          <h2 className="text-2xl font-semibold">7. Modificaciones</h2>
          <p>
            CocheAmiggoAppDana.es se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Recomendamos revisar esta página periódicamente para mantenerse informado de posibles cambios.
          </p>

          <h2 className="text-2xl font-semibold">8. Enlaces a Sitios de Terceros</h2>
          <p>
            El Sitio Web puede contener enlaces a sitios de terceros. No somos responsables de sus políticas de privacidad ni del tratamiento de datos en dichos sitios.
          </p>

          <h2 className="text-2xl font-semibold">9. Aceptación</h2>
          <p>
            Al utilizar este Sitio Web, el usuario declara haber leído y aceptado estos términos y condiciones.
          </p>
        </div>
      </div>
    </section>
  );
}