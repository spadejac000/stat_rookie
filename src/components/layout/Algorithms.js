import React, { Component } from 'react'

class Algorithms extends Component {
  render() {
    return (
      <div>
        <img 
          src="https://media.wired.com/photos/5af2249a0b975d475fa7afbf/master/pass/algorithms_landlord-FINAL.jpg"
          style={{
            width: "100%",
            height: "150px"
          }} 
          className="mb-3"
          alt="an algorithm"
        />
        <h5>Algorithms</h5>

        <p>
          Dive into the math behind 
  some of the most advance
  decision making in sports.
  Understand how algorithms
  are changing how games are 
  played.  
        </p>
      </div>
    )
  }
}

export default Algorithms;