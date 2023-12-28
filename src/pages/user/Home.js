import React from "react";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";
import "./css/home.css"; // Import your CSS file for styling

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Your navigation bar */}
      <section className="hero-section">
        <div className="hero-image">
          {/* Image of Paris or any other desired image */}
        </div>
      </section>
      <section className="trips-section">
        <Container>
          <h2>Our Organised Trips</h2>
          <Row>
            <Col md={4}>
              <Card>{/* Card for the first trip/promo */}</Card>
            </Col>
            <Col md={4}>
              <Card>{/* Card for the second trip/promo */}</Card>
            </Col>
            <Col md={4}>
              <Card>{/* Card for the third trip/promo */}</Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
