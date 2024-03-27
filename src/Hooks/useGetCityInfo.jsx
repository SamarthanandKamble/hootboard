import { useEffect } from "react";
import { FETCH_CITY_INFO } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCityWeather } from "../redux/citySlice";

const useGetCityInfo = () => {
  const dispatch = useDispatch();
  const cityKey = useSelector((state) => state.city?.cityKey);
  console.log("city key:", cityKey);
  useEffect(() => {
    if (cityKey) {
      fetchCityData();
    }
  }, [cityKey]);

  if (!cityKey) return;

  const fetchCityData = async () => {
    try {
      console.log(
        `Req: ${FETCH_CITY_INFO}${cityKey}?apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const result = await fetch(
        `${FETCH_CITY_INFO}${cityKey}?apikey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await result.json();

      const obj = {
        temperature: data[0]?.Temperature?.Metric?.Value,
        weatherText: data[0]?.WeatherText,
      };
      dispatch(updateCityWeather(obj));
    } catch (error) {
      console.warn(error?.message);
    }
  };
};

export default useGetCityInfo;
