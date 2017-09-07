export const types = { 
  ADD_TODO: 'ADD_TODO' 
};

let count = 0;

export function addTodo(text) {
  return { id: count++, type: types.ADD_TODO, text };
}
