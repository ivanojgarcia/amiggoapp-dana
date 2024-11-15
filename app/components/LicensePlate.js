"use client"
import { useState } from 'react';
import CarDetails from './CarDetail';
import ToastError from './ToastError';

export default function LicensePlateSearch() {
  const [licensePlate, setLicensePlate] = useState('');
  const [carData, setCarData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [errorToastMessage, setToastErrorMessage] = useState("");

  const CARS_API = process.env.NEXT_PUBLIC_CARS_API;

  const handleValidateLicensePlate = async () => {
    if (!licensePlate.trim()) {
      setErrorMessage('Por favor, ingrese una matrícula.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${CARS_API}/license-plate?license-plate=${licensePlate}`, {
        method: 'GET',
      });
      
      if (!response.ok) {
        const errorResult = await response.json();
        setErrorMessage(errorResult.message || 'Error al buscar la matrícula.');
        setCarData(null);
        return;
      }
      
      const { data } = await response.json();
      setCarData(data);
      setErrorMessage('');
      if(!data) {
        setToastErrorMessage("Matrícula no encontrada");
        setShowToastError(true);
        setTimeout(() => {
          setShowToastError(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setErrorMessage('Hubo un error al realizar la solicitud.');
      setCarData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
  {showToastError && (
    <ToastError
      message={errorToastMessage}
      onClose={() => setShowToastError(false)}
    />
  )}
  <div className="flex items-center mb-4 w-full max-w-sm">
    <input
      type="text"
      value={licensePlate}
      onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
      placeholder="Ingrese la matrícula"
      className="w-full px-3 py-2 border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      disabled={isLoading}
    />
    <button
      onClick={handleValidateLicensePlate}
      className="px-3 py-2 bg-dark-blue text-white rounded-r-md hover:bg-blue-900 disabled:bg-gray-400 text-sm flex items-center justify-center"
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-white"
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
      ) : (
        'Buscar'
      )}
    </button>
  </div>

  {errorMessage && <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>}

  {carData && (
    <div className="mt-4 w-full max-w-lg">
      <CarDetails
        carData={carData}
        onClear={() => {
          setCarData(null);
          setLicensePlate('');
        }}
      />
    </div>
  )}
</div>
  );
}