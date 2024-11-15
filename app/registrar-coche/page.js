"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ToastError from "../components/ToastError";
import ToastSuccess from "../components/ToastSuccess";
import brands from "../data/brandCar.json";
import { isValidEuropeanPlate, httpRequest } from "@/app/lib/cars"

/** Mover late */
import { ref, uploadBytes } from "firebase/storage";

import { storage } from "../config/firebase";
import { imageUrlGenerator } from "../lib/cars";

export default function CarRegistrationForm() {
  const CARS_API = process.env.NEXT_PUBLIC_CARS_API
  const [canShareLocation, setCanShareLocation] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [showToastError, setShowToastError] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [errorToastMessage, setToastErrorMessage] = useState("");
  const [successToastMessage, setToastSuccessMessage] = useState("");
  const [inputType, setInputType] = useState("licensePlate");
  const [licensePlate, setLicensePlate] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [licensePlateError, setLicensePlateError] = useState("");
  const [vinNumberError, setVinNumberError] = useState("");
  const [latitudeError, setLatitudeError] = useState("");
  const [longitudeError, setLongitudeError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [color, setColor] = useState('');
  const [pictureFile, setPictureFile] = useState(null);
  const [location, setLocation] = useState("");
  const [information, setInformation] = useState("");

  const filteredOptions = brands.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setCanShareLocation(false);
    setTermsAccepted(false);
    setLatitude(0);
    setLongitude(0);
    setLicensePlate("");
    setVinNumber("");
    setLatitudeError("");
    setLongitudeError("");
    setLicensePlateError("");
    setVinNumberError("");
    setSearchTerm("");
    setIsOpen(false);
    setAddress("");
    setColor("");
    setPictureFile(null);
    setLocation("");
    setInformation("");
  };

  const refSelect = useRef(null); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refSelect.current && !refSelect.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSearchTerm(option.name);
    setIsOpen(false);
  };

  const isValidVIN = (vin) => {
    const pattern = /^[A-HJ-NPR-Z0-9]{17}$/;
    return pattern.test(vin.trim());
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleFileChange = (e) => {
    setPictureFile(e.target.files[0]);
  };

  const handleUpload = async (imageUrl) => {
    if(!pictureFile) return;
    const storageRef = ref(storage, imageUrl)
    try {
      await uploadBytes(storageRef, pictureFile);
    } catch (error) {
      console.error('Error uploading the file', error);
    } finally {
      return imageUrlGenerator(imageUrl);
    }
  }

  const validateFields = async (e) => {
    e.preventDefault();
    let isValid = true;
    let showToast = false;

    if (inputType === "licensePlate" && !licensePlate.trim()) {
      setLicensePlateError("La matrícula es obligatoria.");
      isValid = false;
      showToast = true;
    } else if (!isValidEuropeanPlate(licensePlate)) {
      isValid = false;
      setLicensePlateError(
        "Matrícula Invalida"
      );
      showToast = true;
    } else {
      showToast = false;
      setLicensePlateError("");
    }

    if (inputType === "vinNumber" && !vinNumber.trim()) {
      setVinNumberError("El número de bastidor es obligatorio.");
      isValid = false;
      showToast = true;
    } else if (!isValidVIN(vinNumber)) {
      setVinNumberError("El número de bastidor es inválido");
      showToast = true;
    } else {
      showToast = false;
      setVinNumberError("");
    }

    if (!canShareLocation) {
      if (latitude === 0) {
        setLatitudeError("La latitud debe ser proporcionada.");
        isValid = false;
        showToast = true;
      }
      if (longitude === 0) {
        setLongitudeError("La longitud debe ser proporcionada.");
        isValid = false;
        showToast = true;
      }
    } else {
      setLatitudeError("");
      setLongitudeError("");
      showToast = false;
    }

    if (showToast) {
      setToastErrorMessage("Revise el formulario y valide los campos.");
      setShowToastError(true);
    }

    if (isValid) {
      showToast = false;
      setShowToastError(false);
      try {
        const indexSearch = inputType === 'licensePlate' ? licensePlate : vinNumber;
        const imageUrl = imageUrlGenerator(indexSearch, pictureFile)
        const carData = {
          licensePlate: inputType === 'licensePlate' ? licensePlate : '',
          vinNumber: inputType === 'vinNumber' ? vinNumber : '',
          indexSearch,
          brand: searchTerm || '',
          color: color || '',
          geolocation: canShareLocation
            ? null
            : {
                latitud: parseFloat(latitude),
                longitud: parseFloat(longitude),
              },
          location: location || '',
          address: address || '',
          information: information || '',
          pictureURL: pictureFile ? imageUrl : '',
          termsAccepted: termsAccepted
        };
        
        const response = await httpRequest('POST', CARS_API, {
          'Content-Type': 'application/json',
        }, carData);
        const result = await response.json();
        if(result.message) {
          if (pictureFile) {
            handleUpload(imageUrl)
          }
          resetForm();
          setToastSuccessMessage(result.message);
          setShowToastSuccess(true);

          setTimeout(() => {
            setShowToastSuccess(false);
          }, 5000);
        } else {
          setToastErrorMessage('Hubo un error al registrar el coche.');
          setShowToastError(true);
          setTimeout(() => {
            setShowToastError(false);
          }, 5000);
        }

      } catch (error) {
        console.error('Error al registrar el coche:', error);
        setToastErrorMessage('Hubo un error al registrar el coche.');
        setShowToastError(true);
      }
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = Math.round(position.coords.latitude * 10000) / 10000;
          const longitude = Math.round(position.coords.longitude * 10000) / 10000;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          setToastErrorMessage("No has permitido la Geolocalización.");
          setShowToastError(true);
        }
      );
    } else {
      setToastErrorMessage("Tu navegador no soporta geolocalización.");
      setShowToastError(true);
    }
  };

  const handleValidateLicensePlate = async () => {
    if (!licensePlate.trim()) {
      setLicensePlateError("Debe agregar una matrícula para validar");
    } else if (!isValidEuropeanPlate(licensePlate)) {
      setLicensePlateError(
        "Matrícula Inválida."
      );
    } else {
      const response = await fetch(`${CARS_API}/license-plate?license-plate=${licensePlate}`, {
        method: "GET"
      });
      const {data} = await response.json();
      if(data) {
        setLicensePlateError(
          "Matrícula ya registrada"
        )
        return true;
      } else {
        setLicensePlateError("");
        return null;
      }
    }
  };

  const clearMatriculaBastidorInput = () => {
    if (inputType === "vinNumber") {
      setLicensePlate("");
      setLicensePlateError("");
    } else if (inputType === "licensePlate") {
      setVinNumber("");
      setVinNumberError("");
    }
  };

  const inputTypeSetting = (inputType) => {
    if (inputType === "vinNumber") {
      setInputType("vinNumber");
      clearMatriculaBastidorInput();
    } else if (inputType === "licensePlate") {
      setInputType("licensePlate");
      clearMatriculaBastidorInput();
    }
  };

  return (
    <div className="bg-white rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14">
      {showToastError && (
        <ToastError
          message={errorToastMessage}
          onClose={() => setShowToastError(false)}
        />
      )}
      {showToastSuccess && (
        <ToastSuccess
          message={successToastMessage}
          onClose={() => setShowToastSuccess(false)}
        />
      )}
      <h5 className="text-3xl font-semibold mb-4 font-heading">
        Registro de Vehículo Encontrado
      </h5>
      <h3 className="mb-2 text-green-600">
        Total de Vehículos registrados: <span className="font-bold">1028</span>
      </h3>
      <div className="mb-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-orange-800 font-medium mb-2 text-sm">
          Este formulario <span className="font-bold">NO</span> está destinado
          para registrar tu coche perdido.
        </p>
        <p className="text-orange-800 font-medium text-sm">
          Está hecho para que los voluntarios agreguen información sobre los
          coches encontrados en la calle.
        </p>
      </div>
      <form
        action="#"
        onSubmit={validateFields}
        className="bg-white rounded-3xl p-4"
      >
        <div className="flex justify-center gap-2 mb-2">
          <button
            type="button"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              inputType === "licensePlate"
                ? "bg-dark-blue text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => inputTypeSetting("licensePlate")}
          >
            Usar Matrícula
          </button>
          <button
            type="button"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              inputType === "vinNumber"
                ? "bg-dark-blue text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => inputTypeSetting("vinNumber")}
          >
            Usar Número de Bastidor
          </button>
        </div>
        <div className="flex flex-wrap -m-2">
          {/* Matrícula */}
          {inputType === "licensePlate" && (
            <div className="w-full p-2">
              <label
                className="block mb-1 text-neutral-600 text-sm font-medium"
                htmlFor="licensePlate"
              >
                Matrícula
              </label>
              <div className="flex items-center rounded-md border border-neutral-100 shadow-sm">
                <input
                  className="flex-grow px-4 py-2 text-sm outline-none rounded-l-md placeholder-neutral-300 font-medium"
                  id="licensePlate"
                  type="text"
                  placeholder="134ABC"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                />
                <button
                  type="button"
                  className="px-3 py-2 bg-dark-blue text-white text-sm font-medium rounded-r-md hover:bg-blue-900 focus:outline-none"
                  onClick={handleValidateLicensePlate}
                >
                  Validar
                </button>
              </div>
              {licensePlateError && (
                <p className="mt-1 text-xs text-red-600">{licensePlateError}</p>
              )}
            </div>
          )}
          {/* Número de Bastidor */}
          {inputType === "vinNumber" && (
            <div className="w-full p-2">
              <label
                className="block mb-1 text-neutral-600 text-sm font-medium"
                htmlFor="vinNumber"
              >
                Número de Bastidor
              </label>
              <input
                className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                id="vinNumber"
                type="text"
                placeholder="1HGCM82633A123456"
                value={vinNumber}
                onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
              />
              {vinNumberError && (
                <p className="mt-1 text-xs text-red-600">{vinNumberError}</p>
              )}
            </div>
          )}
          {/* Marca */}
          <div className="w-full md:w-1/2 p-2 relative" ref={refSelect}>
            <label
              className="block mb-1 text-neutral-600 text-sm font-medium"
              htmlFor="marca"
            >
              Marca
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                id="marca"
                type="text"
                placeholder="Selecciona o busca una marca"
                value={searchTerm}
                onFocus={() => setIsOpen(true)}
                onChange={handleInputChange}
              />
              {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <li
                        key={option.id}
                        className="px-3 py-1 text-neutral-700 text-sm hover:bg-blue-500 hover:text-white cursor-pointer"
                        onClick={() => handleSelect(option)}
                      >
                        {option.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-1 text-neutral-500 text-sm">
                      No se encontraron resultados
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
          {/* Color */}
          <div className="w-full md:w-1/2 p-2 mb-2">
            <label
              className="block mb-1 text-neutral-600 text-sm font-medium"
              htmlFor="color"
            >
              Color
            </label>
            <input
              className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
              id="color"
              type="text"
              placeholder="Rojo"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          {/* Geolocalización */}
          <div className="w-full bg-blue-base rounded-md p-3">
            <label className="flex items-center gap-2 mb-2 text-neutral-600 text-sm font-medium">
              <input
                type="checkbox"
                checked={canShareLocation}
                onChange={() => setCanShareLocation(!canShareLocation)}
              />
              No puedo proporcionar latitud y longitud
            </label>
            {!canShareLocation && (
              <div className="flex flex-wrap -m-2">
                <div className="w-full md:w-1/2 p-2">
                  <label
                    className="block mb-1 text-neutral-600 text-sm font-medium"
                    htmlFor="latitude"
                  >
                    Latitud
                  </label>
                  <input
                    className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                    id="latitude"
                    type="number"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Ej: -0.12345"
                  />
                  {latitudeError && (
                    <p className="mt-1 text-xs text-red-600">{latitudeError}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <label
                    className="block mb-1 text-neutral-600 text-sm font-medium"
                    htmlFor="longitude"
                  >
                    Longitud
                  </label>
                  <input
                    className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
                    id="longitude"
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Ej: -0.12345"
                  />
                  {longitudeError && (
                    <p className="mt-1 text-xs text-red-600">
                      {longitudeError}
                    </p>
                  )}
                </div>
              </div>
            )}
            {!canShareLocation && (
              <div className="mt-2">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-dark-blue rounded-md hover:bg-blue-900"
                  onClick={getCurrentLocation}
                >
                  Obtener Ubicación Actual
                </button>
              </div>
            )}
          </div>
          {/* Localidad */}
          <div className="w-full md:w-1/2 p-3">
            <label
              className="block mb-1 text-neutral-600 font-medium text-sm tracking-tight"
              htmlFor="location"
            >
              Localidad
            </label>
            <input
              className="w-full px-4 py-2 text-sm outline-none rounded-lg border border-neutral-100 placeholder-neutral-300 font-medium focus:ring-4 focus:ring-neutral-100 transition duration-200"
              id="location"
              type="text"
              placeholder="Madrid"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {/* Dirección */}
          <div className="w-full md:w-1/2 p-2">
            <label
              className="block mb-1 text-neutral-600 text-sm font-medium"
              htmlFor="address"
            >
              Dirección
            </label>
            <input
              className="w-full px-4 py-2 text-sm outline-none rounded-md border border-neutral-100 placeholder-neutral-300 font-medium"
              id="address"
              type="text"
              placeholder="Calle Falsa 123"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* Información Adicional */}
          <div className="w-full p-2">
            <label
              className="block mb-1 text-neutral-600 text-sm font-medium tracking-tight"
              htmlFor="information"
            >
              Información Adicional
            </label>
            <textarea
              className="w-full px-4 py-2 outline-none text-sm rounded-lg border border-neutral-100 placeholder-neutral-300 font-medium focus:ring-4 focus:ring-neutral-100 transition duration-200"
              id="information"
              placeholder="Detalles del vehículo"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
            />
          </div>
          {/* Picture */}
          <div className="w-full p-3">
            <label
              className="block mb-1 text-neutral-600 text-sm font-medium tracking-tight"
              htmlFor="pictureFile"
            >
              Subir Foto del Vehículo
            </label>
            <input
              className="w-full px-8 py-5 outline-none rounded-lg border border-neutral-100 placeholder-neutral-300 font-medium focus:ring-4 text-sm focus:ring-neutral-100 transition duration-200"
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {/* Términos */}
          <div className="w-full p-2">
            <label className="flex items-center gap-2 text-neutral-600 text-sm font-medium">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              Acepto los <Link
              className="text-green-500 hover:underline"
              href="/terminos-y-condiciones"
              target="_blank"
              >términos</Link> y la <Link
              className="text-green-500 hover:underline"
              href="/politica-de-privacidad"
              target="_blank"
              >
              política de privacidad
              </Link>
            </label>
          </div>
          {/* Botón de envío */}
          <div className="w-full p-2">
            <button
              type="submit"
              className={`w-full py-3 text-sm font-medium rounded-md ${
                termsAccepted
                  ? "bg-green-500 text-white hover:bg-green-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!termsAccepted}
            >
              Registrar Coche
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
