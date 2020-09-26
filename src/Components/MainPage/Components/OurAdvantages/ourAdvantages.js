import React from "react";
import ok from "./style/img/ok.png";

export default function OurAdvantages() {
  const dataFirst = [
    "Бесплатный замер, консультация и дизайн проекта.",
    "Договор, гарантии, сервисное обслуживание.",
    "  Более 3000 выполненых проектов и довольных клиентов.",
    "Работа профессиональным инструментом с системой пылеудаления.",
  ];
  const dataSecond = [
    " Уборка помещений после монтажа.",
    "  Честный расчет стоимости.",
    " Постоянное обучение новым технологиям.",
    "Реализация сложных, нестандартных заказов.",
  ];

  function listDrawer(data) {
    return data.map((item, index) => {
      return (
        <div key={index} className="ourAdvantages__content__item">
          <img src={ok} alt="" className="ourAdvantages__content__img"></img>

          <div className="ourAdvantages__content__text">{item}</div>
        </div>
      );
    });
  }

  return (
    <div className="ourAdvantages" id="ourAdvantages">
      <div className="section__header">Наши приемущества</div>
      <div className="ourAdvantages__content">
        <div className="ourAdvantages__content-column">
          {listDrawer(dataFirst)}
        </div>

        <div className="ourAdvantages__content-column">
          {listDrawer(dataSecond)}
        </div>
      </div>
    </div>
  );
}
