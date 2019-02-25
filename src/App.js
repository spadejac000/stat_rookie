import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TheNavbar from './components/layout/TheNavbar';
import Landing from './components/layout/Landing'; 
import Footer from './components/layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TheNavbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
