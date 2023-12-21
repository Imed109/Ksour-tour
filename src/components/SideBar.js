import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/admin/dashboard">
        Dashboard
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/clients">
        Clients
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/client-requests">
        Client Requests
      </Nav.Link>
      {/* Add more admin-specific links as needed */}
    </Nav>
  );
};

export default Sidebar;
