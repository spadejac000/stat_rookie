import React, { Component } from 'react'
import {Container} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="bg-light mt-5 pt-3 pb-3 footer navbar-fixed-bottom">
        <Container>
          <div className="text-right">
            <span>Contact Us</span>
            <i className="fab fa-twitter-square"></i>
          </div>
        </Container>
      </div>
    )
  }
}

export default Footer;
