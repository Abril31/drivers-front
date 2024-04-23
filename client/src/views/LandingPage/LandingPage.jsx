import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="land-container">
      <div className="land-cont2">
        <Link to="/home">
          <button className="btn-land">GO!!!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
