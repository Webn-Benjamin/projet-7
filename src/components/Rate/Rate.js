import React from "react";
import "./_rate.scss";
import greystar from "../../assets/img/Pages/housing/EtoileVide.png";
import redstar from "../../assets/img/Pages/housing/Etoile.png";

const Rate = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];
  console.log(rating);
  return (
    <div className="rate">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="star"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="star"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rate;
