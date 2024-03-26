import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCityKey } from "../redux/citySlice";

const Cities = () => {
  const cities = useSelector((state) => state.city?.cities);
  const dispatch = useDispatch();
  if (cities.length <= 0) return;

  const selectedCity = (city) => {
    const { Key } = city;
    dispatch(updateCityKey(Key));
  };

  return (
    <ul className="ul">
      {
        cities.map((city) => (
          <li key={city?.key} onClick={() => selectedCity(city)} className="li">
            <span>{city?.LocalizedName}</span>
            <span>{city?.AdministrativeArea?.ID}</span>
          </li>
        ))}
    </ul>
  );
};

export default Cities;
