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
  componentDidMount() {
    requestDonkeys(this.props.dispatch);
  }

  render() {
    const { donkeys, animalType, isFetching, receivedAt } = this.props.state;
    return (
      <div>
        <h3>{animalType}</h3>
        <DonkeyList donkeys={donkeys} />
        <form
          onSubmit={e => {
            e.preventDefault()
            populateDonkeys(this.props.dispatch)
          }}
        >
          <button type='submit'>Populate Donkeys</button>
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
