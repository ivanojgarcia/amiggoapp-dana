import LicensePlateSearch from '@/app/components/LicensePlate';
import TotalRegisteredCars from '@/app/components/TotalRegisteredCars';

export default function CarSearch() {
  return (
    <div className="bg-white rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14" >
      <h1 className="text-2xl font-bold mb-4">Búsqueda de Matrícula</h1>
      <TotalRegisteredCars />
      <div className="mb-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-orange-800 font-medium mb-2 text-sm">
          Con el fin de cumplir con la ley de protección de datos y por motivos de seguridad, no se muestran todos los vehículos registrados
        </p>
        <p className="text-orange-800 font-medium text-sm">
          Utiliza el buscador para encontrar tu vehículo por matrícula o bastidor
        </p>
      </div>
      <LicensePlateSearch />
    </div>
  );
}