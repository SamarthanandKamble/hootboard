import { useEffect } from "react";
import { FETCH_CITY_KEY } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateCities } from "../redux/citySlice";
const useGetCityData = () => {
  
  const dispatch = useDispatch();
  const userInputCity = useSelector((state) => state?.city?.userInputCity);

  useEffect(() => {
    if (userInputCity?.length > 0) {
      fetchData();
    }
  }, [userInputCity]);

  const fetchData = async () => {
    const result = await fetch(`${FETCH_CITY_KEY}${userInputCity}`);
    const data = await result.json();
    dispatch(updateCities(data));
  };
};

export default useGetCityData;
