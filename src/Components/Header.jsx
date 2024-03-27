import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { updateCities, updateCityKey, updateUserInputCity } from "../redux/citySlice";

const Header = ({ title }) => {
  const cityKey = useSelector((state) => state.city?.cityKey);
  const dispatch = useDispatch();
  const goBackToUserInput = () => {
    dispatch(updateCityKey(""));
    dispatch(updateUserInputCity(null));
  };
  return (
    <div className="header">
      {cityKey ? (
        <>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-arrow"
            onClick={goBackToUserInput}
          />
          <span>{title}</span>
        </>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

export default Header;
