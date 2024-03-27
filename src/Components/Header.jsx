import React from "react";
import { useSelector } from "react-redux";

const Header = ({ title }) => {
  const cityKey = useSelector((state) => state.city?.cityKey);

  return (
    <div className="header">
      {cityKey ? (
        <>
          <span>{"<-"}</span>
          <span>{title}</span>
        </>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

export default Header;
