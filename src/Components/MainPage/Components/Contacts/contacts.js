import React from "react";
import logo from "./style/img/simple_main.svg";

export default function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="section__header">Контакты</div>
      <div className="contacts__content">
        <div className="contacts__content__left"></div>
        <div className="contacts__content__right">
          <img src={logo} alt="" className="contacts__content__right-img"></img>
        </div>
      </div>
    </div>
  );
}
