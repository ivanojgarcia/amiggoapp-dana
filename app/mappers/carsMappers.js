export function carMapersResponse(data) {
    if (!data) {
      return null;
    }
    const date = data.createdAt.toDate();

    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    
    const formattedDate = date.toLocaleString('es-ES', options);
  
    return {
      id: data.id,
      color: data.color,
      brand: data.brand,
      license_plate: data.licensePlate,
      picture_url: data.pictureURL,
      information: data.information,
      geolocation: data.geolocation,
      vin_number: data.vinNumber,
      terms_accepted: data.termsAccepted,
      address: data.address,
      location: data.location,
      created_at: formattedDate,
    };
  }