import { useState } from "react";
import { useSelector } from "react-redux";

const useDayOrNight = () => {
  const timeString = useSelector(
    (state) => state.city?.cityWeather?.dateString
  );
  const time = new Date(timeString);
  const hour = time.getHours();

  const sunRiseHour = 6;
  const sunSetHour = 18;

  let isDay = false;
  if (hour >= sunRiseHour && hour < sunSetHour) {
    isDay = true;
  }
  return isDay;
};

export default useDayOrNight;
