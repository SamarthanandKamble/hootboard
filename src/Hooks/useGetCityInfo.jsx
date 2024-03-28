import { useEffect, useRef } from "react";
import { FETCH_CITY_INFO } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCityWeather, updateError } from "../redux/citySlice";

const useGetCityInfo = () => {
  const timerId = useRef();
  const dispatch = useDispatch();
  const cityKey = useSelector((state) => state.city?.cityKey);

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (cityKey) {
        fetchCityData();
      }
    }, 400);

    return () => clearTimeout(timerId.current);
  }, [cityKey]);

  if (!cityKey) return;

  const fetchCityData = async () => {
    try {
      const result = await fetch(
        `${FETCH_CITY_INFO}${cityKey}?apikey=${import.meta.env.VITE_API_KEY}`
      );
      const data = await result.json();
      const obj = {
        temperatureInC: data[0]?.Temperature?.Metric?.Value,
        temperatureInF: data[0]?.Temperature?.Imperial?.Value,
        weatherText: data[0]?.WeatherText,
        isDayTime: data[0]?.IsDayTime,
        dateString: data[0]?.LocalObservationDateTime,
      };
      if (obj) {
        dispatch(updateCityWeather(obj));
        dispatch(updateError(""));
      } else {
        dispatch(updateError("Failed to fetch data for", cityKey));
      }
    } catch (error) {
      dispatch(updateError(error?.message));
    }
  };
};

export default useGetCityInfo;
