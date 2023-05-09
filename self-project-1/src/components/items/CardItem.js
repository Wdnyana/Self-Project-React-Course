import React from "react";

import CardLayout from "../card/CardLayout";
import CardDate from "./CardDate";

const CardItem = (props) => {
  return (
    <CardLayout className="card__item">
      <div className="card__item__content">
        <div className="card__item__content__top">
          <img
            src={props.img}
            className="card__item__content__top__img"
            alt="image1"
          />
        </div>
        <div className="card__item__content__middle">
          <h4 className="card__item__content__middle__title">{props.title}</h4>
          <p className="card__item__content__middle__desc">{props.desc}</p>
        </div>
        <div className="card__item__content__bottom">
          <div className="card__item__content__bottom__date">
            <p className="card__item__content__bottom__date__release">
              Release: &ensp;
            </p>
            <CardDate date={props.date} />
          </div>
          <p className="card__item__content__bottom__price">
            Rp. {props.price}
          </p>
        </div>
      </div>
    </CardLayout>
  );
};

export default CardItem;
