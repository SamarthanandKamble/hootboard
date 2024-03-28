import { useEffect, useRef } from "react";
import { FETCH_CITY_KEY } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCities, updateError } from "../redux/citySlice";
const useGetCityData = () => {
  const timerId = useRef();
  const dispatch = useDispatch();
  const userInputCity = useSelector((state) => state?.city?.userInputCity);

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      if (userInputCity?.length > 0) {
        fetchData();
      }
    }, 400);

    return () => clearTimeout(timerId.current);
  }, [userInputCity]);

  const fetchData = async () => {
    try {
      const result = await fetch(`${FETCH_CITY_KEY}${userInputCity}`);
      const data = await result.json();
      if (data?.length > 0) {
        dispatch(updateCities(data));
        dispatch(updateError(""));
      } else {
        dispatch(updateError("No data found"));
      }
    } catch (error) {
      dispatch(updateError(error?.message));
    }
  };
};

export default useGetCityData;
