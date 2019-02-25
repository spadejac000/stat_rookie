import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <Container>
        <p className="mt-5">StatRookie trains fans and athletes into analytics all-stars. From analyzing box scores to developing algorithms; we can up your game.</p>
        <div className="text-center">
          <Link to="/">
            <Button className="btn-lg">Learn More </Button>
          </Link>
        </div>
      </Container>
    )
  }
}

export default Landing;