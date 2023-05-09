import React from "react";

const CardLayout = (props) => {
  const isClass = "card__layout " + props.className;

  return <div className={isClass}>{props.children}</div>;
};

export default CardLayout;
