import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOffer, removeOffer } from "../../JS/omraSlice"; // Update the path to your omraSlice
import { Form, Button, Container, Row, Col, ListGroup } from "react-bootstrap";

const AdminOmra = () => {
  const [newOffer, setNewOffer] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const offers = useSelector((state) => state.omra.offers);
  const dispatch = useDispatch();

  const handleAddOffer = () => {
    dispatch(addOffer(newOffer));
    setNewOffer({
      title: "",
      description: "",
      price: "",
      image: "",
    });
  };

  const handleRemoveOffer = (offer) => {
    dispatch(removeOffer(offer));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div>
            <h2>Admin Omra Offers</h2>
            <Form>
              <h3>Add Offer</h3>
              <Form.Group controlId="offerTitle">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={newOffer.title}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, title: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="offerDescription">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  value={newOffer.description}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, description: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="offerPrice">
                <Form.Control
                  type="text"
                  placeholder="Price"
                  value={newOffer.price}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="offerImage">
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  value={newOffer.image}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, image: e.target.value })
                  }
                />
              </Form.Group>
              <Button variant="primary" onClick={handleAddOffer} block>
                Add
              </Button>
            </Form>
          </div>
          <div>
            <h3>Offers List</h3>
            <ListGroup>
              {offers.map((offer, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {offer.title}
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveOffer(offer)}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOmra;
