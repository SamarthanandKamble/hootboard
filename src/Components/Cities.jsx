import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCityKey } from "../redux/citySlice";

const Cities = () => {
  const cities = useSelector((state) => state.city?.cities);
  const city = useSelector((state) => state.city?.userInputCity);
  const dispatch = useDispatch();

  const selectedCity = (city) => {
    const { Key } = city;
    dispatch(updateCityKey(Key));
  };

  if (cities?.length <= 0) {
    return;
  }
  return (
    <>
      <ul className="ul">
        {city.length > 0 &&
          cities?.slice(0, 5).map((city) => (
            <li
              key={city?.Key}
              onClick={() => selectedCity(city)}
              className="li"
            >
              <span>{city?.LocalizedName}</span>
              <span>{city?.AdministrativeArea?.ID}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cities;
