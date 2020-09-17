import React from "react";
import getPhoto from "../../../../../../public/getPhoto";

export default function Slider({ navList }) {
  return (
    <>
      {navList.map((elem, index) => {
        return (
          <div className={`slider ${elem.active ? "active " : ""}`}>
            <div className="slider__textContainer">
              <span className="slider__textContainer-text">{elem.text}</span>
            </div>
            <div className="slider__photoContainer">
              {navList.map((elem2, index) => {
                return (
                  <div className="slider__photoContainer__item">
                    <div className="slider__photoContainer__item-container">
                      <div
                        key={index}
                        className="slider__photoContainer__item-img"
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
