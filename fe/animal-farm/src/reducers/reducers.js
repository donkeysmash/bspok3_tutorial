import {
  REQUEST_DONKEYS,
  RECEIVE_DONKEYS,
  receiveDonkeys
} from '../actions/actions';

const initialState = {
  isFetching: false,
  animalType: "donkey",
  donkeys: [],
  receivedAt: 0
};


function donkeyList(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_DONKEYS:
      return Object.assign({}, state, {
        isFetching: false,
        animalType: "donkey",
        donkeys: action.donkeys
      });
    case REQUEST_DONKEYS:
    default:
      return state;
  }
}
