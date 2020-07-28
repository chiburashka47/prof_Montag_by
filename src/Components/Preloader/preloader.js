import React from "react";
import Logo from "./style/horizontal_white.svg";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__wrapper">
        <div className="preloader__wrapper__container">
          <img className="preloader__wrapper__icon" src={Logo} alt=""></img>
        </div>
      </div>
    </div>
  );
}
