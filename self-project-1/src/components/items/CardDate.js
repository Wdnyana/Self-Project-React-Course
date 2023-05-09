import React from "react";

const CardDate = (props) => {
  // membuat tanggal sesuai negara khususnya indo menggunakan "id-Latn" tergantung versi browser dan jsnya
  const day = props.date.toLocaleString("id-Latn", { day: "2-digit" });
  const month = props.date.toLocaleString("id-Latn", { month: "long" });
  const years = props.date.getFullYear();

  return (
    <div className="card__date">
      <p className="card__date__day">{day}</p>
      <p className="card__date__month">{month}</p>
      <p className="card__date__year">{years}</p>
    </div>
  );
};

export default CardDate;
