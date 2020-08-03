import React, { useState } from "react";
import NavList from "./Components/NavList/navList";
import Slider from "./Components/Slider/slider";

export default function OurWorks() {
  const [navList, setNavList] = useState([
    "Световые линии",
    "Парящие потолки",
    "Теневое примыкание",
    "Slott",
    "Двухуровневые потолки",
    "Одноуровневые потолки",
    "Трековая система",
  ]);

  return (
    <div className="ourWorks" id="ourWorks">
      <div className="section__header">Наши работы</div>
      <div className="ourWorks__content">
        <NavList navlist={navList} />
        <Slider />
      </div>
    </div>
  );
}
