import React from "react";
import logo from "./style/img/vertical_main.svg";
import ok from "./style/img/ok.png";

export default function StartPage() {
  return (
    <div className="startPage" id="startPage">
      <div className="startPage__container">
        <div className="startPage__logo">
          <img style={{ width: "100%" }} alt="" src={logo}></img>
        </div>
        <div className="startPage__descContainer">
          <div className="startPage__descContainer-first startPage__descContainer-row">
            <img
              src={ok}
              alt=""
              className="startPage__descContainer__img"
            ></img>
            <span className="startPage__descContainer__text">
              Профессиональный монтаж
            </span>
          </div>
          <div className="startPage__descContainer-second startPage__descContainer-row">
            <img
              src={ok}
              alt=""
              className="startPage__descContainer__img"
            ></img>
            <span className="startPage__descContainer__text">
              Грамотная консультация
            </span>
          </div>
          <div className="startPage__descContainer-third startPage__descContainer-row">
            <img
              src={ok}
              alt=""
              className="startPage__descContainer__img"
            ></img>
            <span className="startPage__descContainer__text">
              Честные и фиксированные цены
            </span>
          </div>
        </div>
        <div className="startPage__btnContainer">
          <a
            href="tel:+375295705544"
            className="startPage__btnContainer-backСall startPage__btn"
          >
            Связатья с нами
          </a>

          <div
            onClick={() => {
              window.scrollTo(
                0,
                document.getElementById("priceCalc").offsetTop -
                  document.getElementById("header").getBoundingClientRect()
                    .height
              );
            }}
            className="startPage__btnContainer-calculation startPage__btn"
          >
            Расчитать стоимость
          </div>
        </div>
      </div>
    </div>
  );
}
