"use client";
import { useState, useEffect } from "react";

export default function TotalRegisteredCars() {
  const [carCount, setCarCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const CARS_API = process.env.NEXT_PUBLIC_CARS_API;

  useEffect(() => {
    const fetchCarCount = async () => {
      try {
        const response = await fetch(`${CARS_API}/count`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch car count.");
        }
        const {data} = await response.json();
        setCarCount(data || 0); 
      } catch (err) {
        console.error("Error fetching car count:", err);
        setError("No se pudo cargar el contador de vehículos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarCount();
  }, [CARS_API]);

  if (isLoading) {
    return <p className="text-sm text-gray-500 mb-2">Cargando...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-500 mb-2">{error}</p>;
  }

  return (
    <h3 className="mb-2 text-green-600">
        Hemos ayudado a encontrar: <span className="font-bold">{`${carCount} vehículos`}.</span>
    </h3>
  );
}