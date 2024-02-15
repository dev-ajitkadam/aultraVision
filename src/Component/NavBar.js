import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar variant="light" expand="lg" className="p-2 form-control-lg text-light d-flex bg-custom-color">
      <Navbar.Brand as={Link} to="/" className="mr-5 px-5 p-1 flex-fill text-light">
        AltraVision
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto p-1 flex-fill">
          <Nav.Link as={Link} to="/" className="nav-link text-light">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="nav-link text-light">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link text-light">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link text-light">
            Contact Us
          </Nav.Link>
        </Nav>

        <div className="col-md-3 text-end">
          <Button variant="outline-primary" className="me-2">Login</Button>
          <Button variant="primary">Sign-up</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
