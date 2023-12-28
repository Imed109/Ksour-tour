import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHotel, removeHotel } from "../../JS/hotelsSlice"; // Import actions from hotelsSlice
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const AdminHotels = () => {
  const [newHotel, setNewHotel] = useState({
    name: "",
    image: "",
    description: "",
  });
  const hotels = useSelector((state) => state.hotels.list); // Adjust the state path according to your hotels slice
  const dispatch = useDispatch();

  const handleAddHotel = () => {
    dispatch(addHotel(newHotel));
    setNewHotel({ name: "", image: "", description: "" });
  };

  const handleRemoveHotel = (hotelName) => {
    dispatch(removeHotel(hotelName));
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "90%" }}
    >
      <div>
        <h2 className="mb-4">Hotels List</h2>
        <div className="mb-4">
          <h3>Add Hotel</h3>
          <Form>
            <Form.Group controlId="hotelName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={newHotel.name}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelImage">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={newHotel.image}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="hotelDescription">
              <Form.Control
                type="text"
                placeholder="Description"
                value={newHotel.description}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, description: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddHotel}>
              Add
            </Button>
          </Form>
        </div>
        <div>
          <h3>Hotels List</h3>
          <ListGroup>
            {hotels.map((hotel, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {hotel.name}
                <Button
                  variant="danger"
                  onClick={() => handleRemoveHotel(hotel.name)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
  );
};

export default AdminHotels;
