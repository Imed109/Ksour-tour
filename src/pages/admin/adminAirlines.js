import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, removeCompany } from "../../JS/airlinesSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

const AdminAirlines = () => {
  const [newCompany, setNewCompany] = useState({ name: "", image: "" });
  const companies = useSelector((state) => state.airlines.list);
  const dispatch = useDispatch();

  const handleAddCompany = () => {
    dispatch(addCompany(newCompany));
    setNewCompany({ name: "", image: "" });
  };

  const handleRemoveCompany = (companyName) => {
    dispatch(removeCompany(companyName));
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh", width: "90%" }} // Adjust the width here
    >
      <div>
        <h2 className="mb-4">Airlines List</h2> 
        <div className="mb-4">
          <h3>Add Company</h3>
          <Form>
            <Form.Group controlId="companyName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={newCompany.name}
                onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="companyImage">
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={newCompany.image}
                onChange={(e) => setNewCompany({ ...newCompany, image: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddCompany}>
              Add
            </Button>
          </Form>
        </div>
        <div>
          <h3>Companies List</h3>
          <ListGroup>
            {companies.map((company, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {company.name}
                <Button variant="danger" onClick={() => handleRemoveCompany(company.name)}>
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

export default AdminAirlines;
