import React, { Component } from 'react';
import CurrentTime from './CurrentTime.js';
import Countdown from './Countdown.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      numTimer: 0,
      counterStarted: false,
      count: 10
    };
  }

  addCurrentTime() {
    this.setState((prevState) => ({numTimer: prevState.numTimer + 1}));
  }

  removeAllCurrentTimes() {
    this.setState({numTimer: 0});
  }

  startCounting() {
    this.setState({counterStarted: true});
  }

  stopCounting() {
    this.setState({counterStarted: false});
  }

  render() {
    let timers = [];
    for (let i=0; i<this.state.numTimer; i++) {
      timers.push(
        <CurrentTime key={i} />
      );
    }
    return (
      <div className="App">
        <h3>Current Times</h3>
        {timers}
        <button onClick={(e) => this.addCurrentTime(e)}>
          add current time
        </button>
        <button onClick={(e) => this.removeAllCurrentTimes(e)}>
          rm all current times
        </button>
        <h3>Countdowns</h3>
        <Countdown startCount={this.state.count} start={this.state.counterStarted}/>
        {(this.state.counterStarted
          ? <button onClick={(e) => this.stopCounting(e)}>stop</button>
          : <button onClick={(e) => this.startCounting(e)}>start</button>
        )}
      </div>
    );
  }
}

export default App;
