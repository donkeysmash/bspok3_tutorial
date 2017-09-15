const url = 'http://192.168.99.100:5000/donkeys';
const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';

export const REQUEST_START = 'REQUEST_START';
export const RECEIVE_DONKEYS = 'RECEIVE_DONKEYS';
export const CHANGE_ANIMAL_TYPE = 'CHANGE_ANIMAL_TYPE';

export const requestDonkeys = (dispatch) => {
  dispatch({ type: REQUEST_START });
  getDonkeys(dispatch);
};

export const populateDonkeys = (dispatch, populateCount) => {
  // console.log(dispatch)
  // console.log(populateCount)
  // dispatch({ type: REQUEST_START });
  // var formData = new FormData();
  // formData.append('count', populateCount);
  // apiCall('/populate', POST, formData)
  // .then(getDonkeys(dispatch));
};

export const purgeDonkeys = (dispatch) => {
  dispatch({ type: REQUEST_START });
  apiCall('/purge', POST)
  .then(getDonkeys(dispatch));
};

export const selectAnimalType = (targetAnimals) => ({
  type: CHANGE_ANIMAL_TYPE,
  targetAnimals
});

const getDonkeys = (dispatch) => {
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
