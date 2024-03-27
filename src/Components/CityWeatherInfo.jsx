import React from "react";
import { useSelector } from "react-redux";

const CityWeatherInfo = () => {
  const weatherData = useSelector((state) => state.city?.cityWeather);

  return (
    <>
      <div className="weather-page-container">
        <div>
          <img className="weather-img" />
        </div>
        <div className="temperature">13dC</div>
        <div>Broken Clouds</div>
        <div>
          <span>V</span>
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
