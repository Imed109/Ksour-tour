import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Custom card structure
const CustomCard = ({ company }) => {
  return (
    <div
      style={{
        width: "10rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={company.image}
        alt={company.name}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <div style={{ padding: "10px" }}>
        <h3>{company.name}</h3>
      </div>
    </div>
  );
};

// Airlines component
const Airlines = () => {
  const companies = useSelector((state) => state.airlines.list);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {companies.map((company, index) => (
          <CustomCard key={index} company={company} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button as={Link} to="/formulaire" variant="primary">
          Reservation
        </Button>
      </div>
    </div>
  );
};

export default Airlines;
