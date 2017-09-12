const url = 'http://192.168.99.100:5000/donkeys';
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

export const REQUEST_START = 'REQUEST_START';
export const RECEIVE_DONKEYS = 'RECEIVE_DONKEYS';

export const requestDonkeys = (dispatch) => {
  dispatch({ type: REQUEST_START });
  refreshDonkeys(dispatch);
};

export const populateDonkeys = (dispatch, populateCount) => {
  dispatch({ type: REQUEST_START });
  var formData = new FormData();
  formData.append('count', populateCount);
  apiCall('/populate', POST, formData)
  .then(refreshDonkeys(dispatch));
};

export const purgeDonkeys = (dispatch) => {
  dispatch({ type: REQUEST_START });
  apiCall('/purge', POST)
  .then(refreshDonkeys(dispatch));
};

const refreshDonkeys = (dispatch) => {
  apiCall('', GET)
  .then(response => response.json())
  .then(json => dispatch(receiveDonkeys(json)));
};

const receiveDonkeys = (data) => ({
  type: RECEIVE_DONKEYS,
  donkeys: data,
  receivedAt: Date.now()
});

const apiCall = (endpoint, method, formdata) => {
  return fetch(`${url}${endpoint}`, {
    method: method,
    body: formdata
  });
};
