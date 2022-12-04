import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavbarComp.css';
import {Link} from 'react-router-dom';




function NavbarComp() {
  return (
    
      <Navbar className="navbar" variant='dark' expand="lg">
        <Container className ="navbarContainer">
          <Navbar.Brand href="#home"><h2>MacFood</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0">

              <Nav.Link className="navlink" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        
  );
}

export default NavbarComp;