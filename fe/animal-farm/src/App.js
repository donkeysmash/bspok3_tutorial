import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DonkeyMarket from './containers/Donkeys';
import Home from './components/Home';
import donkeyList from './reducers/reducers';

let store = createStore(donkeyList);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/donkeymarket" component={DonkeyMarket}/>
            <hr />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/donkeymarket">Donkey Market</Link></li>
            </ul>
          </div>
        </Router>
      </Provider>
   );
  }
}

export default App;

