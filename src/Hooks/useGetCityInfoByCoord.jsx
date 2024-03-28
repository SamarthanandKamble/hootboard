import React, { useEffect } from "react";
import { FETCH_CITY_INFO_BY_COORDS } from "../constants";
import { useDispatch } from "react-redux";
import {
  updateCityKey,
  updateError,
  updateUserInputCity,
} from "../redux/citySlice";
const useGetCityInfoByCoord = (location) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (location) {
      fetchDataByLocation();
    }
  }, [location]);

  if (!location) return;
  const { latitude, longitude } = location;

  const fetchDataByLocation = async () => {
    try {
      const result = await fetch(
        `${FETCH_CITY_INFO_BY_COORDS}${latitude}%2C${longitude}`
      );
      const data = await result.json();
      if (data) {
        dispatch(updateCityKey(data?.Key));
        dispatch(updateUserInputCity(data?.LocalizedName));
        dispatch(updateError(""));
      } else {
        dispatch(
          updateError("Failed to load the data for", latitude, longitude)
        );
      }
    } catch (error) {
      updateError(error?.message);
    }
  };
};

export default useGetCityInfoByCoord;
