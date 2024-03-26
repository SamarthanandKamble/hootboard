import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
    selectedCity: "",
    cityWeather: {},
    cityKey: "",
    userInputCity: "",
  },
  reducers: {
    updateCities: (state, action) => {
      state.cities = action.payload;
    },
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    updateCityWeather: (state, action) => {
      state.cityWeather = action.payload;
    },
    updateCityKey: (state, action) => {
      state.cityKey = action.payload;
    },
    updateUserInputCity: (state, action) => {
      state.userInputCity = action.payload;
    },
  },
});

export const {
  updateCities,
  selectCity,
  updateCityWeather,
  updateCityKey,
  updateUserInputCity,
} = citySlice.actions;

export default citySlice.reducer;
