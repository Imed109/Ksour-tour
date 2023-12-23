import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Custom card structure for ships
const CustomShipCard = ({ ship }) => {
  return (
    <div
      style={{
        width: "18rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={ship.image}
        alt={ship.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{ship.name}</h3>
        <p>{ship.description}</p>
      </div>
    </div>
  );
};

// Ship component
const Ferries = () => {
  // Sample list of ship companies (replace this with your data)
  const ships = useSelector((state) => state.ferries.ships);


  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {ships.map((ship, index) => (
          <CustomShipCard key={index} ship={ship} />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button as={Link} to="/formulaire"
          variant="primary"
          
        >
          Reservation
        </Button>
      </div>
    </div>
  );
};

export default Ferries;
