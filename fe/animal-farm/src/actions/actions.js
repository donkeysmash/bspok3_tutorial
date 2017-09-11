export const REQUEST_DONKEYS = 'REQUEST_DONKEYS';
export function requestDonkeys() {
  return {
    type: REQUEST_DONKEYS
  }
}

export const RECEIVE_DONKEYS = 'RECEIVE_DONKEYS';
export function receiveDonkeys(json) {
  return {
    type: RECEIVE_DONKEYS,
    donkeys: json.data.children.map(child => child.data)
    receivedAt: Date.now()
  }
}

