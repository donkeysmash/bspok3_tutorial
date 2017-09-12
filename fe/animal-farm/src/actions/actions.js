export const REQUEST_DONKEYS = 'REQUEST_DONKEYS';
export const RECEIVE_DONKEYS = 'RECEIVE_DONKEYS'; 


export const requestDonkeys = (dispatch) => {
  dispatch({ type: REQUEST_DONKEYS });
  fetch('http://192.168.99.100:5000/donkeys')
  .then(response => response.json())
  .then(json => dispatch(receiveDonkeys(json)))
};
const receiveDonkeys = (data) => ({
  type: RECEIVE_DONKEYS,
  donkeys: data,
  receivedAt: Date.now()
});


