import React from "react";
import Button from "react-bootstrap/Button";

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
  // Sample list of companies (replace this with your data)
  const companies = [
    {
      name: "Company A",
      image: "https://via.placeholder.com/150?text=Company+A",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    {
      name: "Company B",
      image: "https://via.placeholder.com/150?text=Company+B",
    },
    // Add more companies as needed
  ];

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {companies.map((company, index) => (
          <CustomCard key={index} company={company} />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          variant="primary"
          onClick={() => alert("Redirect to reservation form")}
        >
          Make Reservation
        </Button>
      </div>
    </div>
  );
};

export default Airlines;
