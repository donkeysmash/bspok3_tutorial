import { types } from '../actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    default:
      return state;
  }

}

export default todoReducer;
