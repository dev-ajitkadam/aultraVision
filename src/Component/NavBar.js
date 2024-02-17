import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <div className="navbar pt-0">
      <Navbar
        variant="light"
        expand="lg"
        className="form-control-lg text-light bg-custom-color"
        style={{ border: 'none', borderRadius: 0 ,}}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="mr-5 px-5 flex-fill text-light">
            ALTRAAVISON
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
              <Button variant="outline-primary" className="me-2">
                Login
              </Button>
              <Button variant="primary">Sign-up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
