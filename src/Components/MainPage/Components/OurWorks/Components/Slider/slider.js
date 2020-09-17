import React from "react";
import getPhoto from "../../../../../../public/getPhoto";

export default function Slider({ activeItem, navList }) {
  return (
    <div className="slider">
      <div className="slider__textContainer">
        <span className="slider__textContainer-text">{activeItem.text}</span>
      </div>
      <div className="slider__photoContainer">
        {navList.map((elem, index) => {
          return (
            <div className="slider__photoContainer__item">
              <div className="slider__photoContainer__item-container">
                <div key={index} className="slider__photoContainer__item-img">
                  {getPhoto(`${activeItem.img}${index}`)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
