import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import DataVisualization from './DataVisualization';
import GameModeling from './GameModeling';
import GameStats from './GameStats';
import Algorithms from './Algorithms';

export default class Categories extends Component {
  render() {
    return (
      <Container>
        <p className="mb-5">StatRookie is a sports analytics learning platform for fans and athletes. We teach key sports analytics concepts that integrate cognitive training with real in game stats. </p>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <DataVisualization />
            </div>
            <div className="col-sm">
              <GameModeling />
            </div>
            <div className="col-sm">
              <GameStats />
            </div>
            <div className="col-sm">
              <Algorithms />
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
