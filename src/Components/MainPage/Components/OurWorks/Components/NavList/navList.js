import React from "react";

export default function NavList({ navlist, elemActive }) {
  return (
    <div className="navList">
      {navlist.map((item, index) => {
        return (
          <div
            key={index}
            className={`navList__item ${item.active ? "active" : " "}`}
            onClick={(elem) => {
              elemActive(index);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
