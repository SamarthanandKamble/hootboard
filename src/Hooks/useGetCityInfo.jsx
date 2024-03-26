import { useEffect } from "react";
import { FETCH_CITY_INFO } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCityWeather } from "../redux/citySlice";

const useGetCityInfo = () => {
  const dispatch = useDispatch();
  const cityKey = useSelector((state) => state.city?.cityKey);
  useEffect(() => {
    fetchCityData();
  }, [cityKey]);

  const fetchCityData = async () => {
    try {
      const result = await fetch(`${FETCH_CITY_INFO}${cityKey}`);
      const data = await result.json();
      if (data) {
        const obj = {
          temperature: data?.Temperature?.Value,
          weatherText: data?.WeatherText,
        };
        dispatch(updateCityWeather(obj));
      }
    } catch (error) {
      console.warn(error?.message);
    }
  };
};

export default useGetCityInfo;
