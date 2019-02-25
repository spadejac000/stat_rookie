import React, { Component } from 'react'

class GameStats extends Component {
  render() {
    return (
      <div>
        <img 
          src="https://static.hudl.com/craft/dirk-nowitzki-shot-chart.jpg?mtime=20160427100121"
          style={{
            width: "100%",
            height: "150px"
          }} 
          className="mb-3"
          alt="graph of sports stats"
        />
        <h5>Game Stats</h5>  

        <p>
          Get a breakdown of how
  game stats are calculated 
  and why they are important.
        </p>
      </div>
    )
  }
}

export default GameStats;
