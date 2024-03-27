import React from "react";
import { useSelector } from "react-redux";
import useGetCityInfo from "../Hooks/useGetCityInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CityWeatherInfo = () => {
  useGetCityInfo();
  const weatherData = useSelector((state) => state.city?.cityWeather);
  if (!weatherData) return;
  console.log("weather data:", weatherData);
  return (
    <>
      <div className="weather-page-container">
        <div>
          <img className="weather-img" />
        </div>
        <div className="temperature">{weatherData?.temperatureInC} C</div>
        <div className="weather-text">{weatherData?.weatherText}</div>
        <div className="weather-text">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Mumbai , Maharashtra</span>
        </div>
      </div>
      <div className="weather-footer">
        <span className="weather-footer-items">data 1</span>
        <span className="weather-footer-items">data 2</span>
      </div>
    </>
  );
};

export default CityWeatherInfo;
