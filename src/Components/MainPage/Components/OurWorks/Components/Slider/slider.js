import React, { useState } from "react";
import getPhoto from "../../../../../../public/getPhoto";
import arrow from "./style/img/whiteArrow.png";

export default function Slider({ navList, activeItem }) {
  const [sliderActive, setSliderActive] = useState(false);
  const [count, setCount] = useState(0);
  const slider = document.getElementById("slider");

  const changePhoto = (index) => {
    setCount(index);
    setSliderActive(true);
  };

  return (
    <>
      <div
        id="slider"
        className={`slider__photo ${sliderActive ? "active_slide" : " "}`}
        onClick={(elem) => {
          if (elem.target === slider) {
            setSliderActive(false);
          }
        }}
      >
        <div
          onClick={() => {
            if (count === 7) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
          className={"slider__photo__arrow slider__photo__arrow-right"}
        >
          <img alt="" src={arrow}></img>
        </div>
        <div
          onClick={() => {
            if (count === 0) {
              setCount(7);
            } else {
              setCount(count - 1);
            }
          }}
          className={"slider__photo__arrow slider__photo__arrow-left"}
        >
          <img alt="" src={arrow}></img>
        </div>

        <div className="slider__photo__container">
          {getPhoto(`${activeItem.img}${count}`)}
        </div>
      </div>
      {navList.map((elem, index) => {
        return (
          <div key={index} className={`slider ${elem.active ? "active " : ""}`}>
            <div className="slider__textContainer">
              <span className="slider__textContainer-text">{elem.text}</span>
            </div>
            <div className="slider__photoContainer">
              {navList.map((elem2, index) => {
                return (
                  <div key={index} className="slider__photoContainer__item">
                    <div className="slider__photoContainer__item-container">
                      <div
                        key={index}
                        className="slider__photoContainer__item-img"
                        onClick={() => {
                          changePhoto(index);
                        }}
                      >
                        {getPhoto(`${elem.img}${index}`)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
