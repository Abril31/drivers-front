import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, forename, surname, image, teams, dob }) => {
  return (
    <Link className="link-card" to={`/detail/${id}`}>
      <div className="card-container">
        <div className="card-img">
          <img src={image} alt={forename} />
        </div>
        <div className="cont-2">
          <div className="text-cont">
            <h2>
              {forename} {surname}
            </h2>
            <div>
              <p className="teams">{teams}</p>
              <span className="dob-text">Date of Birth: {dob}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
