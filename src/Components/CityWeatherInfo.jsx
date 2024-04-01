import React from "react";
import { useSelector } from "react-redux";
import useGetCityInfo from "../Hooks/useGetCityInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMoon,
  faCloudSun,
  faCloudRain,
  faSnowflake,
  faSunPlantWilt,
  faCloudMoon,
  faCloudMoonRain,
} from "@fortawesome/free-solid-svg-icons";
import useDayOrNight from "../Hooks/useDayOrNight";
import useGetCityInfoByCoord from "../Hooks/useGetCityInfoByCoord";

const CityWeatherInfo = () => {
  useGetCityInfo();

  const weatherData = useSelector((state) => state.city?.cityWeather);
  const cities = useSelector((state) => state.city?.cities);
  const cityKey = useSelector((state) => state.city?.cityKey);
  const userInputCity = useSelector((state) => state.city?.userInputCity);
  const isDay = useDayOrNight();

  const weatherDayIcon = {
    clear: faSunPlantWilt,
    cloudy: faCloudSun,
    rainy: faCloudRain,
    snowy: faSnowflake,
  };

  const weatherNightIcon = {
    clear: faMoon,
    cloudy: faCloudMoon,
    rainy: faCloudMoonRain,
    snowy: faSnowflake,
  };

  const selectWeatherIcon = () => {
    const temperature = weatherData?.temperatureInC;
    let weather = "";
    if (temperature > 30) {
      weather = "clear";
    } else if (temperature > 20) {
      weather = "cloudy";
    } else if (temperature > 10) {
      weather = "rainy";
    } else {
      weather = "snow";
    }

    if (isDay) {
      return weatherDayIcon[weather];
    } else {
      return weatherNightIcon[weather];
    }
  };

  const getState = () => {
    let state = cities?.reduce(
      (acc, curr) =>
        curr?.Key === cityKey
          ? (acc = curr?.AdministrativeArea?.LocalizedName)
          : acc,
      ""
    );
    return state;
  };

  if (!weatherData) return;

  console.log("weather data:", weatherData);
  return (
    <>
      <div className="weather-page-container">
        <div>
          <FontAwesomeIcon className="weather-img" icon={selectWeatherIcon()} />
        </div>
        <div className="temperature">
          {weatherData?.temperatureInC}
          {"°"}C
        </div>
        <div className="weather-text">
          {weatherData?.weatherText?.toUpperCase()}
        </div>
        <div className="weather-text">
          <FontAwesomeIcon icon={faLocationDot} className="weather-icon" />
          <span className="weather-info">{userInputCity?.toUpperCase()},</span>
          <span className="weather-info">{getState()?.toUpperCase()}</span>
        </div>
      </div>
      <div className="weather-footer">
        <span className="weather-footer-items">
          {weatherData?.temperatureInF}
          {"°"}F
        </span>
        {weatherData?.isDayTime ? (
          <FontAwesomeIcon className="weather-footer-items" icon={faCloudSun} />
        ) : (
          <FontAwesomeIcon className="weather-footer-items" icon={faMoon} />
        )}
      </div>
    </>
  );
};

export default CityWeatherInfo;
