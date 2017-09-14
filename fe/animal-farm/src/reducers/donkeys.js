import {
  REQUEST_START,
  RECEIVE_DONKEYS,
  receiveDonkeys
} from '../actions/actions';


const initialState = {
  data: [],
  isFetching: false,
  receivedAt: 0
};

const donkeys = (state = initialState, action) => {
  const {type, donkeys, receivedAt} = action;
  switch(type) {
    case RECEIVE_DONKEYS:
      return Object.assign({}, state, {
        isFetching: false,
        data: donkeys,
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


export default donkeys;

export const getDonkeys = (state) => {
  return state.donkeys;
};
