import React from "react";
import Logo from "./style/img/horizontal_white.svg";
import Instagram from "./style/img/instagramWhite.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__allContainer">
        <a href="#startPage" className="header__allContainer-logo">
          <img style={{ width: "100%" }} className="" alt="" src={Logo}></img>
        </a>

        <div className="header__allContainer-navigation">
          <ul className="header__allContainer-navigation__container">
            <a
              href="#promotions"
              className="header__allContainer-navigation__text"
            >
              Акции
            </a>
            <a
              href="#ourWorks"
              className="header__allContainer-navigation__text"
            >
              Наши Работы
            </a>
            <a
              href="#priceCalc"
              className="header__allContainer-navigation__text"
            >
              Расчет Стоимости
            </a>
            <a
              href="#contacts"
              className="header__allContainer-navigation__text"
            >
              Контакты
            </a>
          </ul>
        </div>

        <div className="header__allContainer-contacts">
          <div className="header__allContainer-contacts__container">
            <a
              href="tel:++375 29 317 00 41"
              className="header__allContainer-contacts__text"
            >
              +375 (29) 317 00 41
            </a>
            <a
              href="tel:++375 29 317 00 41"
              className="header__allContainer-contacts__text"
            >
              +375 (29) 317 00 41
            </a>
            {/* <div className="header__allContainer-contacts-instagram__container">
              <img alt="" src={Instagram}></img>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
