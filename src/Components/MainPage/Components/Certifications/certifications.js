import React from "react";

export default function Certifications() {
  return (
    <div className="certifications">
      <div className="section__header">
        Технические свидетельства на материалы
      </div>
      <div className="certifications__content">
        <span className="certifications__content__text">
          Мы используем только сертифицированные полотна от проверенных
          поставщиков.
        </span>
        <div className="certifications__content-row">
          <div className="certifications__content__img certifications__content__img-1"></div>
          <div className="certifications__content__img certifications__content__img-2"></div>
          <div className="certifications__content__img certifications__content__img-3"></div>
          <div className="certifications__content__img certifications__content__img-4"></div>
          <div className="certifications__content__img certifications__content__img-5"></div>
          <div className="certifications__content__img certifications__content__img-6"></div>
        </div>
      </div>
    </div>
  );
}
