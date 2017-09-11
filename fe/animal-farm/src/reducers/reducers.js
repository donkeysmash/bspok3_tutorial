import {
  REQUEST_DONKEYS,
  RECEIVE_DONKEYS,
  receiveDonkeys
} from '../actions/actions';

const initialState = {
  isFetching: false,
  animalType: "donkey",
  donkeys: [
    {
      "id": "b9923jgjsdlkjqnwqmzc",
      "name": "mega donkey",
      "age": 42
    }, {
      "id": "abjbj099022bzmzxdfna",
      "name": "beidou",
      "age": 21
    }
  ],
  receivedAt: 0
};

const donkeyList = (state = initialState, action) => {
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
};


export default donkeyList;
