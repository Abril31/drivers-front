import "./Detail.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDriver, getDriver } from "../../Redux/actions";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const driver = useSelector((state) => state.driver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDriver(id));
    return () => dispatch(cleanDriver());
  }, [id]);
  const defaultImage =
    "https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/a/anthot4/07/p/51ff02ca581c4334ece364de7e102943.jpg";
  return (
    <div className="detail-cont">
      <section className="sect">
        <div className="text-container">
          <div className="main-info">
            <div className="info">
              <h3 className="tex-name">
                <span className="name-label">Name:</span> {driver[0]?.forename}{" "}
                {driver[0]?.surname}
              </h3>
              <h3 className="tex-name">
                <span className="name-label">Date of Birth: </span>
                {driver[0]?.dob}
              </h3>
            </div>
            <div className="info-2">
              <h3 className="tex-name">
                <span className="name-label"> Nationality: </span>
                {driver[0]?.nationality}
              </h3>
              <h3 className="tex-name">
                <span className="name-label">Teams: </span>
                {driver[0]?.teams || ["Not Available"]}
              </h3>
            </div>
          </div>
          <div className="description">
            <h3>Description:</h3>
            <p> {driver[0]?.description || "Not Available"}</p>
          </div>
          <div className="btn-container-detail">
            <Link to={"/home/"}>
              <button onClick={() => cleanDriver()}>BACK</button>
            </Link>
          </div>
        </div>
        <div className="img-container">
          <h1> ID: {driver[0]?.id}</h1>
          <img
            src={driver[0]?.image || defaultImage}
            className="image"
            alt={driver.image}
          />
        </div>
      </section>
    </div>
  );
}

export default Detail;
