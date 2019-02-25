import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Container} from 'react-bootstrap';

class TheNavbar extends Component {
  render() {
    return (

      <Navbar bg="light pt-3 pb-3" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand 
            href="#home" 
            style={{
              transform: "translateX(-50%)",
              left: "50%",
              position: "absolute"
            }}>
            <Image src="assets/darklogo.png" style={{width: "150px"}} />
          </Navbar.Brand>
        </Container>
      </Navbar>

    )
  }
}

export default TheNavbar;