import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import TheNavbar from './components/layout/TheNavbar';
import Landing from './components/layout/Landing'; 
import Footer from './components/layout/Footer';
import Categories from './components/layout/Categories';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <TheNavbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/categories" component={Categories} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
