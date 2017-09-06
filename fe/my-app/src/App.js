import React, { Component } from 'react';
import CurrentTime from './CurrentTime.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numTimer: 0 };
  }

  addCurrentTime() {
    this.setState((prevState) => ({numTimer: prevState.numTimer + 1}));
  }

  render() {
    let timers = [];
    for (let i=0; i<this.state.numTimer; i++) {
      timers.push(
        <CurrentTime />
      );
    }
    return (
      <div className="App">
        {timers}
        <button onclick={this.addCurrentTime}>
          add current time
        </button>
      </div>
    );
  }
}

export default App;
