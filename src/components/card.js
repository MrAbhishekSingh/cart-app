import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Cards = ({ item, handleClick }) => {
  const { date, seat, Available, } = item;
  return (
    <>
      <div className="cards">
        <div className="details">
          <p>{date}</p>
          <p>{seat}</p>
          <p>{Available}</p>
          <button onClick={() => handleClick(item)}>Book now</button>
        </div>
      </div>
    </>

  );
};

export default Cards;

