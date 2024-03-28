const apiKey = import.meta.env.VITE_API_KEY;

export const FETCH_CITY_KEY = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=`;

export const FETCH_CITY_INFO = `http://dataservice.accuweather.com/currentconditions/v1/`;

export const FETCH_CITY_INFO_BY_COORDS = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=`;
