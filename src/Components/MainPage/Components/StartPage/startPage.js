import React from "react";
import logo from "./style/img/vertical_main.svg";
import ok from "./style/img/ok.png";

export default function StartPage() {
  return (
    <div className="startPage">
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
              text text text
            </span>
          </div>
          <div className="startPage__descContainer-second startPage__descContainer-row">
            <img
              src={ok}
              alt=""
              className="startPage__descContainer__img"
            ></img>
            <span className="startPage__descContainer__text">
              text text text
            </span>
          </div>
          <div className="startPage__descContainer-third startPage__descContainer-row">
            <img
              src={ok}
              alt=""
              className="startPage__descContainer__img"
            ></img>
            <span className="startPage__descContainer__text">
              text text text
            </span>
          </div>
        </div>
        <div className="startPage__btnContainer">
          <div className="startPage__btnContainer-backСall"></div>
          <div className="startPage__btnContainer-calculation"></div>
        </div>
      </div>
    </div>
  );
}
