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

  genShowing(target, isAdding) {
    const currentShowing = new Set([...this.state.showing]);
    if (isAdding) {
      return Array.from(currentShowing.add(target));
    }
    currentShowing.delete(target);
    return Array.from(currentShowing);
  }

  handleCheckboxChange(e) {
    const animalType = e.target.name;
    const isChecked = e.target.checked;
    this.setState({
      showing: this.genShowing(animalType, isChecked)
    })
  }

  render() {
    return (
      <label>Donkeys
        <input 
          name='donkeys'
          type='checkbox'
          checked={this.state.showing.includes('donkeys')}
          onChange={this.handleCheckboxChange}
        /> 
      </label>
    );
    // console.log('in render this.state.showing : ', this.state.showing)
    // const testAnimalList = ['donkeys', 'snakes', 'pigs', 'lions'];
    // let animals = testAnimalList.map(testAnimal => {
      // return (
        // <label>{testAnimal}
          // <input 
            // name={testAnimal}
            // type='checkbox'
            // checked={this.state.showing.includes(testAnimal)}
            // onChange={this.handleCheckboxChange}
          // /> 
        // </label>
      // );
    // });
    // return (
      // <div>
        // {animals}
      // </div>
    // );
  }
}
export default Animals;
