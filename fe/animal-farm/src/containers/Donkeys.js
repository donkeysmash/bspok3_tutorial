import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DonkeyList from '../components/DonkeyList';
import { requestDonkeys } from '../actions/actions';

class Donkeys extends Component {
  componentDidMount() {
    requestDonkeys(this.props.dispatch);
  }

  render() {
    const { donkeys, animalType, isFetching } = this.props;
    return (
      <div>
        <DonkeyList donkeys={donkeys} />
      </div>
    );
  }
}

const mapStateToProps = ({donkeys, animalType, isFetching}) => ({ donkeys, animalType, isFetching });


export default connect(mapStateToProps)(Donkeys);
