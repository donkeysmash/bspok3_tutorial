import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.startCount
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.start) {
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1
        };
      } else {
        return {
          count: 0
        };
      }
    });
  }

  render() {
    return (
      <div className="countdown">
        <p>{this.state.count}</p>
      </div>
    );
  }

}


export default Countdown;
