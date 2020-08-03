import React, { useState } from "react";

export default function NavList({ navlist }) {
  return (
    <div className="navList">
      {navlist.map((item, index) => {
        return (
          <div key={index} className={`navList__item ${item.className}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
