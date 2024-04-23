import "./CardList.css";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ firstDriverIndex, lastDriverIndex, searchDriverById }) => {
  const drivers = useSelector((state) => state.drivers);
  //Si tengo el id se filtra
  const currentDrivers = searchDriverById
    ? drivers.filter((driver) => driver.id.toString() === searchDriverById)
    : drivers.slice(firstDriverIndex, lastDriverIndex);

  const defaultImage =
    "https://images.pexels.com/photos/18373115/pexels-photo-18373115/free-photo-of-coche-vehiculo-prisa-neumatico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="cardlist-container">
      {currentDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          image={driver.image || defaultImage}
          nationality={driver.nationality}
          dob={driver.dob}
          teams={driver.teams || ["Not Available"]}
          description={driver.description || "Not Available"}
        />
      ))}
    </div>
  );
};

export default CardList;
