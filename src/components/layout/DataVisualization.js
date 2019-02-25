import React, { Component } from 'react'

class DataVisualization extends Component {
  render() {
    return (
      <div>
        <img 
          src="https://cdn-images-1.medium.com/max/2600/1*6XAf0oi88MRCBbCd_cHcew.png"
          style={{
            width: "100%",
            height: "150px"
          }} 
          className="mb-3"
          alt="this is data visualization"
        />

        <h5>Data Visualization</h5>

        <p>
          We make the toughest charts
          easy to read. Understand how to 
          interpret shot charts, player movement 
          and any type of data visualization tool 
          used in sports. 
        </p>
      </div>
    )
  }
}

export default DataVisualization;
