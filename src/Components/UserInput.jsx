import React from "react";
import useGetCityKey from "../Hooks/useGetCityKey";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCities,
  updateCityKey,
  updateCityWeather,
  updateError,
  updateUserInputCity,
} from "../redux/citySlice";
import { useState, useSyncExternalStore } from "react";
import useGetCityInfoByCoord from "../Hooks/useGetCityInfoByCoord";

const UserInput = () => {
  const [location, setLocation] = useState(null);

  const error = useSelector((state) => state.city?.error);
  const city = useSelector((state) => state.city?.userInputCity);
  const cities = useSelector((state) => state?.city?.cities);
  const dispatch = useDispatch();
  useGetCityKey();
  useGetCityInfoByCoord(location);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (city?.length >= 1) {
      dispatch(updateCities([cities[0]]));
      dispatch(updateCityKey(cities[0]?.Key));
    }
  };

  const getLocationCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Error while fetching coordinates", error?.message);
          dispatch(updateError("Error while fetching coordinates"));
        }
      );
    } else {
      dispatch(updateError("Geolocation is not supported by this browser."));
    }
  };

  return (
    <>
      <form className="input-container" onSubmit={handleFormSubmit}>
        <input
          type="search"
          className="input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => dispatch(updateUserInputCity(e.target.value))}
        />
        {error && <div className="error-msg">{error}</div>}
        <div className="line-breaker">
          <span className="line"></span>
          <span className="line-breaker-text">or</span>
          <span className="line"></span>
        </div>
      </form>
      <button className="location-btn" onClick={getLocationCoordinates}>
        Get device location
      </button>
    </>
  );
};

export default UserInput;
