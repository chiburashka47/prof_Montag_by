import React from "react";
import logo from "../../../Header/style/img/horizontal_white.svg";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__logo">
        <img src={logo} alt=""></img>
      </div>

      <div className="footer__content">
        <span className="footer__content__text"> УНП 191496489</span>
        <span className="footer__content__text">
          натяжные потолки любой сложности{" "}
        </span>
        <span className="footer__content__text">
          Copyright © ЧСУП "ЗанатСтрой", 2011-2020
        </span>
      </div>
    </div>
  );
}
