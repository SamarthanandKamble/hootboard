import React, { useState } from "react";
import UserInput from "./UserInput";
import Cities from "./Cities";
import Header from "./Header";
import CityWeatherInfo from "./CityWeatherInfo";
import { useSelector } from "react-redux";

const Home = () => {
  const cityKey = useSelector((state) => state.city?.cityKey);
  return (
    <>
      <Header title={"Weather App"} />
      {cityKey ? (
        <>
          <CityWeatherInfo />
        </>
      ) : (
        <>
          <div className="home-container">
            <div>
              <UserInput />
              <Cities />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
