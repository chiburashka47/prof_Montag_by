import React from "react";
import Logo from "./style/img/horizontal_white.svg";
import Instagram from "./style/img/instagramWhite.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__allContainer">
        <div className="header__allContainer-logo">
          <img style={{ width: "100%" }} className="" alt="" src={Logo}></img>
        </div>

        <div className="header__allContainer-navigation">
          <ul className="header__allContainer-navigation__container">
            <span className="header__allContainer-navigation__text">Акции</span>
            <span className="header__allContainer-navigation__text">
              Наши Работы
            </span>
            <span className="header__allContainer-navigation__text">
              Расчет Стоимости
            </span>
            <span className="header__allContainer-navigation__text">
              Контакты
            </span>
          </ul>
        </div>

        <div className="header__allContainer-contacts">
          <div className="header__allContainer-contacts__container">
            <div className="header__allContainer-contacts__text">
              +375 (29) 317 00 41
            </div>
            <div className="header__allContainer-contacts__text">
              +375 (29) 317 00 41
            </div>
            {/* <div className="header__allContainer-contacts-instagram__container">
              <img alt="" src={Instagram}></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
