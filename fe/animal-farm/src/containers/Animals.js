import React, { Component } from 'react';
import Donkeys from './Donkeys';

class Animals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: []
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  // genShowing(arr, target, isAdding) {
    // let set = new Set([...arr]);
    // if (isAdding) {
      // return Array.from(set.add(target));
    // }
    // set.delete(target);
    // return Array.from(set);
  // }

  handleCheckboxChange(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    let nextShowing = new Set(this.state.showing);
    isChecked ? nextShowing.add(name) : nextShowing.delete(name);

    // if (isChecked) {
      // nextShowing.add(name);
    // } else {
      // nextShowing.delete(name);
    // }
    this.setState({ showing: Array.from(nextShowing) });
  }

  render() {
    // return (
      // <label>Donkeys
        // <input
          // name='donkeys'
          // type='checkbox'
          // checked={this.state.showing.includes('donkeys')}
          // onChange={this.handleCheckboxChange}
        // />
      // </label>
    // );
    console.log('in render this.state.showing : ', this.state.showing)
    const testAnimalList = ['donkeys', 'snakes', 'pigs', 'lions'];
    let animals = testAnimalList.map(testAnimal => {
      return (
        <label>{testAnimal}
          <input
            name={testAnimal}
            type='checkbox'
            checked={this.state.showing.includes(testAnimal)}
            onChange={this.handleCheckboxChange}
          />
        </label>
      );
    });
    return (
      <div>
        {animals}
      </div>
    );
  }
}
export default Animals;
