import React from "react";

let allPrice = 0,
  square = 0,
  perimetr = 0,
  light = 0;

const calcPrice = (value) => {
  square = document.getElementById("square").value * 10.5;
  perimetr = document.getElementById("perimetr").value * 8;
  light = document.getElementById("light").value * 13.5;
  allPrice = square + perimetr + light;
  checkField(value);
};

const checkField = (value) => {
  if (
    document.getElementById("square").value &&
    document.getElementById("perimetr").value &&
    document.getElementById("light").value
  ) {
    console.log(allPrice);
    if (isNaN(allPrice)) {
      document.getElementById("allPrice").value = "Введены неверные данные!";
    } else {
      document.getElementById("allPrice").value = allPrice + " бел.р.";
    }
  }
};

export default function PriceCalc() {
  return (
    <div className="priceCalc" id="priceCalc">
      <div className="section__header">Расчет стоимости</div>
      <div className="priceCalc__content">
        <div className="priceCalc__content__title">
          <span className="priceCalc__content__title-text">
            УЗНАЙТЕ СТОИМОСТЬ СВОЕГО ПОТОЛКА
          </span>
        </div>

        <div className="priceCalc__content__input">
          <div className="priceCalc__content__input__container">
            <input
              type="text"
              id="square"
              placeholder="Площадь (кв.м.)"
              className="priceCalc__content__input-item"
              onChange={(item) => {
                calcPrice(item.target.value);
              }}
            ></input>
          </div>
          <div className="priceCalc__content__input__container">
            <input
              type="text"
              id="perimetr"
              placeholder="Периметр (м.)"
              className="priceCalc__content__input-item"
              onChange={(item) => {
                calcPrice(item.target.value);
              }}
            ></input>
          </div>
          <div className="priceCalc__content__input__container">
            <input
              type="text"
              id="light"
              placeholder="Кол-во световых точек (шт.)"
              className="priceCalc__content__input-item"
              onChange={(item) => {
                calcPrice(item.target.value);
              }}
            ></input>
          </div>
          <div className="priceCalc__content__input__container">
            <input
              type="text"
              id="allPrice"
              placeholder="Итоговая стоимость (бел.р.)"
              className="priceCalc__content__input-item"
              readOnly={true}
            ></input>
          </div>
        </div>
        <div className="priceCalc__content__desc">
          <span className="priceCalc__content__desc-text">
            Стоимость в онлайн калькуляторе приблизительна. Для более точного
            расчета стоимости необходима консультация специалиста.
          </span>
        </div>
        <div className="priceCalc__content__btn">
          <a
            href="tel:+375295705544"
            className="startPage__btnContainer-backСall startPage__btn"
          >
            Связатья с нами
          </a>
        </div>
      </div>
    </div>
  );
}
