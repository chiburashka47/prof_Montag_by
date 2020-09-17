import React, { useState } from "react";
import NavList from "./Components/NavList/navList";
import Slider from "./Components/Slider/slider";

export default function OurWorks() {
  const [navList, setNavList] = useState([
    {
      name: "Двухуровневые потолки",
      active: true,
      text:
        "Двухуровневый потолок — модное и эффектное интерьерное решение, которое помогает скрывать неровности потолочных перекрытий, создавать оригинальное освещение, осуществлять зонирование пространства как жилых, так и офисных помещений. Комбинируя разные фактуры, цвета и формы полотна, можно не только решить перечисленные выше задачи, но и оптически увеличить помещение.",
      img: "double_",
    },
    {
      name: "Slott",
      active: false,
      text:
        "Нишевые системы для натяжных потолков - это отличное решение для создания стильных и современных интерьеров. Ещё недавно такой дизайн потолка был возможен только из гипсокартона. Но благодаря специально разработанной профильной системе, возможности натяжных потолков стали по-настоящему безграничны. Освещение такого типа не просто помогает оформить интерьер, оно само является важным элементом дизайна.",
      img: "slott_",
    },
    {
      name: "Одноуровневые потолки",
      active: false,
      text:
        "Одноуровневые натяжные потолки являются универсальным и более дешевым вариантом по сравнению с установкой сложных многоярусных конструкций. Большой ассортимент покрытий, способов крепления и оформления позволяет получить разнообразные решения для создания красивого и необычного интерьера.",
      img: "one_",
    },
    {
      name: "Парящие линии",
      active: false,
      text:
        "Парящие линии – стильное решение для оформления интерьера и организации освещения в нем, которое может служить как основным, так и декоративным элементом освещения натяжного потолка. Для установки парящей линии используется специальный профиль, в который встраивается светодиодная подсветка и рассеивающая заглушка.  Такая технология позволяет нам создавать уникальную атмосферу стиля и уюта в вашем помещении.",
      img: "soaringLine_",
    },
    {
      name: "Порящий потолок",
      active: false,
      text:
        "Парящие натяжные потолки - это современное и стильное решение в мире натяжных потолков. В такой конструкции натяжное полотно обрамляется линией света по периметру, создавая эффект парящего в воздухе потолка. ",
      img: "soaringCeilin_",
    },
    {
      name: "Скрытый карниз",
      active: false,
      text:
        "Сейчас все больше людей хотят скрыть потолочный карниз. Популярны карнизные ниши, благодаря тому, что Вы видите только натяжной потолок и шторы, выходящие из потолка. Никаких креплений и конструктива. Такую нишу можно сделать несколькими способами. Технических решений существует несколько, они отличаются как по внешнему виду, так и по цене.",
      img: "cornice_",
    },
    {
      name: "Теневое примыкание",
      active: false,
      text:
        "Теневое примыкание натяжного потолка — это современный тип крепления с теневым зазором в 5-9 миллиметров от полотна до стены. Выглядит это как небольшой отступ от стены с тенью, при этом крепление не видно с любого ракурса.",
      img: "shadow_",
    },
    {
      name: "Трековые системы",
      active: false,
      text:
        "Трековая система позволяет зонировать пространство, может выступать в качестве как основного, так и дополнительного освещения. Позволяет расставлять световые акценты в наиболее важных локациях интерьера. Максимальное удобство использования треков заключается в возможности не только быстро менять положение светильников, передвигая их по треку, но и направление потока света.",
      img: "track_",
    },
  ]);
  const [activeItem, setActiveItem] = useState(navList[0]);

  const elemActive = (index) => {
    navList.map((item) => {
      return (item.active = false);
    });
    navList[index].active = true;
    setActiveItem(navList[index]);
  };

  return (
    <div className="ourWorks" id="ourWorks">
      <div className="section__header">Наши работы</div>
      <div className="ourWorks__content">
        <NavList navlist={navList} elemActive={elemActive} />
        <Slider activeItem={activeItem} navList={navList} />
      </div>
    </div>
  );
}
