import { useEffect } from "react";
import { FETCH_CITY_KEY } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCities,  updateCityKey } from "../redux/citySlice";
const useGetCityData = () => {
  const dispatch = useDispatch();
  const userInputCity = useSelector((state) => state?.city?.userInputCity);

  useEffect(() => {
    if (userInputCity?.length > 0) {
      fetchData();
    }
  }, [userInputCity]);

  const fetchData = async () => {
    console.log("API Req:", `${FETCH_CITY_KEY}${userInputCity}`);
    const result = await fetch(`${FETCH_CITY_KEY}${userInputCity}`);

    const data = await result.json();
    console.log("data:", data);
    dispatch(updateCities(data));
  };
};

export default useGetCityData;
