import React, { useEffect, useState } from "react";
import Logo from "./style/img/horizontal_white.svg";
import a1 from "./style/img/a1.png";
import mtc from "./style/img/mtc.png";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);

  function getHeaderHeight() {
    setHeaderHeight(
      document.getElementById("header").getBoundingClientRect().height
    );
  }

  useEffect(() => {
    getHeaderHeight();
  });

  return (
    <div className="header" id="header">
      <div className="header__allContainer">
        <a href="#startPage" className="header__allContainer-logo">
          <img style={{ width: "100%" }} className="" alt="" src={Logo}></img>
        </a>

        <div className="header__allContainer-navigation">
          <ul className="header__allContainer-navigation__container">
            <div
              className="header__allContainer-navigation__text"
              onClick={() => {
                window.scrollTo(
                  0,
                  document.getElementById("promotions").offsetTop - headerHeight
                );
              }}
            >
              Акции
            </div>
            <div
              className="header__allContainer-navigation__text"
              onClick={() => {
                window.scrollTo(
                  0,
                  document.getElementById("ourWorks").offsetTop - headerHeight
                );
              }}
            >
              Наши Работы
            </div>
            <div
              onClick={() => {
                window.scrollTo(
                  0,
                  document.getElementById("priceCalc").offsetTop - headerHeight
                );
              }}
              className="header__allContainer-navigation__text"
            >
              Расчет Стоимости
            </div>
            <div
              onClick={() => {
                window.scrollTo(
                  0,
                  document.getElementById("contacts").offsetTop - headerHeight
                );
              }}
              className="header__allContainer-navigation__text"
            >
              Контакты
            </div>
          </ul>
        </div>

        <div className="header__allContainer-contacts">
          <div className="header__allContainer-contacts__container">
            <a
              href="tel:+375295705544"
              className="header__allContainer-contacts__text"
            >
              <div className="header__allContainer-contacts__container__img">
                <img alt="" src={a1}></img>
              </div>
              +375(29)570-55-44
            </a>

            <a
              href="tel:+375295705542"
              className="header__allContainer-contacts__text"
            >
              <div className="header__allContainer-contacts__container__img">
                <img alt="" src={mtc}></img>
              </div>
              +375(29)570-55-42
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
