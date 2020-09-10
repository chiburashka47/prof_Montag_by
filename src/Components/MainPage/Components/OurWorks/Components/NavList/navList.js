import React, { useState } from "react";

export default function NavList({ navlist }) {
  const removeACtive = () => {
    let item = document.querySelectorAll(".navList__item");
    item.forEach((elem) => {
      elem.classList.remove("active");
    });
  };

  return (
    <div className="navList">
      {navlist.map((item, index) => {
        return (
          <div
            key={index}
            className={`navList__item ${item.active ? "active" : " "}`}
            onClick={(elem) => {
              removeACtive();
              elem.target.classList.add("active");
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
