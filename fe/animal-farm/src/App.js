import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Animals from './containers/Animals';
import combinedReducer from './reducers';

let store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/animals" component={Animals} />
          </div>
        </Router>
      </Provider>
   );
  }
}

export default App;
