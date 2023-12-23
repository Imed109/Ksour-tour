import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Formulaire = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    telephone: "",
    inquiryType: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form Data:", formData);
      setFormData({
        fullName: "",
        age: "",
        email: "",
        telephone: "",
        inquiryType: "",
        request: "",
      });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.age.trim() !== "" &&
      parseInt(formData.age) > 0 &&
      formData.email.trim() !== "" &&
      formData.telephone.trim() !== "" &&
      formData.inquiryType.trim() !== "" &&
      formData.request.trim() !== ""
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>Nom complet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom complet"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Entrez votre âge"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="telephone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Entrez votre numéro de téléphone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="inquiryType">
              <Form.Label>Type de demande</Form.Label>
              <Form.Control
                as="select"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un type de demande</option>
                <option value="Flights">Vols</option>
                <option value="Ferries">Ferries</option>
                <option value="Omra">Omra</option>
                <option value="General">Question générale</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="request">
              <Form.Label>Demande</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Entrez votre demande"
                name="request"
                value={formData.request}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulaire;
