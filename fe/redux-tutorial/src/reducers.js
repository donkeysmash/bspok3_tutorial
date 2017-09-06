
import {
  VisibilityFilters,
  ADD_TODO, TOGGLE_TODO
} from './actions';

const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
};

function todos(state=[], action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: actions.text,
            completed: false
          }
        ]
      });
    // case TOGGLE_TODO:
      // return 
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
        })
      });
    default:
      return state;
  }
}



