import React, { useState } from "react";
import UserInput from "./UserInput";
import Cities from "./Cities";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header title={"Weather App"} />
      <div className="home-container">
        <div>
          <UserInput />
          <Cities />
        </div>
      </div>
    </>
  );
};

export default Home;
