import React from "react";
import { Card, Button } from "react-bootstrap";

const omra = () => {
  // Sample list of Omra offers (replace this with your data)
  const omraOffers = [
    {
      id: 1,
      title: "Standard Package",
      description: "Basic accommodation and travel package for Umrah.",
      price: "$1000",
    },
    {
      id: 2,
      title: "Premium Package",
      description: "Luxury accommodation and travel package for Umrah.",
      price: "$2000",
    },
    // Add more offers as needed
  ];

  return (
    <div>
      <h2>Omra Offers</h2>
      {omraOffers.map((offer) => (
        <Card key={offer.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Title>{offer.title}</Card.Title>
            <Card.Text>{offer.description}</Card.Text>
            <Card.Text>Price: {offer.price}</Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default omra;
