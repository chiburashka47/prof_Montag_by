import React from "react";
import karnizi from "./style/img/karnizi.jpg";
import all from "./style/img/all.jpg";

export default function Promotions() {
  const data = [
    {
      img: karnizi,
      title: " Карниз в подарок",
      text:
        " Хотите получить карниз в подарок? Просто закажите у нас его монтаж",
    },
    {
      img: all,
      title:
        " Скидка 10% при заказе потолков сразу во всю квартиру (3 и более комнат)",
      text:
        " Заказывая потолки к примеру в коридор ванную и кухню Вы получаете дополнительную скидку 10% от итоговой стоимости.",
    },
  ];

  return (
    <div className="promotions" id="promotions">
      <div className="section__header">Акции</div>
      <div className="promotions__content">
        {data.map((item, index) => {
          return (
            <div key={index} className="promotions__content-row">
              <div className="promotions__content__img">
                <img src={item.img} alt=""></img>
              </div>
              <div className="promotions__content__desk-container">
                <div className="promotions__content__desk-title">
                  {item.title}
                </div>
                <div className="promotions__content__desk-text">
                  {item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
