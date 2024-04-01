import React from "react";
import { Provider } from "react-redux";
import { expect, it } from "vitest";
import Cities from "../Cities";
import UserInput from "../UserInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "../../redux/store";
import { updateCities, updateCityWeather } from "../../redux/citySlice";
import CityWeatherInfo from "../CityWeatherInfo";
import Cities_Data from "../Mock_Data_Test/Cities.json";
import City_Weather_Data from "../Mock_Data_Test/City_Weather.json";

it("Check if the search for the specific city is loaded with suggestions", () => {
  store.dispatch(updateCities(Cities_Data));

  render(
    <Provider store={store}>
      <Cities />
    </Provider>
  );
  //Query
  const suggestions = screen.getByRole("list");
  const cityName = screen.getAllByText("Solapur");
  //Assertion
  expect(suggestions).toBeInTheDocument();
  expect(cityName).length(5);
});

it("On selecting city, the weather component should render", () => {
  store.dispatch(updateCityWeather(City_Weather_Data));
  render(
    <Provider store={store}>
      <CityWeatherInfo />
    </Provider>
  );
    const temperatureInC = screen.getByText("38.2°C");
    const temperatureTemplate = screen.getByText("HAZY SUNSHINE");
    const temperatureInF = screen.getByText("101°F");


  expect(temperatureInC).toBeInTheDocument()
  expect(temperatureInF).toBeInTheDocument()
  expect(temperatureTemplate).toBeInTheDocument()
});


it("On get device location button click, should render the weather info",()=>{
  
   store.dispatch(updateCityWeather(City_Weather_Data));
   render(
     <Provider store={store}>
       <UserInput/>
     </Provider>
   );
   
   const getDeviceLocationBtn = screen.getByRole("button")
   expect(getDeviceLocationBtn).toBeInTheDocument()

   fireEvent.click(getDeviceLocationBtn);
   
   render(
     <Provider store={store}>
       <CityWeatherInfo/>
     </Provider>
   );


   const temperatureInC = screen.getByText("38.2°C");
   const temperatureTemplate = screen.getByText("HAZY SUNSHINE");
   const temperatureInF = screen.getByText("101°F");

   expect(temperatureInC).toBeInTheDocument();
   expect(temperatureInF).toBeInTheDocument();
   expect(temperatureTemplate).toBeInTheDocument();
})