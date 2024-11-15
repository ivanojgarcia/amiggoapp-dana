import Image from "next/image";
import logoAmiggo from "../../public/assets/logo-amiggo-dana.png";

export default function LegalNotice() {
  return (
    <section className="px-4 pt-6 pb-10 lg:px-18 lg:pb-18 bg-white rounded-4xl">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={logoAmiggo} alt="Logo Amiggo Coche DANA" width={100} height={100} />
        </div>

        {/* Encabezado */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Aviso Legal y Condiciones Generales de Uso
        </h1>

        {/* Contenido */}
        <div className="text-neutral-800 space-y-6">
          <h2 className="text-2xl font-semibold">I. Información General</h2>
          <p>
            En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE), se informa lo siguiente:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Titular del Sitio Web:</strong> Whatsmov S.L.</li>
            <li><strong>CIF:</strong> B01679703</li>
            <li><strong>Dirección:</strong> Calle Eloy Gonzalo 4, 1C, 28010, Madrid, España</li>
            <li><strong>Teléfono de contacto:</strong> 682 106 333</li>
            <li><strong>Correo electrónico:</strong> gerencia@amiggoapp.com</li>
          </ul>

          <h2 className="text-2xl font-semibold">II. Términos y Condiciones Generales de Uso</h2>
          <p>
            El Sitio Web <strong>amiggocochedana.es</strong> tiene como objetivo facilitar la localización de vehículos afectados por la DANA. A través de un sistema de geolocalización, los voluntarios pueden registrar matrículas y ubicaciones para asistir en la recuperación de vehículos.
          </p>
          <h3 className="text-xl font-semibold">Objeto del Sitio Web</h3>
          <p>
            El acceso al Sitio Web es gratuito. Los usuarios que naveguen, utilicen o registren información aceptan las condiciones generales de uso desde el inicio de su navegación.
          </p>
          <h3 className="text-xl font-semibold">Condiciones de Uso para Voluntarios</h3>
          <p>
            Los voluntarios autorizados tienen acceso a un panel con herramientas de geolocalización y mapas. Los usuarios se comprometen a proporcionar información veraz y a respetar las leyes y normas de uso.
          </p>

          <h2 className="text-2xl font-semibold">III. Política de Privacidad y Protección de Datos</h2>
          <h3 className="text-xl font-semibold">Finalidad del Tratamiento</h3>
          <p>
            Los datos personales recogidos en el Sitio Web se utilizan exclusivamente para facilitar la localización y recuperación de vehículos afectados por la DANA.
          </p>
          <h3 className="text-xl font-semibold">Destinatarios de los Datos</h3>
          <p>
            Los datos no se compartirán con terceros, salvo requerimiento de las autoridades competentes.
          </p>
          <h3 className="text-xl font-semibold">Plazo de Conservación</h3>
          <p>
            Los datos serán eliminados en un plazo de 15 días una vez que las autoridades confirmen la normalización de la situación.
          </p>
          <h3 className="text-xl font-semibold">Derechos de los Usuarios</h3>
          <p>
            Los usuarios pueden ejercer sus derechos de acceso, rectificación, eliminación y otros enviando una solicitud a <strong>gerencia@amiggoapp.com</strong>.
          </p>

          <h2 className="text-2xl font-semibold">IV. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            <strong>amiggocochedana.es</strong> no garantiza la disponibilidad continua del Sitio Web ni se responsabiliza de los daños que puedan derivarse del uso del mismo.
          </p>

          <h2 className="text-2xl font-semibold">V. Política de Enlaces</h2>
          <p>
            El Sitio Web puede incluir enlaces a sitios de terceros. No somos responsables de sus políticas de privacidad ni del contenido de dichos sitios.
          </p>

          <h2 className="text-2xl font-semibold">VI. Modificaciones</h2>
          <p>
            <strong>amiggocochedana.es</strong> se reserva el derecho de modificar este aviso legal y las condiciones generales de uso en cualquier momento. Se recomienda consultar esta página periódicamente para mantenerse informado.
          </p>
        </div>
      </div>
    </section>
  );
}