import React from "react";
import ParentCard from "./components/items/ParentCard";

const App = () => {
  // dummy data for card
  const gameData = [
    {
      id: 1,
      title: "Marvel's Guardians of the Galaxy",
      desc: "Game aksi-petualangan ini, Anda adalah Star-Lord yang memimpin Penjaga yang tidak dapat diprediksi dari satu ledakan kekacauan ke ledakan berikutnya.",
      price: "879.000",
      img: "img/guardians-of-the-galaxy.jpg",
      date: new Date(2021, 10, 27),
    },

    {
      id: 2,
      title: "Contractors",
      desc: "Kontraktor adalah game penembak multipemain kompetitif berbasis tim untuk perangkat realitas virtual.",
      price: "108.999",
      img: "img/contractors.jpg",
      date: new Date(2018, 12, 14),
    },

    {
      id: 3,
      title: "Blade Assault",
      desc: "Blade Assault adalah platformer rogue-lite aksi 2D dengan seni piksel yang indah di dunia sci-fi yang sunyi.",
      price: "104.999",
      img: "img/blade-assault.jpg",
      date: new Date(2022, 1, 18),
    },
  ];

  return (
    <>
      <ParentCard data={gameData} />
    </>
  );
};

export default App;
