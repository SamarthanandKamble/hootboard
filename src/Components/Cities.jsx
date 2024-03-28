import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCities,
  updateCityKey,
  updateUserInputCity,
} from "../redux/citySlice";
import useGetCityInfo from "../Hooks/useGetCityInfo";

const Cities = () => {
  const cities = useSelector((state) => state.city?.cities);
  const dispatch = useDispatch();

  const selectedCity = (city) => {
    const { Key } = city;
    dispatch(updateCityKey(Key));
  };

  if (cities?.length <= 0) return;

  return (
    <ul className="ul">
      {cities?.map((city) => (
        <li key={city?.Key} onClick={() => selectedCity(city)} className="li">
          <span>{city?.LocalizedName}</span>
          <span>{city?.AdministrativeArea?.ID}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
