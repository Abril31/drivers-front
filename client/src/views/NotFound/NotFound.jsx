import React from "react";
import notfound from "../../assets/images/404.png";
import "./notFound.css";
const NotFound = () => {
  return (
    <div className="cont-picture">
      <img src={notfound} alt="Not Found" className="picture-not" />
    </div>
  );
};

export default NotFound;
