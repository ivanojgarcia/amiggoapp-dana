export const imageUrlGenerator = (refId, image) => {
    if (!image) return "";
    const imgExtension = image.name.split('.').pop();
    return `images/cars/${refId}.${imgExtension}`;
}

export const isValidEuropeanPlate = (plate) => {
  const patterns = [
    '^[0-9]{4}[A-Z]{3}$',        
    '^[A-Z]{3}[0-9]{4}$',        
    '^[A-Z]{2}[0-9]{4}[A-Z]{2}$',
    '^[A-Z]{2}[0-9]{3}[A-Z]{2}$',
    '^[A-Z]{2}[0-9]{3}[A-Z]{1}$',
    '^[A-Z][0-9]{4}[A-Z]{2}$',   
  ];

  const plateTrimmed = plate.trim();

  return patterns.some((pattern) => {
    const regex = new RegExp(pattern);
    return regex.test(plateTrimmed);
  });
};

export const httpRequest = async (method, url, headers, data) => {
    return await fetch(url, {
      method,
      headers,
      body: data ? JSON.stringify(data) : "",
    });
}