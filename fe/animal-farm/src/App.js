import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AnimalMarket from './components/AnimalMarket';
import Home from './components/Home';

let store = createStore(()=>{});


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/animalmarket" component={AnimalMarket}/>
            <hr />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/animalmarket">Animal Market</Link></li>
            </ul>
          </div>
        </Router>
      </Provider>
   );
  }
}

export default App;

