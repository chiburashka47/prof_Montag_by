import React from "react";
import logo from "./style/img/simple_main.svg";
import a1 from "../../../Header/style/img/a1.png";
import mtc from "../../../Header/style/img/mtc.png";
import instagram from "../../../Header/style/img/instagram.png";
import gmail from "../../../Header/style/img/gmail.png";

export default function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="section__header">Контакты</div>
      <div className="contacts__content">
        <div className="contacts__content__left">
          <span className="contacts__content__left-title">Наши Контакты:</span>
          <a href="tel:+375445705542" className="contacts__content__left__row">
            <div className="contacts__content__left__row__img">
              <img alt="" src={a1}></img>
            </div>
            +375(44)570-55-42
          </a>
          <a href="tel:+375295705542" className="contacts__content__left__row">
            <div className="contacts__content__left__row__img">
              <img alt="" src={mtc}></img>
            </div>
            +375(29)570-55-42
          </a>
          <a
            href="https://www.instagram.com/pm_profmontage/"
            className="contacts__content__left__row"
          >
            <div className="contacts__content__left__row__img">
              <img alt="" src={instagram}></img>
            </div>
            @pm_profmontage
          </a>
          <a
            href="mailto:pm.profmontage@gmail.com"
            className="contacts__content__left__row"
          >
            <div className="contacts__content__left__row__img">
              <img alt="" src={gmail}></img>
            </div>
            pm.profmontage@gmail.com
          </a>
        </div>
        <div className="contacts__content__right">
          <img src={logo} alt="" className="contacts__content__right-img"></img>
        </div>
      </div>
    </div>
  );
}
