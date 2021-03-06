import React, { Component } from 'react'
import {Container} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div 
        className="bg-light mt-5 pt-3 pb-3 footer navbar-fixed-bottom"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "100px",
          width: "100%"
        }}
      >
        <Container>
          <div className="text-right">
            <span>Contact Us</span>
            <a href="https://twitter.com/statrookie">
              <i 
                className="fab fa-twitter-square" 
                style={{
                  marginLeft: "8px",
                  color: "#38A1F3",
                  fontSize: '24px'
                }}>
              </i>
            </a>
            <a href="mailto:info@statrookie.com" target="_top">
              <i 
                className="fas fa-envelope-square" 
                style={{
                  marginLeft: "8px",
                  color: "#d44638",
                  fontSize: '24px'
                }}>
              </i>
            </a>
          </div>
        </Container>
      </div>
    )
  }
}

export default Footer;
