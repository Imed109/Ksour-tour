import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
const Ship = () => {
  // Sample list of ship companies (replace this with your data)
  const ships = [
    {
      name: "CTN",
      image:
        "https://kapitalis.com/tunisie/wp-content/uploads/2022/06/Compagnie-tunisienne-de-navigation-CTN.jpg",
      description:
        "La Compagnie tunisienne de navigation (CTN) est une compagnie tunisienne de navigation maritime assurant des liaisons régulières entre la Tunisie et les ports de Marseille et Gênes",
    },
    {
      name: "CORSICA",
      image:
        "https://i0.wp.com/travelboulevard.be/wp-content/uploads/2023/06/corsica-linea-logo-720x340-1.png?fit=720%2C340&ssl=1",
      description:
        "CORSICA linea est une compagnie maritime assurant des liaisons avec la France continentale, la Corse, l'Algérie, la Tunsie et la Sardaigne.",
    },
    {
      name: "GNV",
      image:
        "https://boxcoupon.it/wp-content/uploads/2021/06/GNV-logo-boxcoupon.png",
      description:
        "GNV est une importante compagnie de navigation maritime italienne assurant le transport de passagers, de véhicules et de fret sur des liaisons maritimes reliant l'Italie continentale à la Sicile, la Sardaigne, l'Espagne, le Maroc, la Tunisie et l'Albanie et est également présente sur les lignes entre la France, l'Espagne et le Maroc.",
    },
    // Add more ship companies as needed
  ];

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

export default Ship;
