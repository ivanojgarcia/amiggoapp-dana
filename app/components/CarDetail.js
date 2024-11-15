"use client";
import { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/app/config/firebase";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export default function CarDetails({ carData, onClear }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageRef = carData.picture_url;

  useEffect(() => {
    const getImage = async () => {
      if (!imageRef) return;
      const storageRef = ref(storage, imageRef);
      try {
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
        setImageUrl(null);
      }
    };

    getImage();
  }, [imageRef]);

  const openGoogleMaps = () => {
    const { latitud, longitud } = carData.geolocation;
    const url = `https://www.google.com/maps?q=${latitud},${longitud}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsModalOpen(false)}
        >
          <Image
            src={imageUrl}
            alt="Imagen ampliada"
            width={600}
            height={600}
            className="object-contain max-h-full max-w-full"
          />
        </div>
      )}
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-blue-600 uppercase">
            {carData.brand}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold text">Registrado el:</span>
            {carData.created_at}
          </p>
        </div>
        {carData.geolocation && (
          <button
            onClick={openGoogleMaps}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none"
          >
            <FiMapPin className="mr-2" />
            Ver en Google Maps
          </button>
        )}
      </div>

      {/* Contenido principal */}
      <div className="relative">
        {/* Imagen con spinner */}
        <div className="overflow-hidden rounded-lg">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Imagen del coche"
              width={900}
              height={500}
              className={`object-cover w-full h-56 sm:h-64 lg:h-72 transition-opacity duration-500 cursor-pointer ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsModalOpen(true)}
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-56 sm:h-64 lg:h-72 bg-gray-200">
              <svg
                className="animate-spin h-10 w-10 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          )}
        </div>

        {/* Información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text">Matrícula:</span>
            {carData.license_plate}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text">Color:</span> {carData.color}
          </p>
          {carData.vin_number && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold text">VIN:</span>
              {carData.vin_number}
            </p>
          )}
          <p className="text-sm text-gray-700">
            <span className="font-semibold text">Dirección:</span>
            {carData.address}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text">Localidad:</span>
            {carData.location}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text">Información:</span>
            {carData.information}
          </p>
        </div>
      </div>

      {/* Botón para limpiar */}
      <div className="flex justify-center mt-6">
        <button
          onClick={onClear}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-200"
        >
          Limpiar Pantalla
        </button>
      </div>
    </div>
  );
}
