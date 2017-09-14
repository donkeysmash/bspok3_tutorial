import { CHANGE_ANIMAL_TYPE } from '../actions/actions';

const showing = (state = [], action) => {
  const { type, targetAnimals } = action;
  switch(type) {
    case CHANGE_ANIMAL_TYPE:
      return targetAnimals;
    default:
      return state;
  }

};

export default showing;
