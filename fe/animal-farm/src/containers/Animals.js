import React, { Component } from 'react';
import { connect } from 'react-redux';
import Donkeys from './Donkeys';
import {requestDonkeys} from '../actions/actions';

class Animals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: ['donkeys']
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentWillMount() {
    requestDonkeys(this.props.dispatch);
  }

  handleCheckboxChange(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    let nextShowing = new Set(this.state.showing);
    isChecked ? nextShowing.add(name) : nextShowing.delete(name);
    this.setState({ showing: Array.from(nextShowing) });
  }

  render() {
    const showingDonkey = this.state.showing.includes('donkeys');
    return (
      <div>
        <label>Donkeys
          <input
            name='donkeys'
            type='checkbox'
            checked={showingDonkey}
            onChange={this.handleCheckboxChange}
          />
        </label>
        {showingDonkey ? <Donkeys /> : null}
      </div>
    );
  }
}

export default connect()(Animals);
