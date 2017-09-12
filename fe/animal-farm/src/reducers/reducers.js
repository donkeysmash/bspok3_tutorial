import { fromJS } from 'immutable';
import {
  REQUEST_START,
  RECEIVE_DONKEYS,
  receiveDonkeys
} from '../actions/actions';

const initialState = {
  isFetching: false,
  animalType: 'donkey',
  donkeys: [],
  receivedAt: 0
};

const donkeyList = (state = initialState, action) => {
  const {type, donkeys, receivedAt} = action;
  switch(type) {
    case RECEIVE_DONKEYS:
      // return fromJS({
        // isFetching: false,
        // animalType: "donkey",
        // donkeys: donkeys,
        // receivedAt: receivedAt
      // });
      return Object.assign({}, state, {
        isFetching: false,
        donkeys,
        receivedAt
      });
    case REQUEST_START:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};


export default donkeyList;
