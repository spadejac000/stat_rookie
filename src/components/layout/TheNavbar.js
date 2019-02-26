import React, { Component } from 'react';
import {Navbar, Nav, Image, Container} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class TheNavbar extends Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (

      
        <div style={{ height: '5vh' }}>
          {this.state.isTop 
          
            ? 

              <Navbar 
                bg="light" 
                expand="lg"
                className="pt-3 pb-3 mb-5 fixed-top" 
              >
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/categories">
                        <Nav.Link>Categories</Nav.Link>
                      </LinkContainer>
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
              
            : 
            
              <Navbar 
                bg="dark" 
                expand="lg"
                className="fixed-top pt-3 pb-3 mb-5" 
              >
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <LinkContainer to="/">
                        <Nav.Link 
                          className="text-light"
                        >
                          Home
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/categories">
                        <Nav.Link
                          className="text-light"
                        >
                          Categories
                        </Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
                  <Navbar.Brand 
                    href="#home" 
                    style={{
                      transform: "translateX(-50%)",
                      left: "50%",
                      position: "absolute"
                    }}>
                    <Image src="assets/lightlogo.png" style={{width: "150px"}} />
                  </Navbar.Brand>
                </Container>
              </Navbar>
            }
        </div>

    )
  }
}

export default TheNavbar;