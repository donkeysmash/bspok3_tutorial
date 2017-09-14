import { combineReducers } from 'redux';
import donkeys, * as fromDonkeys from './donkeys';
import showing from './showing';

const combinedReducer = combineReducers({
  donkeys,
  showing
});

export default combinedReducer;

export const getDonkeys = (state) => fromDonkeys.getDonkeys(state);

