import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Shop Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/shops">My Shops</Link></Nav.Link>
          <Nav.Link><Link to="/products">My Produicts</Link></Nav.Link>
          <Nav.Link><Link to="/warehouse">My Warehouse</Link></Nav.Link>
          <Nav.Link><Link to="/finance">My Finance</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
