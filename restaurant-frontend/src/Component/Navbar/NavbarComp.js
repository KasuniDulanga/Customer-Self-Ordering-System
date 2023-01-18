import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavbarComp.css';
import {Link} from 'react-router-dom';




function NavbarComp(props) {
  return (
    
      <Navbar className="navbar" variant='dark' expand="lg">
        <Container className ="navbarContainer">
          <Navbar.Brand href="/">MacFood</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-1 mb-lg-0">

              <Nav.Link className="navlink" as={Link} to="/">{props.link1}</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/login">{props.link2}</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/login">{props.link3}</Nav.Link>
              <Nav.Link className="navlink" as={Link} to="/login">{props.link4}</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        
  );
}

export default NavbarComp;