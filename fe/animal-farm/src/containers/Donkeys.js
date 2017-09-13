import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DonkeyList from '../components/DonkeyList';
import {
  purgeDonkeys,
  requestDonkeys,
  populateDonkeys
} from '../actions/actions';

class Donkeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populateCount: 10
    };
  }

  componentDidMount() {
    requestDonkeys(this.props.dispatch);
  }

  // TODO: Broken UX cannot delete all the numbers
  handleInputChange(e) {
    let count = parseInt(e.target.value) || 1;
    if (count > 1000) {
      count = 1000;
    }
    this.setState({
      populateCount: count
    });
  }

  render() {
    const { donkeys, animalType, isFetching, receivedAt } = this.props.state;
    const {populateCount} = this.state;
    const plural = populateCount === 1 ? '': 's';
    return (
      <div>
        <h3>{animalType}</h3>
        <DonkeyList donkeys={donkeys} />
        <form
          onSubmit={e => {
            e.preventDefault()
            populateDonkeys(this.props.dispatch, this.state.populateCount)
          }}
        >
          <input type='text' value={populateCount} onChange={(e) => this.handleInputChange(e)} />
          <input type='submit' value={`Populate ${this.state.populateCount} Donkey${plural}`} />
        </form>
        <form
          onSubmit={e => {
            e.preventDefault()
            purgeDonkeys(this.props.dispatch)
          }}
        >
          <button type='submit'>Purge Donkeys</button>
        </form>
        <p>Retrieved at {(new Date(receivedAt)).toString()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(Donkeys);
