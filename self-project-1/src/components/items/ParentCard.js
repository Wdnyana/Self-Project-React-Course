import React from "react";
import CardLayout from "../card/CardLayout";
import CardItem from "./CardItem";

const ParentCard = (props) => {
  return (
    <CardLayout className="card__parent">
      <h1 className="card__parent__title">CARD GAME</h1>
      <div className="card__parent__item">
        <CardItem
          img={props.data[0].img}
          title={props.data[0].title}
          desc={props.data[0].desc}
          date={props.data[0].date}
          price={props.data[0].price}
        />

        <CardItem
          img={props.data[1].img}
          title={props.data[1].title}
          desc={props.data[1].desc}
          date={props.data[1].date}
          price={props.data[1].price}
        />

        <CardItem
          img={props.data[2].img}
          title={props.data[2].title}
          desc={props.data[2].desc}
          date={props.data[2].date}
          price={props.data[2].price}
        />
      </div>
    </CardLayout>
  );
};

export default ParentCard;
