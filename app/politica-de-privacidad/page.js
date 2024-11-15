/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import logoAmiggo from "../../public/assets/logo-amiggo-dana.png";

export default function PrivacyPolicy() {
  return (
    <section className="px-4 pt-6 pb-10 lg:px-18 lg:pb-18 bg-white rounded-4xl">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={logoAmiggo} alt="Logo AmiggoApp Dana" width={100} height={100} />
        </div>

        {/* Encabezado */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Política de Privacidad
        </h1>

        {/* Contenido */}
        <div className="text-neutral-800 space-y-6">
          <p>
            El sitio web <strong>amiggocochedana.es</strong> (en adelante, "Sitio Web") se compromete a proteger la privacidad de los usuarios y adopta todas las medidas técnicas y organizativas necesarias para garantizar un nivel de seguridad adecuado al riesgo en el tratamiento de los datos personales, conforme a las leyes vigentes.
          </p>

          <h2 className="text-2xl font-semibold">Legislación Aplicable</h2>
          <ul className="list-disc pl-6">
            <li>Reglamento (UE) 2016/679 (RGPD), relativo a la protección de datos personales.</li>
            <li>Ley Orgánica 3/2018 (LOPD-GDD), de Protección de Datos Personales y garantía de los derechos digitales.</li>
            <li>Real Decreto 1720/2007, Reglamento de desarrollo de la Ley Orgánica 15/1999.</li>
            <li>Ley 34/2002 (LSSI-CE), de Servicios de la Sociedad de la Información y de Comercio Electrónico.</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            Identificación del Responsable del Tratamiento de los Datos Personales
          </h2>
          <p>
            <strong>Responsable:</strong> Whatsmov S.L. <br />
            <strong>CIF:</strong> B01679703 <br />
            <strong>Dirección:</strong> Calle Eloy Gonzalo 4, 1C, 28010, Madrid, España <br />
            <strong>Teléfono:</strong> 682 106 333 <br />
            <strong>Email:</strong> gerencia@amiggoapp.com
          </p>

          <h2 className="text-2xl font-semibold">
            Registro de Datos de Carácter Personal
          </h2>
          <p>
            En cumplimiento del RGPD y la LOPD-GDD, los datos personales recopilados por el Sitio Web se tratarán para facilitar los compromisos establecidos entre el Usuario y el Sitio Web o para atender solicitudes y consultas. Los datos serán incorporados al fichero de Whatsmov S.L., con las garantías de seguridad pertinentes.
          </p>

          <h2 className="text-2xl font-semibold">
            Principios Aplicables al Tratamiento de los Datos Personales
          </h2>
          <p>
            El tratamiento de los datos del Usuario sigue los principios de licitud, lealtad, transparencia, minimización y confidencialidad, conforme a la normativa vigente.
          </p>

          <h2 className="text-2xl font-semibold">Categorías de Datos Personales</h2>
          <p>
            Se tratarán únicamente datos identificativos del Usuario. No se recopilan categorías especiales de datos personales, conforme al artículo 9 del RGPD.
          </p>

          <h2 className="text-2xl font-semibold">
            Base Legal para el Tratamiento de los Datos Personales
          </h2>
          <p>
            La base legal para el tratamiento de los datos personales es el consentimiento del Usuario. Este puede ser retirado en cualquier momento sin que afecte la legalidad del tratamiento previo.
          </p>

          <h2 className="text-2xl font-semibold">
            Finalidades del Tratamiento de los Datos Personales
          </h2>
          <ul className="list-disc pl-6">
            <li>Cumplir compromisos establecidos con el Usuario o atender solicitudes.</li>
            <li>Asistir en la recuperación de vehículos afectados por la DANA.</li>
            <li>Fines estadísticos y comerciales para personalizar y mejorar el contenido del Sitio Web.</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            Período de Retención de los Datos Personales
          </h2>
          <p>
            Los datos serán conservados mientras dure el estado de alerta derivado de la Ley del Sistema de Protección Civil o cualquier otra normativa aplicable. Los datos serán eliminados en un plazo de 15 días tras la normalización confirmada por las autoridades.
          </p>

          <h2 className="text-2xl font-semibold">
            Alojamiento de Datos
          </h2>
          <p>
            El Sitio Web está alojado en Google Firebase y utiliza el dominio <strong>amiggocochedana.es</strong>. Google Firebase garantiza el cumplimiento de las normativas europeas de protección de datos.
          </p>

          <h2 className="text-2xl font-semibold">
            Derechos del Usuario
          </h2>
          <p>
            El Usuario podrá ejercer los siguientes derechos:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Acceso:</strong> Confirmar si se están tratando sus datos y acceder a los mismos.</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos en circunstancias específicas.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, envíe una solicitud a <strong>gerencia@amiggoapp.com</strong> junto con una copia de su DNI o identificación válida. Para la supresión, descargue y envíe el formulario disponible en el sitio oficial de la Agencia Española de Protección de Datos: <a href="https://www.aepd.es/documento/formulario-derecho-de-supresion.pdf" target="_blank" className="text-blue-500 underline">Formulario de Supresión</a>.
          </p>

          <h2 className="text-2xl font-semibold">
            Aceptación y Cambios en la Política de Privacidad
          </h2>
          <p>
            El uso del Sitio Web implica la aceptación de esta política. <strong>amiggocochedana.es</strong> se reserva el derecho a actualizar o modificar esta política conforme a cambios legislativos o recomendaciones de la Agencia Española de Protección de Datos.
          </p>
        </div>
      </div>
    </section>
  );
}