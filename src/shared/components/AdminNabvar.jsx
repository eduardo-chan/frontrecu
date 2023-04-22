//pa crear es rafce

import React, { useContext } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const AdminNabvar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/fabricante" className="ms-1 nav-link">
              fabricante3
            </Link>

            <Link to="/fabricante" className="ms-1 nav-link">
              Fabricante1 
            </Link>
            <Link to="/fabricante" className="ms-1 nav-link">
              Fabricante2
            </Link>
            <Link to="/fabricante" className="ms-1 nav-link">
              Fabricante4 
            </Link>
            <Link to="/fabricante" className="ms-1 nav-link">
              Fabricante5 
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
