const apiKey = import.meta.env.VITE_API_KEY;

export const FETCH_CITY_KEY = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=`;

export const FETCH_CITY_INFO = `https://dataservice.accuweather.com/currentconditions/v1/`;

export const FETCH_CITY_INFO_BY_COORDS = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=`;
