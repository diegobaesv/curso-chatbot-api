export const obtenerDireccion = async (latitud: string, longitud: string) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud}&zoom=18&addressdetails=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.display_name;
}