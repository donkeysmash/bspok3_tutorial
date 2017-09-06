import React, {Component} from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="currentTime">
        <p>It is {this.state.time.toLocaleTimeString()}</p>
      </div>

    );
  }
}

export default CurrentTime;
